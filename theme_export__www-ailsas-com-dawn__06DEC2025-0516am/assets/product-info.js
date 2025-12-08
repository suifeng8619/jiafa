if (!customElements.get('product-info')) {
  customElements.define(
    'product-info',
    class ProductInfo extends HTMLElement {
      quantityInput = undefined;
      quantityForm = undefined;
      onVariantChangeUnsubscriber = undefined;
      cartUpdateUnsubscriber = undefined;
      abortController = undefined;
      pendingRequestUrl = null;
      preProcessHtmlCallbacks = [];
      postProcessHtmlCallbacks = [];

      constructor() {
        super();

        this.quantityInput = this.querySelector('.quantity__input');
      }

      connectedCallback() {
        this.initializeProductSwapUtility();

        this.onVariantChangeUnsubscriber = subscribe(
          PUB_SUB_EVENTS.optionValueSelectionChange,
          this.handleOptionValueChange.bind(this)
        );

        this.initQuantityHandlers();
        this.dispatchEvent(new CustomEvent('product-info:loaded', { bubbles: true }));
      }

      addPreProcessCallback(callback) {
        this.preProcessHtmlCallbacks.push(callback);
      }

      initQuantityHandlers() {
        if (!this.quantityInput) return;

        this.quantityForm = this.querySelector('.product-form__quantity');
        if (!this.quantityForm) return;

        this.setQuantityBoundries();
        if (!this.dataset.originalSection) {
          this.cartUpdateUnsubscriber = subscribe(PUB_SUB_EVENTS.cartUpdate, this.fetchQuantityRules.bind(this));
        }
      }

      disconnectedCallback() {
        this.onVariantChangeUnsubscriber();
        this.cartUpdateUnsubscriber?.();
      }

      initializeProductSwapUtility() {
        this.preProcessHtmlCallbacks.push((html) =>
          html.querySelectorAll('.scroll-trigger').forEach((element) => element.classList.add('scroll-trigger--cancel'))
        );
        this.postProcessHtmlCallbacks.push((newNode) => {
          window?.Shopify?.PaymentButton?.init();
          window?.ProductModel?.loadShopifyXR();
          
          // 重新初始化 Klarna placement
          this.refreshKlarnaPlacement();
        });
      }

      handleOptionValueChange({ data: { event, target, selectedOptionValues } }) {
        if (!this.contains(event.target)) return;

        this.resetProductFormState();

        const productUrl = target.dataset.productUrl || this.pendingRequestUrl || this.dataset.url;
        this.pendingRequestUrl = productUrl;
        const shouldSwapProduct = this.dataset.url !== productUrl;
        const shouldFetchFullPage = this.dataset.updateUrl === 'true' && shouldSwapProduct;

        this.renderProductInfo({
          requestUrl: this.buildRequestUrlWithParams(productUrl, selectedOptionValues, shouldFetchFullPage),
          targetId: target.id,
          callback: shouldSwapProduct
            ? this.handleSwapProduct(productUrl, shouldFetchFullPage)
            : this.handleUpdateProductInfo(productUrl),
        });
      }

      resetProductFormState() {
        const productForm = this.productForm;
        productForm?.toggleSubmitButton(true);
        productForm?.handleErrorMessage();
      }

      handleSwapProduct(productUrl, updateFullPage) {
        return (html) => {
          this.productModal?.remove();

          const selector = updateFullPage ? "product-info[id^='MainProduct']" : 'product-info';
          const variant = this.getSelectedVariant(html.querySelector(selector));
          this.updateURL(productUrl, variant?.id);

          if (updateFullPage) {
            document.querySelector('head title').innerHTML = html.querySelector('head title').innerHTML;

            HTMLUpdateUtility.viewTransition(
              document.querySelector('main'),
              html.querySelector('main'),
              this.preProcessHtmlCallbacks,
              this.postProcessHtmlCallbacks
            );
          } else {
            HTMLUpdateUtility.viewTransition(
              this,
              html.querySelector('product-info'),
              this.preProcessHtmlCallbacks,
              this.postProcessHtmlCallbacks
            );
          }
        };
      }

      renderProductInfo({ requestUrl, targetId, callback }) {
        this.abortController?.abort();
        this.abortController = new AbortController();

        fetch(requestUrl, { signal: this.abortController.signal })
          .then((response) => response.text())
          .then((responseText) => {
            this.pendingRequestUrl = null;
            const html = new DOMParser().parseFromString(responseText, 'text/html');
            callback(html);
          })
          .then(() => {
            // set focus to last clicked option value
            document.querySelector(`#${targetId}`)?.focus();
          })
          .catch((error) => {
            if (error.name === 'AbortError') {
              // Fetch aborted by user - removed console.log
            } else {
              console.error(error);
            }
          });
      }

      getSelectedVariant(productInfoNode) {
        const selectedVariant = productInfoNode.querySelector('variant-selects [data-selected-variant]')?.innerHTML;
        return !!selectedVariant ? JSON.parse(selectedVariant) : null;
      }

      buildRequestUrlWithParams(url, optionValues, shouldFetchFullPage = false) {
        const params = [];

        !shouldFetchFullPage && params.push(`section_id=${this.sectionId}`);

        if (optionValues.length) {
          params.push(`option_values=${optionValues.join(',')}`);
        }

        return `${url}?${params.join('&')}`;
      }

      updateOptionValues(html) {
        const variantSelects = html.querySelector('variant-selects');
        if (variantSelects) {
          HTMLUpdateUtility.viewTransition(this.variantSelectors, variantSelects, this.preProcessHtmlCallbacks);
        }
      }

      handleUpdateProductInfo(productUrl) {
        return (html) => {
          const variant = this.getSelectedVariant(html);

          this.pickupAvailability?.update(variant);
          this.updateOptionValues(html);
          this.updateURL(productUrl, variant?.id);
          this.updateVariantInputs(variant?.id);

          if (!variant) {
            this.setUnavailable();
            return;
          }

          this.updateMedia(html, variant?.featured_media?.id);

          const updateSourceFromDestination = (id, shouldHide = (source) => false) => {
            const source = html.getElementById(`${id}-${this.sectionId}`);
            const destination = this.querySelector(`#${id}-${this.dataset.section}`);
            if (source && destination) {
              destination.innerHTML = source.innerHTML;
              destination.classList.toggle('hidden', shouldHide(source));
            }
          };

          updateSourceFromDestination('price');
          updateSourceFromDestination('Sku', ({ classList }) => classList.contains('hidden'));
          updateSourceFromDestination('Inventory', ({ innerText }) => innerText === '');
          updateSourceFromDestination('Volume');
          updateSourceFromDestination('Price-Per-Item', ({ classList }) => classList.contains('hidden'));

          this.updateQuantityRules(this.sectionId, html);
          this.querySelector(`#Quantity-Rules-${this.dataset.section}`)?.classList.remove('hidden');
          this.querySelector(`#Volume-Note-${this.dataset.section}`)?.classList.remove('hidden');

          this.productForm?.toggleSubmitButton(
            html.getElementById(`ProductSubmitButton-${this.sectionId}`)?.hasAttribute('disabled') ?? true,
            window.variantStrings.soldOut
          );

          publish(PUB_SUB_EVENTS.variantChange, {
            data: {
              sectionId: this.sectionId,
              html,
              variant,
            },
          });
        };
      }

      updateVariantInputs(variantId) {
        this.querySelectorAll(
          `#product-form-${this.dataset.section}, #product-form-installment-${this.dataset.section}`
        ).forEach((productForm) => {
          const input = productForm.querySelector('input[name="id"]');
          input.value = variantId ?? '';
          input.dispatchEvent(new Event('change', { bubbles: true }));
        });
      }

      updateURL(url, variantId) {
        this.querySelector('share-button')?.updateUrl(
          `${window.shopUrl}${url}${variantId ? `?variant=${variantId}` : ''}`
        );

        if (this.dataset.updateUrl === 'false') return;
        window.history.replaceState({}, '', `${url}${variantId ? `?variant=${variantId}` : ''}`);
      }

      setUnavailable() {
        this.productForm?.toggleSubmitButton(true, window.variantStrings.unavailable);

        const selectors = ['price', 'Inventory', 'Sku', 'Price-Per-Item', 'Volume-Note', 'Volume', 'Quantity-Rules']
          .map((id) => `#${id}-${this.dataset.section}`)
          .join(', ');
        document.querySelectorAll(selectors).forEach(({ classList }) => classList.add('hidden'));
      }

      updateMedia(html, variantFeaturedMediaId) {
        if (!variantFeaturedMediaId) return;

        const mediaGallerySource = this.querySelector('media-gallery ul');
        const mediaGalleryDestination = html.querySelector(`media-gallery ul`);

        const refreshSourceData = () => {
          if (this.hasAttribute('data-zoom-on-hover')) enableZoomOnHover(2);
          const mediaGallerySourceItems = Array.from(mediaGallerySource.querySelectorAll('li[data-media-id]'));
          const sourceSet = new Set(mediaGallerySourceItems.map((item) => item.dataset.mediaId));
          const sourceMap = new Map(
            mediaGallerySourceItems.map((item, index) => [item.dataset.mediaId, { item, index }])
          );
          return [mediaGallerySourceItems, sourceSet, sourceMap];
        };

        if (mediaGallerySource && mediaGalleryDestination) {
          let [mediaGallerySourceItems, sourceSet, sourceMap] = refreshSourceData();
          const mediaGalleryDestinationItems = Array.from(
            mediaGalleryDestination.querySelectorAll('li[data-media-id]')
          );
          const destinationSet = new Set(mediaGalleryDestinationItems.map(({ dataset }) => dataset.mediaId));
          let shouldRefresh = false;

          // add items from new data not present in DOM
          for (let i = mediaGalleryDestinationItems.length - 1; i >= 0; i--) {
            if (!sourceSet.has(mediaGalleryDestinationItems[i].dataset.mediaId)) {
              mediaGallerySource.prepend(mediaGalleryDestinationItems[i]);
              shouldRefresh = true;
            }
          }

          // remove items from DOM not present in new data
          for (let i = 0; i < mediaGallerySourceItems.length; i++) {
            if (!destinationSet.has(mediaGallerySourceItems[i].dataset.mediaId)) {
              mediaGallerySourceItems[i].remove();
              shouldRefresh = true;
            }
          }

          // refresh
          if (shouldRefresh) [mediaGallerySourceItems, sourceSet, sourceMap] = refreshSourceData();

          // if media galleries don't match, sort to match new data order
          mediaGalleryDestinationItems.forEach((destinationItem, destinationIndex) => {
            const sourceData = sourceMap.get(destinationItem.dataset.mediaId);

            if (sourceData && sourceData.index !== destinationIndex) {
              mediaGallerySource.insertBefore(
                sourceData.item,
                mediaGallerySource.querySelector(`li:nth-of-type(${destinationIndex + 1})`)
              );

              // refresh source now that it has been modified
              [mediaGallerySourceItems, sourceSet, sourceMap] = refreshSourceData();
            }
          });
        }

        // set featured media as active in the media gallery
        this.querySelector(`media-gallery`)?.setActiveMedia?.(
          `${this.dataset.section}-${variantFeaturedMediaId}`,
          true
        );

        // update media modal
        const modalContent = this.productModal?.querySelector(`.product-media-modal__content`);
        const newModalContent = html.querySelector(`product-modal .product-media-modal__content`);
        if (modalContent && newModalContent) modalContent.innerHTML = newModalContent.innerHTML;
      }

      setQuantityBoundries() {
        const data = {
          cartQuantity: this.quantityInput.dataset.cartQuantity ? parseInt(this.quantityInput.dataset.cartQuantity) : 0,
          min: this.quantityInput.dataset.min ? parseInt(this.quantityInput.dataset.min) : 1,
          max: this.quantityInput.dataset.max ? parseInt(this.quantityInput.dataset.max) : null,
          step: this.quantityInput.step ? parseInt(this.quantityInput.step) : 1,
        };

        let min = data.min;
        const max = data.max === null ? data.max : data.max - data.cartQuantity;
        if (max !== null) min = Math.min(min, max);
        if (data.cartQuantity >= data.min) min = Math.min(min, data.step);

        this.quantityInput.min = min;

        if (max) {
          this.quantityInput.max = max;
        } else {
          this.quantityInput.removeAttribute('max');
        }
        this.quantityInput.value = min;

        publish(PUB_SUB_EVENTS.quantityUpdate, undefined);
      }

      fetchQuantityRules() {
        const currentVariantId = this.productForm?.variantIdInput?.value;
        if (!currentVariantId) return;

        this.querySelector('.quantity__rules-cart .loading__spinner').classList.remove('hidden');
        fetch(`${this.dataset.url}?variant=${currentVariantId}&section_id=${this.dataset.section}`)
          .then((response) => response.text())
          .then((responseText) => {
            const html = new DOMParser().parseFromString(responseText, 'text/html');
            this.updateQuantityRules(this.dataset.section, html);
          })
          .catch((e) => console.error(e))
          .finally(() => this.querySelector('.quantity__rules-cart .loading__spinner').classList.add('hidden'));
      }

      updateQuantityRules(sectionId, html) {
        if (!this.quantityInput) return;
        this.setQuantityBoundries();

        const quantityFormUpdated = html.getElementById(`Quantity-Form-${sectionId}`);
        const selectors = ['.quantity__input', '.quantity__rules', '.quantity__label'];
        for (let selector of selectors) {
          const current = this.quantityForm.querySelector(selector);
          const updated = quantityFormUpdated.querySelector(selector);
          if (!current || !updated) continue;
          if (selector === '.quantity__input') {
            const attributes = ['data-cart-quantity', 'data-min', 'data-max', 'step'];
            for (let attribute of attributes) {
              const valueUpdated = updated.getAttribute(attribute);
              if (valueUpdated !== null) {
                current.setAttribute(attribute, valueUpdated);
              } else {
                current.removeAttribute(attribute);
              }
            }
          } else {
            current.innerHTML = updated.innerHTML;
          }
        }
      }

      get productForm() {
        return this.querySelector(`product-form`);
      }

      get productModal() {
        return document.querySelector(`#ProductModal-${this.dataset.section}`);
      }

      get pickupAvailability() {
        return this.querySelector(`pickup-availability`);
      }

      get variantSelectors() {
        return this.querySelector('variant-selects');
      }

      get relatedProducts() {
        const relatedProductsSectionId = SectionId.getIdForSection(
          SectionId.parseId(this.sectionId),
          'related-products'
        );
        return document.querySelector(`product-recommendations[data-section-id^="${relatedProductsSectionId}"]`);
      }

      get quickOrderList() {
        const quickOrderListSectionId = SectionId.getIdForSection(
          SectionId.parseId(this.sectionId),
          'quick_order_list'
        );
        return document.querySelector(`quick-order-list[data-id^="${quickOrderListSectionId}"]`);
      }

      get sectionId() {
        return this.dataset.originalSection || this.dataset.section;
      }

      refreshKlarnaPlacement() {
        // 查找所有 Klarna placement 元素
        const klarnaPlacements = this.querySelectorAll('klarna-placement');
        
        if (klarnaPlacements.length === 0) return;

        // 获取当前变体的价格（以分为单位）
        const variantIdInput = this.querySelector('input[name="id"]');
        if (!variantIdInput || !variantIdInput.value) return;

        // 从 data-selected-variant 获取当前变体信息
        const selectedVariantElement = this.querySelector('variant-selects [data-selected-variant]');
        if (selectedVariantElement) {
          try {
            const variant = JSON.parse(selectedVariantElement.innerHTML);
            if (variant && variant.price) {
              // 更新所有 klarna-placement 的价格属性
              klarnaPlacements.forEach((placement) => {
                placement.setAttribute('data-purchase-amount', variant.price.toString());
              });
            }
          } catch (e) {
            console.warn('无法解析 variant 数据:', e);
          }
        }

        // 调用 Klarna 刷新 API
        if (window.Klarna?.OnsiteMessaging?.refresh) {
          try {
            window.Klarna.OnsiteMessaging.refresh();
          } catch (e) {
            console.warn('Klarna 刷新失败:', e);
          }
        }
      }
    }
  );
}

