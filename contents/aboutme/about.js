const i18n = {
  zh: {
    page: {
      title: "关于我"
    },
    nav: {
      projects: "项目",
      about: "履历",
      ariaLabel: "主导航",
      langToggleAria: "切换语言"
    },
    view: {
      ariaLabel: "关于我视图切换",
      resume: "履历",
      timeline: "时光机"
    },
    resume: {
      more: "展开",
      collapse: "收起",
      empty: "暂无履历数据"
    },
    timeline: {
      corner: "角落",
      sortDesc: "时间倒序",
      sortAsc: "时间顺序",
      sortYear: "年份",
      allCate: "全部分类",
      empty: "暂无时光机数据",
      linkText: "link"
    },
    local: {
      title: "请选择 `contents` 文件夹",
      intro: "你现在是直接打开 HTML 文件。为了读取 About 数据，需要手动授权一次 `contents` 文件夹。",
      pick: "选择 `contents` 文件夹",
      later: "稍后再说",
      summary: "为什么会这样？（点击展开）",
      help1: "直接双击 HTML 打开时，浏览器会限制网页自动访问本地文件夹。",
      help2: "这不是你的操作问题，是浏览器的安全规则。",
      help3: "上线到网站后（例如部署到 Netlify、Vercel、GitHub Pages），通常不需要这一步。",
      unsupported: "当前浏览器不支持“选择文件夹”，请使用 Chrome 或 Edge。",
      waiting: "等待你选择文件夹…",
      denied: "没有拿到文件夹授权，请再试一次。",
      invalid: "没找到有效的 `contents` 文件夹。请选择 `contents`，或包含 `contents` 的网站根目录。",
      canceled: "你取消了选择。",
      failedPrefix: "选择失败：",
      readFailedPrefix: "读取内容失败："
    }
  },
  en: {
    page: {
      title: "About"
    },
    nav: {
      projects: "Work",
      about: "About",
      ariaLabel: "Primary",
      langToggleAria: "Switch language"
    },
    view: {
      ariaLabel: "About view switch",
      resume: "Resume",
      timeline: "Timeline"
    },
    resume: {
      more: "Expand",
      collapse: "Collapse",
      empty: "No resume records"
    },
    timeline: {
      corner: "Corner",
      sortDesc: "Latest first",
      sortAsc: "Earliest first",
      sortYear: "Year",
      allCate: "All categories",
      empty: "No timeline records",
      linkText: "link"
    },
    local: {
      title: "Please choose the `contents` folder",
      intro: "You opened this HTML file directly. To read About data, authorize the `contents` folder once.",
      pick: "Choose `contents` folder",
      later: "Later",
      summary: "Why is this needed?",
      help1: "When opened via local file, browsers restrict automatic access to local folders.",
      help2: "This is expected browser security behavior.",
      help3: "After deployment (Netlify, Vercel, GitHub Pages), this step is usually unnecessary.",
      unsupported: "Your browser does not support folder picker. Use Chrome or Edge.",
      waiting: "Waiting for folder selection…",
      denied: "Folder permission was not granted. Please retry.",
      invalid: "No valid `contents` folder found. Pick `contents` or the site root containing it.",
      canceled: "Selection canceled.",
      failedPrefix: "Selection failed: ",
      readFailedPrefix: "Read failed: "
    }
  }
};

const CONTENT_BASE_CANDIDATES = [".", "../../contents/aboutme", "../contents/aboutme", "contents/aboutme"];
const INTRO_FILE_CANDIDATES = ["assets/intro.csv", "assets/Intro.csv"];
const POSITION_FILE = "assets/position.csv";
const DETAIL_FILE = "assets/detail.csv";
const TIMELINE_FILE = "assets/timeline.csv";
const PERSONALIZATION_FILE = "../assets/site_personalization.json";
const PORTRAIT_DIR = "assets/portrait/";
const ICON_DIR = "assets/icon/";
const PORTRAIT_MANIFEST = "assets/portrait_manifest.json";
const ICON_MANIFEST = "assets/icon_manifest.json";
const DATA_SYNC_INTERVAL_MS = 3000;
const PORTRAIT_AUTO_INTERVAL_MS = 8000;
const PORTRAIT_MAX_VISIBLE_CARDS = 3;
const HTTP_ASSET_REVALIDATE_INTERVAL_MS = 30000;
const LOCAL_HANDLE_DB = "site-content-store";
const LOCAL_HANDLE_KEY = "contents";
const IS_FILE_PROTOCOL = window.location.protocol === "file:";
const FOOTER_TAIL_MAX_FILL_PX = 180;
const IMAGE_FILE_RE = /\.(png|jpe?g|gif|webp|bmp|svg|avif)$/i;

const DEFAULT_PERSONALIZATION = Object.freeze({
  navBrandTextZh: "",
  navBrandTextEn: "",
  footerEnabled: false,
  footerHtmlZh: "",
  footerHtmlEn: "",
  footerBgRangesZh: [],
  footerBgRangesEn: []
});
const NAV_BRAND_TEXT = Object.freeze({ zh: "劲衡", en: "Jinheng" });
const PLACEHOLDER_BRAND_TEXTS = new Set(["XXX的个人空间", "XXX's Space"]);

const langToggle = document.querySelector("[data-lang-toggle]");
const siteBrandText = document.getElementById("site-brand-text");
const projectsNavLink = document.querySelector(".top-nav .nav-btn[data-i18n='nav.projects']");
const viewResumeBtn = document.getElementById("view-resume-btn");
const viewTimelineBtn = document.getElementById("view-timeline-btn");
const resumeView = document.getElementById("resume-view");
const timelineView = document.getElementById("timeline-view");
const introName = document.getElementById("intro-name");
const introTitle = document.getElementById("intro-title");
const introConnect = document.getElementById("intro-connect");
const introDescription = document.getElementById("intro-description");
const portraitFrame = document.getElementById("portrait-frame");
const cornerButton = document.getElementById("corner-button");
const timelineSort = document.getElementById("timeline-sort");
const timelineSortTrigger = document.getElementById("timeline-sort-trigger");
const timelineSortLabel = document.getElementById("timeline-sort-label");
const timelineSortMenu = document.getElementById("timeline-sort-menu");
const timelineSortYearWrap = document.getElementById("timeline-sort-year-wrap");
const timelineSortYearTrigger = document.getElementById("timeline-sort-year-trigger");
const timelineSortCateList = document.getElementById("timeline-sort-cate-list");
const timelineYearSubmenu = document.getElementById("timeline-year-submenu");
const timelineList = document.getElementById("timeline-list");
const siteFooterCopy = document.getElementById("site-footer-copy");

const localOpenElements = {
  modal: document.getElementById("local-open-modal"),
  title: document.getElementById("local-open-title"),
  intro: document.getElementById("local-open-intro"),
  pick: document.getElementById("local-open-pick"),
  later: document.getElementById("local-open-later"),
  summary: document.querySelector(".local-open-help summary"),
  helpBody: document.getElementById("local-open-help-body"),
  status: document.getElementById("local-open-status")
};

const state = {
  lang: detectLanguage(),
  view: "resume",
  intro: null,
  positions: [],
  detailsByKey: new Map(),
  timeline: [],
  portraits: [],
  icons: [],
  iconLookup: new Map(),
  dataSignature: "",
  loadingData: false,
  localContentsHandle: null,
  personalization: cloneDefaultPersonalization(),
  expandedPositionKeys: new Set(),
  timelineSortMode: "desc",
  timelineYear: null,
  timelineCateId: null,
  portraitLayerByCard: new WeakMap(),
  portraitIndexByCard: new WeakMap(),
  portraitUnseenPool: [],
  portraitAnimating: false,
  portraitAutoTimer: 0,
  httpAssetListSignature: "",
  httpAssetLastValidatedAt: 0,
  touchSession: null,
  objectUrls: new Set()
};

let footerLayoutRaf = 0;

applyI18n(state.lang);
updateLangToggle();
setupBrandNavigation();
setView("resume");
bindEvents();
bootstrapLocalAndLoadData();
startDataSync();

function bindEvents() {
  if (langToggle) {
    langToggle.addEventListener("click", () => {
      const nextLang = state.lang === "zh" ? "en" : "zh";
      setLanguage(nextLang);
    });
  }

  [viewResumeBtn, viewTimelineBtn].forEach((button) => {
    if (!button) return;
    button.addEventListener("click", () => {
      const nextView = button.dataset.view === "timeline" ? "timeline" : "resume";
      setView(nextView);
    });
  });

  if (resumeView) {
    resumeView.addEventListener("click", (event) => {
      const toggle = event.target.closest(".fold-toggle[data-position-key]");
      if (!toggle) return;
      const key = String(toggle.dataset.positionKey || "");
      if (!key) return;
      const drawer = toggle.closest(".position-detail-drawer");
      if (!(drawer instanceof HTMLElement)) return;
      const shouldExpand = !drawer.classList.contains("is-open");
      setPositionDetailExpanded(drawer, key, shouldExpand);
    });
  }

  if (timelineSortTrigger) {
    timelineSortTrigger.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleTimelineSortMenu();
    });
  }

  if (timelineSortMenu) {
    timelineSortMenu.addEventListener("click", (event) => {
      const cateButton = event.target.closest(".timeline-sort-item[data-cate-id]");
      if (cateButton) {
        const cateId = String(cateButton.dataset.cateId || "");
        state.timelineCateId = cateId && cateId !== "__all__" ? cateId : null;
        closeTimelineSortMenu();
        renderTimeline();
        return;
      }

      const button = event.target.closest(".timeline-sort-item[data-sort-mode]");
      if (!button) return;
      const mode = button.dataset.sortMode;
      if (mode === "year") return;
      state.timelineSortMode = mode === "asc" ? "asc" : "desc";
      syncTimelineYearByData();
      closeTimelineSortMenu();
      renderTimeline();
    });
  }

  if (timelineSortYearTrigger) {
    timelineSortYearTrigger.addEventListener("click", (event) => {
      event.stopPropagation();
      if (timelineSortYearWrap) {
        timelineSortYearWrap.classList.add("is-open");
      }
    });
  }

  if (timelineSortYearWrap) {
    timelineSortYearWrap.addEventListener("mouseenter", () => {
      if (timelineSortMenu && !timelineSortMenu.hidden) {
        timelineSortYearWrap.classList.add("is-open");
      }
    });
  }

  if (timelineYearSubmenu) {
    timelineYearSubmenu.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-year]");
      if (!button) return;
      const year = Number.parseInt(button.dataset.year, 10);
      if (!Number.isFinite(year)) return;
      state.timelineSortMode = "year";
      state.timelineYear = year;
      closeTimelineSortMenu();
      renderTimeline();
    });
  }

  document.addEventListener("click", (event) => {
    if (!timelineSort || timelineSort.hidden) return;
    if (timelineSort.contains(event.target)) return;
    closeTimelineSortMenu();
  });

  if (portraitFrame) {
    portraitFrame.addEventListener("click", () => handlePortraitInteraction());
    portraitFrame.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      handlePortraitInteraction();
    });

    portraitFrame.addEventListener("pointerdown", (event) => {
      state.touchSession = {
        startX: event.clientX,
        startY: event.clientY,
        moved: false
      };
    });
    portraitFrame.addEventListener("pointermove", (event) => {
      if (!state.touchSession) return;
      const dx = event.clientX - state.touchSession.startX;
      const dy = event.clientY - state.touchSession.startY;
      if (Math.abs(dx) > 12 || Math.abs(dy) > 12) {
        state.touchSession.moved = true;
      }
    });
    portraitFrame.addEventListener("pointerup", (event) => {
      if (!state.touchSession) return;
      const dx = event.clientX - state.touchSession.startX;
      const dy = event.clientY - state.touchSession.startY;
      const horizontalSwipe = Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy);
      if (horizontalSwipe) {
        handlePortraitInteraction();
      }
      state.touchSession = null;
    });
    portraitFrame.addEventListener("pointercancel", () => {
      state.touchSession = null;
    });
  }

  if (cornerButton) {
    cornerButton.addEventListener("click", () => {
      // Placeholder action
    });
  }

  if (localOpenElements.pick) {
    localOpenElements.pick.addEventListener("click", async () => {
      await chooseLocalContentsFolder();
    });
  }

  if (localOpenElements.later) {
    localOpenElements.later.addEventListener("click", () => {
      hideLocalOpenModal();
    });
  }

  window.addEventListener("resize", scheduleFooterLayoutRefresh);
  window.addEventListener("resize", syncAllPositionDetailDrawerHeights);
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) {
      loadData(true);
    }
  });

  window.addEventListener("beforeunload", () => {
    stopPortraitAutoRotate();
    revokeObjectUrls();
  });
}

