# Ailsas.com SEO 专业审计报告

**审计日期**: 2025-12-07
**审计范围**: 全站SEO策略与执行方案
**数据周期**: 2025-11-04 至 2025-12-04 (30天)
**审计人**: SEO负责人

---

## 一、整体评分：42/100

| 维度 | 得分 | 权重 | 加权分 | 评价 |
|------|------|------|--------|------|
| 关键词策略 | 35/100 | 15% | 5.25 | 缺乏系统性，品类词未形成矩阵 |
| 搜索意图匹配 | 40/100 | 15% | 6.0 | 博客CTR极低说明意图严重错配 |
| 页面架构 | 45/100 | 10% | 4.5 | 分类页结构存在但承接能力弱 |
| 内容质量 | 30/100 | 15% | 4.5 | H1浪费、首屏无价值内容 |
| 技术SEO | 55/100 | 10% | 5.5 | 基础可用但Schema缺失 |
| 本地SEO | 50/100 | 15% | 7.5 | GBP存在但未进Local Pack |
| 用户体验 | 50/100 | 10% | 5.0 | 待测Core Web Vitals |
| 外链权重 | 40/100 | 10% | 4.0 | 域名权重较低 |
| **总分** | - | 100% | **42.25** | **需要系统性重建** |

**评级**: D+ (需要立即整改)

---

## 二、核心问题（按影响范围和优先级排序）

### 问题清单

| 排序 | 问题 | 影响范围 | 优先级 | 预估流量损失 |
|------|------|---------|--------|-------------|
| 1 | **首页H1为域名"ailsas.com"** | 首页134点击/月 | P0 | -20~30点击/月 |
| 2 | **Title无Edinburgh本地信号** | Edinburgh词598曝光 | P0 | -15~25点击/月 |
| 3 | **未进入Google Local Pack** | 本地搜索主战场 | P0 | -50~80点击/月 |
| 4 | **鞋子业务稀释品牌定位** | 290页面占50%产品页 | P1 | 间接影响 |
| 5 | **分类页0点击问题** | lace-front-wig等776曝光0点击 | P1 | -10~20点击/月 |
| 6 | **博客CTR极低(0.3-0.5%)** | 14,103曝光仅65点击 | P1 | -50~100点击/月 |
| 7 | **关键词蚕食严重** | 50个词多页面竞争 | P2 | -5~15点击/月 |
| 8 | **缺失synthetic-wigs分类页** | 1,716曝光无承接页 | P2 | -15~30点击/月 |
| 9 | **LocalBusiness Schema缺失** | 影响Rich Results | P2 | 间接影响 |
| 10 | **内链结构扁平** | 权重分散 | P2 | 间接影响 |
| 11 | **无FAQ Schema** | 错失SERP占位 | P3 | -5~10点击/月 |
| 12 | **评价数量不足(8条)** | 竞争对手153条 | P3 | 间接影响 |

### 详细问题分析

#### 问题1：首页H1为域名"ailsas.com"

**当前状态**:
```html
<h1>ailsas.com</h1>
```

**影响分析**:
- H1是页面最重要的SEO信号之一
- 浪费在域名上等于放弃首页核心关键词的锚定
- Google无法理解首页主题是"Edinburgh wig shop"

**数据支撑**:
- 首页承接58个关键词，850曝光
- Edinburgh相关词17个，598曝光，仅24点击
- 预计修复后Edinburgh词点击可提升30-50%

---

#### 问题2：Title无Edinburgh本地信号

**当前Title**:
```
Human Hair & Premium Fibre Wigs, Toppers & Extensions | Ailsas.com
```

**问题**:
- 无地理标识，无法与竞争对手区分
- 未包含核心本地词"Edinburgh"或"Scotland"
- 品牌词放在末尾，品牌曝光弱化

**竞争对手对比**:
| 网站 | Title策略 |
|------|-----------|
| CrownCouture | "Scotland's Largest Wig Collection" - 明确地理+差异化 |
| Aderans | "Hair Loss Solutions Edinburgh" - 地理+场景 |
| Ailsas | 无地理标识 |

---

#### 问题3：未进入Google Local Pack

**当前状态**:
- 搜索"wigs edinburgh"时，Local Pack前3位被占据
- Ailsas仅出现在自然结果第3位（实际视觉位置第6-7）
- 竞争对手评价数：CrownCouture 153条，Aderans 84条，Ailsas 8条

**影响**:
- Local Pack占据SERP最佳位置
- 未进入Local Pack = 损失50%以上本地搜索点击

---

#### 问题4：鞋子业务稀释品牌定位

