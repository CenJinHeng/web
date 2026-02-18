# 项目说明（当前版本）

## 1. 目录结构
- `index.html`：项目主页（导航、类型筛选、瀑布流卡片）。
- `core/styles.css`：全站公共样式与响应式规则。
- `core/script.js`：主页逻辑（语言切换、读取 CSV、渲染筛选与卡片）。
- `editor.html`：项目编辑器入口。
- `Editor/editor.css`：编辑器样式。
- `Editor/editor.js`：编辑器逻辑（连接目录、项目 CRUD、类型管理、详情页编辑与保存）。
- `aboutme/about.css`、`aboutme/about.js`：About 公共样式与脚本（导航栏左侧标题、底部文案与多语言内容渲染）。
- `detailSet/detail.css`、`detailSet/detail.js`：详情页公共模板样式与逻辑。
- `contents/aboutme/index.html`：About 内容文件（编辑器保存关于我时固定写入这里）。
- `contents/aboutme/assets/`：About 资源目录（图片/附件等）。
- `contents/assets/projects.csv`：项目主数据表。
- `contents/assets/project_types.csv`：项目类型数据表。
- `contents/assets/site_personalization.json`：导航左侧标题（中英文）与项目页底部文案配置。
- `contents/project_details/<项目ID>/index.html`：项目详情页文件。
- `contents/project_details/<项目ID>/assets/`：项目详情和封面等资源目录。

## 2. 内容与模板分离规则
- 所有用户创作内容都在 `contents/`。
- 页面模板、样式和脚本都在 `contents/` 外（如 `core/`、`Editor/`、`aboutme/`）。
- 分享或迁移内容时，只需复制 `contents/` 文件夹。

## 3. 核心逻辑
- 主页筛选类型来自 `contents/assets/project_types.csv`。
- 项目卡片来自 `contents/assets/projects.csv`，其中 `type` 关联 `project_types.csv.id`。
- 详情页固定路径：`contents/project_details/<id>/index.html`。
- 详情页上下项目导航数据来源：`contents/assets/projects.csv`。
- 详情页类型文案来源：`contents/assets/project_types.csv`（支持中英文）。

## 4. 编辑器行为
- 编辑器有三个页签：
  - `编辑项目`：项目和详情内容管理。
  - `编辑主页`：导航栏左侧标题（中英文）与项目页底部文案编辑。
  - `编辑关于我`：关于我内容编辑（中英文）。
- 编辑器不会在“仅连接目录”时自动创建 `contents/`。
- 只有执行保存（项目、类型、详情）时才按需创建目录/文件。
- 选择目录时可选站点根目录或 `contents/`，编辑器会自动识别。
- 新增/修改项目时：
  - 封面保存到 `contents/project_details/<id>/assets/cover.<ext>`。
  - `projects.csv` 的 `image` 字段同步为该路径。
- 保存详情页时：
  - 页面保存到 `contents/project_details/<id>/index.html`。
  - 插入图片/文件保存到 `contents/project_details/<id>/assets/`。
- 保存关于我时：
  - 页面保存到 `contents/aboutme/index.html`。
  - 资源目录固定为 `contents/aboutme/assets/`。

## 5. 数据文件规范

### 5.1 `contents/assets/projects.csv`
| 字段 | 含义 | 示例 |
| --- | --- | --- |
| id | 项目唯一编号 | p01 |
| name_zh | 项目中文名 | 城市滨水复兴 |
| name_en | 项目英文名 | Waterfront Renewal |
| type | 类型 ID（来自 `project_types.csv`，可为空） | t1 |
| date | 时间（YYYY-MM） | 2024-10 |
| tags | 标签（可空，使用 `|` 分隔） | 工业设计\|交互 |
| image | 卡片封面路径 | contents/project_details/p01/assets/cover.png |

### 5.2 `contents/assets/project_types.csv`
| 字段 | 含义 | 示例 |
| --- | --- | --- |
| id | 类型唯一 ID（自动编号） | t1 |
| name_zh | 中文名称 | 产品设计 |
| name_en | 英文名称 | Product Design |

### 5.3 类型管理规则
- 类型编号使用 `t1`、`t2`、`t3`...，由编辑器自动分配。
- 修改类型名称后，主页筛选和详情页类型文案会同步更新。
- 删除类型后，引用该类型的项目会被批量置空 `type`。

## 6. About 数据规则
- About 内容来自 `contents/aboutme/index.html`。
- About 资源统一放在 `contents/aboutme/assets/`。
- 若 `contents/aboutme/index.html` 缺失，编辑器会在连接目录后自动按默认模板创建。

## 7. 本地打开说明（file://）
- 直接双击 HTML 打开时，浏览器会限制网页自动访问本地文件夹。
- 网站页和编辑器页会弹窗提示手动选择 `contents` 文件夹授权。
- 在线部署后（如 Netlify/Vercel/GitHub Pages）通常不会有这个本地限制。

## 8. 内容共享
- 发送给他人时，只需提供 `contents/`。
- 对方将 `contents/` 放到同级目录即可同步内容。
