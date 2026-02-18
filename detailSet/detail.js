const detailI18n = {
  zh: {
    nav: {
      projects: "项目",
      about: "关于我",
      ariaLabel: "主导航",
      langToggleAria: "切换语言"
    },
    detail: {
      prev: "上一个项目",
      next: "下一个项目",
      outline: "提纲",
      outlineEmpty: "暂无小节",
      outlineToggle: "提纲"
    }
  },
  en: {
    nav: {
      projects: "Projects",
      about: "About",
      ariaLabel: "Primary",
      langToggleAria: "Switch language"
    },
    detail: {
      prev: "Previous Project",
      next: "Next Project",
      outline: "Outline",
      outlineEmpty: "No sections",
      outlineToggle: "Outline"
    }
  }
};

const PERSONALIZATION_FILE = "../../assets/site_personalization.json";
const DEFAULT_PERSONALIZATION = Object.freeze({
  navBrandTextZh: "XXX的个人空间",
  navBrandTextEn: "XXX's Space"
});

const langToggle = document.querySelector("[data-lang-toggle]");
const siteHeader = document.querySelector(".site-header");
const backLink = document.querySelector(".back-link");
const detailMain = document.querySelector(".detail-main");
const detailContent = document.getElementById("detail-content");
const detailZhTemplate = document.getElementById("detail-content-zh-template");
const detailEnTemplate = document.getElementById("detail-content-en-template");
const detailBgRangesZhTemplate = document.getElementById("detail-bg-ranges-zh-template");
const detailBgRangesEnTemplate = document.getElementById("detail-bg-ranges-en-template");
const pagination = document.querySelector(".detail-pagination");
const prevCard = document.querySelector("[data-detail-nav='prev']");
const nextCard = document.querySelector("[data-detail-nav='next']");
const projectsNavLink = document.querySelector(".top-nav .nav-btn[data-i18n='nav.projects']");
const backToAll = new URLSearchParams(window.location.search).get("from") === "all";
const navInitialTheme = normalizeNavInitialTheme(document.body?.dataset.navInitialTheme);
let siteBrandText = document.getElementById("site-brand-text");
const hasTemplateContent = Boolean(detailZhTemplate || detailEnTemplate);

const state = {
  lang: detectLanguage(),
  prevProject: null,
  nextProject: null,
  types: [],
  personalization: cloneDefaultPersonalization()
};

const detailBgRangesByLang = {
  zh: parseLineRangesTemplate(detailBgRangesZhTemplate ? detailBgRangesZhTemplate.innerHTML : ""),
  en: parseLineRangesTemplate(detailBgRangesEnTemplate ? detailBgRangesEnTemplate.innerHTML : "")
};
let outlineContrastRaf = 0;
let navThemeRaf = 0;
let navThemeFollowBackground = false;
let detailTopFillColor = "";

normalizeNavTemplate();
setupBrandNavigation();
setupOutline();
applyI18n(state.lang);
updateLangToggle();
applyPersonalization();
applyInitialNavTheme();
init();

if (langToggle) {
  langToggle.addEventListener("click", () => {
    const nextLang = state.lang === "zh" ? "en" : "zh";
    setLanguage(nextLang);
  });
}

async function init() {
  updateBackLink();
  await Promise.all([
    loadTypes(),
    loadPersonalization()
  ]);
  await initPrevNext();
  applyI18n(state.lang);
  applyPersonalization();
  if (window.scrollY > 0) {
    navThemeFollowBackground = true;
  }
  queueNavThemeUpdate();
}

function normalizeNavInitialTheme(value) {
  return String(value || "").trim().toLowerCase() === "dark" ? "dark" : "light";
}

function applyInitialNavTheme() {
  if (!siteHeader) return;
  siteHeader.classList.toggle("is-nav-dark", navInitialTheme === "dark");
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
  applyPersonalization();
  queueNavThemeUpdate();
}

function updateLangToggle() {
  if (!langToggle) return;
  langToggle.textContent = state.lang === "zh" ? "EN" : "中文";
}

function applyI18n(lang) {
  const strings = detailI18n[lang] || detailI18n.en;

  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";

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

  const title = document.querySelector(".detail-title");
  const typeEl = document.querySelector(".detail-type");
  const meta = document.querySelector(".detail-meta");
  const { titleZh, titleEn, type, date } = getDetailMeta();

  if (title) {
    title.textContent = lang === "zh" ? titleZh : titleEn;
  }

  if (typeEl) {
    typeEl.textContent = getTypeLabel(type);
  }

  if (meta) {
    meta.textContent = date;
  }

  renderDetailContent(lang);
  document.title = (lang === "zh" ? titleZh : titleEn) || document.title;
  renderPrevNext();
  renderOutline();
}