function detectLanguage() {
  const saved = localStorage.getItem("siteLang");
  if (saved === "zh" || saved === "en") {
    return saved;
  }
  const language = String(navigator.language || "en").toLowerCase();
  return language.startsWith("zh") ? "zh" : "en";
}

function setLanguage(lang) {
  state.lang = lang === "zh" ? "zh" : "en";
  localStorage.setItem("siteLang", state.lang);
  applyI18n(state.lang);
  updateLangToggle();
  applyPersonalization();
  renderIntro();
  renderResume();
  renderTimeline();
}

function setView(view) {
  state.view = view === "timeline" ? "timeline" : "resume";

  if (viewResumeBtn) {
    const active = state.view === "resume";
    viewResumeBtn.classList.toggle("is-active", active);
    viewResumeBtn.setAttribute("aria-selected", active ? "true" : "false");
  }
  if (viewTimelineBtn) {
    const active = state.view === "timeline";
    viewTimelineBtn.classList.toggle("is-active", active);
    viewTimelineBtn.setAttribute("aria-selected", active ? "true" : "false");
  }

  if (resumeView) {
    resumeView.hidden = state.view !== "resume";
  }
  if (timelineView) {
    timelineView.hidden = state.view !== "timeline";
  }
  if (cornerButton) {
    const isTimeline = state.view === "timeline";
    cornerButton.classList.toggle("is-visible", isTimeline);
    cornerButton.setAttribute("aria-hidden", isTimeline ? "false" : "true");
  }
}

function applyI18n(lang) {
  const strings = i18n[lang] || i18n.en;
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.title = strings.page.title;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = String(el.dataset.i18n || "");
    const value = resolveKey(strings, key);
    if (typeof value === "string") {
      el.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    const mapping = String(el.dataset.i18nAttr || "").split(",");
    mapping.forEach((pair) => {
      const [attr, key] = pair.split(":");
      if (!attr || !key) return;
      const value = resolveKey(strings, key.trim());
      if (typeof value === "string") {
        el.setAttribute(attr.trim(), value);
      }
    });
  });

  applyLocalModalText();
  renderTimelineSortMenuText();
}

function updateLangToggle() {
  if (!langToggle) return;
  langToggle.textContent = state.lang === "zh" ? "EN" : "中文";
}

function resolveKey(source, key) {
  return key.split(".").reduce((acc, part) => (acc ? acc[part] : null), source);
}

function applyLocalModalText() {
  const strings = i18n[state.lang] || i18n.en;
  if (localOpenElements.title) localOpenElements.title.textContent = strings.local.title;
  if (localOpenElements.intro) localOpenElements.intro.textContent = strings.local.intro;
  if (localOpenElements.pick) localOpenElements.pick.textContent = strings.local.pick;
  if (localOpenElements.later) localOpenElements.later.textContent = strings.local.later;
  if (localOpenElements.summary) localOpenElements.summary.textContent = strings.local.summary;
  if (localOpenElements.helpBody) {
    localOpenElements.helpBody.innerHTML = `
      <p>${escapeHtml(strings.local.help1)}</p>
      <p>${escapeHtml(strings.local.help2)}</p>
      <p>${escapeHtml(strings.local.help3)}</p>
    `;
  }
}

function setupBrandNavigation() {
  if (!siteBrandText || !projectsNavLink) return;
  const href = String(projectsNavLink.getAttribute("href") || "").trim();
  if (!href) return;
  const openProjectsPage = () => {
    window.location.href = href;
  };
  siteBrandText.style.cursor = "pointer";
  if (siteBrandText.tagName !== "A") {
    siteBrandText.setAttribute("role", "link");
    siteBrandText.setAttribute("tabindex", "0");
    siteBrandText.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      openProjectsPage();
    });
  }
  siteBrandText.addEventListener("click", openProjectsPage);
}

function renderIntro() {
  const intro = state.intro || {};
  const isZh = state.lang === "zh";
  if (introName) {
    introName.textContent = isZh
      ? pickFirstNonEmpty([intro.nameZh, intro.nameEn, ""])
      : pickFirstNonEmpty([intro.nameEn, intro.nameZh, ""]);
  }
  if (introTitle) {
    introTitle.textContent = isZh
      ? pickFirstNonEmpty([intro.titleZh, intro.titleEn, ""])
      : pickFirstNonEmpty([intro.titleEn, intro.titleZh, ""]);
  }
  if (introConnect) {
    introConnect.textContent = isZh
      ? pickFirstNonEmpty([intro.connectZh, intro.connectEn, ""])
      : pickFirstNonEmpty([intro.connectEn, intro.connectZh, ""]);
  }
  if (introDescription) {
    introDescription.textContent = isZh
      ? pickFirstNonEmpty([intro.introZh, intro.introEn, ""])
      : pickFirstNonEmpty([intro.introEn, intro.introZh, ""]);
  }
}

function renderResume() {
  if (!resumeView) return;
  resumeView.innerHTML = "";

  const strings = i18n[state.lang] || i18n.en;
  if (!state.positions.length) {
    const empty = document.createElement("p");
    empty.className = "resume-empty";
    empty.textContent = strings.resume.empty;
    resumeView.appendChild(empty);
    return;
  }

  const grouped = groupPositionsByCategory(state.positions);
  grouped.forEach((group) => {
    const section = document.createElement("section");
    section.className = "resume-group";

    const title = document.createElement("h2");
    title.className = "resume-group-title";
    title.textContent = state.lang === "zh"
      ? pickFirstNonEmpty([group.labelZh, group.labelEn, ""])
      : pickFirstNonEmpty([group.labelEn, group.labelZh, ""]);
    if (!title.textContent) {
      title.textContent = state.lang === "zh" ? "未分类" : "Uncategorized";
    }
    section.appendChild(title);

    const list = document.createElement("div");
    list.className = "resume-group-list";

    group.items.forEach((item) => {
      list.appendChild(buildPositionCard(item, strings));
    });

    section.appendChild(list);
    resumeView.appendChild(section);
  });

  syncAllPositionDetailDrawerHeights();
}

function buildPositionCard(item, strings) {
  const wrapper = document.createElement("article");
  wrapper.className = "position-item";

  const icon = document.createElement("div");
  icon.className = "position-icon";
  const iconSrc = resolveIconSrc(item.icon);
  if (iconSrc) {
    icon.style.backgroundImage = cssUrl(iconSrc);
    icon.style.backgroundColor = isLikelyTransparentAsset(iconSrc) ? "#ffffff" : "";
  }

  const main = document.createElement("div");
  main.className = "position-main";

  const top = document.createElement("div");
  top.className = "position-top";

  const title = document.createElement("p");
  title.className = "position-title";
  title.textContent = state.lang === "zh"
    ? pickFirstNonEmpty([item.titleZh, item.titleEn, ""])
    : pickFirstNonEmpty([item.titleEn, item.titleZh, ""]);

  const termLoc = document.createElement("div");
  termLoc.className = "position-term-loc";
  const term = document.createElement("span");
  term.textContent = item.term || "";
  const loc = document.createElement("span");
  loc.textContent = state.lang === "zh"
    ? pickFirstNonEmpty([item.locZh, item.locEn, ""])
    : pickFirstNonEmpty([item.locEn, item.locZh, ""]);
  termLoc.append(term, loc);

  top.append(title, termLoc);

  const middle = document.createElement("div");
  middle.className = "position-mid";

  const roleWrap = document.createElement("div");
  roleWrap.className = "position-role-wrap";

  const role = document.createElement("p");
  role.className = "position-role";
  role.textContent = state.lang === "zh"
    ? pickFirstNonEmpty([item.positionZh, item.positionEn, ""])
    : pickFirstNonEmpty([item.positionEn, item.positionZh, ""]);

  const dept = document.createElement("p");
  dept.className = "position-dept";
  dept.textContent = state.lang === "zh"
    ? pickFirstNonEmpty([item.departmentZh, item.departmentEn, ""])
    : pickFirstNonEmpty([item.departmentEn, item.departmentZh, ""]);

  roleWrap.append(role, dept);
  middle.appendChild(roleWrap);

  const detailRows = findDetailRowsForPosition(item);
  const hasDetails = detailRows.length > 0;

  let detailDrawer = null;

  if (hasDetails) {
    const detailKey = getPositionUniqueKey(item);
    const isExpanded = state.expandedPositionKeys.has(detailKey);

    detailDrawer = document.createElement("div");
    detailDrawer.className = "position-detail-drawer";
    detailDrawer.dataset.positionKey = detailKey;
    detailDrawer.classList.toggle("is-open", isExpanded);

    const moreButton = document.createElement("button");
    moreButton.type = "button";
    moreButton.className = "fold-toggle fold-toggle--more";
    moreButton.dataset.positionKey = detailKey;
    moreButton.setAttribute("aria-expanded", isExpanded ? "true" : "false");
    moreButton.setAttribute("aria-hidden", isExpanded ? "true" : "false");
    moreButton.disabled = isExpanded;
    moreButton.tabIndex = isExpanded ? -1 : 0;

    const moreText = document.createElement("span");
    moreText.textContent = strings.resume.more;
    const moreCaret = document.createElement("span");
    moreCaret.className = "caret";
    moreButton.append(moreText, moreCaret);

    const detailContainer = document.createElement("div");
    detailContainer.className = "position-detail";
    detailRows.forEach((row) => {
      const node = buildDetailRowNode(row);
      if (node) {
        detailContainer.appendChild(node);
      }
    });

    if (!detailContainer.childNodes.length) {
      detailDrawer = null;
    } else {
      const collapseButton = document.createElement("button");
      collapseButton.type = "button";
      collapseButton.className = "fold-toggle fold-toggle--collapse";
      collapseButton.dataset.positionKey = detailKey;
      collapseButton.setAttribute("aria-expanded", isExpanded ? "true" : "false");
      collapseButton.setAttribute("aria-hidden", isExpanded ? "false" : "true");
      collapseButton.disabled = !isExpanded;
      collapseButton.tabIndex = isExpanded ? 0 : -1;

      const collapseText = document.createElement("span");
      collapseText.textContent = strings.resume.collapse;
      const collapseCaret = document.createElement("span");
      collapseCaret.className = "caret";
      collapseButton.append(collapseText, collapseCaret);

      detailDrawer.append(moreButton, detailContainer, collapseButton);
      syncPositionDetailDrawerHeight(detailDrawer);
    }
  }

  main.append(top, middle);
  if (detailDrawer) {
    main.appendChild(detailDrawer);
  }

  wrapper.append(icon, main);
  return wrapper;
}