**数据**:
| 业务 | 产品页数 | 占比 | 点击 | 曝光 |
|------|---------|------|------|------|
| 假发 | 75 | 21% | 18 | 4,637 |
| 鞋子 | 290 | 79% | 81 | 3,358 |

**问题**:
- 鞋子页面是假发的4倍
- Google可能将网站定位为"综合零售"而非"专业假发店"
- 稀释假发类目的topical authority

---

#### 问题5：分类页0点击问题

**严重案例**:
| 分类页 | 曝光 | 点击 | CTR | 问题诊断 |
|--------|------|------|-----|---------|
| /collections/lace-front-wig | 776 | 0 | 0% | Title/Description问题 |
| /collections/wig-cap | 343 | 0 | 0% | 内容不匹配意图 |
| /collections/human-hair-wigs | 94 | 0 | 0% | 曝光不足+内容弱 |
| /collections/heat-resistant-wigs | 134 | 0 | 0% | 搜索意图不明 |

---

#### 问题6：博客CTR极低

**数据**:
| 博客文章 | 曝光 | 点击 | CTR | 行业基准 |
|---------|------|------|-----|---------|
| what-not-to-use-on-synthetic-wigs | 2,743 | 10 | 0.36% | 2-3% |
| can-you-dye-a-synthetic-wig | 2,146 | 9 | 0.42% | 2-3% |
| why-do-human-hair-wigs-smell | 1,073 | 11 | 1.03% | 2-3% |

**根因分析**:
1. Google AI Overview直接回答问题，用户无需点击
2. 视频结果占据SERP主导位置
3. Title/Description缺乏差异化吸引力
4. 内容与搜索意图可能存在偏差

---

## 三、可执行优化指令清单

### P0级（本周内完成）

#### 3.1 首页H1修改

**操作步骤**:
1. 登录Shopify后台 → 在线商店 → 主题 → 编辑代码
2. 找到 `sections/header.liquid` 或 `layout/theme.liquid`
3. 定位当前H1标签 `<h1>ailsas.com</h1>`
4. 修改为:
```html
<h1 class="visually-hidden">Edinburgh's Trusted Wig Shop - Ailsa's Wigs</h1>
```
5. 在首屏可见区域添加视觉H1:
```html
<div class="hero-headline">
  <span class="headline-main">Edinburgh's Trusted Wig Shop</span>
</div>
```

**验证方法**:
- 使用 `curl -s https://www.ailsas.com | grep -i "<h1"` 检查
- Chrome DevTools → Elements → 搜索 `<h1`

**预期效果**: Edinburgh相关词排名提升1-3位

---

#### 3.2 首页Title修改

**操作步骤**:
1. Shopify后台 → 在线商店 → 偏好设置
2. 或编辑 `layout/theme.liquid` 中的 `<title>` 标签
3. 修改为:
```html
<title>Wig Shop Edinburgh | Human Hair Wigs & Toppers | Ailsa's</title>
```

**字符数**: 54字符（安全范围内）

**验证方法**:
```bash
curl -s https://www.ailsas.com | grep -o "<title>.*</title>"
```

---

#### 3.3 Google Business Profile优化

**操作步骤**:

**步骤1: 完善基础信息**
1. 登录 https://business.google.com
2. 确认以下信息100%完整:
   - 营业时间（包括节假日）
   - 服务区域
   - 业务描述（包含"Edinburgh wig shop"）
   - 网站URL
   - 预约链接

**步骤2: 添加服务项目**
添加以下服务:
- Wig Fitting Consultation
- Human Hair Wig Sales
- Synthetic Wig Sales
- Hair Topper Fitting
- Wig Care & Maintenance
- NHS Wig Service

**步骤3: 上传照片（目标20+张）**
- 店面外观 3张
- 店内环境 5张
- 产品展示 10张
- 团队照片 2张

**步骤4: 发布Google Posts**
- 每周发布1-2条动态
- 内容：新品、优惠、护理Tips

**验证方法**: 搜索"Ailsas wigs edinburgh"查看Knowledge Panel完整度

---

### P1级（2周内完成）

#### 3.4 分类页Title批量优化

**操作步骤**:

1. 在Shopify后台 → 产品 → 产品系列
2. 逐一编辑以下分类页:

