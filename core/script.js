const i18n = {
  zh: {
    page: {
      title: "项目目录"
    },
    nav: {
      projects: "项目",
      about: "关于我",
      ariaLabel: "主导航",
      langToggleAria: "切换语言"
    },
    filters: {
      ariaLabel: "项目筛选",
      all: "全部作品",
      more: "更多分类",
      close: "收起分类"
    },
    projects: {
      empty: "暂无项目"
    }
  },
  en: {
    page: {
      title: "Project Directory"
    },
    nav: {
      projects: "Projects",
      about: "About",
      ariaLabel: "Primary",
      langToggleAria: "Switch language"
    },
    filters: {
      ariaLabel: "Project Filters",
      all: "All Works",
      more: "More Filters",
      close: "Hide Filters"
    },
    projects: {
      empty: "No projects yet."
    }
  }
};

let projects = [];
let projectTypes = [];
const CONTENT_BASE_CANDIDATES = ["contents"];
const DATA_SYNC_INTERVAL_MS = 3000;
const LOCAL_HANDLE_DB = "site-content-store";
const LOCAL_HANDLE_KEY = "contents";
const IS_FILE_PROTOCOL = window.location.protocol === "file:";
const PERSONALIZATION_FILE = "site_personalization.json";
const FOOTER_TAIL_MAX_FILL_PX = 180;
const DEFAULT_PERSONALIZATION = Object.freeze({
  navBrandTextZh: "XXX的个人空间",
  navBrandTextEn: "XXX's Space",
  footerEnabled: false,
  footerHtmlZh: "",
  footerHtmlEn: "",
  footerBgRangesZh: [],
  footerBgRangesEn: []
});

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

const state = {
  lang: detectLanguage(),
  filter: getInitialFilterFromUrl(),
  mobileFiltersOpen: false,
  contentBase: "contents",
  dataSignature: "",
  loadingData: false,
  localContentsHandle: null,
  personalization: cloneDefaultPersonalization()
};
let isCompactFilters = window.matchMedia("(max-width: 720px)").matches;

const grid = document.getElementById("project-grid");
const emptyState = document.getElementById("empty-state");
const filterContainer = document.getElementById("filter-buttons");
const langToggle = document.querySelector("[data-lang-toggle]");
const siteBrandText = document.getElementById("site-brand-text");
const projectsNavLink = document.querySelector(".top-nav .nav-btn[data-i18n='nav.projects']");
const siteFooterCopy = document.getElementById("site-footer-copy");
const localOpenElements = {
  modal: document.getElementById("local-open-modal"),
  pick: document.getElementById("local-open-pick"),
  later: document.getElementById("local-open-later"),
  status: document.getElementById("local-open-status")
};
let layoutRaf = 0;

applyI18n(state.lang);
updateLangToggle();
applyPersonalization();
setupBrandNavigation();
bootstrapLocalAndLoadData();
startDataSync();

if (langToggle) {
  langToggle.addEventListener("click", () => {
    const nextLang = state.lang === "zh" ? "en" : "zh";
    setLanguage(nextLang);
  });
}