function getDetailMeta() {
  const body = document.body;
  return {
    titleZh: body.dataset.titleZh || "",
    titleEn: body.dataset.titleEn || "",
    type: body.dataset.type || "",
    date: body.dataset.date || "",
    id: body.dataset.projectId || ""
  };
}

function resolveKey(source, key) {
  return key.split(".").reduce((acc, part) => (acc ? acc[part] : null), source);
}

function sanitizeDetailHtml(html) {
  const source = String(html || "").trim();
  if (!source) return "";
  const probe = document.createElement("div");
  probe.innerHTML = source;
  probe.querySelectorAll("script, style").forEach((node) => node.remove());
  return probe.innerHTML.trim();
}

function getTemplateDetailPayload(lang) {
  const primary = lang === "zh" ? detailZhTemplate : detailEnTemplate;
  const fallback = lang === "zh" ? detailEnTemplate : detailZhTemplate;
  const resolvedRanges = getDetailRangesForLang(lang);
  const primaryHtml = sanitizeDetailHtml(primary ? primary.innerHTML : "");
  if (primaryHtml) {
    return {
      html: primaryHtml,
      ranges: resolvedRanges
    };
  }
  const fallbackHtml = sanitizeDetailHtml(fallback ? fallback.innerHTML : "");
  if (fallbackHtml) {
    return {
      html: fallbackHtml,
      ranges: resolvedRanges
    };
  }
  return {
    html: "",
    ranges: []
  };
}

function getDetailRangesForLang(lang) {
  const currentLang = lang === "en" ? "en" : "zh";
  const fallbackLang = currentLang === "zh" ? "en" : "zh";
  const primaryRanges = detailBgRangesByLang[currentLang] || [];
  if (primaryRanges.length) {
    return primaryRanges;
  }
  return detailBgRangesByLang[fallbackLang] || [];
}