| 分类页 | 当前Title（推测） | 优化后Title |
|--------|------------------|-------------|
| lace-front-wig | Lace Front Wig | `Lace Front Wigs UK | Natural Hairline | Ailsa's Edinburgh` |
| human-hair-wigs | Human Hair Wigs | `Real Human Hair Wigs | Premium Quality | From £89 | Ailsa's` |
| ginger-wigs | Ginger Wigs | `Ginger & Red Wigs | Auburn to Copper Shades | Ailsa's` |
| wig-cap | Wig Cap | `Wig Caps & Liners | Comfort Fit | Free UK Delivery` |
| wigs-for-hair-loss | Wigs for Hair Loss | `Medical Wigs for Hair Loss | Chemo & Alopecia | Ailsa's Edinburgh` |

3. 同时优化Meta Description，确保包含:
   - 核心关键词
   - 价格/促销信息
   - CTA（如"Free UK Shipping"）

---

#### 3.5 创建synthetic-wigs分类页

**操作步骤**:

1. Shopify后台 → 产品 → 产品系列 → 创建产品系列
2. 标题: `Synthetic Wigs`
3. URL: `/collections/synthetic-wigs`
4. SEO设置:
```
Title: Synthetic Wigs UK | Heat Resistant & Affordable | Ailsa's Edinburgh
Description: Shop premium synthetic wigs at Ailsa's Edinburgh. Heat-resistant, easy-care fibres. From £39. Free UK shipping. Visit our Cameron Toll showroom.
```

5. 页面内容结构:
```html
<div class="collection-header">
  <h1>Synthetic Wigs</h1>
  <p class="collection-description">
    Discover our range of premium synthetic wigs, featuring heat-resistant
    fibres that look and feel like real hair. Perfect for everyday wear
    or special occasions.
  </p>
</div>

<div class="collection-features">
  <h2>Why Choose Synthetic Wigs?</h2>
  <ul>
    <li>Affordable prices from £39</li>
    <li>Heat-resistant up to 180°C</li>
    <li>Pre-styled, ready to wear</li>
    <li>Easy care and maintenance</li>
  </ul>
</div>

<div class="collection-faq">
  <h2>Synthetic Wig FAQs</h2>
  <details>
    <summary>Can you dye synthetic hair?</summary>
    <p>Regular hair dye won't work on synthetic fibres. However, you can use
    fabric dyes like Rit DyeMore for subtle colour changes.
    <a href="/blogs/news/can-you-dye-a-synthetic-wig">Read our full guide</a>.</p>
  </details>
  <!-- 更多FAQ -->
</div>
```

6. 将相关产品添加到此系列
7. 在首页Featured Collections添加链接

---

#### 3.6 首页Edinburgh内容区块添加

**操作步骤**:

1. 编辑 `sections/` 中的首页模板
2. 在轮播图下方添加新section:

```liquid
{% comment %} Edinburgh Introduction Section {% endcomment %}
<section class="edinburgh-intro" id="about-edinburgh">
  <div class="container">
    <h2>Your Local Wig Specialists in Edinburgh</h2>
    <div class="intro-content">
      <div class="intro-text">
        <p>
          Welcome to <strong>Ailsa's Wigs</strong> — Edinburgh's trusted destination
          for premium wigs and hair solutions since [YEAR]. Located in Cameron Toll
          Shopping Centre, we offer:
        </p>
        <ul class="feature-list">
          <li>Free, private wig consultations</li>
          <li>Professional fitting by trained specialists</li>
          <li>Real human hair and heat-resistant synthetic options</li>
          <li>Compassionate service for medical hair loss</li>
        </ul>
        <a href="/pages/book-wig-try-on" class="btn btn-primary">
          Book Free Consultation
        </a>
      </div>
      <div class="intro-trust">
        <div class="trust-badge">
          <span class="rating">★★★★★</span>
          <span class="rating-text">5.0 on Google</span>
        </div>
        <p class="address">
          <strong>Visit us:</strong><br>
          Unit 8, Cameron Toll Shopping Centre<br>
          Edinburgh, EH16 5PB
        </p>
      </div>
    </div>
  </div>
</section>
```

---

### P2级（1个月内完成）

#### 3.7 LocalBusiness Schema实施

**操作步骤**:

