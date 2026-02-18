(function () {
  const I18N = {
    zh: {
      navProjects: "项目",
      navAbout: "关于我",
      prev: "上一个项目",
      next: "下一个项目",
      langToggleAria: "切换语言"
    },
    en: {
      navProjects: "Projects",
      navAbout: "About",
      prev: "Previous Project",
      next: "Next Project",
      langToggleAria: "Switch language"
    }
  };

  const PERSONALIZATION_FILE = "../../assets/site_personalization.json";
  const TYPES_FILE = "../../assets/project_types.csv";
  const PROJECTS_FILE = "../../assets/projects.csv";
  const STYLE_ID = "tpl-shell-detail-style";

  const DEFAULT_PERSONALIZATION = Object.freeze({
    navBrandTextZh: "XXX的个人空间",
    navBrandTextEn: "XXX's Space"
  });

  const state = {
    lang: detectLanguage(),
    personalization: cloneDefaultPersonalization(),
    types: [],
    prevProject: null,
    nextProject: null
  };
  let navThemeRaf = 0;

  injectStyle();
  ensureHeader();
  ensurePagination();
  applyLanguage();
  bindEvents();
  init();

  async function init() {
    await Promise.all([loadPersonalization(), loadTypes(), loadPrevNext()]);
    applyLanguage();
    renderPagination();
    queueNavThemeUpdate();
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

  function injectStyle() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
      .tpl-shell-detail-page {
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
        transition: background-color 220ms ease, border-color 220ms ease, box-shadow 220ms ease;
      }
      .tpl-shell-header.is-nav-dark {
        background: rgb(44, 44, 41);
        border-bottom: 1px solid rgba(255, 255, 255, 0.14);
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.24);
        backdrop-filter: none;
        -webkit-backdrop-filter: none;
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
        transition: color 220ms ease;
      }
      .tpl-shell-header.is-nav-dark .tpl-shell-brand {
        color: #f2f2f2;
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
        transition: color 220ms ease;
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
        transition: background-color 220ms ease, transform 220ms ease;
      }
      .tpl-shell-nav-link.is-active {
        color: #000000;
      }
      .tpl-shell-nav-link.is-active::after {
        transform: scaleX(1);
      }
      .tpl-shell-header.is-nav-dark .tpl-shell-nav-link {
        color: rgba(242, 242, 242, 0.78);
      }
      .tpl-shell-header.is-nav-dark .tpl-shell-nav-link.is-active {
        color: #ffffff;
      }
      .tpl-shell-header.is-nav-dark .tpl-shell-nav-link::after {
        background: #ffffff;
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
        transition: color 220ms ease, border-color 220ms ease;
      }
      .tpl-shell-header.is-nav-dark .tpl-shell-lang-toggle {
        color: #f2f2f2;
        border-color: rgba(242, 242, 242, 0.62);
      }
      .tpl-shell-pagination {
        max-width: 1200px;
        margin: 40px auto 20px;
        padding: 16px 24px 0;
        border-top: 0;
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 16px;
      }
      .tpl-shell-pagination[hidden] { display: none !important; }
      .tpl-shell-nav-card {
        display: flex;
        flex-direction: column;
        gap: 6px;
        padding: 12px 0;
        border: 0;
        border-radius: 14px;
        text-decoration: none;
        color: inherit;
        background: transparent;
        transition: transform 150ms ease;
      }
      .tpl-shell-nav-card:hover {
        transform: translateY(-2px);
      }
      .tpl-shell-nav-card[hidden] { display: none !important; }
      #tpl-shell-next {
        align-items: flex-end;
        text-align: right;
      }
      .tpl-shell-pagination.is-only-next #tpl-shell-next {
        grid-column: 2;
        justify-self: end;
      }
      .tpl-shell-nav-label {
        display: block;
        font-size: 0.8rem;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: #6f6a64;
      }
      .tpl-shell-nav-title { display: block; font-size: 1.05rem; font-weight: 600; }
      .tpl-shell-nav-meta { display: block; color: #6f6a64; font-size: 0.9rem; }
      @media (max-width: 1000px) {
        .tpl-shell-nav {
          gap: 24px;
        }
      }
      @media (max-width: 760px) {
        .tpl-shell-detail-page {
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
        .tpl-shell-pagination {
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          padding: 16px 12px 0;
          margin-top: 40px;
        }
        .tpl-shell-nav-card {
          padding: 14px 16px;
        }
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
    body.classList.add("tpl-shell-detail-page");

    let header = document.querySelector("[data-template-shell='detail-header']");
    if (!header) {
      header = document.createElement("header");
      header.className = "tpl-shell-header";
      header.setAttribute("data-template-shell", "detail-header");
      header.innerHTML = `
        <div class="tpl-shell-header-inner">
          <div class="tpl-shell-brand-wrap">
            <button class="tpl-shell-brand" type="button" id="tpl-shell-brand"></button>
          </div>
          <nav class="tpl-shell-nav" aria-label="Template">
            <a class="tpl-shell-nav-link is-active" id="tpl-shell-nav-projects" href="#"></a>
            <a class="tpl-shell-nav-link" id="tpl-shell-nav-about" href="#"></a>
            <button class="tpl-shell-lang-toggle" type="button" id="tpl-shell-lang" aria-label="Switch"></button>
          </nav>
        </div>
      `;
      body.insertBefore(header, body.firstChild);
    }

    const projectsLink = document.getElementById("tpl-shell-nav-projects");
    const aboutLink = document.getElementById("tpl-shell-nav-about");
    if (projectsLink) {
      projectsLink.href = "../../../index.html";
    }
    if (aboutLink) {
      aboutLink.href = "../../../contents/aboutme/index.html";
    }
  }

  function ensurePagination() {
    let pagination = document.querySelector("[data-template-shell='detail-pagination']");
    if (!pagination) {
      pagination = document.createElement("section");
      pagination.className = "tpl-shell-pagination";
      pagination.setAttribute("data-template-shell", "detail-pagination");
      pagination.hidden = true;
      pagination.innerHTML = `
        <a class="tpl-shell-nav-card" id="tpl-shell-prev" hidden href="#">
          <span class="tpl-shell-nav-label" id="tpl-shell-prev-label"></span>
          <span class="tpl-shell-nav-title" id="tpl-shell-prev-title"></span>
          <span class="tpl-shell-nav-meta" id="tpl-shell-prev-meta"></span>
        </a>
        <a class="tpl-shell-nav-card" id="tpl-shell-next" hidden href="#">
          <span class="tpl-shell-nav-label" id="tpl-shell-next-label"></span>
          <span class="tpl-shell-nav-title" id="tpl-shell-next-title"></span>
          <span class="tpl-shell-nav-meta" id="tpl-shell-next-meta"></span>
        </a>
      `;
      document.body.appendChild(pagination);
    }
  }

  function bindEvents() {
    const langBtn = document.getElementById("tpl-shell-lang");
    if (langBtn) {
      langBtn.addEventListener("click", () => {
        state.lang = state.lang === "zh" ? "en" : "zh";
        localStorage.setItem("siteLang", state.lang);
        applyLanguage();
        renderPagination();
        queueNavThemeUpdate();
      });
    }

    const brand = document.getElementById("tpl-shell-brand");
    if (brand) {
      brand.addEventListener("click", () => {
        window.location.href = "../../../index.html";
      });
    }

    window.addEventListener("resize", queueNavThemeUpdate);
    window.addEventListener("scroll", queueNavThemeUpdate, { passive: true });
  }

  function queueNavThemeUpdate() {
    if (navThemeRaf) {
      cancelAnimationFrame(navThemeRaf);
    }
    navThemeRaf = requestAnimationFrame(() => {
      navThemeRaf = 0;
      updateNavThemeByBackground();
    });
  }

  function updateNavThemeByBackground() {
    const header = document.querySelector("[data-template-shell='detail-header']");
    if (!(header instanceof HTMLElement)) return;
    const rect = header.getBoundingClientRect();
    if (rect.height <= 0) return;

    const sampleY = Math.min(window.innerHeight - 1, Math.max(0, rect.bottom + 1));
    const sampleXs = [
      Math.min(window.innerWidth - 1, Math.max(0, rect.left + (rect.width * 0.25))),
      Math.min(window.innerWidth - 1, Math.max(0, rect.left + (rect.width * 0.5))),
      Math.min(window.innerWidth - 1, Math.max(0, rect.left + (rect.width * 0.75)))
    ];

    const darkHits = sampleXs.reduce((count, x) => {
      const color = resolveBackgroundColorAtPoint(x, sampleY, header);
      return count + (isDarkColor(color) ? 1 : 0);
    }, 0);
    header.classList.toggle("is-nav-dark", darkHits >= 2);
  }

  function resolveBackgroundColorAtPoint(x, y, header) {
    const stack = document.elementsFromPoint(x, y);
    for (const node of stack) {
      if (!(node instanceof HTMLElement)) continue;
      if (header.contains(node)) continue;
      const color = getComputedStyle(node).backgroundColor;
      if (!color || color === "transparent" || color === "rgba(0, 0, 0, 0)") continue;
      return color;
    }
    return getComputedStyle(document.body).backgroundColor || "#ffffff";
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

  async function loadTypes() {
    try {
      const response = await fetch(TYPES_FILE, { cache: "no-store" });
      if (!response.ok) return;
      const text = await response.text();
      state.types = parseTypesCsv(text);
    } catch (error) {
      state.types = [];
    }
  }

  async function loadPrevNext() {
    const currentId = String(document.body?.dataset.projectId || "").trim();
    if (!currentId) return;

    try {
      const response = await fetch(PROJECTS_FILE, { cache: "no-store" });
      if (!response.ok) return;
      const text = await response.text();
      const allProjects = parseProjectsCsv(text);
      const hiddenTypeIds = new Set(state.types.filter((item) => item.hidden).map((item) => item.id));
      const visibleProjects = allProjects.filter((project) => !project.hidden && !hiddenTypeIds.has(project.type));
      const ordered = [...visibleProjects].sort(compareProjectsByDisplayOrder);
      const index = ordered.findIndex((project) => project.id === currentId);
      state.prevProject = index > 0 ? ordered[index - 1] : null;
      state.nextProject = index >= 0 && index < ordered.length - 1 ? ordered[index + 1] : null;
    } catch (error) {
      state.prevProject = null;
      state.nextProject = null;
    }
  }

  function renderPagination() {
    const pagination = document.querySelector("[data-template-shell='detail-pagination']");
    if (!pagination) return;

    const strings = state.lang === "zh" ? I18N.zh : I18N.en;
    const prev = state.prevProject;
    const next = state.nextProject;

    const prevCard = document.getElementById("tpl-shell-prev");
    const nextCard = document.getElementById("tpl-shell-next");

    renderNavCard(prevCard, prev, strings.prev);
    renderNavCard(nextCard, next, strings.next);

    pagination.hidden = !prev && !next;
    pagination.classList.toggle("is-only-next", !prev && Boolean(next));
    pagination.classList.toggle("is-only-prev", Boolean(prev) && !next);
  }

  function renderNavCard(card, project, labelText) {
    if (!card) return;
    const label = card.querySelector(".tpl-shell-nav-label");
    const title = card.querySelector(".tpl-shell-nav-title");
    const meta = card.querySelector(".tpl-shell-nav-meta");

    if (!project) {
      card.hidden = true;
      card.removeAttribute("href");
      return;
    }

    card.hidden = false;
    card.href = getDetailLink(project);
    if (label) label.textContent = labelText;
    if (title) {
      title.textContent = state.lang === "zh"
        ? (project.name_zh || project.name_en || project.id)
        : (project.name_en || project.name_zh || project.id);
    }
    if (meta) {
      meta.textContent = getTypeLabel(project.type) || "";
      meta.hidden = !meta.textContent;
    }
  }

  function getDetailLink(project) {
    const backToAll = new URLSearchParams(window.location.search).get("from") === "all";
    const base = `../${project.id}/index.html`;
    return backToAll ? `${base}?from=all` : base;
  }

  function getTypeLabel(typeId) {
    if (!typeId) return "";
    const found = state.types.find((item) => item.id === typeId);
    if (!found) return "";
    return state.lang === "zh"
      ? (found.name_zh || found.name_en || "")
      : (found.name_en || found.name_zh || "");
  }

  function parseProjectsCsv(text) {
    const rows = String(text || "").trim().split(/\r?\n/).filter(Boolean);
    if (!rows.length) return [];
    const headers = splitCsvLine(rows.shift()).map((item) => item.trim());

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
    }).filter((item) => item.id);
  }

  function parseTypesCsv(text) {
    const rows = String(text || "").trim().split(/\r?\n/).filter(Boolean);
    if (!rows.length) return [];
    const headers = splitCsvLine(rows.shift()).map((item) => item.trim());

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
      const ch = line[i];
      if (ch === '"') {
        const next = line[i + 1];
        if (inQuotes && next === '"') {
          current += '"';
          i += 1;
        } else {
          inQuotes = !inQuotes;
        }
        continue;
      }
      if (ch === "," && !inQuotes) {
        result.push(current);
        current = "";
        continue;
      }
      current += ch;
    }

    result.push(current);
    return result;
  }

  function normalizeDateKey(value) {
    if (!value) return 0;
    const numeric = Number(String(value).replace(/[^0-9]/g, ""));
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
})();