function setPositionDetailExpanded(drawer, key, shouldExpand) {
  if (!(drawer instanceof HTMLElement) || !key) return;
  syncPositionDetailDrawerHeight(drawer);
  drawer.classList.toggle("is-open", shouldExpand);

  drawer.querySelectorAll(".fold-toggle[data-position-key]").forEach((button) => {
    button.setAttribute("aria-expanded", shouldExpand ? "true" : "false");
  });

  const moreButton = drawer.querySelector(".fold-toggle--more");
  if (moreButton instanceof HTMLElement) {
    moreButton.setAttribute("aria-hidden", shouldExpand ? "true" : "false");
    moreButton.tabIndex = shouldExpand ? -1 : 0;
    if ("disabled" in moreButton) {
      moreButton.disabled = shouldExpand;
    }
  }
  const collapseButton = drawer.querySelector(".fold-toggle--collapse");
  if (collapseButton instanceof HTMLElement) {
    collapseButton.setAttribute("aria-hidden", shouldExpand ? "false" : "true");
    collapseButton.tabIndex = shouldExpand ? 0 : -1;
    if ("disabled" in collapseButton) {
      collapseButton.disabled = !shouldExpand;
    }
  }

  if (shouldExpand) {
    state.expandedPositionKeys.add(key);
  } else {
    state.expandedPositionKeys.delete(key);
  }
}

function syncPositionDetailDrawerHeight(drawer) {
  if (!(drawer instanceof HTMLElement)) return;
  const moreButton = drawer.querySelector(".fold-toggle--more");
  const detailContent = drawer.querySelector(".position-detail");
  const collapseButton = drawer.querySelector(".fold-toggle--collapse");

  const moreHeight = moreButton instanceof HTMLElement ? moreButton.getBoundingClientRect().height : 0;
  const detailHeight = detailContent instanceof HTMLElement ? detailContent.scrollHeight : 0;
  const collapseHeight = collapseButton instanceof HTMLElement ? collapseButton.getBoundingClientRect().height : 0;

  const closedHeight = Math.max(28, Math.ceil(moreHeight + 2));
  const openHeight = Math.max(
    closedHeight + 18,
    Math.ceil(moreHeight + detailHeight + collapseHeight + 18)
  );

  drawer.style.setProperty("--drawer-closed-height", `${closedHeight}px`);
  drawer.style.setProperty("--drawer-open-height", `${openHeight}px`);
}

function syncAllPositionDetailDrawerHeights() {
  if (!resumeView) return;
  resumeView.querySelectorAll(".position-detail-drawer").forEach((drawer) => {
    syncPositionDetailDrawerHeight(drawer);
  });
}

function buildDetailRowNode(detailRow) {
  if (detailRow.isTag) {
    const wrap = document.createElement("div");
    wrap.className = "position-detail-tags";

    const labelText = state.lang === "zh"
      ? pickFirstNonEmpty([detailRow.tagDescriptionZh, detailRow.tagDescriptionEn, ""])
      : pickFirstNonEmpty([detailRow.tagDescriptionEn, detailRow.tagDescriptionZh, ""]);
    if (labelText) {
      const label = document.createElement("span");
      label.className = "position-detail-label";
      label.textContent = ensureColonSuffix(labelText);
      wrap.appendChild(label);
    }

    const tags = state.lang === "zh"
      ? (detailRow.tagsZh.length ? detailRow.tagsZh : detailRow.tagsEn)
      : (detailRow.tagsEn.length ? detailRow.tagsEn : detailRow.tagsZh);

    tags.forEach((tag) => {
      const chip = document.createElement("span");
      chip.className = "position-detail-chip";
      chip.textContent = tag;
      wrap.appendChild(chip);
    });

    if (!wrap.childNodes.length) return null;
    return wrap;
  }

  const markdown = state.lang === "zh"
    ? pickFirstNonEmpty([detailRow.contentZh, detailRow.contentEn, ""])
    : pickFirstNonEmpty([detailRow.contentEn, detailRow.contentZh, ""]);
  if (!markdown) return null;

  const wrap = document.createElement("div");
  wrap.className = "position-detail-markdown";
  wrap.innerHTML = markdownToHtml(markdown);
  return wrap;
}

function renderTimeline() {
  if (!timelineList) return;

  renderTimelineSortMenuText();
  renderTimelineYearSubmenu();
  renderTimelineCateMenu();

  timelineList.innerHTML = "";
  const strings = i18n[state.lang] || i18n.en;
  const list = getTimelineVisibleItems();
  if (!list.length) {
    const empty = document.createElement("p");
    empty.className = "timeline-empty";
    empty.textContent = strings.timeline.empty;
    timelineList.appendChild(empty);
    return;
  }

  list.forEach((item) => {
    const article = document.createElement("article");
    article.className = "timeline-item";

    const head = document.createElement("div");
    head.className = "timeline-head";

    const date = document.createElement("p");
    date.className = "timeline-date";
    date.textContent = item.displayDate;

    const location = document.createElement("p");
    location.className = "timeline-location";
    const country = state.lang === "zh"
      ? pickFirstNonEmpty([item.countryZh, item.countryEn, ""])
      : pickFirstNonEmpty([item.countryEn, item.countryZh, ""]);
    const city = state.lang === "zh"
      ? pickFirstNonEmpty([item.cityZh, item.cityEn, ""])
      : pickFirstNonEmpty([item.cityEn, item.cityZh, ""]);
    location.textContent = [country, city].filter(Boolean).join(state.lang === "zh" ? "，" : ", ");

    head.append(date, location);

    const eventText = document.createElement("p");
    eventText.className = "timeline-event";
    const eventContent = state.lang === "zh"
      ? pickFirstNonEmpty([item.eventZh, item.eventEn, ""])
      : pickFirstNonEmpty([item.eventEn, item.eventZh, ""]);
    eventText.textContent = eventContent;

    const link = String(item.link || "").trim();
    if (link) {
      eventText.appendChild(document.createTextNode("\u00A0\u00A0"));
      const anchor = document.createElement("a");
      anchor.className = "timeline-link";
      anchor.href = link;
      anchor.target = "_blank";
      anchor.rel = "noopener noreferrer";
      anchor.textContent = strings.timeline.linkText;
      eventText.appendChild(anchor);
    }

    article.append(head, eventText);
    timelineList.appendChild(article);
  });
}

function renderTimelineSortMenuText() {
  const strings = i18n[state.lang] || i18n.en;

  if (timelineSortLabel) {
    if (state.timelineSortMode === "asc") {
      timelineSortLabel.textContent = strings.timeline.sortAsc;
    } else if (state.timelineSortMode === "year") {
      const yearText = Number.isFinite(state.timelineYear) ? `: ${state.timelineYear}` : "";
      timelineSortLabel.textContent = `${strings.timeline.sortYear}${yearText}`;
    } else {
      timelineSortLabel.textContent = strings.timeline.sortDesc;
    }
  }

  if (timelineSortMenu) {
    const map = {
      desc: strings.timeline.sortDesc,
      asc: strings.timeline.sortAsc
    };
    timelineSortMenu.querySelectorAll(".timeline-sort-item[data-sort-mode]").forEach((item) => {
      const mode = String(item.dataset.sortMode || "");
      if (mode === "year") {
        item.textContent = strings.timeline.sortYear;
      } else {
        item.textContent = map[mode] || strings.timeline.sortDesc;
      }
    });
  }

  if (timelineSortYearTrigger) {
    timelineSortYearTrigger.textContent = strings.timeline.sortYear;
  }
}

function renderTimelineYearSubmenu() {
  if (!timelineYearSubmenu) return;
  timelineYearSubmenu.innerHTML = "";
  const years = getTimelineYears();
  years.forEach((year) => {
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.year = String(year);
    button.textContent = String(year);
    timelineYearSubmenu.appendChild(button);
  });
}

