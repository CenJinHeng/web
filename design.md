# Web Design System（站点统一规范）

本文档用于保证新页面与现有站点（项目页 + 关于我页）视觉和交互一致。

## 1. 适用范围
- 适用于 `web` 主站所有内容页。
- 导航栏与底部栏必须复用统一模板（来自 `core/styles.css`），避免每页单独重写。
- 页面内容可以有业务差异，但布局、字号层级、交互反馈、间距规则应遵循本文。

## 2. 全局基础（Token 与基础样式）

### 2.1 全局变量（来自 core）
```css
:root {
  --accent: #000000;
  --muted: #6f6a64;
  --line: #e5e0d9;
  --nav-height: 44px;
  --container: 1200px;
}
```

### 2.2 容器
```css
.container {
  width: min(var(--container), 100% - 32px);
  margin: 0 auto;
}
```
- 所有内容区必须放入 `.container`，保证左右统一留白。

### 2.3 字体
- 站点默认：`"Space Grotesk", "Noto Sans SC", sans-serif`
- 中文内容页（如 about）：`"Microsoft YaHei", "微软雅黑", "PingFang SC", "Hiragino Sans GB", sans-serif`

## 3. 导航栏规范（必须）

### 3.1 结构
```html
<header class="site-header">
  <div class="container header-inner">
    <div class="brand"><span class="brand-label">品牌名</span></div>
    <nav class="top-nav">
      <a class="nav-btn" href="...">项目</a>
      <a class="nav-btn is-active" aria-current="page" href="...">关于我</a>
      <button class="lang-toggle" type="button">EN</button>
    </nav>
  </div>
</header>
```

### 3.2 行为与视觉
- `site-header` 必须 `position: sticky; top: 0; z-index: 10;`
- 高度统一：`--nav-height: 44px`
- 导航项 active 通过下划线（`::after`）表达，禁止改为纯颜色块。
- 导航间距：`top-nav` 使用 `gap: 36px`。
- 语言切换按钮使用胶囊边框样式（16px 圆角）。

## 4. 底部栏规范（必须）

### 4.1 组件
- 统一使用 `.site-footer-copy`。
- 默认：
```css
.site-footer-copy {
  max-width: 900px;
  margin: 4px auto 56px;
  color: var(--muted);
  font-size: 0.92rem;
  line-height: 1.85;
}
```

### 4.2 带背景延展（可选）
- 当 footer 使用背景区块时，使用 `.has-range-bg`，并通过变量控制尾部填充，不要手写额外白块。

## 5. 页面底部留白与滚动终点（必须）

### 5.1 About 页当前规则
```css
.about-page {
  padding: clamp(72px, 9vw, 136px) 0 0;
}
.about-page > .site-footer-copy {
  margin-top: clamp(108px, 13.5vw, 180px);
  margin-bottom: 0;
}
.about-page > .site-footer-copy.has-range-bg {
  padding-bottom: 0;
}
```

### 5.2 约束
- 内容区与 footer 之间必须保留“可呼吸空白”。
- 页面不可在 footer 后继续出现白色滚动空间。

## 6. 页内选择 Bar（履历/时光机）规范（必须）

### 6.1 结构
```html
<section class="view-filter" role="tablist">
  <button class="view-filter-btn filter-btn is-active" role="tab" aria-selected="true">履历</button>
  <button class="view-filter-btn filter-btn" role="tab" aria-selected="false">时光机</button>
</section>
```

### 6.2 视觉
- 容器：`width: min(960px, 100%); margin-top: clamp(30px, 4vw, 48px)`
- 间距：`gap: 16px`
- 按钮：胶囊样式，`padding: 8px 34px`，`border-radius: 20px`
- Active：黑底白字（`--accent`）

## 7. Sort Filter 规范（必须）

### 7.1 结构
```html
<div class="timeline-sort">
  <button class="timeline-sort-trigger" aria-expanded="false">时间倒序</button>
  <div class="timeline-sort-menu" hidden>
    <button class="timeline-sort-item" data-sort-mode="desc">时间倒序</button>
    <button class="timeline-sort-item" data-sort-mode="asc">时间顺序</button>
    <div class="timeline-sort-year-wrap">
      <button class="timeline-sort-item timeline-sort-year-trigger" data-sort-mode="year">年份</button>
      <div class="timeline-year-submenu"></div>
    </div>
    <div class="timeline-sort-cate-list"></div>
  </div>
</div>
```

### 7.2 菜单样式
- 主菜单：白底、`1px` 细边、圆角 `10px`、阴影 `0 8px 20px rgba(26,26,26,.12)`
- 一级 item：`font-size: 12px; padding: 6px 8px; border-radius: 7px`
- 年份二级菜单与一级菜单阴影/边框风格一致。

