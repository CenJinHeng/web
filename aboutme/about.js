const PERSONALIZATION_FILE = "../assets/site_personalization.json";
const ABOUT_DATA_FILE = "./about-data.js";
const DEFAULT_PERSONALIZATION = Object.freeze({
  navBrandTextZh: "XXX的个人空间",
  navBrandTextEn: "XXX's Space",
  footerEnabled: false,
  footerHtmlZh: "",
  footerHtmlEn: "",
  footerBgRangesZh: [],
  footerBgRangesEn: []
});

const langToggle = document.querySelector("[data-lang-toggle]");
const aboutContent = document.getElementById("about-content");
const aboutNotice = document.getElementById("about-notice");
const aboutZhTemplate = document.getElementById("about-content-zh-template");
const aboutEnTemplate = document.getElementById("about-content-en-template");
const aboutBgRangesZhTemplate = document.getElementById("about-bg-ranges-zh-template");
const aboutBgRangesEnTemplate = document.getElementById("about-bg-ranges-en-template");
const siteBrandText = document.getElementById("site-brand-text");
const projectsNavLink = document.querySelector(".top-nav .nav-btn[data-i18n='nav.projects']");
const siteFooterCopy = document.getElementById("site-footer-copy");
let hasTemplateContent = Boolean(aboutZhTemplate || aboutEnTemplate);

const DEFAULT_ABOUT_I18N = {
  zh: {
    page: { title: "关于我" },
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
    page: { title: "About" },
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
};

const state = {
  lang: detectLanguage(),
  personalization: cloneDefaultPersonalization(),
  aboutDataLoaded: Boolean(window.ABOUT_I18N && typeof window.ABOUT_I18N === "object")
};

let aboutBgRangesByLang = {
  zh: parseLineRangesTemplate(aboutBgRangesZhTemplate ? aboutBgRangesZhTemplate.innerHTML : ""),
  en: parseLineRangesTemplate(aboutBgRangesEnTemplate ? aboutBgRangesEnTemplate.innerHTML : "")
};

if (state.aboutDataLoaded) {
  applyAboutDataFromWindow();
}

applyI18n(state.lang);
updateLangToggle();
applyPersonalization();
setupBrandNavigation();
bootstrap();

if (langToggle) {
  langToggle.addEventListener("click", () => {
    const nextLang = state.lang === "zh" ? "en" : "zh";
    setLanguage(nextLang);
  });
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
}

function updateLangToggle() {
  if (!langToggle) return;
  langToggle.textContent = state.lang === "zh" ? "EN" : "中文";
}

function getLocaleStrings(lang) {
  const source = (window.ABOUT_I18N && typeof window.ABOUT_I18N === "object")
    ? window.ABOUT_I18N
    : DEFAULT_ABOUT_I18N;
  return source[lang] || source.en || DEFAULT_ABOUT_I18N.en;
}

function getPageTitle(lang, strings) {
  if (hasTemplateContent && !state.aboutDataLoaded) {
    const custom = lang === "zh" ? document.body?.dataset.titleZh : document.body?.dataset.titleEn;
    const text = String(custom || "").trim();
    if (text) return text;
  }
  return strings?.page?.title || DEFAULT_ABOUT_I18N[lang]?.page?.title || DEFAULT_ABOUT_I18N.en.page.title;
}

function getNoticeText(lang, strings) {
  if (hasTemplateContent && !state.aboutDataLoaded) {
    const custom = lang === "zh" ? document.body?.dataset.noticeZh : document.body?.dataset.noticeEn;
    const text = String(custom || "").trim();
    if (text) return text;
  }
  return strings?.about?.notice || DEFAULT_ABOUT_I18N[lang]?.about?.notice || DEFAULT_ABOUT_I18N.en.about.notice;
}

function getTemplatePayload(lang) {
  const primary = lang === "zh" ? aboutZhTemplate : aboutEnTemplate;
  const fallback = lang === "zh" ? aboutEnTemplate : aboutZhTemplate;
  const primaryRanges = aboutBgRangesByLang[lang] || [];
  const fallbackRanges = aboutBgRangesByLang[lang === "zh" ? "en" : "zh"] || [];
  const resolvedRanges = primaryRanges.length ? primaryRanges : fallbackRanges;
  const primaryHtml = sanitizeAboutHtml(primary ? primary.innerHTML : "");
  if (primaryHtml) {
    return {
      html: primaryHtml,
      ranges: resolvedRanges
    };
  }
  const fallbackHtml = sanitizeAboutHtml(fallback ? fallback.innerHTML : "");
  if (fallbackHtml) {
    return {
      html: fallbackHtml,
      ranges: fallbackRanges
    };
  }
  return { html: "", ranges: [] };
}

function applyI18n(lang) {
  const strings = getLocaleStrings(lang);
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.title = getPageTitle(lang, strings);

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

  document.querySelectorAll("[data-i18n-list]").forEach((list) => {
    const key = list.dataset.i18nList;
    const items = resolveKey(strings, key);
    list.innerHTML = "";
    if (Array.isArray(items)) {
      items.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
      });
    }
  });

  renderAboutContent(lang, strings);
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