function renderTimelineCateMenu() {
  if (!timelineSortCateList) return;
  const strings = i18n[state.lang] || i18n.en;
  timelineSortCateList.innerHTML = "";

  const allButton = document.createElement("button");
  allButton.type = "button";
  allButton.className = "timeline-sort-item";
  allButton.dataset.cateId = "__all__";
  allButton.textContent = strings.timeline.allCate;
  allButton.classList.toggle("is-active-cate", !state.timelineCateId);
  timelineSortCateList.appendChild(allButton);

  getTimelineCategories().forEach((cate) => {
    const label = state.lang === "zh"
      ? pickFirstNonEmpty([cate.labelZh, cate.labelEn, "未分类"])
      : pickFirstNonEmpty([cate.labelEn, cate.labelZh, "Uncategorized"]);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "timeline-sort-item";
    button.dataset.cateId = cate.id;
    button.textContent = label;
    button.classList.toggle("is-active-cate", state.timelineCateId === cate.id);
    timelineSortCateList.appendChild(button);
  });
}

function toggleTimelineSortMenu() {
  if (!timelineSortMenu || !timelineSortTrigger) return;
  const willOpen = timelineSortMenu.hidden;
  timelineSortMenu.hidden = !willOpen;
  timelineSortTrigger.setAttribute("aria-expanded", willOpen ? "true" : "false");
  if (timelineSortYearWrap && !willOpen) {
    timelineSortYearWrap.classList.remove("is-open");
  }
}

function closeTimelineSortMenu() {
  if (!timelineSortMenu || !timelineSortTrigger) return;
  timelineSortMenu.hidden = true;
  timelineSortTrigger.setAttribute("aria-expanded", "false");
  if (timelineSortYearWrap) {
    timelineSortYearWrap.classList.remove("is-open");
  }
}

function getTimelineVisibleItems() {
  let list = [...state.timeline];

  if (state.timelineCateId) {
    list = list.filter((item) => item.cateId === state.timelineCateId);
  }

  if (state.timelineSortMode === "year" && Number.isFinite(state.timelineYear)) {
    list = list.filter((item) => item.year === state.timelineYear);
  }

  list.sort((a, b) => {
    if (state.timelineSortMode === "asc") {
      return a.sortKey - b.sortKey;
    }
    return b.sortKey - a.sortKey;
  });

  return list;
}

function getTimelineYears() {
  const set = new Set();
  state.timeline.forEach((item) => {
    if (Number.isFinite(item.year) && item.year > 0) {
      set.add(item.year);
    }
  });
  return Array.from(set).sort((a, b) => b - a);
}

function getTimelineCategories() {
  const map = new Map();
  state.timeline.forEach((item) => {
    const cateId = normalizeText(item.cateId) || "uncategorized";
    if (map.has(cateId)) return;
    map.set(cateId, {
      id: cateId,
      labelZh: normalizeText(item.cateZh),
      labelEn: normalizeText(item.cateEn)
    });
  });
  return Array.from(map.values());
}

function syncTimelineYearByData() {
  const years = getTimelineYears();
  if (!years.length) {
    state.timelineYear = null;
    if (state.timelineSortMode === "year") {
      state.timelineSortMode = "desc";
    }
    return;
  }
  if (!Number.isFinite(state.timelineYear) || !years.includes(state.timelineYear)) {
    state.timelineYear = years[0];
  }
}

function groupPositionsByCategory(positions) {
  const groups = [];
  const map = new Map();
  positions.forEach((item) => {
    const key = `${normalizeText(item.cateZh).toLowerCase()}::${normalizeText(item.cateEn).toLowerCase()}`;
    if (!map.has(key)) {
      const group = {
        labelZh: item.cateZh,
        labelEn: item.cateEn,
        items: []
      };
      map.set(key, group);
      groups.push(group);
    }
    map.get(key).items.push(item);
  });
  return groups;
}

function getPositionUniqueKey(item) {
  return normalizeText(item.__key || `${item.titleZh}__${item.term}__${item.locZh}`);
}

function findDetailRowsForPosition(position) {
  const candidates = [
    normalizeDetailKey(position.titleZh),
    normalizeDetailKey(position.titleEn),
    normalizeDetailKey(position.__key)
  ].filter(Boolean);

  for (const key of candidates) {
    const rows = state.detailsByKey.get(key);
    if (rows && rows.length) {
      return rows.filter(hasVisibleDetail);
    }
  }
  return [];
}

function hasVisibleDetail(row) {
  if (!row) return false;
  if (row.isTag) {
    const hasDescription = Boolean(row.tagDescriptionZh || row.tagDescriptionEn);
    const hasTags = row.tagsZh.length > 0 || row.tagsEn.length > 0;
    return hasDescription || hasTags;
  }
  return Boolean(row.contentZh || row.contentEn);
}

function ensureColonSuffix(text) {
  const source = normalizeText(text);
  if (!source) return "";
  if (/[：:]$/.test(source)) return source;
  return `${source}：`;
}

function resolveIconSrc(iconValue) {
  const normalized = normalizeText(iconValue).toLowerCase();
  if (!normalized) return "";

  const direct = state.iconLookup.get(normalized);
  if (direct) return direct;

  const withExt = state.iconLookup.get(`${normalized}.png`) || state.iconLookup.get(`${normalized}.jpg`) || state.iconLookup.get(`${normalized}.jpeg`) || state.iconLookup.get(`${normalized}.svg`) || state.iconLookup.get(`${normalized}.webp`);
  if (withExt) return withExt;

  return `${ICON_DIR}${encodePathSegments(normalizeText(iconValue))}.png`;
}

function buildIconLookup(icons) {
  const map = new Map();
  icons.forEach((item) => {
    const name = normalizeText(item.name);
    const src = normalizeText(item.src);
    if (!name || !src) return;
    const lowerName = name.toLowerCase();
    map.set(lowerName, src);
    const basename = lowerName.replace(/\.[^.]+$/, "");
    map.set(basename, src);
  });
  return map;
}

function setupPortraitDeck() {
  if (!portraitFrame) return;

  const cards = Array.from(portraitFrame.querySelectorAll(".portrait-card"));
  if (!cards.length) return;

  const total = state.portraits.length;
  const visibleCount = getVisiblePortraitCardCount(total);
  const activeCards = cards.slice(0, visibleCount);
  const hiddenCards = cards.slice(visibleCount);
  hiddenCards.forEach(hidePortraitCard);

  if (!total || !activeCards.length) {
    stopPortraitAutoRotate();
    cards.forEach((card) => {
      hidePortraitCard(card);
    });
    state.portraitLayerByCard = new WeakMap();
    state.portraitIndexByCard = new WeakMap();
    state.portraitUnseenPool = [];
    return;
  }

  const visibleLayers = getPortraitLayersForCount(visibleCount);
  const allIndexes = state.portraits.map((_, index) => index);
  const shuffled = shuffleArray(allIndexes);
  const initial = shuffled.slice(0, Math.min(visibleCount, shuffled.length));
  while (initial.length < visibleCount) {
    initial.push(initial[initial.length - 1] ?? 0);
  }
  state.portraitUnseenPool = shuffled.slice(Math.min(visibleCount, shuffled.length));

  activeCards.forEach((card, index) => {
    const layer = visibleLayers[index] || "front";
    const photoIndex = initial[index] ?? initial[initial.length - 1] ?? 0;
    showPortraitCard(card);
    setCardLayer(card, layer);
    state.portraitIndexByCard.set(card, photoIndex);
    paintPortraitCard(card, photoIndex);
  });

  restartPortraitAutoRotate();
}

function handlePortraitInteraction() {
  rotatePortraitDeck();
  restartPortraitAutoRotate();
}

function rotatePortraitDeck() {
  if (!portraitFrame || state.portraitAnimating || state.portraits.length < 2) return;

  const cards = getVisiblePortraitCards();
  if (cards.length < 2) return;

  const layers = getPortraitLayersForCount(cards.length);
  const orderedCards = layers
    .map((layer) => cards.find((card) => getCardLayer(card) === layer))
    .filter(Boolean);
  if (orderedCards.length !== cards.length) return;

  state.portraitAnimating = true;
  cards.forEach((card) => card.classList.add("is-animating"));

  const recycledCard = orderedCards[orderedCards.length - 1];
  const exclude = new Set(
    orderedCards
      .slice(0, -1)
      .map((card) => state.portraitIndexByCard.get(card))
      .filter((index) => Number.isInteger(index))
  );
  const nextIndex = consumeNextPortraitIndex(exclude);

  orderedCards.forEach((card, index) => {
    const nextLayer = layers[(index + 1) % layers.length] || "front";
    setCardLayer(card, nextLayer);
  });
  state.portraitIndexByCard.set(recycledCard, nextIndex);
  paintPortraitCard(recycledCard, nextIndex);

  window.setTimeout(() => {
    cards.forEach((card) => card.classList.remove("is-animating"));
    state.portraitAnimating = false;
  }, 420);
}

function restartPortraitAutoRotate() {
  stopPortraitAutoRotate();
  if (state.portraits.length < 2 || getVisiblePortraitCards().length < 2) return;
  state.portraitAutoTimer = window.setInterval(() => {
    rotatePortraitDeck();
  }, PORTRAIT_AUTO_INTERVAL_MS);
}

function stopPortraitAutoRotate() {
  if (!state.portraitAutoTimer) return;
  window.clearInterval(state.portraitAutoTimer);
  state.portraitAutoTimer = 0;
}

function getCardLayer(card) {
  return state.portraitLayerByCard.get(card) || card.dataset.layer || "back";
}

function setCardLayer(card, layer) {
  card.dataset.layer = layer;
  state.portraitLayerByCard.set(card, layer);
  if (layer === "front") {
    card.style.zIndex = "3";
  } else if (layer === "middle") {
    card.style.zIndex = "2";
  } else {
    card.style.zIndex = "1";
  }
}

function paintPortraitCard(card, index) {
  const source = state.portraits[index];
  if (!source) {
    card.style.backgroundImage = "";
    card.style.backgroundColor = "#efefef";
    return;
  }
  showPortraitCard(card);
  card.style.backgroundImage = cssUrl(source.src);
  card.style.backgroundColor = "#efefef";
}

function getVisiblePortraitCardCount(total) {
  return Math.min(PORTRAIT_MAX_VISIBLE_CARDS, Math.max(0, total));
}

function getPortraitLayersForCount(count) {
  if (count >= 3) return ["back", "middle", "front"];
  if (count === 2) return ["middle", "front"];
  if (count === 1) return ["front"];
  return [];
}

function getVisiblePortraitCards() {
  if (!portraitFrame) return [];
  return Array.from(portraitFrame.querySelectorAll(".portrait-card:not([hidden])"));
}

function showPortraitCard(card) {
  card.hidden = false;
  card.removeAttribute("aria-hidden");
}

function hidePortraitCard(card) {
  card.hidden = true;
  card.setAttribute("aria-hidden", "true");
  card.classList.remove("is-animating");
  card.style.backgroundImage = "";
  card.style.backgroundColor = "";
  card.style.zIndex = "";
}

