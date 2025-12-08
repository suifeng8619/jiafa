// 封装图片描述功能
function setupImageDescriptions() {
    // 获取当前选中的变体数据
    function getSelectedVariantData() {
        const variantJson = document.querySelector('script[data-selected-variant]');
        if (variantJson) {
            try {
                return JSON.parse(variantJson.innerText);
            } catch (error) {
                console.error("无法解析变体数据", error);
            }
        }
        return null;
    }

    // 更新图片描述
    function updateImageDescriptions() {
        document.querySelectorAll(".product__media-item").forEach(item => {
            const img = item.querySelector("img");
            const mediaContainer = item.querySelector(".product__media.media.media--transparent");

            if (img && mediaContainer) {
                // 检查是否已有描述框，避免重复创建
                let descWrapper = item.querySelector(".media--description");
                if (!descWrapper) {
                    descWrapper = document.createElement("div");
                    descWrapper.className = "product__media media--description";

                    const descText = document.createElement("p");
                    descText.className = "image__description";

                    descWrapper.appendChild(descText);
                    mediaContainer.insertAdjacentElement("afterend", descWrapper);
                }

                const descText = descWrapper.querySelector(".image__description");
                descText.textContent = img.alt;
            }
        });
    }

    // 更新主图
    function updateMainImage() {
        const mainImage = document.querySelector(".product__media-item .product__media img");
        const variantData = getSelectedVariantData();

        if (mainImage && variantData) {
            const newImageUrl = variantData.featured_media ? variantData.featured_media.preview_image.src : null;
            const newAlt = variantData.featured_media ? variantData.featured_media.alt : "产品图片";

            if (newImageUrl) {
                mainImage.src = newImageUrl;
                mainImage.alt = newAlt;
                mainImage.setAttribute("alt", newAlt);
                mainImage.srcset = `${newImageUrl} 1946w`;

                mainImage.style.display = "none";
                setTimeout(() => {
                    mainImage.style.display = "block";
                }, 50);
            }
        }
    }

    // 初始化：更新图片和描述
    function initialize() {
        updateMainImage();
        // updateImageDescriptions();
    }

    // 监听变体切换
    document.querySelectorAll(".swatch-input__input").forEach(input => {
        input.addEventListener("change", function () {
            setTimeout(() => {
                updateMainImage();
                // updateImageDescriptions();
            }, 500);
        });
    });

    // 初始化
    initialize();
}

// 初始加载时执行
document.addEventListener("DOMContentLoaded", setupImageDescriptions);

// 为AJAX导航添加全局函数，以便在页面替换后调用
window.reinitializeImageDescriptions = setupImageDescriptions;

document.addEventListener("DOMContentLoaded", function() {
  // 使用更具体的选择器
  const description = document.querySelector('.collection-hero__description.rte');
  
  if (description) {
    // 检查是否已存在按钮
    let expandButton = description.nextElementSibling;
    
    // 如果按钮不存在或不是正确的按钮，则创建新按钮
    if (!expandButton || !expandButton.classList.contains('expand-button')) {
      expandButton = document.createElement('button');
      expandButton.className = 'expand-button';
      expandButton.textContent = 'More';
      description.insertAdjacentElement('afterend', expandButton);
    }

    // 添加CSS类而不是直接操作style
    description.classList.add('collapsed-description');
    
    // 监听按钮点击事件
    expandButton.addEventListener('click', function() {
      if (description.classList.contains('collapsed-description')) {
        // 展开
        description.classList.remove('collapsed-description');
        description.style.maxHeight = `${description.scrollHeight}px`;
        expandButton.textContent = 'Less';
      } else {
        // 收起
        description.classList.add('collapsed-description');
        description.style.maxHeight = '100px';
        expandButton.textContent = 'More';
      }
    });
    
    console.log('按钮已初始化:', expandButton);
  } else {
    console.warn('未找到描述区域');
  }
});

// 获取当前视口宽度
var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

// 手机端
if (viewportWidth <= 767) {
  var mobileBanner = document.getElementById("shopify-section-template--24611066839425__slideshow_f7UJqR");
  if (mobileBanner) {
    mobileBanner.style.display = "none"; // 隐藏手机端Banner
  }
}

// PC端
if (viewportWidth >= 768) {
  var pcBanner = document.getElementById("shopify-section-template--24611066839425__slideshow_reiNrR");
  if (pcBanner) {  // 这里加上判断，避免 `null` 报错
    pcBanner.style.display = "none"; // 隐藏PC端Banner
  }
}

// 监听窗口尺寸变化，实时调整
window.addEventListener('resize', function() {
  var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

  // 手机端
  var mobileBanner = document.getElementById("shopify-section-template--24611066839425__slideshow_f7UJqR");
  if (viewportWidth <= 767) {
    if (mobileBanner) {
      mobileBanner.style.display = "none";
    }
  } else {
    if (mobileBanner) {
      mobileBanner.style.display = "block"; // 当切换回PC端时，重新显示
    }
  }

  // PC端
  var pcBanner = document.getElementById("shopify-section-template--24611066839425__slideshow_reiNrR");
  if (viewportWidth >= 768) {
    if (pcBanner) {
      pcBanner.style.display = "none";
    }
  } else {
    if (pcBanner) {
      pcBanner.style.display = "block"; // 当切换回手机端时，重新显示
    }
  }
});





