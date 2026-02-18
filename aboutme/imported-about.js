(function () {
  const I18N = {
    zh: {
      navProjects: "项目",
      navAbout: "关于我",
      langToggleAria: "切换语言"
    },
    en: {
      navProjects: "Projects",
      navAbout: "About",
      langToggleAria: "Switch language"
    }
  };

  const PERSONALIZATION_FILE = "../assets/site_personalization.json";
  const STYLE_ID = "tpl-shell-about-style";

  const DEFAULT_PERSONALIZATION = Object.freeze({
    navBrandTextZh: "XXX的个人空间",
    navBrandTextEn: "XXX's Space",
    footerEnabled: false,
    footerHtmlZh: "",
    footerHtmlEn: "",
    footerBgRangesZh: [],
    footerBgRangesEn: []
  });

  const state = {
    lang: detectLanguage(),
    personalization: cloneDefaultPersonalization()
  };

  injectStyle();
  ensureHeader();
  ensureFooter();
  applyLanguage();
  bindEvents();
  init();

  async function init() {
    await loadPersonalization();
    applyLanguage();
    renderFooter();
  }

  function detectLanguage() {
    const saved = localStorage.getItem("siteLang");
    if (saved === "zh" || saved === "en") {
      return saved;
    }
    const lang = String(navigator.language || "en").toLowerCase();
    return lang.startsWith("zh") ? "zh" : "en";
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

    const legacyFooter = raw.footerHtml ?? raw.footer_html;
    const footerZh = raw.footerHtmlZh ?? raw.footer_html_zh ?? legacyFooter;
    const footerEn = raw.footerHtmlEn ?? raw.footer_html_en ?? legacyFooter;
    next.footerHtmlZh = typeof footerZh === "string" ? footerZh : "";
    next.footerHtmlEn = typeof footerEn === "string" ? footerEn : "";
    const footerBgRangesZh = raw.footerBgRangesZh ?? raw.footer_bg_ranges_zh ?? [];
    const footerBgRangesEn = raw.footerBgRangesEn ?? raw.footer_bg_ranges_en ?? [];
    next.footerBgRangesZh = normalizeLineRanges(footerBgRangesZh);
    next.footerBgRangesEn = normalizeLineRanges(footerBgRangesEn);

    return next;
  }

  function injectStyle() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
      .tpl-shell-about-page {
        --tpl-nav-height: 44px;
      }
      .tpl-shell-header {
        background: rgba(255, 255, 255, 0.78);
        border-bottom: 1px solid rgba(229, 224, 217, 0.6);
        box-shadow: 0 6px 16px rgba(16, 24, 40, 0.06);
        backdrop-filter: blur(18px);
        -webkit-backdrop-filter: blur(18px);
        position: sticky;
        top: 0;
        z-index: 10;
        font-family: "Space Grotesk", "Noto Sans SC", sans-serif;
      }
      .tpl-shell-header-inner {
        width: min(1200px, 100% - 32px);
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        min-height: var(--tpl-nav-height);
        gap: 24px;
      }
      .tpl-shell-brand-wrap {
        flex: 1;
        min-width: 0;
        display: flex;
        align-items: center;
      }
      .tpl-shell-brand {
        display: block;
        max-width: 100%;
        border: 0;
        background: transparent;
        color: #6f6a64;
        font-size: 0.95rem;
        font-weight: 500;
        letter-spacing: 0.04em;
        line-height: 1;
        cursor: pointer;
        padding: 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .tpl-shell-nav {
        display: flex;
        align-items: center;
        gap: 36px;
      }
      .tpl-shell-nav-link {
        position: relative;
        padding: 8px 0;
        font-weight: 600;
        font-size: 1rem;
        line-height: 1.4;
        letter-spacing: 0.02em;
        color: #6f6a64;
        text-decoration: none;
      }
      .tpl-shell-nav-link::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: -4px;
        height: 2px;
        background: #000000;
        transform: scaleX(0);
        transform-origin: center;
      }
      .tpl-shell-nav-link.is-active {
        color: #000000;
      }
      .tpl-shell-nav-link.is-active::after {
        transform: scaleX(1);
      }
      .tpl-shell-lang-toggle {
        border: 1px solid #6f6a64;
        background: transparent;
        color: #6f6a64;
        padding: 5px 11px;
        border-radius: 16px;
        font-size: 0.8rem;
        font-weight: 300;
        letter-spacing: 0.06em;
        cursor: pointer;
      }
      .tpl-shell-footer { max-width: 1200px; margin: 36px auto 20px; padding: 0 24px; color: #6d6d6d; font-size: 0.95rem; line-height: 1.7; }
      .tpl-shell-footer[hidden] { display: none !important; }
      .page-line-anchor {
        display: block;
        height: 0;
        margin: 0;
        pointer-events: none;
        visibility: hidden;
      }
      .page-line-background {
        position: relative;
        z-index: 0;
      }
      .page-line-background::before {
        content: "";
        position: absolute;
        top: 0;
        left: 50%;
        width: 100vw;
        height: 100%;
        transform: translateX(-50%);
        background: var(--line-bg-color, transparent);
        z-index: -1;
        pointer-events: none;
      }
      @media (max-width: 1000px) {
        .tpl-shell-nav {
          gap: 24px;
        }
      }
      @media (max-width: 760px) {
        .tpl-shell-about-page {
          --tpl-nav-height: 88px;
        }
        .tpl-shell-header {
          padding-top: env(safe-area-inset-top);
        }
        .tpl-shell-header-inner {
          width: min(1200px, 100% - 24px);
          align-items: flex-end;
          min-height: var(--tpl-nav-height);
          padding-bottom: 4px;
        }
        .tpl-shell-brand-wrap {
          align-items: flex-end;
        }
        .tpl-shell-brand {
          font-size: 0.95rem;
          font-weight: 600;
          line-height: 1;
          letter-spacing: 0.02em;
          padding: 8px 0;
        }
        .tpl-shell-nav-link {
          font-size: 0.95rem;
          line-height: 1;
        }
        .tpl-shell-footer { padding: 0 12px; margin-top: 24px; }
      }
      @media (max-width: 520px) {
        .tpl-shell-nav {
          gap: 18px;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function ensureHeader() {
    const body = document.body;
    if (!body) return;
    body.classList.add("tpl-shell-about-page");

    let header = document.querySelector("[data-template-shell='about-header']");
    if (!header) {
      header = document.createElement("header");
      header.className = "tpl-shell-header";
      header.setAttribute("data-template-shell", "about-header");
      header.innerHTML = `
        <div class="tpl-shell-header-inner">
          <div class="tpl-shell-brand-wrap">
            <button class="tpl-shell-brand" type="button" id="tpl-shell-brand"></button>
          </div>
          <nav class="tpl-shell-nav" aria-label="Template">
            <a class="tpl-shell-nav-link" id="tpl-shell-nav-projects" href="#"></a>
            <a class="tpl-shell-nav-link is-active" id="tpl-shell-nav-about" href="#"></a>
            <button class="tpl-shell-lang-toggle" type="button" id="tpl-shell-lang" aria-label="Switch"></button>
          </nav>
        </div>
      `;
      body.insertBefore(header, body.firstChild);
    }

    const projectsLink = document.getElementById("tpl-shell-nav-projects");
    const aboutLink = document.getElementById("tpl-shell-nav-about");
    if (projectsLink) {
      projectsLink.href = "../../index.html";
    }
    if (aboutLink) {
      aboutLink.href = "../../contents/aboutme/index.html";
    }
  }

  function ensureFooter() {
    let footer = document.querySelector("[data-template-shell='about-footer']");
    if (!footer) {
      footer = document.createElement("section");
      footer.className = "tpl-shell-footer";
      footer.hidden = true;
      footer.setAttribute("data-template-shell", "about-footer");
      document.body.appendChild(footer);
    }
  }

  function bindEvents() {
    const langBtn = document.getElementById("tpl-shell-lang");
    if (langBtn) {
      langBtn.addEventListener("click", () => {
        state.lang = state.lang === "zh" ? "en" : "zh";
        localStorage.setItem("siteLang", state.lang);
        applyLanguage();
        renderFooter();
      });
    }

    const brand = document.getElementById("tpl-shell-brand");
    if (brand) {
      brand.addEventListener("click", () => {
        window.location.href = "../../index.html";
      });
    }
  }

  function applyLanguage() {
    const strings = state.lang === "zh" ? I18N.zh : I18N.en;
    const projects = document.getElementById("tpl-shell-nav-projects");
    const about = document.getElementById("tpl-shell-nav-about");
    const langBtn = document.getElementById("tpl-shell-lang");
    const brand = document.getElementById("tpl-shell-brand");

    if (projects) projects.textContent = strings.navProjects;
    if (about) about.textContent = strings.navAbout;
    if (langBtn) {
      langBtn.textContent = state.lang === "zh" ? "EN" : "中文";
      langBtn.setAttribute("aria-label", strings.langToggleAria);
    }
    if (brand) {
      const label = state.lang === "zh"
        ? (state.personalization.navBrandTextZh || state.personalization.navBrandTextEn || DEFAULT_PERSONALIZATION.navBrandTextZh)
        : (state.personalization.navBrandTextEn || state.personalization.navBrandTextZh || DEFAULT_PERSONALIZATION.navBrandTextEn);
      brand.textContent = label;
    }
  }

  async function loadPersonalization() {
    try {
      const response = await fetch(PERSONALIZATION_FILE, { cache: "no-store" });
      if (!response.ok) return;
      const text = await response.text();
      const parsed = JSON.parse(text);
      state.personalization = normalizePersonalization(parsed);
    } catch (error) {
      state.personalization = cloneDefaultPersonalization();
    }
  }

  function renderFooter() {
    const footer = document.querySelector("[data-template-shell='about-footer']");
    if (!footer) return;

    if (!state.personalization.footerEnabled) {
      footer.hidden = true;
      footer.innerHTML = "";
      return;
    }

    const html = state.lang === "zh"
      ? (state.personalization.footerHtmlZh || state.personalization.footerHtmlEn || "")
      : (state.personalization.footerHtmlEn || state.personalization.footerHtmlZh || "");
    const rangesPrimary = state.lang === "zh"
      ? (state.personalization.footerBgRangesZh || [])
      : (state.personalization.footerBgRangesEn || []);
    const rangesFallback = state.lang === "zh"
      ? (state.personalization.footerBgRangesEn || [])
      : (state.personalization.footerBgRangesZh || []);
    const rangesRaw = rangesPrimary.length ? rangesPrimary : rangesFallback;

    if (!String(html || "").trim()) {
      footer.hidden = true;
      footer.innerHTML = "";
      return;
    }

    footer.hidden = false;
    footer.innerHTML = html;
    applyLineDecorations(footer, rangesRaw, "footer-line-");
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
    const lineElements = getLineTargets(container);
    lineElements.forEach((element) => {
      element.classList.remove("page-line-background");
      element.style.removeProperty("--line-bg-color");
    });

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
      const color = resolveLineColor(lineNumber, normalizedRanges);
      if (!color) return;
      element.classList.add("page-line-background");
      element.style.setProperty("--line-bg-color", color);
    });
  }
})();