if (filterContainer) {
  filterContainer.addEventListener("click", (event) => {
    const toggle = event.target.closest(".filter-menu-toggle");
    if (toggle) {
      state.mobileFiltersOpen = !state.mobileFiltersOpen;
      renderFilters();
      return;
    }

    const button = event.target.closest(".filter-btn");
    if (!button) return;
    const filter = button.dataset.filter || "all";
    if (filter === state.filter) return;
    state.filter = filter;
    state.mobileFiltersOpen = false;
    renderFilters();
    renderProjects();
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

window.addEventListener("resize", handleWindowResize);
window.addEventListener("load", scheduleMasonryLayout);
document.addEventListener("visibilitychange", () => {
  if (!document.hidden) {
    loadData(true);
  }
});

function detectLanguage() {
  const saved = localStorage.getItem("siteLang");
  if (saved === "zh" || saved === "en") {
    return saved;
  }
  const lang = (navigator.language || "en").toLowerCase();
  return lang.startsWith("zh") ? "zh" : "en";
}

function getInitialFilterFromUrl() {
  const filter = new URLSearchParams(window.location.search).get("filter");
  if (!filter) return "all";
  const normalized = String(filter).trim();
  return normalized || "all";
}

function setLanguage(lang) {
  state.lang = lang;
  localStorage.setItem("siteLang", lang);
  applyI18n(lang);
  updateLangToggle();
  applyPersonalization();
  renderFilters();
  renderProjects();
}

function updateLangToggle() {
  if (!langToggle) return;
  langToggle.textContent = state.lang === "zh" ? "EN" : "中文";
}

function applyI18n(lang) {
  const strings = i18n[lang] || i18n.en;

  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.title = strings.page.title;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    const value = resolveKey(strings, key);
    if (value) {
      el.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    const mapping = el.dataset.i18nAttr.split(",");
    mapping.forEach((pair) => {
      const [attr, key] = pair.split(":");
      if (!attr || !key) return;
      const value = resolveKey(strings, key.trim());
      if (value) {
        el.setAttribute(attr.trim(), value);
      }
    });
  });
}

function resolveKey(source, key) {
  return key.split(".").reduce((acc, part) => (acc ? acc[part] : null), source);
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

function normalizePersonalization(raw) {
  const next = cloneDefaultPersonalization();
  if (!raw || typeof raw !== "object") return next;

  const legacyBrand = String(raw.navBrandText ?? raw.brandText ?? raw.nav_brand_text ?? "").trim();
  const brandZh = String(raw.navBrandTextZh ?? raw.nav_brand_text_zh ?? legacyBrand).trim();
  const brandEn = String(raw.navBrandTextEn ?? raw.nav_brand_text_en ?? legacyBrand).trim();
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
    const label = state.lang === "zh"
      ? (state.personalization.navBrandTextZh || state.personalization.navBrandTextEn || DEFAULT_PERSONALIZATION.navBrandTextZh)
      : (state.personalization.navBrandTextEn || state.personalization.navBrandTextZh || DEFAULT_PERSONALIZATION.navBrandTextEn);
    siteBrandText.textContent = label;
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
  if (shouldShowFooter) {
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
  } else {
    siteFooterCopy.querySelectorAll(".page-line-anchor").forEach((node) => node.remove());
    siteFooterCopy.classList.remove("has-range-bg");
    siteFooterCopy.style.removeProperty("--footer-tail-fill-height");
    siteFooterCopy.style.removeProperty("--footer-tail-fill-color");
    siteFooterCopy.style.removeProperty("--footer-tail-fill-width");
  }
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

function getFooterTailColor(ranges) {
  const normalized = normalizeLineRanges(ranges);
  if (!normalized.length) return "";
  const maxEnd = normalized.reduce((max, range) => Math.max(max, range.end), 1);
  return resolveLineColor(maxEnd, normalized);
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

function hasStructuredLineDescendant(node) {
  if (!(node instanceof Element)) return false;
  return Boolean(node.querySelector("h1,h2,h3,h4,h5,h6,p,li,blockquote,pre,table,hr,figure,.image-wrapper"));
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
    if (node.parentElement !== container) return false;
    return !hasStructuredLineDescendant(node);
  }
  if (tag === "SECTION" || tag === "ARTICLE") {
    if (node.parentElement !== container) return false;
    return !hasStructuredLineDescendant(node);
  }
  if (tag === "IMG") {
    return node.parentElement === container;
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
  return Array.from(container.children)
    .filter((node) => node instanceof HTMLElement && !node.classList.contains("page-line-anchor"));
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
    const parent = element.parentNode;
    if (parent) {
      parent.insertBefore(anchor, element);
    }
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

async function bootstrapLocalAndLoadData() {
  if (IS_FILE_PROTOCOL) {
    await initLocalContentsAccess();
  }
  await loadData();
}

async function initLocalContentsAccess() {
  if (!localOpenElements.modal) return;

  if (!supportsDirectoryPicker()) {
    showLocalOpenModal("当前浏览器不支持“选择文件夹”，请使用 Chrome 或 Edge。", "error");
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
    showLocalOpenModal("当前浏览器不支持“选择文件夹”，请使用 Chrome 或 Edge。", "error");
    return;
  }

  showLocalOpenModal("等待你选择文件夹…");

  try {
    const selected = await window.showDirectoryPicker();
    const allowed = await ensureHandlePermission(selected, true);
    if (!allowed) {
      showLocalOpenModal("没有拿到文件夹授权，请再试一次。", "error");
      return;
    }

    const resolved = await resolveContentsHandle(selected);
    if (!resolved) {
      showLocalOpenModal("没找到有效的 `contents` 文件夹。请选择 `contents`，或包含 `contents` 的网站根目录。", "error");
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
      showLocalOpenModal("你取消了选择。");
      return;
    }
    showLocalOpenModal(`选择失败：${error.message}`, "error");
  }
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

function supportsDirectoryPicker() {
  return "showDirectoryPicker" in window;
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
  const hasProjectDetails = await directoryExistsOnHandle(handle, "project_details");
  return hasAssets && hasProjectDetails;
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

function startDataSync() {
  window.setInterval(() => {
    loadData(true);
  }, DATA_SYNC_INTERVAL_MS);
}

function makeDataSignature(base, projectsText, typesText, personalizationText = "") {
  return `${base}::${projectsText.length}:${typesText.length}:${personalizationText.length}::${projectsText}::${typesText}::${personalizationText}`;
}

async function loadData(isBackgroundSync = false) {
  if (state.loadingData) return;
  state.loadingData = true;

  let lastError = null;
  try {
    if (IS_FILE_PROTOCOL) {
      if (!state.localContentsHandle) {
        if (state.dataSignature !== "__missing__") {
          state.dataSignature = "__missing__";
          projects = [];
          projectTypes = [];
          ensureActiveFilter();
          renderFilters();
          renderProjects();
        }
        return;
      }

      try {
        const [projectsText, typesText, personalizationText] = await Promise.all([
          readTextFileFromHandle(state.localContentsHandle, ["assets", "projects.csv"]),
          readTextFileFromHandle(state.localContentsHandle, ["assets", "project_types.csv"], true),
          readTextFileFromHandle(state.localContentsHandle, ["assets", PERSONALIZATION_FILE], true)
        ]);
        const signature = makeDataSignature("contents", projectsText, typesText, personalizationText);
        if (signature === state.dataSignature) {
          return;
        }

        state.dataSignature = signature;
        state.contentBase = "contents";
        projects = parseProjectsCsv(projectsText);
        projectTypes = parseTypesCsv(typesText);
        state.personalization = parsePersonalizationText(personalizationText);
        applyPersonalization();
        ensureActiveFilter();
        renderFilters();
        renderProjects();
      } catch (error) {
        if (!isBackgroundSync) {
          console.error(error);
          showLocalOpenModal(`读取内容失败：${error.message}`, "error");
        }
        if (state.dataSignature !== "__missing__") {
          state.dataSignature = "__missing__";
          projects = [];
          projectTypes = [];
          state.personalization = cloneDefaultPersonalization();
          applyPersonalization();
          ensureActiveFilter();
          renderFilters();
          renderProjects();
        }
      }
      return;
    }

    for (const base of CONTENT_BASE_CANDIDATES) {
      try {
        const [projectsText, typesText, personalizationText] = await Promise.all([
          fetchCsv(buildContentPath(base, "assets/projects.csv")),
          fetchCsv(buildContentPath(base, "assets/project_types.csv"), true),
          fetchText(buildContentPath(base, `assets/${PERSONALIZATION_FILE}`), true)
        ]);
        const signature = makeDataSignature(base, projectsText, typesText, personalizationText);
        if (signature === state.dataSignature) {
          return;
        }

        state.dataSignature = signature;
        state.contentBase = base;
        projects = parseProjectsCsv(projectsText);
        projectTypes = parseTypesCsv(typesText);
        state.personalization = parsePersonalizationText(personalizationText);
        applyPersonalization();
        ensureActiveFilter();
        renderFilters();
        renderProjects();
        return;
      } catch (error) {
        lastError = error;
      }
    }

    if (!isBackgroundSync && lastError) {
      console.error(lastError);
    }

    if (state.dataSignature !== "__missing__") {
      state.dataSignature = "__missing__";
      projects = [];
      projectTypes = [];
      state.personalization = cloneDefaultPersonalization();
      applyPersonalization();
      ensureActiveFilter();
      renderFilters();
      renderProjects();
    }
  } finally {
    state.loadingData = false;
  }
}

function buildContentPath(base, relativePath) {
  if (!base) return relativePath;
  return `${base}/${relativePath}`;
}

async function fetchCsv(path, optional = false) {
  const response = await fetch(path, { cache: "no-store" });
  if (!response.ok) {
    if (optional) return "";
    throw new Error(`Failed to load ${path}`);
  }
  return response.text();
}

async function fetchText(path, optional = false) {
  const response = await fetch(path, { cache: "no-store" });
  if (!response.ok) {
    if (optional) return "";
    throw new Error(`Failed to load ${path}`);
  }
  return response.text();
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

function parseProjectsCsv(text) {
  const rows = String(text || "").trim().split(/\r?\n/).filter(Boolean);
  if (!rows.length) return [];
  const headers = splitCsvLine(rows.shift()).map((key) => key.trim());

  return rows.map((line) => {
    const values = splitCsvLine(line);
    const record = {};
    headers.forEach((header, index) => {
      record[header] = (values[index] || "").trim();
    });

    const tags = record.tags
      ? record.tags.split("|").map((tag) => tag.trim()).filter(Boolean)
      : [];

    return {
      id: record.id,
      name: {
        zh: record.name_zh,
        en: record.name_en
      },
      type: record.type,
      date: record.date,
      rank: record.rank,
      image: normalizeProjectImagePath(record.image),
      hidden: toBooleanFlag(record.hidden),
      tags
    };
  });
}

function normalizeProjectImagePath(path) {
  const value = String(path || "").trim();
  if (!value) return "";
  if (
    value.startsWith("contents/") ||
    /^(https?:|data:|blob:|\/)/i.test(value)
  ) {
    return value;
  }
  if (value.startsWith("project_details/")) {
    return buildContentPath(state.contentBase, value);
  }
  return value;
}

function parseTypesCsv(text) {
  const rows = String(text || "").trim().split(/\r?\n/).filter(Boolean);
  if (!rows.length) return [];
  const headers = splitCsvLine(rows.shift()).map((key) => key.trim());

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
  }).filter((item) => item.id);
}

function toBooleanFlag(value) {
  const normalized = String(value ?? "").trim().toLowerCase();
  return normalized === "1" || normalized === "true" || normalized === "yes" || normalized === "y";
}

function getVisibleProjectTypes() {
  return projectTypes.filter((type) => !type.hidden);
}

function getHiddenTypeIdSet() {
  const hidden = new Set();
  projectTypes.forEach((type) => {
    if (type.hidden) {
      hidden.add(type.id);
    }
  });
  return hidden;
}

function isProjectVisible(project, hiddenTypeIds = null) {
  if (!project || project.hidden) return false;
  const hiddenIds = hiddenTypeIds || getHiddenTypeIdSet();
  return !hiddenIds.has(project.type);
}

function splitCsvLine(line) {
  const result = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];
    if (char === "\"") {
      const nextChar = line[i + 1];
      if (inQuotes && nextChar === "\"") {
        current += "\"";
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

function ensureActiveFilter() {
  if (state.filter === "all") return;
  const exists = getVisibleProjectTypes().some((type) => type.id === state.filter);
  if (!exists) {
    state.filter = "all";
  }
}

function renderFilters() {
  if (!filterContainer) return;
  filterContainer.innerHTML = "";

  const strings = i18n[state.lang] || i18n.en;
  if (isCompactFilters) {
    renderCompactFilters(strings);
    return;
  }

  const allButton = createFilterButton("all", strings.filters.all, state.filter === "all");
  filterContainer.appendChild(allButton);

  getVisibleProjectTypes().forEach((type) => {
    const text = state.lang === "zh"
      ? (type.name_zh || type.name_en || type.id)
      : (type.name_en || type.name_zh || type.id);
    const button = createFilterButton(type.id, text, state.filter === type.id);
    filterContainer.appendChild(button);
  });
}

function handleWindowResize() {
  scheduleMasonryLayout();
  updateFooterBackgroundExtent();
  const nextCompact = window.matchMedia("(max-width: 720px)").matches;
  if (nextCompact === isCompactFilters) return;
  isCompactFilters = nextCompact;
  if (!isCompactFilters) {
    state.mobileFiltersOpen = false;
  }
  renderFilters();
}

function renderCompactFilters(strings) {
  const row = document.createElement("div");
  row.className = "filter-compact-row";

  const allButton = createFilterButton("all", strings.filters.all, state.filter === "all");
  row.appendChild(allButton);

  const visibleTypes = getVisibleProjectTypes();
  if (visibleTypes.length) {
    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "filter-menu-toggle";
    toggle.classList.toggle("is-active", state.mobileFiltersOpen || state.filter !== "all");
    toggle.setAttribute("aria-expanded", state.mobileFiltersOpen ? "true" : "false");
    toggle.setAttribute("aria-label", state.mobileFiltersOpen ? strings.filters.close : strings.filters.more);
    toggle.title = state.mobileFiltersOpen ? strings.filters.close : strings.filters.more;
    toggle.textContent = state.mobileFiltersOpen ? "✕" : "☰";
    row.appendChild(toggle);
  }

  filterContainer.appendChild(row);

  if (!visibleTypes.length || !state.mobileFiltersOpen) return;

  const menu = document.createElement("div");
  menu.className = "filter-mobile-menu";

  visibleTypes.forEach((type) => {
    const text = state.lang === "zh"
      ? (type.name_zh || type.name_en || type.id)
      : (type.name_en || type.name_zh || type.id);
    const button = createFilterButton(type.id, text, state.filter === type.id);
    menu.appendChild(button);
  });

  filterContainer.appendChild(menu);
}

function createFilterButton(filter, text, isActive) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "filter-btn";
  button.dataset.filter = filter;
  button.textContent = text;
  button.classList.toggle("is-active", isActive);
  button.setAttribute("aria-pressed", isActive ? "true" : "false");
  return button;
}

function renderProjects() {
  if (!grid) return;
  const hiddenTypeIds = getHiddenTypeIdSet();
  const visibleProjects = projects.filter((project) => isProjectVisible(project, hiddenTypeIds));
  const visible = state.filter === "all"
    ? visibleProjects
    : visibleProjects.filter((project) => project.type === state.filter);
  const ordered = [...visible].sort(compareProjectsByDisplayOrder);

  grid.innerHTML = "";

  if (!ordered.length) {
    grid.style.height = "0px";
    emptyState.hidden = false;
    updateFooterBackgroundExtent();
    return;
  }

  emptyState.hidden = true;

  ordered.forEach((project, index) => {
    const card = buildCard(project, index);
    grid.appendChild(card);
  });

  scheduleMasonryLayout();
}

function compareProjectsByDisplayOrder(a, b) {
  const aRank = normalizeRankKey(a?.rank);
  const bRank = normalizeRankKey(b?.rank);
  const aHasRank = Number.isFinite(aRank);
  const bHasRank = Number.isFinite(bRank);

  if (aHasRank && bHasRank && aRank !== bRank) {
    return aRank - bRank;
  }
  if (aHasRank !== bHasRank) {
    return aHasRank ? -1 : 1;
  }

  const aKey = normalizeDateKey(a.date);
  const bKey = normalizeDateKey(b.date);
  if (aKey !== bKey) return bKey - aKey;
  return (b.id || "").localeCompare(a.id || "");
}

function normalizeRankKey(value) {
  const raw = String(value ?? "").trim();
  if (!/^\d+$/.test(raw)) return null;
  const numeric = Number.parseInt(raw, 10);
  if (!Number.isFinite(numeric) || numeric < 1) return null;
  return numeric;
}

function normalizeDateKey(value) {
  if (!value) return 0;
  const numeric = Number(String(value).replace(/[^0-9]/g, ""));
  return Number.isNaN(numeric) ? 0 : numeric;
}

function scheduleMasonryLayout() {
  if (!grid) return;
  if (layoutRaf) {
    cancelAnimationFrame(layoutRaf);
  }
  layoutRaf = requestAnimationFrame(() => {
    layoutRaf = 0;
    layoutMasonry();
  });
}

function layoutMasonry() {
  if (!grid) return;
  const cards = Array.from(grid.querySelectorAll(".card"));
  if (!cards.length) {
    grid.style.height = "0px";
    updateFooterBackgroundExtent();
    return;
  }

  const rootStyles = getComputedStyle(document.documentElement);
  const baseWidth = parseFloat(rootStyles.getPropertyValue("--card-width")) || 280;
  const gap = parseFloat(rootStyles.getPropertyValue("--card-gap")) || 24;
  const containerWidth = grid.clientWidth;
  if (!containerWidth) return;

  const columnCount = Math.max(1, Math.floor((containerWidth + gap) / (baseWidth + gap)));
  const columnWidth = columnCount === 1
    ? containerWidth
    : (containerWidth - gap * (columnCount - 1)) / columnCount;
  const heights = new Array(columnCount).fill(0);

  cards.forEach((card) => {
    card.style.width = `${columnWidth}px`;

    let targetColumn = 0;
    for (let i = 1; i < columnCount; i += 1) {
      if (heights[i] < heights[targetColumn]) {
        targetColumn = i;
      }
    }

    const left = targetColumn * (columnWidth + gap);
    const top = heights[targetColumn];

    card.style.left = `${left}px`;
    card.style.top = `${top}px`;

    heights[targetColumn] = top + card.offsetHeight + gap;
  });

  const tallest = Math.max(...heights);
  grid.style.height = `${Math.max(tallest - gap, 0)}px`;
  updateFooterBackgroundExtent();
}

function buildCard(project, index) {
  const card = document.createElement("a");
  card.className = "card";
  card.href = getDetailLink(project);
  card.style.animationDelay = `${index * 80}ms`;

  const imageSrc = String(project.image || "").trim();
  let media = null;
  if (imageSrc) {
    media = document.createElement("div");
    media.className = "card-media";

    const img = document.createElement("img");
    img.src = imageSrc;
    img.alt = getProjectName(project);
    img.loading = "lazy";
    img.addEventListener("load", scheduleMasonryLayout, { once: true });
    img.addEventListener("error", () => {
      if (media && media.isConnected) {
        media.remove();
      }
      scheduleMasonryLayout();
    }, { once: true });

    media.appendChild(img);
  }

  const body = document.createElement("div");
  body.className = "card-body";

  const title = document.createElement("h3");
  title.className = "card-title";
  title.textContent = getProjectName(project);

  const meta = document.createElement("div");
  meta.className = "card-meta";

  const typeLabel = getTypeLabel(project.type);
  if (typeLabel) {
    const type = document.createElement("span");
    type.textContent = typeLabel;
    meta.appendChild(type);

    if (project.date) {
      const dot = document.createElement("span");
      dot.className = "meta-dot";
      dot.textContent = "·";
      meta.appendChild(dot);
    }
  }

  if (project.date) {
    const time = document.createElement("time");
    time.textContent = project.date;
    time.dateTime = project.date;
    meta.appendChild(time);
  }

  body.appendChild(title);
  body.appendChild(meta);

  if (Array.isArray(project.tags) && project.tags.length) {
    const tags = document.createElement("div");
    tags.className = "card-tags";

    project.tags.forEach((tag) => {
      const tagEl = document.createElement("span");
      tagEl.className = "tag";
      tagEl.textContent = tag;
      tags.appendChild(tagEl);
    });

    body.appendChild(tags);
  }

  if (media) {
    card.appendChild(media);
  }
  card.appendChild(body);

  return card;
}

function getDetailLink(project) {
  const base = buildContentPath(state.contentBase, `project_details/${project.id}/index.html`);
  if (state.filter === "all") {
    return `${base}?from=all`;
  }
  return base;
}

function getProjectName(project) {
  if (typeof project.name === "string") return project.name;
  if (project.name && typeof project.name === "object") {
    return project.name[state.lang] || project.name.zh || project.name.en || "";
  }
  return "";
}

function getTypeLabel(typeId) {
  if (!typeId) return "";
  const type = projectTypes.find((item) => item.id === typeId);
  if (!type) return "";
  return state.lang === "zh"
    ? (type.name_zh || type.name_en || "")
    : (type.name_en || type.name_zh || "");
}
