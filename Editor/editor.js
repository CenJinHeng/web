const i18n = {
  zh: {
    nav: {
      projects: "项目",
      about: "关于我",
      ariaLabel: "主导航",
      langToggleAria: "切换语言"
    },
    editor: {
      kicker: "内容管理",
      title: "项目编辑器",
      subtitle: "选择项目目录后即可编辑项目数据。",
      open: "选择项目目录",
      reselect: "重新选择目录",
      new: "新建项目",
      tabEdit: "编辑项目",
      tabPersonalize: "编辑主页",
      tabAbout: "编辑关于我",
      folderHelpAria: "目录选择说明",
      folderPickerHint: "请选择index.html所在的文件夹"
    },
    status: {
      notConnected: "未连接项目目录（首次需授权一次）",
      connected: "已连接项目目录：{name}",
      saved: "已保存",
      error: "操作失败：{message}",
      invalidRank: "排序需为大于 0 的整数",
      needFolder: "请先选择项目目录",
      needDetailProject: "请先打开一个项目的详情页",
      missingFields: "请填写必填字段",
      idExists: "编号已存在，请更换",
      fileApi: "当前浏览器不支持本地文件编辑，请使用 Chrome 或 Edge。",
      importCanceled: "你取消了导入",
      importMissingHtml: "导入失败：没有找到 HTML 文件（请确认文件夹里至少有一个 .html 文件）",
      importSourceConflict: "导入失败：请不要选择当前网站或 contents 目录，请选择外部内容文件夹",
      importDetailDone: "详情页已导入，并自动套用模板",
      importAboutDone: "关于我已导入，并自动套用模板",
      importedDetailReadonly: "当前详情页来自“导入文件”模式，编辑器不支持直接保存。请修改 contents/project_details/<id>/index.html 或重新导入。",
      importedAboutReadonly: "当前关于我来自“导入文件”模式，编辑器不支持直接保存。请修改 contents/aboutme/index.html 或重新导入。",
      projectHiddenByType: "该项目当前被“项目类型隐藏”控制，请先展示对应类型。"
    },
    list: {
      title: "项目列表",
      empty: "暂无项目",
      unsaved: "（新建未保存）"
    },
    table: {
      id: "编号",
      name: "名称",
      type: "类型",
      date: "时间",
      rank: "排序",
      actions: "操作"
    },
    actions: {
      edit: "编辑",
      remove: "删除",
      delete: "删除",
      hide: "隐藏",
      show: "展示"
    },
    form: {
      title: "项目信息编辑",
      emptyNotice: "需要点击右侧列表选择项目或者点击‘新建项目’开始编辑",
      id: "编号",
      nameZh: "中文名称",
      nameEn: "英文名称",
      type: "项目类型",
      typeEmpty: "未分类",
      date: "时间",
      rank: "排序",
      rankPlaceholder: "点击选择或输入数字",
      tags: "标签",
      tagsHint: "输入标签",
      tagAdd: "+",
      tagRemoveAria: "删除标签 {tag}",
      coverExists: "已有封面图",
      coverMissing: "没有封面图，可添加",
      coverView: "查看",
      coverSelect: "选择图片",
      imagePath: "图片路径",
      imageHint: "contents/project_details/<id>/assets/cover.png",
      imageFile: "上传封面",
      save: "保存",
      cancel: "取消"
    },
    detail: {
      title: "详情页编辑",
      importFolder: "导入文件",
      navInitialLabel: "导航栏初始颜色",
      navInitialLight: "白色",
      navInitialDark: "深灰",
      paragraphLabel: "段落",
      contentLabel: "内容",
      fontLabel: "字体",
      fontSize: "字号",
      body: "正文",
      note: "说明",
      h1: "一级标题",
      h2: "二级标题",
      h3: "三级标题",
      ol: "有序列表",
      ul: "无序列表",
      codeBlock: "代码块",
      quote: "引用",
      divider: "分割线",
      table: "插入表格",
      file: "插入文件",
      tableSizePrompt: "表格尺寸",
      tableSizeHint: "例如 3x3",
      tableInsert: "插入",
      tableSizeInvalid: "请输入有效尺寸（例如 3x3）",
      linkPromptUrl: "请输入链接地址",
      linkPromptText: "请输入链接名称",
      tablePromptRows: "请输入表格行数",
      tablePromptCols: "请输入表格列数",
      bold: "加粗",
      italic: "斜体",
      underline: "下划线",
      strike: "删除线",
      textColor: "文字颜色",
      highlight: "文字高亮",
      alignLeft: "左对齐",
      alignCenter: "居中",
      alignRight: "右对齐",
      link: "插入链接",
      bgSection: "背景区间",
      columnsInsert: "插入分栏",
      columnsPopoverTitle: "插入分栏",
      columnsCount: "分栏数",
      columnsColor: "分栏颜色",
      columnsUseColor: "启用颜色",
      columnsApply: "插入分栏",
      columnsMoveUp: "移动到上一行",
      columnsMoveDown: "移动到下一行",
      columnsDelete: "删除分栏",
      columnsExitEdit: "退出分栏编辑",
      columnsCountInvalid: "请输入 2-6 的分栏数",
      bgRangeTitle: "按行设置背景",
      bgRangeStart: "起始行",
      bgRangeEnd: "结束行",
      bgRangeColor: "背景颜色",
      bgRangeApply: "应用区间",
      bgRangeRemove: "删除区间",
      buttonInsert: "插入按键",
      buttonPopoverTitle: "插入按键",
      buttonTextLabel: "按钮文字",
      buttonTextPlaceholder: "按钮",
      buttonLinkTypeLabel: "跳转类型",
      buttonTypeAnchor: "本页位置",
      buttonTypeInternal: "内部文件",
      buttonTypeExternal: "外部链接",
      buttonTargetAnchorLabel: "本页行号",
      buttonTargetAnchorHint: "例如 12（表示第12行）",
      buttonTargetInternalLabel: "内部文件路径",
      buttonTargetInternalHint: "例如 contents/project_details/p01/index.html",
      buttonTargetExternalLabel: "外部链接 URL",
      buttonTargetExternalHint: "例如 https://example.com",
      buttonStyleLabel: "按钮样式",
      buttonHasBorder: "显示外框",
      buttonRadius: "圆角(px)",
      buttonWidth: "宽度(px)",
      buttonHeight: "高度(px)",
      buttonBorderColor: "外框颜色",
      buttonFillColor: "内部颜色",
      buttonTextColorLabel: "文字颜色",
      buttonBoldText: "文字加粗",
      buttonInsertAction: "插入按键",
      buttonDefaultText: "按钮",
      buttonTargetRequired: "请先填写跳转目标",
      image: "插入图片",
      webInsert: "插入网页",
      webPopoverTitle: "插入网页",
      webLinkTypeLabel: "网页类型",
      webTypeExternal: "外部链接",
      webTypeInternal: "内部HTML文件",
      webTargetExternalLabel: "网页链接 URL",
      webTargetExternalHint: "例如 https://example.com",
      webTargetInternalLabel: "内部文件路径",
      webTargetInternalHint: "例如 contents/aboutme/index.html",
      webPickFile: "选择HTML文件",
      webInsertAction: "插入网页",
      webTargetRequired: "请先填写网页地址",
      webTargetInvalid: "内部网页需填写 .html 或 .htm 文件路径",
      webPickNeedFolder: "请先选择项目目录后再选择内部HTML文件",
      webPickUnsupported: "当前浏览器不支持选择文件，请手动填写路径",
      webPickOutside: "请选择当前项目目录里的HTML文件",
      webPlaceholderHint: "请点击下方的预览按钮查看插入效果",
      webPlaceholderLinkText: "查看链接的网页",
      crop: "裁剪",
      widthPx: "宽度(px)",
      heightPx: "高度(px)",
      replaceImage: "替换图片",
      save: "保存详情页",
      preview: "预览",
      cancel: "取消",
      edit: "编辑详情页",
      saved: "详情页已保存"
    },
    typeManager: {
      title: "项目类型管理",
      id: "编号",
      nameZh: "中文名称",
      nameEn: "英文名称",
      actions: "操作",
      add: "新增类型",
      edit: "编辑",
      save: "保存",
      cancel: "取消",
      remove: "删除",
      hide: "隐藏",
      show: "展示",
      deleteConfirm: "删除该项目类型后，这个类型下的项目不会被删除，但会失去项目类型，需要你单独删除项目。是否继续？",
      newZh: "新类型中文名称",
      newEn: "新类型英文名称"
    },
    personalize: {
      title: "个性化设置",
      brandGroupTitle: "导航栏左侧标题",
      brandLabelZh: "导航栏左侧标题（中文）",
      brandLabelEn: "导航栏左侧标题（英文）",
      brandPlaceholderZh: "XXX的个人空间",
      brandPlaceholderEn: "XXX's Space",
      footerEnable: "启用项目页底部文案",
      footerPlaceholder: "在这里编辑底部文案...",
      fontIncrease: "字号增大",
      fontDecrease: "字号缩小",
      save: "保存个性化",
      saved: "个性化设置已保存",
      linkPromptUrl: "请输入链接地址",
      linkPromptText: "请输入链接名称"
    },
    aboutEditor: {
      title: "关于我编辑",
      importFolder: "导入文件",
      save: "保存关于我",
      saved: "关于我已保存"
    },
    copyAction: {
      button: "把{lang}的内容粘过来",
      langZh: "中文",
      langEn: "英文"
    }
  },
  en: {
    nav: {
      projects: "Projects",
      about: "About",
      ariaLabel: "Primary",
      langToggleAria: "Switch language"
    },
    editor: {
      kicker: "Content",
      title: "Project Editor",
      subtitle: "Connect the project folder to edit data.",
      open: "Select Folder",
      reselect: "Change Folder",
      new: "New Project",
      tabEdit: "Edit Projects",
      tabPersonalize: "Edit Home",
      tabAbout: "Edit About",
      folderHelpAria: "Folder selection help",
      folderPickerHint: "Select the folder containing index.html"
    },
    status: {
      notConnected: "No project folder connected (first time requires permission)",
      connected: "Connected: {name}",
      saved: "Saved",
      error: "Failed: {message}",
      invalidRank: "Rank must be an integer greater than 0",
      needFolder: "Please select the project folder first",
      needDetailProject: "Please open a project detail page first",
      missingFields: "Please fill in required fields",
      idExists: "ID already exists",
      fileApi: "File System Access API not supported. Use Chrome or Edge.",
      importCanceled: "Import cancelled",
      importMissingHtml: "Import failed: no HTML file found (at least one .html file is required)",
      importSourceConflict: "Import failed: do not pick the current site folder or contents folder. Pick an external source folder.",
      importDetailDone: "Detail page imported and wrapped by template",
      importAboutDone: "About page imported and wrapped by template",
      importedDetailReadonly: "This detail page is from imported-file mode. Rich-text save is disabled. Edit contents/project_details/<id>/index.html directly or re-import.",
      importedAboutReadonly: "This about page is from imported-file mode. Rich-text save is disabled. Edit contents/aboutme/index.html directly or re-import.",
      projectHiddenByType: "This project is hidden by its project type. Show the type first."
    },
    list: {
      title: "Projects",
      empty: "No projects",
      unsaved: "(Unsaved New)"
    },
    table: {
      id: "ID",
      name: "Name",
      type: "Type",
      date: "Date",
      rank: "Rank",
      actions: "Actions"
    },
    actions: {
      edit: "Edit",
      remove: "Delete",
      delete: "Delete",
      hide: "Hide",
      show: "Show"
    },
    form: {
      title: "Project Info Editor",
      emptyNotice: "Select a project from the list or click \"New Project\" to start editing.",
      id: "ID",
      nameZh: "Chinese Name",
      nameEn: "English Name",
      type: "Type",
      typeEmpty: "Uncategorized",
      date: "Date",
      rank: "Rank",
      rankPlaceholder: "Click to choose or enter a number",
      tags: "Tags",
      tagsHint: "Type a tag",
      tagAdd: "+",
      tagRemoveAria: "Remove tag {tag}",
      coverExists: "Cover exists",
      coverMissing: "No cover yet, you can add one",
      coverView: "View",
      coverSelect: "Choose Image",
      imagePath: "Image Path",
      imageHint: "contents/project_details/<id>/assets/cover.png",
      imageFile: "Upload Cover",
      save: "Save",
      cancel: "Cancel"
    },
    detail: {
      title: "Detail Editor",
      importFolder: "Import Files",
      navInitialLabel: "Initial Navbar Color",
      navInitialLight: "White",
      navInitialDark: "Dark Gray",
      paragraphLabel: "Paragraph",
      contentLabel: "Content",
      fontLabel: "Font",
      fontSize: "Size",
      body: "Body",
      note: "Note",
      h1: "Heading 1",
      h2: "Heading 2",
      h3: "Heading 3",
      ol: "Ordered List",
      ul: "Unordered List",
      codeBlock: "Code Block",
      quote: "Quote",
      divider: "Divider",
      table: "Insert Table",
      file: "Insert File",
      tableSizePrompt: "Table Size",
      tableSizeHint: "e.g. 3x3",
      tableInsert: "Insert",
      tableSizeInvalid: "Enter a valid size (e.g. 3x3)",
      linkPromptUrl: "Enter link URL",
      linkPromptText: "Enter link text",
      tablePromptRows: "Enter table rows",
      tablePromptCols: "Enter table columns",
      bold: "Bold",
      italic: "Italic",
      underline: "Underline",
      strike: "Strikethrough",
      textColor: "Text Color",
      highlight: "Highlight",
      alignLeft: "Align Left",
      alignCenter: "Align Center",
      alignRight: "Align Right",
      link: "Insert Link",
      bgSection: "Background Range",
      columnsInsert: "Insert Columns",
      columnsPopoverTitle: "Insert Columns",
      columnsCount: "Columns",
      columnsColor: "Column Color",
      columnsUseColor: "Use Custom Color",
      columnsApply: "Insert Columns",
      columnsMoveUp: "Move Up",
      columnsMoveDown: "Move Down",
      columnsDelete: "Delete Columns",
      columnsExitEdit: "Exit Column Edit",
      columnsCountInvalid: "Please enter a column count between 2 and 6",
      bgRangeTitle: "Set Background By Line",
      bgRangeStart: "Start Line",
      bgRangeEnd: "End Line",
      bgRangeColor: "Background Color",
      bgRangeApply: "Apply Range",
      bgRangeRemove: "Remove Range",
      buttonInsert: "Insert Button",
      buttonPopoverTitle: "Insert Button",
      buttonTextLabel: "Button Text",
      buttonTextPlaceholder: "Button",
      buttonLinkTypeLabel: "Link Type",
      buttonTypeAnchor: "Same Page",
      buttonTypeInternal: "Internal File",
      buttonTypeExternal: "External URL",
      buttonTargetAnchorLabel: "Line Number",
      buttonTargetAnchorHint: "e.g. 12 (line 12)",
      buttonTargetInternalLabel: "Internal File Path",
      buttonTargetInternalHint: "e.g. contents/project_details/p01/index.html",
      buttonTargetExternalLabel: "External URL",
      buttonTargetExternalHint: "e.g. https://example.com",
      buttonStyleLabel: "Button Style",
      buttonHasBorder: "Show Border",
      buttonRadius: "Radius (px)",
      buttonWidth: "Width (px)",
      buttonHeight: "Height (px)",
      buttonBorderColor: "Border Color",
      buttonFillColor: "Fill Color",
      buttonTextColorLabel: "Text Color",
      buttonBoldText: "Bold Text",
      buttonInsertAction: "Insert Button",
      buttonDefaultText: "Button",
      buttonTargetRequired: "Please enter a target first",
      image: "Insert Image",
      webInsert: "Insert Web Page",
      webPopoverTitle: "Insert Web Page",
      webLinkTypeLabel: "Page Type",
      webTypeExternal: "External Link",
      webTypeInternal: "Internal HTML File",
      webTargetExternalLabel: "Web URL",
      webTargetExternalHint: "e.g. https://example.com",
      webTargetInternalLabel: "Internal File Path",
      webTargetInternalHint: "e.g. contents/aboutme/index.html",
      webPickFile: "Choose HTML File",
      webInsertAction: "Insert Web Page",
      webTargetRequired: "Please enter a web page address",
      webTargetInvalid: "Internal web page must be a .html or .htm file path",
      webPickNeedFolder: "Select the project folder before choosing an internal HTML file",
      webPickUnsupported: "File picker is not supported in this browser. Enter the path manually.",
      webPickOutside: "Choose an HTML file inside the current project folder",
      webPlaceholderHint: "Click the Preview button below to view the embedded page",
      webPlaceholderLinkText: "Open linked web page",
      crop: "Crop",
      widthPx: "Width (px)",
      heightPx: "Height (px)",
      replaceImage: "Replace Image",
      save: "Save Detail",
      preview: "Preview",
      cancel: "Cancel",
      edit: "Edit Detail",
      saved: "Detail saved"
    },
    typeManager: {
      title: "Project Type Management",
      id: "ID",
      nameZh: "Chinese Name",
      nameEn: "English Name",
      actions: "Actions",
      add: "Add Type",
      edit: "Edit",
      save: "Save",
      cancel: "Cancel",
      remove: "Delete",
      hide: "Hide",
      show: "Show",
      deleteConfirm: "Deleting this type will not delete its projects. Those projects will lose their type and must be deleted one by one. Continue?",
      newZh: "New Chinese type name",
      newEn: "New English type name"
    },
    personalize: {
      title: "Personalization",
      brandGroupTitle: "Left Navbar Title",
      brandLabelZh: "Left Navbar Title (ZH)",
      brandLabelEn: "Left Navbar Title (EN)",
      brandPlaceholderZh: "XXX's Chinese Space",
      brandPlaceholderEn: "XXX's Space",
      footerEnable: "Enable footer text on project page",
      footerPlaceholder: "Write footer text here...",
      fontIncrease: "Increase Size",
      fontDecrease: "Decrease Size",
      save: "Save Personalization",
      saved: "Personalization saved",
      linkPromptUrl: "Enter link URL",
      linkPromptText: "Enter link text"
    },
    aboutEditor: {
      title: "About Editor",
      importFolder: "Import Files",
      save: "Save About",
      saved: "About saved"
    },
    copyAction: {
      button: "Paste {lang} content",
      langZh: "Chinese",
      langEn: "English"
    }
  }
};

const LEGACY_TYPE_FOLDER = {
  product: "product",
  urban: "planning",
  architecture: "architect"
};
const IS_FILE_PROTOCOL = window.location.protocol === "file:";
const PERSONALIZATION_FILE = "site_personalization.json";
const ABOUT_DATA_FILE = "about-data.js";
const ABOUT_CONTENT_FILE = "index.html";
const DEFAULT_PERSONALIZATION = Object.freeze({
  navBrandTextZh: "XXX的个人空间",
  navBrandTextEn: "XXX's Space",
  footerEnabled: false,
  footerHtmlZh: "",
  footerHtmlEn: "",
  footerBgRangesZh: [],
  footerBgRangesEn: []
});
const DEFAULT_ABOUT_I18N = Object.freeze({
  zh: {
    page: {
      title: "关于我"
    },
    nav: {
      projects: "项目",
      about: "关于我",
      ariaLabel: "主导航",
      langToggleAria: "切换语言"
    },
    about: {
      notice: "暂无内容，请先导入 contents 文件夹。",
      content_html: ""
    }
  },
  en: {
    page: {
      title: "About"
    },
    nav: {
      projects: "Projects",
      about: "About",
      ariaLabel: "Primary",
      langToggleAria: "Switch language"
    },
    about: {
      notice: "No content found. Please import the contents folder first.",
      content_html: ""
    }
  }
});
const EXEC_FONT_SIZE_TO_PX = Object.freeze({
  1: 12,
  2: 14,
  3: 16,
  4: 18,
  5: 24,
  6: 32,
  7: 48
});
const EXEC_FONT_SIZE_VALUES = Object.keys(EXEC_FONT_SIZE_TO_PX);
const IMAGE_RESIZE_HANDLES = ["nw", "ne", "sw", "se"];
const IMAGE_CROP_HANDLES = ["n", "s", "e", "w", "nw", "ne", "sw", "se"];
const IMAGE_MIN_WIDTH = 120;
const IMAGE_MIN_HEIGHT = 80;
const IMAGE_MIN_CROP_WIDTH = 36;
const IMAGE_MIN_CROP_HEIGHT = 36;
const TABLE_MIN_COLUMN_WIDTH = 84;
const TABLE_RESIZE_HANDLE_CLASS = "table-col-resize-handle";
const EDITOR_LIST_MAX_DEPTH = 3;
const TEXT_COLOR_PALETTE_ROWS = Object.freeze([
  Object.freeze(["#dbe5f1", "#cfe2f3", "#d9ead3", "#d0e0e3", "#d9d2e9", "#fce5cd", "#f4cccc", "#f9cb9c", "#d9d9d9", "#eeeeee"]),
  Object.freeze(["#b4c7e7", "#9fc5e8", "#b6d7a8", "#a2c4c9", "#b4a7d6", "#f9cb9c", "#ea9999", "#f6b26b", "#b7b7b7", "#cccccc"]),
  Object.freeze(["#8eaadb", "#6fa8dc", "#93c47d", "#76a5af", "#8e7cc3", "#f6b26b", "#e06666", "#e69138", "#7f7f7f", "#999999"]),
  Object.freeze(["#2f5597", "#3d85c6", "#38761d", "#134f5c", "#674ea7", "#b45f06", "#cc0000", "#bf9000", "#444444", "#666666"])
]);
const HIGHLIGHT_COLOR_PRESETS = Object.freeze([
  "#cfd3d8",
  "#a9aeb4",
  "#ef6d68",
  "#f3a23a",
  "#ffdd00",
  "#b2e679",
  "#becdf0",
  "#dfcdf0"
]);

let textColorPresetsPopover = null;
let highlightColorPresetsPopover = null;

function getDetailFolder(project) {
  return [...state.contentPrefix, "project_details", project.id];
}

function getLegacyDetailFolder(project) {
  const key = String(project.type || "").toLowerCase();
  const folder = LEGACY_TYPE_FOLDER[key];
  if (!folder) return null;
  return [...state.contentPrefix, "project_details", folder, project.id];
}

function cloneDefaultPersonalization() {
  return {
    navBrandTextZh: DEFAULT_PERSONALIZATION.navBrandTextZh,
    navBrandTextEn: DEFAULT_PERSONALIZATION.navBrandTextEn,
    footerEnabled: DEFAULT_PERSONALIZATION.footerEnabled,
    footerHtmlZh: DEFAULT_PERSONALIZATION.footerHtmlZh,
    footerHtmlEn: DEFAULT_PERSONALIZATION.footerHtmlEn,
    footerBgRangesZh: [],
    footerBgRangesEn: []
  };
}

function cloneDefaultAboutI18n() {
  return {
    zh: {
      page: { ...DEFAULT_ABOUT_I18N.zh.page },
      nav: { ...DEFAULT_ABOUT_I18N.zh.nav },
      about: { ...DEFAULT_ABOUT_I18N.zh.about }
    },
    en: {
      page: { ...DEFAULT_ABOUT_I18N.en.page },
      nav: { ...DEFAULT_ABOUT_I18N.en.nav },
      about: { ...DEFAULT_ABOUT_I18N.en.about }
    }
  };
}

const state = {
  lang: detectLanguage(),
  strings: null,
  rootHandle: null,
  contentPrefix: ["contents"],
  projects: [],
  types: [],
  pendingNewProject: null,
  typeMode: "edit",
  typesDraft: [],
  typeDeletedIds: new Set(),
  formTags: [],
  tagInputActive: false,
  tagInputDraft: "",
  currentId: null,
  imageFile: null,
  currentDetailProject: null,
  selectedImage: null,
  replaceImageTarget: null,
  imageResizeSession: null,
  imageResizeRaf: 0,
  imageCropSession: null,
  imageCropRaf: 0,
  tableResizeSession: null,
  tableResizeRaf: 0,
  savedRange: null,
  personalizeSavedRange: null,
  aboutSavedRange: null,
  pendingImages: new Map(),
  pendingFiles: new Map(),
  activeTab: "project",
  personalization: cloneDefaultPersonalization(),
  personalizeLang: "zh",
  personalizeFooterDraftHtml: {
    zh: "",
    en: ""
  },
  detailLang: "zh",
  detailImportedMode: false,
  detailNavInitialTheme: "light",
  detailDraftHtml: {
    zh: "",
    en: ""
  },
  detailBgRanges: {
    zh: [],
    en: []
  },
  aboutI18n: cloneDefaultAboutI18n(),
  aboutLang: "zh",
  aboutImportedMode: false,
  aboutDraftHtml: {
    zh: "",
    en: ""
  },
  aboutBgRanges: {
    zh: [],
    en: []
  },
  personalizeFooterBgRanges: {
    zh: [],
    en: []
  },
  lineRangeContext: "",
  lineRangeTrigger: null,
  columnsPopoverContext: "",
  columnsPopoverTrigger: null,
  columnsEditContext: "",
  columnsEditBlock: null,
  columnsEditCell: null,
  textColorPopoverContext: "",
  textColorPopoverTrigger: null,
  textColorPopoverSourceInput: null,
  highlightColorPopoverContext: "",
  highlightColorPopoverTrigger: null,
  highlightColorPopoverSourceInput: null,
  draggingImageWrapper: null,
  insertButtonContext: "",
  insertButtonTrigger: null,
  insertButtonEditNode: null,
  webEmbedContext: "",
  webEmbedTrigger: null,
  lineNumberRaf: 0
};

function contentPathSegments(...segments) {
  return [...state.contentPrefix, ...segments];
}

function aboutContentPathSegments() {
  return contentPathSegments("aboutme", ABOUT_CONTENT_FILE);
}

function aboutAssetsPathSegments() {
  return contentPathSegments("aboutme", "assets");
}

function legacyAboutContentPathSegments() {
  if (!state.contentPrefix.length) return null;
  return ["aboutme", ABOUT_CONTENT_FILE];
}

function legacyAboutDataPathSegments() {
  if (!state.contentPrefix.length) return null;
  return ["aboutme", ABOUT_DATA_FILE];
}

const imageResizeObserver = new ResizeObserver((entries) => {
  entries.forEach((entry) => {
    const wrapper = entry.target;
    if (wrapper.classList && (wrapper.classList.contains("is-resizing") || wrapper.classList.contains("is-cropping"))) {
      return;
    }
    if (wrapper.dataset.lockRatio !== "true") return;
    const ratio = parseFloat(wrapper.dataset.ratio || "");
    if (!ratio || Number.isNaN(ratio)) return;
    if (wrapper.dataset.resizing === "1") return;
    wrapper.dataset.resizing = "1";
    const width = wrapper.getBoundingClientRect().width;
    const newHeight = Math.max(IMAGE_MIN_HEIGHT, Math.round(width * ratio));
    wrapper.style.height = `${newHeight}px`;
    if (state.selectedImage === wrapper) {
      syncImageInputs(wrapper);
      positionFloat(wrapper);
    }
    requestAnimationFrame(() => {
      wrapper.dataset.resizing = "0";
    });
  });
});

// Rich toolbar module: detail is the single source of truth.
// Add a new context here (and a `<div id="<context>-toolbar">`) to reuse the same toolbar instantly.
const UNIFIED_RICH_EDITOR_CONTEXTS = ["about", "personalize"];

function remapRichToolbarIdForContext(id, context) {
  const sourceId = String(id || "").trim();
  const targetContext = String(context || "").trim();
  if (!sourceId || !targetContext) return sourceId;
  if (sourceId === "insert-image") return `${targetContext}-image`;
  if (sourceId === "insert-file") return `${targetContext}-file`;
  if (sourceId.startsWith("detail-")) {
    return `${targetContext}-${sourceId.slice("detail-".length)}`;
  }
  return sourceId;
}

function syncUnifiedRichToolbarMarkup(context) {
  const detailToolbar = document.querySelector("#detail-panel .detail-toolbar");
  const targetToolbar = document.getElementById(`${context}-toolbar`);
  if (!(detailToolbar instanceof HTMLElement) || !(targetToolbar instanceof HTMLElement)) {
    return;
  }

  const sandbox = document.createElement("div");
  sandbox.innerHTML = detailToolbar.innerHTML;
  sandbox.querySelectorAll("#detail-web-embed").forEach((node) => node.remove());

  sandbox.querySelectorAll("[id]").forEach((node) => {
    const remapped = remapRichToolbarIdForContext(node.id, context);
    if (remapped && remapped !== node.id) {
      node.id = remapped;
    }
  });

  sandbox.querySelectorAll("label[for]").forEach((label) => {
    const sourceFor = String(label.getAttribute("for") || "").trim();
    if (!sourceFor) return;
    const remapped = remapRichToolbarIdForContext(sourceFor, context);
    if (remapped && remapped !== sourceFor) {
      label.setAttribute("for", remapped);
    }
  });

  targetToolbar.innerHTML = sandbox.innerHTML;
}

function syncAllUnifiedRichToolbars() {
  UNIFIED_RICH_EDITOR_CONTEXTS.forEach((context) => {
    syncUnifiedRichToolbarMarkup(context);
  });
}

syncAllUnifiedRichToolbars();

const elements = {
  openFolder: document.getElementById("open-folder"),
  folderHelp: document.getElementById("folder-help"),
  folderHelpToggle: document.getElementById("folder-help-toggle"),
  folderHelpPopover: document.getElementById("folder-help-popover"),
  newProject: document.getElementById("new-project"),
  statusWrap: document.getElementById("status-wrap"),
  status: document.getElementById("status"),
  typeList: document.getElementById("type-list"),
  typeAddMode: document.getElementById("type-add-mode"),
  typePanelFooter: document.getElementById("type-panel-footer"),
  typeCancel: document.getElementById("type-cancel"),
  typeSave: document.getElementById("type-save"),
  projectListScroll: document.getElementById("project-list-scroll"),
  projectList: document.getElementById("project-list"),
  projectEmpty: document.getElementById("project-empty"),
  projectFormEmpty: document.getElementById("project-form-empty"),
  form: document.getElementById("project-form"),
  idInput: document.getElementById("project-id"),
  nameZh: document.getElementById("name-zh"),
  nameEn: document.getElementById("name-en"),
  type: document.getElementById("type"),
  date: document.getElementById("date"),
  rank: document.getElementById("rank"),
  rankOptions: document.getElementById("project-rank-options"),
  tagsList: document.getElementById("tag-list"),
  imageFile: document.getElementById("image-file"),
  coverSelectBtn: document.getElementById("cover-select-btn"),
  coverStatusText: document.getElementById("cover-status-text"),
  coverViewLink: document.getElementById("cover-view-link"),
  cancelForm: document.getElementById("cancel-form"),
  deleteProject: document.getElementById("delete-project"),
  langToggle: document.querySelector("[data-lang-toggle]"),
  detailPanel: document.getElementById("detail-panel"),
  detailProjectName: document.getElementById("detail-project-name"),
  detailLangZh: document.getElementById("detail-lang-zh"),
  detailLangEn: document.getElementById("detail-lang-en"),
  detailLangCopy: document.getElementById("detail-lang-copy"),
  detailNavInitialLight: document.getElementById("detail-nav-initial-light"),
  detailNavInitialDark: document.getElementById("detail-nav-initial-dark"),
  detailLineGutter: document.getElementById("detail-line-gutter"),
  detailEditor: document.getElementById("detail-editor"),
  previewDetail: document.getElementById("preview-detail"),
  detailParagraph: document.getElementById("detail-paragraph"),
  detailNote: document.getElementById("detail-note"),
  detailH1: document.getElementById("detail-h1"),
  detailH2: document.getElementById("detail-h2"),
  detailH3: document.getElementById("detail-h3"),
  detailCode: document.getElementById("detail-code"),
  detailQuote: document.getElementById("detail-quote"),
  detailDivider: document.getElementById("detail-divider"),
  detailFontSize: document.getElementById("detail-font-size"),
  detailBold: document.getElementById("detail-bold"),
  detailItalic: document.getElementById("detail-italic"),
  detailUnderline: document.getElementById("detail-underline"),
  detailStrike: document.getElementById("detail-strike"),
  detailTextColor: document.getElementById("detail-text-color"),
  detailTextColorBtn: document.getElementById("detail-text-color-btn"),
  detailHighlightColor: document.getElementById("detail-highlight-color"),
  detailHighlightBtn: document.getElementById("detail-highlight-btn"),
  detailBgSection: document.getElementById("detail-bg-section"),
  detailColumns: document.getElementById("detail-columns"),
  detailAlignLeft: document.getElementById("detail-align-left"),
  detailAlignCenter: document.getElementById("detail-align-center"),
  detailAlignRight: document.getElementById("detail-align-right"),
  detailUl: document.getElementById("detail-ul"),
  detailOl: document.getElementById("detail-ol"),
  detailLink: document.getElementById("detail-link"),
  detailWebEmbed: document.getElementById("detail-web-embed"),
  detailInsertButton: document.getElementById("detail-insert-button"),
  detailTable: document.getElementById("detail-table"),
  detailTablePopover: document.getElementById("detail-table-popover"),
  detailTableSize: document.getElementById("detail-table-size"),
  detailTableInsert: document.getElementById("detail-table-insert"),
  detailTableCancel: document.getElementById("detail-table-cancel"),
  detailFileUpload: document.getElementById("detail-file-upload"),
  detailFile: document.getElementById("insert-file"),
  detailImage: document.getElementById("detail-image"),
  detailReplaceImage: document.getElementById("detail-replace-image"),
  insertImage: document.getElementById("insert-image"),
  detailFloat: document.getElementById("detail-float"),
  replaceImage: document.getElementById("replace-image"),
  toggleCrop: document.getElementById("toggle-crop"),
  imageAlignLeft: document.getElementById("image-align-left"),
  imageAlignCenter: document.getElementById("image-align-center"),
  imageAlignRight: document.getElementById("image-align-right"),
  imageWidth: document.getElementById("image-width"),
  imageHeight: document.getElementById("image-height"),
  saveDetail: document.getElementById("save-detail"),
  importDetailFolder: document.getElementById("import-detail-folder"),
  cancelDetail: document.getElementById("cancel-detail"),
  tabProject: document.getElementById("tab-project-edit"),
  tabPersonalize: document.getElementById("tab-personalize"),
  tabAbout: document.getElementById("tab-about-edit"),
  panelProject: document.getElementById("editor-tab-project"),
  panelPersonalize: document.getElementById("editor-tab-personalize"),
  panelAbout: document.getElementById("editor-tab-about"),
  personalizeBrandTextZh: document.getElementById("personalize-brand-text-zh"),
  personalizeBrandTextEn: document.getElementById("personalize-brand-text-en"),
  personalizeFooterEnabled: document.getElementById("personalize-footer-enabled"),
  personalizeLangZh: document.getElementById("personalize-lang-zh"),
  personalizeLangEn: document.getElementById("personalize-lang-en"),
  personalizeLangCopy: document.getElementById("personalize-lang-copy"),
  personalizeImageUpload: document.getElementById("personalize-image-upload"),
  personalizeFileUpload: document.getElementById("personalize-file-upload"),
  personalizeTextColor: document.getElementById("personalize-text-color"),
  personalizeHighlightColor: document.getElementById("personalize-highlight-color"),
  personalizeParagraph: document.getElementById("personalize-paragraph"),
  personalizeNote: document.getElementById("personalize-note"),
  personalizeH1: document.getElementById("personalize-h1"),
  personalizeH2: document.getElementById("personalize-h2"),
  personalizeH3: document.getElementById("personalize-h3"),
  personalizeCode: document.getElementById("personalize-code"),
  personalizeQuote: document.getElementById("personalize-quote"),
  personalizeDivider: document.getElementById("personalize-divider"),
  personalizeUl: document.getElementById("personalize-ul"),
  personalizeOl: document.getElementById("personalize-ol"),
  personalizeBold: document.getElementById("personalize-bold"),
  personalizeItalic: document.getElementById("personalize-italic"),
  personalizeUnderline: document.getElementById("personalize-underline"),
  personalizeStrike: document.getElementById("personalize-strike"),
  personalizeImage: document.getElementById("personalize-image"),
  personalizeFile: document.getElementById("personalize-file"),
  personalizeLink: document.getElementById("personalize-link"),
  personalizeTable: document.getElementById("personalize-table"),
  personalizeTablePopover: document.getElementById("personalize-table-popover"),
  personalizeTableSize: document.getElementById("personalize-table-size"),
  personalizeTableInsert: document.getElementById("personalize-table-insert"),
  personalizeTableCancel: document.getElementById("personalize-table-cancel"),
  personalizeTextColorBtn: document.getElementById("personalize-text-color-btn"),
  personalizeHighlightBtn: document.getElementById("personalize-highlight-btn"),
  personalizeFontSize: document.getElementById("personalize-font-size"),
  personalizeToolbar: document.getElementById("personalize-toolbar"),
  personalizeBgSection: document.getElementById("personalize-bg-section"),
  personalizeColumns: document.getElementById("personalize-columns"),
  personalizeInsertButton: document.getElementById("personalize-insert-button"),
  personalizeAlignLeft: document.getElementById("personalize-align-left"),
  personalizeAlignCenter: document.getElementById("personalize-align-center"),
  personalizeAlignRight: document.getElementById("personalize-align-right"),
  personalizeLineGutter: document.getElementById("personalize-line-gutter"),
  personalizeFooterEditor: document.getElementById("personalize-footer-editor"),
  savePersonalization: document.getElementById("save-personalization"),
  aboutLangZh: document.getElementById("about-lang-zh"),
  aboutLangEn: document.getElementById("about-lang-en"),
  aboutLangCopy: document.getElementById("about-lang-copy"),
  aboutImageUpload: document.getElementById("about-image-upload"),
  aboutFileUpload: document.getElementById("about-file-upload"),
  aboutLineGutter: document.getElementById("about-line-gutter"),
  aboutEditor: document.getElementById("about-editor"),
  aboutParagraph: document.getElementById("about-paragraph"),
  aboutNote: document.getElementById("about-note"),
  aboutH1: document.getElementById("about-h1"),
  aboutH2: document.getElementById("about-h2"),
  aboutH3: document.getElementById("about-h3"),
  aboutCode: document.getElementById("about-code"),
  aboutQuote: document.getElementById("about-quote"),
  aboutDivider: document.getElementById("about-divider"),
  aboutUl: document.getElementById("about-ul"),
  aboutOl: document.getElementById("about-ol"),
  aboutFontSize: document.getElementById("about-font-size"),
  aboutBold: document.getElementById("about-bold"),
  aboutItalic: document.getElementById("about-italic"),
  aboutUnderline: document.getElementById("about-underline"),
  aboutStrike: document.getElementById("about-strike"),
  aboutTextColor: document.getElementById("about-text-color"),
  aboutTextColorBtn: document.getElementById("about-text-color-btn"),
  aboutHighlightColor: document.getElementById("about-highlight-color"),
  aboutHighlightBtn: document.getElementById("about-highlight-btn"),
  aboutBgSection: document.getElementById("about-bg-section"),
  aboutColumns: document.getElementById("about-columns"),
  aboutAlignLeft: document.getElementById("about-align-left"),
  aboutAlignCenter: document.getElementById("about-align-center"),
  aboutAlignRight: document.getElementById("about-align-right"),
  aboutLink: document.getElementById("about-link"),
  aboutImage: document.getElementById("about-image"),
  aboutFile: document.getElementById("about-file"),
  aboutInsertButton: document.getElementById("about-insert-button"),
  aboutTable: document.getElementById("about-table"),
  aboutTablePopover: document.getElementById("about-table-popover"),
  aboutTableSize: document.getElementById("about-table-size"),
  aboutTableInsert: document.getElementById("about-table-insert"),
  aboutTableCancel: document.getElementById("about-table-cancel"),
  previewAbout: document.getElementById("preview-about"),
  importAboutFolder: document.getElementById("import-about-folder"),
  saveAbout: document.getElementById("save-about"),
  lineRangePopover: document.getElementById("line-range-popover"),
  lineRangeStart: document.getElementById("line-range-start"),
  lineRangeEnd: document.getElementById("line-range-end"),
  lineRangeColor: document.getElementById("line-range-color"),
  lineRangeApply: document.getElementById("line-range-apply"),
  lineRangeRemove: document.getElementById("line-range-remove"),
  lineRangeCancel: document.getElementById("line-range-cancel"),
  columnsPopover: document.getElementById("columns-popover"),
  columnsCount: document.getElementById("columns-count"),
  columnsColor: document.getElementById("columns-color"),
  columnsUseColor: document.getElementById("columns-use-color"),
  columnsApply: document.getElementById("columns-apply"),
  columnsCancel: document.getElementById("columns-cancel"),
  columnsEditMoveUp: document.getElementById("columns-edit-move-up"),
  columnsEditMoveDown: document.getElementById("columns-edit-move-down"),
  columnsEditDelete: document.getElementById("columns-edit-delete"),
  insertButtonPopover: document.getElementById("insert-button-popover"),
  insertButtonText: document.getElementById("insert-button-text"),
  insertButtonLinkType: document.getElementById("insert-button-link-type"),
  insertButtonLinkLabel: document.getElementById("insert-button-link-label"),
  insertButtonLinkTarget: document.getElementById("insert-button-link-target"),
  insertButtonHasBorder: document.getElementById("insert-button-has-border"),
  insertButtonBold: document.getElementById("insert-button-bold"),
  insertButtonRadius: document.getElementById("insert-button-radius"),
  insertButtonWidth: document.getElementById("insert-button-width"),
  insertButtonHeight: document.getElementById("insert-button-height"),
  insertButtonBorderColor: document.getElementById("insert-button-border-color"),
  insertButtonFillColor: document.getElementById("insert-button-fill-color"),
  insertButtonTextColor: document.getElementById("insert-button-text-color"),
  insertButtonApply: document.getElementById("insert-button-apply"),
  insertButtonCancel: document.getElementById("insert-button-cancel"),
  webEmbedPopover: document.getElementById("web-embed-popover"),
  webEmbedLinkType: document.getElementById("web-embed-link-type"),
  webEmbedTargetLabel: document.getElementById("web-embed-target-label"),
  webEmbedTarget: document.getElementById("web-embed-target"),
  webEmbedPickFile: document.getElementById("web-embed-pick-file"),
  webEmbedApply: document.getElementById("web-embed-apply"),
  webEmbedCancel: document.getElementById("web-embed-cancel"),
  columnsEditFloat: document.getElementById("columns-edit-float"),
  columnsEditExit: document.getElementById("columns-edit-exit"),
  localModal: document.getElementById("editor-local-open-modal"),
  localPick: document.getElementById("editor-local-open-pick"),
  localLater: document.getElementById("editor-local-open-later"),
  localStatus: document.getElementById("editor-local-open-status")
};

applyI18n(state.lang);
updateLangToggle();
bootstrapEditorAccess();
updateFolderButton(false);
setProjectFormMode(false);
setEditorTab("project");
renderPersonalizationForm();
refreshAboutDraftFromState();
renderAboutEditor();
updateInsertButtonTargetField();
updateWebEmbedTargetField();
queueLineNumberRefresh();
if (elements.saveAbout) {
  elements.saveAbout.disabled = true;
}

if (!supportsFileSystem()) {
  setStatus(t("status.fileApi"), "error");
  elements.openFolder.disabled = true;
  elements.typeAddMode.disabled = true;
  if (elements.typeSave) {
    elements.typeSave.disabled = true;
  }
  if (elements.typeCancel) {
    elements.typeCancel.disabled = true;
  }
  if (elements.savePersonalization) {
    elements.savePersonalization.disabled = true;
  }
  if (elements.saveAbout) {
    elements.saveAbout.disabled = true;
  }
  if (elements.importDetailFolder) {
    elements.importDetailFolder.disabled = true;
  }
  if (elements.importAboutFolder) {
    elements.importAboutFolder.disabled = true;
  }
  if (elements.localPick) {
    elements.localPick.disabled = true;
  }
if (IS_FILE_PROTOCOL) {
    showEditorLocalOpenModal("当前浏览器不支持“选择文件夹”，请使用 Chrome 或 Edge。", "error");
  }
}

function placeColorInputNearTrigger(input, trigger) {
  if (!(input instanceof HTMLInputElement)) return;

  let left = Math.round(window.innerWidth / 2);
  let top = Math.round(window.innerHeight / 2);
  if (trigger instanceof HTMLElement) {
    const rect = trigger.getBoundingClientRect();
    if (Number.isFinite(rect.left) && Number.isFinite(rect.top)) {
      left = Math.round(rect.left + Math.max(2, rect.width / 2));
      top = Math.round(rect.bottom - 2);
    }
  }

  const maxLeft = Math.max(2, window.innerWidth - 2);
  const maxTop = Math.max(2, window.innerHeight - 2);
  input.style.left = `${Math.min(maxLeft, Math.max(2, left))}px`;
  input.style.top = `${Math.min(maxTop, Math.max(2, top))}px`;
}

function openHiddenColorPicker(input, trigger) {
  if (!(input instanceof HTMLInputElement)) return;
  placeColorInputNearTrigger(input, trigger);
  try {
    if (typeof input.showPicker === "function") {
      input.showPicker();
      return;
    }
  } catch (error) {
    // Fall back to click when showPicker is unavailable or blocked.
  }
  input.click();
}

function applyTextColorForContext(context, color) {
  const normalized = normalizeHexColor(color, "#1d1c1a");
  if (context === "about") {
    applyAboutColorCommand("foreColor", normalized);
    return;
  }
  if (context === "personalize") {
    applyPersonalizeColorCommand("foreColor", normalized);
    return;
  }
  applyColorCommand("foreColor", normalized);
}

function updateTextColorPresetActive(color) {
  if (!(textColorPresetsPopover instanceof HTMLElement)) return;
  const normalized = normalizeHexColor(color, "#1d1c1a");
  textColorPresetsPopover.querySelectorAll(".text-color-presets-swatch").forEach((button) => {
    if (!(button instanceof HTMLElement)) return;
    const swatchColor = normalizeHexColor(button.dataset.color || "", "");
    button.classList.toggle("is-active", Boolean(swatchColor) && swatchColor === normalized);
  });
}

function applyTextColorFromPopover(color) {
  const context = state.textColorPopoverContext;
  if (!context) return;
  const normalized = normalizeHexColor(color, "#1d1c1a");
  if (state.textColorPopoverSourceInput instanceof HTMLInputElement) {
    state.textColorPopoverSourceInput.value = normalized;
  }
  updateTextColorPresetActive(normalized);
  applyTextColorForContext(context, normalized);
}

function createTextColorPresetSwatch(color) {
  const swatch = document.createElement("button");
  swatch.type = "button";
  swatch.className = "text-color-presets-swatch";
  swatch.dataset.color = color;
  swatch.style.backgroundColor = color;
  swatch.title = color;
  swatch.setAttribute("aria-label", color);
  swatch.addEventListener("click", () => {
    applyTextColorFromPopover(color);
  });
  return swatch;
}

function ensureTextColorPresetsPopover() {
  if (textColorPresetsPopover instanceof HTMLElement) return textColorPresetsPopover;

  const popover = document.createElement("div");
  popover.className = "detail-popover text-color-presets-popover";
  popover.hidden = true;
  popover.setAttribute("role", "dialog");
  popover.setAttribute("aria-label", "Text Color");

  const paletteGrid = document.createElement("div");
  paletteGrid.className = "text-color-presets-palette";
  TEXT_COLOR_PALETTE_ROWS.forEach((row) => {
    row.forEach((color) => {
      paletteGrid.appendChild(createTextColorPresetSwatch(color));
    });
  });

  popover.appendChild(paletteGrid);

  const paletteButton = document.createElement("button");
  paletteButton.type = "button";
  paletteButton.className = "editor-secondary text-color-presets-palette-btn";
  paletteButton.textContent = state.lang === "en" ? "Palette" : "色盘";
  paletteButton.addEventListener("click", () => {
    const sourceInput = state.textColorPopoverSourceInput;
    const trigger = state.textColorPopoverTrigger;
    hideTextColorPresetsPopover();
    if (sourceInput instanceof HTMLInputElement) {
      openHiddenColorPicker(sourceInput, trigger instanceof HTMLElement ? trigger : paletteButton);
    }
  });
  popover.appendChild(paletteButton);

  popover.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      hideTextColorPresetsPopover();
    }
  });

  document.body.appendChild(popover);
  textColorPresetsPopover = popover;
  return popover;
}

function positionTextColorPresetsPopover() {
  const popover = ensureTextColorPresetsPopover();
  if (!(popover instanceof HTMLElement) || popover.hidden) return;
  const trigger = state.textColorPopoverTrigger;
  if (!(trigger instanceof HTMLElement)) return;

  const triggerRect = trigger.getBoundingClientRect();
  popover.style.left = "12px";
  popover.style.top = "12px";

  const popRect = popover.getBoundingClientRect();
  const maxLeft = Math.max(12, window.innerWidth - popRect.width - 12);
  const nextLeft = Math.min(Math.max(12, triggerRect.left), maxLeft);

  let nextTop = triggerRect.bottom + 8;
  if (nextTop + popRect.height > window.innerHeight - 12) {
    nextTop = triggerRect.top - popRect.height - 8;
  }
  if (nextTop < 12) {
    nextTop = 12;
  }

  popover.style.left = `${nextLeft}px`;
  popover.style.top = `${nextTop}px`;
}

function hideTextColorPresetsPopover() {
  if (!(textColorPresetsPopover instanceof HTMLElement)) return;
  textColorPresetsPopover.hidden = true;
  state.textColorPopoverContext = "";
  state.textColorPopoverTrigger = null;
  state.textColorPopoverSourceInput = null;
}

function openTextColorPresetsPopover(context, trigger, sourceInput) {
  if (!(trigger instanceof HTMLElement)) return;
  const popover = ensureTextColorPresetsPopover();
  if (!(popover instanceof HTMLElement)) return;
  hideHighlightColorPresetsPopover();

  state.textColorPopoverContext = context;
  state.textColorPopoverTrigger = trigger;
  state.textColorPopoverSourceInput = sourceInput instanceof HTMLInputElement ? sourceInput : null;

  const currentColor = normalizeHexColor(
    state.textColorPopoverSourceInput?.value || "#1d1c1a",
    "#1d1c1a"
  );
  const paletteButton = popover.querySelector(".text-color-presets-palette-btn");
  if (paletteButton instanceof HTMLButtonElement) {
    paletteButton.textContent = state.lang === "en" ? "Palette" : "色盘";
  }
  updateTextColorPresetActive(currentColor);
  popover.hidden = false;
  positionTextColorPresetsPopover();
}

function applyHighlightColorForContext(context, color) {
  const normalized = normalizeHexColor(color, "#fff59d");
  if (context === "about") {
    applyAboutColorCommand("hiliteColor", normalized);
    return;
  }
  if (context === "personalize") {
    applyPersonalizeColorCommand("hiliteColor", normalized);
    return;
  }
  applyColorCommand("hiliteColor", normalized);
}

function updateHighlightColorPresetActive(color) {
  if (!(highlightColorPresetsPopover instanceof HTMLElement)) return;
  const normalized = normalizeHexColor(color, "#fff59d");
  highlightColorPresetsPopover.querySelectorAll(".highlight-color-presets-swatch").forEach((button) => {
    if (!(button instanceof HTMLElement)) return;
    const swatchColor = normalizeHexColor(button.dataset.color || "", "");
    button.classList.toggle("is-active", Boolean(swatchColor) && swatchColor === normalized);
  });
}

function applyHighlightColorFromPopover(color) {
  const context = state.highlightColorPopoverContext;
  if (!context) return;
  const normalized = normalizeHexColor(color, "#fff59d");
  if (state.highlightColorPopoverSourceInput instanceof HTMLInputElement) {
    state.highlightColorPopoverSourceInput.value = normalized;
  }
  updateHighlightColorPresetActive(normalized);
  applyHighlightColorForContext(context, normalized);
}

function createHighlightColorPresetSwatch(color) {
  const swatch = document.createElement("button");
  swatch.type = "button";
  swatch.className = "highlight-color-presets-swatch";
  swatch.dataset.color = color;
  swatch.style.backgroundColor = color;
  swatch.title = color;
  swatch.setAttribute("aria-label", color);
  swatch.addEventListener("click", () => {
    applyHighlightColorFromPopover(color);
  });
  return swatch;
}

function ensureHighlightColorPresetsPopover() {
  if (highlightColorPresetsPopover instanceof HTMLElement) return highlightColorPresetsPopover;

  const popover = document.createElement("div");
  popover.className = "detail-popover highlight-color-presets-popover";
  popover.hidden = true;
  popover.setAttribute("role", "dialog");
  popover.setAttribute("aria-label", "Text Highlight");

  const swatchRow = document.createElement("div");
  swatchRow.className = "highlight-color-presets-row";
  HIGHLIGHT_COLOR_PRESETS.forEach((color) => {
    swatchRow.appendChild(createHighlightColorPresetSwatch(color));
  });
  popover.appendChild(swatchRow);

  const paletteButton = document.createElement("button");
  paletteButton.type = "button";
  paletteButton.className = "editor-secondary text-color-presets-palette-btn highlight-color-presets-palette-btn";
  paletteButton.textContent = state.lang === "en" ? "Palette" : "色盘";
  paletteButton.addEventListener("click", () => {
    const sourceInput = state.highlightColorPopoverSourceInput;
    const trigger = state.highlightColorPopoverTrigger;
    hideHighlightColorPresetsPopover();
    if (sourceInput instanceof HTMLInputElement) {
      openHiddenColorPicker(sourceInput, trigger instanceof HTMLElement ? trigger : paletteButton);
    }
  });
  popover.appendChild(paletteButton);

  popover.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      hideHighlightColorPresetsPopover();
    }
  });

  document.body.appendChild(popover);
  highlightColorPresetsPopover = popover;
  return popover;
}

function positionHighlightColorPresetsPopover() {
  const popover = ensureHighlightColorPresetsPopover();
  if (!(popover instanceof HTMLElement) || popover.hidden) return;
  const trigger = state.highlightColorPopoverTrigger;
  if (!(trigger instanceof HTMLElement)) return;

  const triggerRect = trigger.getBoundingClientRect();
  popover.style.left = "12px";
  popover.style.top = "12px";

  const popRect = popover.getBoundingClientRect();
  const maxLeft = Math.max(12, window.innerWidth - popRect.width - 12);
  const nextLeft = Math.min(Math.max(12, triggerRect.left), maxLeft);

  let nextTop = triggerRect.bottom + 8;
  if (nextTop + popRect.height > window.innerHeight - 12) {
    nextTop = triggerRect.top - popRect.height - 8;
  }
  if (nextTop < 12) {
    nextTop = 12;
  }

  popover.style.left = `${nextLeft}px`;
  popover.style.top = `${nextTop}px`;
}

function hideHighlightColorPresetsPopover() {
  if (!(highlightColorPresetsPopover instanceof HTMLElement)) return;
  highlightColorPresetsPopover.hidden = true;
  state.highlightColorPopoverContext = "";
  state.highlightColorPopoverTrigger = null;
  state.highlightColorPopoverSourceInput = null;
}

function openHighlightColorPresetsPopover(context, trigger, sourceInput) {
  if (!(trigger instanceof HTMLElement)) return;
  const popover = ensureHighlightColorPresetsPopover();
  if (!(popover instanceof HTMLElement)) return;
  hideTextColorPresetsPopover();

  state.highlightColorPopoverContext = context;
  state.highlightColorPopoverTrigger = trigger;
  state.highlightColorPopoverSourceInput = sourceInput instanceof HTMLInputElement ? sourceInput : null;

  const currentColor = normalizeHexColor(
    state.highlightColorPopoverSourceInput?.value || "#fff59d",
    "#fff59d"
  );
  const paletteButton = popover.querySelector(".highlight-color-presets-palette-btn");
  if (paletteButton instanceof HTMLButtonElement) {
    paletteButton.textContent = state.lang === "en" ? "Palette" : "色盘";
  }
  updateHighlightColorPresetActive(currentColor);
  popover.hidden = false;
  positionHighlightColorPresetsPopover();
}

if (elements.langToggle) {
  elements.langToggle.addEventListener("click", () => {
    const nextLang = state.lang === "zh" ? "en" : "zh";
    setLanguage(nextLang);
  });
}

elements.openFolder.addEventListener("click", openProjectFolder);
if (elements.folderHelpToggle && elements.folderHelp) {
  elements.folderHelpToggle.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    elements.folderHelp.classList.toggle("is-open");
  });
  elements.folderHelp.addEventListener("mouseleave", () => {
    elements.folderHelp.classList.remove("is-open");
  });
}
if (elements.tabProject) {
  elements.tabProject.addEventListener("click", () => setEditorTab("project"));
}
if (elements.tabPersonalize) {
  elements.tabPersonalize.addEventListener("click", () => setEditorTab("personalize"));
}
if (elements.tabAbout) {
  elements.tabAbout.addEventListener("click", () => setEditorTab("about"));
}
if (elements.localPick) {
  elements.localPick.addEventListener("click", async () => {
    await openProjectFolder();
  });
}
if (elements.localLater) {
  elements.localLater.addEventListener("click", () => {
    hideEditorLocalOpenModal();
  });
}
elements.newProject.addEventListener("click", () => startNewProject());
elements.typeAddMode.addEventListener("click", () => enterTypeCreateMode());
if (elements.typeCancel) {
  elements.typeCancel.addEventListener("click", () => cancelTypeEdit());
}
if (elements.typeSave) {
  elements.typeSave.addEventListener("click", () => saveTypeDraft());
}
if (elements.deleteProject) {
  elements.deleteProject.addEventListener("click", async () => {
    if (!state.currentId) return;
    await deleteProject(state.currentId);
  });
}
if (elements.rank) {
  elements.rank.addEventListener("click", () => {
    openRankPickerWithAllOptions(elements.rank);
  });
}
if (elements.personalizeToolbar) {
  elements.personalizeToolbar.addEventListener("click", handlePersonalizeToolbarClick);
}
if (elements.savePersonalization) {
  elements.savePersonalization.addEventListener("click", async () => {
    await savePersonalization();
  });
}
if (elements.personalizeLangZh) {
  elements.personalizeLangZh.addEventListener("click", () => setPersonalizeEditLang("zh"));
}
if (elements.personalizeLangEn) {
  elements.personalizeLangEn.addEventListener("click", () => setPersonalizeEditLang("en"));
}
if (elements.personalizeLangCopy) {
  elements.personalizeLangCopy.addEventListener("click", () => pastePersonalizeFromOtherLang());
}
if (elements.personalizeTextColor) {
  elements.personalizeTextColor.addEventListener("input", (event) => {
    const value = event.target.value || "#1d1c1a";
    applyPersonalizeColorCommand("foreColor", value);
  });
}
if (elements.personalizeFontSize) {
  elements.personalizeFontSize.addEventListener("change", (event) => {
    const value = String(event.target.value || "").trim();
    if (!value) return;
    runPersonalizeCommand("fontSize", value);
  });
}
if (elements.personalizeParagraph) {
  elements.personalizeParagraph.addEventListener("click", () => applyPersonalizeParagraphFormat());
}
if (elements.personalizeNote) {
  elements.personalizeNote.addEventListener("click", () => applyPersonalizeNoteFormat());
}
if (elements.personalizeH1) {
  elements.personalizeH1.addEventListener("click", () => applyPersonalizeFormatBlock("h1"));
}
if (elements.personalizeH2) {
  elements.personalizeH2.addEventListener("click", () => applyPersonalizeFormatBlock("h2"));
}
if (elements.personalizeH3) {
  elements.personalizeH3.addEventListener("click", () => applyPersonalizeFormatBlock("h3"));
}
if (elements.personalizeCode) {
  elements.personalizeCode.addEventListener("click", () => insertPersonalizeCodeBlock());
}
if (elements.personalizeQuote) {
  elements.personalizeQuote.addEventListener("click", () => applyPersonalizeFormatBlock("blockquote"));
}
if (elements.personalizeDivider) {
  elements.personalizeDivider.addEventListener("click", () => runPersonalizeCommand("insertHorizontalRule"));
}
if (elements.personalizeBold) {
  elements.personalizeBold.addEventListener("click", () => runPersonalizeCommand("bold"));
}
if (elements.personalizeItalic) {
  elements.personalizeItalic.addEventListener("click", () => runPersonalizeCommand("italic"));
}
if (elements.personalizeUnderline) {
  elements.personalizeUnderline.addEventListener("click", () => runPersonalizeCommand("underline"));
}
if (elements.personalizeStrike) {
  elements.personalizeStrike.addEventListener("click", () => runPersonalizeCommand("strikeThrough"));
}
if (elements.personalizeUl) {
  elements.personalizeUl.addEventListener("click", () => runPersonalizeCommand("insertUnorderedList"));
}
if (elements.personalizeOl) {
  elements.personalizeOl.addEventListener("click", () => runPersonalizeCommand("insertOrderedList"));
}
if (elements.personalizeAlignLeft) {
  elements.personalizeAlignLeft.addEventListener("click", () => runPersonalizeCommand("justifyLeft"));
}
if (elements.personalizeAlignCenter) {
  elements.personalizeAlignCenter.addEventListener("click", () => runPersonalizeCommand("justifyCenter"));
}
if (elements.personalizeAlignRight) {
  elements.personalizeAlignRight.addEventListener("click", () => runPersonalizeCommand("justifyRight"));
}
if (elements.personalizeTextColorBtn) {
  elements.personalizeTextColorBtn.addEventListener("click", () => {
    savePersonalizeSelectionRange();
    openTextColorPresetsPopover("personalize", elements.personalizeTextColorBtn, elements.personalizeTextColor);
  });
}
if (elements.personalizeHighlightBtn) {
  elements.personalizeHighlightBtn.addEventListener("click", () => {
    savePersonalizeSelectionRange();
    openHighlightColorPresetsPopover("personalize", elements.personalizeHighlightBtn, elements.personalizeHighlightColor);
  });
}
if (elements.personalizeHighlightColor) {
  elements.personalizeHighlightColor.addEventListener("input", (event) => {
    const value = event.target.value || "#fff59d";
    applyPersonalizeColorCommand("hiliteColor", value);
  });
}
if (elements.personalizeLink) {
  elements.personalizeLink.addEventListener("click", () => insertPersonalizeLink());
}
if (elements.personalizeBgSection) {
  elements.personalizeBgSection.addEventListener("click", () => {
    savePersonalizeSelectionRange();
    openLineRangePopover("personalize", elements.personalizeBgSection);
  });
}
if (elements.personalizeColumns) {
  elements.personalizeColumns.addEventListener("click", () => {
    savePersonalizeSelectionRange();
    openColumnsPopover("personalize", elements.personalizeColumns);
  });
}
if (elements.personalizeInsertButton) {
  elements.personalizeInsertButton.addEventListener("click", () => {
    openInsertButtonPopover("personalize", elements.personalizeInsertButton);
  });
}
if (elements.personalizeTable) {
  elements.personalizeTable.addEventListener("click", () => {
    openPersonalizeTablePopover(elements.personalizeTable);
  });
}
if (elements.personalizeTableInsert) {
  elements.personalizeTableInsert.addEventListener("click", () => insertPersonalizeTableFromPopover());
}
if (elements.personalizeTableCancel) {
  elements.personalizeTableCancel.addEventListener("click", () => hidePersonalizeTablePopover());
}
if (elements.personalizeTableSize) {
  elements.personalizeTableSize.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      insertPersonalizeTableFromPopover();
      return;
    }
    if (event.key === "Escape") {
      event.preventDefault();
      hidePersonalizeTablePopover();
    }
  });
}
if (elements.personalizeImage && elements.personalizeImageUpload) {
  elements.personalizeImage.addEventListener("click", () => {
    savePersonalizeSelectionRange();
    elements.personalizeImageUpload.click();
  });
}
if (elements.personalizeImageUpload) {
  elements.personalizeImageUpload.addEventListener("change", async (event) => {
    const file = event.target.files && event.target.files[0];
    if (!file) return;
    try {
      const dataUrl = await readFileAsDataUrl(file);
      if (dataUrl) {
        insertPersonalizeImageAtCursor(dataUrl);
        persistPersonalizationDraftFromEditor();
      }
    } catch (error) {
      setStatus(t("status.error").replace("{message}", error.message), "error");
    }
    elements.personalizeImageUpload.value = "";
  });
}
if (elements.personalizeFile && elements.personalizeFileUpload) {
  elements.personalizeFile.addEventListener("click", () => {
    savePersonalizeSelectionRange();
    elements.personalizeFileUpload.click();
  });
}
if (elements.personalizeFileUpload) {
  elements.personalizeFileUpload.addEventListener("change", async (event) => {
    const file = event.target.files && event.target.files[0];
    if (!file) return;
    try {
      const dataUrl = await readFileAsDataUrl(file);
      if (dataUrl) {
        insertPersonalizeFileLinkAtCursor(file.name, dataUrl);
        persistPersonalizationDraftFromEditor();
      }
    } catch (error) {
      setStatus(t("status.error").replace("{message}", error.message), "error");
    }
    elements.personalizeFileUpload.value = "";
  });
}
if (elements.personalizeFooterEditor) {
  elements.personalizeFooterEditor.addEventListener("click", (event) => {
    const target = event.target instanceof Element ? event.target : null;
    if (!target) return;
    const inlineButton = target.closest(".detail-inline-button");
    if (inlineButton instanceof HTMLAnchorElement && elements.personalizeFooterEditor.contains(inlineButton)) {
      event.preventDefault();
      event.stopPropagation();
      openInlineButtonEditor("personalize", inlineButton);
      return;
    }
    const columnsBlock = target.closest(".detail-columns-block");
    if (columnsBlock instanceof HTMLElement && elements.personalizeFooterEditor.contains(columnsBlock)) {
      const columnsCell = target.closest(".detail-columns-cell");
      enterColumnsEditMode(
        "personalize",
        columnsBlock,
        columnsCell instanceof HTMLElement ? columnsCell : null
      );
    }
  });
  elements.personalizeFooterEditor.addEventListener("keydown", (event) => {
    if (handleListTabInEditor("personalize", elements.personalizeFooterEditor, event)) {
      return;
    }
    if (event.key !== "Enter" || event.shiftKey || event.metaKey || event.ctrlKey || event.altKey) {
      return;
    }
    requestAnimationFrame(() => ensurePersonalizeParagraphAfterEnter());
  });
  ["mouseup", "keyup", "touchend"].forEach((eventName) => {
    elements.personalizeFooterEditor.addEventListener(eventName, () => {
      savePersonalizeSelectionRange();
      persistPersonalizationDraftFromEditor();
      syncPersonalizeFontSizeControl();
      queueLineNumberRefresh();
    });
  });
  elements.personalizeFooterEditor.addEventListener("input", () => {
    refreshEditorTables(elements.personalizeFooterEditor);
    savePersonalizeSelectionRange();
    persistPersonalizationDraftFromEditor();
    syncPersonalizeFontSizeControl();
    queueLineNumberRefresh();
  });
  elements.personalizeFooterEditor.addEventListener("scroll", () => {
    queueLineNumberRefresh();
    positionColumnsEditFloat();
  });
  attachEditorCaretFallback(elements.personalizeFooterEditor, () => {
    savePersonalizeSelectionRange();
    persistPersonalizationDraftFromEditor();
    syncPersonalizeFontSizeControl();
    queueLineNumberRefresh();
  });
}
if (elements.personalizeLineGutter) {
  elements.personalizeLineGutter.addEventListener("mousedown", (event) => {
    handleLineGutterPointer("personalize", event);
  });
}
if (elements.detailLangZh) {
  elements.detailLangZh.addEventListener("click", () => setDetailEditLang("zh"));
}
if (elements.detailLangEn) {
  elements.detailLangEn.addEventListener("click", () => setDetailEditLang("en"));
}
if (elements.detailLangCopy) {
  elements.detailLangCopy.addEventListener("click", () => pasteDetailFromOtherLang());
}
if (elements.detailNavInitialLight) {
  elements.detailNavInitialLight.addEventListener("change", () => {
    if (!elements.detailNavInitialLight.checked) return;
    state.detailNavInitialTheme = "light";
  });
}
if (elements.detailNavInitialDark) {
  elements.detailNavInitialDark.addEventListener("change", () => {
    if (!elements.detailNavInitialDark.checked) return;
    state.detailNavInitialTheme = "dark";
  });
}
if (elements.aboutLangZh) {
  elements.aboutLangZh.addEventListener("click", () => setAboutEditLang("zh"));
}
if (elements.aboutLangEn) {
  elements.aboutLangEn.addEventListener("click", () => setAboutEditLang("en"));
}
if (elements.aboutLangCopy) {
  elements.aboutLangCopy.addEventListener("click", () => pasteAboutFromOtherLang());
}
if (elements.aboutParagraph) {
  elements.aboutParagraph.addEventListener("click", () => applyAboutParagraphFormat());
}
if (elements.aboutNote) {
  elements.aboutNote.addEventListener("click", () => applyAboutNoteFormat());
}
if (elements.aboutH1) {
  elements.aboutH1.addEventListener("click", () => applyAboutFormatBlock("h1"));
}
if (elements.aboutH2) {
  elements.aboutH2.addEventListener("click", () => applyAboutFormatBlock("h2"));
}
if (elements.aboutH3) {
  elements.aboutH3.addEventListener("click", () => applyAboutFormatBlock("h3"));
}
if (elements.aboutCode) {
  elements.aboutCode.addEventListener("click", () => insertAboutCodeBlock());
}
if (elements.aboutQuote) {
  elements.aboutQuote.addEventListener("click", () => applyAboutFormatBlock("blockquote"));
}
if (elements.aboutDivider) {
  elements.aboutDivider.addEventListener("click", () => runAboutExecCommand("insertHorizontalRule"));
}
if (elements.aboutFontSize) {
  elements.aboutFontSize.addEventListener("change", (event) => {
    const value = String(event.target.value || "").trim();
    if (!value) return;
    runAboutExecCommand("fontSize", value);
  });
}
if (elements.aboutBold) {
  elements.aboutBold.addEventListener("click", () => runAboutExecCommand("bold"));
}
if (elements.aboutItalic) {
  elements.aboutItalic.addEventListener("click", () => runAboutExecCommand("italic"));
}
if (elements.aboutUnderline) {
  elements.aboutUnderline.addEventListener("click", () => runAboutExecCommand("underline"));
}
if (elements.aboutStrike) {
  elements.aboutStrike.addEventListener("click", () => runAboutExecCommand("strikeThrough"));
}
if (elements.aboutUl) {
  elements.aboutUl.addEventListener("click", () => runAboutExecCommand("insertUnorderedList"));
}
if (elements.aboutOl) {
  elements.aboutOl.addEventListener("click", () => runAboutExecCommand("insertOrderedList"));
}
if (elements.aboutAlignLeft) {
  elements.aboutAlignLeft.addEventListener("click", () => runAboutExecCommand("justifyLeft"));
}
if (elements.aboutAlignCenter) {
  elements.aboutAlignCenter.addEventListener("click", () => runAboutExecCommand("justifyCenter"));
}
if (elements.aboutAlignRight) {
  elements.aboutAlignRight.addEventListener("click", () => runAboutExecCommand("justifyRight"));
}
if (elements.aboutTextColorBtn) {
  elements.aboutTextColorBtn.addEventListener("click", () => {
    saveAboutSelectionRange();
    openTextColorPresetsPopover("about", elements.aboutTextColorBtn, elements.aboutTextColor);
  });
}
if (elements.aboutHighlightBtn) {
  elements.aboutHighlightBtn.addEventListener("click", () => {
    saveAboutSelectionRange();
    openHighlightColorPresetsPopover("about", elements.aboutHighlightBtn, elements.aboutHighlightColor);
  });
}
if (elements.aboutTextColor) {
  elements.aboutTextColor.addEventListener("input", (event) => {
    const value = event.target.value || "#1d1c1a";
    applyAboutColorCommand("foreColor", value);
  });
}
if (elements.aboutHighlightColor) {
  elements.aboutHighlightColor.addEventListener("input", (event) => {
    const value = event.target.value || "#fff59d";
    applyAboutColorCommand("hiliteColor", value);
  });
}
if (elements.aboutLink) {
  elements.aboutLink.addEventListener("click", () => insertAboutLinkAtCursor());
}
if (elements.aboutImage && elements.aboutImageUpload) {
  elements.aboutImage.addEventListener("click", () => {
    saveAboutSelectionRange();
    elements.aboutImageUpload.click();
  });
}
if (elements.aboutImageUpload) {
  elements.aboutImageUpload.addEventListener("change", async (event) => {
    const file = event.target.files && event.target.files[0];
    if (!file) return;
    try {
      const dataUrl = await readFileAsDataUrl(file);
      if (dataUrl) {
        insertAboutImageAtCursor(dataUrl);
        persistAboutDraftFromEditor();
      }
    } catch (error) {
      setStatus(t("status.error").replace("{message}", error.message), "error");
    }
    elements.aboutImageUpload.value = "";
  });
}
if (elements.aboutFile && elements.aboutFileUpload) {
  elements.aboutFile.addEventListener("click", () => {
    saveAboutSelectionRange();
    elements.aboutFileUpload.click();
  });
}
if (elements.aboutFileUpload) {
  elements.aboutFileUpload.addEventListener("change", async (event) => {
    const file = event.target.files && event.target.files[0];
    if (!file) return;
    try {
      const dataUrl = await readFileAsDataUrl(file);
      if (dataUrl) {
        insertAboutFileLinkAtCursor(file.name, dataUrl);
        persistAboutDraftFromEditor();
      }
    } catch (error) {
      setStatus(t("status.error").replace("{message}", error.message), "error");
    }
    elements.aboutFileUpload.value = "";
  });
}
if (elements.aboutBgSection) {
  elements.aboutBgSection.addEventListener("click", () => {
    saveAboutSelectionRange();
    openLineRangePopover("about", elements.aboutBgSection);
  });
}
if (elements.aboutColumns) {
  elements.aboutColumns.addEventListener("click", () => {
    saveAboutSelectionRange();
    openColumnsPopover("about", elements.aboutColumns);
  });
}
if (elements.aboutInsertButton) {
  elements.aboutInsertButton.addEventListener("click", () => {
    openInsertButtonPopover("about", elements.aboutInsertButton);
  });
}
if (elements.aboutTable) {
  elements.aboutTable.addEventListener("click", () => {
    openAboutTablePopover(elements.aboutTable);
  });
}
if (elements.aboutTableInsert) {
  elements.aboutTableInsert.addEventListener("click", () => insertAboutTableFromPopover());
}
if (elements.aboutTableCancel) {
  elements.aboutTableCancel.addEventListener("click", () => hideAboutTablePopover());
}
if (elements.aboutTableSize) {
  elements.aboutTableSize.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      insertAboutTableFromPopover();
      return;
    }
    if (event.key === "Escape") {
      event.preventDefault();
      hideAboutTablePopover();
    }
  });
}
if (elements.aboutEditor) {
  elements.aboutEditor.addEventListener("click", (event) => {
    const target = event.target instanceof Element ? event.target : null;
    if (!target) return;
    const inlineButton = target.closest(".detail-inline-button");
    if (inlineButton instanceof HTMLAnchorElement && elements.aboutEditor.contains(inlineButton)) {
      event.preventDefault();
      event.stopPropagation();
      openInlineButtonEditor("about", inlineButton);
      return;
    }
    const columnsBlock = target.closest(".detail-columns-block");
    if (columnsBlock instanceof HTMLElement && elements.aboutEditor.contains(columnsBlock)) {
      const columnsCell = target.closest(".detail-columns-cell");
      enterColumnsEditMode(
        "about",
        columnsBlock,
        columnsCell instanceof HTMLElement ? columnsCell : null
      );
    }
  });
  elements.aboutEditor.addEventListener("keydown", (event) => {
    if (handleListTabInEditor("about", elements.aboutEditor, event)) {
      return;
    }
    if (event.key !== "Enter" || event.shiftKey || event.metaKey || event.ctrlKey || event.altKey) {
      return;
    }
    requestAnimationFrame(() => ensureAboutParagraphAfterEnter());
  });
  ["mouseup", "keyup", "touchend"].forEach((eventName) => {
    elements.aboutEditor.addEventListener(eventName, () => {
      saveAboutSelectionRange();
      syncAboutFontSizeControl();
      queueLineNumberRefresh();
    });
  });
  elements.aboutEditor.addEventListener("input", () => {
    refreshEditorTables(elements.aboutEditor);
    saveAboutSelectionRange();
    persistAboutDraftFromEditor();
    syncAboutFontSizeControl();
    queueLineNumberRefresh();
  });
  elements.aboutEditor.addEventListener("scroll", () => {
    queueLineNumberRefresh();
    positionColumnsEditFloat();
  });
  attachEditorCaretFallback(elements.aboutEditor, () => {
    saveAboutSelectionRange();
    syncAboutFontSizeControl();
    queueLineNumberRefresh();
  });
}
if (elements.aboutLineGutter) {
  elements.aboutLineGutter.addEventListener("mousedown", (event) => {
    handleLineGutterPointer("about", event);
  });
}
if (elements.saveAbout) {
  elements.saveAbout.addEventListener("click", async () => {
    await saveAboutData();
  });
}
if (elements.previewAbout) {
  elements.previewAbout.addEventListener("click", async () => {
    await openAboutPreview();
  });
}
if (elements.importAboutFolder) {
  elements.importAboutFolder.addEventListener("click", async () => {
    await importAboutFromFolder();
  });
}
if (elements.lineRangeApply) {
  elements.lineRangeApply.addEventListener("click", () => {
    applyLineRangeFromPopover();
  });
}
if (elements.lineRangeRemove) {
  elements.lineRangeRemove.addEventListener("click", () => {
    removeLineRangeFromPopover();
  });
}
if (elements.lineRangeCancel) {
  elements.lineRangeCancel.addEventListener("click", () => {
    hideLineRangePopover();
  });
}
if (elements.lineRangePopover) {
  elements.lineRangePopover.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      hideLineRangePopover();
      return;
    }
    if (event.key === "Enter" && event.target instanceof HTMLElement && event.target.tagName !== "SELECT") {
      event.preventDefault();
      applyLineRangeFromPopover();
    }
  });
}
if (elements.columnsApply) {
  elements.columnsApply.addEventListener("click", () => {
    applyColumnsFromPopover();
  });
}
if (elements.columnsUseColor) {
  elements.columnsUseColor.addEventListener("change", () => {
    syncColumnsColorControl();
  });
}
if (elements.columnsCancel) {
  elements.columnsCancel.addEventListener("click", () => {
    hideColumnsPopover();
  });
}
if (elements.columnsPopover) {
  elements.columnsPopover.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      hideColumnsPopover();
      return;
    }
    if (event.key === "Enter" && event.target instanceof HTMLElement && event.target.tagName !== "SELECT") {
      event.preventDefault();
      applyColumnsFromPopover();
    }
  });
}
if (elements.columnsEditExit) {
  elements.columnsEditExit.addEventListener("click", () => {
    exitColumnsEditMode();
  });
}
if (elements.columnsEditMoveUp) {
  elements.columnsEditMoveUp.addEventListener("click", () => {
    moveColumnsEditBlock("up");
  });
}
if (elements.columnsEditMoveDown) {
  elements.columnsEditMoveDown.addEventListener("click", () => {
    moveColumnsEditBlock("down");
  });
}
if (elements.columnsEditDelete) {
  elements.columnsEditDelete.addEventListener("click", () => {
    deleteColumnsEditBlock();
  });
}
if (elements.insertButtonLinkType) {
  elements.insertButtonLinkType.addEventListener("change", () => {
    updateInsertButtonTargetField();
  });
}
if (elements.insertButtonApply) {
  elements.insertButtonApply.addEventListener("click", () => {
    applyInsertButtonFromPopover();
  });
}
if (elements.insertButtonCancel) {
  elements.insertButtonCancel.addEventListener("click", () => {
    hideInsertButtonPopover();
  });
}
if (elements.insertButtonPopover) {
  elements.insertButtonPopover.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      hideInsertButtonPopover();
      return;
    }
    if (event.isComposing || event.key === "Process" || event.keyCode === 229) {
      return;
    }
    if (event.key === "Enter" && event.target instanceof HTMLElement && event.target.tagName !== "SELECT") {
      event.preventDefault();
      applyInsertButtonFromPopover();
    }
  });
}
if (elements.webEmbedLinkType) {
  elements.webEmbedLinkType.addEventListener("change", () => {
    updateWebEmbedTargetField();
  });
}
if (elements.webEmbedPickFile) {
  elements.webEmbedPickFile.addEventListener("click", async () => {
    await pickInternalWebEmbedFile();
  });
}
if (elements.webEmbedApply) {
  elements.webEmbedApply.addEventListener("click", () => {
    applyWebEmbedFromPopover();
  });
}
if (elements.webEmbedCancel) {
  elements.webEmbedCancel.addEventListener("click", () => {
    hideWebEmbedPopover();
  });
}
if (elements.webEmbedPopover) {
  elements.webEmbedPopover.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      hideWebEmbedPopover();
      return;
    }
    if (event.key === "Enter" && event.target instanceof HTMLElement && event.target.tagName !== "SELECT") {
      event.preventDefault();
      applyWebEmbedFromPopover();
    }
  });
}
window.addEventListener("resize", () => {
  if (textColorPresetsPopover && !textColorPresetsPopover.hidden) {
    positionTextColorPresetsPopover();
  }
  if (highlightColorPresetsPopover && !highlightColorPresetsPopover.hidden) {
    positionHighlightColorPresetsPopover();
  }
  if (elements.insertButtonPopover && !elements.insertButtonPopover.hidden) {
    positionInsertButtonPopover();
  }
  if (elements.webEmbedPopover && !elements.webEmbedPopover.hidden) {
    positionWebEmbedPopover();
  }
  if (elements.lineRangePopover && !elements.lineRangePopover.hidden) {
    positionLineRangePopover();
  }
  if (elements.columnsPopover && !elements.columnsPopover.hidden) {
    positionColumnsPopover();
  }
  if (elements.columnsEditFloat && !elements.columnsEditFloat.hidden) {
    positionColumnsEditFloat();
  }
  if (elements.detailFloat && !elements.detailFloat.hidden && state.selectedImage) {
    positionFloat(state.selectedImage);
  }
  queueLineNumberRefresh();
});
document.addEventListener("scroll", () => {
  if (textColorPresetsPopover && !textColorPresetsPopover.hidden) {
    positionTextColorPresetsPopover();
  }
  if (highlightColorPresetsPopover && !highlightColorPresetsPopover.hidden) {
    positionHighlightColorPresetsPopover();
  }
  if (elements.insertButtonPopover && !elements.insertButtonPopover.hidden) {
    positionInsertButtonPopover();
  }
  if (elements.webEmbedPopover && !elements.webEmbedPopover.hidden) {
    positionWebEmbedPopover();
  }
  if (elements.lineRangePopover && !elements.lineRangePopover.hidden) {
    positionLineRangePopover();
  }
  if (elements.columnsPopover && !elements.columnsPopover.hidden) {
    positionColumnsPopover();
  }
  if (elements.columnsEditFloat && !elements.columnsEditFloat.hidden) {
    positionColumnsEditFloat();
  }
  if (elements.detailFloat && !elements.detailFloat.hidden && state.selectedImage) {
    positionFloat(state.selectedImage);
  }
}, true);
document.addEventListener("dragend", () => {
  clearImageDragState();
}, true);

document.addEventListener("selectionchange", () => {
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) {
    if (elements.detailFontSize) elements.detailFontSize.value = "";
    if (elements.aboutFontSize) elements.aboutFontSize.value = "";
    if (elements.personalizeFontSize) elements.personalizeFontSize.value = "";
    return;
  }
  const range = selection.getRangeAt(0);
  if (elements.detailEditor
    && elements.detailEditor.contains(range.startContainer)
    && elements.detailEditor.contains(range.endContainer)) {
    syncDetailFontSizeControl();
    return;
  }
  if (elements.aboutEditor
    && elements.aboutEditor.contains(range.startContainer)
    && elements.aboutEditor.contains(range.endContainer)) {
    syncAboutFontSizeControl();
    return;
  }
  if (elements.personalizeFooterEditor
    && elements.personalizeFooterEditor.contains(range.startContainer)
    && elements.personalizeFooterEditor.contains(range.endContainer)) {
    syncPersonalizeFontSizeControl();
    return;
  }
  if (elements.detailFontSize) elements.detailFontSize.value = "";
  if (elements.aboutFontSize) elements.aboutFontSize.value = "";
  if (elements.personalizeFontSize) elements.personalizeFontSize.value = "";
});

elements.imageFile.addEventListener("change", (event) => {
  const file = event.target.files && event.target.files[0];
  state.imageFile = file || null;
  renderCoverStatus();
});

if (elements.coverSelectBtn && elements.imageFile) {
  elements.coverSelectBtn.addEventListener("click", () => {
    elements.imageFile.click();
  });
}

elements.cancelForm.addEventListener("click", () => {
  clearForm();
  setProjectFormMode(false);
  hideDetailPanel();
  renderProjectList();
  setStatus("");
});

elements.previewDetail.addEventListener("click", async () => {
  await openDetailPreview();
});
if (elements.importDetailFolder) {
  elements.importDetailFolder.addEventListener("click", async () => {
    await importDetailFromFolder();
  });
}

elements.detailParagraph.addEventListener("click", () => applyParagraphFormat());
elements.detailNote.addEventListener("click", () => applyNoteFormat());
elements.detailH1.addEventListener("click", () => applyFormatBlock("h1"));
elements.detailH2.addEventListener("click", () => applyFormatBlock("h2"));
elements.detailH3.addEventListener("click", () => applyFormatBlock("h3"));
elements.detailCode.addEventListener("click", () => insertCodeBlock());
elements.detailQuote.addEventListener("click", () => applyFormatBlock("blockquote"));
elements.detailDivider.addEventListener("click", () => runExecCommand("insertHorizontalRule"));
if (elements.detailFontSize) {
  elements.detailFontSize.addEventListener("change", (event) => {
    const value = String(event.target.value || "").trim();
    if (!value) return;
    runExecCommand("fontSize", value);
  });
}
elements.detailBold.addEventListener("click", () => runExecCommand("bold"));
elements.detailItalic.addEventListener("click", () => runExecCommand("italic"));
elements.detailUnderline.addEventListener("click", () => runExecCommand("underline"));
elements.detailStrike.addEventListener("click", () => runExecCommand("strikeThrough"));
elements.detailUl.addEventListener("click", () => runExecCommand("insertUnorderedList"));
elements.detailOl.addEventListener("click", () => runExecCommand("insertOrderedList"));
elements.detailAlignLeft.addEventListener("click", () => runExecCommand("justifyLeft"));
elements.detailAlignCenter.addEventListener("click", () => runExecCommand("justifyCenter"));
elements.detailAlignRight.addEventListener("click", () => runExecCommand("justifyRight"));
elements.detailTextColorBtn.addEventListener("click", () => {
  saveSelectionRange();
  openTextColorPresetsPopover("detail", elements.detailTextColorBtn, elements.detailTextColor);
});
elements.detailHighlightBtn.addEventListener("click", () => {
  saveSelectionRange();
  openHighlightColorPresetsPopover("detail", elements.detailHighlightBtn, elements.detailHighlightColor);
});
elements.detailTextColor.addEventListener("input", (event) => {
  const value = event.target.value || "#1d1c1a";
  applyColorCommand("foreColor", value);
});
elements.detailHighlightColor.addEventListener("input", (event) => {
  const value = event.target.value || "#fff59d";
  applyColorCommand("hiliteColor", value);
});
elements.detailLink.addEventListener("click", () => {
  insertLinkAtCursor();
});
if (elements.detailWebEmbed) {
  elements.detailWebEmbed.addEventListener("click", () => {
    openWebEmbedPopover("detail", elements.detailWebEmbed);
  });
}
if (elements.detailBgSection) {
  elements.detailBgSection.addEventListener("click", () => {
    saveSelectionRange();
    openLineRangePopover("detail", elements.detailBgSection);
  });
}
if (elements.detailColumns) {
  elements.detailColumns.addEventListener("click", () => {
    saveSelectionRange();
    openColumnsPopover("detail", elements.detailColumns);
  });
}
if (elements.detailInsertButton) {
  elements.detailInsertButton.addEventListener("click", () => {
    openInsertButtonPopover("detail", elements.detailInsertButton);
  });
}
elements.detailTable.addEventListener("click", () => {
  openTablePopover(elements.detailTable);
});
elements.detailTableInsert.addEventListener("click", () => {
  insertTableFromPopover();
});
elements.detailTableCancel.addEventListener("click", () => {
  hideTablePopover();
});
elements.detailTableSize.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    insertTableFromPopover();
    return;
  }
  if (event.key === "Escape") {
    event.preventDefault();
    hideTablePopover();
  }
});

elements.insertImage.addEventListener("click", () => {
  saveSelectionRange();
  elements.detailImage.click();
});

elements.detailImage.addEventListener("change", async (event) => {
  const file = event.target.files && event.target.files[0];
  if (!file || !state.rootHandle || !state.currentDetailProject) {
    if (!state.rootHandle) {
      setStatus(t("status.needFolder"), "error");
    }
    return;
  }
  const previewUrl = URL.createObjectURL(file);
  const pendingId = `pending-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  const inserted = insertImageAtCursor(previewUrl, pendingId);
  if (inserted && inserted.img) {
    state.pendingImages.set(pendingId, { file, previewUrl });
  } else {
    URL.revokeObjectURL(previewUrl);
  }
  elements.detailImage.value = "";
});

if (elements.replaceImage && elements.detailReplaceImage) {
  elements.replaceImage.addEventListener("click", () => {
    if (!(state.selectedImage instanceof HTMLElement) || !elements.detailEditor.contains(state.selectedImage)) {
      return;
    }
    if (isWebPreviewWrapper(state.selectedImage)) {
      return;
    }
    state.replaceImageTarget = state.selectedImage;
    elements.detailReplaceImage.click();
  });
}

if (elements.detailReplaceImage) {
  elements.detailReplaceImage.addEventListener("change", (event) => {
    const file = event.target.files && event.target.files[0];
    const wrapper = (
      state.selectedImage instanceof HTMLElement
      && elements.detailEditor.contains(state.selectedImage)
    )
      ? state.selectedImage
      : (
        state.replaceImageTarget instanceof HTMLElement
        && elements.detailEditor.contains(state.replaceImageTarget)
      )
        ? state.replaceImageTarget
        : null;
    if (!file || !(wrapper instanceof HTMLElement) || !elements.detailEditor.contains(wrapper)) {
      state.replaceImageTarget = null;
      elements.detailReplaceImage.value = "";
      return;
    }

    if (wrapper.classList.contains("is-cropping")) {
      deactivateImageCropMode(wrapper);
    }
    wrapper.classList.remove("is-cropping");
    wrapper.dataset.cropMode = "false";
    wrapper.dataset.cropped = "false";
    wrapper.dataset.lockRatio = "true";
    wrapper.style.overflow = "visible";

    const img = wrapper.querySelector("img");
    if (!(img instanceof HTMLImageElement)) {
      state.replaceImageTarget = null;
      elements.detailReplaceImage.value = "";
      return;
    }

    const oldPendingId = String(img.dataset.pendingId || "").trim();
    if (oldPendingId) {
      const pendingInfo = state.pendingImages.get(oldPendingId);
      if (pendingInfo && pendingInfo.previewUrl) {
        URL.revokeObjectURL(pendingInfo.previewUrl);
      }
      state.pendingImages.delete(oldPendingId);
    }

    const newPendingId = `pending-${Date.now()}-${Math.random().toString(16).slice(2)}`;
    const previewUrl = URL.createObjectURL(file);
    state.pendingImages.set(newPendingId, { file, previewUrl });

    const rect = wrapper.getBoundingClientRect();
    const measuredWidth = Math.round(
      rect.width
      || Number.parseFloat(wrapper.style.width || "")
      || 0
    );
    const currentWidth = measuredWidth > 0 ? measuredWidth : IMAGE_MIN_WIDTH;
    wrapper.style.width = `${currentWidth}px`;

    img.src = previewUrl;
    img.dataset.pendingId = newPendingId;
    img.removeAttribute("data-site-src");
    img.draggable = false;
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.position = "relative";
    img.style.left = "0px";
    img.style.top = "0px";
    img.style.maxWidth = "";
    img.style.objectFit = "contain";

    img.onload = () => {
      if (!img.naturalWidth || !img.naturalHeight) return;
      const height = Math.max(1, Math.round(currentWidth * (img.naturalHeight / img.naturalWidth)));
      wrapper.style.height = `${height}px`;
      wrapper.dataset.ratio = (img.naturalHeight / img.naturalWidth).toFixed(4);
      syncImageInputs(wrapper);
      positionFloat(wrapper);
      persistDetailDraftFromEditor();
      queueLineNumberRefresh();
    };

    removeImageCropHandles(wrapper);
    ensureImageResizeHandles(wrapper);
    showImageControls(wrapper);
    persistDetailDraftFromEditor();
    saveSelectionRange();
    queueLineNumberRefresh();
    state.replaceImageTarget = null;
    elements.detailReplaceImage.value = "";
  });
}

elements.detailFile.addEventListener("click", () => {
  if (!state.rootHandle || !state.currentDetailProject) {
    setStatus(t("status.needFolder"), "error");
    return;
  }
  saveSelectionRange();
  elements.detailFileUpload.click();
});

elements.detailFileUpload.addEventListener("change", (event) => {
  const file = event.target.files && event.target.files[0];
  if (!file || !state.rootHandle || !state.currentDetailProject) {
    if (!state.rootHandle) {
      setStatus(t("status.needFolder"), "error");
    }
    return;
  }
  const previewUrl = URL.createObjectURL(file);
  const pendingId = `pending-file-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  const inserted = insertFileLinkAtCursor(file.name, previewUrl, pendingId);
  if (inserted) {
    state.pendingFiles.set(pendingId, { file, previewUrl, name: file.name });
  } else {
    URL.revokeObjectURL(previewUrl);
  }
  elements.detailFileUpload.value = "";
});

elements.detailEditor.addEventListener("click", (event) => {
  const target = event.target instanceof Element ? event.target : null;
  if (!target) return;
  const inlineButton = target.closest(".detail-inline-button");
  if (inlineButton instanceof HTMLAnchorElement && elements.detailEditor.contains(inlineButton)) {
    event.preventDefault();
    event.stopPropagation();
    openInlineButtonEditor("detail", inlineButton);
    return;
  }
  if (target.closest(".web-preview-wrapper a")) {
    event.preventDefault();
  }
  let wrapper = target.closest(".image-wrapper");
  if (!(wrapper instanceof HTMLElement)) {
    const maybeImage = target instanceof HTMLImageElement ? target : target.closest("img");
    if (maybeImage instanceof HTMLImageElement && elements.detailEditor.contains(maybeImage)) {
      const recoveredWrapper = wrapImage(maybeImage);
      if (recoveredWrapper instanceof HTMLElement) {
        ensureImageWrapperDefaults(recoveredWrapper);
        imageResizeObserver.observe(recoveredWrapper);
        wrapper = recoveredWrapper;
        persistDetailDraftFromEditor();
        queueLineNumberRefresh();
      }
    }
  }
  if (wrapper instanceof HTMLElement && elements.detailEditor.contains(wrapper)) {
    showImageControls(wrapper);
    return;
  }
  const columnsBlock = target.closest(".detail-columns-block");
  if (columnsBlock instanceof HTMLElement && elements.detailEditor.contains(columnsBlock)) {
    const columnsCell = target.closest(".detail-columns-cell");
    enterColumnsEditMode(
      "detail",
      columnsBlock,
      columnsCell instanceof HTMLElement ? columnsCell : null
    );
  }
});

const tableHandleDownEvent = window.PointerEvent ? "pointerdown" : "mousedown";
document.addEventListener(tableHandleDownEvent, (event) => {
  if (isPointerEventInstance(event)) {
    if (event.pointerType === "mouse" && event.button !== 0) return;
  } else if (event instanceof MouseEvent && event.button !== 0) {
    return;
  }
  const target = event.target instanceof Element ? event.target : null;
  if (!target) return;
  const handle = target.closest(`.${TABLE_RESIZE_HANDLE_CLASS}`);
  if (!(handle instanceof HTMLElement)) return;
  startTableResizeFromHandle(handle, event);
}, true);

const detailHandleDownEvent = window.PointerEvent ? "pointerdown" : "mousedown";
elements.detailEditor.addEventListener(detailHandleDownEvent, (event) => {
  if (isPointerEventInstance(event)) {
    if (event.pointerType === "mouse" && event.button !== 0) return;
  } else if (event instanceof MouseEvent && event.button !== 0) {
    return;
  }
  const target = event.target instanceof Element ? event.target : null;
  if (!target) return;
  const cropHandle = target.closest(".image-crop-handle");
  if (cropHandle instanceof HTMLElement) {
    const wrapper = cropHandle.closest(".image-wrapper");
    if (!(wrapper instanceof HTMLElement) || !elements.detailEditor.contains(wrapper)) return;
    startImageCropFromHandle(wrapper, String(cropHandle.dataset.handle || ""), event);
    return;
  }
  const handle = target.closest(".image-resize-handle");
  if (!(handle instanceof HTMLElement)) return;
  const wrapper = handle.closest(".image-wrapper");
  if (!(wrapper instanceof HTMLElement) || !elements.detailEditor.contains(wrapper)) return;
  startImageResizeFromHandle(wrapper, String(handle.dataset.handle || ""), event);
});

elements.detailEditor.addEventListener("dragstart", (event) => {
  const target = event.target instanceof Element ? event.target : null;
  if (!target) return;
  const wrapper = target.closest(".image-wrapper");
  if (!(wrapper instanceof HTMLElement) || !elements.detailEditor.contains(wrapper)) {
    clearImageDragState();
    return;
  }
  state.draggingImageWrapper = wrapper;
  wrapper.classList.add("is-dragging");
  showImageControls(wrapper);
  if (event.dataTransfer) {
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.dropEffect = "move";
    try {
      event.dataTransfer.setData("text/plain", "image-wrapper-move");
    } catch (error) {
      // Ignore browsers that block custom drag data.
    }
  }
});

elements.detailEditor.addEventListener("dragover", (event) => {
  if (!(state.draggingImageWrapper instanceof HTMLElement)) return;
  event.preventDefault();
  if (event.dataTransfer) {
    event.dataTransfer.dropEffect = "move";
  }
});

elements.detailEditor.addEventListener("drop", (event) => {
  if (!(state.draggingImageWrapper instanceof HTMLElement)) return;
  moveDraggingImageToPoint(event);
});

elements.detailEditor.addEventListener("dragend", () => {
  clearImageDragState();
});

elements.detailEditor.addEventListener("copy", (event) => {
  if (!shouldHandleSelectedImageClipboard()) return;
  const wrapper = state.selectedImage;
  if (!(wrapper instanceof HTMLElement)) return;
  const clone = cloneImageWrapperForClipboard(wrapper);
  if (!(clone instanceof HTMLElement) || !event.clipboardData) return;
  event.preventDefault();
  event.clipboardData.setData("text/html", clone.outerHTML);
  event.clipboardData.setData("text/plain", "");
});

elements.detailEditor.addEventListener("cut", (event) => {
  if (!shouldHandleSelectedImageClipboard()) return;
  const wrapper = state.selectedImage;
  if (!(wrapper instanceof HTMLElement)) return;
  const clone = cloneImageWrapperForClipboard(wrapper);
  if (!(clone instanceof HTMLElement) || !event.clipboardData) return;
  event.preventDefault();
  event.clipboardData.setData("text/html", clone.outerHTML);
  event.clipboardData.setData("text/plain", "");
  removeSelectedImageWrapper();
});

elements.detailEditor.addEventListener("paste", (event) => {
  const html = event.clipboardData ? event.clipboardData.getData("text/html") : "";
  if (!html || !html.includes("data-editor-copied-image")) return;
  const inserted = insertCopiedImageWrappersFromClipboardHtml(html);
  if (!inserted) return;
  event.preventDefault();
});

elements.detailEditor.addEventListener("keydown", (event) => {
  if ((event.key === "Backspace" || event.key === "Delete") && state.selectedImage instanceof HTMLElement) {
    const active = document.activeElement;
    const focusInsideFloat = active instanceof Element && elements.detailFloat.contains(active);
    if (!focusInsideFloat) {
      event.preventDefault();
      removeSelectedImageWrapper();
      return;
    }
  }
  if (handleListTabInEditor("detail", elements.detailEditor, event)) {
    return;
  }
  if (event.key !== "Enter" || event.shiftKey || event.metaKey || event.ctrlKey || event.altKey) {
    return;
  }
  requestAnimationFrame(() => ensureParagraphAfterEnter());
});

["mouseup", "keyup", "touchend"].forEach((eventName) => {
  elements.detailEditor.addEventListener(eventName, () => {
    saveSelectionRange();
    syncDetailFontSizeControl();
    queueLineNumberRefresh();
  });
});
elements.detailEditor.addEventListener("input", () => {
  const restoredImageWrapper = restoreOrphanEditorImages();
  refreshEditorTables(elements.detailEditor);
  saveSelectionRange();
  persistDetailDraftFromEditor();
  if (restoredImageWrapper && state.selectedImage instanceof HTMLElement && !state.selectedImage.isConnected) {
    hideImageControls();
  }
  syncDetailFontSizeControl();
  queueLineNumberRefresh();
});
elements.detailEditor.addEventListener("scroll", () => {
  queueLineNumberRefresh();
  positionColumnsEditFloat();
  if (!elements.detailFloat.hidden && state.selectedImage) {
    positionFloat(state.selectedImage);
  }
});
attachEditorCaretFallback(elements.detailEditor, () => {
  saveSelectionRange();
  syncDetailFontSizeControl();
  queueLineNumberRefresh();
});
if (elements.detailLineGutter) {
  elements.detailLineGutter.addEventListener("mousedown", (event) => {
    handleLineGutterPointer("detail", event);
  });
}

elements.toggleCrop.addEventListener("click", () => toggleCrop());
elements.imageWidth.addEventListener("input", () => updateSelectedImage("width"));
elements.imageHeight.addEventListener("input", () => updateSelectedImage("height"));
elements.imageWidth.addEventListener("blur", () => {
  if (state.selectedImage instanceof HTMLElement) {
    syncImageInputs(state.selectedImage);
  }
});
elements.imageHeight.addEventListener("blur", () => {
  if (state.selectedImage instanceof HTMLElement) {
    syncImageInputs(state.selectedImage);
  }
});
if (elements.imageAlignLeft) {
  elements.imageAlignLeft.addEventListener("click", () => setSelectedImageAlignment("left"));
}
if (elements.imageAlignCenter) {
  elements.imageAlignCenter.addEventListener("click", () => setSelectedImageAlignment("center"));
}
if (elements.imageAlignRight) {
  elements.imageAlignRight.addEventListener("click", () => setSelectedImageAlignment("right"));
}

document.addEventListener("click", (event) => {
  if (elements.folderHelp && !elements.folderHelp.contains(event.target)) {
    elements.folderHelp.classList.remove("is-open");
  }
  if (textColorPresetsPopover && !textColorPresetsPopover.hidden) {
    const target = event.target instanceof Element ? event.target : null;
    const clickedPopover = target ? textColorPresetsPopover.contains(target) : false;
    const clickedTrigger = target
      ? Boolean(target.closest("#detail-text-color-btn, #about-text-color-btn, #personalize-text-color-btn"))
      : false;
    if (!clickedPopover && !clickedTrigger) {
      hideTextColorPresetsPopover();
    }
  }
  if (highlightColorPresetsPopover && !highlightColorPresetsPopover.hidden) {
    const target = event.target instanceof Element ? event.target : null;
    const clickedPopover = target ? highlightColorPresetsPopover.contains(target) : false;
    const clickedTrigger = target
      ? Boolean(target.closest("#detail-highlight-btn, #about-highlight-btn, #personalize-highlight-btn"))
      : false;
    if (!clickedPopover && !clickedTrigger) {
      hideHighlightColorPresetsPopover();
    }
  }
  if (elements.insertButtonPopover && !elements.insertButtonPopover.hidden) {
    const target = event.target instanceof Element ? event.target : null;
    const clickedInsertPopover = target ? elements.insertButtonPopover.contains(target) : false;
    const clickedInsertTrigger = target
      ? Boolean(target.closest("#detail-insert-button, #about-insert-button, #personalize-insert-button"))
      : false;
    if (!clickedInsertPopover && !clickedInsertTrigger) {
      hideInsertButtonPopover();
    }
  }
  if (elements.webEmbedPopover && !elements.webEmbedPopover.hidden) {
    const target = event.target instanceof Element ? event.target : null;
    const clickedWebEmbedPopover = target ? elements.webEmbedPopover.contains(target) : false;
    const clickedWebEmbedTrigger = target ? Boolean(target.closest("#detail-web-embed")) : false;
    if (!clickedWebEmbedPopover && !clickedWebEmbedTrigger) {
      hideWebEmbedPopover();
    }
  }
  if (elements.lineRangePopover && !elements.lineRangePopover.hidden) {
    const target = event.target instanceof Element ? event.target : null;
    const clickedRangePopover = target ? elements.lineRangePopover.contains(target) : false;
    const clickedRangeTrigger = target
      ? Boolean(target.closest("#detail-bg-section, #about-bg-section, #personalize-bg-section"))
      : false;
    if (!clickedRangePopover && !clickedRangeTrigger) {
      hideLineRangePopover();
    }
  }
  if (elements.columnsPopover && !elements.columnsPopover.hidden) {
    const target = event.target instanceof Element ? event.target : null;
    const clickedColumnsPopover = target ? elements.columnsPopover.contains(target) : false;
    const clickedColumnsTrigger = target
      ? Boolean(target.closest("#detail-columns, #about-columns, #personalize-columns"))
      : false;
    if (!clickedColumnsPopover && !clickedColumnsTrigger) {
      hideColumnsPopover();
    }
  }

  const detailVisible = Boolean(elements.detailPanel && !elements.detailPanel.hidden);
  const personalizeVisible = Boolean(elements.panelPersonalize && !elements.panelPersonalize.hidden);
  const aboutVisible = Boolean(elements.panelAbout && !elements.panelAbout.hidden);

  if (detailVisible) {
    const clickedTableButton = event.target.closest("#detail-table");
    const clickedTablePopover = elements.detailTablePopover.contains(event.target);
    if (!clickedTableButton && !clickedTablePopover) {
      hideTablePopover();
    }
    if (!elements.detailFloat.contains(event.target) && !event.target.closest(".image-wrapper")) {
      if (!clickedTablePopover && !event.target.closest(".detail-toolbar")) {
        hideImageControls();
      }
    }
  }

  if (aboutVisible && elements.aboutTablePopover) {
    const clickedAboutTableButton = event.target.closest("#about-table");
    const clickedAboutTablePopover = elements.aboutTablePopover.contains(event.target);
    if (!clickedAboutTableButton && !clickedAboutTablePopover) {
      hideAboutTablePopover();
    }
  }

  if (personalizeVisible && elements.personalizeTablePopover) {
    const clickedPersonalizeTableButton = event.target.closest("#personalize-table");
    const clickedPersonalizeTablePopover = elements.personalizeTablePopover.contains(event.target);
    if (!clickedPersonalizeTableButton && !clickedPersonalizeTablePopover) {
      hidePersonalizeTablePopover();
    }
  }
});

elements.saveDetail.addEventListener("click", async () => {
  if (!state.rootHandle || !state.currentDetailProject) return;
  if (state.detailImportedMode) {
    setStatus(t("status.importedDetailReadonly"), "error");
    return;
  }
  if (elements.lineRangePopover && !elements.lineRangePopover.hidden && state.lineRangeContext === "detail") {
    applyLineRangeFromPopover();
  }
  persistDetailDraftFromEditor();
  await saveDetailHtml(state.currentDetailProject, {
    zh: state.detailDraftHtml.zh,
    en: state.detailDraftHtml.en,
    navInitialTheme: state.detailNavInitialTheme,
    bgRanges: {
      zh: normalizeLineRanges(state.detailBgRanges.zh || []),
      en: normalizeLineRanges(state.detailBgRanges.en || [])
    }
  });
  setStatus(t("detail.saved"));
});

elements.cancelDetail.addEventListener("click", () => {
  hideDetailPanel();
});

elements.form.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!state.rootHandle) {
    setStatus(t("status.needFolder"), "error");
    return;
  }
  await saveProject();
});

async function bootstrapEditorAccess() {
  const connected = await autoConnect();
  if (!supportsFileSystem()) {
    return;
  }
  if (IS_FILE_PROTOCOL && !connected) {
    showEditorLocalOpenModal();
  } else {
    hideEditorLocalOpenModal();
  }
}

function supportsFileSystem() {
  return "showDirectoryPicker" in window;
}

function detectLanguage() {
  const saved = localStorage.getItem("siteLang");
  if (saved === "zh" || saved === "en") {
    return saved;
  }
  const lang = (navigator.language || "en").toLowerCase();
  return lang.startsWith("zh") ? "zh" : "en";
}

function setLanguage(lang) {
  state.lang = lang;
  localStorage.setItem("siteLang", lang);
  applyI18n(lang);
  updateLangToggle();
  renderPersonalizationLanguageSwitch();
  renderAboutLanguageSwitch();
  renderDetailLanguageSwitch();
  if (state.currentDetailProject && elements.detailProjectName) {
    const project = state.currentDetailProject;
    elements.detailProjectName.textContent = `${project.id} · ${state.lang === "zh" ? project.name_zh : project.name_en}`;
  }
  renderTypeList();
  renderTypeSelect();
  renderProjectList();
  renderTagTabs();
  renderCoverStatus();
  updateFolderButton(Boolean(state.rootHandle));
  updateInsertButtonTargetField();
  updateWebEmbedTargetField();
}

function applyI18n(lang) {
  state.strings = i18n[lang] || i18n.en;

  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    const value = resolveKey(state.strings, key);
    if (value) {
      el.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    const mapping = el.dataset.i18nAttr.split(",");
    mapping.forEach((pair) => {
      const [attr, key] = pair.split(":");
      if (!attr || !key) return;
      const value = resolveKey(state.strings, key.trim());
      if (value) {
        el.setAttribute(attr.trim(), value);
      }
    });
  });
}

function updateLangToggle() {
  if (!elements.langToggle) return;
  elements.langToggle.textContent = state.lang === "zh" ? "EN" : "中文";
}

function t(key) {
  return resolveKey(state.strings, key) || key;
}

function resolveKey(source, key) {
  return key.split(".").reduce((acc, part) => (acc ? acc[part] : null), source);
}

function getPromptLangLabel(lang) {
  if (lang === "en") {
    return t("copyAction.langEn");
  }
  return t("copyAction.langZh");
}

function getOtherLang(lang) {
  return lang === "en" ? "zh" : "en";
}

function getCopyButtonLabel(sourceLang) {
  return t("copyAction.button").replace("{lang}", getPromptLangLabel(sourceLang));
}

function setEditorTab(tab) {
  if (state.activeTab === "about") {
    persistAboutDraftFromEditor();
  }
  if (state.activeTab === "personalize") {
    persistPersonalizationDraftFromEditor();
  }
  if (state.activeTab === "project") {
    persistDetailDraftFromEditor();
  }
  hideInsertButtonPopover();
  hideLineRangePopover();
  hideColumnsPopover();
  hideWebEmbedPopover();
  hideTextColorPresetsPopover();
  hideHighlightColorPresetsPopover();
  exitColumnsEditMode();
  if (tab === "personalize" || tab === "about") {
    state.activeTab = tab;
  } else {
    state.activeTab = "project";
  }
  const isProject = state.activeTab === "project";
  const isPersonalize = state.activeTab === "personalize";
  const isAbout = state.activeTab === "about";

  if (elements.tabProject) {
    elements.tabProject.classList.toggle("is-active", isProject);
    elements.tabProject.setAttribute("aria-selected", isProject ? "true" : "false");
  }
  if (elements.tabPersonalize) {
    elements.tabPersonalize.classList.toggle("is-active", isPersonalize);
    elements.tabPersonalize.setAttribute("aria-selected", isPersonalize ? "true" : "false");
  }
  if (elements.tabAbout) {
    elements.tabAbout.classList.toggle("is-active", isAbout);
    elements.tabAbout.setAttribute("aria-selected", isAbout ? "true" : "false");
  }
  if (elements.panelProject) {
    elements.panelProject.hidden = !isProject;
  }
  if (elements.panelPersonalize) {
    elements.panelPersonalize.hidden = !isPersonalize;
  }
  if (elements.panelAbout) {
    elements.panelAbout.hidden = !isAbout;
  }

  if (!isProject) {
    hideImageControls();
    hideTablePopover();
  }
  if (isPersonalize) {
    renderPersonalizeEditor();
  }
  if (isProject && state.currentDetailProject) {
    renderDetailLanguageSwitch();
  }
  if (!isAbout) {
    hideAboutTablePopover();
  } else {
    renderAboutEditor();
  }
  if (!isPersonalize) {
    hidePersonalizeTablePopover();
  }
  queueLineNumberRefresh();
}

function normalizePersonalization(raw) {
  const next = cloneDefaultPersonalization();
  if (!raw || typeof raw !== "object") return next;

  const legacyBrand = String(raw.navBrandText ?? raw.brandText ?? raw.nav_brand_text ?? "").trim();
  const brandZh = String(raw.navBrandTextZh ?? raw.nav_brand_text_zh ?? legacyBrand).trim();
  const brandEn = String(raw.navBrandTextEn ?? raw.nav_brand_text_en ?? legacyBrand).trim();
  next.navBrandTextZh = brandZh || DEFAULT_PERSONALIZATION.navBrandTextZh;
  next.navBrandTextEn = brandEn || DEFAULT_PERSONALIZATION.navBrandTextEn;

  const footerFlag = raw.footerEnabled ?? raw.footer_enabled;
  next.footerEnabled = typeof footerFlag === "boolean" ? footerFlag : Boolean(footerFlag);

  const legacyFooterHtml = raw.footerHtml ?? raw.footer_html;
  const footerHtmlZh = raw.footerHtmlZh ?? raw.footer_html_zh ?? legacyFooterHtml;
  const footerHtmlEn = raw.footerHtmlEn ?? raw.footer_html_en ?? legacyFooterHtml;
  next.footerHtmlZh = typeof footerHtmlZh === "string" ? footerHtmlZh : "";
  next.footerHtmlEn = typeof footerHtmlEn === "string" ? footerHtmlEn : "";
  const footerBgRangesZh = raw.footerBgRangesZh ?? raw.footer_bg_ranges_zh ?? [];
  const footerBgRangesEn = raw.footerBgRangesEn ?? raw.footer_bg_ranges_en ?? [];
  next.footerBgRangesZh = normalizeLineRanges(footerBgRangesZh);
  next.footerBgRangesEn = normalizeLineRanges(footerBgRangesEn);
  return next;
}

async function loadPersonalization() {
  const text = await readTextFile(contentPathSegments("assets", PERSONALIZATION_FILE));
  if (!text) {
    state.personalization = cloneDefaultPersonalization();
    return;
  }
  try {
    const parsed = JSON.parse(text);
    state.personalization = normalizePersonalization(parsed);
  } catch (error) {
    state.personalization = cloneDefaultPersonalization();
  }
}

function renderPersonalizationForm() {
  if (elements.personalizeBrandTextZh) {
    elements.personalizeBrandTextZh.value = state.personalization.navBrandTextZh || DEFAULT_PERSONALIZATION.navBrandTextZh;
  }
  if (elements.personalizeBrandTextEn) {
    elements.personalizeBrandTextEn.value = state.personalization.navBrandTextEn || DEFAULT_PERSONALIZATION.navBrandTextEn;
  }
  if (elements.personalizeFooterEnabled) {
    elements.personalizeFooterEnabled.checked = Boolean(state.personalization.footerEnabled);
  }
  state.personalizeFooterDraftHtml.zh = normalizeDetailLikeHtml(state.personalization.footerHtmlZh || "");
  state.personalizeFooterDraftHtml.en = normalizeDetailLikeHtml(state.personalization.footerHtmlEn || "");
  state.personalizeFooterBgRanges.zh = normalizeLineRanges(state.personalization.footerBgRangesZh || []);
  state.personalizeFooterBgRanges.en = normalizeLineRanges(state.personalization.footerBgRangesEn || []);
  renderPersonalizeEditor();
}

function renderPersonalizationLanguageSwitch() {
  if (elements.personalizeLangZh) {
    elements.personalizeLangZh.classList.toggle("is-active", state.personalizeLang === "zh");
  }
  if (elements.personalizeLangEn) {
    elements.personalizeLangEn.classList.toggle("is-active", state.personalizeLang === "en");
  }
  if (elements.personalizeLangCopy) {
    elements.personalizeLangCopy.textContent = getCopyButtonLabel(getOtherLang(state.personalizeLang));
  }
}

function renderPersonalizeEditor() {
  renderPersonalizationLanguageSwitch();
  if (!elements.personalizeFooterEditor) return;
  const html = getDraftHtmlByLangWithFallback(state.personalizeFooterDraftHtml, state.personalizeLang);
  elements.personalizeFooterEditor.innerHTML = html;
  refreshEditorTables(elements.personalizeFooterEditor);
  state.personalizeSavedRange = null;
  hideInsertButtonPopover();
  hideColumnsPopover();
  hideWebEmbedPopover();
  exitColumnsEditMode();
  syncPersonalizeFontSizeControl();
  queueLineNumberRefresh();
}

function setPersonalizeEditLang(lang) {
  const nextLang = lang === "en" ? "en" : "zh";
  if (state.personalizeLang === nextLang) return;
  persistPersonalizationDraftFromEditor();
  state.personalizeLang = nextLang;
  renderPersonalizeEditor();
}

function pastePersonalizeFromOtherLang() {
  const targetLang = state.personalizeLang === "en" ? "en" : "zh";
  const sourceLang = getOtherLang(targetLang);
  const sourceHtml = state.personalizeFooterDraftHtml[sourceLang] || "";
  if (!sourceHtml) return;
  state.personalizeFooterDraftHtml[targetLang] = sourceHtml;
  state.personalizeFooterBgRanges[targetLang] = normalizeLineRanges(state.personalizeFooterBgRanges[sourceLang] || []);
  renderPersonalizeEditor();
}

function persistPersonalizationDraftFromEditor() {
  if (!elements.personalizeFooterEditor) return;
  if (state.activeTab !== "personalize") return;
  state.personalizeFooterDraftHtml[state.personalizeLang] = normalizeDetailLikeHtml(elements.personalizeFooterEditor.innerHTML);
}

function savePersonalizeSelectionRange() {
  if (!elements.personalizeFooterEditor) return;
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) return;
  const range = selection.getRangeAt(0);
  if (elements.personalizeFooterEditor.contains(range.startContainer)) {
    state.personalizeSavedRange = range.cloneRange();
  }
}

function restorePersonalizeSelectionRange() {
  if (!elements.personalizeFooterEditor || !state.personalizeSavedRange) {
    return false;
  }
  if (!elements.personalizeFooterEditor.contains(state.personalizeSavedRange.startContainer)) {
    return false;
  }
  const selection = window.getSelection();
  if (!selection) return false;
  selection.removeAllRanges();
  selection.addRange(state.personalizeSavedRange);
  return true;
}

function mapComputedPxToExecFontSize(px) {
  if (!Number.isFinite(px)) return "";
  let bestValue = "";
  let bestDiff = Number.POSITIVE_INFINITY;
  EXEC_FONT_SIZE_VALUES.forEach((value) => {
    const target = EXEC_FONT_SIZE_TO_PX[value];
    const diff = Math.abs(px - target);
    if (diff < bestDiff) {
      bestDiff = diff;
      bestValue = value;
    }
  });
  return bestDiff <= 1 ? bestValue : "";
}

function getNodeFontSizeValueInEditor(node, editorRoot) {
  if (!node || !(editorRoot instanceof HTMLElement)) return "";
  let element = node.nodeType === Node.ELEMENT_NODE ? node : node.parentElement;
  if (!(element instanceof Element) || !editorRoot.contains(element)) return "";

  let cursor = element;
  while (cursor && cursor instanceof Element) {
    if (cursor.tagName === "FONT") {
      const value = String(cursor.getAttribute("size") || "").trim();
      if (EXEC_FONT_SIZE_TO_PX[value]) {
        return value;
      }
    }
    if (cursor === editorRoot) break;
    cursor = cursor.parentElement;
  }

  const computedPx = Number.parseFloat(window.getComputedStyle(element).fontSize || "");
  return mapComputedPxToExecFontSize(computedPx);
}

function getSelectionFontSizeValueForEditor(editorRoot) {
  if (!(editorRoot instanceof HTMLElement)) return "";
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) return "";
  const range = selection.getRangeAt(0);
  if (!editorRoot.contains(range.startContainer) || !editorRoot.contains(range.endContainer)) {
    return "";
  }

  if (range.collapsed) {
    return getNodeFontSizeValueInEditor(range.startContainer, editorRoot);
  }

  const values = new Set();
  const walkRootCandidate = range.commonAncestorContainer.nodeType === Node.TEXT_NODE
    ? range.commonAncestorContainer.parentNode
    : range.commonAncestorContainer;
  const walkRoot = walkRootCandidate && editorRoot.contains(walkRootCandidate)
    ? walkRootCandidate
    : editorRoot;
  const walker = document.createTreeWalker(
    walkRoot,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode(textNode) {
        if (!editorRoot.contains(textNode)) return NodeFilter.FILTER_REJECT;
        if (!range.intersectsNode(textNode)) return NodeFilter.FILTER_REJECT;
        if (!String(textNode.nodeValue || "").trim()) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    }
  );

  while (walker.nextNode()) {
    const value = getNodeFontSizeValueInEditor(walker.currentNode, editorRoot);
    if (!value) continue;
    values.add(value);
    if (values.size > 1) return "";
  }
  if (values.size === 1) {
    return values.values().next().value;
  }
  return getNodeFontSizeValueInEditor(range.startContainer, editorRoot);
}

function syncFontSizeSelectFromSelection(editorRoot, selectElement) {
  if (!(selectElement instanceof HTMLSelectElement)) return;
  const value = getSelectionFontSizeValueForEditor(editorRoot);
  selectElement.value = EXEC_FONT_SIZE_TO_PX[value] ? value : "";
}

function syncDetailFontSizeControl() {
  syncFontSizeSelectFromSelection(elements.detailEditor, elements.detailFontSize);
}

function syncAboutFontSizeControl() {
  syncFontSizeSelectFromSelection(elements.aboutEditor, elements.aboutFontSize);
}

function syncPersonalizeFontSizeControl() {
  syncFontSizeSelectFromSelection(elements.personalizeFooterEditor, elements.personalizeFontSize);
}

function normalizeRichTextHtml(html) {
  return normalizeDetailLikeHtml(html);
}

function normalizeDetailLikeHtml(html) {
  const raw = String(html || "").trim();
  if (!raw) return "";
  const probe = document.createElement("div");
  probe.innerHTML = raw;
  probe.querySelectorAll(`.${TABLE_RESIZE_HANDLE_CLASS}`).forEach((node) => node.remove());
  probe.querySelectorAll(".image-resize-handle").forEach((node) => node.remove());
  probe.querySelectorAll(".image-crop-handle").forEach((node) => node.remove());
  probe.querySelectorAll(".image-wrapper").forEach((wrapper) => {
    wrapper.classList.remove("is-selected", "is-resizing", "is-cropping");
  });
  probe.querySelectorAll("table").forEach((table) => {
    table.classList.remove("is-column-resizing");
  });
  probe.querySelectorAll(".detail-columns-block").forEach((block) => {
    block.classList.remove("is-editing");
  });
  const text = (probe.textContent || "").replace(/\u00a0/g, " ").trim();
  const hasStructuredNode = Boolean(
    probe.querySelector("img, table, hr, ul, ol, blockquote, pre, a, h1, h2, h3, h4, h5, h6, p, div, section, article, figure, video, audio, canvas, svg, iframe, link")
  );
  if (!text && !hasStructuredNode) {
    return "";
  }
  return probe.innerHTML;
}

function extractDetailReadableTextForStats(html) {
  const probe = document.createElement("div");
  probe.innerHTML = String(html || "");
  probe.querySelectorAll("script, style, noscript, template").forEach((node) => node.remove());
  return String(probe.textContent || "")
    .replace(/\u00a0/g, " ")
    .replace(/\u200b/g, "")
    .trim();
}

function countZhReadableChars(text) {
  return String(text || "").replace(/\s+/g, "").length;
}

function countEnReadableWords(text) {
  const source = String(text || "").trim();
  if (!source) return 0;
  try {
    const matches = source.match(/[\p{L}\p{N}]+(?:['’-][\p{L}\p{N}]+)*/gu);
    return matches ? matches.length : 0;
  } catch (error) {
    const fallback = source.match(/[A-Za-z0-9]+(?:['’-][A-Za-z0-9]+)*/g);
    return fallback ? fallback.length : 0;
  }
}

function estimateReadingMinutes(count, lang) {
  const safeCount = Number.isFinite(count) ? Math.max(0, Math.floor(count)) : 0;
  if (safeCount <= 0) return 0;
  const speedPerMinute = lang === "zh" ? 300 : 220;
  return Math.max(1, Math.ceil(safeCount / speedPerMinute));
}

function buildDetailReadingStatsForLang(html, lang) {
  const text = extractDetailReadableTextForStats(html);
  const count = lang === "zh" ? countZhReadableChars(text) : countEnReadableWords(text);
  if (!Number.isFinite(count) || count <= 0) {
    return null;
  }
  return {
    count,
    minutes: estimateReadingMinutes(count, lang),
    unit: lang === "zh" ? "char" : "word"
  };
}

function buildDetailReadingStats(contentByLang) {
  return {
    version: 1,
    updatedAt: new Date().toISOString(),
    zh: buildDetailReadingStatsForLang(contentByLang?.zh || "", "zh"),
    en: buildDetailReadingStatsForLang(contentByLang?.en || "", "en")
  };
}

async function writeDetailReadingStatsFile(project, contentByLang) {
  if (!project?.id) return;
  const path = [...getDetailFolder(project), "detail-stats.json"];
  const payload = buildDetailReadingStats(contentByLang);
  await writeFileByPath(path, `${JSON.stringify(payload, null, 2)}\n`);
}

function normalizeHexColor(value, fallback = "#f5f2ed") {
  const raw = String(value || "").trim();
  const short = raw.match(/^#([0-9a-fA-F]{3})$/);
  if (short) {
    const expanded = short[1].split("").map((char) => `${char}${char}`).join("");
    return `#${expanded.toLowerCase()}`;
  }
  const full = raw.match(/^#([0-9a-fA-F]{6})$/);
  if (full) {
    return `#${full[1].toLowerCase()}`;
  }
  return fallback;
}

function normalizeNavInitialTheme(value) {
  return String(value || "").trim().toLowerCase() === "dark" ? "dark" : "light";
}

function normalizeLineRanges(rawRanges) {
  if (!Array.isArray(rawRanges)) return [];
  const byKey = new Map();
  rawRanges.forEach((item) => {
    if (!item || typeof item !== "object") return;
    const startRaw = Number.parseInt(item.start, 10);
    const endRaw = Number.parseInt(item.end, 10);
    if (!Number.isFinite(startRaw) || !Number.isFinite(endRaw)) return;
    const start = Math.max(1, Math.min(startRaw, endRaw));
    const end = Math.max(start, Math.max(startRaw, endRaw));
    const color = normalizeHexColor(item.color, "#f5f2ed");
    byKey.set(`${start}-${end}`, { start, end, color });
  });
  return Array.from(byKey.values()).sort((a, b) => {
    if (a.start !== b.start) return a.start - b.start;
    if (a.end !== b.end) return a.end - b.end;
    return a.color.localeCompare(b.color);
  });
}

function parseLineRangesTemplateText(text) {
  const source = String(text || "").trim();
  if (!source) return [];
  try {
    return normalizeLineRanges(JSON.parse(source));
  } catch (error) {
    return [];
  }
}

function serializeLineRangesTemplateText(ranges) {
  return JSON.stringify(normalizeLineRanges(ranges));
}

function getDraftHtmlByLangWithFallback(draftByLang, lang) {
  const currentLang = lang === "en" ? "en" : "zh";
  const fallbackLang = getOtherLang(currentLang);
  const primary = String(draftByLang?.[currentLang] || "");
  if (primary.trim()) return primary;
  return String(draftByLang?.[fallbackLang] || "");
}

function getRangeListByLangWithFallback(rangesByLang, lang) {
  const currentLang = lang === "en" ? "en" : "zh";
  const fallbackLang = getOtherLang(currentLang);
  const primary = normalizeLineRanges(rangesByLang?.[currentLang] || []);
  if (primary.length) return primary;
  return normalizeLineRanges(rangesByLang?.[fallbackLang] || []);
}

function getRangesForContext(context) {
  if (context === "detail") {
    return getRangeListByLangWithFallback(state.detailBgRanges, state.detailLang);
  }
  if (context === "about") {
    return getRangeListByLangWithFallback(state.aboutBgRanges, state.aboutLang);
  }
  if (context === "personalize") {
    return getRangeListByLangWithFallback(state.personalizeFooterBgRanges, state.personalizeLang);
  }
  return [];
}

function setRangesForContext(context, nextRanges) {
  const normalized = normalizeLineRanges(nextRanges);
  if (context === "detail") {
    state.detailBgRanges[state.detailLang] = normalized;
    return;
  }
  if (context === "about") {
    state.aboutBgRanges[state.aboutLang] = normalized;
    return;
  }
  if (context === "personalize") {
    state.personalizeFooterBgRanges[state.personalizeLang] = normalized;
  }
}

function getEditorAndGutterByContext(context) {
  if (context === "detail") {
    return { editor: elements.detailEditor, gutter: elements.detailLineGutter };
  }
  if (context === "about") {
    return { editor: elements.aboutEditor, gutter: elements.aboutLineGutter };
  }
  if (context === "personalize") {
    return { editor: elements.personalizeFooterEditor, gutter: elements.personalizeLineGutter };
  }
  return { editor: null, gutter: null };
}

function hasStructuredLineDescendant(node) {
  if (!(node instanceof Element)) return false;
  return Boolean(node.querySelector("h1,h2,h3,h4,h5,h6,p,li,blockquote,pre,table,hr,figure,.image-wrapper"));
}

function hasNestedColumnsLineDescendant(node) {
  if (!(node instanceof Element)) return false;
  return Boolean(
    node.querySelector("h1,h2,h3,h4,h5,h6,p,li,blockquote,pre,table,hr,figure,.image-wrapper,div,section,article,.detail-columns-block,.detail-columns-cell")
  );
}

function isLineTargetElement(node, container) {
  if (!(node instanceof HTMLElement)) return false;
  if (node === container) return false;
  if (node.classList.contains("page-line-anchor")) return false;
  if (node.classList.contains("editor-line-gutter")) return false;
  if (node.classList.contains("image-wrapper")) return true;

  const tag = node.tagName;
  if (["H1", "H2", "H3", "H4", "H5", "H6", "LI", "BLOCKQUOTE", "PRE", "TABLE", "TR", "HR", "FIGURE"].includes(tag)) {
    return true;
  }
  if (tag === "P") {
    const parentTag = node.parentElement ? node.parentElement.tagName : "";
    if (["LI", "TD", "TH", "BLOCKQUOTE", "PRE"].includes(parentTag)) {
      return false;
    }
    return true;
  }
  if (tag === "DIV") {
    if (node.classList.contains("detail-note-text")) return true;
    if (node.classList.contains("detail-columns-cell")) {
      return !hasNestedColumnsLineDescendant(node);
    }
    if (node.parentElement instanceof HTMLElement && node.parentElement.classList.contains("detail-columns-cell")) {
      return !hasNestedColumnsLineDescendant(node);
    }
    if (node.parentElement !== container) return false;
    return !hasStructuredLineDescendant(node);
  }
  if (tag === "SECTION" || tag === "ARTICLE") {
    if (node.parentElement instanceof HTMLElement && node.parentElement.classList.contains("detail-columns-cell")) {
      return !hasNestedColumnsLineDescendant(node);
    }
    if (node.parentElement !== container) return false;
    return !hasStructuredLineDescendant(node);
  }
  if (tag === "IMG") {
    return node.parentElement === container;
  }
  return false;
}

function isTopLevelTextLineNode(node, container) {
  if (!(node instanceof Text)) return false;
  if (node.parentNode !== container) return false;
  const text = String(node.textContent || "").replace(/\u200b/g, "").trim();
  return Boolean(text);
}

function isCountableBreakNode(node, container) {
  if (!(node instanceof HTMLBRElement)) return false;
  if (!container.contains(node)) return false;
  if (node.closest("table,tbody,thead,tfoot,tr,td,th,ul,ol,li,blockquote,pre,figure,.image-wrapper")) {
    return false;
  }
  return true;
}

function getLineNodeRect(node) {
  if (node instanceof HTMLBRElement) {
    const parent = node.parentElement;
    if (!parent) return null;
    const marker = document.createElement("span");
    marker.textContent = "\u00a0";
    marker.setAttribute("aria-hidden", "true");
    marker.style.display = "inline";
    marker.style.opacity = "0";
    marker.style.pointerEvents = "none";
    marker.style.userSelect = "none";
    parent.insertBefore(marker, node.nextSibling);

    const rect = marker.getBoundingClientRect();
    marker.remove();
    if (rect && (rect.width > 0 || rect.height > 0)) {
      return rect;
    }

    const parentRect = parent.getBoundingClientRect();
    const styles = getComputedStyle(parent);
    const lineHeightRaw = Number.parseFloat(styles.lineHeight);
    const fontSizeRaw = Number.parseFloat(styles.fontSize);
    const lineHeight = Number.isFinite(lineHeightRaw)
      ? lineHeightRaw
      : (Number.isFinite(fontSizeRaw) ? fontSizeRaw * 1.4 : 18);
    return {
      top: parentRect.top,
      bottom: parentRect.top + lineHeight,
      left: parentRect.left,
      right: parentRect.right,
      width: parentRect.width,
      height: lineHeight
    };
  }
  if (node instanceof HTMLElement) {
    return node.getBoundingClientRect();
  }
  if (node instanceof Text) {
    const text = String(node.textContent || "").replace(/\u200b/g, "").trim();
    if (!text) return null;
    const range = document.createRange();
    range.selectNodeContents(node);
    const rect = range.getBoundingClientRect();
    if (rect && (rect.width > 0 || rect.height > 0)) {
      return rect;
    }
  }
  return null;
}

function getLineNodesForEditor(context, editor) {
  if (!editor) return [];
  const nodes = [];
  const walker = document.createTreeWalker(editor, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
  const includeBreaks = false;
  let current = walker.nextNode();
  while (current) {
    if (
      isLineTargetElement(current, editor)
      || isTopLevelTextLineNode(current, editor)
      || (includeBreaks && isCountableBreakNode(current, editor))
    ) {
      nodes.push(current);
    }
    current = walker.nextNode();
  }
  if (nodes.length) return nodes;
  return Array.from(editor.children)
    .filter((node) => node instanceof HTMLElement && !node.classList.contains("page-line-anchor"));
}

function getLineEntriesForEditor(context, editor) {
  const rawNodes = getLineNodesForEditor(context, editor);
  if (!rawNodes.length) return [];

  const measured = [];
  rawNodes.forEach((node) => {
    const rect = getLineNodeRect(node);
    if (!rect) return;
    const top = Number.isFinite(rect.top) ? rect.top : NaN;
    const bottom = Number.isFinite(rect.bottom) ? rect.bottom : NaN;
    const left = Number.isFinite(rect.left) ? rect.left : NaN;
    if (!Number.isFinite(top) || !Number.isFinite(bottom) || !Number.isFinite(left)) return;
    if (bottom <= top) return;
    measured.push({
      node,
      top,
      bottom,
      left
    });
  });

  if (!measured.length) return [];

  measured.sort((a, b) => {
    if (a.top !== b.top) return a.top - b.top;
    return a.left - b.left;
  });

  const entries = [];
  const sameLineThreshold = 4;
  measured.forEach((item) => {
    const last = entries[entries.length - 1];
    if (last && Math.abs(item.top - last.top) <= sameLineThreshold) {
      last.bottom = Math.max(last.bottom, item.bottom);
      last.nodes.push(item.node);
      if (item.left < last.left) {
        last.left = item.left;
        last.anchorNode = item.node;
      }
      return;
    }
    entries.push({
      top: item.top,
      bottom: item.bottom,
      left: item.left,
      anchorNode: item.node,
      nodes: [item.node]
    });
  });

  return entries;
}

function getOrCreateEditorRangeLayer(context, editor) {
  if (!editor) return null;
  const shell = editor.closest(".editor-line-shell");
  if (!(shell instanceof HTMLElement)) return null;

  let layer = shell.querySelector(`.editor-range-layer[data-context="${context}"]`);
  if (!(layer instanceof HTMLElement)) {
    layer = document.createElement("div");
    layer.className = "editor-range-layer";
    layer.dataset.context = context;
    layer.setAttribute("aria-hidden", "true");
    shell.appendChild(layer);
  }
  return layer;
}

function renderEditorRangeLayer(context, editor, lineEntries, ranges) {
  const layer = getOrCreateEditorRangeLayer(context, editor);
  if (!layer || !editor) return;

  layer.style.top = `${editor.offsetTop}px`;
  layer.style.left = `${editor.offsetLeft}px`;
  layer.style.width = `${editor.clientWidth}px`;
  layer.style.height = `${editor.clientHeight}px`;

  if (!ranges.length || !lineEntries.length || editor.clientHeight <= 0 || editor.clientWidth <= 0) {
    layer.innerHTML = "";
    return;
  }

  const normalizedRanges = normalizeLineRanges(ranges);
  const totalLines = lineEntries.length;
  const editorRect = editor.getBoundingClientRect();
  const fragment = document.createDocumentFragment();

  normalizedRanges.forEach((range) => {
    const startLine = Math.min(Math.max(range.start, 1), totalLines);
    const endLine = Math.min(Math.max(range.end, startLine), totalLines);
    const startEntry = lineEntries[startLine - 1];
    const endEntry = lineEntries[endLine - 1];
    if (!startEntry || !endEntry) return;
    const blockTopRaw = Math.round(startEntry.top - editorRect.top);
    const blockBottomRaw = Math.round(endEntry.bottom - editorRect.top);
    const blockTop = Math.max(0, blockTopRaw);
    const blockBottom = Math.min(editor.clientHeight, blockBottomRaw);
    if (blockBottom <= blockTop) return;

    const block = document.createElement("div");
    block.className = "editor-range-block";
    block.style.top = `${blockTop}px`;
    block.style.height = `${blockBottom - blockTop}px`;
    block.style.setProperty("--range-color", range.color);
    fragment.appendChild(block);
  });

  layer.innerHTML = "";
  layer.appendChild(fragment);
}

function getLineColor(lineNumber, ranges) {
  let color = "";
  ranges.forEach((range) => {
    if (lineNumber >= range.start && lineNumber <= range.end) {
      color = range.color;
    }
  });
  return color;
}

function renderLineNumbersForContext(context) {
  const { editor, gutter } = getEditorAndGutterByContext(context);
  if (!editor || !gutter) return;

  const lineEntries = getLineEntriesForEditor(context, editor);
  const ranges = normalizeLineRanges(getRangesForContext(context));
  editor.querySelectorAll(".editor-line-background").forEach((node) => {
    node.classList.remove("editor-line-background");
    if (node instanceof HTMLElement) {
      node.style.removeProperty("--line-bg-color");
    }
  });
  renderEditorRangeLayer(context, editor, lineEntries, ranges);
  const editorRect = editor.getBoundingClientRect();
  const fragment = document.createDocumentFragment();

  if (!lineEntries.length) {
    const line = document.createElement("div");
    line.className = "editor-line-number";
    line.textContent = "1";
    line.style.top = "4px";
    const color = getLineColor(1, ranges);
    if (color) {
      line.classList.add("is-highlighted");
    }
    fragment.appendChild(line);
  } else {
    lineEntries.forEach((entry, index) => {
      const lineNumber = index + 1;
      const line = document.createElement("div");
      line.className = "editor-line-number";
      line.textContent = String(lineNumber);
      line.style.top = `${Math.round(entry.top - editorRect.top + 3)}px`;
      const color = getLineColor(lineNumber, ranges);
      if (color) {
        line.classList.add("is-highlighted");
      }
      fragment.appendChild(line);
    });
  }

  gutter.innerHTML = "";
  gutter.appendChild(fragment);
}

function refreshAllLineNumbers() {
  renderLineNumbersForContext("detail");
  renderLineNumbersForContext("personalize");
  renderLineNumbersForContext("about");
}

function queueLineNumberRefresh() {
  if (state.lineNumberRaf) return;
  state.lineNumberRaf = window.requestAnimationFrame(() => {
    state.lineNumberRaf = 0;
    refreshAllLineNumbers();
  });
}

function hasSelectionInsideEditor(editor) {
  if (!(editor instanceof HTMLElement)) return false;
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) return false;
  const range = selection.getRangeAt(0);
  return editor.contains(range.startContainer) && editor.contains(range.endContainer);
}

function resolveCaretFallbackNodeFromClickTarget(targetNode, editor) {
  if (!(editor instanceof HTMLElement) || !(targetNode instanceof Node)) return null;
  if (!editor.contains(targetNode)) return null;

  let node = targetNode;
  if (node.nodeType === Node.ELEMENT_NODE) {
    const element = node;
    if (element.closest && element.closest(".image-wrapper")) {
      return null;
    }
  }

  if (node instanceof HTMLTableElement
    || node instanceof HTMLTableSectionElement
    || node instanceof HTMLTableRowElement) {
    const cell = node.querySelector("td,th");
    if (cell) {
      return cell;
    }
  }

  if (node instanceof Element) {
    const tableAncestor = node.closest("table,thead,tbody,tfoot,tr");
    if (tableAncestor instanceof Element) {
      const cell = tableAncestor.querySelector("td,th");
      if (cell) {
        return cell;
      }
    }
  }

  return node;
}

function placeCaretAtNodeStart(editor, targetNode) {
  if (!(editor instanceof HTMLElement) || !(targetNode instanceof Node)) return false;
  const selection = window.getSelection();
  if (!selection) return false;

  const range = document.createRange();
  if (targetNode instanceof Text) {
    range.setStart(targetNode, 0);
    range.collapse(true);
  } else if (targetNode instanceof HTMLBRElement) {
    if (targetNode.parentNode) {
      range.setStartAfter(targetNode);
      range.collapse(true);
    } else {
      return false;
    }
  } else if (targetNode instanceof HTMLHRElement || targetNode instanceof HTMLImageElement) {
    if (targetNode.parentNode) {
      range.setStartBefore(targetNode);
      range.collapse(true);
    } else {
      return false;
    }
  } else if (targetNode instanceof Element) {
    range.selectNodeContents(targetNode);
    range.collapse(true);
  } else {
    return false;
  }

  editor.focus();
  selection.removeAllRanges();
  selection.addRange(range);
  return true;
}

function placeCaretAtEditorEnd(editor) {
  if (!(editor instanceof HTMLElement)) return false;
  const selection = window.getSelection();
  if (!selection) return false;
  const range = document.createRange();
  range.selectNodeContents(editor);
  range.collapse(false);
  editor.focus();
  selection.removeAllRanges();
  selection.addRange(range);
  return true;
}

function attachEditorCaretFallback(editor, onCaretPlaced) {
  if (!(editor instanceof HTMLElement)) return;
  editor.addEventListener("click", (event) => {
    if (event.button !== 0) return;
    const target = event.target instanceof Node ? event.target : null;
    if (!target) return;
    if (target instanceof Element && target.closest(".image-wrapper")) return;

    window.requestAnimationFrame(() => {
      if (hasSelectionInsideEditor(editor)) return;
      const fallbackNode = resolveCaretFallbackNodeFromClickTarget(target, editor);
      let placed = false;
      if (fallbackNode) {
        placed = placeCaretAtNodeStart(editor, fallbackNode);
      }
      if (!placed) {
        placed = placeCaretAtEditorEnd(editor);
      }
      if (placed && typeof onCaretPlaced === "function") {
        onCaretPlaced();
      }
    });
  });
}

function placeCaretAtEditorLine(context, lineNumber) {
  const { editor } = getEditorAndGutterByContext(context);
  if (!(editor instanceof HTMLElement)) return false;

  const lineEntries = getLineEntriesForEditor(context, editor);
  if (!lineEntries.length) {
    return placeCaretAtEditorEnd(editor);
  }

  const index = Math.max(0, Math.min(lineEntries.length - 1, Number(lineNumber) - 1));
  const lineNode = lineEntries[index].anchorNode;
  const fallbackNode = resolveCaretFallbackNodeFromClickTarget(lineNode, editor) || lineNode;
  const placed = placeCaretAtNodeStart(editor, fallbackNode);
  if (placed) {
    if (context === "detail") {
      saveSelectionRange();
      syncDetailFontSizeControl();
    } else if (context === "about") {
      saveAboutSelectionRange();
      syncAboutFontSizeControl();
    } else if (context === "personalize") {
      savePersonalizeSelectionRange();
      syncPersonalizeFontSizeControl();
    }
    queueLineNumberRefresh();
  }
  return placed;
}

function handleLineGutterPointer(context, event) {
  const target = event.target instanceof Element ? event.target : null;
  if (!target) return;
  const lineNode = target.closest(".editor-line-number");
  if (!lineNode) return;
  const lineNumber = Number.parseInt(lineNode.textContent || "", 10);
  if (!Number.isFinite(lineNumber) || lineNumber < 1) return;
  event.preventDefault();
  placeCaretAtEditorLine(context, lineNumber);
}

function getSelectionLineNumber(context) {
  const { editor } = getEditorAndGutterByContext(context);
  if (!editor) return 1;

  const lineEntries = getLineEntriesForEditor(context, editor);
  if (!lineEntries.length) return 1;

  const selection = window.getSelection();
  let range = null;
  if (selection && selection.rangeCount > 0) {
    const current = selection.getRangeAt(0);
    if (editor.contains(current.startContainer)) {
      range = current;
    }
  }
  if (!range) {
    const fallbackRange = context === "detail"
      ? state.savedRange
      : context === "about"
        ? state.aboutSavedRange
        : state.personalizeSavedRange;
    if (fallbackRange && editor.contains(fallbackRange.startContainer)) {
      range = fallbackRange;
    }
  }
  if (!range) return 1;

  const startNode = range.startContainer;
  const target = startNode.nodeType === Node.TEXT_NODE
    ? startNode.parentElement
    : startNode;

  for (let i = 0; i < lineEntries.length; i += 1) {
    const entry = lineEntries[i];
    for (let j = 0; j < entry.nodes.length; j += 1) {
      const node = entry.nodes[j];
      if (node === startNode) {
        return i + 1;
      }
      if (node instanceof Element && target instanceof Element && (node === target || node.contains(target))) {
        return i + 1;
      }
      if (node instanceof Text && startNode instanceof Node && node === startNode) {
        return i + 1;
      }
    }
  }
  return 1;
}

function positionLineRangePopover() {
  if (!elements.lineRangePopover || elements.lineRangePopover.hidden || !state.lineRangeTrigger) return;
  const popover = elements.lineRangePopover;
  const triggerRect = state.lineRangeTrigger.getBoundingClientRect();

  popover.style.left = "12px";
  popover.style.top = "12px";

  const popRect = popover.getBoundingClientRect();
  const maxLeft = Math.max(12, window.innerWidth - popRect.width - 12);
  const nextLeft = Math.min(Math.max(12, triggerRect.left), maxLeft);

  let nextTop = triggerRect.bottom + 8;
  if (nextTop + popRect.height > window.innerHeight - 12) {
    nextTop = triggerRect.top - popRect.height - 8;
  }
  if (nextTop < 12) {
    nextTop = 12;
  }

  popover.style.left = `${nextLeft}px`;
  popover.style.top = `${nextTop}px`;
}

function hideLineRangePopover() {
  if (!elements.lineRangePopover) return;
  elements.lineRangePopover.hidden = true;
  state.lineRangeContext = "";
  state.lineRangeTrigger = null;
}

function openLineRangePopover(context, triggerButton) {
  if (!triggerButton || !elements.lineRangePopover) return;
  if (context === "detail" && state.detailImportedMode) {
    setStatus(t("status.importedDetailReadonly"), "error");
    return;
  }
  if (context === "about" && state.aboutImportedMode) {
    setStatus(t("status.importedAboutReadonly"), "error");
    return;
  }
  hideLineRangePopover();
  state.lineRangeContext = context;
  state.lineRangeTrigger = triggerButton;

  const line = getSelectionLineNumber(context);
  if (elements.lineRangeStart) {
    elements.lineRangeStart.value = String(line);
  }
  if (elements.lineRangeEnd) {
    elements.lineRangeEnd.value = String(line);
  }
  if (elements.lineRangeColor) {
    const ranges = getRangesForContext(context);
    const existing = ranges.find((range) => line >= range.start && line <= range.end);
    elements.lineRangeColor.value = existing?.color || "#f5f2ed";
  }

  hideInsertButtonPopover();
  hideColumnsPopover();
  hideWebEmbedPopover();
  hideTablePopover();
  hideAboutTablePopover();
  hidePersonalizeTablePopover();
  elements.lineRangePopover.hidden = false;
  positionLineRangePopover();
}

function applyLineRangeFromPopover() {
  if (!state.lineRangeContext) return;
  const startRaw = Number.parseInt(elements.lineRangeStart?.value || "", 10);
  const endRaw = Number.parseInt(elements.lineRangeEnd?.value || "", 10);
  if (!Number.isFinite(startRaw) || !Number.isFinite(endRaw) || startRaw < 1 || endRaw < 1) {
    return;
  }
  const start = Math.max(1, Math.min(startRaw, endRaw));
  const end = Math.max(start, Math.max(startRaw, endRaw));
  const color = normalizeHexColor(elements.lineRangeColor?.value || "#f5f2ed");

  const nextRanges = getRangesForContext(state.lineRangeContext)
    .filter((range) => range.end < start || range.start > end);
  nextRanges.push({ start, end, color });
  setRangesForContext(state.lineRangeContext, nextRanges);
  queueLineNumberRefresh();
}

function removeLineRangeFromPopover() {
  if (!state.lineRangeContext) return;
  const startRaw = Number.parseInt(elements.lineRangeStart?.value || "", 10);
  const endRaw = Number.parseInt(elements.lineRangeEnd?.value || "", 10);
  if (!Number.isFinite(startRaw) || !Number.isFinite(endRaw) || startRaw < 1 || endRaw < 1) {
    return;
  }
  const start = Math.max(1, Math.min(startRaw, endRaw));
  const end = Math.max(start, Math.max(startRaw, endRaw));
  const nextRanges = getRangesForContext(state.lineRangeContext)
    .filter((range) => range.end < start || range.start > end);
  setRangesForContext(state.lineRangeContext, nextRanges);
  queueLineNumberRefresh();
}

function getEditorElementForContext(context) {
  const { editor } = getEditorAndGutterByContext(context);
  return editor instanceof HTMLElement ? editor : null;
}

function getUsableRangeForContext(context, selection = null) {
  const editor = getEditorElementForContext(context);
  if (!(editor instanceof HTMLElement)) return null;

  const currentSelection = selection || window.getSelection();
  if (currentSelection && currentSelection.rangeCount > 0) {
    const range = currentSelection.getRangeAt(0);
    if (editor.contains(range.startContainer) && editor.contains(range.endContainer)) {
      return range;
    }
  }

  if (context === "detail") {
    return state.savedRange && editor.contains(state.savedRange.startContainer) ? state.savedRange : null;
  }
  if (context === "about") {
    return state.aboutSavedRange && editor.contains(state.aboutSavedRange.startContainer) ? state.aboutSavedRange : null;
  }
  if (context === "personalize") {
    return state.personalizeSavedRange && editor.contains(state.personalizeSavedRange.startContainer) ? state.personalizeSavedRange : null;
  }
  return null;
}

function runCommandForContext(context, command, value = null) {
  if (context === "detail") return runExecCommand(command, value);
  if (context === "about") return runAboutExecCommand(command, value);
  if (context === "personalize") return runPersonalizeCommand(command, value);
  return false;
}

function runFormatBlockForContext(context, tag) {
  const normalizedTag = String(tag || "").trim().toLowerCase();
  if (!normalizedTag) return false;

  let ok = runCommandForContext(context, "formatBlock", normalizedTag);
  if (!ok) {
    ok = runCommandForContext(context, "formatBlock", `<${normalizedTag}>`);
  }
  if (!ok) {
    ok = runCommandForContext(context, "formatBlock", normalizedTag.toUpperCase());
  }
  return ok;
}

function getCurrentEditorBlockByContext(context) {
  if (context === "detail") return getCurrentEditorBlock();
  if (context === "about") return getCurrentAboutEditorBlock();
  if (context === "personalize") return getCurrentPersonalizeEditorBlock();
  return null;
}

function getParagraphBlocksInRange(editor, range) {
  if (!(editor instanceof HTMLElement) || !(range instanceof Range)) return [];

  const blocks = [];
  editor.querySelectorAll("p").forEach((node) => {
    if (!(node instanceof HTMLParagraphElement)) return;
    try {
      if (range.intersectsNode(node)) {
        blocks.push(node);
      }
    } catch (error) {
      // Ignore browser edge cases around detached ranges/nodes.
    }
  });
  return blocks;
}

function getTargetParagraphBlocksForContext(context, rangeHint = null) {
  const editor = getEditorElementForContext(context);
  if (!(editor instanceof HTMLElement)) return [];

  const selection = window.getSelection();
  const range = rangeHint instanceof Range ? rangeHint : getUsableRangeForContext(context, selection);
  if (!(range instanceof Range)) {
    const block = getCurrentEditorBlockByContext(context);
    return block instanceof HTMLParagraphElement ? [block] : [];
  }

  const targets = getParagraphBlocksInRange(editor, range);
  if (targets.length) return targets;

  const fallbackBlock = getCurrentEditorBlockByContext(context);
  return fallbackBlock instanceof HTMLParagraphElement ? [fallbackBlock] : [];
}

function getTargetBlockFormatNodesForContext(context, rangeHint = null) {
  const editor = getEditorElementForContext(context);
  if (!(editor instanceof HTMLElement)) return [];

  const blockSelector = "p, h1, h2, h3, h4, h5, h6, blockquote, li, td, th, div";
  const selection = window.getSelection();
  const range = rangeHint instanceof Range ? rangeHint : getUsableRangeForContext(context, selection);

  if (!(range instanceof Range)) {
    const fallbackBlock = getCurrentEditorBlockByContext(context);
    return fallbackBlock instanceof HTMLElement ? [fallbackBlock] : [];
  }

  const targets = [];
  editor.querySelectorAll(blockSelector).forEach((node) => {
    if (!(node instanceof HTMLElement)) return;
    try {
      if (range.intersectsNode(node)) {
        targets.push(node);
      }
    } catch (error) {
      // Ignore detached-range edge cases.
    }
  });

  if (targets.length) return targets;
  const fallbackBlock = getCurrentEditorBlockByContext(context);
  return fallbackBlock instanceof HTMLElement ? [fallbackBlock] : [];
}

function stripTypographyInlineStylesInNode(node) {
  if (!(node instanceof HTMLElement)) return false;
  if (node.closest(".detail-inline-button")) return false;
  if (node.closest(".image-wrapper")) return false;
  if (node.closest(".web-preview-wrapper")) return false;

  let changed = false;
  const style = node.style;
  if (style) {
    const props = [
      "font-size",
      "color",
      "background-color",
      "font-family",
      "line-height",
      "caret-color"
    ];
    props.forEach((prop) => {
      const before = style.getPropertyValue(prop);
      if (before) {
        style.removeProperty(prop);
        changed = true;
      }
    });
    if (!String(node.getAttribute("style") || "").trim()) {
      if (node.hasAttribute("style")) {
        node.removeAttribute("style");
        changed = true;
      }
    }
  }

  if (node.tagName === "FONT") {
    ["size", "color", "face"].forEach((attr) => {
      if (node.hasAttribute(attr)) {
        node.removeAttribute(attr);
        changed = true;
      }
    });
  }

  return changed;
}

function resetInlineTypographyStylesForContext(context, rangeHint = null) {
  const targets = getTargetBlockFormatNodesForContext(context, rangeHint);
  if (!targets.length) return;

  let changed = false;
  targets.forEach((block) => {
    changed = stripTypographyInlineStylesInNode(block) || changed;
    block.querySelectorAll("*").forEach((node) => {
      changed = stripTypographyInlineStylesInNode(node) || changed;
    });
  });

  if (!changed) return;
  saveSelectionForContext(context);
  persistDraftForContext(context);
  queueLineNumberRefresh();
}

function updateParagraphNoteClassForContext(context, isNote, rangeHint = null) {
  const targets = getTargetParagraphBlocksForContext(context, rangeHint);
  if (!targets.length) return;

  targets.forEach((block) => {
    if (!(block instanceof HTMLParagraphElement)) return;
    if (isNote) {
      block.classList.add("detail-note-text");
    } else {
      block.classList.remove("detail-note-text");
    }
  });

  saveSelectionForContext(context);
  persistDraftForContext(context);
  queueLineNumberRefresh();
}

function saveSelectionForContext(context) {
  if (context === "detail") {
    saveSelectionRange();
    return;
  }
  if (context === "about") {
    saveAboutSelectionRange();
    return;
  }
  if (context === "personalize") {
    savePersonalizeSelectionRange();
  }
}

function persistDraftForContext(context) {
  if (context === "detail") {
    persistDetailDraftFromEditor();
    return;
  }
  if (context === "about") {
    persistAboutDraftFromEditor();
    return;
  }
  if (context === "personalize") {
    persistPersonalizationDraftFromEditor();
  }
}

function syncFontSizeControlForContext(context) {
  if (context === "detail") {
    syncDetailFontSizeControl();
    return;
  }
  if (context === "about") {
    syncAboutFontSizeControl();
    return;
  }
  if (context === "personalize") {
    syncPersonalizeFontSizeControl();
  }
}

function getSelectionListItemWithinEditor(editor) {
  if (!(editor instanceof HTMLElement)) return null;
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) return null;
  const range = selection.getRangeAt(0);
  if (!editor.contains(range.startContainer) || !editor.contains(range.endContainer)) return null;
  let node = range.startContainer;
  if (node.nodeType === Node.TEXT_NODE) {
    node = node.parentElement;
  }
  if (!(node instanceof Element)) return null;
  const listItem = node.closest("li");
  if (!(listItem instanceof HTMLLIElement)) return null;
  return editor.contains(listItem) ? listItem : null;
}

function getListDepthWithinEditor(listItem, editor) {
  if (!(listItem instanceof HTMLLIElement) || !(editor instanceof HTMLElement)) return 0;
  let depth = 0;
  let cursor = listItem.parentElement;
  while (cursor && editor.contains(cursor)) {
    if (cursor instanceof HTMLOListElement || cursor instanceof HTMLUListElement) {
      depth += 1;
    }
    cursor = cursor.parentElement;
  }
  return depth;
}

function handleListTabInEditor(context, editor, event) {
  if (!(editor instanceof HTMLElement)) return false;
  if (event.key !== "Tab" || event.metaKey || event.ctrlKey || event.altKey) return false;

  const listItem = getSelectionListItemWithinEditor(editor);
  if (!(listItem instanceof HTMLLIElement)) return false;

  const depth = getListDepthWithinEditor(listItem, editor);
  event.preventDefault();

  if (event.shiftKey) {
    if (depth <= 1) {
      return true;
    }
    document.execCommand("outdent", false, null);
  } else {
    if (depth >= EDITOR_LIST_MAX_DEPTH) {
      return true;
    }
    document.execCommand("indent", false, null);
  }

  saveSelectionForContext(context);
  persistDraftForContext(context);
  syncFontSizeControlForContext(context);
  queueLineNumberRefresh();
  return true;
}

function parseColumnsCount(value) {
  const count = Number.parseInt(String(value || "").trim(), 10);
  if (!Number.isFinite(count)) return NaN;
  if (count < 2 || count > 6) return NaN;
  return count;
}

function createColumnsBlock(count, color) {
  const columnsCount = Number.isFinite(count) ? count : 2;
  const hasCustomColor = typeof color === "string" && color.trim().length > 0;
  const bgColor = hasCustomColor ? normalizeHexColor(color, "#f1efea") : "";
  const block = document.createElement("div");
  block.className = "detail-columns-block";
  block.style.setProperty("--columns-count", String(columnsCount));
  block.dataset.columnsCount = String(columnsCount);
  if (bgColor) {
    block.style.setProperty("--columns-bg", bgColor);
    block.dataset.columnsColor = bgColor;
  }

  for (let index = 0; index < columnsCount; index += 1) {
    const cell = document.createElement("div");
    cell.className = "detail-columns-cell";
    cell.dataset.columnIndex = String(index + 1);
    const paragraph = document.createElement("p");
    paragraph.appendChild(document.createElement("br"));
    cell.appendChild(paragraph);
    block.appendChild(cell);
  }

  return block;
}

function ensureParagraphAfterColumnsBlock(context, block) {
  const editor = getEditorElementForContext(context);
  if (!(editor instanceof HTMLElement) || !(block instanceof HTMLElement)) return null;
  if (!editor.contains(block)) return null;

  const parent = block.parentNode;
  if (!(parent instanceof Node)) return null;

  const paragraph = document.createElement("p");
  paragraph.appendChild(document.createElement("br"));
  parent.insertBefore(paragraph, block.nextSibling);

  const selection = window.getSelection();
  if (selection) {
    const range = document.createRange();
    range.selectNodeContents(paragraph);
    range.collapse(true);
    selection.removeAllRanges();
    selection.addRange(range);
  }

  editor.focus();
  saveSelectionForContext(context);

  if (context === "detail") {
    syncDetailFontSizeControl();
  } else if (context === "about") {
    syncAboutFontSizeControl();
  } else if (context === "personalize") {
    syncPersonalizeFontSizeControl();
  }

  return paragraph;
}

function hideColumnsPopover() {
  if (!elements.columnsPopover) return;
  elements.columnsPopover.hidden = true;
  state.columnsPopoverContext = "";
  state.columnsPopoverTrigger = null;
}

function syncColumnsColorControl() {
  if (!elements.columnsColor) return;
  const enabled = Boolean(elements.columnsUseColor?.checked);
  elements.columnsColor.disabled = !enabled;
}

function positionColumnsPopover() {
  if (!elements.columnsPopover || elements.columnsPopover.hidden || !state.columnsPopoverTrigger) return;
  const popover = elements.columnsPopover;
  const triggerRect = state.columnsPopoverTrigger.getBoundingClientRect();

  popover.style.left = "12px";
  popover.style.top = "12px";

  const popRect = popover.getBoundingClientRect();
  const maxLeft = Math.max(12, window.innerWidth - popRect.width - 12);
  const nextLeft = Math.min(Math.max(12, triggerRect.left), maxLeft);

  let nextTop = triggerRect.bottom + 8;
  if (nextTop + popRect.height > window.innerHeight - 12) {
    nextTop = triggerRect.top - popRect.height - 8;
  }
  if (nextTop < 12) {
    nextTop = 12;
  }

  popover.style.left = `${nextLeft}px`;
  popover.style.top = `${nextTop}px`;
}

function openColumnsPopover(context, triggerButton) {
  if (!triggerButton || !elements.columnsPopover) return;
  if (context === "detail" && state.detailImportedMode) {
    setStatus(t("status.importedDetailReadonly"), "error");
    return;
  }
  if (context === "about" && state.aboutImportedMode) {
    setStatus(t("status.importedAboutReadonly"), "error");
    return;
  }

  saveSelectionForContext(context);
  hideTablePopover();
  hideAboutTablePopover();
  hidePersonalizeTablePopover();
  hideLineRangePopover();
  hideInsertButtonPopover();
  hideWebEmbedPopover();
  hideColumnsPopover();

  state.columnsPopoverContext = context;
  state.columnsPopoverTrigger = triggerButton;

  if (elements.columnsCount) {
    elements.columnsCount.value = "2";
  }
  if (elements.columnsUseColor) {
    elements.columnsUseColor.checked = false;
  }
  if (elements.columnsColor) {
    elements.columnsColor.value = "#f1efea";
  }
  syncColumnsColorControl();

  elements.columnsPopover.hidden = false;
  positionColumnsPopover();
  if (elements.columnsCount) {
    elements.columnsCount.focus();
    elements.columnsCount.select();
  }
}

function applyColumnsFromPopover() {
  const context = state.columnsPopoverContext;
  if (!context) return;
  const editor = getEditorElementForContext(context);
  if (!editor) return;

  const count = parseColumnsCount(elements.columnsCount?.value);
  if (!Number.isFinite(count)) {
    setStatus(t("status.error").replace("{message}", t("detail.columnsCountInvalid")), "error");
    elements.columnsCount?.focus();
    elements.columnsCount?.select();
    return;
  }

  const color = elements.columnsUseColor?.checked
    ? normalizeHexColor(elements.columnsColor?.value || "#f1efea", "#f1efea")
    : "";
  const block = createColumnsBlock(count, color);

  if (context === "detail") {
    insertNodeAtCursor(block);
  } else if (context === "about") {
    insertAboutNodeAtCursor(block);
  } else {
    insertPersonalizeNodeAtCursor(block);
  }

  ensureParagraphAfterColumnsBlock(context, block);
  persistDraftForContext(context);
  hideColumnsPopover();
  enterColumnsEditMode(context, block);
  queueLineNumberRefresh();
}

function exitColumnsEditMode() {
  if (state.columnsEditBlock instanceof HTMLElement) {
    state.columnsEditBlock.classList.remove("is-editing");
  }
  state.columnsEditBlock = null;
  state.columnsEditCell = null;
  state.columnsEditContext = "";
  if (elements.columnsEditFloat) {
    elements.columnsEditFloat.hidden = true;
  }
}

function positionColumnsEditFloat() {
  if (!elements.columnsEditFloat || elements.columnsEditFloat.hidden) return;
  const block = state.columnsEditBlock;
  if (!(block instanceof HTMLElement) || !block.isConnected) {
    exitColumnsEditMode();
    return;
  }
  const context = state.columnsEditContext;
  const editor = getEditorElementForContext(context);
  if (!(editor instanceof HTMLElement) || !editor.contains(block)) {
    exitColumnsEditMode();
    return;
  }
  const float = elements.columnsEditFloat;
  const blockRect = block.getBoundingClientRect();

  // Reset first so measurement is stable.
  float.style.left = "12px";
  float.style.top = "12px";
  float.style.transform = "none";
  const floatRect = float.getBoundingClientRect();

  const preferredLeft = blockRect.left + (blockRect.width - floatRect.width) / 2;
  const maxLeft = Math.max(12, window.innerWidth - floatRect.width - 12);
  const left = Math.min(Math.max(12, Math.round(preferredLeft)), maxLeft);

  let top = Math.round(blockRect.top - floatRect.height - 10);
  if (top < 12) {
    top = Math.round(blockRect.bottom + 10);
  }
  const maxTop = Math.max(12, window.innerHeight - floatRect.height - 12);
  top = Math.min(Math.max(12, top), maxTop);

  float.style.left = `${left}px`;
  float.style.top = `${top}px`;
  float.style.transform = "none";
}

function getColumnsEditCellForContext(context, editor, block) {
  if (!(editor instanceof HTMLElement) || !(block instanceof HTMLElement)) return null;
  if (state.columnsEditContext !== context) return null;
  if (!(state.columnsEditBlock instanceof HTMLElement) || state.columnsEditBlock !== block) return null;
  if (!editor.contains(block)) return null;

  if (state.columnsEditCell instanceof HTMLElement && block.contains(state.columnsEditCell)) {
    return state.columnsEditCell;
  }
  const firstCell = block.querySelector(".detail-columns-cell");
  return firstCell instanceof HTMLElement ? firstCell : null;
}

function getColumnsEditInsertionRange(context, editor) {
  if (!(editor instanceof HTMLElement)) return null;
  const block = state.columnsEditBlock;
  if (!(block instanceof HTMLElement) || !editor.contains(block)) return null;
  const cell = getColumnsEditCellForContext(context, editor, block);
  if (!(cell instanceof HTMLElement)) return null;
  const range = document.createRange();
  range.selectNodeContents(cell);
  range.collapse(false);
  return range;
}

function getMovableColumnsSibling(block, direction) {
  if (!(block instanceof HTMLElement)) return null;
  const isUp = direction === "up";
  let cursor = isUp ? block.previousSibling : block.nextSibling;
  while (cursor) {
    if (cursor.nodeType === Node.ELEMENT_NODE) {
      return cursor;
    }
    if (cursor.nodeType === Node.TEXT_NODE && String(cursor.textContent || "").trim()) {
      return cursor;
    }
    cursor = isUp ? cursor.previousSibling : cursor.nextSibling;
  }
  return null;
}

function focusColumnsEditCell(context, editor, block) {
  if (!(editor instanceof HTMLElement) || !(block instanceof HTMLElement)) return;
  const cell = getColumnsEditCellForContext(context, editor, block);
  if (!(cell instanceof HTMLElement)) return;

  const selection = window.getSelection();
  if (!selection) return;
  const range = document.createRange();
  range.selectNodeContents(cell);
  range.collapse(false);
  selection.removeAllRanges();
  selection.addRange(range);
}

function moveColumnsEditBlock(direction) {
  const context = state.columnsEditContext;
  const editor = getEditorElementForContext(context);
  const block = state.columnsEditBlock;
  if (!(editor instanceof HTMLElement) || !(block instanceof HTMLElement)) return;
  if (!editor.contains(block)) return;
  if (direction !== "up" && direction !== "down") return;

  const parent = block.parentNode;
  if (!(parent instanceof Node)) return;

  const sibling = getMovableColumnsSibling(block, direction);
  if (!sibling) return;

  if (direction === "up") {
    parent.insertBefore(block, sibling);
  } else {
    parent.insertBefore(block, sibling.nextSibling);
  }

  focusColumnsEditCell(context, editor, block);
  saveSelectionForContext(context);
  persistDraftForContext(context);
  queueLineNumberRefresh();
  positionColumnsEditFloat();
}

function deleteColumnsEditBlock() {
  const context = state.columnsEditContext;
  const editor = getEditorElementForContext(context);
  const block = state.columnsEditBlock;
  if (!(editor instanceof HTMLElement) || !(block instanceof HTMLElement)) return;
  if (!editor.contains(block)) return;

  const parent = block.parentNode;
  if (!(parent instanceof Node)) return;

  const nextSibling = getMovableColumnsSibling(block, "down");
  const prevSibling = getMovableColumnsSibling(block, "up");
  block.remove();

  if (parent instanceof HTMLElement && parent.classList.contains("detail-columns-cell")) {
    ensureColumnsCellPlaceholder(parent);
  }

  exitColumnsEditMode();

  const selection = window.getSelection();
  if (selection) {
    const range = document.createRange();
    const caretTarget = nextSibling || prevSibling;
    if (caretTarget instanceof HTMLElement && editor.contains(caretTarget)) {
      range.selectNodeContents(caretTarget);
      range.collapse(false);
    } else if (parent instanceof HTMLElement && editor.contains(parent)) {
      range.selectNodeContents(parent);
      range.collapse(false);
    } else {
      range.selectNodeContents(editor);
      range.collapse(false);
    }
    selection.removeAllRanges();
    selection.addRange(range);
  }

  editor.focus();
  saveSelectionForContext(context);
  persistDraftForContext(context);
  queueLineNumberRefresh();
}

function isRangeInsideNode(range, node) {
  if (!(range instanceof Range) || !(node instanceof Node)) return false;
  return node.contains(range.startContainer) && node.contains(range.endContainer);
}

function enterColumnsEditMode(context, block, preferredCell = null) {
  const editor = getEditorElementForContext(context);
  if (!(editor instanceof HTMLElement) || !(block instanceof HTMLElement)) return;
  if (!editor.contains(block) || !block.classList.contains("detail-columns-block")) return;

  if (state.columnsEditBlock instanceof HTMLElement && state.columnsEditBlock !== block) {
    state.columnsEditBlock.classList.remove("is-editing");
  }

  state.columnsEditContext = context;
  state.columnsEditBlock = block;
  if (preferredCell instanceof HTMLElement && block.contains(preferredCell)) {
    state.columnsEditCell = preferredCell;
  } else {
    const fallbackCell = block.querySelector(".detail-columns-cell");
    state.columnsEditCell = fallbackCell instanceof HTMLElement ? fallbackCell : null;
  }
  block.classList.add("is-editing");
  if (elements.columnsEditFloat) {
    elements.columnsEditFloat.hidden = false;
    positionColumnsEditFloat();
  }
}

function collectPersonalizationFromForm() {
  persistPersonalizationDraftFromEditor();
  const navBrandTextZh = String(elements.personalizeBrandTextZh?.value || "").trim()
    || DEFAULT_PERSONALIZATION.navBrandTextZh;
  const navBrandTextEn = String(elements.personalizeBrandTextEn?.value || "").trim()
    || DEFAULT_PERSONALIZATION.navBrandTextEn;
  const footerEnabled = Boolean(elements.personalizeFooterEnabled?.checked);
    const footerHtmlZh = normalizeDetailLikeHtml(state.personalizeFooterDraftHtml.zh || "");
    const footerHtmlEn = normalizeDetailLikeHtml(state.personalizeFooterDraftHtml.en || "");
  const footerBgRangesZh = normalizeLineRanges(state.personalizeFooterBgRanges.zh || []);
  const footerBgRangesEn = normalizeLineRanges(state.personalizeFooterBgRanges.en || []);
  return {
    navBrandTextZh,
    navBrandTextEn,
    footerEnabled,
    footerHtmlZh,
    footerHtmlEn,
    footerBgRangesZh,
    footerBgRangesEn
  };
}

async function savePersonalization() {
  if (!state.rootHandle) {
    setStatus(t("status.needFolder"), "error");
    return;
  }
  try {
    const next = collectPersonalizationFromForm();
    const content = `${JSON.stringify(next, null, 2)}\n`;
    const handle = await getFileHandle(state.rootHandle, contentPathSegments("assets", PERSONALIZATION_FILE), true);
    await writeFile(handle, content);
    state.personalization = next;
    setStatus(t("personalize.saved"));
  } catch (error) {
    setStatus(t("status.error").replace("{message}", error.message), "error");
  }
}

function handlePersonalizeToolbarClick(event) {
  const button = event.target.closest("button");
  if (!button || !elements.personalizeFooterEditor) return;
  if (!elements.personalizeToolbar || !elements.personalizeToolbar.contains(button)) return;

  const action = button.dataset.personalizeAction;
  if (action === "text-color") {
    savePersonalizeSelectionRange();
    openTextColorPresetsPopover("personalize", button, elements.personalizeTextColor);
    return;
  }
  if (action === "link") {
    insertPersonalizeLink();
    return;
  }
  if (action === "bg-section") {
    savePersonalizeSelectionRange();
    openLineRangePopover("personalize", button);
    return;
  }
  if (action === "columns") {
    savePersonalizeSelectionRange();
    openColumnsPopover("personalize", button);
    return;
  }
  if (action === "insert-button") {
    openInsertButtonPopover("personalize", button);
    return;
  }

  const command = button.dataset.personalizeCommand;
  if (!command) return;
  const value = button.dataset.personalizeValue || null;
  runPersonalizeCommand(command, value);
}

function runPersonalizeCommand(command, value = null) {
  if (!elements.personalizeFooterEditor) return;
  elements.personalizeFooterEditor.focus();
  restorePersonalizeSelectionRange();
  const result = document.execCommand(command, false, value);
  savePersonalizeSelectionRange();
  persistPersonalizationDraftFromEditor();
  syncPersonalizeFontSizeControl();
  queueLineNumberRefresh();
  return result;
}

function applyPersonalizeColorCommand(command, color) {
  if (!color) return;
  runPersonalizeCommand("styleWithCSS", true);
  const ok = runPersonalizeCommand(command, color);
  if (!ok && command === "hiliteColor") {
    runPersonalizeCommand("backColor", color);
  }
}

function getCurrentPersonalizeEditorBlock() {
  if (!elements.personalizeFooterEditor) return null;
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) return null;
  let node = selection.getRangeAt(0).startContainer;
  if (node.nodeType === Node.TEXT_NODE) {
    node = node.parentElement;
  }
  if (!(node instanceof Element)) return null;
  if (!elements.personalizeFooterEditor.contains(node)) return null;
  return node.closest("p, h1, h2, h3, h4, h5, h6, li, blockquote, pre, td, th, div");
}

function applyPersonalizeFormatBlock(tag) {
  const rangeSnapshot = getUsableRangeForContext("personalize")?.cloneRange() || null;
  runFormatBlockForContext("personalize", tag);
  resetInlineTypographyStylesForContext("personalize", rangeSnapshot);
  return rangeSnapshot;
}

function applyPersonalizeParagraphFormat() {
  const rangeSnapshot = applyPersonalizeFormatBlock("p");
  updateParagraphNoteClassForContext("personalize", false, rangeSnapshot);
}

function applyPersonalizeNoteFormat() {
  const rangeSnapshot = applyPersonalizeFormatBlock("p");
  updateParagraphNoteClassForContext("personalize", true, rangeSnapshot);
}

function ensurePersonalizeParagraphAfterEnter() {
  if (!elements.personalizeFooterEditor) return;
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) return;
  const range = selection.getRangeAt(0);
  if (!elements.personalizeFooterEditor.contains(range.startContainer)) return;

  let node = range.startContainer;
  if (node.nodeType === Node.TEXT_NODE) {
    node = node.parentElement;
  }
  if (!(node instanceof Element)) return;
  if (node.closest("li, td, th, .detail-columns-cell")) return;
  if (node.closest("p")) {
    savePersonalizeSelectionRange();
    queueLineNumberRefresh();
    return;
  }
  document.execCommand("formatBlock", false, "p");
  savePersonalizeSelectionRange();
  queueLineNumberRefresh();
}

function insertPersonalizeCodeBlock() {
  const selection = window.getSelection();
  const selectedText = selection ? selection.toString() : "";
  const pre = document.createElement("pre");
  pre.className = "detail-code-block";
  const code = document.createElement("code");
  code.textContent = selectedText || "code";
  pre.appendChild(code);
  insertPersonalizeNodeAtCursor(pre);
}

function insertPersonalizeLink() {
  const hrefInput = prompt(t("personalize.linkPromptUrl"), "https://");
  if (hrefInput === null) return;
  const href = hrefInput.trim();
  if (!href) return;
  const textInput = prompt(t("personalize.linkPromptText"), href);
  if (textInput === null) return;
  const label = textInput.trim() || href;

  const external = /^(https?:)?\/\//i.test(href);
  const targetAttrs = external ? ' target="_blank" rel="noopener noreferrer"' : "";
  const html = `<a class="detail-inline-link" href="${escapeHtmlAttribute(href)}"${targetAttrs}>${escapeHtml(label)}</a>`;
  runPersonalizeCommand("insertHTML", html);
}

function openPersonalizeTablePopover(anchorElement) {
  if (!elements.personalizeTablePopover || !elements.personalizeTableSize) return;
  hideInsertButtonPopover();
  hideColumnsPopover();
  hideLineRangePopover();
  hideWebEmbedPopover();
  savePersonalizeSelectionRange();
  elements.personalizeTablePopover.hidden = false;
  elements.personalizeTableSize.value = "3x3";
  positionPersonalizeTablePopover(anchorElement);
  elements.personalizeTableSize.focus();
  elements.personalizeTableSize.select();
}

function positionPersonalizeTablePopover(anchorElement) {
  if (!anchorElement || !elements.personalizeTablePopover || elements.personalizeTablePopover.hidden) return;
  if (!elements.panelPersonalize) return;
  const panelRect = elements.panelPersonalize.getBoundingClientRect();
  const anchorRect = anchorElement.getBoundingClientRect();
  const popover = elements.personalizeTablePopover;
  popover.style.top = `${anchorRect.bottom - panelRect.top + 6}px`;
  popover.style.left = `${anchorRect.left - panelRect.left}px`;

  const popRect = popover.getBoundingClientRect();
  const maxLeft = Math.max(12, panelRect.width - popRect.width - 12);
  const nextLeft = Math.min(Math.max(12, anchorRect.left - panelRect.left), maxLeft);
  popover.style.left = `${nextLeft}px`;
}

function hidePersonalizeTablePopover() {
  if (!elements.personalizeTablePopover) return;
  elements.personalizeTablePopover.hidden = true;
}

function insertPersonalizeTableFromPopover() {
  if (!elements.personalizeTableSize) return;
  const parsed = parseTableSizeInput(elements.personalizeTableSize.value);
  if (!parsed) {
    setStatus(t("status.error").replace("{message}", t("detail.tableSizeInvalid")), "error");
    elements.personalizeTableSize.focus();
    elements.personalizeTableSize.select();
    return;
  }
  hidePersonalizeTablePopover();
  insertPersonalizeTableAtCursor(parsed.rows, parsed.cols);
  persistPersonalizationDraftFromEditor();
}

function updateInsertButtonTargetField() {
  if (!elements.insertButtonLinkType || !elements.insertButtonLinkLabel || !elements.insertButtonLinkTarget) {
    return;
  }
  const linkType = elements.insertButtonLinkType.value || "anchor";
  let labelKey = "detail.buttonTargetAnchorLabel";
  let hintKey = "detail.buttonTargetAnchorHint";

  if (linkType === "internal") {
    labelKey = "detail.buttonTargetInternalLabel";
    hintKey = "detail.buttonTargetInternalHint";
  } else if (linkType === "external") {
    labelKey = "detail.buttonTargetExternalLabel";
    hintKey = "detail.buttonTargetExternalHint";
  }

  elements.insertButtonLinkLabel.textContent = t(labelKey);
  elements.insertButtonLinkTarget.placeholder = t(hintKey);
}

function updateWebEmbedTargetField() {
  if (!elements.webEmbedLinkType || !elements.webEmbedTargetLabel || !elements.webEmbedTarget) {
    return;
  }
  const linkType = elements.webEmbedLinkType.value || "external";
  const isInternal = linkType === "internal";
  elements.webEmbedTargetLabel.textContent = t(
    isInternal ? "detail.webTargetInternalLabel" : "detail.webTargetExternalLabel"
  );
  elements.webEmbedTarget.placeholder = t(
    isInternal ? "detail.webTargetInternalHint" : "detail.webTargetExternalHint"
  );
  if (elements.webEmbedPickFile) {
    elements.webEmbedPickFile.hidden = !isInternal;
  }
}

function isExternalWebPreviewSource(value) {
  const source = String(value || "").trim();
  return /^(https?:|blob:|data:|about:|mailto:|tel:|\/\/|#)/i.test(source);
}

function normalizeWebEmbedTarget(linkType, rawTarget) {
  const value = String(rawTarget || "").trim();
  if (!value) return "";
  if (linkType === "external") {
    if (/^(https?:)?\/\//i.test(value)) return value;
    if (/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(value)) return value;
    return `https://${value}`;
  }
  return value
    .replace(/\\/g, "/")
    .replace(/^\.\/+/, "")
    .replace(/\/{2,}/g, "/");
}

function isValidInternalWebEmbedTarget(value) {
  const source = String(value || "").trim();
  if (!source) return false;
  return /\.html?(?:$|[?#])/i.test(source);
}

function createWebPreviewWrapperNode(source, linkType = "external") {
  const wrapper = document.createElement("div");
  wrapper.className = "image-wrapper web-preview-wrapper align-left";
  wrapper.contentEditable = "false";
  wrapper.draggable = true;
  const editorWidth = elements.detailEditor?.clientWidth || 0;
  const maxWidth = editorWidth > 0 ? Math.max(220, editorWidth - 24) : 480;
  const baseWidth = Math.min(480, maxWidth);
  const baseHeight = Math.round(baseWidth * (300 / 480));
  wrapper.style.width = `${baseWidth}px`;
  wrapper.style.height = `${baseHeight}px`;
  wrapper.style.overflow = "hidden";
  wrapper.dataset.lockRatio = "true";
  wrapper.dataset.cropped = "false";
  wrapper.dataset.ratio = (baseHeight / baseWidth).toFixed(4);
  wrapper.dataset.webPreviewSrc = source;
  wrapper.dataset.webPreviewType = linkType;

  const placeholder = document.createElement("div");
  placeholder.className = "web-preview-placeholder";

  const note = document.createElement("p");
  note.className = "web-preview-placeholder-note";
  note.textContent = t("detail.webPlaceholderHint");
  placeholder.appendChild(note);

  wrapper.appendChild(placeholder);
  return wrapper;
}

async function pickInternalWebEmbedFile() {
  if (!elements.webEmbedLinkType || !elements.webEmbedTarget) return;
  if ((elements.webEmbedLinkType.value || "external") !== "internal") return;
  if (!state.rootHandle) {
    setStatus(t("status.error").replace("{message}", t("detail.webPickNeedFolder")), "error");
    return;
  }
  if (typeof window.showOpenFilePicker !== "function") {
    setStatus(t("status.error").replace("{message}", t("detail.webPickUnsupported")), "error");
    return;
  }
  try {
    const [fileHandle] = await window.showOpenFilePicker({
      multiple: false,
      startIn: state.rootHandle,
      types: [
        {
          description: "HTML",
          accept: {
            "text/html": [".html", ".htm"]
          }
        }
      ]
    });
    if (!(fileHandle && fileHandle.kind === "file")) return;
    const resolved = await state.rootHandle.resolve(fileHandle);
    if (!Array.isArray(resolved) || !resolved.length) {
      setStatus(t("status.error").replace("{message}", t("detail.webPickOutside")), "error");
      return;
    }
    const nextPath = resolved.join("/");
    if (!isValidInternalWebEmbedTarget(nextPath)) {
      setStatus(t("status.error").replace("{message}", t("detail.webTargetInvalid")), "error");
      return;
    }
    elements.webEmbedTarget.value = nextPath;
    elements.webEmbedTarget.focus();
    elements.webEmbedTarget.select();
  } catch (error) {
    if (error && error.name === "AbortError") return;
    setStatus(t("status.error").replace("{message}", error?.message || t("detail.webPickUnsupported")), "error");
  }
}

function positionWebEmbedPopover() {
  if (!elements.webEmbedPopover || elements.webEmbedPopover.hidden || !state.webEmbedTrigger) return;
  const popover = elements.webEmbedPopover;
  const triggerRect = state.webEmbedTrigger.getBoundingClientRect();

  popover.style.left = "12px";
  popover.style.top = "12px";

  const popRect = popover.getBoundingClientRect();
  const maxLeft = Math.max(12, window.innerWidth - popRect.width - 12);
  const nextLeft = Math.min(Math.max(12, triggerRect.left), maxLeft);

  let nextTop = triggerRect.bottom + 8;
  if (nextTop + popRect.height > window.innerHeight - 12) {
    nextTop = triggerRect.top - popRect.height - 8;
  }
  if (nextTop < 12) {
    nextTop = 12;
  }

  popover.style.left = `${nextLeft}px`;
  popover.style.top = `${nextTop}px`;
}

function hideWebEmbedPopover() {
  if (!elements.webEmbedPopover) return;
  elements.webEmbedPopover.hidden = true;
  state.webEmbedContext = "";
  state.webEmbedTrigger = null;
}

function openWebEmbedPopover(context, triggerButton) {
  if (!elements.webEmbedPopover || !triggerButton) return;
  if (context === "detail" && state.detailImportedMode) {
    setStatus(t("status.importedDetailReadonly"), "error");
    return;
  }
  if (context === "about" && state.aboutImportedMode) {
    setStatus(t("status.importedAboutReadonly"), "error");
    return;
  }
  saveSelectionForContext(context);
  hideTablePopover();
  hideAboutTablePopover();
  hidePersonalizeTablePopover();
  hideLineRangePopover();
  hideColumnsPopover();
  hideInsertButtonPopover();
  hideWebEmbedPopover();

  state.webEmbedContext = context;
  state.webEmbedTrigger = triggerButton;

  if (elements.webEmbedLinkType) {
    elements.webEmbedLinkType.value = "external";
  }
  if (elements.webEmbedTarget) {
    elements.webEmbedTarget.value = "";
  }
  updateWebEmbedTargetField();
  elements.webEmbedPopover.hidden = false;
  positionWebEmbedPopover();
  if (elements.webEmbedTarget) {
    elements.webEmbedTarget.focus();
    elements.webEmbedTarget.select();
  }
}

function applyWebEmbedFromPopover() {
  const context = state.webEmbedContext;
  if (!context || !elements.webEmbedLinkType || !elements.webEmbedTarget) return;
  const linkType = elements.webEmbedLinkType.value || "external";
  const rawTarget = String(elements.webEmbedTarget.value || "").trim();
  if (!rawTarget) {
    setStatus(t("status.error").replace("{message}", t("detail.webTargetRequired")), "error");
    elements.webEmbedTarget.focus();
    return;
  }
  const source = normalizeWebEmbedTarget(linkType, rawTarget);
  if (!source) {
    setStatus(t("status.error").replace("{message}", t("detail.webTargetRequired")), "error");
    elements.webEmbedTarget.focus();
    return;
  }
  if (linkType === "internal" && !isValidInternalWebEmbedTarget(source)) {
    setStatus(t("status.error").replace("{message}", t("detail.webTargetInvalid")), "error");
    elements.webEmbedTarget.focus();
    return;
  }

  const wrapper = createWebPreviewWrapperNode(source, linkType);
  if (context === "detail") {
    insertNodeAtCursor(wrapper);
    imageResizeObserver.observe(wrapper);
    showImageControls(wrapper);
    saveSelectionRange();
    persistDetailDraftFromEditor();
  } else if (context === "about") {
    insertAboutNodeAtCursor(wrapper);
    persistAboutDraftFromEditor();
  } else if (context === "personalize") {
    insertPersonalizeNodeAtCursor(wrapper);
    persistPersonalizationDraftFromEditor();
  }
  queueLineNumberRefresh();
  hideWebEmbedPopover();
}

function openInsertButtonPopover(context, triggerButton, options = null) {
  if (!elements.insertButtonPopover || !triggerButton) return;
  if (context === "detail" && state.detailImportedMode) {
    setStatus(t("status.importedDetailReadonly"), "error");
    return;
  }
  if (context === "about" && state.aboutImportedMode) {
    setStatus(t("status.importedAboutReadonly"), "error");
    return;
  }
  if (context === "detail") {
    saveSelectionRange();
  } else if (context === "about") {
    saveAboutSelectionRange();
  } else if (context === "personalize") {
    savePersonalizeSelectionRange();
  }

  hideTablePopover();
  hideAboutTablePopover();
  hidePersonalizeTablePopover();
  hideColumnsPopover();
  hideWebEmbedPopover();

  state.insertButtonContext = context;
  state.insertButtonTrigger = triggerButton;
  state.insertButtonEditNode = options?.editNode instanceof HTMLAnchorElement ? options.editNode : null;
  if (options?.initialConfig) {
    fillInsertButtonPopoverFields(options.initialConfig);
  } else {
    elements.insertButtonText.value = t("detail.buttonDefaultText");
    elements.insertButtonLinkType.value = "anchor";
    elements.insertButtonLinkTarget.value = String(getSelectionLineNumber(context));
    elements.insertButtonHasBorder.checked = true;
    elements.insertButtonBold.checked = false;
    elements.insertButtonRadius.value = "12";
    elements.insertButtonWidth.value = "";
    elements.insertButtonHeight.value = "";
    elements.insertButtonBorderColor.value = "#1d1c1a";
    elements.insertButtonFillColor.value = "#ffffff";
    elements.insertButtonTextColor.value = "#1d1c1a";
  }

  updateInsertButtonTargetField();

  elements.insertButtonPopover.hidden = false;
  positionInsertButtonPopover();
  elements.insertButtonText.focus();
  elements.insertButtonText.select();
}

function positionInsertButtonPopover() {
  if (!elements.insertButtonPopover || elements.insertButtonPopover.hidden || !state.insertButtonTrigger) return;

  const popover = elements.insertButtonPopover;
  const triggerRect = state.insertButtonTrigger.getBoundingClientRect();

  popover.style.left = "12px";
  popover.style.top = "12px";

  const popRect = popover.getBoundingClientRect();
  const maxLeft = Math.max(12, window.innerWidth - popRect.width - 12);
  const nextLeft = Math.min(Math.max(12, triggerRect.left), maxLeft);

  let nextTop = triggerRect.bottom + 8;
  if (nextTop + popRect.height > window.innerHeight - 12) {
    nextTop = triggerRect.top - popRect.height - 8;
  }
  if (nextTop < 12) {
    nextTop = 12;
  }

  popover.style.left = `${nextLeft}px`;
  popover.style.top = `${nextTop}px`;
}

function hideInsertButtonPopover() {
  if (!elements.insertButtonPopover) return;
  elements.insertButtonPopover.hidden = true;
  state.insertButtonContext = "";
  state.insertButtonTrigger = null;
  state.insertButtonEditNode = null;
}

function parseDimensionPx(value, { allowZero = false } = {}) {
  const numeric = Number.parseFloat(String(value ?? "").trim());
  if (!Number.isFinite(numeric)) return null;
  if (allowZero) {
    if (numeric < 0) return null;
  } else if (numeric <= 0) {
    return null;
  }
  return Math.round(numeric);
}

function parseLineNumberFromButtonAnchorTarget(rawTarget) {
  const normalized = String(rawTarget || "").replace(/^#+/, "").trim();
  if (!normalized) return null;
  const directMatch = normalized.match(/^\d+$/);
  if (directMatch) {
    const line = Number.parseInt(directMatch[0], 10);
    return Number.isFinite(line) && line >= 1 ? line : null;
  }
  const prefixedMatch = normalized.match(/^(?:line|footer-line)-(\d+)$/i);
  if (!prefixedMatch) return null;
  const line = Number.parseInt(prefixedMatch[1], 10);
  return Number.isFinite(line) && line >= 1 ? line : null;
}

function createDynamicButtonAnchorId(doc) {
  const ownerDocument = doc instanceof Document ? doc : document;
  for (let index = 0; index < 20; index += 1) {
    const id = `jump-anchor-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
    if (!ownerDocument.getElementById(id)) {
      return id;
    }
  }
  return `jump-anchor-${Date.now().toString(36)}-${Math.floor(Math.random() * 1e9).toString(36)}`;
}

function getDynamicAnchorIdFromTextLineNeighbor(node) {
  if (!(node instanceof Text)) return "";
  let sibling = node.previousSibling;
  while (sibling) {
    if (sibling instanceof Text) {
      if (String(sibling.textContent || "").trim()) {
        return "";
      }
      sibling = sibling.previousSibling;
      continue;
    }
    if (
      sibling instanceof HTMLElement
      && sibling.dataset.lineJumpAnchorMarker === "true"
    ) {
      return String(sibling.id || "").trim();
    }
    return "";
  }
  return "";
}

function ensureDynamicButtonAnchorForLine(context, lineNumber) {
  const { editor } = getEditorAndGutterByContext(context);
  if (!(editor instanceof HTMLElement)) return "";

  const lineEntries = getLineEntriesForEditor(context, editor);
  if (!lineEntries.length) return "";

  const lineIndex = Math.max(0, Math.min(lineEntries.length - 1, Number(lineNumber) - 1));
  const lineNode = lineEntries[lineIndex]?.anchorNode;
  if (!(lineNode instanceof Node)) return "";

  if (lineNode instanceof HTMLElement) {
    const existingId = String(lineNode.id || "").trim();
    if (existingId && !/^(line|footer-line)-\d+$/i.test(existingId)) {
      return existingId;
    }
    const managedId = String(lineNode.dataset.lineJumpAnchorId || "").trim();
    if (managedId && lineNode.id === managedId) {
      return managedId;
    }
    const nextId = createDynamicButtonAnchorId(lineNode.ownerDocument || document);
    lineNode.id = nextId;
    lineNode.dataset.lineJumpAnchorId = nextId;
    return nextId;
  }

  if (lineNode instanceof Text) {
    const existingId = getDynamicAnchorIdFromTextLineNeighbor(lineNode);
    if (existingId) return existingId;
    const parent = lineNode.parentNode;
    if (!parent) return "";
    const marker = document.createElement("span");
    const nextId = createDynamicButtonAnchorId(lineNode.ownerDocument || document);
    marker.id = nextId;
    marker.dataset.lineJumpAnchorMarker = "true";
    marker.setAttribute("aria-hidden", "true");
    parent.insertBefore(marker, lineNode);
    return nextId;
  }

  return "";
}

function normalizeButtonHref(linkType, rawTarget, context = "") {
  const value = String(rawTarget || "").trim();
  if (!value) return "";

  if (linkType === "anchor") {
    const normalizedAnchor = value.replace(/^#+/, "").trim();
    const prefix = context === "personalize" ? "footer-line-" : "line-";
    const digit = normalizedAnchor.match(/^\d+$/);
    if (digit) {
      return `#${prefix}${digit[0]}`;
    }
    const anchor = normalizedAnchor;
    if (!anchor) return "";
    if (/^(line|footer-line)-\d+$/i.test(anchor)) {
      return `#${anchor.toLowerCase()}`;
    }
    return `#${anchor}`;
  }

  if (linkType === "external") {
    if (/^(https?:)?\/\//i.test(value)) return value;
    if (/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(value)) return value;
    return `https://${value}`;
  }

  return value;
}

function resolveInsertButtonHref(linkType, rawTarget, context = "") {
  if (linkType !== "anchor") {
    return normalizeButtonHref(linkType, rawTarget, context);
  }
  const lineNumber = parseLineNumberFromButtonAnchorTarget(rawTarget);
  if (lineNumber !== null) {
    const anchorId = ensureDynamicButtonAnchorForLine(context, lineNumber);
    if (anchorId) {
      return `#${anchorId}`;
    }
  }
  return normalizeButtonHref(linkType, rawTarget, context);
}

function isExternalHref(href) {
  return /^(https?:)?\/\//i.test(String(href || ""));
}

function parsePxFromInlineStyleValue(value) {
  const raw = String(value || "").trim();
  if (!raw) return null;
  const match = raw.match(/^(-?\d+(?:\.\d+)?)px$/i);
  if (!match) return null;
  const numeric = Number.parseFloat(match[1]);
  return Number.isFinite(numeric) ? Math.round(numeric) : null;
}

function inferInsertButtonLinkTypeFromHref(href) {
  const value = String(href || "").trim();
  if (!value || value.startsWith("#")) return "anchor";
  if (isExternalHref(value) || /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(value)) return "external";
  return "internal";
}

function inferInsertButtonTargetFromHref(href, context = "") {
  const value = String(href || "").trim();
  if (!value) return "";
  if (!value.startsWith("#")) return value;
  const anchor = value.replace(/^#+/, "").trim();
  const lineNo = parseLineNumberFromButtonAnchorTarget(anchor);
  if (lineNo !== null) return String(lineNo);
  const expectedPrefix = context === "personalize" ? "footer-line-" : "line-";
  if (anchor.toLowerCase().startsWith(expectedPrefix)) {
    return anchor.slice(expectedPrefix.length);
  }
  return anchor;
}

function parseInlineButtonConfigFromNode(node, context = "") {
  if (!(node instanceof HTMLAnchorElement) || !node.classList.contains("detail-inline-button")) return null;
  const href = String(node.getAttribute("href") || "").trim();
  const linkType = String(node.dataset.buttonLinkType || "").trim() || inferInsertButtonLinkTypeFromHref(href);
  const targetRaw = String(node.dataset.buttonTarget || "").trim() || inferInsertButtonTargetFromHref(href, context);

  const fontWeightRaw = String(node.style.fontWeight || "").trim().toLowerCase();
  const fontWeightNumber = Number.parseInt(fontWeightRaw, 10);
  const boldFallback = Number.isFinite(fontWeightNumber)
    ? fontWeightNumber >= 600
    : (fontWeightRaw === "bold" || fontWeightRaw === "bolder");
  const borderStyle = String(node.style.border || "").trim().toLowerCase();

  return {
    text: String(node.textContent || "").trim() || t("detail.buttonDefaultText"),
    linkType,
    targetRaw,
    hasBorder: node.dataset.buttonHasBorder
      ? node.dataset.buttonHasBorder === "1"
      : borderStyle !== "none",
    bold: node.dataset.buttonBold
      ? node.dataset.buttonBold === "1"
      : boldFallback,
    radius: Number.parseInt(node.dataset.buttonRadius || "", 10)
      || parsePxFromInlineStyleValue(node.style.borderRadius)
      || 12,
    width: Number.parseInt(node.dataset.buttonWidth || "", 10)
      || parsePxFromInlineStyleValue(node.style.width)
      || null,
    height: Number.parseInt(node.dataset.buttonHeight || "", 10)
      || parsePxFromInlineStyleValue(node.style.height)
      || null,
    borderColor: String(node.dataset.buttonBorderColor || node.style.borderColor || "#1d1c1a"),
    fillColor: String(node.dataset.buttonFillColor || node.style.background || "#ffffff"),
    textColor: String(node.dataset.buttonTextColor || node.style.color || "#1d1c1a")
  };
}

function fillInsertButtonPopoverFields(config) {
  if (!config) return;
  if (elements.insertButtonText) {
    elements.insertButtonText.value = String(config.text || t("detail.buttonDefaultText"));
  }
  if (elements.insertButtonLinkType) {
    elements.insertButtonLinkType.value = String(config.linkType || "anchor");
  }
  if (elements.insertButtonLinkTarget) {
    elements.insertButtonLinkTarget.value = String(config.targetRaw || "");
  }
  if (elements.insertButtonHasBorder) {
    elements.insertButtonHasBorder.checked = Boolean(config.hasBorder);
  }
  if (elements.insertButtonBold) {
    elements.insertButtonBold.checked = Boolean(config.bold);
  }
  if (elements.insertButtonRadius) {
    elements.insertButtonRadius.value = String(Number.isFinite(config.radius) ? config.radius : 12);
  }
  if (elements.insertButtonWidth) {
    elements.insertButtonWidth.value = Number.isFinite(config.width) ? String(config.width) : "";
  }
  if (elements.insertButtonHeight) {
    elements.insertButtonHeight.value = Number.isFinite(config.height) ? String(config.height) : "";
  }
  if (elements.insertButtonBorderColor) {
    elements.insertButtonBorderColor.value = String(config.borderColor || "#1d1c1a");
  }
  if (elements.insertButtonFillColor) {
    elements.insertButtonFillColor.value = String(config.fillColor || "#ffffff");
  }
  if (elements.insertButtonTextColor) {
    elements.insertButtonTextColor.value = String(config.textColor || "#1d1c1a");
  }
}

function openInlineButtonEditor(context, buttonNode) {
  if (!(buttonNode instanceof HTMLAnchorElement)) return;
  const config = parseInlineButtonConfigFromNode(buttonNode, context);
  if (!config) return;
  openInsertButtonPopover(context, buttonNode, {
    editNode: buttonNode,
    initialConfig: config
  });
}

function createInlineButtonLink(config) {
  const link = document.createElement("a");
  link.className = "detail-inline-link detail-inline-button";
  link.setAttribute("role", "button");
  link.href = config.href;
  link.textContent = config.text;
  link.dataset.buttonLinkType = String(config.linkType || "");
  link.dataset.buttonTarget = String(config.targetRaw || "");

  link.style.display = "inline-flex";
  link.style.alignItems = "center";
  link.style.justifyContent = "center";
  link.style.boxSizing = "border-box";
  link.style.textDecoration = "none";
  link.style.verticalAlign = "middle";
  link.style.cursor = "pointer";
  link.style.fontWeight = config.bold ? "700" : "500";
  link.style.color = config.textColor;
  link.style.background = config.fillColor;
  link.style.borderRadius = `${config.radius}px`;
  link.dataset.buttonHasBorder = config.hasBorder ? "1" : "0";
  link.dataset.buttonBold = config.bold ? "1" : "0";
  link.dataset.buttonRadius = String(config.radius);
  link.dataset.buttonBorderColor = String(config.borderColor);
  link.dataset.buttonFillColor = String(config.fillColor);
  link.dataset.buttonTextColor = String(config.textColor);

  if (config.hasBorder) {
    link.style.border = `1px solid ${config.borderColor}`;
  } else {
    link.style.border = "none";
  }

  if (config.width) {
    link.style.width = `${config.width}px`;
    link.dataset.buttonWidth = String(config.width);
  } else {
    delete link.dataset.buttonWidth;
  }
  if (config.height) {
    link.style.height = `${config.height}px`;
    link.dataset.buttonHeight = String(config.height);
  } else {
    delete link.dataset.buttonHeight;
  }

  if (config.width && config.height) {
    link.style.padding = "0";
  } else if (config.height) {
    link.style.padding = "0 16px";
  } else if (config.width) {
    link.style.padding = "8px 0";
  } else {
    link.style.padding = "8px 16px";
  }

  if (isExternalHref(config.href)) {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  }

  return link;
}

function insertPersonalizeNodeAtCursor(node) {
  if (!elements.personalizeFooterEditor) return;
  const selection = window.getSelection();
  let range = null;

  if (selection && selection.rangeCount > 0) {
    const current = selection.getRangeAt(0);
    if (elements.personalizeFooterEditor.contains(current.startContainer)) {
      range = current;
    }
  }

  if (!range && state.personalizeSavedRange && elements.personalizeFooterEditor.contains(state.personalizeSavedRange.startContainer)) {
    range = state.personalizeSavedRange;
  }
  const columnsRange = getColumnsEditInsertionRange("personalize", elements.personalizeFooterEditor);
  if (columnsRange) {
    const activeBlock = state.columnsEditBlock;
    if (!(activeBlock instanceof HTMLElement) || !isRangeInsideNode(range, activeBlock)) {
      range = columnsRange;
    }
  }

  if (!range) {
    elements.personalizeFooterEditor.appendChild(node);
    elements.personalizeFooterEditor.focus();
    savePersonalizeSelectionRange();
    queueLineNumberRefresh();
    return;
  }

  range.deleteContents();
  range.insertNode(node);
  if (!elements.personalizeFooterEditor.contains(node)) {
    elements.personalizeFooterEditor.appendChild(node);
  }
  range.setStartAfter(node);
  range.setEndAfter(node);
  if (selection) {
    selection.removeAllRanges();
    selection.addRange(range);
  }
  elements.personalizeFooterEditor.focus();
  savePersonalizeSelectionRange();
  queueLineNumberRefresh();
}

function applyInsertButtonFromPopover() {
  if (!state.insertButtonContext || !elements.insertButtonLinkType || !elements.insertButtonLinkTarget) {
    return;
  }

  const text = String(elements.insertButtonText?.value || "").trim() || t("detail.buttonDefaultText");
  const linkType = elements.insertButtonLinkType.value || "anchor";
  const targetRaw = String(elements.insertButtonLinkTarget.value || "").trim();
  if (!targetRaw) {
    setStatus(t("status.error").replace("{message}", t("detail.buttonTargetRequired")), "error");
    elements.insertButtonLinkTarget.focus();
    return;
  }

  const href = resolveInsertButtonHref(linkType, targetRaw, state.insertButtonContext);
  if (!href) {
    setStatus(t("status.error").replace("{message}", t("detail.buttonTargetRequired")), "error");
    elements.insertButtonLinkTarget.focus();
    return;
  }

  const buttonNode = createInlineButtonLink({
    text,
    linkType,
    targetRaw,
    href,
    hasBorder: Boolean(elements.insertButtonHasBorder?.checked),
    bold: Boolean(elements.insertButtonBold?.checked),
    radius: parseDimensionPx(elements.insertButtonRadius?.value, { allowZero: true }) ?? 12,
    width: parseDimensionPx(elements.insertButtonWidth?.value),
    height: parseDimensionPx(elements.insertButtonHeight?.value),
    borderColor: elements.insertButtonBorderColor?.value || "#1d1c1a",
    fillColor: elements.insertButtonFillColor?.value || "#ffffff",
    textColor: elements.insertButtonTextColor?.value || "#1d1c1a"
  });

  const editNode = state.insertButtonEditNode;
  const editor = getEditorElementForContext(state.insertButtonContext);
  const canReplace = editNode instanceof HTMLAnchorElement
    && editNode.isConnected
    && editor instanceof HTMLElement
    && editor.contains(editNode);

  if (canReplace) {
    editNode.replaceWith(buttonNode);
    if (state.insertButtonContext === "detail") {
      saveSelectionRange();
      persistDetailDraftFromEditor();
    } else if (state.insertButtonContext === "about") {
      saveAboutSelectionRange();
      persistAboutDraftFromEditor();
    } else if (state.insertButtonContext === "personalize") {
      savePersonalizeSelectionRange();
      persistPersonalizationDraftFromEditor();
    }
  } else if (state.insertButtonContext === "detail") {
    insertNodeAtCursor(buttonNode);
    saveSelectionRange();
    persistDetailDraftFromEditor();
  } else if (state.insertButtonContext === "about") {
    insertAboutNodeAtCursor(buttonNode);
    persistAboutDraftFromEditor();
  } else if (state.insertButtonContext === "personalize") {
    insertPersonalizeNodeAtCursor(buttonNode);
    persistPersonalizationDraftFromEditor();
  }

  queueLineNumberRefresh();
  hideInsertButtonPopover();
}

function normalizeAboutI18n(raw) {
  const defaults = cloneDefaultAboutI18n();
  return {
    zh: normalizeAboutLocale(raw?.zh, defaults.zh),
    en: normalizeAboutLocale(raw?.en, defaults.en)
  };
}

function normalizeAboutLocale(raw, fallback) {
  const locale = raw && typeof raw === "object" ? raw : {};
  const pageRaw = locale.page && typeof locale.page === "object" ? locale.page : {};
  const navRaw = locale.nav && typeof locale.nav === "object" ? locale.nav : {};
  const aboutRaw = locale.about && typeof locale.about === "object" ? locale.about : {};
  const pageTitle = String(pageRaw.title || "").trim();
  const navProjects = String(navRaw.projects || "").trim();
  const navAbout = String(navRaw.about || "").trim();
  const navAriaLabel = String(navRaw.ariaLabel || "").trim();
  const navLangAria = String(navRaw.langToggleAria || "").trim();
  const notice = String(aboutRaw.notice || "").trim();
  const contentHtml = aboutRaw.content_html ?? aboutRaw.contentHtml;

  return {
    ...locale,
    page: {
      ...fallback.page,
      ...pageRaw,
      title: pageTitle || fallback.page.title
    },
    nav: {
      ...fallback.nav,
      ...navRaw,
      projects: navProjects || fallback.nav.projects,
      about: navAbout || fallback.nav.about,
      ariaLabel: navAriaLabel || fallback.nav.ariaLabel,
      langToggleAria: navLangAria || fallback.nav.langToggleAria
    },
    about: {
      ...fallback.about,
      ...aboutRaw,
      notice: notice || fallback.about.notice,
      content_html: typeof contentHtml === "string" ? contentHtml : ""
    }
  };
}

function aboutNoticeToEditorHtml(notice) {
  const text = String(notice || "").trim();
  if (!text) return "";
  return escapeHtml(text).replace(/\r?\n/g, "<br>");
}

function parseJsonLikeObject(text) {
  const source = String(text || "").trim();
  if (!source) return null;
  try {
    return JSON.parse(source);
  } catch (error) {
    // Keep fallback for legacy object-literal syntax.
  }
  try {
    const getter = new Function(`return (${source});`);
    return getter();
  } catch (error) {
    return null;
  }
}

function parseAboutI18nScript(text) {
  const source = String(text || "").trim();
  if (!source) {
    return cloneDefaultAboutI18n();
  }

  let candidate = source;
  const markerIndex = source.indexOf("window.ABOUT_I18N");
  if (markerIndex !== -1) {
    const equalsIndex = source.indexOf("=", markerIndex);
    if (equalsIndex !== -1) {
      candidate = source.slice(equalsIndex + 1).trim();
      if (candidate.endsWith(";")) {
        candidate = candidate.slice(0, -1).trim();
      }
    }
  }

  const parsed = parseJsonLikeObject(candidate) || parseJsonLikeObject(source);
  if (!parsed || typeof parsed !== "object") {
    return cloneDefaultAboutI18n();
  }
  return normalizeAboutI18n(parsed);
}

function normalizeAboutContentForSave(contentHtml) {
  const container = document.createElement("div");
  container.innerHTML = String(contentHtml || "");

  container.querySelectorAll("img").forEach((img) => {
    const rawSrc = (img.getAttribute("src") || "").split("?")[0];
    if (!rawSrc) return;
    const siteSrc = img.dataset.siteSrc;
    if (siteSrc) {
      img.setAttribute("src", siteSrc);
      img.removeAttribute("data-site-src");
      return;
    }
    const relativeBase = "../contents/aboutme/";
    if (rawSrc.startsWith(relativeBase)) {
      img.setAttribute("src", rawSrc.replace(relativeBase, ""));
    }
  });

  container.querySelectorAll("a[href]").forEach((link) => {
    const rawHref = (link.getAttribute("href") || "").split("?")[0];
    if (!rawHref) return;
    const siteHref = link.dataset.siteHref;
    if (siteHref) {
      link.setAttribute("href", siteHref);
      link.removeAttribute("data-site-href");
      return;
    }
    const relativeBase = "../contents/aboutme/";
    if (rawHref.startsWith(relativeBase)) {
      link.setAttribute("href", rawHref.replace(relativeBase, ""));
    }
  });

  return container.innerHTML;
}

function parseAboutContentPage(text) {
  const source = String(text || "").trim();
  if (!source) {
    return {
      zh: "",
      en: "",
      bgRanges: {
        zh: [],
        en: []
      }
    };
  }
  const parser = new DOMParser();
  const doc = parser.parseFromString(source, "text/html");
  const zhTemplate = doc.getElementById("about-content-zh-template");
  const enTemplate = doc.getElementById("about-content-en-template");
  const zhRangesTemplate = doc.getElementById("about-bg-ranges-zh-template");
  const enRangesTemplate = doc.getElementById("about-bg-ranges-en-template");
  const zhRanges = parseLineRangesTemplateText(zhRangesTemplate ? zhRangesTemplate.innerHTML : "");
  const enRanges = parseLineRangesTemplateText(enRangesTemplate ? enRangesTemplate.innerHTML : "");

  if (zhTemplate || enTemplate) {
    return {
      zh: normalizeDetailLikeHtml(zhTemplate ? zhTemplate.innerHTML : ""),
      en: normalizeDetailLikeHtml(enTemplate ? enTemplate.innerHTML : ""),
      bgRanges: {
        zh: zhRanges,
        en: enRanges
      }
    };
  }

  const shared = doc.getElementById("about-content");
  const fallback = normalizeDetailLikeHtml(shared ? shared.innerHTML : "");
  return {
    zh: fallback,
    en: fallback,
    bgRanges: {
      zh: zhRanges,
      en: enRanges
    }
  };
}

function isImportedAboutPageHtml(text) {
  return /data-template-shell=["']about["']/i.test(String(text || ""));
}

function buildAboutContentPage(contentByLang) {
  const zhHtml = normalizeAboutContentForSave(contentByLang?.zh || "");
  const enHtml = normalizeAboutContentForSave(contentByLang?.en || "");
  const rangeByLang = normalizeLineRangesByLang(contentByLang?.bgRanges);
  const safeRangesZh = serializeLineRangesTemplateText(rangeByLang.zh);
  const safeRangesEn = serializeLineRangesTemplateText(rangeByLang.en);
  const titleZh = DEFAULT_ABOUT_I18N.zh.page.title;
  const titleEn = DEFAULT_ABOUT_I18N.en.page.title;
  const noticeZh = DEFAULT_ABOUT_I18N.zh.about.notice;
  const noticeEn = DEFAULT_ABOUT_I18N.en.about.notice;

  return `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(titleZh)}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../../core/styles.css">
  <link rel="stylesheet" href="../../aboutme/about.css">
</head>
<body data-page="about" data-title-zh="${escapeHtmlAttribute(titleZh)}" data-title-en="${escapeHtmlAttribute(titleEn)}" data-notice-zh="${escapeHtmlAttribute(noticeZh)}" data-notice-en="${escapeHtmlAttribute(noticeEn)}">
  <header class="site-header">
    <div class="container header-inner">
      <div class="brand">
        <span class="brand-label" id="site-brand-text">${escapeHtml(DEFAULT_PERSONALIZATION.navBrandTextZh)}</span>
      </div>
      <nav class="top-nav" data-i18n-attr="aria-label:nav.ariaLabel">
        <a class="nav-btn" href="../../index.html" data-i18n="nav.projects">项目</a>
        <a class="nav-btn is-active" aria-current="page" href="index.html" data-i18n="nav.about">关于我</a>
        <button class="lang-toggle" type="button" data-lang-toggle data-i18n-attr="aria-label:nav.langToggleAria">EN</button>
      </nav>
    </div>
  </header>

  <main class="container about-main">
    <section class="about-status">
      <article id="about-content" class="about-content" hidden></article>
      <p id="about-notice" class="about-notice" data-i18n="about.notice">${escapeHtml(noticeZh)}</p>
    </section>
    <section id="site-footer-copy" class="site-footer-copy" hidden></section>
  </main>

  <template id="about-content-zh-template">${zhHtml}</template>
  <template id="about-content-en-template">${enHtml}</template>
  <template id="about-bg-ranges-zh-template">${safeRangesZh}</template>
  <template id="about-bg-ranges-en-template">${safeRangesEn}</template>
  <script src="../../aboutme/about.js" defer></script>
</body>
</html>
`;
}

function getAboutEditorInitialHtml(localeData, fallbackNotice) {
  const content = normalizeDetailLikeHtml(localeData?.about?.content_html || "");
  if (content) return content;
  const notice = String(localeData?.about?.notice || fallbackNotice || "").trim();
  return aboutNoticeToEditorHtml(notice);
}

function refreshAboutDraftFromState() {
  state.aboutDraftHtml.zh = getAboutEditorInitialHtml(state.aboutI18n.zh, DEFAULT_ABOUT_I18N.zh.about.notice);
  state.aboutDraftHtml.en = getAboutEditorInitialHtml(state.aboutI18n.en, DEFAULT_ABOUT_I18N.en.about.notice);
}

function renderAboutLanguageSwitch() {
  if (elements.aboutLangZh) {
    elements.aboutLangZh.classList.toggle("is-active", state.aboutLang === "zh");
  }
  if (elements.aboutLangEn) {
    elements.aboutLangEn.classList.toggle("is-active", state.aboutLang === "en");
  }
  if (elements.aboutLangCopy) {
    elements.aboutLangCopy.textContent = getCopyButtonLabel(getOtherLang(state.aboutLang));
  }
}

function renderAboutEditor() {
  renderAboutLanguageSwitch();
  if (elements.saveAbout) {
    elements.saveAbout.disabled = state.aboutImportedMode;
  }
  if (!elements.aboutEditor) return;
  if (state.aboutImportedMode) {
    elements.aboutEditor.innerHTML = `<p class="detail-note-text">${escapeHtml(t("status.importedAboutReadonly"))}</p>`;
    refreshEditorTables(elements.aboutEditor);
    state.aboutSavedRange = null;
    hideInsertButtonPopover();
    hideColumnsPopover();
    hideWebEmbedPopover();
    exitColumnsEditMode();
    syncAboutFontSizeControl();
    queueLineNumberRefresh();
    return;
  }
  const html = getDraftHtmlByLangWithFallback(state.aboutDraftHtml, state.aboutLang);
  elements.aboutEditor.innerHTML = html;
  refreshEditorTables(elements.aboutEditor);
  state.aboutSavedRange = null;
  hideInsertButtonPopover();
  hideColumnsPopover();
  hideWebEmbedPopover();
  exitColumnsEditMode();
  syncAboutFontSizeControl();
  queueLineNumberRefresh();
}

function setAboutEditLang(lang) {
  const nextLang = lang === "en" ? "en" : "zh";
  if (state.aboutLang === nextLang) return;
  persistAboutDraftFromEditor();
  state.aboutLang = nextLang;
  renderAboutEditor();
}

function pasteAboutFromOtherLang() {
  const targetLang = state.aboutLang === "en" ? "en" : "zh";
  const sourceLang = getOtherLang(targetLang);
  const sourceHtml = state.aboutDraftHtml[sourceLang] || "";
  if (!sourceHtml) return;
  state.aboutDraftHtml[targetLang] = sourceHtml;
  state.aboutBgRanges[targetLang] = normalizeLineRanges(state.aboutBgRanges[sourceLang] || []);
  renderAboutEditor();
}

function persistAboutDraftFromEditor() {
  if (!elements.aboutEditor) return;
  if (state.activeTab !== "about") return;
  if (state.aboutImportedMode) return;
  state.aboutDraftHtml[state.aboutLang] = normalizeDetailLikeHtml(elements.aboutEditor.innerHTML);
}

async function loadAboutData() {
  const contentText = await readTextFile(aboutContentPathSegments());
  state.aboutImportedMode = isImportedAboutPageHtml(contentText || "");
  if (contentText) {
    const parsed = parseAboutContentPage(contentText);
    state.aboutDraftHtml.zh = parsed.zh;
    state.aboutDraftHtml.en = parsed.en;
    state.aboutBgRanges.zh = normalizeLineRanges(parsed.bgRanges?.zh || []);
    state.aboutBgRanges.en = normalizeLineRanges(parsed.bgRanges?.en || []);
    renderAboutEditor();
    return;
  }

  const legacyAboutContentPath = legacyAboutContentPathSegments();
  const legacyContentText = legacyAboutContentPath
    ? await readTextFile(legacyAboutContentPath)
    : null;
  if (legacyContentText) {
    state.aboutImportedMode = isImportedAboutPageHtml(legacyContentText);
    const parsed = parseAboutContentPage(legacyContentText);
    state.aboutDraftHtml.zh = parsed.zh;
    state.aboutDraftHtml.en = parsed.en;
    state.aboutBgRanges.zh = normalizeLineRanges(parsed.bgRanges?.zh || []);
    state.aboutBgRanges.en = normalizeLineRanges(parsed.bgRanges?.en || []);
    renderAboutEditor();
    return;
  }

  let legacyDataText = await readTextFile(contentPathSegments("aboutme", ABOUT_DATA_FILE));
  const legacyAboutDataPath = legacyAboutDataPathSegments();
  if (!legacyDataText && legacyAboutDataPath) {
    legacyDataText = await readTextFile(legacyAboutDataPath);
  }
  state.aboutI18n = parseAboutI18nScript(legacyDataText);
  state.aboutImportedMode = false;
  refreshAboutDraftFromState();
  state.aboutBgRanges.zh = [];
  state.aboutBgRanges.en = [];
  renderAboutEditor();
}

async function saveAboutData() {
  if (!state.rootHandle) {
    setStatus(t("status.needFolder"), "error");
    return;
  }
  if (state.aboutImportedMode) {
    setStatus(t("status.importedAboutReadonly"), "error");
    return;
  }
  try {
    persistAboutDraftFromEditor();
    const normalized = {
      zh: normalizeDetailLikeHtml(state.aboutDraftHtml.zh || ""),
      en: normalizeDetailLikeHtml(state.aboutDraftHtml.en || ""),
      bgRanges: {
        zh: normalizeLineRanges(state.aboutBgRanges.zh || []),
        en: normalizeLineRanges(state.aboutBgRanges.en || [])
      }
    };
    await getDirectoryHandle(state.rootHandle, aboutAssetsPathSegments(), true);
    await writeFileByPath(aboutContentPathSegments(), buildAboutContentPage(normalized));
    await removeFileByPath(contentPathSegments("aboutme", ABOUT_DATA_FILE));
    const legacyAboutDataPath = legacyAboutDataPathSegments();
    if (legacyAboutDataPath) {
      await removeFileByPath(legacyAboutDataPath);
    }
    state.aboutDraftHtml.zh = normalized.zh;
    state.aboutDraftHtml.en = normalized.en;
    state.aboutBgRanges.zh = normalized.bgRanges.zh;
    state.aboutBgRanges.en = normalized.bgRanges.en;
    renderAboutEditor();
    setStatus(t("aboutEditor.saved"));
  } catch (error) {
    setStatus(t("status.error").replace("{message}", error.message), "error");
  }
}

function saveAboutSelectionRange() {
  if (!elements.aboutEditor) return;
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) return;
  const range = selection.getRangeAt(0);
  if (elements.aboutEditor.contains(range.startContainer)) {
    state.aboutSavedRange = range.cloneRange();
  }
}

function restoreAboutSelectionRange() {
  if (!elements.aboutEditor || !state.aboutSavedRange) {
    return false;
  }
  if (!elements.aboutEditor.contains(state.aboutSavedRange.startContainer)) {
    return false;
  }
  const selection = window.getSelection();
  if (!selection) return false;
  selection.removeAllRanges();
  selection.addRange(state.aboutSavedRange);
  return true;
}

function getUsableAboutRange(selection) {
  if (!elements.aboutEditor) return null;
  if (selection && selection.rangeCount > 0) {
    const range = selection.getRangeAt(0);
    if (elements.aboutEditor.contains(range.startContainer)) {
      return range;
    }
  }
  if (state.aboutSavedRange && elements.aboutEditor.contains(state.aboutSavedRange.startContainer)) {
    return state.aboutSavedRange;
  }
  return null;
}

function runAboutExecCommand(command, value = null) {
  if (!elements.aboutEditor) return false;
  elements.aboutEditor.focus();
  restoreAboutSelectionRange();
  const result = document.execCommand(command, false, value);
  saveAboutSelectionRange();
  syncAboutFontSizeControl();
  queueLineNumberRefresh();
  return result;
}

function applyAboutColorCommand(command, color) {
  if (!color) return;
  runAboutExecCommand("styleWithCSS", true);
  const ok = runAboutExecCommand(command, color);
  if (!ok && command === "hiliteColor") {
    runAboutExecCommand("backColor", color);
  }
}

function getCurrentAboutEditorBlock() {
  if (!elements.aboutEditor) return null;
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) return null;
  let node = selection.getRangeAt(0).startContainer;
  if (node.nodeType === Node.TEXT_NODE) {
    node = node.parentElement;
  }
  if (!(node instanceof Element)) return null;
  if (!elements.aboutEditor.contains(node)) return null;
  return node.closest("p, h1, h2, h3, h4, h5, h6, li, blockquote, pre, td, th, div");
}

function applyAboutFormatBlock(tag) {
  const rangeSnapshot = getUsableRangeForContext("about")?.cloneRange() || null;
  runFormatBlockForContext("about", tag);
  resetInlineTypographyStylesForContext("about", rangeSnapshot);
  return rangeSnapshot;
}

function applyAboutParagraphFormat() {
  const rangeSnapshot = applyAboutFormatBlock("p");
  updateParagraphNoteClassForContext("about", false, rangeSnapshot);
}

function applyAboutNoteFormat() {
  const rangeSnapshot = applyAboutFormatBlock("p");
  updateParagraphNoteClassForContext("about", true, rangeSnapshot);
}

function ensureAboutParagraphAfterEnter() {
  if (!elements.aboutEditor) return;
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) return;
  const range = selection.getRangeAt(0);
  if (!elements.aboutEditor.contains(range.startContainer)) return;

  let node = range.startContainer;
  if (node.nodeType === Node.TEXT_NODE) {
    node = node.parentElement;
  }
  if (!(node instanceof Element)) return;
  if (node.closest("li, td, th, .detail-columns-cell")) return;
  if (node.closest("p")) {
    saveAboutSelectionRange();
    queueLineNumberRefresh();
    return;
  }
  document.execCommand("formatBlock", false, "p");
  saveAboutSelectionRange();
  queueLineNumberRefresh();
}

function insertAboutNodeAtCursor(node) {
  if (!elements.aboutEditor) return;
  const selection = window.getSelection();
  let range = getUsableAboutRange(selection);
  const columnsRange = getColumnsEditInsertionRange("about", elements.aboutEditor);
  if (columnsRange) {
    const activeBlock = state.columnsEditBlock;
    if (!(activeBlock instanceof HTMLElement) || !isRangeInsideNode(range, activeBlock)) {
      range = columnsRange;
    }
  }
  if (!range) {
    elements.aboutEditor.appendChild(node);
    node.scrollIntoView({ block: "nearest" });
    saveAboutSelectionRange();
    queueLineNumberRefresh();
    return;
  }
  range.deleteContents();
  range.insertNode(node);
  if (!elements.aboutEditor.contains(node)) {
    elements.aboutEditor.appendChild(node);
  }
  range.setStartAfter(node);
  range.setEndAfter(node);
  selection.removeAllRanges();
  selection.addRange(range);
  elements.aboutEditor.focus();
  node.scrollIntoView({ block: "nearest" });
  saveAboutSelectionRange();
  queueLineNumberRefresh();
}

function insertAboutCodeBlock() {
  const selection = window.getSelection();
  const selectedText = selection ? selection.toString() : "";
  const pre = document.createElement("pre");
  pre.className = "detail-code-block";
  const code = document.createElement("code");
  code.textContent = selectedText || "code";
  pre.appendChild(code);
  insertAboutNodeAtCursor(pre);
}

function insertAboutLinkAtCursor() {
  const href = prompt(t("detail.linkPromptUrl"), "https://");
  if (href === null) return;
  const url = href.trim();
  if (!url) return;
  const labelInput = prompt(t("detail.linkPromptText"), url);
  if (labelInput === null) return;
  const label = labelInput.trim() || url;
  const link = document.createElement("a");
  link.className = "detail-inline-link";
  link.href = url;
  link.textContent = label;
  if (/^(https?:)?\/\//i.test(url)) {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  }
  insertAboutNodeAtCursor(link);
}

function openAboutTablePopover(anchorElement) {
  if (!elements.aboutTablePopover || !elements.aboutTableSize) return;
  hideInsertButtonPopover();
  hideColumnsPopover();
  hideLineRangePopover();
  hideWebEmbedPopover();
  saveAboutSelectionRange();
  elements.aboutTablePopover.hidden = false;
  elements.aboutTableSize.value = "3x3";
  positionAboutTablePopover(anchorElement);
  elements.aboutTableSize.focus();
  elements.aboutTableSize.select();
}

function positionAboutTablePopover(anchorElement) {
  if (!anchorElement || !elements.aboutTablePopover || elements.aboutTablePopover.hidden) return;
  if (!elements.panelAbout) return;
  const panelRect = elements.panelAbout.getBoundingClientRect();
  const anchorRect = anchorElement.getBoundingClientRect();
  const popover = elements.aboutTablePopover;
  popover.style.top = `${anchorRect.bottom - panelRect.top + 6}px`;
  popover.style.left = `${anchorRect.left - panelRect.left}px`;

  const popRect = popover.getBoundingClientRect();
  const maxLeft = Math.max(12, panelRect.width - popRect.width - 12);
  const nextLeft = Math.min(Math.max(12, anchorRect.left - panelRect.left), maxLeft);
  popover.style.left = `${nextLeft}px`;
}

function hideAboutTablePopover() {
  if (!elements.aboutTablePopover) return;
  elements.aboutTablePopover.hidden = true;
}

function insertAboutTableFromPopover() {
  if (!elements.aboutTableSize) return;
  const parsed = parseTableSizeInput(elements.aboutTableSize.value);
  if (!parsed) {
    setStatus(t("status.error").replace("{message}", t("detail.tableSizeInvalid")), "error");
    elements.aboutTableSize.focus();
    elements.aboutTableSize.select();
    return;
  }
  hideAboutTablePopover();
  insertAboutTableAtCursor(parsed.rows, parsed.cols);
  persistAboutDraftFromEditor();
}

function insertAboutTableAtCursor(rows, cols) {
  if (!Number.isInteger(rows) || !Number.isInteger(cols) || rows < 1 || cols < 1) return;
  insertAboutNodeAtCursor(createTableNode(rows, cols));
  refreshEditorTables(elements.aboutEditor);
}

function showEditorLocalOpenModal(message = "", tone = "") {
  if (!elements.localModal) return;
  elements.localModal.hidden = false;
  setEditorLocalStatus(message, tone);
}

function hideEditorLocalOpenModal() {
  if (!elements.localModal) return;
  elements.localModal.hidden = true;
  setEditorLocalStatus("");
}

function setEditorLocalStatus(message, tone = "") {
  if (!elements.localStatus) return;
  elements.localStatus.textContent = message || "";
  if (tone) {
    elements.localStatus.dataset.tone = tone;
  } else {
    delete elements.localStatus.dataset.tone;
  }
}

async function openProjectFolder() {
  try {
    const handle = await window.showDirectoryPicker();
    if (!await ensurePermission(handle, true)) {
      setStatus(t("status.error").replace("{message}", "Permission denied"), "error");
      setEditorLocalStatus("没有拿到文件夹授权，请再试一次。", "error");
      return false;
    }
    await connectToHandle(handle);
    await storeHandle(handle);
    return true;
  } catch (error) {
    if (error && error.name === "AbortError") {
      setEditorLocalStatus("你取消了选择。");
      return false;
    }
    setStatus(t("status.error").replace("{message}", error.message), "error");
    setEditorLocalStatus(`选择失败：${error.message}`, "error");
    return false;
  }
}

async function openImportFolderPicker() {
  try {
    const handle = await window.showDirectoryPicker();
    if (!await ensurePermission(handle, true, "read")) {
      setStatus(t("status.error").replace("{message}", "Permission denied"), "error");
      return null;
    }
    return handle;
  } catch (error) {
    if (error && error.name === "AbortError") {
      setStatus(t("status.importCanceled"));
      return null;
    }
    setStatus(t("status.error").replace("{message}", error.message), "error");
    return null;
  }
}

async function findImportEntryFileName(folderHandle) {
  const preferred = ["index.html", "index.htm"];
  for (const name of preferred) {
    if (await fileExistsOnDirectory(folderHandle, name)) {
      return name;
    }
  }

  const htmlFiles = [];
  for await (const [name, handle] of folderHandle.entries()) {
    if (handle.kind !== "file") continue;
    if (!/\.html?$/i.test(name)) continue;
    htmlFiles.push(name);
  }
  if (!htmlFiles.length) return "";
  htmlFiles.sort((a, b) => a.localeCompare(b));
  return htmlFiles[0];
}

async function fileExistsOnDirectory(directoryHandle, fileName) {
  try {
    await directoryHandle.getFileHandle(fileName, { create: false });
    return true;
  } catch (error) {
    return false;
  }
}

async function readTextFileFromDirectory(directoryHandle, fileName) {
  try {
    const fileHandle = await directoryHandle.getFileHandle(fileName, { create: false });
    const file = await fileHandle.getFile();
    return await file.text();
  } catch (error) {
    return "";
  }
}

function buildImportedDetailPage(sourceHtml, project) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(String(sourceHtml || ""), "text/html");
  const html = doc.documentElement || doc.createElement("html");
  let head = doc.head;
  let body = doc.body;

  if (!head) {
    head = doc.createElement("head");
    html.insertBefore(head, html.firstChild);
  }
  if (!body) {
    body = doc.createElement("body");
    html.appendChild(body);
  }

  if (!head.querySelector("meta[charset]")) {
    const charset = doc.createElement("meta");
    charset.setAttribute("charset", "utf-8");
    head.insertBefore(charset, head.firstChild);
  }
  if (!head.querySelector("meta[name='viewport']")) {
    const viewport = doc.createElement("meta");
    viewport.setAttribute("name", "viewport");
    viewport.setAttribute("content", "width=device-width, initial-scale=1");
    head.appendChild(viewport);
  }

  body.setAttribute("data-page", "projects");
  body.setAttribute("data-project-id", String(project?.id || ""));
  body.setAttribute("data-title-zh", String(project?.name_zh || ""));
  body.setAttribute("data-title-en", String(project?.name_en || ""));
  body.setAttribute("data-type", String(project?.type || ""));
  body.setAttribute("data-date", String(project?.date || ""));

  body.querySelectorAll("script[data-template-shell='detail']").forEach((node) => node.remove());
  const shellScript = doc.createElement("script");
  shellScript.src = "../../../detailSet/imported-detail.js";
  shellScript.defer = true;
  shellScript.setAttribute("data-template-shell", "detail");
  body.appendChild(shellScript);

  const serialized = `<!doctype html>\n${html.outerHTML}`;
  return serialized;
}

function buildImportedAboutPage(sourceHtml) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(String(sourceHtml || ""), "text/html");
  const html = doc.documentElement || doc.createElement("html");
  let head = doc.head;
  let body = doc.body;

  if (!head) {
    head = doc.createElement("head");
    html.insertBefore(head, html.firstChild);
  }
  if (!body) {
    body = doc.createElement("body");
    html.appendChild(body);
  }

  if (!head.querySelector("meta[charset]")) {
    const charset = doc.createElement("meta");
    charset.setAttribute("charset", "utf-8");
    head.insertBefore(charset, head.firstChild);
  }
  if (!head.querySelector("meta[name='viewport']")) {
    const viewport = doc.createElement("meta");
    viewport.setAttribute("name", "viewport");
    viewport.setAttribute("content", "width=device-width, initial-scale=1");
    head.appendChild(viewport);
  }

  body.setAttribute("data-page", "about");
  body.querySelectorAll("script[data-template-shell='about']").forEach((node) => node.remove());
  const shellScript = doc.createElement("script");
  shellScript.src = "../../aboutme/imported-about.js";
  shellScript.defer = true;
  shellScript.setAttribute("data-template-shell", "about");
  body.appendChild(shellScript);

  const serialized = `<!doctype html>\n${html.outerHTML}`;
  return serialized;
}

async function copyExternalDirectoryToPath(sourceDirectoryHandle, targetSegments) {
  await getDirectoryHandle(state.rootHandle, targetSegments, true);
  for await (const [name, handle] of sourceDirectoryHandle.entries()) {
    if (handle.kind === "directory") {
      await copyExternalDirectoryToPath(handle, [...targetSegments, name]);
      continue;
    }
    if (handle.kind !== "file") continue;
    const file = await handle.getFile();
    const target = await getFileHandle(state.rootHandle, [...targetSegments, name], true);
    await writeFile(target, file);
  }
}

async function isHandleSameAsPath(sourceHandle, pathSegments) {
  try {
    const targetHandle = pathSegments.length
      ? await getDirectoryHandle(state.rootHandle, pathSegments, false)
      : state.rootHandle;
    return await sourceHandle.isSameEntry(targetHandle);
  } catch (error) {
    return false;
  }
}

async function hasImportSourceConflict(sourceHandle, mode, project) {
  if (!sourceHandle || !state.rootHandle) return false;
  if (await sourceHandle.isSameEntry(state.rootHandle)) {
    return true;
  }
  if (state.contentPrefix.length && await isHandleSameAsPath(sourceHandle, state.contentPrefix)) {
    return true;
  }
  if (mode === "detail" && project) {
    if (await isHandleSameAsPath(sourceHandle, getDetailFolder(project))) {
      return true;
    }
    if (await isHandleSameAsPath(sourceHandle, [...getDetailFolder(project), "assets"])) {
      return true;
    }
  }
  if (mode === "about") {
    if (await isHandleSameAsPath(sourceHandle, contentPathSegments("aboutme"))) {
      return true;
    }
    if (await isHandleSameAsPath(sourceHandle, aboutAssetsPathSegments())) {
      return true;
    }
  }
  return false;
}

async function importDetailFromFolder() {
  if (!state.rootHandle) {
    setStatus(t("status.needFolder"), "error");
    return;
  }
  if (!state.currentDetailProject) {
    setStatus(t("status.needDetailProject"), "error");
    return;
  }
  if (state.detailImportedMode) {
    setStatus(t("status.importedDetailReadonly"), "error");
    return;
  }
  const sourceHandle = await openImportFolderPicker();
  if (!sourceHandle) return;

  try {
    const project = state.currentDetailProject;
    if (await hasImportSourceConflict(sourceHandle, "detail", project)) {
      setStatus(t("status.importSourceConflict"), "error");
      return;
    }
    const entryFileName = await findImportEntryFileName(sourceHandle);
    if (!entryFileName) {
      setStatus(t("status.importMissingHtml"), "error");
      return;
    }
    const sourceHtml = await readTextFileFromDirectory(sourceHandle, entryFileName);
    if (!sourceHtml) {
      setStatus(t("status.importMissingHtml"), "error");
      return;
    }
    await ensureProjectDetailStructure(project);
    await copyExternalDirectoryToPath(sourceHandle, getDetailFolder(project));
    const importedPage = buildImportedDetailPage(sourceHtml, project);
    await writeFileByPath([...getDetailFolder(project), "index.html"], importedPage);
    state.detailImportedMode = true;
    state.detailDraftHtml.zh = "";
    state.detailDraftHtml.en = "";
    renderDetailEditor();
    setStatus(t("status.importDetailDone"));
  } catch (error) {
    setStatus(t("status.error").replace("{message}", error.message), "error");
  }
}

async function importAboutFromFolder() {
  if (!state.rootHandle) {
    setStatus(t("status.needFolder"), "error");
    return;
  }
  const sourceHandle = await openImportFolderPicker();
  if (!sourceHandle) return;

  try {
    if (await hasImportSourceConflict(sourceHandle, "about")) {
      setStatus(t("status.importSourceConflict"), "error");
      return;
    }
    const entryFileName = await findImportEntryFileName(sourceHandle);
    if (!entryFileName) {
      setStatus(t("status.importMissingHtml"), "error");
      return;
    }
    const sourceHtml = await readTextFileFromDirectory(sourceHandle, entryFileName);
    if (!sourceHtml) {
      setStatus(t("status.importMissingHtml"), "error");
      return;
    }
    await getDirectoryHandle(state.rootHandle, contentPathSegments("aboutme"), true);
    await copyExternalDirectoryToPath(sourceHandle, contentPathSegments("aboutme"));
    const importedPage = buildImportedAboutPage(sourceHtml);
    await writeFileByPath(aboutContentPathSegments(), importedPage);
    await removeFileByPath(contentPathSegments("aboutme", ABOUT_DATA_FILE));
    const legacyAboutDataPath = legacyAboutDataPathSegments();
    if (legacyAboutDataPath) {
      await removeFileByPath(legacyAboutDataPath);
    }
    state.aboutImportedMode = true;
    state.aboutDraftHtml.zh = "";
    state.aboutDraftHtml.en = "";
    renderAboutEditor();
    setStatus(t("status.importAboutDone"));
  } catch (error) {
    setStatus(t("status.error").replace("{message}", error.message), "error");
  }
}

async function ensurePermission(handle, request, mode = "readwrite") {
  const options = { mode };
  if ((await handle.queryPermission(options)) === "granted") {
    return true;
  }
  if (!request) return false;
  return (await handle.requestPermission(options)) === "granted";
}

async function autoConnect() {
  if (!supportsFileSystem()) return false;
  const handle = await readStoredHandle();
  if (!handle) return false;
  const allowed = await ensurePermission(handle, false);
  if (!allowed) return false;
  await connectToHandle(handle);
  return true;
}

async function detectContentPrefix(handle) {
  if (await directoryExistsOnHandle(handle, ["contents"])) {
    return ["contents"];
  }
  const hasDirectAssets = await directoryExistsOnHandle(handle, ["assets"]);
  const hasDirectDetails = await directoryExistsOnHandle(handle, ["project_details"]);
  if (hasDirectAssets && hasDirectDetails) {
    return [];
  }
  return ["contents"];
}

async function connectToHandle(handle) {
  state.rootHandle = handle;
  state.contentPrefix = await detectContentPrefix(handle);
  await loadTypes();
  await loadProjects();
  await loadPersonalization();
  await loadAboutData();
  const migrated = await migrateStorageLayout();
  const normalized = normalizeTypeSchema();
  if (migrated || normalized.projectsChanged) {
    await writeProjectsCsv();
  }
  if (normalized.typesChanged) {
    await writeTypeCsv();
  }
  state.typeMode = "edit";
  state.typesDraft = state.types.map((type) => ({ ...type }));
  state.typeDeletedIds = new Set();
  renderTypeList();
  renderTypeSelect();
  renderProjectList();
  renderPersonalizationForm();
  renderAboutEditor();
  elements.newProject.disabled = false;
  elements.typeAddMode.disabled = false;
  if (elements.typeSave) {
    elements.typeSave.disabled = false;
  }
  if (elements.typeCancel) {
    elements.typeCancel.disabled = false;
  }
  if (elements.savePersonalization) {
    elements.savePersonalization.disabled = false;
  }
  if (elements.saveAbout) {
    elements.saveAbout.disabled = false;
  }
  updateProjectDeleteButton();
  setStatus("");
  updateFolderButton(true);
  hideEditorLocalOpenModal();
}

async function ensureProjectDetailStructure(project) {
  if (!project || !project.id) return;
  await getDirectoryHandle(state.rootHandle, getDetailFolder(project), true);
  await getDirectoryHandle(state.rootHandle, [...getDetailFolder(project), "assets"], true);
}

async function loadTypes() {
  const text = await readTextFile(contentPathSegments("assets", "project_types.csv"));
  state.types = text ? parseTypeCsv(text) : [];
  if (state.typeMode !== "view") {
    state.typesDraft = state.types.map((type) => ({ ...type }));
  }
}

function parseTypeCsv(text) {
  const rows = String(text || "").trim().split(/\r?\n/).filter(Boolean);
  if (!rows.length) return [];
  const headers = splitCsvLine(rows.shift());

  return rows.map((line) => {
    const values = splitCsvLine(line);
    const record = {};
    headers.forEach((header, index) => {
      record[header] = (values[index] || "").trim();
    });
    return {
      id: record.id,
      name_zh: record.name_zh || "",
      name_en: record.name_en || "",
      hidden: toBooleanFlag(record.hidden)
    };
  }).filter((type) => type.id);
}

function toTypeCsv(records) {
  const header = "id,name_zh,name_en,hidden";
  if (!records.length) return `${header}\n`;
  const rows = records.map((record) => [
    record.id,
    record.name_zh || "",
    record.name_en || "",
    toCsvFlag(record.hidden)
  ].map(escapeCsv).join(","));
  return [header, ...rows].join("\n") + "\n";
}

function renderTypeList() {
  if (!elements.typeList) return;
  elements.typeList.innerHTML = "";
  const activeTypes = getActiveTypesForView();

  activeTypes.forEach((type) => {
    const editable = true;
    const row = document.createElement("tr");
    row.classList.toggle("type-row-hidden", Boolean(type.hidden));
    row.dataset.typeId = type.id;
    row.innerHTML = `
      <td>${escapeHtml(type.id)}</td>
      <td>${editable
        ? `<input type="text" data-field="name_zh" value="${escapeHtmlAttribute(type.name_zh)}" placeholder="${escapeHtmlAttribute(t("typeManager.newZh"))}">`
        : `<span class="type-text">${escapeHtml(type.name_zh || "")}</span>`}
      </td>
      <td>${editable
        ? `<input type="text" data-field="name_en" value="${escapeHtmlAttribute(type.name_en)}" placeholder="${escapeHtmlAttribute(t("typeManager.newEn"))}">`
        : `<span class="type-text">${escapeHtml(type.name_en || "")}</span>`}
      </td>
      <td></td>
    `;

    const actionsCell = row.querySelector("td:last-child");
    const actions = document.createElement("div");
    actions.className = "type-row-actions";

    const hideBtn = document.createElement("button");
    hideBtn.type = "button";
    hideBtn.textContent = type.hidden ? t("typeManager.show") : t("typeManager.hide");
    hideBtn.addEventListener("click", () => toggleTypeHiddenInDraft(type.id));

    const removeBtn = document.createElement("button");
    removeBtn.type = "button";
    removeBtn.className = "is-danger";
    removeBtn.textContent = t("typeManager.remove");
    removeBtn.addEventListener("click", () => removeTypeInDraft(type.id));

    actions.appendChild(hideBtn);
    actions.appendChild(removeBtn);
    actionsCell.appendChild(actions);

    elements.typeList.appendChild(row);
  });

  updateTypePanelState();
}

function renderTypeSelect() {
  if (!elements.type) return;
  const current = elements.type.value;
  elements.type.innerHTML = "";

  const emptyOption = document.createElement("option");
  emptyOption.value = "";
  emptyOption.textContent = t("form.typeEmpty");
  elements.type.appendChild(emptyOption);

  state.types.forEach((type) => {
    const option = document.createElement("option");
    option.value = type.id;
    option.textContent = state.lang === "zh"
      ? (type.name_zh || type.name_en || type.id)
      : (type.name_en || type.name_zh || type.id);
    elements.type.appendChild(option);
  });

  elements.type.value = current || "";
}

function updateTypePanelState() {
  const connected = Boolean(state.rootHandle);
  if (elements.typePanelFooter) {
    elements.typePanelFooter.hidden = !connected;
  }
  if (elements.typeAddMode) {
    elements.typeAddMode.disabled = !connected;
  }
  if (elements.typeSave) {
    elements.typeSave.disabled = !connected;
  }
  if (elements.typeCancel) {
    elements.typeCancel.disabled = !connected;
  }
}

function enterTypeCreateMode() {
  if (!state.rootHandle) {
    setStatus(t("status.needFolder"), "error");
    return;
  }
  state.typeMode = "edit";
  syncTypeDraftFromInputs();

  const id = generateNextTypeId(state.typesDraft);
  state.typesDraft.push({ id, name_zh: "", name_en: "", hidden: false, isNew: true });
  renderTypeList();

  const row = elements.typeList.querySelector(`tr[data-type-id="${id}"]`);
  const input = row ? row.querySelector('input[data-field="name_zh"]') : null;
  if (input) {
    input.focus();
  }
}

function cancelTypeEdit() {
  state.typeMode = "edit";
  state.typesDraft = state.types.map((type) => ({ ...type }));
  state.typeDeletedIds = new Set();
  renderTypeList();
  renderProjectList();
}

function toggleTypeHiddenInDraft(id) {
  if (state.typeMode === "view") return;
  syncTypeDraftFromInputs();
  const target = state.typesDraft.find((item) => item.id === id);
  if (!target) return;
  target.hidden = !Boolean(target.hidden);
  renderTypeList();
  renderProjectList();
}

function removeTypeInDraft(id) {
  if (state.typeMode === "view") return;
  syncTypeDraftFromInputs();
  const confirmed = window.confirm(t("typeManager.deleteConfirm"));
  if (!confirmed) return;
  const index = state.typesDraft.findIndex((item) => item.id === id);
  if (index === -1) return;
  state.typesDraft.splice(index, 1);
  state.typeDeletedIds.add(id);
  renderTypeList();
  renderProjectList();
}

function syncTypeDraftFromInputs() {
  if (state.typeMode === "view") return;
  state.typesDraft = state.typesDraft.map((type) => {
    const row = elements.typeList.querySelector(`tr[data-type-id="${type.id}"]`);
    if (!row) return type;
    const zhInput = row.querySelector('input[data-field="name_zh"]');
    const enInput = row.querySelector('input[data-field="name_en"]');
    if (!zhInput || !enInput) return type;
    return {
      ...type,
      name_zh: zhInput.value.trim(),
      name_en: enInput.value.trim(),
      hidden: Boolean(type.hidden)
    };
  });
}

async function saveTypeDraft() {
  if (!state.rootHandle) return;
  syncTypeDraftFromInputs();

  const invalid = state.typesDraft.some((type) => !type.name_zh && !type.name_en);
  if (invalid) {
    setStatus(t("status.missingFields"), "error");
    return;
  }

  const finalTypes = state.typesDraft.map((type) => ({
    id: String(type.id || "").trim(),
    name_zh: String(type.name_zh || "").trim(),
    name_en: String(type.name_en || "").trim(),
    hidden: Boolean(type.hidden)
  })).filter((type) => type.id);

  const idSet = new Set();
  for (const type of finalTypes) {
    if (idSet.has(type.id)) {
      setStatus(t("status.error").replace("{message}", "Duplicate type id"), "error");
      return;
    }
    idSet.add(type.id);
  }

  const removedIds = new Set(state.typeDeletedIds);
  state.types.forEach((type) => {
    if (!idSet.has(type.id)) {
      removedIds.add(type.id);
    }
  });

  state.types = finalTypes;
  let projectChanged = false;
  const affectedProjects = [];
  const validIds = new Set(state.types.map((type) => type.id));
  state.projects.forEach((project) => {
    if (project.type && (!validIds.has(project.type) || removedIds.has(project.type))) {
      project.type = "";
      projectChanged = true;
      affectedProjects.push(project);
    }
  });

  await writeTypeCsv();
  if (projectChanged) {
    await writeProjectsCsv();
    for (const project of affectedProjects) {
      await ensureDetailHtml(project, null);
    }
  }

  state.typeMode = "edit";
  state.typesDraft = state.types.map((type) => ({ ...type }));
  state.typeDeletedIds = new Set();
  renderTypeList();
  renderTypeSelect();
  renderProjectList();
  setStatus(t("status.saved"));
}

function generateNextTypeId(types) {
  const taken = new Set(types.map((type) => String(type.id || "").toLowerCase()));
  let max = 0;
  types.forEach((type) => {
    const match = String(type.id || "").match(/^t(\d+)$/i);
    if (!match) return;
    const numeric = Number(match[1]);
    if (!Number.isNaN(numeric)) {
      max = Math.max(max, numeric);
    }
  });

  let next = max + 1;
  let candidate = `t${next}`;
  while (taken.has(candidate)) {
    next += 1;
    candidate = `t${next}`;
  }
  return candidate;
}

async function writeTypeCsv() {
  const csv = toTypeCsv(state.types);
  const handle = await getFileHandle(state.rootHandle, contentPathSegments("assets", "project_types.csv"), true);
  await writeFile(handle, csv);
}

function normalizeTypeSchema() {
  const normalized = [];
  const mapping = new Map();
  const used = new Set();
  let seq = 1;
  let typesChanged = false;

  state.types.forEach((type) => {
    const oldId = String(type.id || "").trim();
    let nextId = oldId.toLowerCase();
    const valid = /^t\d+$/i.test(oldId) && !used.has(nextId);

    if (!valid) {
      while (used.has(`t${seq}`)) {
        seq += 1;
      }
      nextId = `t${seq}`;
      seq += 1;
      typesChanged = true;
    } else {
      const numeric = Number(nextId.slice(1));
      if (!Number.isNaN(numeric)) {
        seq = Math.max(seq, numeric + 1);
      }
      if (nextId !== oldId) {
        typesChanged = true;
      }
    }

    used.add(nextId);
    if (oldId && oldId !== nextId) {
      mapping.set(oldId, nextId);
    }
    normalized.push({
      id: nextId,
      name_zh: type.name_zh || "",
      name_en: type.name_en || "",
      hidden: Boolean(type.hidden)
    });
  });

  state.types = normalized;
  const validIds = new Set(state.types.map((type) => type.id));
  let projectsChanged = false;

  state.projects.forEach((project) => {
    const originalType = String(project.type || "").trim();
    if (!originalType) return;
    if (mapping.has(originalType)) {
      project.type = mapping.get(originalType);
      projectsChanged = true;
      return;
    }
    if (!validIds.has(originalType)) {
      project.type = "";
      projectsChanged = true;
    }
  });

  return { typesChanged, projectsChanged };
}

function getTypeLabel(typeId) {
  const target = getActiveTypesForView().find((item) => item.id === typeId);
  if (!target) return "";
  return state.lang === "zh"
    ? (target.name_zh || target.name_en || "")
    : (target.name_en || target.name_zh || "");
}

async function loadProjects() {
  const text = await readTextFile(contentPathSegments("assets", "projects.csv"));
  const records = text ? parseCsv(text) : [];
  state.projects = records.map((record) => normalizeProjectRecord(record));
}

async function migrateStorageLayout() {
  let changed = false;
  for (const project of state.projects) {
    if (!project.id) continue;
    await ensureProjectDetailStructure(project);
    const detailChanged = await migrateLegacyDetail(project);
    const imageChanged = await migrateCoverImage(project);
    if (detailChanged || imageChanged) {
      changed = true;
    }
  }
  return changed;
}

async function migrateLegacyDetail(project) {
  const legacyFolder = getLegacyDetailFolder(project);
  if (!legacyFolder) return false;
  let changed = false;

  const newIndexPath = [...getDetailFolder(project), "index.html"];
  const legacyIndexPath = [...legacyFolder, "index.html"];
  const legacyTypeFolder = legacyFolder[2];
  const legacySinglePath = contentPathSegments("project_details", legacyTypeFolder, `${project.id}.html`);

  if (await fileExists(legacyIndexPath)) {
    const html = await readTextFile(legacyIndexPath);
    if (html) {
      const alreadyExists = await fileExists(newIndexPath);
      if (!alreadyExists) {
        await writeFileByPath(newIndexPath, html);
      }
      changed = true;
    }
  } else if (await fileExists(legacySinglePath)) {
    const html = await readTextFile(legacySinglePath);
    if (html) {
      await writeFileByPath(newIndexPath, html);
      await removeFileByPath(legacySinglePath);
      changed = true;
    }
  }

  const copied = await copyDirectoryFiles(
    [...legacyFolder, "assets"],
    [...getDetailFolder(project), "assets"]
  );
  changed = copied || changed;

  if (await directoryExists(legacyFolder)) {
    await removeDirectoryByPath(legacyFolder);
    changed = true;
  }

  return changed;
}

async function migrateCoverImage(project) {
  const imagePath = String(project.image || "").trim();
  if (!imagePath) return false;
  const targetPrefix = `contents/project_details/${project.id}/assets/`;
  if (imagePath.startsWith(targetPrefix)) {
    return false;
  }
  if (imagePath.startsWith("project_details/")) {
    project.image = `contents/${imagePath}`;
    return true;
  }

  await ensureProjectDetailStructure(project);
  let sourceFile = null;
  let ext = "png";

  if (imagePath.startsWith("assets/projects/")) {
    const fileName = imagePath.replace("assets/projects/", "");
    sourceFile = await readBinaryFile(contentPathSegments("assets", "projects", fileName));
    ext = getFileExtension(fileName);
  } else {
    const legacyFolder = getLegacyDetailFolder(project);
    if (legacyFolder) {
      const legacyPrefix = `${legacyFolder.join("/")}/assets/`;
      if (imagePath.startsWith(legacyPrefix)) {
        const fileName = imagePath.replace(`${legacyPrefix}`, "");
        sourceFile = await readBinaryFile([...legacyFolder, "assets", fileName]);
        ext = getFileExtension(fileName);
      }
    }
  }

  if (!sourceFile) return false;
  const filename = `cover.${ext}`;
  const handle = await getFileHandle(state.rootHandle, [...getDetailFolder(project), "assets", filename], true);
  await writeFile(handle, sourceFile);
  project.image = `${targetPrefix}${filename}`;
  return true;
}

function renderProjectList() {
  elements.projectList.innerHTML = "";
  renderRankOptions();
  const rows = getProjectsSortedForDisplay(state.projects);
  if (
    state.pendingNewProject &&
    state.pendingNewProject.id &&
    !state.projects.some((project) => project.id === state.pendingNewProject.id)
  ) {
    rows.push({
      id: state.pendingNewProject.id,
      name_zh: t("list.unsaved"),
      name_en: t("list.unsaved"),
      type: "",
      date: "",
      rank: "",
      _isPending: true
    });
  }

  elements.projectEmpty.style.display = rows.length ? "none" : "block";

  rows.forEach((project) => {
    const row = document.createElement("tr");
    row.className = "project-row";
    if (project._isPending) {
      row.classList.add("is-pending");
    } else if (project.hidden || isTypeHidden(project.type)) {
      row.classList.add("is-hidden");
    }
    row.tabIndex = 0;
    row.dataset.projectId = project.id;
    row.innerHTML = `
      <td>${project.id}</td>
      <td>${state.lang === "zh" ? project.name_zh : project.name_en}</td>
      <td>${getTypeLabel(project.type)}</td>
      <td class="project-rank-cell"></td>
      <td></td>
    `;
    const rankCell = row.querySelector(".project-rank-cell");
    if (rankCell && project._isPending) {
      rankCell.textContent = "—";
    }

    if (rankCell && !project._isPending) {
      const rankSelect = document.createElement("select");
      rankSelect.className = "project-rank-select";
      rankSelect.setAttribute("aria-label", t("form.rank"));

      const emptyOption = document.createElement("option");
      emptyOption.value = "";
      emptyOption.textContent = "—";
      rankSelect.appendChild(emptyOption);

      const maxRank = state.projects.length;
      for (let rank = 1; rank <= maxRank; rank += 1) {
        const option = document.createElement("option");
        option.value = String(rank);
        option.textContent = String(rank);
        rankSelect.appendChild(option);
      }

      const normalizedRank = normalizeProjectRank(project.rank);
      rankSelect.value = normalizedRank && Number.parseInt(normalizedRank, 10) <= maxRank
        ? normalizedRank
        : "";

      rankSelect.addEventListener("click", (event) => {
        event.stopPropagation();
      });
      rankSelect.addEventListener("keydown", (event) => {
        event.stopPropagation();
        if (event.key === "Enter") {
          event.preventDefault();
          rankSelect.blur();
        }
      });
      rankSelect.addEventListener("change", async () => {
        await saveProjectRankFromList(project.id, rankSelect.value, rankSelect);
      });
      rankCell.appendChild(rankSelect);
    }

    if (!project._isPending) {
      row.addEventListener("click", async (event) => {
        if (event.target.closest("button, input, select, textarea")) return;
        await openProjectEditor(project.id);
      });

      row.addEventListener("keydown", async (event) => {
        if (event.target.closest("button, input, select, textarea")) return;
        if (event.key !== "Enter" && event.key !== " ") return;
        event.preventDefault();
        await openProjectEditor(project.id);
      });
    }

    const actionsCell = row.querySelector("td:last-child");
    if (!project._isPending) {
      const actions = document.createElement("div");
      actions.className = "table-actions";

      const typeHidden = isTypeHidden(project.type);
      const selfHidden = Boolean(project.hidden);
      const effectiveHidden = typeHidden || selfHidden;
      const toggleBtn = document.createElement("button");
      toggleBtn.type = "button";
      toggleBtn.textContent = effectiveHidden ? t("actions.show") : t("actions.hide");
      if (typeHidden && !selfHidden) {
        toggleBtn.disabled = true;
      }
      toggleBtn.addEventListener("click", async () => {
        await toggleProjectHidden(project.id);
      });

      actions.appendChild(toggleBtn);
      actionsCell.appendChild(actions);
    }

    elements.projectList.appendChild(row);
  });
}

async function saveProjectRankFromList(projectId, rawValue, inputElement = null) {
  const project = state.projects.find((item) => item.id === projectId);
  if (!project) return;
  const raw = String(rawValue ?? "").trim();
  const parsed = raw ? parsePositiveInteger(raw) : null;
  const isRankFieldElement = inputElement instanceof HTMLInputElement || inputElement instanceof HTMLSelectElement;
  if (raw && !parsed) {
    if (isRankFieldElement) {
      inputElement.value = normalizeProjectRank(project.rank);
      inputElement.focus();
      if (inputElement instanceof HTMLInputElement) {
        inputElement.select();
      }
    }
    setStatus(t("status.invalidRank"), "error");
    return;
  }

  const nextRank = parsed ? String(parsed) : "";
  const previousRank = normalizeProjectRank(project.rank);
  if (nextRank === previousRank) {
    if (isRankFieldElement) {
      inputElement.value = nextRank;
    }
    return;
  }

  project.rank = nextRank;
  try {
    await writeProjectsCsv();
    if (state.currentId === project.id && elements.rank) {
      elements.rank.value = nextRank;
    }
    renderProjectList();
    setStatus(t("status.saved"));
  } catch (error) {
    project.rank = previousRank;
    if (isRankFieldElement) {
      inputElement.value = previousRank;
      inputElement.focus();
      if (inputElement instanceof HTMLInputElement) {
        inputElement.select();
      }
    }
    setStatus(t("status.error").replace("{message}", error.message), "error");
  }
}

async function openProjectEditor(id) {
  await loadProjectIntoForm(id);
  await openDetailEditor(id);
}

function startNewProject() {
  clearForm();
  setProjectFormMode(true);
  const nextId = generateNextId(state.projects);
  elements.idInput.value = nextId;
  state.pendingNewProject = { id: nextId };
  renderProjectList();
  scrollProjectRowIntoView(nextId);
  if (state.types.length && !elements.type.value) {
    elements.type.value = state.types[0].id;
  }
  state.currentId = null;
  updateProjectDeleteButton();
}

function parseTagsString(raw) {
  return String(raw || "")
    .split("|")
    .map((tag) => tag.trim())
    .filter(Boolean);
}

function setFormTags(tags) {
  const unique = [];
  const seen = new Set();
  (Array.isArray(tags) ? tags : []).forEach((tag) => {
    const text = String(tag || "").trim();
    if (!text) return;
    if (seen.has(text)) return;
    seen.add(text);
    unique.push(text);
  });
  state.formTags = unique;
  renderTagTabs();
}

function serializeFormTags() {
  return state.formTags.join("|");
}

function openTagInputChip(initialValue = "") {
  state.tagInputActive = true;
  state.tagInputDraft = String(initialValue || "");
  renderTagTabs();
  requestAnimationFrame(() => {
    if (!elements.tagsList) return;
    const input = elements.tagsList.querySelector(".tag-chip-editor-input");
    if (!(input instanceof HTMLInputElement)) return;
    input.focus();
    input.select();
  });
}

function commitTagInputChip() {
  const nextTag = String(state.tagInputDraft || "").trim();
  if (nextTag && !state.formTags.includes(nextTag)) {
    state.formTags = [...state.formTags, nextTag];
  }
  state.tagInputActive = false;
  state.tagInputDraft = "";
  renderTagTabs();
}

function closeTagInputChip() {
  state.tagInputActive = false;
  state.tagInputDraft = "";
  renderTagTabs();
}

function removeTag(tag) {
  const target = String(tag || "").trim();
  if (!target) return;
  setFormTags(state.formTags.filter((item) => item !== target));
}

function getCoverViewUrl(path) {
  const value = String(path || "").trim();
  if (!value) return "";
  if (/^(https?:|data:|blob:|\/)/i.test(value)) {
    return value;
  }
  if (value.startsWith("contents/") || value.startsWith("project_details/")) {
    return value;
  }
  return value;
}

function renderCoverStatus() {
  if (!elements.coverStatusText) return;
  const project = state.projects.find((item) => item.id === state.currentId);
  const coverPath = project ? String(project.image || "").trim() : "";
  const coverUrl = getCoverViewUrl(coverPath);
  const hasCover = Boolean(coverUrl);

  elements.coverStatusText.textContent = hasCover ? t("form.coverExists") : t("form.coverMissing");

  if (!elements.coverViewLink) return;
  if (hasCover) {
    elements.coverViewLink.hidden = false;
    elements.coverViewLink.textContent = t("form.coverView");
    elements.coverViewLink.href = coverUrl;
  } else {
    elements.coverViewLink.hidden = true;
    elements.coverViewLink.removeAttribute("href");
  }
}

function renderTagTabs() {
  if (!elements.tagsList) return;
  elements.tagsList.innerHTML = "";
  state.formTags.forEach((tag) => {
    const chip = document.createElement("span");
    chip.className = "tag-chip";

    const text = document.createElement("span");
    text.textContent = tag;
    chip.appendChild(text);

    const removeBtn = document.createElement("button");
    removeBtn.type = "button";
    removeBtn.className = "tag-chip-remove";
    removeBtn.textContent = "×";
    removeBtn.setAttribute("aria-label", t("form.tagRemoveAria").replace("{tag}", tag));
    removeBtn.addEventListener("click", () => removeTag(tag));
    chip.appendChild(removeBtn);

    elements.tagsList.appendChild(chip);
  });

  if (state.tagInputActive) {
    const inputChip = document.createElement("span");
    inputChip.className = "tag-chip tag-chip-input";

    const input = document.createElement("input");
    input.type = "text";
    input.className = "tag-chip-editor-input";
    input.value = state.tagInputDraft;
    input.placeholder = t("form.tagsHint");
    input.addEventListener("input", (event) => {
      state.tagInputDraft = String(event.target.value || "");
    });
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        commitTagInputChip();
        return;
      }
      if (event.key === "Escape") {
        event.preventDefault();
        closeTagInputChip();
      }
    });
    input.addEventListener("blur", () => {
      commitTagInputChip();
    });
    inputChip.appendChild(input);
    elements.tagsList.appendChild(inputChip);
    return;
  }

  const addChip = document.createElement("button");
  addChip.type = "button";
  addChip.className = "tag-chip tag-chip-add";
  addChip.textContent = t("form.tagAdd");
  addChip.addEventListener("click", () => {
    openTagInputChip();
  });
  elements.tagsList.appendChild(addChip);
}

function clearForm() {
  elements.form.reset();
  state.imageFile = null;
  state.currentId = null;
  state.pendingNewProject = null;
  state.tagInputActive = false;
  state.tagInputDraft = "";
  setFormTags([]);
  if (elements.imageFile) {
    elements.imageFile.value = "";
  }
  renderCoverStatus();
  updateProjectDeleteButton();
}

async function loadProjectIntoForm(id) {
  const project = state.projects.find((item) => item.id === id);
  if (!project) return;
  if (state.pendingNewProject) {
    state.pendingNewProject = null;
    renderProjectList();
  }
  setProjectFormMode(true);

  elements.idInput.value = project.id;
  elements.nameZh.value = project.name_zh;
  elements.nameEn.value = project.name_en;
  elements.type.value = project.type;
  elements.date.value = project.date;
  if (elements.rank) {
    elements.rank.value = normalizeProjectRank(project.rank);
  }
  state.tagInputActive = false;
  state.tagInputDraft = "";
  setFormTags(parseTagsString(project.tags || ""));
  state.imageFile = null;
  elements.imageFile.value = "";

  state.currentId = project.id;
  renderCoverStatus();
  updateProjectDeleteButton();
}

function parseDetailContentPage(html) {
  const source = String(html || "").trim();
  if (!source) {
    return {
      zh: "",
      en: "",
      navInitialTheme: "light",
      bgRanges: {
        zh: [],
        en: []
      }
    };
  }
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(source, "text/html");
    const navInitialTheme = normalizeNavInitialTheme(doc.body?.getAttribute("data-nav-initial-theme"));
    const zhTemplate = doc.getElementById("detail-content-zh-template");
    const enTemplate = doc.getElementById("detail-content-en-template");
    const zhRangesTemplate = doc.getElementById("detail-bg-ranges-zh-template");
    const enRangesTemplate = doc.getElementById("detail-bg-ranges-en-template");
    const zhRanges = parseLineRangesTemplateText(zhRangesTemplate ? zhRangesTemplate.innerHTML : "");
    const enRanges = parseLineRangesTemplateText(enRangesTemplate ? enRangesTemplate.innerHTML : "");
    if (zhTemplate || enTemplate) {
      return {
        zh: normalizeDetailLikeHtml(zhTemplate ? zhTemplate.innerHTML : ""),
        en: normalizeDetailLikeHtml(enTemplate ? enTemplate.innerHTML : ""),
        navInitialTheme,
        bgRanges: {
          zh: zhRanges,
          en: enRanges
        }
      };
    }
    const container = doc.getElementById("detail-content");
    const fallback = normalizeDetailLikeHtml(container ? container.innerHTML : "");
    return {
      zh: fallback,
      en: fallback,
      navInitialTheme,
      bgRanges: {
        zh: zhRanges,
        en: enRanges
      }
    };
  } catch (error) {
    const fallback = normalizeDetailLikeHtml(extractHtmlContent(source));
    return {
      zh: fallback,
      en: fallback,
      navInitialTheme: "light",
      bgRanges: {
        zh: [],
        en: []
      }
    };
  }
}

function isImportedDetailPageHtml(html) {
  return /data-template-shell=["']detail["']/i.test(String(html || ""));
}

function renderDetailLanguageSwitch() {
  if (elements.detailLangZh) {
    elements.detailLangZh.classList.toggle("is-active", state.detailLang === "zh");
  }
  if (elements.detailLangEn) {
    elements.detailLangEn.classList.toggle("is-active", state.detailLang === "en");
  }
  if (elements.detailLangCopy) {
    elements.detailLangCopy.textContent = getCopyButtonLabel(getOtherLang(state.detailLang));
  }
}

function renderDetailNavInitialThemeControl() {
  const theme = normalizeNavInitialTheme(state.detailNavInitialTheme);
  if (elements.detailNavInitialLight) {
    elements.detailNavInitialLight.checked = theme !== "dark";
    elements.detailNavInitialLight.disabled = state.detailImportedMode;
  }
  if (elements.detailNavInitialDark) {
    elements.detailNavInitialDark.checked = theme === "dark";
    elements.detailNavInitialDark.disabled = state.detailImportedMode;
  }
}

function renderDetailEditor() {
  renderDetailLanguageSwitch();
  renderDetailNavInitialThemeControl();
  if (elements.saveDetail) {
    elements.saveDetail.disabled = state.detailImportedMode;
  }
  if (elements.importDetailFolder) {
    elements.importDetailFolder.disabled = state.detailImportedMode;
  }
  if (!elements.detailEditor) return;
  elements.detailEditor.setAttribute("contenteditable", state.detailImportedMode ? "false" : "true");
  if (state.detailImportedMode) {
    elements.detailEditor.innerHTML = `<p class="detail-note-text">${escapeHtml(t("status.importedDetailReadonly"))}</p>`;
    refreshEditorTables(elements.detailEditor);
    hideImageControls();
    hideTablePopover();
    hideInsertButtonPopover();
    hideColumnsPopover();
    hideWebEmbedPopover();
    exitColumnsEditMode();
    syncDetailFontSizeControl();
    queueLineNumberRefresh();
    return;
  }
  const html = getDraftHtmlByLangWithFallback(state.detailDraftHtml, state.detailLang);
  elements.detailEditor.innerHTML = html;
  if (state.currentDetailProject) {
    normalizeEditorImages(state.currentDetailProject);
    normalizeEditorLinks(state.currentDetailProject);
  }
  prepareEditorImages();
  refreshEditorTables(elements.detailEditor);
  state.savedRange = null;
  hideImageControls();
  hideTablePopover();
  hideInsertButtonPopover();
  hideColumnsPopover();
  hideWebEmbedPopover();
  exitColumnsEditMode();
  syncDetailFontSizeControl();
  queueLineNumberRefresh();
}

function setDetailEditLang(lang) {
  const nextLang = lang === "en" ? "en" : "zh";
  if (state.detailLang === nextLang) return;
  persistDetailDraftFromEditor();
  state.detailLang = nextLang;
  renderDetailEditor();
}

function pasteDetailFromOtherLang() {
  const targetLang = state.detailLang === "en" ? "en" : "zh";
  const sourceLang = getOtherLang(targetLang);
  const sourceHtml = state.detailDraftHtml[sourceLang] || "";
  if (!sourceHtml) return;
  state.detailDraftHtml[targetLang] = sourceHtml;
  state.detailBgRanges[targetLang] = normalizeLineRanges(state.detailBgRanges[sourceLang] || []);
  renderDetailEditor();
}

function persistDetailDraftFromEditor() {
  if (!elements.detailEditor || !state.currentDetailProject) return;
  if (state.activeTab !== "project") return;
  if (state.detailImportedMode) return;
  state.detailDraftHtml[state.detailLang] = normalizeDetailLikeHtml(elements.detailEditor.innerHTML);
}

async function openDetailEditor(id) {
  if (!state.rootHandle) {
    setStatus(t("status.needFolder"), "error");
    return;
  }
  clearPendingMedia();
  const project = state.projects.find((item) => item.id === id);
  if (!project) return;
  state.currentDetailProject = project;
  state.currentId = project.id;
  state.savedRange = null;
  elements.detailProjectName.textContent = `${project.id} · ${state.lang === "zh" ? project.name_zh : project.name_en}`;
  elements.detailPanel.hidden = false;

  try {
    await migrateLegacyDetail(project);
    let html = await readTextFile([...getDetailFolder(project), "index.html"]);
    if (!html) {
      const legacyFolder = getLegacyDetailFolder(project);
      if (legacyFolder) {
        html = await readTextFile([...legacyFolder, "index.html"]);
        if (!html) {
          const legacyTypeFolder = legacyFolder[2];
          html = await readTextFile(contentPathSegments("project_details", legacyTypeFolder, `${project.id}.html`));
        }
      }
    }
    if (html) {
      state.detailImportedMode = isImportedDetailPageHtml(html);
      const parsed = parseDetailContentPage(html);
      state.detailDraftHtml.zh = parsed.zh;
      state.detailDraftHtml.en = parsed.en;
      state.detailNavInitialTheme = normalizeNavInitialTheme(parsed.navInitialTheme);
      state.detailBgRanges.zh = normalizeLineRanges(parsed.bgRanges?.zh || []);
      state.detailBgRanges.en = normalizeLineRanges(parsed.bgRanges?.en || []);
    } else {
      state.detailImportedMode = false;
      state.detailNavInitialTheme = "light";
      state.detailDraftHtml.zh = "";
      state.detailDraftHtml.en = "";
      state.detailBgRanges.zh = [];
      state.detailBgRanges.en = [];
    }
  } catch (error) {
    setStatus(t("status.error").replace("{message}", error.message), "error");
    state.detailImportedMode = false;
    state.detailNavInitialTheme = "light";
    state.detailDraftHtml.zh = "";
    state.detailDraftHtml.en = "";
    state.detailBgRanges.zh = [];
    state.detailBgRanges.en = [];
  }

  renderDetailEditor();
}

function hideDetailPanel() {
  persistDetailDraftFromEditor();
  clearPendingMedia();
  hideTablePopover();
  hideInsertButtonPopover();
  hideLineRangePopover();
  hideColumnsPopover();
  hideWebEmbedPopover();
  exitColumnsEditMode();
  elements.detailPanel.hidden = true;
  elements.detailEditor.innerHTML = "";
  elements.detailProjectName.textContent = "";
  state.savedRange = null;
  state.currentDetailProject = null;
  state.detailImportedMode = false;
  state.detailNavInitialTheme = "light";
  state.detailDraftHtml.zh = "";
  state.detailDraftHtml.en = "";
  state.detailBgRanges.zh = [];
  state.detailBgRanges.en = [];
  hideImageControls();
  queueLineNumberRefresh();
}

async function saveProject() {
  const data = getFormData();
  if (!data) return;

  const existingIndex = state.projects.findIndex((item) => item.id === data.id);
  const isEdit = Boolean(state.currentId);

  if (!isEdit && existingIndex !== -1) {
    setStatus(t("status.idExists"), "error");
    return;
  }
  if (isEdit && data.id !== state.currentId && existingIndex !== -1) {
    setStatus(t("status.idExists"), "error");
    return;
  }

  let previous = null;
  if (isEdit) {
    previous = state.projects.find((item) => item.id === state.currentId);
  }
  const preservedHidden = Boolean(previous && previous.hidden);

  if (state.imageFile) {
    data.image = await saveImageFile(data.id, state.imageFile);
  }

  const nextProjectData = {
    ...data,
    hidden: preservedHidden
  };

  if (isEdit) {
    const index = state.projects.findIndex((item) => item.id === state.currentId);
    if (index !== -1) {
      state.projects[index] = nextProjectData;
    }
  } else {
    state.projects.push({
      ...nextProjectData,
      hidden: false
    });
  }

  await writeProjectsCsv();
  await ensureDetailHtml(nextProjectData, previous);

  state.pendingNewProject = null;
  renderProjectList();
  scrollProjectRowIntoView(nextProjectData.id);
  setStatus(t("status.saved"));
  state.currentId = nextProjectData.id;
  renderCoverStatus();
  updateProjectDeleteButton();
}

function getFormData() {
  const id = elements.idInput.value.trim();
  const nameZh = elements.nameZh.value.trim();
  const nameEn = elements.nameEn.value.trim();
  const type = elements.type.value.trim();
  const date = elements.date.value.trim();
  const rankRaw = String(elements.rank?.value || "").trim();
  const currentProject = state.projects.find((project) => project.id === state.currentId);
  const existingImage = currentProject ? String(currentProject.image || "").trim() : "";
  const parsedRank = rankRaw ? parsePositiveInteger(rankRaw) : null;

  if (!id || !nameZh || !nameEn || !date) {
    setStatus(t("status.missingFields"), "error");
    return null;
  }
  if (rankRaw && !parsedRank) {
    setStatus(t("status.invalidRank"), "error");
    if (elements.rank) {
      elements.rank.focus();
      elements.rank.select();
    }
    return null;
  }

  return {
    id,
    name_zh: nameZh,
    name_en: nameEn,
    type,
    date,
    rank: parsedRank ? String(parsedRank) : "",
    tags: serializeFormTags(),
    image: existingImage
  };
}

function normalizeDetailDraftHtmlByLang(contentInput) {
  if (typeof contentInput === "string") {
    const shared = normalizeDetailLikeHtml(contentInput);
    return { zh: shared, en: shared };
  }
  if (contentInput && typeof contentInput === "object") {
    return {
      zh: normalizeDetailLikeHtml(contentInput.zh || ""),
      en: normalizeDetailLikeHtml(contentInput.en || "")
    };
  }
  return { zh: "", en: "" };
}

function normalizeLineRangesByLang(rangeInput, fallback = null) {
  const fallbackRanges = fallback && typeof fallback === "object"
    ? fallback
    : { zh: [], en: [] };
  const source = rangeInput && typeof rangeInput === "object"
    ? rangeInput
    : fallbackRanges;
  return {
    zh: normalizeLineRanges(source?.zh ?? fallbackRanges?.zh ?? []),
    en: normalizeLineRanges(source?.en ?? fallbackRanges?.en ?? [])
  };
}

async function saveDetailHtml(project, contentInput) {
  await ensureProjectDetailStructure(project);
  const htmlPath = [...getDetailFolder(project), "index.html"];
  const draft = normalizeDetailDraftHtmlByLang(contentInput);
  const rangeByLang = normalizeLineRangesByLang(contentInput?.bgRanges, state.detailBgRanges);
  const navInitialTheme = normalizeNavInitialTheme(contentInput?.navInitialTheme ?? state.detailNavInitialTheme);
  const activePendingImageIds = new Set([
    ...collectPendingIdsFromHtml(draft.zh, "data-pending-id"),
    ...collectPendingIdsFromHtml(draft.en, "data-pending-id")
  ]);
  const activePendingFileIds = new Set([
    ...collectPendingIdsFromHtml(draft.zh, "data-pending-file-id"),
    ...collectPendingIdsFromHtml(draft.en, "data-pending-file-id")
  ]);
  const resolvedPendingImageSrc = new Map();
  const resolvedPendingFileHref = new Map();

  let resolvedZh = await resolvePendingImages(draft.zh, project, activePendingImageIds, resolvedPendingImageSrc);
  resolvedZh = await resolvePendingFiles(resolvedZh, project, activePendingFileIds, resolvedPendingFileHref);
  resolvedZh = await resolveLegacyAssetLinks(resolvedZh, project);

  let resolvedEn = await resolvePendingImages(draft.en, project, activePendingImageIds, resolvedPendingImageSrc);
  resolvedEn = await resolvePendingFiles(resolvedEn, project, activePendingFileIds, resolvedPendingFileHref);
  resolvedEn = await resolveLegacyAssetLinks(resolvedEn, project);

  const fixedZh = normalizeContentForSave(resolvedZh, project);
  const fixedEn = normalizeContentForSave(resolvedEn, project);
  await writeFileByPath(htmlPath, buildDetailHtml(project, {
    zh: fixedZh,
    en: fixedEn,
    navInitialTheme,
    bgRanges: rangeByLang
  }));
  await writeDetailReadingStatsFile(project, {
    zh: fixedZh,
    en: fixedEn
  });

  state.detailNavInitialTheme = navInitialTheme;
  state.detailDraftHtml.zh = fixedZh;
  state.detailDraftHtml.en = fixedEn;
  state.detailBgRanges.zh = normalizeLineRanges(rangeByLang.zh);
  state.detailBgRanges.en = normalizeLineRanges(rangeByLang.en);
  renderDetailEditor();
  await migrateLegacyDetail(project);
}

async function toggleProjectHidden(id) {
  if (!state.rootHandle) return;
  const target = state.projects.find((item) => item.id === id);
  if (!target) return;

  if (isTypeHidden(target.type) && !target.hidden) {
    setStatus(t("status.projectHiddenByType"), "error");
    return;
  }

  target.hidden = !Boolean(target.hidden);
  await writeProjectsCsv();
  renderProjectList();
  if (state.currentId === id) {
    updateProjectDeleteButton();
  }
  setStatus(t("status.saved"));
}

async function deleteProject(id) {
  if (!state.rootHandle) return;
  const targetIndex = state.projects.findIndex((item) => item.id === id);
  if (targetIndex === -1) return;

  const target = state.projects[targetIndex];
  state.projects.splice(targetIndex, 1);

  await writeProjectsCsv();
  await deleteProjectFiles(target);

  if (state.currentId === id) {
    hideDetailPanel();
    clearForm();
    setProjectFormMode(false);
  }

  renderProjectList();
  updateProjectDeleteButton();
  setStatus(t("status.saved"));
}

async function writeProjectsCsv() {
  const csv = toCsv(state.projects);
  const handle = await getFileHandle(state.rootHandle, contentPathSegments("assets", "projects.csv"), true);
  await writeFile(handle, csv);
}


function parseCsv(text) {
  const rows = text.trim().split(/\r?\n/).filter(Boolean);
  if (!rows.length) return [];
  const headers = splitCsvLine(rows.shift());

  return rows.map((line) => {
    const values = splitCsvLine(line);
    const record = {};
    headers.forEach((header, index) => {
      record[header] = (values[index] || "").trim();
    });
    return record;
  });
}

function parsePositiveInteger(value) {
  const raw = String(value ?? "").trim();
  if (!raw) return null;
  if (!/^\d+$/.test(raw)) return null;
  const numeric = Number.parseInt(raw, 10);
  if (!Number.isFinite(numeric) || numeric < 1) return null;
  return numeric;
}

function normalizeProjectRank(value) {
  const rank = parsePositiveInteger(value);
  return rank ? String(rank) : "";
}

function getProjectRankNumber(project) {
  return parsePositiveInteger(project?.rank);
}

function normalizeDateKey(value) {
  if (!value) return 0;
  const numeric = Number(String(value).replace(/[^0-9]/g, ""));
  return Number.isNaN(numeric) ? 0 : numeric;
}

function compareProjectsByDisplayOrder(a, b) {
  const aRank = getProjectRankNumber(a);
  const bRank = getProjectRankNumber(b);
  const aHasRank = Number.isFinite(aRank);
  const bHasRank = Number.isFinite(bRank);

  if (aHasRank && bHasRank && aRank !== bRank) {
    return aRank - bRank;
  }
  if (aHasRank !== bHasRank) {
    return aHasRank ? -1 : 1;
  }

  const aDate = normalizeDateKey(a?.date);
  const bDate = normalizeDateKey(b?.date);
  if (aDate !== bDate) return bDate - aDate;
  return String(b?.id || "").localeCompare(String(a?.id || ""));
}

function getProjectsSortedForDisplay(records) {
  return [...records].sort(compareProjectsByDisplayOrder);
}

function openRankPickerWithAllOptions(input) {
  if (!(input instanceof HTMLInputElement)) return;
  if (typeof input.showPicker !== "function") return;
  const previousValue = String(input.value || "");
  if (previousValue) {
    input.value = "";
  }
  try {
    input.showPicker();
  } catch (error) {
    if (previousValue) {
      input.value = previousValue;
    }
    return;
  }
  if (previousValue) {
    queueMicrotask(() => {
      if (!String(input.value || "").trim()) {
        input.value = previousValue;
      }
    });
  }
}

function renderRankOptions() {
  if (!elements.rankOptions) return;
  const optionCount = state.projects.length;
  const fragment = document.createDocumentFragment();
  for (let rank = 1; rank <= optionCount; rank += 1) {
    const option = document.createElement("option");
    option.value = String(rank);
    fragment.appendChild(option);
  }
  elements.rankOptions.innerHTML = "";
  elements.rankOptions.appendChild(fragment);
}

function normalizeProjectRecord(record) {
  return {
    id: String(record?.id || "").trim(),
    name_zh: String(record?.name_zh || "").trim(),
    name_en: String(record?.name_en || "").trim(),
    type: String(record?.type || "").trim(),
    date: String(record?.date || "").trim(),
    rank: normalizeProjectRank(record?.rank),
    tags: String(record?.tags || "").trim(),
    image: String(record?.image || "").trim(),
    hidden: toBooleanFlag(record?.hidden)
  };
}

function toCsv(records) {
  const header = csvHeader();
  if (!records.length) return header + "\n";

  const rows = records.map((record) => [
    record.id,
    record.name_zh,
    record.name_en,
    record.type,
    record.date,
    normalizeProjectRank(record.rank),
    record.tags || "",
    record.image || "",
    toCsvFlag(record.hidden)
  ].map(escapeCsv).join(","));

  return [header, ...rows].join("\n") + "\n";
}

function csvHeader() {
  return "id,name_zh,name_en,type,date,rank,tags,image,hidden";
}

function escapeCsv(value) {
  const text = String(value ?? "");
  if (/[",\n]/.test(text)) {
    return `"${text.replace(/"/g, '""')}"`;
  }
  return text;
}

function splitCsvLine(line) {
  const result = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];
    if (char === '"') {
      const nextChar = line[i + 1];
      if (inQuotes && nextChar === '"') {
        current += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (char === "," && !inQuotes) {
      result.push(current);
      current = "";
      continue;
    }

    current += char;
  }

  result.push(current);
  return result;
}

function toBooleanFlag(value) {
  const normalized = String(value ?? "").trim().toLowerCase();
  return normalized === "1" || normalized === "true" || normalized === "yes" || normalized === "y";
}

function toCsvFlag(value) {
  return value ? "1" : "";
}

function getActiveTypesForView() {
  if (state.typeMode === "view") {
    return state.types;
  }
  if (Array.isArray(state.typesDraft)) {
    return state.typesDraft;
  }
  return state.types;
}

function isTypeHidden(typeId, sourceTypes = null) {
  const id = String(typeId || "").trim();
  if (!id) return false;
  const list = Array.isArray(sourceTypes) ? sourceTypes : getActiveTypesForView();
  const target = list.find((type) => type.id === id);
  return Boolean(target && target.hidden);
}

function generateNextId(projects) {
  let max = 0;
  let width = 2;
  const existing = new Set();

  projects.forEach((project) => {
    const id = String(project.id || "").trim();
    if (!id) return;
    existing.add(id);
    const match = id.match(/^p(\d+)$/i);
    if (match) {
      const num = Number(match[1]);
      if (!Number.isNaN(num)) {
        max = Math.max(max, num);
        width = Math.max(width, match[1].length);
      }
    }
  });

  let next = max + 1;
  let candidate = `p${String(next).padStart(width, "0")}`;
  while (existing.has(candidate)) {
    next += 1;
    candidate = `p${String(next).padStart(width, "0")}`;
  }

  return candidate;
}

async function saveImageFile(id, file) {
  await ensureProjectDetailStructure({ id });
  const ext = getFileExtension(file.name);
  const filename = `cover.${ext}`;
  const handle = await getFileHandle(state.rootHandle, contentPathSegments("project_details", id, "assets", filename), true);
  await writeFile(handle, file);
  return `contents/project_details/${id}/assets/${filename}`;
}

function getFileExtension(name) {
  const parts = name.split(".");
  return parts.length > 1 ? parts.pop().toLowerCase() : "png";
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    if (!(file instanceof Blob)) {
      resolve("");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(reader.error || new Error("Failed to read file"));
    reader.readAsDataURL(file);
  });
}

async function ensureDetailHtml(project, previous) {
  await ensureProjectDetailStructure(project);
  const htmlPath = [...getDetailFolder(project), "index.html"];
  let existingHtml = "";
  if (await fileExists(htmlPath)) {
    existingHtml = await readTextFile(htmlPath) || "";
    if (isImportedDetailPageHtml(existingHtml)) {
      if (previous && previous.id !== project.id) {
        const previousHtmlPath = [...getDetailFolder(previous), "index.html"];
        const previousHtml = await readTextFile(previousHtmlPath);
        if (!(previousHtml && isImportedDetailPageHtml(previousHtml))) {
          await removeDirectoryByPath(getDetailFolder(previous));
        }
      }
      return;
    }
  }
  let contentByLang = { zh: "", en: "" };
  if (existingHtml) {
    contentByLang = parseDetailContentPage(existingHtml);
  }
  await writeFileByPath(htmlPath, buildDetailHtml(project, contentByLang));

  if (previous && previous.id !== project.id) {
    await removeDirectoryByPath(getDetailFolder(previous));
  }
}

async function deleteProjectFiles(project) {
  const folder = getDetailFolder(project);
  await removeDirectoryByPath(folder);
}

function buildDetailHtml(project, contentHtml) {
  const titleZh = escapeHtmlAttribute(project.name_zh);
  const titleEn = escapeHtmlAttribute(project.name_en);
  const date = escapeHtmlAttribute(project.date);
  const contentByLang = normalizeDetailDraftHtmlByLang(contentHtml);
  const rangeByLang = normalizeLineRangesByLang(contentHtml?.bgRanges);
  const navInitialTheme = normalizeNavInitialTheme(contentHtml?.navInitialTheme);
  const safeContentZh = contentByLang.zh || "";
  const safeContentEn = contentByLang.en || "";
  const safeRangesZh = serializeLineRangesTemplateText(rangeByLang.zh);
  const safeRangesEn = serializeLineRangesTemplateText(rangeByLang.en);

  return `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${titleZh}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../../../core/styles.css">
  <link rel="stylesheet" href="../../../detailSet/detail.css">
</head>
<body data-page="projects" data-project-id="${project.id}" data-title-zh="${titleZh}" data-title-en="${titleEn}" data-type="${project.type}" data-date="${date}" data-nav-initial-theme="${navInitialTheme}">
  <header class="site-header">
    <div class="container header-inner">
      <div class="brand">
        <span class="brand-label" id="site-brand-text">${escapeHtml(DEFAULT_PERSONALIZATION.navBrandTextZh)}</span>
      </div>
      <nav class="top-nav" data-i18n-attr="aria-label:nav.ariaLabel">
        <a class="nav-btn is-active" aria-current="page" href="../../../index.html" data-i18n="nav.projects">项目</a>
        <a class="nav-btn" href="../../../contents/aboutme/index.html" data-i18n="nav.about">关于我</a>
        <button class="lang-toggle" type="button" data-lang-toggle data-i18n-attr="aria-label:nav.langToggleAria">EN</button>
      </nav>
    </div>
  </header>

  <main class="container detail-main">
    <div class="detail-back">
      <a class="back-link" href="../../../index.html">返回</a>
    </div>
    <section class="detail-hero">
      <p class="detail-type"></p>
      <h1 class="detail-title"></h1>
      <p class="detail-meta"></p>
    </section>
    <article id="detail-content" class="detail-content"></article>
    <section class="detail-pagination" hidden>
      <a class="detail-nav-card" data-detail-nav="prev" href="#">
        <span class="detail-nav-label" data-i18n="detail.prev">上一个项目</span>
        <span class="detail-nav-title"></span>
        <span class="detail-nav-meta"></span>
      </a>
      <a class="detail-nav-card" data-detail-nav="next" href="#">
        <span class="detail-nav-label" data-i18n="detail.next">下一个项目</span>
        <span class="detail-nav-title"></span>
        <span class="detail-nav-meta"></span>
      </a>
    </section>
  </main>

  <template id="detail-content-zh-template">${safeContentZh}</template>
  <template id="detail-content-en-template">${safeContentEn}</template>
  <template id="detail-bg-ranges-zh-template">${safeRangesZh}</template>
  <template id="detail-bg-ranges-en-template">${safeRangesEn}</template>
  <script src="../../../detailSet/detail.js" defer></script>
</body>
</html>`;
}

function extractHtmlContent(html) {
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const container = doc.getElementById("detail-content");
    if (container) {
      return container.innerHTML;
    }
    return doc.body ? doc.body.innerHTML : html;
  } catch (error) {
    return html;
  }
}

function normalizeEditorImages(project) {
  const images = elements.detailEditor.querySelectorAll("img");
  images.forEach((img) => {
    const srcRaw = img.getAttribute("src") || "";
    const src = srcRaw.split("?")[0];
    if (!src) return;
    const base = project ? `../contents/project_details/${project.id}/` : "";
    if (base && src.startsWith(base)) {
      img.dataset.siteSrc = src.replace(base, "");
      return;
    }
    if (src.startsWith("assets/")) {
      img.dataset.siteSrc = src;
      if (base) {
        img.src = `${base}${src}`;
      }
    }
  });
}

function normalizeEditorLinks(project) {
  const links = elements.detailEditor.querySelectorAll("a[href]");
  links.forEach((link) => {
    const rawHref = link.getAttribute("href") || "";
    const href = rawHref.split("?")[0];
    if (!href) return;

    const base = project ? `../contents/project_details/${project.id}/` : "";
    if (base && href.startsWith(base)) {
      link.dataset.siteHref = href.replace(base, "");
      return;
    }

    if (href.startsWith("assets/")) {
      link.dataset.siteHref = href;
      if (base) {
        link.setAttribute("href", `${base}${href}`);
      }
    }
  });
}

function prepareEditorImages() {
  const images = elements.detailEditor.querySelectorAll("img");
  images.forEach((img) => {
    const wrapper = wrapImage(img);
    if (wrapper) {
      ensureImageWrapperDefaults(wrapper);
      imageResizeObserver.observe(wrapper);
    }
  });
  const wrappers = elements.detailEditor.querySelectorAll(".image-wrapper");
  wrappers.forEach((wrapper) => {
    if (!(wrapper instanceof HTMLElement)) return;
    ensureImageWrapperDefaults(wrapper);
    imageResizeObserver.observe(wrapper);
  });
}

function restoreOrphanEditorImages() {
  if (!elements.detailEditor) return false;
  const images = elements.detailEditor.querySelectorAll("img");
  let changed = false;
  images.forEach((img) => {
    if (img.closest(".image-wrapper")) return;
    const wrapper = wrapImage(img);
    if (wrapper) {
      ensureImageWrapperDefaults(wrapper);
      imageResizeObserver.observe(wrapper);
      changed = true;
    }
  });
  return changed;
}

function isColumnsCellEmpty(cell) {
  if (!(cell instanceof HTMLElement)) return true;
  const probe = cell.cloneNode(true);
  probe.querySelectorAll(".image-wrapper").forEach((node) => node.remove());
  const text = String(probe.textContent || "").replace(/\u200b/g, "").trim();
  const hasStructuredNode = Boolean(
    probe.querySelector("img,table,hr,ul,ol,blockquote,pre,a,figure,video,audio,canvas,svg,iframe")
  );
  return !text && !hasStructuredNode;
}

function ensureColumnsCellPlaceholder(cell) {
  if (!(cell instanceof HTMLElement)) return;
  if (!isColumnsCellEmpty(cell)) return;
  cell.innerHTML = "";
  const paragraph = document.createElement("p");
  paragraph.appendChild(document.createElement("br"));
  cell.appendChild(paragraph);
}

function getCaretRangeFromPoint(x, y) {
  if (typeof document.caretRangeFromPoint === "function") {
    return document.caretRangeFromPoint(x, y);
  }
  if (typeof document.caretPositionFromPoint === "function") {
    const position = document.caretPositionFromPoint(x, y);
    if (!position) return null;
    const range = document.createRange();
    range.setStart(position.offsetNode, position.offset);
    range.collapse(true);
    return range;
  }
  return null;
}

function clearImageDragState() {
  if (state.draggingImageWrapper instanceof HTMLElement) {
    state.draggingImageWrapper.classList.remove("is-dragging");
  }
  state.draggingImageWrapper = null;
}

function cloneImageWrapperForClipboard(wrapper) {
  if (!(wrapper instanceof HTMLElement)) return null;
  const clone = wrapper.cloneNode(true);
  if (!(clone instanceof HTMLElement)) return null;
  clone.dataset.editorCopiedImage = "1";
  clone.classList.remove("is-selected", "is-resizing", "is-cropping", "is-dragging");
  clone.removeAttribute("data-crop-mode");
  clone.contentEditable = "false";
  clone.draggable = true;
  clone.querySelectorAll(".image-resize-handle,.image-crop-handle").forEach((node) => node.remove());
  const img = clone.querySelector("img");
  if (img instanceof HTMLImageElement) {
    img.draggable = false;
  }
  return clone;
}

function shouldHandleSelectedImageClipboard() {
  const wrapper = state.selectedImage;
  if (!(wrapper instanceof HTMLElement) || !elements.detailEditor.contains(wrapper)) return false;
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) return true;
  const range = selection.getRangeAt(0);
  if (range.collapsed) return true;
  return wrapper.contains(range.startContainer) || wrapper.contains(range.endContainer);
}

function remapPendingImageOnPastedWrapper(wrapper) {
  if (!(wrapper instanceof HTMLElement)) return;
  const img = wrapper.querySelector("img");
  if (!(img instanceof HTMLImageElement)) return;
  const oldPendingId = String(img.dataset.pendingId || "").trim();
  if (!oldPendingId) return;
  const pendingInfo = state.pendingImages.get(oldPendingId);
  if (!pendingInfo || !pendingInfo.file) return;

  const newPendingId = `pending-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  const previewUrl = URL.createObjectURL(pendingInfo.file);
  img.src = previewUrl;
  img.dataset.pendingId = newPendingId;
  img.removeAttribute("data-site-src");
  state.pendingImages.set(newPendingId, {
    file: pendingInfo.file,
    previewUrl
  });
}

function insertCopiedImageWrappersFromClipboardHtml(html) {
  const source = String(html || "").trim();
  if (!source) return false;
  const container = document.createElement("div");
  container.innerHTML = source;
  const wrappers = Array.from(container.querySelectorAll(".image-wrapper[data-editor-copied-image='1']"));
  if (!wrappers.length) return false;

  wrappers.forEach((wrapper) => {
    wrapper.removeAttribute("data-editor-copied-image");
    wrapper.querySelectorAll(".image-resize-handle,.image-crop-handle").forEach((node) => node.remove());
    wrapper.classList.remove("is-selected", "is-resizing", "is-cropping", "is-dragging");
    wrapper.removeAttribute("data-crop-mode");
    remapPendingImageOnPastedWrapper(wrapper);
    ensureImageWrapperDefaults(wrapper);
    insertNodeAtCursor(wrapper);
    imageResizeObserver.observe(wrapper);
  });

  persistDetailDraftFromEditor();
  saveSelectionRange();
  queueLineNumberRefresh();
  return true;
}

function moveDraggingImageToPoint(event) {
  const wrapper = state.draggingImageWrapper;
  if (!(wrapper instanceof HTMLElement) || !elements.detailEditor) {
    clearImageDragState();
    return;
  }
  if (!elements.detailEditor.contains(wrapper)) {
    clearImageDragState();
    return;
  }
  event.preventDefault();

  const sourceCell = wrapper.closest(".detail-columns-cell");
  let range = getCaretRangeFromPoint(event.clientX, event.clientY);
  if (!range || !elements.detailEditor.contains(range.startContainer)) {
    range = document.createRange();
    range.selectNodeContents(elements.detailEditor);
    range.collapse(false);
  }

  if (wrapper.contains(range.startContainer)) {
    showImageControls(wrapper);
    clearImageDragState();
    return;
  }

  const selection = window.getSelection();
  if (selection) {
    selection.removeAllRanges();
    selection.addRange(range);
  }

  insertNodeAtCursor(wrapper);
  if (sourceCell instanceof HTMLElement && sourceCell.isConnected) {
    ensureColumnsCellPlaceholder(sourceCell);
  }

  showImageControls(wrapper);
  persistDetailDraftFromEditor();
  saveSelectionRange();
  queueLineNumberRefresh();
  clearImageDragState();
}

function removeSelectedImageWrapper() {
  const wrapper = state.selectedImage;
  if (!(wrapper instanceof HTMLElement) || !elements.detailEditor) return false;
  if (!elements.detailEditor.contains(wrapper)) return false;

  const sourceCell = wrapper.closest(".detail-columns-cell");
  wrapper.remove();
  if (sourceCell instanceof HTMLElement && sourceCell.isConnected) {
    ensureColumnsCellPlaceholder(sourceCell);
  }

  const caretHost = sourceCell instanceof HTMLElement ? sourceCell : elements.detailEditor;
  const selection = window.getSelection();
  if (selection) {
    const range = document.createRange();
    range.selectNodeContents(caretHost);
    range.collapse(false);
    selection.removeAllRanges();
    selection.addRange(range);
  }

  hideImageControls();
  persistDetailDraftFromEditor();
  saveSelectionRange();
  queueLineNumberRefresh();
  return true;
}

function ensureImageWrapperDefaults(wrapper) {
  if (!(wrapper instanceof HTMLElement)) return;
  const isCropped = String(wrapper.dataset.cropped || "") === "true";
  wrapper.draggable = true;
  if (!wrapper.dataset.lockRatio) {
    wrapper.dataset.lockRatio = "true";
  }
  if (!wrapper.classList.contains("align-left")
    && !wrapper.classList.contains("align-center")
    && !wrapper.classList.contains("align-right")) {
    wrapper.classList.add("align-left");
  }
  const width = Number.parseFloat(wrapper.style.width || "");
  const height = Number.parseFloat(wrapper.style.height || "");
  if (!Number.isFinite(width) || width <= 0) {
    wrapper.style.width = "320px";
  }
  if (!Number.isFinite(height) || height <= 0) {
    wrapper.style.height = "200px";
  }
  const img = wrapper.querySelector("img");
  if (img instanceof HTMLImageElement) {
    img.draggable = false;
    if (!isCropped) {
      img.style.width = "100%";
      img.style.height = "100%";
      img.style.position = "relative";
      img.style.left = "0px";
      img.style.top = "0px";
      img.style.maxWidth = "";
      img.style.objectFit = img.style.objectFit || "contain";
      wrapper.style.overflow = "visible";
    } else {
      img.style.position = "absolute";
      img.style.left = img.style.left || "0px";
      img.style.top = img.style.top || "0px";
      img.style.maxWidth = "none";
      wrapper.style.overflow = "hidden";
      wrapper.dataset.ratio = (
        Number.parseFloat(wrapper.style.height || "0")
        / Math.max(1, Number.parseFloat(wrapper.style.width || "1"))
      ).toFixed(4);
    }
    if ((!wrapper.dataset.ratio || Number.isNaN(Number.parseFloat(wrapper.dataset.ratio)))
      && img.naturalWidth > 0
      && img.naturalHeight > 0) {
      wrapper.dataset.ratio = (img.naturalHeight / img.naturalWidth).toFixed(4);
    }
  } else {
    const widthPx = Number.parseFloat(wrapper.style.width || "0");
    const heightPx = Number.parseFloat(wrapper.style.height || "0");
    if (
      (!wrapper.dataset.ratio || Number.isNaN(Number.parseFloat(wrapper.dataset.ratio)))
      && Number.isFinite(widthPx)
      && Number.isFinite(heightPx)
      && widthPx > 0
      && heightPx > 0
    ) {
      wrapper.dataset.ratio = (heightPx / widthPx).toFixed(4);
    }
    if (isWebPreviewWrapper(wrapper)) {
      wrapper.style.overflow = "hidden";
    }
  }
}

function normalizeContentForSave(contentHtml, project) {
  const container = document.createElement("div");
  container.innerHTML = contentHtml;

  container.querySelectorAll(`.${TABLE_RESIZE_HANDLE_CLASS}`).forEach((node) => node.remove());
  container.querySelectorAll(".image-resize-handle").forEach((node) => node.remove());
  container.querySelectorAll(".image-crop-handle").forEach((node) => node.remove());
  container.querySelectorAll("table").forEach((table) => {
    table.classList.remove("is-column-resizing");
  });
  container.querySelectorAll(".image-wrapper").forEach((wrapper) => {
    wrapper.classList.remove("is-selected", "is-resizing", "is-cropping");
    wrapper.removeAttribute("data-crop-mode");
  });
  container.querySelectorAll(".detail-columns-block").forEach((block) => {
    block.classList.remove("is-editing");
  });

  container.querySelectorAll("img").forEach((img) => {
    const siteSrc = img.dataset.siteSrc;
    if (siteSrc) {
      img.setAttribute("src", siteSrc);
      img.removeAttribute("data-site-src");
    }
    const rawSrc = img.getAttribute("src") || "";
    const cleaned = rawSrc.split("?")[0];
    if (project) {
      const base = `../contents/project_details/${project.id}/`;
      if (cleaned.startsWith(base)) {
        img.setAttribute("src", cleaned.replace(base, ""));
      }
    }
    if (img.dataset.pendingId) {
      img.removeAttribute("data-pending-id");
    }
  });

  container.querySelectorAll("a[href]").forEach((link) => {
    const siteHref = link.dataset.siteHref;
    if (siteHref) {
      link.setAttribute("href", siteHref);
      link.removeAttribute("data-site-href");
    }
    const rawHref = link.getAttribute("href") || "";
    const cleaned = rawHref.split("?")[0];
    if (project) {
      const base = `../contents/project_details/${project.id}/`;
      if (cleaned.startsWith(base)) {
        link.setAttribute("href", cleaned.replace(base, ""));
      }
    }
    if (link.dataset.pendingFileId) {
      link.removeAttribute("data-pending-file-id");
    }
  });

  return container.innerHTML;
}

function collectPendingIdsFromHtml(contentHtml, attributeName) {
  const container = document.createElement("div");
  container.innerHTML = String(contentHtml || "");
  const nodes = Array.from(container.querySelectorAll(`[${attributeName}]`));
  return new Set(
    nodes
      .map((node) => String(node.getAttribute(attributeName) || "").trim())
      .filter(Boolean)
  );
}

function applyFormatBlock(tag) {
  const rangeSnapshot = getUsableRangeForContext("detail")?.cloneRange() || null;
  runFormatBlockForContext("detail", tag);
  resetInlineTypographyStylesForContext("detail", rangeSnapshot);
  return rangeSnapshot;
}

function applyParagraphFormat() {
  const rangeSnapshot = applyFormatBlock("p");
  updateParagraphNoteClassForContext("detail", false, rangeSnapshot);
}

function applyNoteFormat() {
  const rangeSnapshot = applyFormatBlock("p");
  updateParagraphNoteClassForContext("detail", true, rangeSnapshot);
}

function getCurrentEditorBlock() {
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) return null;
  let node = selection.getRangeAt(0).startContainer;
  if (node.nodeType === Node.TEXT_NODE) {
    node = node.parentElement;
  }
  if (!(node instanceof Element)) return null;
  if (!elements.detailEditor.contains(node)) return null;
  return node.closest("p, h1, h2, h3, h4, h5, h6, li, blockquote, pre, td, th, div");
}

function ensureParagraphAfterEnter() {
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) return;
  const range = selection.getRangeAt(0);
  if (!elements.detailEditor.contains(range.startContainer)) return;

  let node = range.startContainer;
  if (node.nodeType === Node.TEXT_NODE) {
    node = node.parentElement;
  }
  if (!(node instanceof Element)) return;
  if (node.closest("li, td, th, .detail-columns-cell")) return;
  if (node.closest("p")) {
    saveSelectionRange();
    queueLineNumberRefresh();
    return;
  }
  document.execCommand("formatBlock", false, "p");
  saveSelectionRange();
  queueLineNumberRefresh();
}

function restoreSelectionRange() {
  if (!state.savedRange || !elements.detailEditor.contains(state.savedRange.startContainer)) {
    return false;
  }
  const selection = window.getSelection();
  if (!selection) return false;
  selection.removeAllRanges();
  selection.addRange(state.savedRange);
  return true;
}

function runExecCommand(command, value = null) {
  elements.detailEditor.focus();
  restoreSelectionRange();
  const result = document.execCommand(command, false, value);
  saveSelectionRange();
  syncDetailFontSizeControl();
  queueLineNumberRefresh();
  return result;
}

function applyColorCommand(command, color) {
  if (!color) return;
  runExecCommand("styleWithCSS", true);
  const ok = runExecCommand(command, color);
  if (!ok && command === "hiliteColor") {
    runExecCommand("backColor", color);
  }
}

function insertCodeBlock() {
  const selection = window.getSelection();
  const selectedText = selection ? selection.toString() : "";
  const pre = document.createElement("pre");
  pre.className = "detail-code-block";
  const code = document.createElement("code");
  code.textContent = selectedText || "code";
  pre.appendChild(code);
  insertNodeAtCursor(pre);
}

function insertLinkAtCursor() {
  const href = prompt(t("detail.linkPromptUrl"), "https://");
  if (href === null) return;
  const url = href.trim();
  if (!url) return;
  const labelInput = prompt(t("detail.linkPromptText"), url);
  if (labelInput === null) return;
  const label = labelInput.trim() || url;
  const link = document.createElement("a");
  link.className = "detail-inline-link";
  link.href = url;
  link.textContent = label;
  if (/^(https?:)?\/\//i.test(url)) {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  }
  insertNodeAtCursor(link);
}

function openTablePopover(anchorElement) {
  hideInsertButtonPopover();
  hideColumnsPopover();
  hideLineRangePopover();
  hideWebEmbedPopover();
  saveSelectionRange();
  elements.detailTablePopover.hidden = false;
  elements.detailTableSize.value = "3x3";
  positionTablePopover(anchorElement);
  elements.detailTableSize.focus();
  elements.detailTableSize.select();
}

function positionTablePopover(anchorElement) {
  if (!anchorElement || elements.detailTablePopover.hidden) return;
  const panelRect = elements.detailPanel.getBoundingClientRect();
  const anchorRect = anchorElement.getBoundingClientRect();
  const popover = elements.detailTablePopover;
  popover.style.top = `${anchorRect.bottom - panelRect.top + 6}px`;
  popover.style.left = `${anchorRect.left - panelRect.left}px`;

  const popRect = popover.getBoundingClientRect();
  const maxLeft = Math.max(12, panelRect.width - popRect.width - 12);
  const nextLeft = Math.min(Math.max(12, anchorRect.left - panelRect.left), maxLeft);
  popover.style.left = `${nextLeft}px`;
}

function hideTablePopover() {
  elements.detailTablePopover.hidden = true;
}

function parseTableSizeInput(text) {
  const match = String(text || "").trim().match(/^(\d{1,2})\s*[xX×*]\s*(\d{1,2})$/);
  if (!match) return null;
  const rows = parseInt(match[1], 10);
  const cols = parseInt(match[2], 10);
  if (
    Number.isNaN(rows) ||
    Number.isNaN(cols) ||
    rows < 1 ||
    cols < 1 ||
    rows > 30 ||
    cols > 20
  ) {
    return null;
  }
  return { rows, cols };
}

function parsePixelSize(value) {
  const numeric = Number.parseFloat(String(value || "").trim());
  return Number.isFinite(numeric) ? numeric : NaN;
}

function getEditorContextForElement(element) {
  if (!(element instanceof Element)) return "";
  if (elements.detailEditor && elements.detailEditor.contains(element)) return "detail";
  if (elements.aboutEditor && elements.aboutEditor.contains(element)) return "about";
  if (elements.personalizeFooterEditor && elements.personalizeFooterEditor.contains(element)) return "personalize";
  return "";
}

function persistEditorDraftByContext(context) {
  if (context === "detail") {
    persistDetailDraftFromEditor();
    return;
  }
  if (context === "about") {
    persistAboutDraftFromEditor();
    return;
  }
  if (context === "personalize") {
    persistPersonalizationDraftFromEditor();
  }
}

function getEditableTableColumnCount(table) {
  if (!(table instanceof HTMLTableElement)) return 0;
  const rows = Array.from(table.rows);
  if (!rows.length) return 0;
  let maxCount = 0;
  rows.forEach((row) => {
    const cells = Array.from(row.cells);
    if (!cells.length) return;
    const count = cells.reduce((sum, cell) => sum + Math.max(1, Number.parseInt(cell.colSpan || "1", 10) || 1), 0);
    if (count > maxCount) {
      maxCount = count;
    }
  });
  return maxCount;
}

function isSimpleEditableTable(table, colCount) {
  if (!(table instanceof HTMLTableElement)) return false;
  if (!Number.isInteger(colCount) || colCount < 1) return false;
  return Array.from(table.rows).every((row) => {
    const cells = Array.from(row.cells);
    if (cells.length !== colCount) return false;
    return cells.every((cell) => cell.colSpan === 1 && cell.rowSpan === 1);
  });
}

function getDirectTableColgroup(table) {
  if (!(table instanceof HTMLTableElement)) return null;
  return Array.from(table.children).find((child) => child.tagName === "COLGROUP") || null;
}

function ensureTableColgroup(table, colCount) {
  if (!(table instanceof HTMLTableElement)) return [];
  let colgroup = getDirectTableColgroup(table);
  if (!(colgroup instanceof HTMLElement) || colgroup.tagName !== "COLGROUP") {
    colgroup = document.createElement("colgroup");
    table.insertBefore(colgroup, table.firstChild);
  }
  const extraColgroups = Array.from(table.children)
    .filter((child) => child !== colgroup && child.tagName === "COLGROUP");
  extraColgroups.forEach((group) => group.remove());

  const cols = Array.from(colgroup.children).filter((child) => child.tagName === "COL");
  while (cols.length < colCount) {
    const col = document.createElement("col");
    colgroup.appendChild(col);
    cols.push(col);
  }
  while (cols.length > colCount) {
    const last = cols.pop();
    if (last) last.remove();
  }
  return cols;
}

function setEqualTableColWidths(cols) {
  if (!Array.isArray(cols) || !cols.length) return;
  const width = 100 / cols.length;
  cols.forEach((col) => {
    col.style.width = `${width}%`;
    col.removeAttribute("width");
  });
}

function syncTableResizeHandlePositions(table, cols) {
  if (!(table instanceof HTMLTableElement) || !Array.isArray(cols) || cols.length < 2) return;
  const firstRow = table.rows[0];
  if (!firstRow) return;
  const tableRect = table.getBoundingClientRect();
  if (!(tableRect.width > 0)) return;

  for (let index = 0; index < cols.length - 1; index += 1) {
    const handle = table.querySelector(`.${TABLE_RESIZE_HANDLE_CLASS}[data-col-index="${index}"]`);
    if (!(handle instanceof HTMLElement)) continue;
    const cell = firstRow.cells[index];
    if (cell instanceof HTMLElement) {
      const boundary = cell.getBoundingClientRect().right - tableRect.left;
      if (Number.isFinite(boundary)) {
        handle.style.left = `${Math.round(boundary)}px`;
      }
    }
  }
}

function syncTableResizableStructure(table) {
  if (!(table instanceof HTMLTableElement)) return null;
  table.querySelectorAll(`.${TABLE_RESIZE_HANDLE_CLASS}`).forEach((node) => node.remove());

  const colCount = getEditableTableColumnCount(table);
  if (colCount < 1) return null;
  if (!isSimpleEditableTable(table, colCount)) {
    return null;
  }

  const cols = ensureTableColgroup(table, colCount);
  if (!cols.length) return null;

  const allColsHaveWidth = cols.every((col) => {
    const styleWidth = String(col.style.width || "").trim();
    const attrWidth = String(col.getAttribute("width") || "").trim();
    return Boolean(styleWidth || attrWidth);
  });
  if (!allColsHaveWidth) {
    setEqualTableColWidths(cols);
  }

  if (colCount < 2 || !table.rows.length) {
    return { table, colCount, cols };
  }

  for (let index = 0; index < colCount - 1; index += 1) {
    const handle = document.createElement("span");
    handle.className = TABLE_RESIZE_HANDLE_CLASS;
    handle.dataset.colIndex = String(index);
    handle.setAttribute("contenteditable", "false");
    handle.setAttribute("draggable", "false");
    table.appendChild(handle);
  }
  syncTableResizeHandlePositions(table, cols);
  return { table, colCount, cols };
}

function refreshEditorTables(editor) {
  if (!(editor instanceof HTMLElement)) return;
  editor.querySelectorAll("table").forEach((table) => {
    syncTableResizableStructure(table);
  });
}

function normalizeTableColumnWidthsToPercent(table, cols) {
  if (!(table instanceof HTMLTableElement) || !Array.isArray(cols) || !cols.length) return;
  const firstRow = table.rows[0];
  if (!firstRow) return;

  const widths = cols.map((col, index) => {
    const cell = firstRow.cells[index];
    if (cell instanceof HTMLElement) {
      const rect = cell.getBoundingClientRect();
      if (rect.width > 0) return rect.width;
    }
    const fallback = parsePixelSize(col.style.width);
    return Number.isFinite(fallback) && fallback > 0 ? fallback : 0;
  });
  const total = widths.reduce((sum, width) => sum + width, 0);
  if (!(total > 0)) return;

  cols.forEach((col, index) => {
    const percent = (widths[index] / total) * 100;
    col.style.width = `${percent.toFixed(4)}%`;
    col.removeAttribute("width");
  });
}

function applyPendingTableResizeFrame() {
  state.tableResizeRaf = 0;
  const session = state.tableResizeSession;
  if (!session) return;
  if (!(session.leftCol instanceof HTMLElement) || !(session.rightCol instanceof HTMLElement)) return;
  session.leftCol.style.width = `${Math.round(session.pendingLeftWidth)}px`;
  session.rightCol.style.width = `${Math.round(session.pendingRightWidth)}px`;
  syncTableResizeHandlePositions(session.table, session.cols);
}

function handleTableResizeMove(event) {
  const session = state.tableResizeSession;
  if (!session) return;
  if (session.usesPointer) {
    if (!isPointerEventInstance(event)) return;
    if (event.pointerId !== session.pointerId) return;
  }
  if (event.cancelable) event.preventDefault();

  const point = getPointerPoint(event);
  const deltaX = point.x - session.startX;
  const pairWidth = session.startLeftWidth + session.startRightWidth;
  const minWidth = session.minWidth;
  const maxLeft = pairWidth - minWidth;
  if (maxLeft <= minWidth) return;

  const nextLeftWidth = Math.min(Math.max(minWidth, session.startLeftWidth + deltaX), maxLeft);
  const nextRightWidth = pairWidth - nextLeftWidth;
  session.pendingLeftWidth = nextLeftWidth;
  session.pendingRightWidth = nextRightWidth;
  if (state.tableResizeRaf) return;
  state.tableResizeRaf = window.requestAnimationFrame(applyPendingTableResizeFrame);
}

function finishTableResizeSession() {
  const session = state.tableResizeSession;
  if (!session) return;
  if (session.usesPointer) {
    window.removeEventListener("pointermove", handleTableResizeMove, true);
    window.removeEventListener("pointerup", finishTableResizeSession, true);
    window.removeEventListener("pointercancel", finishTableResizeSession, true);
  } else {
    window.removeEventListener("mousemove", handleTableResizeMove, true);
    window.removeEventListener("mouseup", finishTableResizeSession, true);
  }
  window.removeEventListener("blur", finishTableResizeSession, true);

  if (state.tableResizeRaf) {
    window.cancelAnimationFrame(state.tableResizeRaf);
    state.tableResizeRaf = 0;
    applyPendingTableResizeFrame();
  }

  if (session.handle instanceof HTMLElement) {
    session.handle.classList.remove("is-active");
  }
  if (session.table instanceof HTMLElement) {
    session.table.classList.remove("is-column-resizing");
  }
  normalizeTableColumnWidthsToPercent(session.table, session.cols);
  syncTableResizableStructure(session.table);
  persistEditorDraftByContext(session.context);
  queueLineNumberRefresh();
  state.tableResizeSession = null;
}

function startTableResizeFromHandle(handle, event) {
  if (!(handle instanceof HTMLElement)) return false;
  const table = handle.closest("table");
  if (!(table instanceof HTMLTableElement)) return false;
  const context = getEditorContextForElement(table);
  if (!context) return false;

  const structure = syncTableResizableStructure(table);
  if (!structure || structure.colCount < 2) return false;
  const colIndex = Number.parseInt(String(handle.dataset.colIndex || ""), 10);
  if (!Number.isFinite(colIndex) || colIndex < 0 || colIndex >= structure.colCount - 1) return false;
  const syncedHandle = table.querySelector(`.${TABLE_RESIZE_HANDLE_CLASS}[data-col-index="${colIndex}"]`);
  const activeHandle = syncedHandle instanceof HTMLElement ? syncedHandle : handle;

  const firstRow = table.rows[0];
  if (!firstRow) return false;
  for (let index = 0; index < structure.colCount; index += 1) {
    const rowCell = firstRow.cells[index];
    const col = structure.cols[index];
    if (!(rowCell instanceof HTMLElement) || !(col instanceof HTMLElement)) continue;
    const width = rowCell.getBoundingClientRect().width;
    if (width > 0) {
      col.style.width = `${Math.round(width)}px`;
      col.removeAttribute("width");
    }
  }
  syncTableResizeHandlePositions(table, structure.cols);

  const leftCol = structure.cols[colIndex];
  const rightCol = structure.cols[colIndex + 1];
  if (!(leftCol instanceof HTMLElement) || !(rightCol instanceof HTMLElement)) return false;

  const leftCell = firstRow.cells[colIndex];
  const rightCell = firstRow.cells[colIndex + 1];
  const leftWidth = leftCell instanceof HTMLElement ? leftCell.getBoundingClientRect().width : parsePixelSize(leftCol.style.width);
  const rightWidth = rightCell instanceof HTMLElement ? rightCell.getBoundingClientRect().width : parsePixelSize(rightCol.style.width);
  if (!(leftWidth > 0) || !(rightWidth > 0)) return false;

  const point = getPointerPoint(event);
  const usesPointer = isPointerEventInstance(event);
  finishTableResizeSession();
  state.tableResizeSession = {
    context,
    table,
    cols: structure.cols,
    handle: activeHandle,
    leftCol,
    rightCol,
    startX: point.x,
    startLeftWidth: leftWidth,
    startRightWidth: rightWidth,
    pendingLeftWidth: leftWidth,
    pendingRightWidth: rightWidth,
    minWidth: TABLE_MIN_COLUMN_WIDTH,
    usesPointer,
    pointerId: usesPointer ? event.pointerId : null
  };
  activeHandle.classList.add("is-active");
  table.classList.add("is-column-resizing");

  if (usesPointer) {
    window.addEventListener("pointermove", handleTableResizeMove, true);
    window.addEventListener("pointerup", finishTableResizeSession, true);
    window.addEventListener("pointercancel", finishTableResizeSession, true);
  } else {
    window.addEventListener("mousemove", handleTableResizeMove, true);
    window.addEventListener("mouseup", finishTableResizeSession, true);
  }
  window.addEventListener("blur", finishTableResizeSession, true);
  if (event.cancelable) event.preventDefault();
  event.stopPropagation();
  return true;
}

function insertTableFromPopover() {
  const parsed = parseTableSizeInput(elements.detailTableSize.value);
  if (!parsed) {
    setStatus(t("status.error").replace("{message}", t("detail.tableSizeInvalid")), "error");
    elements.detailTableSize.focus();
    elements.detailTableSize.select();
    return;
  }
  hideTablePopover();
  insertTableAtCursor(parsed.rows, parsed.cols);
}

function insertTableAtCursor(rows, cols) {
  if (!Number.isInteger(rows) || !Number.isInteger(cols) || rows < 1 || cols < 1) return;
  const table = createTableNode(rows, cols);
  insertNodeAtCursor(table);
  refreshEditorTables(elements.detailEditor);
}

function createTableNode(rows, cols) {
  const table = document.createElement("table");
  table.className = "detail-table";
  const tbody = document.createElement("tbody");
  for (let row = 0; row < rows; row += 1) {
    const tr = document.createElement("tr");
    for (let col = 0; col < cols; col += 1) {
      const td = document.createElement("td");
      td.appendChild(document.createElement("br"));
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
  table.appendChild(tbody);
  return table;
}

function insertPersonalizeTableAtCursor(rows, cols) {
  if (!Number.isInteger(rows) || !Number.isInteger(cols) || rows < 1 || cols < 1) return;
  insertPersonalizeNodeAtCursor(createTableNode(rows, cols));
  refreshEditorTables(elements.personalizeFooterEditor);
}

function createFileLinkNode(filename, href, pendingId) {
  const link = document.createElement("a");
  link.className = "detail-inline-link detail-download-link";
  link.href = href;
  link.textContent = filename;
  link.download = filename;
  if (pendingId) {
    link.dataset.pendingFileId = pendingId;
  }
  return link;
}

function insertFileLinkAtCursor(filename, href, pendingId) {
  const link = createFileLinkNode(filename, href, pendingId);
  insertNodeAtCursor(link);
  return true;
}

function insertAboutFileLinkAtCursor(filename, href, pendingId) {
  const link = createFileLinkNode(filename, href, pendingId);
  insertAboutNodeAtCursor(link);
  return true;
}

function insertPersonalizeFileLinkAtCursor(filename, href, pendingId) {
  const link = createFileLinkNode(filename, href, pendingId);
  insertPersonalizeNodeAtCursor(link);
  return true;
}

function createImageWrapperNode(src, pendingId) {
  const wrapper = document.createElement("div");
  wrapper.className = "image-wrapper align-left";
  wrapper.contentEditable = "false";
  wrapper.draggable = true;
  const baseWidth = 320;
  wrapper.style.width = `${baseWidth}px`;
  wrapper.style.height = "200px";
  wrapper.style.overflow = "visible";
  wrapper.dataset.lockRatio = "true";
  wrapper.dataset.cropped = "false";

  const img = document.createElement("img");
  if (src.startsWith("blob:") || src.startsWith("data:") || src.startsWith("/") || src.startsWith("http://") || src.startsWith("https://")) {
    img.src = src;
  } else {
    img.src = `../${src}`;
    img.dataset.siteSrc = src;
  }
  if (pendingId) {
    img.dataset.pendingId = pendingId;
  }
  img.draggable = false;
  img.alt = "";
  img.style.width = "100%";
  img.style.height = "100%";
  img.style.objectFit = "contain";
  img.onload = () => {
    if (!img.naturalWidth || !img.naturalHeight) return;
    const height = Math.round(baseWidth * (img.naturalHeight / img.naturalWidth));
    wrapper.style.height = `${Math.max(height, IMAGE_MIN_HEIGHT)}px`;
    wrapper.dataset.ratio = (img.naturalHeight / img.naturalWidth).toFixed(4);
    queueLineNumberRefresh();
  };

  wrapper.appendChild(img);
  return { wrapper, img };
}

function insertImageAtCursor(src, pendingId) {
  const { wrapper, img } = createImageWrapperNode(src, pendingId);
  insertNodeAtCursor(wrapper);
  imageResizeObserver.observe(wrapper);
  return { wrapper, img };
}

function insertAboutImageAtCursor(src, pendingId) {
  const { wrapper, img } = createImageWrapperNode(src, pendingId);
  insertAboutNodeAtCursor(wrapper);
  return { wrapper, img };
}

function insertPersonalizeImageAtCursor(src, pendingId) {
  const { wrapper, img } = createImageWrapperNode(src, pendingId);
  insertPersonalizeNodeAtCursor(wrapper);
  return { wrapper, img };
}

function wrapImage(img) {
  if (!img || img.closest(".image-wrapper")) return img.closest(".image-wrapper");
  const wrapper = document.createElement("div");
  wrapper.className = "image-wrapper align-left";
  wrapper.contentEditable = "false";
  wrapper.draggable = true;
  wrapper.dataset.lockRatio = "true";
  wrapper.dataset.cropped = "false";
  wrapper.style.overflow = "visible";
  const rect = img.getBoundingClientRect();
  const baseWidth = rect.width || img.naturalWidth || 320;
  const baseHeight = rect.height || img.naturalHeight || 200;
  wrapper.style.width = `${Math.max(baseWidth, IMAGE_MIN_WIDTH)}px`;
  wrapper.style.height = `${Math.max(baseHeight, IMAGE_MIN_HEIGHT)}px`;

  img.style.objectFit = img.style.objectFit || "contain";
  img.style.width = "100%";
  img.style.height = "100%";
  img.draggable = false;
  img.removeAttribute("width");
  img.removeAttribute("height");
  const parent = img.parentNode;
  if (!parent) return wrapper;
  parent.insertBefore(wrapper, img);
  wrapper.appendChild(img);

  if (img.naturalWidth && img.naturalHeight) {
    wrapper.dataset.ratio = (img.naturalHeight / img.naturalWidth).toFixed(4);
    const width = parseFloat(wrapper.style.width || "320");
    if (!Number.isNaN(width)) {
      wrapper.style.height = `${Math.max(IMAGE_MIN_HEIGHT, Math.round(width * parseFloat(wrapper.dataset.ratio)))}px`;
    }
  } else {
    img.onload = () => {
      if (!img.naturalWidth || !img.naturalHeight) return;
      wrapper.dataset.ratio = (img.naturalHeight / img.naturalWidth).toFixed(4);
      const width = parseFloat(wrapper.style.width || "320");
      if (!Number.isNaN(width)) {
        wrapper.style.height = `${Math.max(IMAGE_MIN_HEIGHT, Math.round(width * parseFloat(wrapper.dataset.ratio)))}px`;
      }
    };
  }

  return wrapper;
}

async function resolvePendingImages(contentHtml, project, activePendingIds = null, resolvedByPendingId = null) {
  if (!state.pendingImages.size && !(resolvedByPendingId instanceof Map && resolvedByPendingId.size)) {
    return contentHtml;
  }
  const container = document.createElement("div");
  container.innerHTML = contentHtml;
  const pending = Array.from(container.querySelectorAll("img[data-pending-id]"));
  const activeIds = new Set(pending.map((img) => img.dataset.pendingId).filter(Boolean));
  const scopedActiveIds = activePendingIds instanceof Set ? activePendingIds : activeIds;

  state.pendingImages.forEach((pendingInfo, pendingId) => {
    if (scopedActiveIds.has(pendingId)) return;
    if (pendingInfo && pendingInfo.previewUrl) {
      URL.revokeObjectURL(pendingInfo.previewUrl);
    }
    state.pendingImages.delete(pendingId);
  });

  for (const img of pending) {
    const pendingId = img.dataset.pendingId;
    if (!pendingId) continue;
    if (resolvedByPendingId instanceof Map && resolvedByPendingId.has(pendingId)) {
      const resolvedSrc = resolvedByPendingId.get(pendingId);
      img.setAttribute("src", resolvedSrc);
      img.dataset.siteSrc = resolvedSrc;
      img.removeAttribute("data-pending-id");
      continue;
    }
    const pendingInfo = state.pendingImages.get(pendingId);
    if (!pendingInfo) continue;
    const src = await saveDetailImage(project, pendingInfo.file);
    if (src) {
      img.setAttribute("src", src);
      img.dataset.siteSrc = src;
      img.removeAttribute("data-pending-id");
      if (resolvedByPendingId instanceof Map) {
        resolvedByPendingId.set(pendingId, src);
      }
      URL.revokeObjectURL(pendingInfo.previewUrl);
      state.pendingImages.delete(pendingId);
    }
  }

  if (state.pendingImages.size) {
    setStatus(t("status.error").replace("{message}", "Some images failed to save"), "error");
  }

  return container.innerHTML;
}

async function resolvePendingFiles(contentHtml, project, activePendingIds = null, resolvedByPendingId = null) {
  if (!state.pendingFiles.size && !(resolvedByPendingId instanceof Map && resolvedByPendingId.size)) {
    return contentHtml;
  }
  const container = document.createElement("div");
  container.innerHTML = contentHtml;
  const pending = Array.from(container.querySelectorAll("a[data-pending-file-id]"));
  const activeIds = new Set(pending.map((link) => link.dataset.pendingFileId).filter(Boolean));
  const scopedActiveIds = activePendingIds instanceof Set ? activePendingIds : activeIds;

  state.pendingFiles.forEach((pendingInfo, pendingId) => {
    if (scopedActiveIds.has(pendingId)) return;
    if (pendingInfo && pendingInfo.previewUrl) {
      URL.revokeObjectURL(pendingInfo.previewUrl);
    }
    state.pendingFiles.delete(pendingId);
  });

  for (const link of pending) {
    const pendingId = link.dataset.pendingFileId;
    if (!pendingId) continue;
    if (resolvedByPendingId instanceof Map && resolvedByPendingId.has(pendingId)) {
      const resolvedHref = resolvedByPendingId.get(pendingId);
      link.setAttribute("href", resolvedHref);
      link.dataset.siteHref = resolvedHref;
      link.removeAttribute("data-pending-file-id");
      continue;
    }
    const pendingInfo = state.pendingFiles.get(pendingId);
    if (!pendingInfo) continue;
    const href = await saveDetailFile(project, pendingInfo.file);
    if (href) {
      link.setAttribute("href", href);
      link.dataset.siteHref = href;
      link.setAttribute("download", pendingInfo.name || pendingInfo.file.name || "");
      link.removeAttribute("data-pending-file-id");
      if (resolvedByPendingId instanceof Map) {
        resolvedByPendingId.set(pendingId, href);
      }
      URL.revokeObjectURL(pendingInfo.previewUrl);
      state.pendingFiles.delete(pendingId);
    }
  }

  if (state.pendingFiles.size) {
    setStatus(t("status.error").replace("{message}", "Some files failed to save"), "error");
  }

  return container.innerHTML;
}

async function resolveLegacyAssetLinks(contentHtml, project) {
  const container = document.createElement("div");
  container.innerHTML = contentHtml;
  const images = Array.from(container.querySelectorAll("img"));
  if (!images.length) return contentHtml;

  let index = 1;
  for (const img of images) {
    const rawSrc = (img.getAttribute("src") || "").split("?")[0];
    if (rawSrc.startsWith("assets/")) {
      continue;
    }
    if (!rawSrc.startsWith("../assets/projects/")) {
      continue;
    }
    const fileName = rawSrc.replace("../assets/projects/", "");
    const file = await readBinaryFile(contentPathSegments("assets", "projects", fileName));
    if (!file) continue;
    const ext = getFileExtension(fileName);
    const newName = `${project.id}-${String(index).padStart(2, "0")}.${ext}`;
    const handle = await getFileHandle(state.rootHandle, [...getDetailFolder(project), "assets", newName], true);
    await writeFile(handle, file);
    img.setAttribute("src", `assets/${newName}`);
    index += 1;
  }

  return container.innerHTML;
}

function insertNodeAtCursor(node) {
  const selection = window.getSelection();
  let range = getUsableRange(selection);
  const columnsRange = getColumnsEditInsertionRange("detail", elements.detailEditor);
  if (columnsRange) {
    const activeBlock = state.columnsEditBlock;
    if (!(activeBlock instanceof HTMLElement) || !isRangeInsideNode(range, activeBlock)) {
      range = columnsRange;
    }
  }
  if (!range) {
    elements.detailEditor.appendChild(node);
    node.scrollIntoView({ block: "nearest" });
    queueLineNumberRefresh();
    return;
  }
  range.deleteContents();
  range.insertNode(node);
  if (!elements.detailEditor.contains(node)) {
    elements.detailEditor.appendChild(node);
  }
  range.setStartAfter(node);
  range.setEndAfter(node);
  selection.removeAllRanges();
  selection.addRange(range);
  elements.detailEditor.focus();
  node.scrollIntoView({ block: "nearest" });
  queueLineNumberRefresh();
}

function saveSelectionRange() {
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) return;
  const range = selection.getRangeAt(0);
  if (elements.detailEditor.contains(range.startContainer)) {
    state.savedRange = range.cloneRange();
  }
}

function getUsableRange(selection) {
  if (selection && selection.rangeCount > 0) {
    const range = selection.getRangeAt(0);
    if (elements.detailEditor.contains(range.startContainer)) {
      return range;
    }
  }
  if (state.savedRange && elements.detailEditor.contains(state.savedRange.startContainer)) {
    return state.savedRange;
  }
  return null;
}

function isWebPreviewWrapper(wrapper) {
  return wrapper instanceof HTMLElement && wrapper.classList.contains("web-preview-wrapper");
}

function syncDetailFloatMediaActions(wrapper) {
  const isWebWrapper = isWebPreviewWrapper(wrapper);
  if (elements.replaceImage) {
    elements.replaceImage.hidden = isWebWrapper;
    elements.replaceImage.disabled = isWebWrapper;
  }
  if (elements.toggleCrop) {
    elements.toggleCrop.hidden = isWebWrapper;
    elements.toggleCrop.disabled = isWebWrapper;
    if (isWebWrapper) {
      elements.toggleCrop.classList.remove("is-active");
    }
  }
}

function showImageControls(wrapper) {
  if (!wrapper) return;
  finishImageResizeSession();
  finishImageCropSession();
  ensureImageWrapperDefaults(wrapper);
  const webWrapper = isWebPreviewWrapper(wrapper);
  if (state.selectedImage && state.selectedImage !== wrapper) {
    if (state.selectedImage.classList.contains("is-cropping")) {
      deactivateImageCropMode(state.selectedImage);
    }
    removeImageResizeHandles(state.selectedImage);
    removeImageCropHandles(state.selectedImage);
    state.selectedImage.classList.remove("is-cropping");
    state.selectedImage.classList.remove("is-selected");
  }
  state.selectedImage = wrapper;
  wrapper.classList.add("is-selected");
  if (webWrapper && wrapper.classList.contains("is-cropping")) {
    wrapper.classList.remove("is-cropping");
  }
  if (!webWrapper && wrapper.classList.contains("is-cropping")) {
    ensureImageCropHandles(wrapper);
  } else {
    ensureImageResizeHandles(wrapper);
  }
  elements.detailFloat.hidden = false;
  positionFloat(wrapper);
  syncImageInputs(wrapper);
  syncImageAlignmentButtons(wrapper);
  syncCropButtonState(wrapper);
  syncDetailFloatMediaActions(wrapper);
}

function hideImageControls() {
  finishImageResizeSession();
  finishImageCropSession();
  elements.detailFloat.hidden = true;
  if (state.selectedImage) {
    if (state.selectedImage.classList.contains("is-cropping")) {
      deactivateImageCropMode(state.selectedImage);
    }
    removeImageResizeHandles(state.selectedImage);
    removeImageCropHandles(state.selectedImage);
    state.selectedImage.classList.remove("is-selected");
  }
  state.selectedImage = null;
  syncImageAlignmentButtons(null);
  syncCropButtonState(null);
  syncDetailFloatMediaActions(null);
}

function positionFloat(wrapper) {
  if (!(wrapper instanceof HTMLElement) || !elements.detailFloat) return;
  if (!wrapper.isConnected || !elements.detailEditor.contains(wrapper)) {
    hideImageControls();
    return;
  }
  const float = elements.detailFloat;
  const wrapperRect = wrapper.getBoundingClientRect();

  // Reset first so measurement is stable.
  float.style.left = "12px";
  float.style.top = "12px";
  float.style.transform = "none";
  const floatRect = float.getBoundingClientRect();

  const preferredLeft = wrapperRect.left + (wrapperRect.width - floatRect.width) / 2;
  const maxLeft = Math.max(12, window.innerWidth - floatRect.width - 12);
  const left = Math.min(Math.max(12, Math.round(preferredLeft)), maxLeft);

  let top = Math.round(wrapperRect.top - floatRect.height - 10);
  if (top < 12) {
    top = Math.round(wrapperRect.bottom + 10);
  }
  const maxTop = Math.max(12, window.innerHeight - floatRect.height - 12);
  top = Math.min(Math.max(12, top), maxTop);

  float.style.left = `${left}px`;
  float.style.top = `${top}px`;
  float.style.transform = "none";
}

function syncImageInputs(wrapper, options = {}) {
  const rect = wrapper.getBoundingClientRect();
  const width = Math.round(rect.width);
  const height = Math.round(rect.height);
  const preserveField = String(options.preserveField || "");
  const keepWidthValue = preserveField === "width" && document.activeElement === elements.imageWidth;
  const keepHeightValue = preserveField === "height" && document.activeElement === elements.imageHeight;
  if (!keepWidthValue) {
    elements.imageWidth.value = width > 0 ? width : "";
  }
  if (!keepHeightValue) {
    elements.imageHeight.value = height > 0 ? height : "";
  }
}

function getImageAspectRatio(wrapper) {
  const raw = Number.parseFloat(wrapper?.dataset?.ratio || "");
  if (Number.isFinite(raw) && raw > 0) {
    return raw;
  }
  const img = wrapper?.querySelector("img");
  if (img instanceof HTMLImageElement && img.naturalWidth > 0 && img.naturalHeight > 0) {
    const ratio = img.naturalHeight / img.naturalWidth;
    wrapper.dataset.ratio = ratio.toFixed(4);
    return ratio;
  }
  const rect = wrapper?.getBoundingClientRect?.();
  if (rect && rect.width > 0 && rect.height > 0) {
    return rect.height / rect.width;
  }
  return 200 / 320;
}

function clampImageWidth(wrapper, width) {
  const fallback = Number.isFinite(width) ? width : IMAGE_MIN_WIDTH;
  const editorWidth = elements.detailEditor?.clientWidth || 0;
  const maxWidth = editorWidth > 0
    ? Math.max(IMAGE_MIN_WIDTH, editorWidth - 8)
    : Math.max(IMAGE_MIN_WIDTH, fallback);
  return Math.max(IMAGE_MIN_WIDTH, Math.min(maxWidth, fallback));
}

function setWrapperSizeByWidth(wrapper, width) {
  if (!(wrapper instanceof HTMLElement)) return;
  const nextWidth = clampImageWidth(wrapper, width);
  const isCropped = String(wrapper.dataset.cropped || "") === "true";
  if (isCropped) {
    const currentRect = wrapper.getBoundingClientRect();
    const currentWidth = Math.max(1, currentRect.width || Number.parseFloat(wrapper.style.width || "1") || 1);
    const currentHeight = Math.max(1, currentRect.height || Number.parseFloat(wrapper.style.height || "1") || 1);
    const scale = nextWidth / currentWidth;
    const nextHeight = Math.max(IMAGE_MIN_HEIGHT, Math.round(currentHeight * scale));

    const img = wrapper.querySelector("img");
    if (img instanceof HTMLImageElement) {
      const currentImgWidth = Math.max(1, Number.parseFloat(img.style.width || `${currentWidth}`) || currentWidth);
      const currentImgHeight = Math.max(1, Number.parseFloat(img.style.height || `${currentHeight}`) || currentHeight);
      const currentLeft = Number.parseFloat(img.style.left || "0") || 0;
      const currentTop = Number.parseFloat(img.style.top || "0") || 0;
      img.style.width = `${Math.round(currentImgWidth * scale)}px`;
      img.style.height = `${Math.round(currentImgHeight * scale)}px`;
      img.style.left = `${Math.round(currentLeft * scale)}px`;
      img.style.top = `${Math.round(currentTop * scale)}px`;
      img.style.position = "absolute";
      img.style.maxWidth = "none";
    }

    wrapper.style.width = `${nextWidth}px`;
    wrapper.style.height = `${nextHeight}px`;
    wrapper.style.overflow = "hidden";
    wrapper.dataset.lockRatio = "true";
    wrapper.dataset.ratio = (nextHeight / Math.max(1, nextWidth)).toFixed(4);
    return;
  }

  const ratio = getImageAspectRatio(wrapper);
  const nextHeight = Math.max(IMAGE_MIN_HEIGHT, Math.round(nextWidth * ratio));
  wrapper.style.width = `${nextWidth}px`;
  wrapper.style.height = `${nextHeight}px`;
}

function applyImageAlignment(wrapper, align) {
  if (!(wrapper instanceof HTMLElement)) return;
  wrapper.classList.remove("align-left", "align-center", "align-right");
  if (align === "right") {
    wrapper.classList.add("align-right");
    return;
  }
  if (align === "center") {
    wrapper.classList.add("align-center");
    return;
  }
  wrapper.classList.add("align-left");
}

function getImageAlignment(wrapper) {
  if (!(wrapper instanceof HTMLElement)) return "";
  if (wrapper.classList.contains("align-right")) return "right";
  if (wrapper.classList.contains("align-center")) return "center";
  return "left";
}

function syncImageAlignmentButtons(wrapper) {
  const current = getImageAlignment(wrapper);
  if (elements.imageAlignLeft) {
    elements.imageAlignLeft.classList.toggle("is-active", current === "left");
  }
  if (elements.imageAlignCenter) {
    elements.imageAlignCenter.classList.toggle("is-active", current === "center");
  }
  if (elements.imageAlignRight) {
    elements.imageAlignRight.classList.toggle("is-active", current === "right");
  }
}

function setSelectedImageAlignment(align) {
  const wrapper = state.selectedImage;
  if (!wrapper) return;
  applyImageAlignment(wrapper, align);
  positionFloat(wrapper);
  syncImageAlignmentButtons(wrapper);
}

function removeImageResizeHandles(wrapper) {
  if (!(wrapper instanceof HTMLElement)) return;
  wrapper.querySelectorAll(".image-resize-handle").forEach((node) => node.remove());
}

function ensureImageResizeHandles(wrapper) {
  if (!(wrapper instanceof HTMLElement)) return;
  if (wrapper.classList.contains("is-cropping")) return;
  removeImageResizeHandles(wrapper);
  IMAGE_RESIZE_HANDLES.forEach((handleName) => {
    const handle = document.createElement("span");
    handle.className = `image-resize-handle is-${handleName}`;
    handle.dataset.handle = handleName;
    handle.setAttribute("contenteditable", "false");
    wrapper.appendChild(handle);
  });
}

function removeImageCropHandles(wrapper) {
  if (!(wrapper instanceof HTMLElement)) return;
  wrapper.querySelectorAll(".image-crop-handle").forEach((node) => node.remove());
}

function ensureImageCropHandles(wrapper) {
  if (!(wrapper instanceof HTMLElement)) return;
  removeImageCropHandles(wrapper);
  IMAGE_CROP_HANDLES.forEach((handleName) => {
    const handle = document.createElement("span");
    handle.className = `image-crop-handle is-${handleName}`;
    handle.dataset.handle = handleName;
    handle.setAttribute("contenteditable", "false");
    wrapper.appendChild(handle);
  });
}

function syncCropButtonState(wrapper) {
  if (!elements.toggleCrop) return;
  const active = wrapper instanceof HTMLElement && wrapper.classList.contains("is-cropping");
  elements.toggleCrop.classList.toggle("is-active", active);
}

function activateImageCropMode(wrapper) {
  if (!(wrapper instanceof HTMLElement)) return;
  const img = wrapper.querySelector("img");
  if (!(img instanceof HTMLImageElement)) return;
  finishImageResizeSession();
  finishImageCropSession();
  ensureImageWrapperDefaults(wrapper);

  const wrapperRect = wrapper.getBoundingClientRect();
  const wrapperWidth = Math.max(IMAGE_MIN_CROP_WIDTH, Math.round(wrapperRect.width || Number.parseFloat(wrapper.style.width || "320")));
  const wrapperHeight = Math.max(IMAGE_MIN_CROP_HEIGHT, Math.round(wrapperRect.height || Number.parseFloat(wrapper.style.height || "200")));
  const isCropped = String(wrapper.dataset.cropped || "") === "true";

  if (!isCropped) {
    img.style.position = "absolute";
    img.style.left = "0px";
    img.style.top = "0px";
    img.style.width = `${wrapperWidth}px`;
    img.style.height = `${wrapperHeight}px`;
    img.style.maxWidth = "none";
  } else {
    img.style.position = "absolute";
    img.style.left = img.style.left || "0px";
    img.style.top = img.style.top || "0px";
    img.style.width = img.style.width || `${wrapperWidth}px`;
    img.style.height = img.style.height || `${wrapperHeight}px`;
    img.style.maxWidth = "none";
  }

  wrapper.style.width = `${wrapperWidth}px`;
  wrapper.style.height = `${wrapperHeight}px`;
  wrapper.style.overflow = "hidden";
  wrapper.classList.add("is-cropping");
  wrapper.dataset.cropMode = "true";
  wrapper.dataset.cropped = "true";
  wrapper.dataset.lockRatio = "true";
  wrapper.dataset.ratio = (wrapperHeight / Math.max(1, wrapperWidth)).toFixed(4);
  removeImageResizeHandles(wrapper);
  ensureImageCropHandles(wrapper);
  syncCropButtonState(wrapper);
  positionFloat(wrapper);
}

function deactivateImageCropMode(wrapper) {
  if (!(wrapper instanceof HTMLElement)) return;
  finishImageCropSession();
  wrapper.classList.remove("is-cropping");
  wrapper.dataset.cropMode = "false";
  wrapper.dataset.cropped = "true";
  wrapper.style.overflow = "hidden";
  const rect = wrapper.getBoundingClientRect();
  if (rect.width > 0 && rect.height > 0) {
    wrapper.dataset.ratio = (rect.height / Math.max(1, rect.width)).toFixed(4);
  }
  removeImageCropHandles(wrapper);
  ensureImageResizeHandles(wrapper);
  syncCropButtonState(wrapper);
  syncImageInputs(wrapper);
  positionFloat(wrapper);
}

function applyPendingImageCropFrame() {
  state.imageCropRaf = 0;
  const session = state.imageCropSession;
  if (!session || !(session.wrapper instanceof HTMLElement) || !(session.img instanceof HTMLImageElement)) return;
  const cropRect = session.pendingCropRect;
  session.wrapper.style.width = `${Math.round(cropRect.width)}px`;
  session.wrapper.style.height = `${Math.round(cropRect.height)}px`;
  session.img.style.left = `${Math.round(-cropRect.x)}px`;
  session.img.style.top = `${Math.round(-cropRect.y)}px`;
  session.img.style.width = `${Math.round(session.imageRect.width)}px`;
  session.img.style.height = `${Math.round(session.imageRect.height)}px`;
  if (state.selectedImage === session.wrapper) {
    syncImageInputs(session.wrapper);
    positionFloat(session.wrapper);
  }
}

function clampCropRect(cropRect, imageRect) {
  const next = {
    x: cropRect.x,
    y: cropRect.y,
    width: cropRect.width,
    height: cropRect.height
  };

  next.width = Math.max(IMAGE_MIN_CROP_WIDTH, Math.min(next.width, imageRect.width));
  next.height = Math.max(IMAGE_MIN_CROP_HEIGHT, Math.min(next.height, imageRect.height));
  next.x = Math.max(0, Math.min(next.x, imageRect.width - next.width));
  next.y = Math.max(0, Math.min(next.y, imageRect.height - next.height));
  return next;
}

function getPointerPoint(event) {
  const x = Number.isFinite(event?.clientX) ? event.clientX : 0;
  const y = Number.isFinite(event?.clientY) ? event.clientY : 0;
  return { x, y };
}

function isPointerEventInstance(event) {
  return typeof PointerEvent !== "undefined" && event instanceof PointerEvent;
}

function handleImageCropMove(event) {
  const session = state.imageCropSession;
  if (!session) return;
  if (session.usesPointer) {
    if (!isPointerEventInstance(event)) return;
    if (event.pointerId !== session.pointerId) return;
  }
  if (event.cancelable) event.preventDefault();

  const point = getPointerPoint(event);
  const dx = point.x - session.startX;
  const dy = point.y - session.startY;
  const nextRect = {
    ...session.startCropRect
  };

  if (session.handle.includes("w")) {
    nextRect.x = session.startCropRect.x + dx;
    nextRect.width = session.startCropRect.width - dx;
  }
  if (session.handle.includes("e")) {
    nextRect.width = session.startCropRect.width + dx;
  }
  if (session.handle.includes("n")) {
    nextRect.y = session.startCropRect.y + dy;
    nextRect.height = session.startCropRect.height - dy;
  }
  if (session.handle.includes("s")) {
    nextRect.height = session.startCropRect.height + dy;
  }

  session.pendingCropRect = clampCropRect(nextRect, session.imageRect);
  if (state.imageCropRaf) return;
  state.imageCropRaf = window.requestAnimationFrame(applyPendingImageCropFrame);
}

function finishImageCropSession() {
  const session = state.imageCropSession;
  if (!session) return;
  if (session.usesPointer) {
    window.removeEventListener("pointermove", handleImageCropMove, true);
    window.removeEventListener("pointerup", finishImageCropSession, true);
    window.removeEventListener("pointercancel", finishImageCropSession, true);
  } else {
    window.removeEventListener("mousemove", handleImageCropMove, true);
    window.removeEventListener("mouseup", finishImageCropSession, true);
  }
  window.removeEventListener("blur", finishImageCropSession, true);

  if (state.imageCropRaf) {
    window.cancelAnimationFrame(state.imageCropRaf);
    state.imageCropRaf = 0;
    applyPendingImageCropFrame();
  }

  if (session.wrapper instanceof HTMLElement) {
    session.wrapper.dataset.ratio = (
      Number.parseFloat(session.wrapper.style.height || "1")
      / Math.max(1, Number.parseFloat(session.wrapper.style.width || "1"))
    ).toFixed(4);
  }
  state.imageCropSession = null;
  queueLineNumberRefresh();
}

function startImageCropFromHandle(wrapper, handleName, event) {
  if (!(wrapper instanceof HTMLElement)) return;
  if (!wrapper.classList.contains("is-cropping")) return;
  const img = wrapper.querySelector("img");
  if (!(img instanceof HTMLImageElement)) return;
  const normalizedHandle = IMAGE_CROP_HANDLES.includes(handleName) ? handleName : "se";
  const point = getPointerPoint(event);
  const usesPointer = isPointerEventInstance(event);

  const cropRect = wrapper.getBoundingClientRect();
  const imgRect = img.getBoundingClientRect();
  const imageRect = {
    width: Math.max(IMAGE_MIN_CROP_WIDTH, Math.round(imgRect.width || Number.parseFloat(img.style.width || "1"))),
    height: Math.max(IMAGE_MIN_CROP_HEIGHT, Math.round(imgRect.height || Number.parseFloat(img.style.height || "1")))
  };
  const startCropRect = {
    x: Math.max(0, Math.round(-Number.parseFloat(img.style.left || "0"))),
    y: Math.max(0, Math.round(-Number.parseFloat(img.style.top || "0"))),
    width: Math.max(IMAGE_MIN_CROP_WIDTH, Math.round(cropRect.width)),
    height: Math.max(IMAGE_MIN_CROP_HEIGHT, Math.round(cropRect.height))
  };

  finishImageCropSession();
  state.imageCropSession = {
    wrapper,
    img,
    handle: normalizedHandle,
    startX: point.x,
    startY: point.y,
    imageRect,
    startCropRect,
    pendingCropRect: startCropRect,
    usesPointer,
    pointerId: usesPointer ? event.pointerId : null
  };
  if (usesPointer) {
    window.addEventListener("pointermove", handleImageCropMove, true);
    window.addEventListener("pointerup", finishImageCropSession, true);
    window.addEventListener("pointercancel", finishImageCropSession, true);
  } else {
    window.addEventListener("mousemove", handleImageCropMove, true);
    window.addEventListener("mouseup", finishImageCropSession, true);
  }
  window.addEventListener("blur", finishImageCropSession, true);
  if (event.cancelable) event.preventDefault();
  event.stopPropagation();
}

function applyPendingImageResizeFrame() {
  state.imageResizeRaf = 0;
  const session = state.imageResizeSession;
  if (!session || !(session.wrapper instanceof HTMLElement)) return;
  if (String(session.wrapper.dataset.cropped || "") === "true") {
    setWrapperSizeByWidth(session.wrapper, session.pendingWidth);
  } else {
    session.wrapper.style.width = `${Math.round(session.pendingWidth)}px`;
    session.wrapper.style.height = `${Math.round(session.pendingHeight)}px`;
  }
  if (state.selectedImage === session.wrapper) {
    syncImageInputs(session.wrapper);
    positionFloat(session.wrapper);
  }
}

function handleImageResizeMove(event) {
  const session = state.imageResizeSession;
  if (!session || !(session.wrapper instanceof HTMLElement)) return;
  if (session.usesPointer) {
    if (!isPointerEventInstance(event)) return;
    if (event.pointerId !== session.pointerId) return;
  }
  if (event.cancelable) event.preventDefault();

  const point = getPointerPoint(event);
  const dx = point.x - session.startX;
  const dy = point.y - session.startY;
  const horizontal = session.handle.includes("e") ? dx : -dx;
  const verticalToWidth = (session.handle.includes("s") ? dy : -dy) / session.ratio;
  const widthByX = session.startWidth + horizontal;
  const widthByY = session.startWidth + verticalToWidth;
  const dominantWidth = Math.abs(horizontal) >= Math.abs(verticalToWidth) ? widthByX : widthByY;
  const nextWidth = clampImageWidth(session.wrapper, dominantWidth);
  const nextHeight = Math.max(IMAGE_MIN_HEIGHT, Math.round(nextWidth * session.ratio));

  session.pendingWidth = nextWidth;
  session.pendingHeight = nextHeight;
  if (state.imageResizeRaf) return;
  state.imageResizeRaf = window.requestAnimationFrame(applyPendingImageResizeFrame);
}

function finishImageResizeSession() {
  const session = state.imageResizeSession;
  if (!session) return;
  if (session.usesPointer) {
    window.removeEventListener("pointermove", handleImageResizeMove, true);
    window.removeEventListener("pointerup", finishImageResizeSession, true);
    window.removeEventListener("pointercancel", finishImageResizeSession, true);
  } else {
    window.removeEventListener("mousemove", handleImageResizeMove, true);
    window.removeEventListener("mouseup", finishImageResizeSession, true);
  }
  window.removeEventListener("blur", finishImageResizeSession, true);

  if (state.imageResizeRaf) {
    window.cancelAnimationFrame(state.imageResizeRaf);
    state.imageResizeRaf = 0;
    applyPendingImageResizeFrame();
  }

  if (session.wrapper instanceof HTMLElement) {
    session.wrapper.classList.remove("is-resizing");
    if (state.selectedImage === session.wrapper) {
      syncImageInputs(session.wrapper);
      positionFloat(session.wrapper);
    }
  }
  state.imageResizeSession = null;
  queueLineNumberRefresh();
}

function startImageResizeFromHandle(wrapper, handleName, event) {
  if (!(wrapper instanceof HTMLElement)) return;
  if (wrapper.classList.contains("is-cropping")) return;
  const normalizedHandle = IMAGE_RESIZE_HANDLES.includes(handleName) ? handleName : "se";
  const point = getPointerPoint(event);
  const usesPointer = isPointerEventInstance(event);
  showImageControls(wrapper);
  const rect = wrapper.getBoundingClientRect();
  const ratio = getImageAspectRatio(wrapper);

  finishImageResizeSession();
  state.imageResizeSession = {
    wrapper,
    handle: normalizedHandle,
    ratio,
    startX: point.x,
    startY: point.y,
    startWidth: rect.width,
    startHeight: rect.height,
    pendingWidth: rect.width,
    pendingHeight: rect.height,
    usesPointer,
    pointerId: usesPointer ? event.pointerId : null
  };
  wrapper.classList.add("is-resizing");

  if (usesPointer) {
    window.addEventListener("pointermove", handleImageResizeMove, true);
    window.addEventListener("pointerup", finishImageResizeSession, true);
    window.addEventListener("pointercancel", finishImageResizeSession, true);
  } else {
    window.addEventListener("mousemove", handleImageResizeMove, true);
    window.addEventListener("mouseup", finishImageResizeSession, true);
  }
  window.addEventListener("blur", finishImageResizeSession, true);
  if (event.cancelable) event.preventDefault();
  event.stopPropagation();
}

function updateSelectedImage(source) {
  const wrapper = state.selectedImage;
  if (!wrapper) return;
  if (wrapper.classList.contains("is-cropping")) return;
  const ratio = getImageAspectRatio(wrapper);
  const lockRatio = wrapper.dataset.lockRatio !== "false";
  if (source === "width") {
    const rawWidth = String(elements.imageWidth?.value || "").trim();
    if (!rawWidth) return;
    const width = Number.parseInt(rawWidth, 10);
    if (!Number.isFinite(width) || width <= 0) return;
    setWrapperSizeByWidth(wrapper, width);
    if (lockRatio) {
      elements.imageHeight.value = Math.round(clampImageWidth(wrapper, width) * ratio);
    }
    syncImageInputs(wrapper, { preserveField: "width" });
    positionFloat(wrapper);
    return;
  }

  if (source === "height") {
    const rawHeight = String(elements.imageHeight?.value || "").trim();
    if (!rawHeight) return;
    const height = Number.parseInt(rawHeight, 10);
    if (!Number.isFinite(height) || height <= 0) return;
    const nextWidth = lockRatio
      ? Math.max(IMAGE_MIN_WIDTH, Math.round(height / ratio))
      : Math.max(IMAGE_MIN_WIDTH, Math.round((wrapper.getBoundingClientRect().width || IMAGE_MIN_WIDTH)));
    setWrapperSizeByWidth(wrapper, nextWidth);
    if (lockRatio) {
      elements.imageWidth.value = Math.round(clampImageWidth(wrapper, nextWidth));
    }
    syncImageInputs(wrapper, { preserveField: "height" });
    positionFloat(wrapper);
  }
}

function toggleCrop() {
  const wrapper = state.selectedImage;
  if (!wrapper) return;
  if (isWebPreviewWrapper(wrapper)) return;
  if (wrapper.classList.contains("is-cropping")) {
    deactivateImageCropMode(wrapper);
  } else {
    activateImageCropMode(wrapper);
  }
}

async function saveDetailImage(project, file) {
  try {
    const ext = getFileExtension(file.name);
    const filename = `${Date.now()}.${ext}`;
    const handle = await getFileHandle(state.rootHandle, [...getDetailFolder(project), "assets", filename], true);
    await writeFile(handle, file);
    return `assets/${filename}`;
  } catch (error) {
    setStatus(t("status.error").replace("{message}", error.message), "error");
    return null;
  }
}

async function saveDetailFile(project, file) {
  try {
    const originalName = String(file.name || "file").trim();
    const ext = getFileExtension(originalName);
    const baseName = originalName.replace(/\.[^/.]+$/, "") || "file";
    const safeBaseName = baseName
      .replace(/[^a-zA-Z0-9_-]/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "") || "file";
    const filename = `${Date.now()}-${safeBaseName}.${ext}`;
    const handle = await getFileHandle(state.rootHandle, [...getDetailFolder(project), "assets", filename], true);
    await writeFile(handle, file);
    return `assets/${filename}`;
  } catch (error) {
    setStatus(t("status.error").replace("{message}", error.message), "error");
    return null;
  }
}

function clearPendingMedia() {
  state.pendingImages.forEach((item) => {
    if (item && item.previewUrl) {
      URL.revokeObjectURL(item.previewUrl);
    }
  });
  state.pendingFiles.forEach((item) => {
    if (item && item.previewUrl) {
      URL.revokeObjectURL(item.previewUrl);
    }
  });
  state.pendingImages.clear();
  state.pendingFiles.clear();
}

function resolveWebPreviewSourceForContext(rawSource, project, mode = "preview") {
  const source = String(rawSource || "").trim().replace(/\\/g, "/");
  if (!source) return "";
  if (isExternalWebPreviewSource(source)) return source;
  if (source.startsWith("./assets/")) {
    const normalized = source.slice(2);
    if (mode === "preview" && project) {
      return `../contents/project_details/${project.id}/${normalized}`;
    }
    return normalized;
  }
  if (source.startsWith("assets/") && project) {
    if (mode === "preview") {
      return `../contents/project_details/${project.id}/${source}`;
    }
    return source;
  }
  if (source.startsWith("contents/")) {
    if (mode === "preview") return source;
    return `../../${source.slice("contents/".length)}`;
  }
  return source;
}

function getWebPreviewSourceFromWrapper(wrapper) {
  if (!(wrapper instanceof HTMLElement)) return "";
  const raw = String(wrapper.dataset.webPreviewSrc || "").trim();
  if (raw) return raw;
  const link = wrapper.querySelector("a[href]");
  if (link instanceof HTMLAnchorElement) {
    return String(link.getAttribute("href") || "").trim();
  }
  return "";
}

function applyResponsiveWebPreviewWrapperStyle(wrapper) {
  if (!(wrapper instanceof HTMLElement)) return;
  const rawWidth = Number.parseFloat(wrapper.style.width || "");
  const rawHeight = Number.parseFloat(wrapper.style.height || "");
  const width = Number.isFinite(rawWidth) && rawWidth > 0 ? rawWidth : 480;
  const height = Number.isFinite(rawHeight) && rawHeight > 0 ? rawHeight : 300;
  wrapper.style.width = `min(100%, ${Math.round(width)}px)`;
  wrapper.style.maxWidth = "100%";
  wrapper.style.height = "auto";
  wrapper.style.aspectRatio = `${Math.max(1, Math.round(width))} / ${Math.max(1, Math.round(height))}`;
}

function convertWebPreviewWrappersForPreview(container, project) {
  if (!(container instanceof HTMLElement)) return;
  container.querySelectorAll(".web-preview-wrapper").forEach((wrapper) => {
    if (!(wrapper instanceof HTMLElement)) return;
    const rawSource = getWebPreviewSourceFromWrapper(wrapper);
    const resolvedSource = resolveWebPreviewSourceForContext(rawSource, project, "preview");
    if (!resolvedSource) return;
    const absoluteSource = toAbsoluteAssetUrl(resolvedSource);

    wrapper.dataset.webPreviewSrc = rawSource;
    applyResponsiveWebPreviewWrapperStyle(wrapper);
    wrapper.innerHTML = "";
    const frame = document.createElement("iframe");
    frame.className = "web-preview-frame";
    frame.setAttribute("src", absoluteSource || resolvedSource);
    frame.setAttribute("loading", "lazy");
    frame.setAttribute("referrerpolicy", "no-referrer-when-downgrade");
    frame.setAttribute("allowfullscreen", "");
    wrapper.appendChild(frame);
  });
}

function normalizeContentForPreview(contentHtml, project) {
  const container = document.createElement("div");
  container.innerHTML = contentHtml;

  container.querySelectorAll("img").forEach((img) => {
    const src = (img.getAttribute("src") || "").split("?")[0];
    if (!src) return;
    if (src.startsWith("assets/") && project) {
      img.setAttribute("src", `../contents/project_details/${project.id}/${src}`);
    }
    const absoluteSrc = toAbsoluteAssetUrl(img.getAttribute("src") || "");
    if (absoluteSrc) {
      img.setAttribute("src", absoluteSrc);
    }
  });

  convertWebPreviewWrappersForPreview(container, project);

  container.querySelectorAll("a[href]").forEach((link) => {
    const href = (link.getAttribute("href") || "").split("?")[0];
    if (!href) return;
    if (href.startsWith("assets/") && project) {
      link.setAttribute("href", `../contents/project_details/${project.id}/${href}`);
    }
    const absoluteHref = toAbsoluteAssetUrl(link.getAttribute("href") || "");
    if (absoluteHref) {
      link.setAttribute("href", absoluteHref);
    }
  });

  return container.innerHTML;
}

function normalizeAboutContentForPreview(contentHtml) {
  const container = document.createElement("div");
  container.innerHTML = contentHtml;

  container.querySelectorAll("img").forEach((img) => {
    const src = (img.getAttribute("src") || "").split("?")[0];
    if (!src) return;
    if (src.startsWith("assets/")) {
      img.setAttribute("src", `../contents/aboutme/${src}`);
    } else if (src.startsWith("./assets/")) {
      img.setAttribute("src", `../contents/aboutme/${src.slice(2)}`);
    }
    const absoluteSrc = toAbsoluteAssetUrl(img.getAttribute("src") || "");
    if (absoluteSrc) {
      img.setAttribute("src", absoluteSrc);
    }
  });

  container.querySelectorAll("a[href]").forEach((link) => {
    const href = (link.getAttribute("href") || "").split("?")[0];
    if (!href) return;
    if (href.startsWith("assets/")) {
      link.setAttribute("href", `../contents/aboutme/${href}`);
    } else if (href.startsWith("./assets/")) {
      link.setAttribute("href", `../contents/aboutme/${href.slice(2)}`);
    }
    const absoluteHref = toAbsoluteAssetUrl(link.getAttribute("href") || "");
    if (absoluteHref) {
      link.setAttribute("href", absoluteHref);
    }
  });

  return container.innerHTML;
}

function toAbsoluteAssetUrl(path) {
  if (!path) return "";
  if (/^(https?:|blob:|data:|mailto:|tel:|#)/i.test(path)) {
    return path;
  }
  try {
    return new URL(path, window.location.href).href;
  } catch (error) {
    return path;
  }
}

async function loadCssText(path) {
  try {
    const response = await fetch(path, { cache: "no-store" });
    if (!response.ok) return "";
    return await response.text();
  } catch (error) {
    return "";
  }
}

async function openDetailPreview() {
  if (!state.currentDetailProject) return;
  persistDetailDraftFromEditor();
  const project = state.currentDetailProject;
  const previewLang = state.detailLang === "en" ? "en" : "zh";
  const fallbackLang = previewLang === "zh" ? "en" : "zh";
  const primaryHtml = normalizeDetailLikeHtml(state.detailDraftHtml[previewLang] || "");
  const fallbackHtml = normalizeDetailLikeHtml(state.detailDraftHtml[fallbackLang] || "");
  const previewSource = primaryHtml || fallbackHtml;
  const previewContent = normalizeContentForPreview(previewSource, project);
  const [baseCss, detailCss] = await Promise.all([
    loadCssText("../core/styles.css"),
    loadCssText("../detailSet/detail.css")
  ]);
  const fallbackCss = "body{font-family:Arial,sans-serif;margin:0;padding:24px;color:#1d1c1a}a{color:#1d4ed8;text-decoration:underline}pre{background:#f5f2ed;padding:10px;border:1px solid #e5e0d9;border-radius:8px;overflow:auto}";

  const displayTitle = previewLang === "zh"
    ? (project.name_zh || project.name_en || project.id)
    : (project.name_en || project.name_zh || project.id);
  const title = escapeHtml(displayTitle);
  const titleZh = escapeHtmlAttribute(project.name_zh || project.name_en || project.id);
  const titleEn = escapeHtmlAttribute(project.name_en || project.name_zh || project.id);
  const type = escapeHtmlAttribute(project.type || "");
  const date = escapeHtmlAttribute(project.date || "");
  const projectId = escapeHtmlAttribute(project.id || "");
  const baseHref = escapeHtmlAttribute(window.location.href);
  const navProjects = escapeHtml(previewLang === "zh" ? i18n.zh.nav.projects : i18n.en.nav.projects);
  const navAbout = escapeHtml(previewLang === "zh" ? i18n.zh.nav.about : i18n.en.nav.about);
  const navAria = escapeHtmlAttribute(previewLang === "zh" ? i18n.zh.nav.ariaLabel : i18n.en.nav.ariaLabel);
  const navBrandText = previewLang === "zh"
    ? (state.personalization.navBrandTextZh || state.personalization.navBrandTextEn || DEFAULT_PERSONALIZATION.navBrandTextZh)
    : (state.personalization.navBrandTextEn || state.personalization.navBrandTextZh || DEFAULT_PERSONALIZATION.navBrandTextEn);
  const navInitialTheme = normalizeNavInitialTheme(state.detailNavInitialTheme);
  const previewRanges = getRangeListByLangWithFallback(state.detailBgRanges, previewLang);
  const typeRecord = state.types.find((item) => item.id === project.type) || null;
  const typeLabel = previewLang === "zh"
    ? (typeRecord?.name_zh || typeRecord?.name_en || "")
    : (typeRecord?.name_en || typeRecord?.name_zh || "");
  const typeFilterHref = project.type
    ? escapeHtmlAttribute(`../index.html?filter=${encodeURIComponent(project.type)}`)
    : "";
  const typeMarkup = typeLabel
    ? (project.type
      ? `<a class="detail-type-link" href="${typeFilterHref}">${escapeHtml(typeLabel)}</a>`
      : escapeHtml(typeLabel))
    : "";
  const outlineTitle = previewLang === "zh" ? "提纲" : "Outline";
  const outlineEmpty = previewLang === "zh" ? "暂无小节" : "No sections";
  const previewHtml = `<!doctype html>
<html lang="${previewLang === "zh" ? "zh-CN" : "en"}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <base href="${baseHref}">
  <title>${title}</title>
  <style>${baseCss || fallbackCss}\n${detailCss}</style>
</head>
<body data-project-id="${projectId}" data-title-zh="${titleZh}" data-title-en="${titleEn}" data-type="${type}" data-date="${date}" data-nav-initial-theme="${navInitialTheme}">
  <header class="site-header">
    <div class="container header-inner">
      <div class="brand">
        <span class="brand-label" id="site-brand-text">${escapeHtml(navBrandText)}</span>
      </div>
      <nav class="top-nav" aria-label="${navAria}">
        <a class="nav-btn is-active" aria-current="page" href="#">${navProjects}</a>
        <a class="nav-btn" href="#">${navAbout}</a>
      </nav>
    </div>
  </header>
  <main class="container detail-main">
    <section class="detail-hero">
      <p class="detail-type">${typeMarkup}</p>
      <h1 class="detail-title">${title}</h1>
      <p class="detail-meta">${escapeHtml(project.date || "")}</p>
    </section>
    <div class="detail-body">
      <article id="detail-content" class="detail-content">${previewContent}</article>
      <aside class="detail-outline" id="detail-outline-panel" hidden>
        <h2 class="detail-outline-title">${escapeHtml(outlineTitle)}</h2>
        <nav class="detail-outline-nav" aria-label="${escapeHtmlAttribute(outlineTitle)}">
          <ul class="detail-outline-list"></ul>
        </nav>
        <p class="detail-outline-empty">${escapeHtml(outlineEmpty)}</p>
      </aside>
    </div>
  </main>
  <script>
    (function () {
      const header = document.querySelector(".site-header");
      if (header) {
        header.classList.toggle("is-nav-dark", ${JSON.stringify(navInitialTheme)} === "dark");
      }
      const ranges = ${JSON.stringify(previewRanges)};

      function normalizeLineRanges(rawRanges) {
        if (!Array.isArray(rawRanges)) return [];
        const byKey = new Map();
        rawRanges.forEach((item) => {
          if (!item || typeof item !== "object") return;
          const startRaw = Number.parseInt(item.start, 10);
          const endRaw = Number.parseInt(item.end, 10);
          if (!Number.isFinite(startRaw) || !Number.isFinite(endRaw)) return;
          const start = Math.max(1, Math.min(startRaw, endRaw));
          const end = Math.max(start, Math.max(startRaw, endRaw));
          const colorRaw = String(item.color || "").trim().toLowerCase();
          const short = colorRaw.match(/^#([0-9a-f]{3})$/);
          const full = colorRaw.match(/^#([0-9a-f]{6})$/);
          if (!short && !full) return;
          const color = short
            ? ("#" + short[1].split("").map((ch) => ch + ch).join(""))
            : ("#" + full[1]);
          byKey.set(start + "-" + end, { start, end, color });
        });
        return Array.from(byKey.values()).sort((a, b) => {
          if (a.start !== b.start) return a.start - b.start;
          if (a.end !== b.end) return a.end - b.end;
          return a.color.localeCompare(b.color);
        });
      }

      function resolveLineColor(lineNumber, rangeList) {
        let color = "";
        rangeList.forEach((range) => {
          if (lineNumber >= range.start && lineNumber <= range.end) {
            color = range.color;
          }
        });
        return color;
      }

      function parseColorToRgb(color) {
        const raw = String(color || "").trim();
        if (!raw) return null;

        const shortHex = raw.match(/^#([0-9a-fA-F]{3})$/);
        if (shortHex) {
          const expanded = shortHex[1].split("").map((char) => char + char).join("");
          return {
            r: Number.parseInt(expanded.slice(0, 2), 16),
            g: Number.parseInt(expanded.slice(2, 4), 16),
            b: Number.parseInt(expanded.slice(4, 6), 16)
          };
        }

        const fullHex = raw.match(/^#([0-9a-fA-F]{6})$/);
        if (fullHex) {
          const hex = fullHex[1];
          return {
            r: Number.parseInt(hex.slice(0, 2), 16),
            g: Number.parseInt(hex.slice(2, 4), 16),
            b: Number.parseInt(hex.slice(4, 6), 16)
          };
        }

        const rgb = raw.match(/^rgba?\\(([^)]+)\\)$/i);
        if (rgb) {
          const parts = rgb[1].split(",").map((item) => Number.parseFloat(item.trim()));
          if (parts.length >= 3 && parts.slice(0, 3).every((value) => Number.isFinite(value))) {
            return {
              r: Math.min(255, Math.max(0, parts[0])),
              g: Math.min(255, Math.max(0, parts[1])),
              b: Math.min(255, Math.max(0, parts[2]))
            };
          }
        }

        return null;
      }

      function isDarkColor(color) {
        const rgb = parseColorToRgb(color);
        if (!rgb) return false;
        const luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
        return luminance < 0.55;
      }

      function hasStructuredLineDescendant(node) {
        if (!(node instanceof Element)) return false;
        return Boolean(node.querySelector("h1,h2,h3,h4,h5,h6,p,li,blockquote,pre,table,hr,figure,.image-wrapper"));
      }

      function hasNestedColumnsLineDescendant(node) {
        if (!(node instanceof Element)) return false;
        return Boolean(
          node.querySelector("h1,h2,h3,h4,h5,h6,p,li,blockquote,pre,table,hr,figure,.image-wrapper,div,section,article,.detail-columns-block,.detail-columns-cell")
        );
      }

      function isLineTargetElement(node, container) {
        if (!(node instanceof HTMLElement)) return false;
        if (node === container) return false;
        if (node.classList.contains("page-line-anchor")) return false;
        if (node.classList.contains("image-wrapper")) return true;

        const tag = node.tagName;
        if (["H1", "H2", "H3", "H4", "H5", "H6", "LI", "BLOCKQUOTE", "PRE", "TABLE", "TR", "HR", "FIGURE"].includes(tag)) {
          return true;
        }
        if (tag === "P") {
          const parentTag = node.parentElement ? node.parentElement.tagName : "";
          if (["LI", "TD", "TH", "BLOCKQUOTE", "PRE"].includes(parentTag)) {
            return false;
          }
          return true;
        }
        if (tag === "DIV") {
          if (node.classList.contains("detail-note-text")) return true;
          if (node.classList.contains("detail-columns-cell")) {
            return !hasNestedColumnsLineDescendant(node);
          }
          if (node.parentElement instanceof HTMLElement && node.parentElement.classList.contains("detail-columns-cell")) {
            return !hasNestedColumnsLineDescendant(node);
          }
          if (node.parentElement !== container) return false;
          return !hasStructuredLineDescendant(node);
        }
        if (tag === "SECTION" || tag === "ARTICLE") {
          if (node.parentElement instanceof HTMLElement && node.parentElement.classList.contains("detail-columns-cell")) {
            return !hasNestedColumnsLineDescendant(node);
          }
          if (node.parentElement !== container) return false;
          return !hasStructuredLineDescendant(node);
        }
        if (tag === "IMG") {
          return node.parentElement === container;
        }
        return false;
      }

      function isTopLevelTextLineNode(node, container) {
        if (!(node instanceof Text)) return false;
        if (node.parentNode !== container) return false;
        const text = String(node.textContent || "").replace(/\\u200b/g, "").trim();
        return Boolean(text);
      }

      function getLineNodeRect(node) {
        if (node instanceof HTMLElement) {
          return node.getBoundingClientRect();
        }
        if (node instanceof Text) {
          const text = String(node.textContent || "").replace(/\\u200b/g, "").trim();
          if (!text) return null;
          const range = document.createRange();
          range.selectNodeContents(node);
          const rect = range.getBoundingClientRect();
          if (rect && (rect.width > 0 || rect.height > 0)) {
            return rect;
          }
        }
        return null;
      }

      function getLineEntries(container) {
        if (!container) return [];
        const rawNodes = [];
        const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
        let current = walker.nextNode();
        while (current) {
          if (isLineTargetElement(current, container) || isTopLevelTextLineNode(current, container)) {
            rawNodes.push(current);
          }
          current = walker.nextNode();
        }
        if (!rawNodes.length) {
          rawNodes.push(...Array.from(container.children)
            .filter((node) => node instanceof HTMLElement && !node.classList.contains("page-line-anchor")));
        }
        if (!rawNodes.length) return [];

        const measured = [];
        rawNodes.forEach((node) => {
          const rect = getLineNodeRect(node);
          if (!rect) return;
          const top = Number.isFinite(rect.top) ? rect.top : NaN;
          const bottom = Number.isFinite(rect.bottom) ? rect.bottom : NaN;
          const left = Number.isFinite(rect.left) ? rect.left : NaN;
          if (!Number.isFinite(top) || !Number.isFinite(bottom) || !Number.isFinite(left)) return;
          if (bottom <= top) return;
          measured.push({ node, top, bottom, left });
        });
        if (!measured.length) return [];

        measured.sort((a, b) => {
          if (a.top !== b.top) return a.top - b.top;
          return a.left - b.left;
        });

        const entries = [];
        const sameLineThreshold = 4;
        measured.forEach((item) => {
          const last = entries[entries.length - 1];
          if (last && Math.abs(item.top - last.top) <= sameLineThreshold) {
            last.bottom = Math.max(last.bottom, item.bottom);
            last.nodes.push(item.node);
            if (item.left < last.left) {
              last.left = item.left;
              last.anchorNode = item.node;
            }
            return;
          }
          entries.push({
            top: item.top,
            bottom: item.bottom,
            left: item.left,
            anchorNode: item.node,
            nodes: [item.node]
          });
        });

        return entries;
      }

      function getViewportContentWidth() {
        return document.documentElement.clientWidth || window.innerWidth || 0;
      }

      function ensureDetailTopFill(host) {
        if (!host) return null;
        let fill = host.querySelector(".detail-top-fill");
        if (!(fill instanceof HTMLElement)) {
          fill = document.createElement("div");
          fill.className = "detail-top-fill";
          fill.setAttribute("aria-hidden", "true");
          host.prepend(fill);
        }
        return fill;
      }

      function resetDetailTopFill(host) {
        if (!host) return;
        const fill = host.querySelector(".detail-top-fill");
        if (fill instanceof HTMLElement) {
          fill.hidden = true;
          fill.style.removeProperty("left");
          fill.style.removeProperty("top");
          fill.style.removeProperty("width");
          fill.style.removeProperty("height");
          fill.style.removeProperty("background");
        }
        host.classList.remove("has-top-fill");
        host.classList.remove("is-top-fill-dark");
      }

      function updateDetailTopFill(host, container, ranges) {
        if (!host || !container) return;
        const firstLineColor = resolveLineColor(1, ranges);
        if (!firstLineColor) {
          resetDetailTopFill(host);
          return;
        }
        const fill = ensureDetailTopFill(host);
        if (!(fill instanceof HTMLElement)) return;

        const hostRect = host.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        const topHeightRaw = Math.round(containerRect.top - hostRect.top);
        const topHeight = Math.max(0, topHeightRaw);
        if (topHeight <= 0) {
          resetDetailTopFill(host);
          return;
        }

        fill.hidden = false;
        fill.style.left = (-hostRect.left) + "px";
        fill.style.top = "0";
        fill.style.width = getViewportContentWidth() + "px";
        fill.style.height = topHeight + "px";
        fill.style.background = firstLineColor;

        host.classList.add("has-top-fill");
        host.classList.toggle("is-top-fill-dark", isDarkColor(firstLineColor));
      }

      function applyLineDecorations(container, rawRanges) {
        if (!container) return;
        container.querySelectorAll(".page-line-anchor").forEach((node) => node.remove());
        const host = document.querySelector(".detail-main") || container;
        host.classList.remove("page-range-host");
        const existingLayer = host.querySelector(".page-range-layer[data-scope='detail-content']");
        if (existingLayer) {
          existingLayer.remove();
        }
        const lineEntries = getLineEntries(container);
        const normalizedRanges = normalizeLineRanges(rawRanges);
        lineEntries.forEach((entry, index) => {
          const anchorTarget = entry && entry.anchorNode;
          if (!(anchorTarget instanceof Node)) return;
          const lineNumber = index + 1;
          const anchor = document.createElement("span");
          anchor.className = "page-line-anchor";
          anchor.id = "line-" + lineNumber;
          const parent = anchorTarget.parentNode;
          if (parent) {
            parent.insertBefore(anchor, anchorTarget);
          }
        });

        if (!normalizedRanges.length || !lineEntries.length) {
          updateDetailTopFill(host, container, normalizedRanges);
          return;
        }
        if (!host.dataset.rangeHostStyled) {
          const computed = window.getComputedStyle(host);
          if (computed.position === "static") {
            host.style.position = "relative";
          }
          host.style.isolation = "isolate";
          host.dataset.rangeHostStyled = "1";
        }

        const layer = document.createElement("div");
        layer.className = "page-range-layer";
        layer.dataset.scope = "detail-content";
        layer.setAttribute("aria-hidden", "true");
        const maxBottom = Math.max(host.scrollHeight, host.clientHeight);
        layer.style.position = "absolute";
        layer.style.left = "0";
        layer.style.right = "0";
        layer.style.top = "0";
        layer.style.height = maxBottom + "px";
        layer.style.pointerEvents = "none";
        layer.style.zIndex = "-1";
        const topFill = host.querySelector(".detail-top-fill");
        if (topFill && topFill.parentNode === host) {
          host.insertBefore(layer, topFill.nextSibling);
        } else {
          host.prepend(layer);
        }

        const hostRect = host.getBoundingClientRect();
        const viewportWidth = getViewportContentWidth();
        normalizedRanges.forEach((range) => {
          const startLine = Math.min(Math.max(range.start, 1), lineEntries.length);
          const endLine = Math.min(Math.max(range.end, startLine), lineEntries.length);
          const startEntry = lineEntries[startLine - 1];
          const endEntry = lineEntries[endLine - 1];
          if (!startEntry || !endEntry) return;
          const topRaw = Math.round(startEntry.top - hostRect.top);
          const bottomRaw = Math.round(endEntry.bottom - hostRect.top);
          const top = startLine === 1 ? 0 : Math.max(0, topRaw);
          let bottom = Math.min(maxBottom, Math.max(top, bottomRaw));
          if (endLine < lineEntries.length) {
            const nextEntry = lineEntries[endLine];
            if (nextEntry) {
              const nextTopRaw = Math.round(nextEntry.top - hostRect.top);
              const nextTop = Math.max(top, nextTopRaw);
              bottom = Math.min(bottom, nextTop);
            }
          }
          if (bottom <= top) return;

          const block = document.createElement("div");
          block.className = "page-range-block";
          block.style.position = "absolute";
          block.style.left = (-hostRect.left) + "px";
          block.style.width = viewportWidth + "px";
          block.style.transform = "none";
          block.style.top = top + "px";
          block.style.height = (bottom - top) + "px";
          block.style.background = range.color;
          layer.appendChild(block);
        });

        updateDetailTopFill(host, container, normalizedRanges);
      }

      function normalizeHeadingText(text) {
        return String(text || "").replace(/\\s+/g, " ").trim();
      }

      function ensureHeadingId(heading, index) {
        const existing = String(heading.id || "").trim();
        if (existing) return existing;
        const raw = normalizeHeadingText(heading.textContent).toLowerCase();
        const base = raw
          .replace(/[^\\u4e00-\\u9fa5a-z0-9\\s-]/g, "")
          .replace(/\\s+/g, "-")
          .replace(/-+/g, "-")
          .replace(/^-|-$/g, "") || ("section-" + String(index + 1));
        let candidate = base;
        let suffix = 2;
        while (document.getElementById(candidate)) {
          candidate = base + "-" + String(suffix);
          suffix += 1;
        }
        heading.id = candidate;
        return candidate;
      }

      function renderPreviewOutline() {
        const content = document.getElementById("detail-content");
        const outline = document.getElementById("detail-outline-panel");
        if (!content || !outline) return;
        const list = outline.querySelector(".detail-outline-list");
        const empty = outline.querySelector(".detail-outline-empty");
        if (!list || !empty) return;

        const headings = Array.from(content.querySelectorAll("h1, h2, h3, h4"))
          .filter((heading) => normalizeHeadingText(heading.textContent));

        list.innerHTML = "";
        if (!headings.length) {
          empty.hidden = false;
          outline.hidden = true;
          return;
        }

        const fragment = document.createDocumentFragment();
        headings.forEach((heading, index) => {
          const headingId = ensureHeadingId(heading, index);
          const levelRaw = Number.parseInt(String(heading.tagName || "").replace("H", ""), 10);
          const level = Number.isFinite(levelRaw) ? levelRaw : 2;
          const item = document.createElement("li");
          item.className = "detail-outline-item is-level-" + String(level);
          const link = document.createElement("a");
          link.setAttribute("href", "#" + headingId);
          link.textContent = normalizeHeadingText(heading.textContent);
          item.appendChild(link);
          fragment.appendChild(item);
        });
        list.appendChild(fragment);
        empty.hidden = true;
        outline.hidden = false;
      }

      const detailContent = document.getElementById("detail-content");
      renderPreviewOutline();
      applyLineDecorations(detailContent, ranges);
      window.addEventListener("resize", function () {
        applyLineDecorations(detailContent, ranges);
      });
    })();
  </script>
</body>
</html>`;

  const win = window.open("", "_blank");
  if (!win) {
    setStatus(t("status.error").replace("{message}", "Preview popup blocked"), "error");
    return;
  }
  win.document.open();
  win.document.write(previewHtml);
  win.document.close();
}

async function openAboutPreview() {
  persistAboutDraftFromEditor();
  const previewLang = state.aboutLang === "en" ? "en" : "zh";
  const fallbackNotice = DEFAULT_ABOUT_I18N[previewLang].about.notice;
  const fallbackLang = previewLang === "zh" ? "en" : "zh";
  const primaryHtml = normalizeDetailLikeHtml(state.aboutDraftHtml[previewLang] || "");
  const fallbackHtml = normalizeDetailLikeHtml(state.aboutDraftHtml[fallbackLang] || "");
  const rawContent = primaryHtml || fallbackHtml;
  const previewContent = rawContent ? normalizeAboutContentForPreview(rawContent) : "";

  const [baseCss, aboutCss] = await Promise.all([
    loadCssText("../core/styles.css"),
    loadCssText("../aboutme/about.css")
  ]);
  const fallbackCss = "body{font-family:Arial,sans-serif;margin:0;padding:24px;color:#1d1c1a}a{color:#1d4ed8;text-decoration:underline}main{max-width:920px;margin:0 auto}";

  const pageTitle = escapeHtml(DEFAULT_ABOUT_I18N[previewLang].page.title);
  const navProjects = escapeHtml(DEFAULT_ABOUT_I18N[previewLang].nav.projects);
  const navAbout = escapeHtml(DEFAULT_ABOUT_I18N[previewLang].nav.about);
  const navAria = escapeHtmlAttribute(DEFAULT_ABOUT_I18N[previewLang].nav.ariaLabel);
  const previewBrandText = previewLang === "zh"
    ? (state.personalization.navBrandTextZh || state.personalization.navBrandTextEn || DEFAULT_PERSONALIZATION.navBrandTextZh)
    : (state.personalization.navBrandTextEn || state.personalization.navBrandTextZh || DEFAULT_PERSONALIZATION.navBrandTextEn);
  const footerHtmlRaw = previewLang === "zh"
    ? (state.personalization.footerHtmlZh || state.personalization.footerHtmlEn || "")
    : (state.personalization.footerHtmlEn || state.personalization.footerHtmlZh || "");
  const footerHtml = normalizeDetailLikeHtml(footerHtmlRaw);
  const showFooter = Boolean(state.personalization.footerEnabled) && Boolean(footerHtml);
  const aboutRanges = getRangeListByLangWithFallback(state.aboutBgRanges, previewLang);
  const footerRanges = getRangeListByLangWithFallback(state.personalizeFooterBgRanges, previewLang);
  const contentBlock = previewContent
    ? `<article id="about-content" class="about-content">${previewContent}</article><p id="about-notice" class="about-notice" hidden>${escapeHtml(fallbackNotice)}</p>`
    : `<article id="about-content" class="about-content" hidden></article><p id="about-notice" class="about-notice">${escapeHtml(fallbackNotice)}</p>`;
  const footerBlock = showFooter
    ? `<section id="site-footer-copy" class="site-footer-copy">${footerHtml}</section>`
    : `<section id="site-footer-copy" class="site-footer-copy" hidden></section>`;
  const baseHref = escapeHtmlAttribute(window.location.href);

  const previewHtml = `<!doctype html>
<html lang="${previewLang === "zh" ? "zh-CN" : "en"}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <base href="${baseHref}">
  <title>${pageTitle}</title>
  <style>${baseCss || fallbackCss}\n${aboutCss}</style>
</head>
<body data-page="about">
  <header class="site-header">
    <div class="container header-inner">
      <div class="brand">
        <span class="brand-label">${escapeHtml(previewBrandText)}</span>
      </div>
      <nav class="top-nav" aria-label="${navAria}">
        <a class="nav-btn" href="index.html">${navProjects}</a>
        <a class="nav-btn is-active" aria-current="page" href="#">${navAbout}</a>
      </nav>
    </div>
  </header>
  <main class="container about-main">
    <section class="about-status">
      ${contentBlock}
    </section>
    ${footerBlock}
  </main>
  <script>
    (function () {
      const aboutRanges = ${JSON.stringify(aboutRanges)};
      const footerRanges = ${JSON.stringify(footerRanges)};

      function normalizeLineRanges(rawRanges) {
        if (!Array.isArray(rawRanges)) return [];
        return rawRanges
          .map((item) => {
            const startRaw = Number.parseInt(item && item.start, 10);
            const endRaw = Number.parseInt(item && item.end, 10);
            if (!Number.isFinite(startRaw) || !Number.isFinite(endRaw)) return null;
            const start = Math.max(1, Math.min(startRaw, endRaw));
            const end = Math.max(start, Math.max(startRaw, endRaw));
            const color = String(item && item.color || "").trim();
            if (!/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/.test(color)) return null;
            return { start, end, color };
          })
          .filter(Boolean);
      }

      function resolveLineColor(lineNumber, ranges) {
        let color = "";
        ranges.forEach((range) => {
          if (lineNumber >= range.start && lineNumber <= range.end) {
            color = range.color;
          }
        });
        return color;
      }

      function applyLineDecorations(container, ranges, anchorPrefix) {
        if (!container) return;
        container.querySelectorAll(".page-line-anchor").forEach((node) => node.remove());
        const lineElements = Array.from(container.children);
        lineElements.forEach((element) => {
          element.classList.remove("page-line-background");
          element.style.removeProperty("--line-bg-color");
        });
        const normalized = normalizeLineRanges(ranges);
        lineElements.forEach((element, index) => {
          const line = index + 1;
          const anchor = document.createElement("span");
          anchor.className = "page-line-anchor";
          anchor.id = anchorPrefix + line;
          const parent = element.parentNode;
          if (parent) {
            parent.insertBefore(anchor, element);
          }
          const color = resolveLineColor(line, normalized);
          if (!color) return;
          element.classList.add("page-line-background");
          element.style.setProperty("--line-bg-color", color);
        });
      }

      applyLineDecorations(document.getElementById("about-content"), aboutRanges, "line-");
      applyLineDecorations(document.getElementById("site-footer-copy"), footerRanges, "footer-line-");
    })();
  </script>
</body>
</html>`;

  const win = window.open("", "_blank");
  if (!win) {
    setStatus(t("status.error").replace("{message}", "Preview popup blocked"), "error");
    return;
  }
  win.document.open();
  win.document.write(previewHtml);
  win.document.close();
}

function escapeHtmlAttribute(text) {
  return String(text || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function setProjectFormMode(isEditing) {
  if (!elements.form || !elements.projectFormEmpty) return;
  elements.form.hidden = !isEditing;
  elements.projectFormEmpty.hidden = isEditing;
  updateProjectDeleteButton();
}

function updateProjectDeleteButton() {
  if (!elements.deleteProject) return;
  const canDelete = Boolean(state.rootHandle && state.currentId);
  elements.deleteProject.hidden = !canDelete;
  elements.deleteProject.disabled = !canDelete;
}

function scrollProjectRowIntoView(projectId) {
  if (!projectId) return;
  const row = elements.projectList.querySelector(`tr[data-project-id="${projectId}"]`);
  if (!row) return;
  requestAnimationFrame(() => {
    row.scrollIntoView({ block: "nearest", inline: "nearest" });
  });
}

function escapeHtml(text) {
  return String(text || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function setStatus(message, tone = "") {
  const text = String(message || "").trim();
  if (!text) {
    if (elements.status) {
      elements.status.textContent = "";
      delete elements.status.dataset.tone;
    }
    if (elements.statusWrap) {
      elements.statusWrap.hidden = true;
    }
    return;
  }

  if (elements.status) {
    elements.status.textContent = text;
    if (tone) {
      elements.status.dataset.tone = tone;
    } else {
      delete elements.status.dataset.tone;
    }
  }
  if (elements.statusWrap) {
    elements.statusWrap.hidden = false;
  }
}

function updateFolderButton(isConnected) {
  if (!elements.openFolder) return;
  elements.openFolder.textContent = isConnected ? t("editor.reselect") : t("editor.open");
}

function openDb() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("editor-store", 1);
    request.onupgradeneeded = () => {
      request.result.createObjectStore("handles");
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function storeHandle(handle) {
  const db = await openDb();
  await new Promise((resolve, reject) => {
    const tx = db.transaction("handles", "readwrite");
    tx.objectStore("handles").put(handle, "root");
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
  db.close();
}

async function readStoredHandle() {
  const db = await openDb();
  const handle = await new Promise((resolve, reject) => {
    const tx = db.transaction("handles", "readonly");
    const request = tx.objectStore("handles").get("root");
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
  db.close();
  return handle || null;
}

async function getDirectoryHandle(root, segments, create = false) {
  let current = root;
  for (const segment of segments) {
    current = await current.getDirectoryHandle(segment, { create });
  }
  return current;
}

async function getFileHandle(root, segments, create = false) {
  const fileName = segments[segments.length - 1];
  const dir = await getDirectoryHandle(root, segments.slice(0, -1), create);
  return dir.getFileHandle(fileName, { create });
}

async function fileExistsOnHandle(root, pathSegments) {
  try {
    await getFileHandle(root, pathSegments, false);
    return true;
  } catch (error) {
    return false;
  }
}

async function directoryExistsOnHandle(root, pathSegments) {
  try {
    await getDirectoryHandle(root, pathSegments, false);
    return true;
  } catch (error) {
    return false;
  }
}

async function fileExists(pathSegments) {
  return fileExistsOnHandle(state.rootHandle, pathSegments);
}

async function directoryExists(pathSegments) {
  return directoryExistsOnHandle(state.rootHandle, pathSegments);
}

async function writeFile(handle, data) {
  const writable = await handle.createWritable();
  await writable.write(data);
  await writable.close();
}

async function writeFileByPath(pathSegments, data) {
  const handle = await getFileHandle(state.rootHandle, pathSegments, true);
  await writeFile(handle, data);
}

async function readTextFile(pathSegments) {
  try {
    const handle = await getFileHandle(state.rootHandle, pathSegments, false);
    const file = await handle.getFile();
    return await file.text();
  } catch (error) {
    return null;
  }
}

async function readBinaryFile(pathSegments) {
  try {
    const handle = await getFileHandle(state.rootHandle, pathSegments, false);
    const file = await handle.getFile();
    return file;
  } catch (error) {
    return null;
  }
}

async function copyDirectoryFiles(fromSegments, toSegments) {
  let sourceDir;
  try {
    sourceDir = await getDirectoryHandle(state.rootHandle, fromSegments, false);
  } catch (error) {
    return false;
  }

  await getDirectoryHandle(state.rootHandle, toSegments, true);
  let copied = false;
  for await (const [name, handle] of sourceDir.entries()) {
    if (handle.kind !== "file") continue;
    const file = await handle.getFile();
    const target = await getFileHandle(state.rootHandle, [...toSegments, name], true);
    await writeFile(target, file);
    copied = true;
  }
  return copied;
}

async function removeFileByPath(segments) {
  try {
    const dir = await getDirectoryHandle(state.rootHandle, segments.slice(0, -1), false);
    await dir.removeEntry(segments[segments.length - 1]);
  } catch (error) {
    return;
  }
}

async function removeDirectoryByPath(segments) {
  try {
    const dir = await getDirectoryHandle(state.rootHandle, segments.slice(0, -1), false);
    await dir.removeEntry(segments[segments.length - 1], { recursive: true });
  } catch (error) {
    return;
  }
}