// 360度查看器功能
class Viewer {
constructor(container) {
  this.container = container;
  this.currentIndex = 0;
  this.currentImageIndex = -1; // 跟踪当前显示的图片索引
  this.isDragging = false;
  this.startX = 0;
  this.sensitivity = 1;
  this.hasInteracted = false;
  this.preloadedImages = [];
  this.images = [];
  
  this.init();
}

init() {
  // 从Liquid模板中获取图片数据
  this.extractImagesFromDOM();
  
  // 如果没有图片数据，隐藏整个容器并退出
  if (!this.images || this.images.length === 0) {
    this.container.style.display = 'none';
    return;
  }

  this.viewer = this.container.querySelector('#viewer360');
  this.img = this.container.querySelector('#viewer360-img');
  this.loading = this.container.querySelector('#viewer360-loading');
  this.progress = this.container.querySelector('#viewer360-progress');
  this.currentSpan = this.container.querySelector('#viewer360-current');
  this.totalSpan = this.container.querySelector('#viewer360-total');
  this.prevBtn = this.container.querySelector('#viewer360-prev');
  this.nextBtn = this.container.querySelector('#viewer360-next');
  this.fullscreenBtn = this.container.querySelector('#viewer360-fullscreen');

  if (!this.viewer) {
    return;
  }

  this.preloadImages();
  this.bindEvents();
  this.initializeDisplay();
}

extractImagesFromDOM() {
  // 首先尝试从容器的 data-images 属性获取 360 度图片
  const dataImages = this.container.dataset.images;
  if (dataImages) {
    try {
      this.images = JSON.parse(dataImages);
      if (this.images && this.images.length > 0) {
        return; // 如果成功获取到图片，直接返回
      }
    } catch (e) {
      // 无法解析360度图片数据
    }
  }
  
  // 尝试从全局变量获取（如果 Liquid 模板设置了全局变量）
  if (window.product360Images && window.product360Images.length > 0) {
    this.images = window.product360Images;
    return;
  }
  
  // 尝试从隐藏的 script 标签获取数据
  const scriptElement = this.container.querySelector('script[type="application/json"]');
  if (scriptElement) {
    try {
      const data = JSON.parse(scriptElement.textContent);
      if (data.images && data.images.length > 0) {
        this.images = data.images;
        return;
      }
    } catch (e) {
      // 无法解析script标签中的图片数据
    }
  }
  
  // 如果都没有找到，设置为空数组
  this.images = [];
}

preloadImages() {
  if (!this.images || this.images.length === 0) return;
  
  this.loading.style.display = 'block';
  this.loading.textContent = 'Loading images...';
  
  let loadedCount = 0;
  const totalImages = this.images.length;
  
  console.log(`Starting to preload ${totalImages} images for 360° viewer`);
  
  this.images.forEach((src, index) => {
    const preloadImg = new Image();
    
    preloadImg.onload = () => {
      this.preloadedImages[index] = preloadImg;
      loadedCount++;
      
      // 更新进度条
      const progress = (loadedCount / totalImages) * 100;
      if (this.progress) {
        this.progress.style.width = progress + '%';
      }
      
      // 如果是第一张图片，立即显示
      if (index === 0) {
        this.img.src = preloadImg.src;
      }
      
      // 所有图片加载完成
      if (loadedCount === totalImages) {
        this.loading.style.display = 'none';
        // 确保显示第一张预加载的图片
        this.updateDisplay();
        console.log(`360° images preloaded successfully. Cache contains ${this.preloadedImages.length} images`);
      }
    };
    
    preloadImg.onerror = () => {
      console.error(`Failed to load 360° image: ${src}`);
      loadedCount++;
      
      // 即使加载失败也要更新进度
      const progress = (loadedCount / totalImages) * 100;
      if (this.progress) {
        this.progress.style.width = progress + '%';
      }
      
      // 更新加载文本
      this.loading.textContent = 'Loading...';
      
      // 检查是否所有图片都处理完成（成功或失败）
      if (loadedCount === totalImages) {
        this.loading.style.display = 'none';
      }
    };
    
    // 开始加载图片
    preloadImg.src = src;
  });
}

updateDisplay() {
  // 使用预加载的图片，如果可用的话
  if (this.preloadedImages[this.currentIndex]) {
    const preloadedImg = this.preloadedImages[this.currentIndex];
    
    // 只在切换到不同图片时才更新
    if (this.currentImageIndex !== this.currentIndex) {
      console.log(`Using preloaded image ${this.currentIndex + 1}/${this.images.length} (from cache)`);
      
      // 使用Canvas来显示预加载的图片，完全避免网络请求
      this.displayPreloadedImage(preloadedImg);
      
      // 标记当前显示的图片索引
      this.currentImageIndex = this.currentIndex;
    }
  } else {
    // 如果预加载的图片不可用，使用原始URL（这会导致重新请求）
    console.warn(`Preloaded image ${this.currentIndex + 1} not available, loading from server`);
    const originalSrc = this.images[this.currentIndex];
    if (this.img.src !== originalSrc || this.currentImageIndex !== this.currentIndex) {
      this.img.src = originalSrc;
      this.currentImageIndex = this.currentIndex;
    }
  }
  
  if (this.currentSpan) this.currentSpan.textContent = this.currentIndex + 1;
  const progressPercent = ((this.currentIndex + 1) / this.images.length) * 100;
  if (this.progress) this.progress.style.width = progressPercent + '%';
}

displayPreloadedImage(preloadedImg) {
  // 创建或获取Canvas元素
  let canvas = this.img.parentNode.querySelector('canvas.viewer360-canvas');
  if (!canvas) {
    canvas = document.createElement('canvas');
    canvas.className = 'viewer360-canvas';
    canvas.style.cssText = this.img.style.cssText;
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.objectFit = 'contain';
    canvas.style.display = 'block';
    this.img.parentNode.appendChild(canvas);
  }
  
  // 设置Canvas尺寸
  const container = this.img.parentNode;
  canvas.width = container.offsetWidth;
  canvas.height = container.offsetHeight;
  
  // 在Canvas上绘制预加载的图片
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // 计算图片在Canvas中的位置和尺寸（保持宽高比）
  const imgAspect = preloadedImg.naturalWidth / preloadedImg.naturalHeight;
  const canvasAspect = canvas.width / canvas.height;
  
  let drawWidth, drawHeight, drawX, drawY;
  
  if (imgAspect > canvasAspect) {
    // 图片更宽，以宽度为准
    drawWidth = canvas.width;
    drawHeight = canvas.width / imgAspect;
    drawX = 0;
    drawY = (canvas.height - drawHeight) / 2;
  } else {
    // 图片更高，以高度为准
    drawWidth = canvas.height * imgAspect;
    drawHeight = canvas.height;
    drawX = (canvas.width - drawWidth) / 2;
    drawY = 0;
  }
  
  ctx.drawImage(preloadedImg, drawX, drawY, drawWidth, drawHeight);
  
  // 隐藏原始img元素，显示Canvas
  this.img.style.display = 'none';
  canvas.style.display = 'block';
}

goToImage(index) {
  if (index < 0) index = this.images.length - 1;
  if (index >= this.images.length) index = 0;
  this.currentIndex = index;
  this.updateDisplay();
}

bindEvents() {
  // 鼠标事件
  if (this.viewer) {
    this.viewer.addEventListener('mousedown', (e) => {
      e.preventDefault();
      this.isDragging = true;
      this.startX = e.clientX;
      this.hasInteracted = true;
      
      // 标记容器为拖拽状态
      this.container.dataset.dragging = 'true';
      
      // 设置全局光标为拖拽状态
      document.body.style.cursor = 'grabbing';
      document.body.style.userSelect = 'none'; // 防止拖拽时选中文本
      this.viewer.classList.add('dragging');
    });

    // 移除容器级别的 mousemove，改为全局监听
    // this.viewer.addEventListener('mousemove', (e) => {
    //   if (!this.isDragging) return;
    //   e.preventDefault();
    //   
    //   const deltaX = e.clientX - this.startX;
    //   const threshold = this.sensitivity;
    //   
    //   if (Math.abs(deltaX) > threshold) {
    //     const direction = deltaX > 0 ? 1 : -1;
    //     this.goToImage(this.currentIndex + direction);
    //     this.startX = e.clientX;
    //   }
    // });

    // 移除容器级别的 mouseup 和 mouseleave，改为全局监听
    // this.viewer.addEventListener('mouseup', () => {
    //   this.isDragging = false;
    // });

    // this.viewer.addEventListener('mouseleave', () => {
    //   this.isDragging = false;
    // });

    // 全局鼠标事件监听，支持拖拽到容器外部
    document.addEventListener('mousemove', (e) => {
      if (!this.isDragging) return;
      e.preventDefault();
      
      const deltaX = e.clientX - this.startX;
      const threshold = this.sensitivity;
      
      if (Math.abs(deltaX) > threshold) {
        const direction = deltaX > 0 ? 1 : -1;
        this.goToImage(this.currentIndex + direction);
        this.startX = e.clientX;
      }
    });

    document.addEventListener('mouseup', (e) => {
      if (this.isDragging) {
        this.isDragging = false;
        e.preventDefault();
        e.stopPropagation(); // 防止事件冒泡到模态框
        
        // 清除容器的拖拽状态
        this.container.dataset.dragging = 'false';
        
        // 恢复默认光标
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
        this.viewer.classList.remove('dragging');
      }
    });

    // 触摸事件（移动设备支持）
    this.viewer.addEventListener('touchstart', (e) => {
      e.preventDefault();
      this.isDragging = true;
      this.startX = e.touches[0].clientX;
      this.hasInteracted = true;
      
      // 标记容器为拖拽状态
      this.container.dataset.dragging = 'true';
    });

    this.viewer.addEventListener('touchmove', (e) => {
      if (!this.isDragging) return;
      e.preventDefault();
      
      const deltaX = e.touches[0].clientX - this.startX;
      const threshold = this.sensitivity;
      
      if (Math.abs(deltaX) > threshold) {
        const direction = deltaX > 0 ? 1 : -1;
        this.goToImage(this.currentIndex + direction);
        this.startX = e.touches[0].clientX;
      }
    });

    this.viewer.addEventListener('touchend', (e) => {
      this.isDragging = false;
      
      // 清除容器的拖拽状态
      this.container.dataset.dragging = 'false';
      
      // 恢复默认光标（虽然触摸设备不显示光标，但保持一致性）
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
      this.viewer.classList.remove('dragging');
      
      // 防止事件冒泡
      e.preventDefault();
      e.stopPropagation();
    });
  }

  // 按钮事件
  if (this.prevBtn) {
    this.prevBtn.addEventListener('click', () => this.goToImage(this.currentIndex - 1));
  }
  if (this.nextBtn) {
    this.nextBtn.addEventListener('click', () => this.goToImage(this.currentIndex + 1));
  }
}


initializeDisplay() {
  if (this.totalSpan) this.totalSpan.textContent = this.images.length;
  this.updateDisplay();
}
}

// 初始化代码
function initializeAll360Viewers() {
const viewerContainers = document.querySelectorAll('.viewer360-container:not([data-initialized="true"])');

console.log(`找到 ${viewerContainers.length} 个未初始化的360度查看器容器`);

viewerContainers.forEach((container, index) => {
  try {
    // 标记为已初始化，避免重复初始化
    container.dataset.initialized = 'true';
    new Viewer(container);
    console.log(`360度查看器容器 ${index + 1} 初始化成功`);
  } catch (error) {
    console.error(`容器 ${index + 1} 初始化失败:`, error);
  }
});
}

if (document.readyState === 'loading') {
document.addEventListener('DOMContentLoaded', initializeAll360Viewers);
} else {
initializeAll360Viewers();
}

// 将初始化函数暴露到全局，供模态框使用
window.initializeAll360Viewers = initializeAll360Viewers;