1. 编辑 `layout/theme.liquid`
2. 在 `</head>` 前添加:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Store"],
  "@id": "https://www.ailsas.com/#organization",
  "name": "Ailsa's Wigs",
  "alternateName": "Ailsas Wigs Edinburgh",
  "description": "Edinburgh's trusted wig shop offering premium human hair wigs, synthetic wigs, and hair toppers. Specialist service for medical hair loss.",
  "url": "https://www.ailsas.com",
  "logo": "https://www.ailsas.com/cdn/shop/files/ailsas-logo.png",
  "image": [
    "https://www.ailsas.com/cdn/shop/files/store-front.jpg",
    "https://www.ailsas.com/cdn/shop/files/store-interior.jpg"
  ],
  "telephone": "+44-771-563-8527",
  "email": "hello@ailsas.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Unit 8, Cameron Toll Shopping Centre, 6 Lady Road",
    "addressLocality": "Edinburgh",
    "addressRegion": "Scotland",
    "postalCode": "EH16 5PB",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 55.9295,
    "longitude": -3.1527
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "priceRange": "££",
  "paymentAccepted": ["Credit Card", "Debit Card", "PayPal", "Klarna"],
  "currenciesAccepted": "GBP",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Wig Products",
    "itemListElement": [
      {
        "@type": "OfferCatalog",
        "name": "Human Hair Wigs",
        "itemListElement": [
          {"@type": "Offer", "itemOffered": {"@type": "Product", "name": "Lace Front Human Hair Wig"}}
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Synthetic Wigs"
      },
      {
        "@type": "OfferCatalog",
        "name": "Hair Toppers"
      }
    ]
  },
  "sameAs": [
    "https://www.facebook.com/people/Ailsas-Wigs/61551824160663/",
    "https://www.instagram.com/ailsaswigs/",
    "https://www.youtube.com/@AilsasUKWigs",
    "https://www.tiktok.com/@ailsas_uk_wigs"
  ]
}
</script>
```

**验证方法**:
- https://search.google.com/test/rich-results
- https://validator.schema.org/

---

#### 3.8 关键词蚕食整合

**操作步骤**:

**案例1: "wigs edinburgh" 蚕食整合**

当前状态：3个页面竞争
- / (首页) - 排名8.8
- /collections/brands-ailsas-wigs - 排名10.6
- /pages/book-wig-try-on - 排名25.8

整合方案:
1. 确定首页为主页面
2. 在 /collections/brands-ailsas-wigs 页面:
   - 移除或弱化"wigs edinburgh"相关内容
   - 添加 canonical 指向首页（如果内容重复）
   - 或改变该页面的目标关键词为品牌词

3. 在 /pages/book-wig-try-on 页面:
   - 目标关键词改为"book wig consultation edinburgh"
   - 移除与首页竞争的内容

**案例2: "can you dye synthetic hair" 博客蚕食**

当前状态：2篇博客竞争
- /blogs/news/what-not-to-use-on-synthetic-wigs - 排名2.4
- /blogs/news/can-you-dye-a-synthetic-wig - 排名9.1

整合方案:
1. 保留排名更好的文章作为主文章
2. 将另一篇301重定向到主文章
3. 合并两篇的优质内容

执行命令（如果Shopify支持）:
```
/blogs/news/what-not-to-use-on-synthetic-wigs
→ 301 → /blogs/news/can-you-dye-a-synthetic-wig
```

---

## 四、关键词策略优化建议

### 4.1 搜索意图分类

| 意图类型 | 关键词示例 | 当前承接 | 应该承接 | 内容策略 |
|---------|-----------|---------|---------|---------|
| **导航型** | ailsas wigs, ailsa's | 首页 ✅ | 首页 | 保持 |
| **本地型** | wigs edinburgh, wig shop edinburgh | 首页 ⚠️ | 首页+GBP | 强化Edinburgh信号 |
| **商业型** | buy human hair wigs, best lace front wigs | 分类页 ❌ | 分类页 | 优化分类页 |
| **信息型** | can you dye synthetic hair, why wigs expensive | 博客 ⚠️ | 博客+FAQ | 视频+内链 |
| **交易型** | lace front wig UK, burgundy wig | 产品页 ⚠️ | 产品页 | 优化产品Schema |

### 4.2 长尾词拓展矩阵

**基于现有数据的长尾词机会**:

| 主词 | 长尾拓展 | 月搜索量(估) | 当前排名 | 机会 |
|------|---------|-------------|---------|------|
| wigs edinburgh | best wigs edinburgh | 70 | 9.7 | 冲Top 5 |
| | cheap wigs edinburgh | 未覆盖 | - | 新内容 |
| | wigs edinburgh NHS | 未覆盖 | - | 新内容 |
| human hair wigs | human hair wigs UK | 中 | 远 | 分类页优化 |
| | real human hair wigs Edinburgh | 41 | 11.9 | 冲首页 |
| | affordable human hair wigs UK | 未覆盖 | - | 新内容 |
| synthetic wigs | heat resistant synthetic wigs UK | 30 | 8.4 | 冲Top 5 |
| | best synthetic wigs for beginners | 45 | 12.2 | 新分类页 |
| wigs for hair loss | wigs for cancer patients Edinburgh | 1 | 2.0 | 已Top 3 |
| | NHS wigs Edinburgh | 未覆盖 | - | 专门页面 |

### 4.3 语义聚类

**聚类1: Edinburgh本地语义场**
```
核心词: wigs edinburgh
语义扩展:
├── wig shop edinburgh
├── wig shops in edinburgh
├── edinburgh wig shop
├── buy wigs edinburgh
├── wig store edinburgh
├── wigs in edinburgh
├── best wig shops edinburgh
└── 实体: Cameron Toll, Scotland, EH16
```

**聚类2: 真人发假发语义场**
```
核心词: human hair wigs
语义扩展:
├── real hair wigs
├── natural hair wigs
├── virgin hair wigs
├── remy hair wigs
├── 100% human hair wigs
└── 实体: Brazilian hair, Indian hair, European hair
```

**聚类3: 合成发假发语义场**
```
核心词: synthetic wigs
语义扩展:
├── heat resistant synthetic wigs
├── heat friendly wigs
├── synthetic lace front wigs
├── affordable synthetic wigs
├── best synthetic wigs
└── 实体: Kanekalon, Toyokalon, heat-friendly fibre
```

### 4.4 实体关键词

需要在内容中建立的实体关联:

| 实体类型 | 实体名称 | 关联方式 |
|---------|---------|---------|
| 地理实体 | Edinburgh, Scotland, Cameron Toll, EH16 | 地址、服务区域 |
| 品牌实体 | Ailsa's Wigs, Ailsas | Logo, About页面 |
| 产品实体 | Lace Front, Monofilament, Hand-tied | 产品描述、教育内容 |
| 材质实体 | Remy Hair, Virgin Hair, Kanekalon | 产品规格、对比内容 |
| 服务实体 | NHS Wig Service, Wig Fitting | 服务页面 |

### 4.5 Gap Keywords（内容差距关键词）

通过竞争对手分析识别的缺失关键词:

| 关键词 | 搜索量(估) | 竞争度 | 当前状态 | 建议内容 |
|--------|-----------|--------|---------|---------|
| NHS wigs Scotland | 中 | 低 | 未覆盖 | 专门服务页 |
| wig shops Glasgow | 高 | 中 | 未覆盖 | 服务区域页 |
| alopecia wigs UK | 中 | 中 | 弱覆盖 | 专门分类页 |
| chemo wigs Edinburgh | 中 | 低 | 弱覆盖 | 专门内容 |
| wig styling Edinburgh | 低 | 低 | 未覆盖 | 服务页 |
| wig repair Edinburgh | 低 | 低 | 未覆盖 | 服务页 |

---

## 五、技术SEO整改方案

### 5.1 Core Web Vitals检测

**检测方法**:
```bash
# 使用PageSpeed Insights API
curl "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://www.ailsas.com&strategy=mobile"