function isExternalWebPreviewSource(value) {
  const src = String(value || "").trim();
  return /^(https?:|blob:|data:|about:|mailto:|tel:|\/\/|#)/i.test(src);
}

function resolveWebPreviewRuntimeSrc(rawSource) {
  const source = String(rawSource || "").trim().replace(/\\/g, "/");
  if (!source) return "";
  if (isExternalWebPreviewSource(source)) return source;
  if (source.startsWith("./assets/")) {
    return source.slice(2);
  }
  if (source.startsWith("contents/")) {
    return `../../${source.slice("contents/".length)}`;
  }
  return source;
}

function getWebPreviewSourceFromWrapper(wrapper) {
  if (!(wrapper instanceof HTMLElement)) return "";
  const dataSource = String(wrapper.dataset.webPreviewSrc || "").trim();
  if (dataSource) return dataSource;
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

function renderWebPreviewWrappers(container) {
  if (!(container instanceof HTMLElement)) return;
  container.querySelectorAll(".web-preview-wrapper").forEach((wrapper) => {
    if (!(wrapper instanceof HTMLElement)) return;
    const rawSource = getWebPreviewSourceFromWrapper(wrapper);
    const resolvedSource = resolveWebPreviewRuntimeSrc(rawSource);
    if (!resolvedSource) return;

    wrapper.dataset.webPreviewSrc = rawSource;
    applyResponsiveWebPreviewWrapperStyle(wrapper);
    wrapper.innerHTML = "";
    const frame = document.createElement("iframe");
    frame.className = "web-preview-frame";
    frame.setAttribute("src", resolvedSource);
    frame.setAttribute("loading", "lazy");
    frame.setAttribute("referrerpolicy", "no-referrer-when-downgrade");
    frame.setAttribute("allowfullscreen", "");
    wrapper.appendChild(frame);
  });
}

function renderDetailContent(lang) {
  if (!detailContent || !hasTemplateContent) return;
  const payload = getTemplateDetailPayload(lang);
  detailContent.innerHTML = payload.html;
  renderWebPreviewWrappers(detailContent);
  applyLineDecorations(detailContent, payload.ranges);
  queueNavThemeUpdate();
}

function parseLineRangesTemplate(text) {
  const source = String(text || "").trim();
  if (!source) return [];
  try {
    const parsed = JSON.parse(source);
    return normalizeLineRanges(parsed);
  } catch (error) {
    return [];
  }
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
    if (node.classList.contains("detail-columns-cell")) {
      return !hasStructuredLineDescendant(node);
    }
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

function applyLineDecorations(container, ranges) {
  if (!container) return;
  container.querySelectorAll(".page-line-anchor").forEach((node) => node.remove());
  container.querySelectorAll(".page-line-background").forEach((node) => {
    node.classList.remove("page-line-background");
    if (node instanceof HTMLElement) {
      node.style.removeProperty("--line-bg-color");
    }
  });
  const rangeHost = detailMain || container;
  rangeHost.classList.remove("page-range-host");
  const existingLayer = rangeHost.querySelector(".page-range-layer[data-scope='detail-content']");
  if (existingLayer) {
    existingLayer.remove();
  }
  const lineElements = getLineTargets(container);

  const normalizedRanges = normalizeLineRanges(ranges);
  lineElements.forEach((element, index) => {
    const lineNumber = index + 1;
    const anchor = document.createElement("span");
    anchor.className = "page-line-anchor";
    anchor.id = `line-${lineNumber}`;
    const parent = element.parentNode;
    if (parent) {
      parent.insertBefore(anchor, element);
    }
  });

  renderRangeLayer(rangeHost, container, lineElements, normalizedRanges);
  updateDetailTopFill(container, normalizedRanges);
  queueOutlineContrastUpdate();
  queueNavThemeUpdate();
}

function renderRangeLayer(host, referenceContainer, lineElements, ranges) {
  if (!host || !referenceContainer) return;
  if (!lineElements.length || !ranges.length) return;

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
  const topFill = host.querySelector(".detail-top-fill");
  if (topFill && topFill.parentNode === host) {
    host.insertBefore(layer, topFill.nextSibling);
  } else {
    host.prepend(layer);
  }

  const maxBottom = Math.max(host.scrollHeight, host.clientHeight);
  layer.style.position = "absolute";
  layer.style.left = "0";
  layer.style.right = "0";
  layer.style.top = "0";
  layer.style.height = `${maxBottom}px`;
  layer.style.pointerEvents = "none";
  layer.style.zIndex = "-1";

  const hostRect = host.getBoundingClientRect();
  const viewportWidth = getViewportContentWidth();
  const fragment = document.createDocumentFragment();

  ranges.forEach((range) => {
    const startLine = Math.min(Math.max(range.start, 1), lineElements.length);
    const endLine = Math.min(Math.max(range.end, startLine), lineElements.length);
    const startElement = lineElements[startLine - 1];
    const endElement = lineElements[endLine - 1];
    if (!(startElement instanceof HTMLElement) || !(endElement instanceof HTMLElement)) return;

    const startRect = startElement.getBoundingClientRect();
    const endRect = endElement.getBoundingClientRect();
    const topRaw = Math.round(startRect.top - hostRect.top);
    const bottomRaw = Math.round(endRect.bottom - hostRect.top);
    const top = startLine === 1 ? 0 : Math.max(0, topRaw);
    let bottom = Math.min(maxBottom, Math.max(top, bottomRaw));
    if (endLine < lineElements.length) {
      const nextElement = lineElements[endLine];
      if (nextElement instanceof HTMLElement) {
        const nextRect = nextElement.getBoundingClientRect();
        const nextTopRaw = Math.round(nextRect.top - hostRect.top);
        const nextTop = Math.max(top, nextTopRaw);
        bottom = Math.min(bottom, nextTop);
      }
    }
    if (bottom <= top) return;

    const block = document.createElement("div");
    block.className = "page-range-block";
    block.style.position = "absolute";
    block.style.left = `${-hostRect.left}px`;
    block.style.width = `${viewportWidth}px`;
    block.style.transform = "none";
    block.style.top = `${top}px`;
    block.style.height = `${bottom - top}px`;
    block.style.background = range.color;
    fragment.appendChild(block);
  });

  layer.appendChild(fragment);
}

function ensureDetailTopFill() {
  if (!detailMain) return null;
  let fill = detailMain.querySelector(".detail-top-fill");
  if (!(fill instanceof HTMLElement)) {
    fill = document.createElement("div");
    fill.className = "detail-top-fill";
    fill.setAttribute("aria-hidden", "true");
    detailMain.prepend(fill);
  }
  return fill;
}

function resetDetailTopFill() {
  detailTopFillColor = "";
  if (!detailMain) return;
  const fill = detailMain.querySelector(".detail-top-fill");
  if (fill instanceof HTMLElement) {
    fill.hidden = true;
    fill.style.removeProperty("left");
    fill.style.removeProperty("top");
    fill.style.removeProperty("width");
    fill.style.removeProperty("height");
    fill.style.removeProperty("background");
  }
  detailMain.classList.remove("has-top-fill");
  detailMain.classList.remove("is-top-fill-dark");
  queueNavThemeUpdate();
}

function updateDetailTopFill(container, ranges) {
  if (!detailMain || !container) return;
  const firstLineColor = resolveLineColor(1, ranges);
  if (!firstLineColor) {
    resetDetailTopFill();
    return;
  }

  const fill = ensureDetailTopFill();
  if (!(fill instanceof HTMLElement)) return;

  const mainRect = detailMain.getBoundingClientRect();
  const containerRect = container.getBoundingClientRect();
  const topHeightRaw = Math.round(containerRect.top - mainRect.top);
  const topHeight = Math.max(0, topHeightRaw);
  if (topHeight <= 0) {
    resetDetailTopFill();
    return;
  }

  const viewportWidth = getViewportContentWidth();
  fill.hidden = false;
  fill.style.left = `${-mainRect.left}px`;
  fill.style.top = "0";
  fill.style.width = `${viewportWidth}px`;
  fill.style.height = `${topHeight}px`;
  fill.style.background = firstLineColor;

  detailTopFillColor = firstLineColor;
  detailMain.classList.add("has-top-fill");
  detailMain.classList.toggle("is-top-fill-dark", isDarkColor(firstLineColor));
  queueNavThemeUpdate();
}

function refreshDetailTopFillByCurrentState() {
  if (!detailContent) return;
  if (!detailTopFillColor) return;
  const currentRanges = getDetailRangesForLang(state.lang);
  updateDetailTopFill(detailContent, currentRanges);
}

function getViewportContentWidth() {
  return document.documentElement.clientWidth || window.innerWidth || 0;
}

function refreshDetailRangeHorizontalLayout() {
  const host = detailMain || detailContent;
  if (!host) return;
  const hostRect = host.getBoundingClientRect();
  const viewportWidth = getViewportContentWidth();
  host.querySelectorAll(".page-range-layer[data-scope='detail-content'] .page-range-block").forEach((block) => {
    if (!(block instanceof HTMLElement)) return;
    block.style.left = `${-hostRect.left}px`;
    block.style.width = `${viewportWidth}px`;
  });
  const fill = host.querySelector(".detail-top-fill");
  if (fill instanceof HTMLElement && !fill.hidden) {
    fill.style.left = `${-hostRect.left}px`;
    fill.style.width = `${viewportWidth}px`;
  }
  queueNavThemeUpdate();
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

function normalizeNavTemplate() {
  const brand = document.querySelector(".header-inner .brand");
  if (brand && !siteBrandText) {
    const label = document.createElement("span");
    label.className = "brand-label";
    label.id = "site-brand-text";
    label.textContent = DEFAULT_PERSONALIZATION.navBrandTextZh;
    brand.appendChild(label);
    siteBrandText = label;
  }

  const projectsLink = document.querySelector(".top-nav .nav-btn[data-i18n='nav.projects']");
  if (projectsLink) {
    projectsLink.classList.add("is-active");
    projectsLink.setAttribute("aria-current", "page");
  }

  const aboutLink = document.querySelector(".top-nav .nav-btn[data-i18n='nav.about']");
  if (aboutLink) {
    aboutLink.classList.remove("is-active");
    aboutLink.removeAttribute("aria-current");
  }
}

function cloneDefaultPersonalization() {
  return {
    navBrandTextZh: DEFAULT_PERSONALIZATION.navBrandTextZh,
    navBrandTextEn: DEFAULT_PERSONALIZATION.navBrandTextEn
  };
}

function normalizePersonalization(raw) {
  const next = cloneDefaultPersonalization();
  if (!raw || typeof raw !== "object") return next;

  const legacyBrand = String(raw.navBrandText ?? raw.brandText ?? raw.nav_brand_text ?? "").trim();
  const brandZh = String(raw.navBrandTextZh ?? raw.nav_brand_text_zh ?? legacyBrand).trim();
  const brandEn = String(raw.navBrandTextEn ?? raw.nav_brand_text_en ?? legacyBrand).trim();
  if (brandZh) next.navBrandTextZh = brandZh;
  if (brandEn) next.navBrandTextEn = brandEn;
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

async function loadPersonalization() {
  try {
    const response = await fetch(PERSONALIZATION_FILE, { cache: "no-store" });
    if (!response.ok) {
      state.personalization = cloneDefaultPersonalization();
      return;
    }
    const text = await response.text();
    state.personalization = parsePersonalizationText(text);
  } catch (error) {
    state.personalization = cloneDefaultPersonalization();
  }
}

function applyPersonalization() {
  if (!siteBrandText) return;
  const label = state.lang === "zh"
    ? (state.personalization.navBrandTextZh || state.personalization.navBrandTextEn || DEFAULT_PERSONALIZATION.navBrandTextZh)
    : (state.personalization.navBrandTextEn || state.personalization.navBrandTextZh || DEFAULT_PERSONALIZATION.navBrandTextEn);
  siteBrandText.textContent = label;
}

async function loadTypes() {
  try {
    const response = await fetch("../../assets/project_types.csv", { cache: "no-store" });
    if (!response.ok) {
      state.types = [];
      return;
    }
    const text = await response.text();
    state.types = parseTypesCsv(text);
  } catch (error) {
    console.error(error);
    state.types = [];
  }
}

async function initPrevNext() {
  if (!pagination && !prevCard && !nextCard) return;
  const { id } = getDetailMeta();
  if (!id) return;

  try {
    const response = await fetch("../../assets/projects.csv", { cache: "no-store" });
    if (!response.ok) throw new Error("Failed to load projects");
    const text = await response.text();
    const allProjects = parseProjectsCsv(text);
    const hiddenTypeIds = new Set(state.types.filter((item) => item.hidden).map((item) => item.id));
    const visibleProjects = allProjects.filter((project) => !project.hidden && !hiddenTypeIds.has(project.type));
    const ordered = [...visibleProjects].sort(compareProjectsByDisplayOrder);
    const index = ordered.findIndex((project) => project.id === id);
    state.prevProject = index > 0 ? ordered[index - 1] : null;
    state.nextProject = index >= 0 && index < ordered.length - 1 ? ordered[index + 1] : null;
    renderPrevNext();
  } catch (error) {
    console.error(error);
  }
}

function renderPrevNext() {
  if (!prevCard && !nextCard && !pagination) return;
  const strings = detailI18n[state.lang] || detailI18n.en;
  updateNavCard(prevCard, state.prevProject, strings, "prev");
  updateNavCard(nextCard, state.nextProject, strings, "next");

  if (pagination) {
    pagination.hidden = !state.prevProject && !state.nextProject;
    pagination.classList.toggle("is-only-next", !state.prevProject && Boolean(state.nextProject));
    pagination.classList.toggle("is-only-prev", Boolean(state.prevProject) && !state.nextProject);
  }
}

function updateNavCard(card, project, strings, direction) {
  if (!card) return;
  if (!project) {
    card.hidden = true;
    card.removeAttribute("href");
    return;
  }

  card.hidden = false;
  card.href = getDetailLink(project);

  const label = card.querySelector(".detail-nav-label");
  const title = card.querySelector(".detail-nav-title");
  const meta = card.querySelector(".detail-nav-meta");

  if (label) label.textContent = strings.detail[direction] || "";
  if (title) {
    title.textContent = state.lang === "zh"
      ? project.name_zh || project.name_en || ""
      : project.name_en || project.name_zh || "";
  }
  if (meta) {
    const typeText = getTypeLabel(project.type);
    meta.textContent = typeText || "";
    meta.hidden = !typeText;
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

    return {
      id: record.id,
      name_zh: record.name_zh,
      name_en: record.name_en,
      type: record.type,
      date: record.date,
      rank: record.rank,
      hidden: toBooleanFlag(record.hidden)
    };
  });
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

function normalizeDateKey(value) {
  if (!value) return 0;
  const numeric = Number(value.replace(/[^0-9]/g, ""));
  return Number.isNaN(numeric) ? 0 : numeric;
}

function normalizeRankKey(value) {
  const raw = String(value ?? "").trim();
  if (!/^\d+$/.test(raw)) return null;
  const numeric = Number.parseInt(raw, 10);
  if (!Number.isFinite(numeric) || numeric < 1) return null;
  return numeric;
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

  const aKey = normalizeDateKey(a?.date);
  const bKey = normalizeDateKey(b?.date);
  if (aKey !== bKey) return bKey - aKey;
  return String(b?.id || "").localeCompare(String(a?.id || ""));
}

function updateBackLink() {
  if (!backLink) return;
  const { type } = getDetailMeta();
  const url = new URL("../../../index.html", window.location.href);

  if (backToAll) {
    url.searchParams.set("filter", "all");
  } else if (type) {
    url.searchParams.set("filter", type);
  }

  backLink.href = url.pathname + url.search;
}

function getDetailLink(project) {
  const base = `../${project.id}/index.html`;
  if (backToAll) {
    return `${base}?from=all`;
  }
  return base;
}

function getTypeLabel(typeId) {
  if (!typeId) return "";
  const target = state.types.find((type) => type.id === typeId);
  if (!target) return "";
  return state.lang === "zh"
    ? (target.name_zh || target.name_en || "")
    : (target.name_en || target.name_zh || "");
}

function setupOutline() {
  if (!detailMain || !detailContent) return;

  let body = detailMain.querySelector(".detail-body");
  if (!body) {
    body = document.createElement("section");
    body.className = "detail-body";
    detailMain.insertBefore(body, detailContent);
    body.appendChild(detailContent);
  } else if (!body.contains(detailContent)) {
    body.prepend(detailContent);
  }

  let outline = detailMain.querySelector(".detail-outline");
  if (!outline) {
    outline = document.createElement("aside");
    outline.className = "detail-outline";
    outline.id = "detail-outline-panel";

    const title = document.createElement("h2");
    title.className = "detail-outline-title";
    title.dataset.i18n = "detail.outline";
    title.textContent = "提纲";

    const nav = document.createElement("nav");
    nav.className = "detail-outline-nav";
    nav.dataset.i18nAttr = "aria-label:detail.outline";

    const list = document.createElement("ul");
    list.className = "detail-outline-list";
    nav.appendChild(list);

    const empty = document.createElement("p");
    empty.className = "detail-outline-empty";
    empty.dataset.i18n = "detail.outlineEmpty";
    empty.textContent = "暂无小节";
    empty.hidden = true;

    outline.appendChild(title);
    outline.appendChild(nav);
    outline.appendChild(empty);
    body.appendChild(outline);
  } else if (!outline.id) {
    outline.id = "detail-outline-panel";
  }
  if (!outline.classList.contains("is-open")) {
    outline.setAttribute("aria-hidden", "true");
    outline.setAttribute("inert", "");
  }

  let toggle = detailMain.querySelector(".detail-outline-toggle");
  if (!toggle) {
    toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "detail-outline-toggle";
    toggle.setAttribute("aria-controls", outline.id);
    toggle.setAttribute("aria-expanded", "false");
    toggle.dataset.i18nAttr = "aria-label:detail.outlineToggle,title:detail.outlineToggle";
    detailMain.appendChild(toggle);
  }
  if (!toggle.querySelector(".detail-outline-toggle-icon") || !toggle.querySelector(".detail-outline-toggle-label")) {
    toggle.innerHTML = "";
    const toggleIcon = document.createElement("span");
    toggleIcon.className = "detail-outline-toggle-icon";
    toggleIcon.setAttribute("aria-hidden", "true");
    const toggleLabel = document.createElement("span");
    toggleLabel.className = "detail-outline-toggle-label";
    toggleLabel.dataset.i18n = "detail.outlineToggle";
    toggleLabel.textContent = "提纲";
    toggle.appendChild(toggleIcon);
    toggle.appendChild(toggleLabel);
  } else {
    const toggleLabel = toggle.querySelector(".detail-outline-toggle-label");
    if (toggleLabel) {
      toggleLabel.dataset.i18n = "detail.outlineToggle";
      if (!String(toggleLabel.textContent || "").trim()) {
        toggleLabel.textContent = "提纲";
      }
    }
  }

  let backdrop = detailMain.querySelector(".detail-outline-backdrop");
  if (!backdrop) {
    backdrop = document.createElement("div");
    backdrop.className = "detail-outline-backdrop";
    detailMain.appendChild(backdrop);
  }

  if (toggle.dataset.bound !== "1") {
    toggle.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      toggleOutlineMobile();
    });
    toggle.dataset.bound = "1";
  }

  if (backdrop.dataset.bound !== "1") {
    backdrop.addEventListener("click", () => closeOutlineMobile());
    backdrop.dataset.bound = "1";
  }

  if (detailMain.dataset.outlineBound !== "1") {
    document.addEventListener("click", (event) => {
      const currentOutline = document.querySelector(".detail-outline");
      const currentToggle = document.querySelector(".detail-outline-toggle");
      if (!currentOutline || !currentToggle) return;
      if (!currentOutline.classList.contains("is-open")) return;
      if (currentOutline.contains(event.target) || currentToggle.contains(event.target)) return;
      closeOutlineMobile();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key !== "Escape") return;
      closeOutlineMobile();
    });
    window.addEventListener("resize", () => {
      refreshDetailRangeHorizontalLayout();
      refreshDetailTopFillByCurrentState();
      queueOutlineContrastUpdate();
      queueNavThemeUpdate();
    });
    window.addEventListener("scroll", () => {
      queueOutlineContrastUpdate();
      if (!navThemeFollowBackground) {
        navThemeFollowBackground = true;
      }
      queueNavThemeUpdate();
    }, { passive: true });
    detailMain.dataset.outlineBound = "1";
  }

  renderOutline();
}

function renderOutline() {
  if (!detailContent) return;
  const outline = document.querySelector(".detail-outline");
  const list = document.querySelector(".detail-outline-list");
  const empty = document.querySelector(".detail-outline-empty");
  if (!outline || !list || !empty) return;

  const headings = Array.from(detailContent.querySelectorAll("h1, h2, h3, h4"))
    .filter((heading) => String(heading.textContent || "").trim());

  list.innerHTML = "";

  if (!headings.length) {
    outline.hidden = false;
    empty.hidden = false;
    queueOutlineContrastUpdate();
    return;
  }

  outline.hidden = false;
  empty.hidden = true;

  const usedIds = new Set(
    Array.from(detailContent.querySelectorAll("[id]"))
      .map((node) => node.id)
      .filter(Boolean)
  );

  headings.forEach((heading, index) => {
    const id = ensureHeadingId(heading, index, usedIds);
    const level = Number(heading.tagName.replace("H", ""));
    const item = document.createElement("li");
    item.className = `detail-outline-item is-level-${Number.isNaN(level) ? 2 : level}`;

    const link = document.createElement("a");
    link.href = `#${id}`;
    link.textContent = String(heading.textContent || "").trim();
    link.addEventListener("click", () => closeOutlineMobile());

    item.appendChild(link);
    list.appendChild(item);
  });

  queueOutlineContrastUpdate();
}

function isDarkColor(color) {
  const rgb = parseColorToRgb(color);
  if (!rgb) return false;
  const luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
  return luminance < 0.55;
}

function parseColorToRgb(color) {
  const raw = String(color || "").trim();
  if (!raw) return null;

  const shortHex = raw.match(/^#([0-9a-fA-F]{3})$/);
  if (shortHex) {
    const expanded = shortHex[1].split("").map((char) => `${char}${char}`).join("");
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

  const rgb = raw.match(/^rgba?\(([^)]+)\)$/i);
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

function queueOutlineContrastUpdate() {
  if (outlineContrastRaf) {
    cancelAnimationFrame(outlineContrastRaf);
  }
  outlineContrastRaf = requestAnimationFrame(() => {
    outlineContrastRaf = 0;
    updateOutlineContrastByBackground();
  });
}

function updateOutlineContrastByBackground() {
  const outline = document.querySelector(".detail-outline");
  const list = document.querySelector(".detail-outline-list");
  if (!outline || !list) return;

  const regions = [];
  const topFill = detailMain ? detailMain.querySelector(".detail-top-fill") : null;
  if (topFill instanceof HTMLElement && !topFill.hidden) {
    const rect = topFill.getBoundingClientRect();
    const color = getComputedStyle(topFill).backgroundColor || topFill.style.background || "";
    regions.push({ rect, color });
  }
  Array.from(document.querySelectorAll(".detail-main .page-range-block")).forEach((block) => {
    if (!(block instanceof HTMLElement)) return;
    const rect = block.getBoundingClientRect();
    const color = getComputedStyle(block).backgroundColor || block.style.background || "";
    regions.push({ rect, color });
  });

  const bodyColor = getComputedStyle(document.body).backgroundColor || "#ffffff";
  const resolveColorAtPoint = (x, y) => {
    let match = "";
    regions.forEach((region) => {
      const rect = region.rect;
      if (
        Number.isFinite(rect.left) &&
        Number.isFinite(rect.right) &&
        Number.isFinite(rect.top) &&
        Number.isFinite(rect.bottom) &&
        rect.right > rect.left &&
        rect.bottom > rect.top &&
        x >= rect.left &&
        x <= rect.right &&
        y >= rect.top &&
        y <= rect.bottom
      ) {
        match = region.color || match;
      }
    });
    return match || bodyColor;
  };

  if (!outline.hidden) {
    const outlineRect = outline.getBoundingClientRect();
    const outlineCenterX = outlineRect.left + (outlineRect.width / 2);
    const outlineCenterY = outlineRect.top + (outlineRect.height / 2);
    outline.classList.toggle("is-on-dark", isDarkColor(resolveColorAtPoint(outlineCenterX, outlineCenterY)));

    Array.from(list.querySelectorAll(".detail-outline-item")).forEach((item) => {
      const link = item.querySelector("a");
      if (!(link instanceof HTMLElement)) return;
      const rect = link.getBoundingClientRect();
      const centerX = rect.left + (rect.width / 2);
      const centerY = rect.top + (rect.height / 2);
      item.classList.toggle("is-on-dark", isDarkColor(resolveColorAtPoint(centerX, centerY)));
    });
  } else {
    outline.classList.remove("is-on-dark");
    list.querySelectorAll(".detail-outline-item").forEach((item) => {
      item.classList.remove("is-on-dark");
    });
  }

}

function queueNavThemeUpdate() {
  if (!navThemeFollowBackground) return;
  if (navThemeRaf) {
    cancelAnimationFrame(navThemeRaf);
  }
  navThemeRaf = requestAnimationFrame(() => {
    navThemeRaf = 0;
    updateNavThemeByBackground();
  });
}

function updateNavThemeByBackground() {
  if (!siteHeader) return;
  const headerRect = siteHeader.getBoundingClientRect();
  if (headerRect.height <= 0) return;

  const sampleY = Math.min(window.innerHeight - 1, Math.max(0, headerRect.bottom + 1));
  const sampleXs = [
    Math.min(window.innerWidth - 1, Math.max(0, headerRect.left + (headerRect.width * 0.25))),
    Math.min(window.innerWidth - 1, Math.max(0, headerRect.left + (headerRect.width * 0.5))),
    Math.min(window.innerWidth - 1, Math.max(0, headerRect.left + (headerRect.width * 0.75)))
  ];

  const darkHits = sampleXs.reduce((count, sampleX) => {
    const color = resolveDetailBackgroundColorAtPoint(sampleX, sampleY);
    return count + (isDarkColor(color) ? 1 : 0);
  }, 0);
  siteHeader.classList.toggle("is-nav-dark", darkHits >= 2);
}

function resolveDetailBackgroundColorAtPoint(x, y) {
  const candidates = [];
  const topFill = detailMain ? detailMain.querySelector(".detail-top-fill") : null;
  if (topFill instanceof HTMLElement && !topFill.hidden) {
    candidates.push(topFill);
  }
  if (detailMain) {
    detailMain.querySelectorAll(".page-range-layer[data-scope='detail-content'] .page-range-block").forEach((block) => {
      candidates.push(block);
    });
  }

  let color = "";
  candidates.forEach((node) => {
    if (!(node instanceof HTMLElement)) return;
    const rect = node.getBoundingClientRect();
    if (x < rect.left || x > rect.right || y < rect.top || y > rect.bottom) return;
    color = getComputedStyle(node).backgroundColor || node.style.background || color;
  });

  if (color) return color;
  return getComputedStyle(document.body).backgroundColor || "#ffffff";
}

function closeOutlineMobile() {
  const outline = document.querySelector(".detail-outline");
  const toggle = document.querySelector(".detail-outline-toggle");
  const backdrop = document.querySelector(".detail-outline-backdrop");
  if (!outline || !toggle) return;
  outline.classList.remove("is-open");
  outline.setAttribute("aria-hidden", "true");
  outline.setAttribute("inert", "");
  toggle.classList.remove("is-active");
  if (backdrop) {
    backdrop.classList.remove("is-active");
  }
  document.body.classList.remove("detail-outline-open");
  toggle.setAttribute("aria-expanded", "false");
}

function toggleOutlineMobile() {
  const outline = document.querySelector(".detail-outline");
  const toggle = document.querySelector(".detail-outline-toggle");
  const backdrop = document.querySelector(".detail-outline-backdrop");
  if (!outline || !toggle) return;
  const shouldOpen = !outline.classList.contains("is-open");
  outline.classList.toggle("is-open", shouldOpen);
  outline.setAttribute("aria-hidden", shouldOpen ? "false" : "true");
  if (shouldOpen) {
    outline.removeAttribute("inert");
  } else {
    outline.setAttribute("inert", "");
  }
  toggle.classList.toggle("is-active", shouldOpen);
  if (backdrop) {
    backdrop.classList.toggle("is-active", shouldOpen);
  }
  document.body.classList.toggle("detail-outline-open", shouldOpen);
  toggle.setAttribute("aria-expanded", shouldOpen ? "true" : "false");
}

function ensureHeadingId(heading, index, usedIds) {
  if (heading.id) {
    usedIds.add(heading.id);
    return heading.id;
  }

  const text = String(heading.textContent || "").trim();
  const base = slugifyHeading(text) || `section-${index + 1}`;
  let candidate = base;
  let seq = 2;

  while (usedIds.has(candidate)) {
    candidate = `${base}-${seq}`;
    seq += 1;
  }

  heading.id = candidate;
  usedIds.add(candidate);
  return candidate;
}

function slugifyHeading(text) {
  return String(text || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\u4e00-\u9fa5-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}
