# Ailsa's Wigs 网站性能优化指南

> 生成日期: 2025-12-07
> 网站: www.ailsas.com
> 主题: Shopify Dawn 15.2.0

---

## 一、问题概述

当前网站加载了过多的第三方应用和脚本，导致页面加载缓慢。经分析发现：

- **10 个 App Embed 同时运行**（每个页面都加载）
- **重复的评论系统**（Air Reviews + Judge.me 同时启用）
- **多个可能未使用的应用**仍在加载资源

预估优化后可提升 **400-600ms** 加载速度。

---

## 二、立即执行（高优先级）

### 2.1 关闭 Judge.me App Embed

**问题**: Judge.me 和 Air Reviews 两个评论系统同时运行，但只有 Air Reviews 在前端显示。Judge.me 只是白白消耗资源。

**操作步骤**:
1. 进入 Shopify 后台
2. `Online Store` → `Themes`
3. 点击 `Customize` 按钮
4. 点击左下角 `App embeds`
5. 找到 **Judge.me Reviews**，关闭开关
6. 点击右上角 `Save` 保存

**预估收益**: 节省 ~70ms 加载时间

---

### 2.2 考虑卸载 Judge.me 应用

如果确认不再使用 Judge.me，建议直接卸载：

**操作步骤**:
1. 进入 Shopify 后台
2. `Settings` → `Apps and sales channels`
3. 找到 **Judge.me Product Reviews**
4. 点击 `...` → `Uninstall`

---

## 三、检查后决定（中优先级）

以下应用需要确认是否在使用，如果不用请关闭 App Embed：

### 3.1 检查清单

| 应用 | 检查方法 | 如果不用 |
|------|----------|----------|
| **Avada SEO Suite** | `Apps` → `Avada SEO` 查看是否配置了自动 SEO 规则 | 关闭 Embed |
| **AOV Free Gift BXGY** | `Apps` → `AOV Free Gift` 查看是否有进行中的满赠活动 | 关闭 Embed |
| **Essential Preorder** | 检查商品列表是否有预购商品 | 关闭 Embed |
| **MAG Form Builder** | 检查网站哪些页面使用了自定义表单 | 关闭 Embed |
| **Redirect Hero** | `Apps` → `Redirect Hero` 查看是否有重定向规则 | 关闭 Embed |

### 3.2 关闭 App Embed 的通用步骤

1. `Online Store` → `Themes` → `Customize`
2. 左下角 `App embeds`
3. 找到对应应用，关闭开关
4. `Save` 保存

---

## 四、应用使用情况汇总

### 4.1 建议保留的应用

| 应用 | 原因 |
|------|------|
| **Air Product Reviews** | 主评论系统，正在使用 |
| **Avada Cookie Consent** | GDPR 合规必需，英国市场法律要求 |
| **Simprosys Google Shopping Feed** | Google 购物广告必需 |
| **Bookx** | 爱丁堡门店试戴预约功能在用 |

### 4.2 建议关闭/卸载的应用

| 应用 | 原因 | 操作 |
|------|------|------|
| **Judge.me Reviews** | 与 Air Reviews 重复 | 关闭 Embed 或卸载 |
| **GLO Color Swatch** | 已禁用，可考虑卸载 | 可选卸载 |

### 4.3 需确认的应用

| 应用 | 需确认 | 预估节省 |
|------|--------|----------|
| Avada SEO Suite | 是否配置了规则？ | ~60ms |
| AOV Free Gift | 是否有活动？ | ~50ms |
| Essential Preorder | 是否有预购商品？ | ~40ms |
| MAG Form Builder | 哪里用了表单？ | ~40ms |
| Redirect Hero | 是否有重定向？ | ~30ms |

---

## 五、主题设置优化

### 5.1 滚动动画（可选）

**路径**: `Online Store` → `Themes` → `Customize` → `Theme settings` → `Animations`

当前状态: 开启
建议: 如果不需要滚动显示动画，可关闭以提升性能

---

## 六、图片优化

### 6.1 主题资源

| 文件 | 问题 | 建议 |
|------|------|------|
| sparkle.gif | 175KB，过大 | 转换为 WebP 格式或删除 |

### 6.2 上传图片建议

- Banner/轮播图: 建议宽度 1920px，WebP 格式，压缩至 200KB 以下
- 产品图: 建议 1000x1000px，WebP 格式，压缩至 100KB 以下
- 使用 [TinyPNG](https://tinypng.com/) 或 [Squoosh](https://squoosh.app/) 压缩

---

## 七、当前 App Embeds 状态

```
❌ 已禁用  glo-color-swatch-variant-image
✅ 已启用  mag-form-builder          ← 检查是否在用
✅ 已启用  redirect-hero             ← 检查是否在用
✅ 已启用  aov-free-gift-bxgy        ← 检查是否在用
✅ 已启用  simprosys-google-shopping ← 保留
✅ 已启用  essential-preorder        ← 检查是否在用
✅ 已启用  avada-seo-suite           ← 检查是否在用
✅ 已启用  avada-cookie-consent      ← 保留 (GDPR)
✅ 已启用  bookx                     ← 保留 (预约)
✅ 已启用  air-product-reviews       ← 保留 (评论)
✅ 已启用  judge-me-reviews          ← 建议关闭！
```

---

## 八、优化收益预估

| 优化项 | 预估提升 |
|--------|----------|
| 关闭 Judge.me Embed | 70ms |
| 关闭其他不用的 Embeds | 100-150ms |
| 图片优化 | 200-300ms |
| **总计** | **370-520ms** |

### 核心指标预估改善

| 指标 | 优化前 | 优化后 |
|------|--------|--------|
| LCP (最大内容绘制) | ~3.5s | ~2.5s |
| FCP (首次内容绘制) | ~2.0s | ~1.5s |
| TBT (总阻塞时间) | ~500ms | ~300ms |

---

## 九、操作检查表

### 立即执行
- [ ] 关闭 Judge.me App Embed
- [ ] 考虑卸载 Judge.me 应用

### 本周完成
- [ ] 检查 Avada SEO Suite 使用情况
- [ ] 检查 AOV Free Gift 是否有活动
- [ ] 检查 Essential Preorder 是否有预购商品
- [ ] 检查 MAG Form Builder 表单使用位置
- [ ] 检查 Redirect Hero 重定向规则

### 有空再做
- [ ] 优化 sparkle.gif 图片
- [ ] 评估是否关闭滚动动画

---

## 十、注意事项

1. **备份**: 操作前建议在 Themes 页面复制一份主题备份
2. **测试**: 每次修改后检查网站功能是否正常
3. **监控**: 使用 [PageSpeed Insights](https://pagespeed.web.dev/) 测试优化效果
4. **渐进式**: 建议逐个关闭应用，确认无影响后再继续

---

## 联系方式

如有问题，请联系技术支持。

---

*本文档由 Claude Code 自动生成*