# 或使用Lighthouse CLI
lighthouse https://www.ailsas.com --output=json --output-path=./ailsas-audit.json
```

**目标指标**:
| 指标 | 目标值 | 当前值(待测) |
|------|--------|-------------|
| LCP (Largest Contentful Paint) | < 2.5s | ? |
| FID (First Input Delay) | < 100ms | ? |
| CLS (Cumulative Layout Shift) | < 0.1 | ? |
| TTFB (Time to First Byte) | < 600ms | ? |

**优化操作**:

1. **图片优化**
```liquid
{% comment %} 使用Shopify图片优化 {% endcomment %}
{{ product.featured_image | image_url: width: 400 | image_tag: loading: 'lazy', sizes: '(max-width: 400px) 100vw, 400px' }}
```

2. **延迟加载非关键JS**
```html
<script src="non-critical.js" defer></script>
```

3. **预连接关键资源**
```html
<link rel="preconnect" href="https://cdn.shopify.com">
<link rel="dns-prefetch" href="https://cdn.shopify.com">
```

### 5.2 Schema标记检测

**检测方法**:
```bash
# 检查现有Schema
curl -s https://www.ailsas.com | grep -o '<script type="application/ld+json">.*</script>'

# 使用Google测试工具
https://search.google.com/test/rich-results?url=https://www.ailsas.com
```

**需要添加的Schema类型**:

| Schema类型 | 应用页面 | 优先级 |
|-----------|---------|--------|
| LocalBusiness | 首页 | P0 |
| Product | 产品页 | P1 |
| BreadcrumbList | 全站 | P1 |
| FAQPage | 博客/FAQ页 | P2 |
| Review/AggregateRating | 产品页 | P2 |
| HowTo | 教程博客 | P3 |

### 5.3 索引状态检测

**检测方法**:
```bash
# 检查robots.txt
curl https://www.ailsas.com/robots.txt