function consumeNextPortraitIndex(excludeSet = new Set()) {
  const total = state.portraits.length;
  if (!total) return 0;

  let candidates = state.portraitUnseenPool.filter((index) => !excludeSet.has(index));
  if (!candidates.length) {
    const allIndexes = state.portraits.map((_, index) => index);
    const refillPool = allIndexes.filter((index) => !excludeSet.has(index));
    state.portraitUnseenPool = shuffleArray(refillPool.length ? refillPool : allIndexes);
    candidates = state.portraitUnseenPool.filter((index) => !excludeSet.has(index));
  }

  if (!candidates.length) {
    return 0;
  }

  const randomIndex = Math.floor(Math.random() * candidates.length);
  const picked = candidates[randomIndex];
  const poolIndex = state.portraitUnseenPool.indexOf(picked);
  if (poolIndex >= 0) {
    state.portraitUnseenPool.splice(poolIndex, 1);
  }
  return picked;
}

function shuffleArray(source) {
  const array = [...source];
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

async function bootstrapLocalAndLoadData() {
  if (IS_FILE_PROTOCOL) {
    await initLocalContentsAccess();
  }
  await loadData();
}

async function loadData(isBackgroundSync = false) {
  if (state.loadingData) return;
  state.loadingData = true;

  try {
    if (IS_FILE_PROTOCOL) {
      const localLoaded = await loadDataFromLocalHandle(isBackgroundSync);
      if (!localLoaded) {
        await loadDataFromFetch(isBackgroundSync);
      }
      return;
    }
    await loadDataFromFetch(isBackgroundSync);
  } finally {
    state.loadingData = false;
  }
}

async function loadDataFromLocalHandle(isBackgroundSync) {
  if (!state.localContentsHandle) {
    return false;
  }

  try {
    const [introText, positionText, detailText, timelineText, personalizationText, portraitFiles, iconFiles] = await Promise.all([
      readTextFileByNameCandidatesFromHandle(state.localContentsHandle, ["aboutme", "assets"], ["intro.csv", "Intro.csv"], true),
      readTextFileFromHandle(state.localContentsHandle, ["aboutme", "assets", "position.csv"], true),
      readTextFileFromHandle(state.localContentsHandle, ["aboutme", "assets", "detail.csv"], true),
      readTextFileFromHandle(state.localContentsHandle, ["aboutme", "assets", "timeline.csv"], true),
      readTextFileFromHandle(state.localContentsHandle, ["assets", "site_personalization.json"], true),
      listImageFilesFromHandle(state.localContentsHandle, ["aboutme", "assets", "portrait"], true),
      listImageFilesFromHandle(state.localContentsHandle, ["aboutme", "assets", "icon"], true)
    ]);

    const portraitNames = portraitFiles.map((item) => item.name).join("|");
    const iconNames = iconFiles.map((item) => item.name).join("|");
    const signature = makeDataSignature("local", introText, positionText, detailText, timelineText, personalizationText, portraitNames, iconNames);
    if (signature === state.dataSignature) {
      return true;
    }

    const [portraits, icons] = await Promise.all([
      buildLocalAssetEntries(portraitFiles),
      buildLocalAssetEntries(iconFiles)
    ]);

    const parsedIntro = parseIntroCsv(introText);
    const parsedPositions = parsePositionCsv(positionText);
    const parsedDetails = parseDetailCsv(detailText);
    const parsedTimeline = parseTimelineCsv(timelineText);
    const hasAnyData = Boolean(
      hasIntroContent(parsedIntro) ||
      parsedPositions.length ||
      parsedDetails.size ||
      parsedTimeline.length ||
      portraits.length ||
      icons.length
    );
    if (!hasAnyData) {
      return false;
    }

    applyLoadedData({
      introText,
      positionText,
      detailText,
      timelineText,
      personalizationText,
      portraits,
      icons,
      intro: parsedIntro,
      positions: parsedPositions,
      detailsByKey: parsedDetails,
      timeline: parsedTimeline,
      signature
    });
    return true;
  } catch (error) {
    if (!isBackgroundSync) {
      console.warn("Local handle load failed, fallback to fetch.", error);
    }
    return false;
  }
}

async function loadDataFromFetch(isBackgroundSync = false) {
  let lastError = null;
  let hasLoadedFromAnyBase = false;

  for (const base of CONTENT_BASE_CANDIDATES) {
    try {
      const [introText, positionText, detailText, timelineText, personalizationText, portraitEntries, iconEntries] = await Promise.all([
        fetchFirstText(INTRO_FILE_CANDIDATES.map((path) => buildContentPath(base, path)), true),
        fetchText(buildContentPath(base, POSITION_FILE), true),
        fetchText(buildContentPath(base, DETAIL_FILE), true),
        fetchText(buildContentPath(base, TIMELINE_FILE), true),
        fetchText(buildContentPath(base, PERSONALIZATION_FILE), true),
        loadHttpImageEntries(buildContentPath(base, PORTRAIT_MANIFEST), buildContentPath(base, PORTRAIT_DIR)),
        loadHttpImageEntries(buildContentPath(base, ICON_MANIFEST), buildContentPath(base, ICON_DIR))
      ]);

      const rawPortraitNames = portraitEntries.map((item) => item.name).join("|");
      const rawIconNames = iconEntries.map((item) => item.name).join("|");
      const httpAssetListSignature = makeDataSignature(base, rawPortraitNames, rawIconNames);
      const shouldRevalidateHttpAssets = (
        !isBackgroundSync ||
        httpAssetListSignature !== state.httpAssetListSignature ||
        (Date.now() - state.httpAssetLastValidatedAt) >= HTTP_ASSET_REVALIDATE_INTERVAL_MS
      );

      let resolvedPortraitEntries = portraitEntries;
      let resolvedIconEntries = iconEntries;
      if (shouldRevalidateHttpAssets) {
        [resolvedPortraitEntries, resolvedIconEntries] = await Promise.all([
          filterLoadableHttpEntries(portraitEntries),
          filterLoadableHttpEntries(iconEntries)
        ]);
        state.httpAssetListSignature = httpAssetListSignature;
        state.httpAssetLastValidatedAt = Date.now();
      } else {
        resolvedPortraitEntries = reuseValidatedHttpEntries(portraitEntries, state.portraits);
        resolvedIconEntries = reuseValidatedHttpEntries(iconEntries, state.icons);
      }

      const parsedIntro = parseIntroCsv(introText);
      const parsedPositions = parsePositionCsv(positionText);
      const parsedDetails = parseDetailCsv(detailText);
      const parsedTimeline = parseTimelineCsv(timelineText);
      const hasAnyData = Boolean(
        hasIntroContent(parsedIntro) ||
        parsedPositions.length ||
        parsedDetails.size ||
        parsedTimeline.length ||
        resolvedPortraitEntries.length ||
        resolvedIconEntries.length
      );
      if (!hasAnyData) {
        continue;
      }

      const portraitNames = resolvedPortraitEntries.map((item) => item.name).join("|");
      const iconNames = resolvedIconEntries.map((item) => item.name).join("|");
      const signature = makeDataSignature(base, introText, positionText, detailText, timelineText, personalizationText, portraitNames, iconNames);
      if (signature === state.dataSignature) {
        return;
      }

      applyLoadedData({
        introText,
        positionText,
        detailText,
        timelineText,
        personalizationText,
        portraits: resolvedPortraitEntries,
        icons: resolvedIconEntries,
        intro: parsedIntro,
        positions: parsedPositions,
        detailsByKey: parsedDetails,
        timeline: parsedTimeline,
        signature
      });
      hasLoadedFromAnyBase = true;
      return;
    } catch (error) {
      lastError = error;
    }
  }

  if (!hasLoadedFromAnyBase && state.dataSignature !== "__missing__") {
    if (lastError) {
      console.warn("Failed to load about data from fetch candidates.", lastError);
    }
    state.dataSignature = "__missing__";
    clearDataState();
    renderAll();
  }
}

function applyLoadedData(payload) {
  state.dataSignature = payload.signature;
  state.intro = payload.intro || parseIntroCsv(payload.introText);
  state.positions = Array.isArray(payload.positions) ? payload.positions : parsePositionCsv(payload.positionText);
  state.detailsByKey = payload.detailsByKey instanceof Map ? payload.detailsByKey : parseDetailCsv(payload.detailText);
  state.timeline = Array.isArray(payload.timeline) ? payload.timeline : parseTimelineCsv(payload.timelineText);
  state.personalization = parsePersonalizationText(payload.personalizationText);

  revokeObjectUrls();
  state.portraits = normalizeAssetEntries(payload.portraits);
  state.icons = normalizeAssetEntries(payload.icons);
  state.iconLookup = buildIconLookup(state.icons);

  syncExpandedStates();
  syncTimelineFilters();

  renderAll();
}

function hasIntroContent(intro) {
  if (!intro || typeof intro !== "object") return false;
  return Boolean(
    normalizeText(intro.nameZh) ||
    normalizeText(intro.nameEn) ||
    normalizeText(intro.titleZh) ||
    normalizeText(intro.titleEn) ||
    normalizeText(intro.introZh) ||
    normalizeText(intro.introEn) ||
    normalizeText(intro.connectZh) ||
    normalizeText(intro.connectEn)
  );
}

function normalizeAssetEntries(entries) {
  if (!Array.isArray(entries)) return [];
  return entries
    .map((item) => {
      const name = normalizeText(item?.name);
      const src = normalizeText(item?.src);
      if (!name || !src) return null;
      if (src.startsWith("blob:")) {
        state.objectUrls.add(src);
      }
      return { name, src };
    })
    .filter(Boolean)
    .sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: "base" }));
}

function clearDataState() {
  state.intro = null;
  state.positions = [];
  state.detailsByKey = new Map();
  state.timeline = [];
  state.portraits = [];
  state.icons = [];
  state.iconLookup = new Map();
  state.personalization = cloneDefaultPersonalization();
  state.expandedPositionKeys.clear();
  state.timelineSortMode = "desc";
  state.timelineYear = null;
  state.timelineCateId = null;
  state.httpAssetListSignature = "";
  state.httpAssetLastValidatedAt = 0;
  stopPortraitAutoRotate();
  revokeObjectUrls();
}

function renderAll() {
  renderIntro();
  renderResume();
  renderTimeline();
  setupPortraitDeck();
  applyPersonalization();
}