### 7.3 强调（浅灰背景）规则
- 仅两种场景允许浅灰背景：
  1. 鼠标悬浮（或键盘 focus）项
  2. 当前选中的“类别”项（`is-active-cate`）
- 时间顺序/时间倒序/年份项不使用常驻高亮底色。
- 统一强调色值：`#f5f5f5`（about sort filter 与项目详情提纲共用）。

### 7.4 交互规则
- 悬浮或点击“年份”时出现二级菜单。
- 二级菜单在主 sort 菜单关闭前保持可见（`is-open` 持有）。
- 点击菜单外区域，整个 sort 菜单关闭。
- 类别项动态来自 `timeline.csv` 的 `cate/cate_en`。

### 7.5 项目详情提纲（Outline）悬浮强调
- 详情页提纲项（`.detail-outline-row`）的 hover/focus 强调背景必须与 about sort filter 一致，使用 `#f5f5f5`。
- 禁止使用偏暖灰（如 `#f5f2ed`）或其他页面私有悬浮色，保证跨页面交互反馈统一。

## 8. 展开按钮规范（必须）

用于履历卡片的“展开/收起”交互。

### 8.1 按钮样式
```css
.fold-toggle {
  font-size: 12px;
  line-height: 1.2;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 1px 2px 1px 0;
  color: #5f5f5f;
  background: none;
  border: 0;
}
.fold-toggle .caret {
  width: 6px;
  height: 6px;
  border-right: 1px solid currentColor;
  border-bottom: 1px solid currentColor;
  transform: rotate(45deg);
}
.fold-toggle--collapse .caret {
  transform: rotate(-135deg);
}
```

### 8.2 交互与动画
- 默认显示“展开”，点击后抽屉下滑。
- 详情区以淡入淡出为主，伴随位移和高度过渡。
- “收起”按钮在详情底部出现。
- 隐藏态按钮不可聚焦（`tabIndex=-1` + `disabled`）。

## 9. 内容卡片与时间线补充规范

### 9.1 履历卡片
- 左右两列：`64px` icon + 文本区。
- icon：`64x64`, `border-radius: 5px`，无灰色描边。
- 标题 `16px`，辅助信息 `12px`。

### 9.2 时光机条目
- 日期 `16px`，地点/事件 `12px`。
- 链接色统一：`rgb(51, 156, 255)`。

## 10. 动效规范
- 卡片/按钮 hover：只允许轻微位移（通常 `translateY(-1px)`）。
- 展开抽屉：
  - 容器高度约 `420ms`（cubic-bezier）
  - 内容淡入 `280ms` 左右
- 呼吸灯类效果通过 `opacity` 变化，不使用强阴影闪烁。

## 11. 响应式规范
- 断点：`980px`、`720px`。
- `<980px`：hero 转纵向。
- `<720px`：
  - `about-page` 顶部间距降到 `56px`
  - 履历卡片 icon 缩至 `56x56`
  - 标题/信息改为纵向堆叠

## 12. 新页面落地模板（建议复制）

```html
<link rel="stylesheet" href="../../core/styles.css">
<link rel="stylesheet" href="./page.css">

<body data-page="about">
  <header class="site-header">...</header>

  <main class="container page-main">
    <!-- 页面内容 -->
    <section id="site-footer-copy" class="site-footer-copy" hidden></section>
  </main>

  <script src="./page.js" defer></script>
</body>
```

```css
.page-main {
  padding: clamp(72px, 9vw, 136px) 0 0;
}
.page-main > .site-footer-copy {
  margin-top: clamp(108px, 13.5vw, 180px);
  margin-bottom: 0;
}
```

## 13. 实施检查清单（上线前）
- [ ] 导航栏是否复用 `.site-header/.top-nav/.nav-btn/.lang-toggle`
- [ ] 底部栏是否使用 `.site-footer-copy`，并且 footer 后无白色滚动
- [ ] 页内选择 bar 是否为胶囊样式，active 黑底白字
- [ ] sort 菜单是否支持：时间顺序、年份二级、类别一级
- [ ] 浅灰背景是否仅用于“hover + 当前类别”
- [ ] 项目详情提纲 hover 背景是否为 `#f5f5f5` 并与 sort filter 一致
- [ ] 展开按钮箭头是否完整显示、文字与箭头水平对齐
- [ ] 移动端（980/720）布局是否符合规范
- [ ] 文本与数据是否支持中英文与 CSV 动态加载

---

版本：`v1.0`（基于当前 `core/styles.css` 与 `contents/aboutme` 实现）