# 检查sitemap
curl https://www.ailsas.com/sitemap.xml | head -100

# 在GSC检查索引覆盖率
# GSC → 索引 → 覆盖率
```

**预期问题**:
- 鞋子页面占用爬虫预算
- 可能存在重复页面（分页、筛选参数）

**解决方案**:
1. 确认鞋子页面是否需要索引
2. 添加canonical标签处理重复页面
3. 使用参数工具处理筛选URL

### 5.4 移动端适配检测

**检测方法**:
```bash
# 使用Google移动友好测试
https://search.google.com/test/mobile-friendly?url=https://www.ailsas.com
```

**检查点**:
- [ ] 视口配置正确
- [ ] 字体大小可读（>16px）
- [ ] 触摸目标足够大（>48px）
- [ ] 无水平滚动
- [ ] 图片自适应

---

## 六、内容结构与内链优化方案

### 6.1 网站信息架构（目标状态）

```
首页 (Edinburgh's Trusted Wig Shop)
├── 分类页层级
│   ├── /collections/human-hair-wigs
│   │   ├── /collections/lace-front-human-hair-wigs
│   │   ├── /collections/short-human-hair-wigs
│   │   └── /collections/long-human-hair-wigs
│   ├── /collections/synthetic-wigs [新建]
│   │   ├── /collections/heat-resistant-wigs
│   │   └── /collections/lace-front-synthetic-wigs
│   ├── /collections/hair-toppers [新建]
│   ├── /collections/wigs-for-hair-loss
│   │   ├── /collections/chemo-wigs
│   │   └── /collections/alopecia-wigs
│   └── /collections/wigs-by-colour
│       ├── /collections/ginger-wigs
│       ├── /collections/burgundy-wigs
│       └── /collections/blonde-wigs
├── 服务页层级
│   ├── /pages/wig-fitting-edinburgh
│   ├── /pages/nhs-wig-service [新建]
│   └── /pages/book-wig-try-on
├── 博客层级
│   ├── /blogs/news (按话题聚合)
│   │   ├── synthetic-wig-care (话题聚合页)
│   │   ├── human-hair-wig-care
│   │   └── wig-buying-guides
│   └── 单篇文章
└── 信任页层级
    ├── /pages/about-us
    ├── /pages/our-story [新建]
    └── /pages/customer-reviews [新建]
```

### 6.2 内链策略矩阵

| 源页面类型 | 目标页面类型 | 链接方式 | 锚文本策略 |
|-----------|-------------|---------|-----------|
| 首页 | 分类页 | Featured Collections | 分类名称 |
| 首页 | 服务页 | CTA按钮 | 动作词 |
| 分类页 | 产品页 | 产品卡片 | 产品名称 |
| 分类页 | 相关分类 | "You may also like" | 分类名称 |
| 博客 | 分类页 | 正文内链 | 关键词锚文本 |
| 博客 | 产品页 | 产品推荐 | 产品名称 |
| 博客 | 相关博客 | "Related articles" | 文章标题 |
| 产品页 | 分类页 | 面包屑 | 分类名称 |
| 产品页 | 相关产品 | "Customers also viewed" | 产品名称 |

### 6.3 分类页内容模板

```html
<!-- 分类页模板: /collections/[category-name] -->

<div class="collection-page">

  <!-- 面包屑 -->
  <nav class="breadcrumb" aria-label="Breadcrumb">
    <ol itemscope itemtype="https://schema.org/BreadcrumbList">
      <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
        <a itemprop="item" href="/"><span itemprop="name">Home</span></a>
        <meta itemprop="position" content="1" />
      </li>
      <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
        <a itemprop="item" href="/collections/all-wigs"><span itemprop="name">Wigs</span></a>
        <meta itemprop="position" content="2" />
      </li>
      <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
        <span itemprop="name">[Category Name]</span>
        <meta itemprop="position" content="3" />
      </li>
    </ol>
  </nav>

  <!-- 分类头部 -->
  <header class="collection-header">
    <h1>[Category Name] - [Unique Value Proposition]</h1>
    <p class="collection-intro">
      [2-3句描述，包含核心关键词，说明产品特点和适用人群]
    </p>
    <div class="collection-stats">
      <span>[X] products</span>
      <span>From £[lowest price]</span>
      <span>Free UK Shipping</span>
    </div>
  </header>

  <!-- 筛选和排序 -->
  <div class="collection-filters">
    <!-- 筛选器 -->
  </div>

  <!-- 产品网格 -->
  <div class="product-grid">
    <!-- 产品卡片 -->
  </div>

  <!-- 分类底部内容（SEO重要） -->
  <section class="collection-content">
    <h2>About [Category Name]</h2>
    <p>[300-500字介绍，包含关键词变体、使用场景、选购建议]</p>

    <h3>Why Choose [Category] from Ailsa's?</h3>
    <ul>
      <li>[差异化卖点1]</li>
      <li>[差异化卖点2]</li>
      <li>[差异化卖点3]</li>
    </ul>

    <h3>Frequently Asked Questions</h3>
    <div class="faq-section" itemscope itemtype="https://schema.org/FAQPage">
      <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
        <h4 itemprop="name">[问题1]</h4>
        <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
          <p itemprop="text">[答案1]</p>
        </div>
      </div>
      <!-- 更多FAQ -->
    </div>
  </section>

  <!-- 相关分类 -->
  <section class="related-collections">
    <h3>Related Categories</h3>
    <ul>
      <li><a href="/collections/[related-1]">[Related Category 1]</a></li>
      <li><a href="/collections/[related-2]">[Related Category 2]</a></li>
    </ul>
  </section>

</div>
```

### 6.4 博客文章内链模板

每篇博客应包含:

1. **开头内链（前200字内）**
   - 链接到相关分类页或产品页

2. **正文内链（自然分布）**
   - 每500字至少1个内链
   - 锚文本使用关键词变体

3. **结尾CTA区块**
```html
<div class="article-cta">
  <h3>Ready to Find Your Perfect Wig?</h3>
  <p>Browse our collection of [category] or book a free consultation
  at our Edinburgh showroom.</p>
  <a href="/collections/[category]" class="btn">Shop [Category]</a>
  <a href="/pages/book-wig-try-on" class="btn-secondary">Book Consultation</a>
</div>
```

4. **相关文章推荐**
```html
<div class="related-articles">
  <h3>You Might Also Like</h3>
  <ul>
    <li><a href="[url1]">[Related Article 1]</a></li>
    <li><a href="[url2]">[Related Article 2]</a></li>
    <li><a href="[url3]">[Related Article 3]</a></li>
  </ul>
</div>
```

---

## 七、增长策略

### 7.1 内容规模化方向

**Phase 1: 基础内容补全（月1-2）**

| 内容类型 | 数量 | 目标关键词 |
|---------|------|-----------|
| 分类页创建 | 3个 | synthetic-wigs, hair-toppers, nhs-wigs |
| 分类页优化 | 10个 | 现有分类Title/Description优化 |
| 服务页创建 | 2个 | nhs-wig-service, wig-styling-edinburgh |

**Phase 2: 博客内容矩阵（月3-6）**

| 话题聚类 | 文章数 | 目标意图 |
|---------|--------|---------|
| Synthetic Wig Care | 5篇 | 信息型 → 商业转化 |
| Human Hair Wig Guide | 5篇 | 信息型 → 商业转化 |
| Wig Buying Guide | 3篇 | 商业型 |
| Hair Loss Solutions | 3篇 | 信息型 + 本地型 |
| Edinburgh Wig Lifestyle | 2篇 | 本地型 |

**Phase 3: 视频内容（月4+）**

| 视频类型 | 平台 | 目的 |
|---------|------|------|
| Wig Try-On | YouTube + 嵌入博客 | 抢占视频SERP |
| How-To教程 | YouTube + TikTok | 引流 + 品牌 |
| 店铺Tour | YouTube | 本地SEO + 信任 |

### 7.2 外链策略

**策略1: 本地引用构建**

| 平台 | 操作 | 预期效果 |
|------|------|---------|
| Yell.com | 创建/优化listing | 本地引用 |
| Thomson Local | 创建listing | 本地引用 |
| Free Index | 创建listing | 本地引用 |
| Edinburgh本地目录 | 提交 | 本地相关性 |

**策略2: 行业资源外链**

| 资源类型 | 目标网站 | 方法 |
|---------|---------|------|
| 慈善合作 | 癌症慈善机构 | 捐赠/合作换链接 |
| NHS资源页 | NHS Scotland | 成为推荐供应商 |
| 美容博主 | Edinburgh生活方式博主 | 产品评测 |

**策略3: 内容外链**

| 内容类型 | 外链潜力 | 方法 |
|---------|---------|------|
| 假发护理指南 | 中 | 资源页外展 |
| 脱发统计数据 | 高 | 数据引用 |
| Edinburgh购物指南 | 中 | 本地媒体投稿 |

### 7.3 可复用SEO资产

1. **Schema模板库**
   - LocalBusiness模板
   - Product模板
   - FAQ模板
   - HowTo模板

2. **内容模板**
   - 分类页模板
   - 产品描述模板
   - 博客文章模板

3. **内链矩阵文档**
   - 锚文本规范
   - 链接目标规则

4. **关键词追踪表**
   - 按页面分组
   - 月度排名追踪

### 7.4 排名加速策略

**快速见效（1-4周）**:
1. H1/Title修复 → Edinburgh词排名提升
2. GBP优化 → Local Pack进入
3. 分类页Title优化 → CTR提升

**中期见效（1-3月）**:
1. 分类页内容丰富 → 长尾词排名
2. 内链结构优化 → 权重传递
3. Schema实施 → Rich Results

**长期见效（3-6月）**:
1. 博客内容矩阵 → 信息类词排名
2. 外链建设 → 域名权重提升
3. 评价积累 → Local Pack稳定

---

## 八、风险预警

### 8.1 过度优化风险

| 风险点 | 当前状态 | 风险等级 | 应对措施 |
|--------|---------|---------|---------|
| 关键词堆砌 | 方案中有堆砌倾向 | 中 | 保持关键词密度<2% |
| 锚文本过度优化 | 尚未实施 | 低 | 锚文本多样化 |
| 人工外链 | 尚未实施 | 低 | 避免PBN，专注自然外链 |

### 8.2 算法惩罚风险

| 风险类型 | 描述 | 预防措施 |
|---------|------|---------|
| Helpful Content | 内容为搜索引擎而非用户 | 确保内容对用户有价值 |
| Link Spam | 低质量外链 | 只做自然外链 |
| Review Spam | 虚假评价 | 只收集真实客户评价 |

### 8.3 技术风险

| 风险点 | 描述 | 应对措施 |
|--------|------|---------|
| 索引问题 | 鞋子页面占用爬虫预算 | 监控GSC索引状态 |
| 移动端问题 | 未知 | 定期测试移动友好性 |
| 页面速度 | 未知 | 定期测试Core Web Vitals |

### 8.4 竞争风险

| 竞争对手 | 优势 | 我们的应对 |
|---------|------|-----------|
| CrownCouture | 153评价 | 加速评价收集 |
| Aderans | 品牌知名度 | 强化本地差异化 |
| 新进入者 | 更低价格 | 强调服务和专业性 |

---

## 九、执行路线图

### 周度计划

| 周次 | 重点任务 | 负责人 | 验收标准 |
|------|---------|--------|---------|
| W1 | H1/Title修复 | 开发 | 新H1上线 |
| W1 | GBP信息完善 | 运营 | 信息100%完整 |
| W2 | Edinburgh内容区块 | 开发 | 首页新区块上线 |
| W2 | LocalBusiness Schema | 开发 | Schema验证通过 |
| W3 | 分类页Title批量优化 | 运营 | 10个分类页完成 |
| W3 | synthetic-wigs分类创建 | 运营 | 新分类页上线 |
| W4 | 内链结构优化 | 运营 | 首页→分类链接完成 |
| W4 | Core Web Vitals测试 | 开发 | 测试报告产出 |

### 月度里程碑

| 月份 | 目标 | KPI |
|------|------|-----|
| M1 | 基础修复完成 | 首页Edinburgh词进Top 5 |
| M2 | 分类页优化完成 | 分类页CTR提升至1%+ |
| M3 | 进入Local Pack | Local Pack Top 3 |
| M4 | 博客CTR提升 | 博客CTR提升至1%+ |
| M6 | 流量翻倍 | 月点击600+ |

---

## 十、附录

### A. 关键词完整分配表

见 `/tmp/ailsas_keyword_assignment.json`

### B. 竞争对手分析

| 指标 | Ailsas | CrownCouture | Aderans |
|------|--------|--------------|---------|
| Google评价 | 8 | 153 | 84 |
| 评分 | 5.0 | 4.9 | 4.9 |
| Local Pack | 未进入 | Top 2 | Top 1 |
| 域名权重(估) | 低 | 中 | 高 |

### C. 执行检查清单

- [ ] 首页H1修改
- [ ] 首页Title修改
- [ ] GBP信息完善
- [ ] Edinburgh内容区块添加
- [ ] LocalBusiness Schema添加
- [ ] 分类页Title批量优化
- [ ] synthetic-wigs分类创建
- [ ] hair-toppers分类创建
- [ ] 内链结构优化
- [ ] Core Web Vitals优化
- [ ] 博客CTR优化
- [ ] 评价收集启动

---

**报告完成**

审计人签字: _______________
日期: 2025-12-07