function syncExpandedStates() {
  const validKeys = new Set(state.positions.map((item) => getPositionUniqueKey(item)));
  state.expandedPositionKeys.forEach((key) => {
    if (!validKeys.has(key)) {
      state.expandedPositionKeys.delete(key);
    }
  });
}

function syncTimelineFilters() {
  syncTimelineYearByData();
  syncTimelineCategoryByData();
}

function syncTimelineCategoryByData() {
  if (!state.timelineCateId) return;
  const valid = new Set(getTimelineCategories().map((item) => item.id));
  if (!valid.has(state.timelineCateId)) {
    state.timelineCateId = null;
  }
}

function startDataSync() {
  window.setInterval(() => {
    loadData(true);
  }, DATA_SYNC_INTERVAL_MS);
}

function makeDataSignature(...parts) {
  return parts.map((item) => String(item || "")).join("::");
}

function buildContentPath(base, relativePath) {
  if (!base || base === ".") return relativePath;
  return `${base}/${relativePath}`;
}

async function fetchText(path, optional = false) {
  const response = await fetch(path, { cache: "no-store" });
  if (!response.ok) {
    if (optional) return "";
    throw new Error(`Failed to load ${path}`);
  }
  return response.text();
}

async function fetchFirstText(paths, optional = false) {
  let lastError = null;
  for (const path of paths) {
    try {
      const text = await fetchText(path);
      return text;
    } catch (error) {
      lastError = error;
    }
  }
  if (lastError) {
    if (optional) return "";
    throw lastError;
  }
  if (optional) return "";
  throw new Error("No path provided");
}

async function loadHttpImageEntries(manifestPath, directoryPath) {
  const [manifestItems, directoryItems] = await Promise.all([
    loadManifestList(manifestPath),
    loadDirectoryImageList(directoryPath)
  ]);
  const resolvedItems = directoryItems.length ? directoryItems : manifestItems;
  return resolvedItems.map((name) => ({
    name,
    src: `${directoryPath}${encodePathSegments(name)}`
  }));
}

async function loadManifestList(path) {
  try {
    const text = await fetchText(path, true);
    if (!text.trim()) return [];
    return normalizeManifestJson(text);
  } catch (error) {
    return [];
  }
}

async function loadDirectoryImageList(directoryPath) {
  try {
    const response = await fetch(directoryPath, { cache: "no-store" });
    if (!response.ok) return [];
    const contentType = String(response.headers.get("content-type") || "").toLowerCase();
    const text = await response.text();

    if (contentType.includes("application/json")) {
      return normalizeManifestJson(text);
    }

    const doc = new DOMParser().parseFromString(text, "text/html");
    const names = new Set();
    doc.querySelectorAll("a[href]").forEach((anchor) => {
      const href = String(anchor.getAttribute("href") || "").trim();
      if (!href || href.startsWith("#")) return;
      let url;
      try {
        url = new URL(href, response.url);
      } catch (error) {
        return;
      }
      const fileName = decodeURIComponent(url.pathname.split("/").pop() || "");
      if (!IMAGE_FILE_RE.test(fileName)) return;
      names.add(fileName);
    });
    return Array.from(names)
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }));
  } catch (error) {
    return [];
  }
}

function reuseValidatedHttpEntries(entries, validatedEntries) {
  if (!Array.isArray(entries) || !entries.length || !Array.isArray(validatedEntries)) return [];
  const validNames = new Set(
    validatedEntries
      .map((item) => normalizeText(item?.name))
      .filter(Boolean)
  );
  return entries.filter((item) => validNames.has(normalizeText(item?.name)));
}

async function filterLoadableHttpEntries(entries) {
  if (!Array.isArray(entries) || !entries.length) return [];
  const results = await Promise.all(entries.map(async (item) => {
    const name = normalizeText(item?.name);
    const src = normalizeText(item?.src);
    if (!name || !src) return null;
    const isAvailable = await probeHttpAsset(src);
    return isAvailable ? { name, src } : null;
  }));
  return results.filter(Boolean);
}

async function probeHttpAsset(src) {
  const probeSrc = appendProbeQuery(src);
  try {
    const response = await fetch(probeSrc, {
      method: "HEAD",
      cache: "no-store"
    });
    if (response.ok) return true;
    if (response.status && response.status !== 405) {
      return false;
    }
  } catch (error) {
    // Fall through to an image probe when HEAD is unavailable.
  }
  return probeImageSource(probeSrc);
}

function probeImageSource(src) {
  return new Promise((resolve) => {
    const image = new Image();
    let settled = false;
    const finish = (value) => {
      if (settled) return;
      settled = true;
      image.onload = null;
      image.onerror = null;
      resolve(value);
    };
    const timer = window.setTimeout(() => finish(false), 5000);
    image.onload = () => {
      window.clearTimeout(timer);
      finish(true);
    };
    image.onerror = () => {
      window.clearTimeout(timer);
      finish(false);
    };
    image.src = src;
  });
}

function appendProbeQuery(src) {
  const token = `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`;
  return `${src}${src.includes("?") ? "&" : "?"}__probe=${token}`;
}

function normalizeManifestJson(text) {
  let parsed = null;
  try {
    parsed = JSON.parse(text);
  } catch (error) {
    return [];
  }

  if (Array.isArray(parsed)) {
    return parsed.map((item) => normalizeText(item)).filter((name) => IMAGE_FILE_RE.test(name));
  }

  if (parsed && Array.isArray(parsed.files)) {
    return parsed.files.map((item) => normalizeText(item)).filter((name) => IMAGE_FILE_RE.test(name));
  }

  return [];
}

function encodePathSegments(path) {
  return String(path)
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/");
}

function parseCsv(text) {
  const input = String(text || "");
  if (!input.trim()) return [];

  const rows = [];
  let currentRow = [];
  let currentField = "";
  let inQuotes = false;

  for (let i = 0; i < input.length; i += 1) {
    const char = input[i];

    if (char === '"') {
      const next = input[i + 1];
      if (inQuotes && next === '"') {
        currentField += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (char === "," && !inQuotes) {
      currentRow.push(currentField);
      currentField = "";
      continue;
    }

    if ((char === "\n" || char === "\r") && !inQuotes) {
      currentRow.push(currentField);
      currentField = "";
      if (currentRow.some((cell) => String(cell || "").trim() !== "")) {
        rows.push(currentRow);
      }
      currentRow = [];
      if (char === "\r" && input[i + 1] === "\n") {
        i += 1;
      }
      continue;
    }

    currentField += char;
  }

  currentRow.push(currentField);
  if (currentRow.some((cell) => String(cell || "").trim() !== "")) {
    rows.push(currentRow);
  }

  if (!rows.length) return [];

  const headers = rows.shift().map((header, index) => {
    const textValue = index === 0 ? stripBom(header) : header;
    return normalizeText(textValue);
  });

  return rows.map((values) => {
    const record = {};
    headers.forEach((header, index) => {
      record[header] = values[index] ?? "";
    });
    return record;
  });
}

function parseIntroCsv(text) {
  const records = parseCsv(text);
  if (!records.length) return null;
  const row = records[0];
  return {
    nameZh: getField(row, ["NAME", "name"]),
    titleZh: getField(row, ["Title", "title"]),
    introZh: getField(row, ["introduction"]),
    connectZh: getField(row, ["connect"]),
    nameEn: getField(row, ["NAME_en", "name_en"]),
    titleEn: getField(row, ["Title_en", "title_en"]),
    introEn: getField(row, ["introduction_en"]),
    connectEn: getField(row, ["connect_en"])
  };
}

function parsePositionCsv(text) {
  const records = parseCsv(text);
  return records
    .map((row, index) => {
      const item = {
        cateZh: getField(row, ["cate"]),
        cateEn: getField(row, ["cate_en"]),
        icon: getField(row, ["icon"]),
        titleZh: getField(row, ["title"]),
        titleEn: getField(row, ["title_en"]),
        positionZh: getField(row, ["position"]),
        positionEn: getField(row, ["position_en"]),
        departmentZh: getField(row, ["department"]),
        departmentEn: getField(row, ["department_en"]),
        term: getField(row, ["term"]),
        locZh: getField(row, ["loc"]),
        locEn: getField(row, ["loc_en"]),
        __key: getField(row, ["key"]) || `row-${index + 1}-${getField(row, ["title"])}`
      };
      const hasContent = [
        item.cateZh,
        item.cateEn,
        item.icon,
        item.titleZh,
        item.titleEn,
        item.positionZh,
        item.positionEn,
        item.departmentZh,
        item.departmentEn,
        item.term,
        item.locZh,
        item.locEn
      ].some((value) => String(value || "").trim());
      return hasContent ? item : null;
    })
    .filter(Boolean);
}

function parseDetailCsv(text) {
  const records = parseCsv(text);
  const map = new Map();

  records.forEach((row) => {
    const keyRaw = getField(row, ["key"]);
    const key = normalizeDetailKey(keyRaw);
    if (!key) return;

    const tagFlag = getField(row, ["tag"]).toLowerCase() === "y";
    const detailRow = {
      isTag: tagFlag,
      tagDescriptionZh: getField(row, ["tag_description"]),
      tagDescriptionEn: getField(row, ["tag_description_en"]),
      tagsZh: splitTagList(getField(row, ["tag_content"])),
      tagsEn: splitTagList(getField(row, ["tag_content_en"])),
      contentZh: normalizeMultilineField(getField(row, ["content"], true)),
      contentEn: normalizeMultilineField(getField(row, ["content_en"], true))
    };

    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(detailRow);
  });

  return map;
}

function parseTimelineCsv(text) {
  const records = parseCsv(text);
  return records
    .map((row, index) => {
      const year = parseIntegerSafe(getField(row, ["y"]));
      const month = parseIntegerSafe(getField(row, ["m"]));
      const day = parseIntegerSafe(getField(row, ["d"]));

      const cateZh = getField(row, ["cate"]);
      const cateEn = getField(row, ["cate_en"]);
      const cateKeyZh = normalizeText(cateZh).toLowerCase();
      const cateKeyEn = normalizeText(cateEn).toLowerCase();
      const cateId = cateKeyZh || cateKeyEn ? `${cateKeyZh}::${cateKeyEn}` : "uncategorized";

      const monthSafe = Number.isFinite(month) && month > 0 ? month : 1;
      const daySafe = Number.isFinite(day) && day > 0 ? day : 1;
      const sortKey = (Number.isFinite(year) ? year : 0) * 10000 + monthSafe * 100 + daySafe;

      return {
        year: Number.isFinite(year) ? year : null,
        month: Number.isFinite(month) ? month : null,
        day: Number.isFinite(day) ? day : null,
        cateZh,
        cateEn,
        cateId,
        countryZh: getField(row, ["country"]),
        countryEn: getField(row, ["country_en"]),
        cityZh: getField(row, ["city"]),
        cityEn: getField(row, ["city_en"]),
        eventZh: normalizeMultilineField(getField(row, ["event"], true)),
        eventEn: normalizeMultilineField(getField(row, ["event_en"], true)),
        link: getField(row, ["link"]),
        sortKey,
        displayDate: formatTimelineDate(year, month, day)
      };
    })
    .filter((item) => {
      return Boolean(
        item.year ||
        item.month ||
        item.day ||
        item.eventZh ||
        item.eventEn ||
        item.countryZh ||
        item.countryEn ||
        item.cityZh ||
        item.cityEn
      );
    });
}

function parseIntegerSafe(value) {
  const parsed = Number.parseInt(String(value || "").trim(), 10);
  return Number.isFinite(parsed) ? parsed : null;
}

function formatTimelineDate(year, month, day) {
  const parts = [];
  if (Number.isFinite(year)) {
    parts.push(String(year));
  }
  if (Number.isFinite(month)) {
    parts.push(String(month));
  }
  if (Number.isFinite(day)) {
    parts.push(String(day));
  }
  return parts.join(".");
}

function splitTagList(raw) {
  const text = normalizeText(raw);
  if (!text) return [];
  return text
    .split(/[,，]/)
    .map((item) => normalizeText(item))
    .filter(Boolean);
}

function getField(record, candidates, preserveWhitespace = false) {
  const keys = Object.keys(record || {});
  for (const candidate of candidates) {
    const target = String(candidate || "").trim().toLowerCase();
    const matched = keys.find((key) => String(key || "").trim().toLowerCase() === target);
    if (!matched) continue;
    const raw = record[matched];
    if (preserveWhitespace) {
      return stripBom(String(raw ?? "")).replace(/\r\n/g, "\n").replace(/\r/g, "\n");
    }
    return normalizeText(raw);
  }
  return "";
}

function normalizeText(value) {
  return stripBom(String(value ?? "")).trim();
}

function normalizeMultilineField(value) {
  return stripBom(String(value ?? ""))
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .trim();
}

function stripBom(value) {
  return String(value || "").replace(/^\uFEFF/, "");
}

function normalizeDetailKey(value) {
  return normalizeText(value).toLowerCase();
}

function pickFirstNonEmpty(values) {
  for (const value of values) {
    const normalized = normalizeText(value);
    if (normalized) return normalized;
  }
  return "";
}

function markdownToHtml(source) {
  const text = normalizeMultilineField(source);
  if (!text) return "";

  const lines = text.split("\n");
  const blocks = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];
    if (!line.trim()) {
      index += 1;
      continue;
    }

    if (/^\s*[-*+]\s+/.test(line)) {
      const items = [];
      while (index < lines.length && /^\s*[-*+]\s+/.test(lines[index])) {
        items.push(lines[index].replace(/^\s*[-*+]\s+/, ""));
        index += 1;
      }
      blocks.push(`<ul>${items.map((item) => `<li>${inlineMarkdown(item)}</li>`).join("")}</ul>`);
      continue;
    }

    if (/^\s*\d+\.\s+/.test(line)) {
      const items = [];
      while (index < lines.length && /^\s*\d+\.\s+/.test(lines[index])) {
        items.push(lines[index].replace(/^\s*\d+\.\s+/, ""));
        index += 1;
      }
      blocks.push(`<ol>${items.map((item) => `<li>${inlineMarkdown(item)}</li>`).join("")}</ol>`);
      continue;
    }

    const paragraph = [];
    while (index < lines.length && lines[index].trim() && !/^\s*[-*+]\s+/.test(lines[index]) && !/^\s*\d+\.\s+/.test(lines[index])) {
      paragraph.push(lines[index]);
      index += 1;
    }
    blocks.push(`<p>${paragraph.map((segment) => inlineMarkdown(segment)).join("<br>")}</p>`);
  }

  return blocks.join("");
}