function sanitizeAboutHtml(html) {
  const source = String(html || "").trim();
  if (!source) return "";
  const probe = document.createElement("div");
  probe.innerHTML = source;
  probe.querySelectorAll("script, style").forEach((node) => node.remove());
  return probe.innerHTML.trim();
}

function renderAboutContent(lang, strings) {
  if (!aboutContent || !aboutNotice) return;

  let html = "";
  let ranges = [];
  if (hasTemplateContent && !state.aboutDataLoaded) {
    const payload = getTemplatePayload(lang);
    html = payload.html;
    ranges = payload.ranges;
  } else {
    const fallbackLang = lang === "zh" ? "en" : "zh";
    const fallbackStrings = getLocaleStrings(fallbackLang);
    const primaryHtml = sanitizeAboutHtml(strings?.about?.content_html || "");
    const fallbackHtml = sanitizeAboutHtml(fallbackStrings?.about?.content_html || "");
    const primaryRanges = normalizeLineRanges(strings?.about?.bg_ranges ?? strings?.about?.bgRanges ?? []);
    const fallbackRanges = normalizeLineRanges(fallbackStrings?.about?.bg_ranges ?? fallbackStrings?.about?.bgRanges ?? []);
    html = primaryHtml || fallbackHtml;
    ranges = primaryRanges.length ? primaryRanges : fallbackRanges;
  }

  const notice = getNoticeText(lang, strings);
  aboutNotice.textContent = notice;

  if (html) {
    aboutContent.innerHTML = html;
    aboutContent.hidden = false;
    aboutNotice.hidden = true;
    applyLineDecorations(aboutContent, ranges);
    return;
  }

  aboutContent.innerHTML = "";
  aboutContent.hidden = true;
  aboutNotice.hidden = false;
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

async function bootstrap() {
  await loadAboutData();
  await loadPersonalization();
  applyI18n(state.lang);
  updateLangToggle();
  applyPersonalization();
}

async function loadAboutData() {
  if (state.aboutDataLoaded) {
    applyAboutDataFromWindow();
    return;
  }
  try {
    await new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = `${ABOUT_DATA_FILE}?v=${Date.now()}`;
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => resolve();
      document.head.appendChild(script);
    });
    state.aboutDataLoaded = Boolean(window.ABOUT_I18N && typeof window.ABOUT_I18N === "object");
    if (state.aboutDataLoaded) {
      applyAboutDataFromWindow();
    }
  } catch (error) {
    state.aboutDataLoaded = false;
  }
}

function applyAboutDataFromWindow() {
  const source = (window.ABOUT_I18N && typeof window.ABOUT_I18N === "object") ? window.ABOUT_I18N : null;
  if (!source) return;
  hasTemplateContent = false;
  aboutBgRangesByLang = {
    zh: normalizeLineRanges(source?.zh?.about?.bg_ranges ?? source?.zh?.about?.bgRanges ?? []),
    en: normalizeLineRanges(source?.en?.about?.bg_ranges ?? source?.en?.about?.bgRanges ?? [])
  };
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
  if (siteBrandText) {
    const label = state.lang === "zh"
      ? (state.personalization.navBrandTextZh || state.personalization.navBrandTextEn || DEFAULT_PERSONALIZATION.navBrandTextZh)
      : (state.personalization.navBrandTextEn || state.personalization.navBrandTextZh || DEFAULT_PERSONALIZATION.navBrandTextEn);
    siteBrandText.textContent = label;
  }

  if (!siteFooterCopy) return;
  const footerHtmlRaw = state.lang === "zh"
    ? (state.personalization.footerHtmlZh || state.personalization.footerHtmlEn || "")
    : (state.personalization.footerHtmlEn || state.personalization.footerHtmlZh || "");
  const footerRangesPrimary = state.lang === "zh"
    ? (state.personalization.footerBgRangesZh || [])
    : (state.personalization.footerBgRangesEn || []);
  const footerRangesFallback = state.lang === "zh"
    ? (state.personalization.footerBgRangesEn || [])
    : (state.personalization.footerBgRangesZh || []);
  const footerRangesRaw = footerRangesPrimary.length ? footerRangesPrimary : footerRangesFallback;
  const footerHtml = sanitizeAboutHtml(footerHtmlRaw);
  const shouldShowFooter = Boolean(state.personalization.footerEnabled) && Boolean(footerHtml);
  siteFooterCopy.hidden = !shouldShowFooter;
  siteFooterCopy.innerHTML = shouldShowFooter ? footerHtml : "";
  if (shouldShowFooter) {
    applyLineDecorations(siteFooterCopy, footerRangesRaw, "footer-line-");
  } else {
    siteFooterCopy.querySelectorAll(".page-line-anchor").forEach((node) => node.remove());
  }
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