function inlineMarkdown(text) {
  let html = escapeHtml(String(text || ""));

  html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/__(.+?)__/g, "<strong>$1</strong>");
  html = html.replace(/~~(.+?)~~/g, "<del>$1</del>");
  html = html.replace(/\+\+(.+?)\+\+/g, "<u>$1</u>");
  html = html.replace(/\*(.+?)\*/g, "<em>$1</em>");
  html = html.replace(/_(.+?)_/g, "<em>$1</em>");

  html = html.replace(/\[(.+?)\]\((https?:\/\/[^\s)]+)\)/g, (_match, label, url) => {
    const safeLabel = escapeHtml(label);
    const safeUrl = escapeHtml(url);
    return `<a href="${safeUrl}" target="_blank" rel="noopener noreferrer">${safeLabel}</a>`;
  });

  return html;
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function cssUrl(value) {
  const escaped = String(value || "").replace(/(["\\])/g, "\\$1");
  return `url("${escaped}")`;
}

function isLikelyTransparentAsset(src) {
  const value = String(src || "");
  const cleanPath = value.split("?")[0].split("#")[0].toLowerCase();
  return /\.(png|webp|gif|svg|avif)$/.test(cleanPath);
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

function sanitizeBrandText(value) {
  const text = String(value || "").trim();
  return PLACEHOLDER_BRAND_TEXTS.has(text) ? "" : text;
}

function normalizePersonalization(raw) {
  const next = cloneDefaultPersonalization();
  if (!raw || typeof raw !== "object") return next;

  const legacyBrand = sanitizeBrandText(raw.navBrandText ?? raw.brandText ?? raw.nav_brand_text ?? "");
  const brandZh = sanitizeBrandText(raw.navBrandTextZh ?? raw.nav_brand_text_zh ?? legacyBrand);
  const brandEn = sanitizeBrandText(raw.navBrandTextEn ?? raw.nav_brand_text_en ?? legacyBrand);
  if (brandZh) next.navBrandTextZh = brandZh;
  if (brandEn) next.navBrandTextEn = brandEn;

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

function parsePersonalizationText(text) {
  if (!String(text || "").trim()) {
    return cloneDefaultPersonalization();
  }
  try {
    const parsed = JSON.parse(text);
    return normalizePersonalization(parsed);
  } catch (error) {
    return cloneDefaultPersonalization();
  }
}

function applyPersonalization() {
  if (siteBrandText) {
    siteBrandText.textContent = state.lang === "zh" ? NAV_BRAND_TEXT.zh : NAV_BRAND_TEXT.en;
  }

  if (!siteFooterCopy) return;

  const footerHtml = state.lang === "zh"
    ? String(state.personalization.footerHtmlZh || state.personalization.footerHtmlEn || "").trim()
    : String(state.personalization.footerHtmlEn || state.personalization.footerHtmlZh || "").trim();
  const footerRangesPrimary = state.lang === "zh"
    ? (state.personalization.footerBgRangesZh || [])
    : (state.personalization.footerBgRangesEn || []);
  const footerRangesFallback = state.lang === "zh"
    ? (state.personalization.footerBgRangesEn || [])
    : (state.personalization.footerBgRangesZh || []);
  const footerRangesRaw = footerRangesPrimary.length ? footerRangesPrimary : footerRangesFallback;
  const normalizedFooterRanges = normalizeLineRanges(footerRangesRaw);

  const shouldShowFooter = Boolean(state.personalization.footerEnabled) && Boolean(footerHtml);
  siteFooterCopy.hidden = !shouldShowFooter;
  siteFooterCopy.innerHTML = shouldShowFooter ? footerHtml : "";

  if (!shouldShowFooter) {
    siteFooterCopy.classList.remove("has-range-bg");
    siteFooterCopy.style.removeProperty("--footer-tail-fill-height");
    siteFooterCopy.style.removeProperty("--footer-tail-fill-color");
    siteFooterCopy.style.removeProperty("--footer-tail-fill-width");
    return;
  }

  const hasRangeBackground = normalizedFooterRanges.length > 0;
  const tailColor = hasRangeBackground ? getFooterTailColor(normalizedFooterRanges) : "";
  siteFooterCopy.classList.toggle("has-range-bg", hasRangeBackground);
  if (tailColor) {
    siteFooterCopy.style.setProperty("--footer-tail-fill-color", tailColor);
  } else {
    siteFooterCopy.style.removeProperty("--footer-tail-fill-color");
  }

  applyLineDecorations(siteFooterCopy, footerRangesRaw, "footer-line-");
  updateFooterBackgroundExtent();
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
    const color = normalizeRangeColor(item.color);
    byKey.set(`${start}-${end}`, { start, end, color });
  });
  return Array.from(byKey.values()).sort((a, b) => {
    if (a.start !== b.start) return a.start - b.start;
    if (a.end !== b.end) return a.end - b.end;
    return a.color.localeCompare(b.color);
  });
}

function normalizeRangeColor(value) {
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
  return "#f5f2ed";
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

function getFooterTailColor(ranges) {
  const normalized = normalizeLineRanges(ranges);
  if (!normalized.length) return "";
  const maxEnd = normalized.reduce((max, range) => Math.max(max, range.end), 1);
  return resolveLineColor(maxEnd, normalized);
}

function isLineTargetElement(node, container) {
  if (!(node instanceof HTMLElement)) return false;
  if (node === container) return false;
  if (node.classList.contains("page-line-anchor")) return false;

  const tag = node.tagName;
  if (["H1", "H2", "H3", "H4", "H5", "H6", "P", "LI", "BLOCKQUOTE", "PRE", "TABLE", "HR", "FIGURE"].includes(tag)) {
    return true;
  }
  return false;
}

function getLineTargets(container) {
  if (!container) return [];
  const targets = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT);
  let current = walker.nextNode();
  while (current) {
    if (isLineTargetElement(current, container)) {
      targets.push(current);
    }
    current = walker.nextNode();
  }
  if (targets.length) return targets;
  return Array.from(container.children).filter((node) => node instanceof HTMLElement && !node.classList.contains("page-line-anchor"));
}

function applyLineDecorations(container, ranges, anchorPrefix = "line-") {
  if (!container) return;
  container.querySelectorAll(".page-line-anchor").forEach((node) => node.remove());

  const scope = anchorPrefix.startsWith("footer-line-") ? "footer-content" : "content";
  const existingLayer = container.querySelector(`.page-range-layer[data-scope="${scope}"]`);
  if (existingLayer) {
    existingLayer.remove();
  }
  container.classList.remove("page-range-host");

  const lineElements = getLineTargets(container);
  const normalizedRanges = normalizeLineRanges(ranges);

  lineElements.forEach((element, index) => {
    const lineNumber = index + 1;
    const anchor = document.createElement("span");
    anchor.className = "page-line-anchor";
    anchor.id = `${anchorPrefix}${lineNumber}`;
    element.parentNode?.insertBefore(anchor, element);
  });

  renderRangeLayer(container, lineElements, normalizedRanges, scope);
}

function renderRangeLayer(host, lineElements, ranges, scope = "content") {
  if (!host) return;
  if (!lineElements.length || !ranges.length) return;

  host.classList.add("page-range-host");
  const layer = document.createElement("div");
  layer.className = "page-range-layer";
  layer.dataset.scope = scope;
  layer.setAttribute("aria-hidden", "true");
  host.prepend(layer);

  const hostRect = host.getBoundingClientRect();
  const maxBottom = Math.max(host.scrollHeight, host.clientHeight);
  const fragment = document.createDocumentFragment();

  ranges.forEach((range) => {
    const startLine = Math.min(Math.max(range.start, 1), lineElements.length);
    const endLine = Math.min(Math.max(range.end, startLine), lineElements.length);
    const startElement = lineElements[startLine - 1];
    const endElement = lineElements[endLine - 1];
    if (!(startElement instanceof HTMLElement) || !(endElement instanceof HTMLElement)) return;

    const startRect = startElement.getBoundingClientRect();
    const endRect = endElement.getBoundingClientRect();
    const top = Math.max(0, Math.round(startRect.top - hostRect.top));
    let bottom = Math.min(maxBottom, Math.max(top, Math.round(endRect.bottom - hostRect.top)));
    if (endLine < lineElements.length) {
      const nextElement = lineElements[endLine];
      if (nextElement instanceof HTMLElement) {
        const nextRect = nextElement.getBoundingClientRect();
        const nextTop = Math.max(top, Math.round(nextRect.top - hostRect.top));
        bottom = Math.min(bottom, nextTop);
      }
    }
    if (bottom <= top) return;

    const block = document.createElement("div");
    block.className = "page-range-block";
    block.style.top = `${top}px`;
    block.style.height = `${bottom - top}px`;
    block.style.setProperty("--line-bg-color", range.color);
    fragment.appendChild(block);
  });

  if (!fragment.childNodes.length) {
    layer.remove();
    host.classList.remove("page-range-host");
    return;
  }

  layer.appendChild(fragment);
}

function scheduleFooterLayoutRefresh() {
  if (footerLayoutRaf) return;
  footerLayoutRaf = window.requestAnimationFrame(() => {
    footerLayoutRaf = 0;
    updateFooterBackgroundExtent();
  });
}

function updateFooterBackgroundExtent() {
  if (!siteFooterCopy) return;
  if (siteFooterCopy.hidden || !siteFooterCopy.classList.contains("has-range-bg")) {
    siteFooterCopy.style.removeProperty("--footer-tail-fill-height");
    siteFooterCopy.style.removeProperty("--footer-tail-fill-width");
    return;
  }

  const viewportWidth = document.documentElement.clientWidth || window.innerWidth || 0;
  if (viewportWidth > 0) {
    siteFooterCopy.style.setProperty("--footer-tail-fill-width", `${viewportWidth}px`);
  } else {
    siteFooterCopy.style.removeProperty("--footer-tail-fill-width");
  }

  const rect = siteFooterCopy.getBoundingClientRect();
  const viewportTail = Math.max(0, Math.ceil(window.innerHeight - rect.bottom));
  const tailHeight = Math.min(FOOTER_TAIL_MAX_FILL_PX, viewportTail);
  if (tailHeight > 0) {
    siteFooterCopy.style.setProperty("--footer-tail-fill-height", `${tailHeight}px`);
  } else {
    siteFooterCopy.style.removeProperty("--footer-tail-fill-height");
  }
}

async function initLocalContentsAccess() {
  if (!localOpenElements.modal) return;

  if (!supportsDirectoryPicker()) {
    const strings = i18n[state.lang] || i18n.en;
    showLocalOpenModal(strings.local.unsupported, "error");
    if (localOpenElements.pick) {
      localOpenElements.pick.disabled = true;
    }
    return;
  }

  let stored = null;
  try {
    stored = await readStoredLocalContentsHandle();
  } catch (error) {
    showLocalOpenModal();
    return;
  }

  if (!stored) {
    showLocalOpenModal();
    return;
  }

  const allowed = await ensureHandlePermission(stored, false);
  if (!allowed) {
    showLocalOpenModal();
    return;
  }

  const resolved = await resolveContentsHandle(stored);
  if (!resolved) {
    showLocalOpenModal();
    return;
  }

  state.localContentsHandle = resolved;
  hideLocalOpenModal();
}

async function chooseLocalContentsFolder() {
  if (!supportsDirectoryPicker()) {
    const strings = i18n[state.lang] || i18n.en;
    showLocalOpenModal(strings.local.unsupported, "error");
    return;
  }

  const strings = i18n[state.lang] || i18n.en;
  showLocalOpenModal(strings.local.waiting);

  try {
    const selected = await window.showDirectoryPicker();
    const allowed = await ensureHandlePermission(selected, true);
    if (!allowed) {
      showLocalOpenModal(strings.local.denied, "error");
      return;
    }

    const resolved = await resolveContentsHandle(selected);
    if (!resolved) {
      showLocalOpenModal(strings.local.invalid, "error");
      return;
    }

    state.localContentsHandle = resolved;
    try {
      await storeLocalContentsHandle(selected);
    } catch (error) {
      console.warn("Failed to store folder handle", error);
    }

    hideLocalOpenModal();
    await loadData();
  } catch (error) {
    if (error && error.name === "AbortError") {
      showLocalOpenModal(strings.local.canceled);
      return;
    }
    showLocalOpenModal(`${strings.local.failedPrefix}${error.message}`, "error");
  }
}

function supportsDirectoryPicker() {
  return "showDirectoryPicker" in window;
}

function showLocalOpenModal(message = "", tone = "") {
  if (!localOpenElements.modal) return;
  localOpenElements.modal.hidden = false;
  setLocalOpenStatus(message, tone);
}

function hideLocalOpenModal() {
  if (!localOpenElements.modal) return;
  localOpenElements.modal.hidden = true;
  setLocalOpenStatus("");
}

function setLocalOpenStatus(message, tone = "") {
  if (!localOpenElements.status) return;
  localOpenElements.status.textContent = message || "";
  if (tone) {
    localOpenElements.status.dataset.tone = tone;
  } else {
    delete localOpenElements.status.dataset.tone;
  }
}

async function resolveContentsHandle(selectedHandle) {
  if (!selectedHandle || selectedHandle.kind !== "directory") {
    return null;
  }

  if (await isContentsHandle(selectedHandle)) {
    return selectedHandle;
  }

  try {
    const nested = await selectedHandle.getDirectoryHandle("contents", { create: false });
    if (await isContentsHandle(nested)) {
      return nested;
    }
  } catch (error) {
    return null;
  }

  return null;
}

async function isContentsHandle(handle) {
  const hasAssets = await directoryExistsOnHandle(handle, "assets");
  const hasAbout = await directoryExistsOnHandle(handle, "aboutme");
  return hasAssets && hasAbout;
}

async function directoryExistsOnHandle(handle, name) {
  try {
    await handle.getDirectoryHandle(name, { create: false });
    return true;
  } catch (error) {
    return false;
  }
}

async function ensureHandlePermission(handle, request, mode = "read") {
  const options = { mode };
  if ((await handle.queryPermission(options)) === "granted") {
    return true;
  }
  if (!request) return false;
  return (await handle.requestPermission(options)) === "granted";
}

function openLocalHandleDb() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(LOCAL_HANDLE_DB, 1);
    request.onupgradeneeded = () => {
      request.result.createObjectStore("handles");
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function storeLocalContentsHandle(handle) {
  const db = await openLocalHandleDb();
  await new Promise((resolve, reject) => {
    const tx = db.transaction("handles", "readwrite");
    tx.objectStore("handles").put(handle, LOCAL_HANDLE_KEY);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
  db.close();
}

async function readStoredLocalContentsHandle() {
  const db = await openLocalHandleDb();
  const handle = await new Promise((resolve, reject) => {
    const tx = db.transaction("handles", "readonly");
    const request = tx.objectStore("handles").get(LOCAL_HANDLE_KEY);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
  db.close();
  return handle || null;
}

async function readTextFileFromHandle(root, segments, optional = false) {
  try {
    let directory = root;
    for (let index = 0; index < segments.length - 1; index += 1) {
      directory = await directory.getDirectoryHandle(segments[index], { create: false });
    }
    const fileHandle = await directory.getFileHandle(segments[segments.length - 1], { create: false });
    const file = await fileHandle.getFile();
    return await file.text();
  } catch (error) {
    if (optional) return "";
    throw new Error(`Failed to read ${segments.join("/")}`);
  }
}

async function readTextFileByNameCandidatesFromHandle(root, directorySegments, fileNames, optional = false) {
  let lastError = null;
  for (const fileName of fileNames) {
    try {
      return await readTextFileFromHandle(root, [...directorySegments, fileName]);
    } catch (error) {
      lastError = error;
    }
  }
  if (lastError) {
    if (optional) return "";
    throw lastError;
  }
  if (optional) return "";
  throw new Error("No file candidates provided");
}

async function listImageFilesFromHandle(root, segments, optional = false) {
  try {
    let directory = root;
    for (let index = 0; index < segments.length; index += 1) {
      directory = await directory.getDirectoryHandle(segments[index], { create: false });
    }

    const files = [];
    for await (const [name, handle] of directory.entries()) {
      if (handle.kind !== "file") continue;
      if (!IMAGE_FILE_RE.test(name)) continue;
      files.push({ name, handle });
    }

    files.sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: "base" }));
    return files;
  } catch (error) {
    if (optional) return [];
    throw error;
  }
}

async function buildLocalAssetEntries(files) {
  const entries = [];
  for (const item of files) {
    const file = await item.handle.getFile();
    const src = URL.createObjectURL(file);
    entries.push({ name: item.name, src });
  }
  return entries;
}

function revokeObjectUrls() {
  state.objectUrls.forEach((url) => {
    if (typeof url === "string" && url.startsWith("blob:")) {
      URL.revokeObjectURL(url);
    }
  });
  state.objectUrls.clear();
}
