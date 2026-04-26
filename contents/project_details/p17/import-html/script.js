const detectPreferredLang = () => {
  const saved = localStorage.getItem("siteLang");
  if (saved === "zh" || saved === "en") {
    return saved;
  }
  const htmlLang = String(document.documentElement.lang || "").toLowerCase();
  if (htmlLang.startsWith("zh")) {
    return "zh";
  }
  const navLang = String(navigator.language || "en").toLowerCase();
  return navLang.startsWith("zh") ? "zh" : "en";
};

const currentPath = window.location.pathname;
const isEnPath = /index-en\.html$/i.test(currentPath);
const isZhPath = /index\.html$/i.test(currentPath) && !isEnPath;
const preferredLang = detectPreferredLang();

if ((preferredLang === "en" && isZhPath) || (preferredLang === "zh" && isEnPath)) {
  const nextPath = preferredLang === "en"
    ? currentPath.replace(/index\.html$/i, "index-en.html")
    : currentPath.replace(/index-en\.html$/i, "index.html");
  if (nextPath !== currentPath) {
    window.location.replace(`${nextPath}${window.location.search}${window.location.hash}`);
  }
}

const PAGE_LANG = /index-en\.html$/i.test(window.location.pathname) ? "en" : "zh";
const tr = (zh, en) => (PAGE_LANG === "zh" ? zh : en);

const showAiTranslationNotice = () => {
  if (PAGE_LANG !== "zh") {
    return;
  }

  const startTs = Date.now();
  const maxWaitMs = 8000;

  const waitForLangButton = () => {
    const langButton = document.getElementById("tpl-shell-lang");
    if (!langButton) {
      if (Date.now() - startTs < maxWaitMs) {
        window.requestAnimationFrame(waitForLangButton);
      }
      return;
    }

    const note = document.createElement("div");
    note.className = "lang-ai-note";
    note.textContent = "中文翻译AI生成";
    document.body.appendChild(note);

    const teardown = () => {
      note.classList.remove("is-visible");
      window.setTimeout(() => {
        note.remove();
      }, 220);
    };

    window.requestAnimationFrame(() => {
      note.classList.add("is-visible");
    });

    window.setTimeout(teardown, 10000);
  };

  waitForLangButton();
};

showAiTranslationNotice();

const citations = [
  {
    text: "Grimm, N. B., Faeth, S. H., Golubiewski, N. E., Redman, C. L., Wu, J., Bai, X., & Briggs, J. M. (2008). Global change and the ecology of cities. Science, 319(5864), 756–760.",
    url: "https://doi.org/10.1126/science.1150195",
  },
  {
    text: "Dobbs, C., Nitschke, C. R., & Kendal, D. (2017). Assessing the drivers shaping global patterns of urban vegetation landscape structure. Science of the Total Environment, 592, 171–177.",
    url: "https://doi.org/10.1016/j.scitotenv.2017.03.058",
  },
  {
    text: "McKinney, M. L. (2008). Effects of urbanization on species richness: A review of plants and animals. Urban Ecosystems, 11(2), 161–176.",
    url: "https://doi.org/10.1007/s11252-007-0045-4",
  },
  {
    text: "Aronson, M. F. J., et al. (2014). A global analysis of the impacts of urbanization on bird and plant diversity reveals key anthropogenic drivers. Proceedings of the Royal Society B, 281(1780), 20133330.",
    url: "https://doi.org/10.1098/rspb.2013.3330",
  },
  {
    text: "Johnson, M. T. J., & Munshi-South, J. (2017). Evolution of life in urban environments. Science, 358(6363), eaam8327.",
    url: "https://doi.org/10.1126/science.aam8327",
  },
  {
    text: "Tucker, M. A., et al. (2018). Global reductions in terrestrial mammalian movements. Science, 359(6374), 466–469.",
    url: "https://doi.org/10.1126/science.aam9712",
  },
  {
    text: "McKinney, M. L. (2006). Urbanization as a major cause of biotic homogenization. Biological Conservation, 127(3), 247–260.",
    url: "https://doi.org/10.1016/j.biocon.2005.09.005",
  },
  {
    text: "Isaksson, C. (2018). Impact of urbanization on birds. In D. T. Tietze (Ed.), Bird species: How they arise, modify and vanish (pp. 235–257). Springer.",
    url: "https://doi.org/10.1007/978-3-319-91689-7_13",
  },
  {
    text: "Morelli, F., et al. (2023). Effects of light and noise pollution on avian communities of European cities are correlated with species’ diet. Scientific Reports, 13, 4361.",
    url: "https://doi.org/10.1038/s41598-023-31337-w",
  },
  {
    text: "Benmazouz, I., et al. (2021). Corvids in urban environments: A systematic global literature review. Animals, 11(11), 3226.",
    url: "https://doi.org/10.3390/ani11113226",
  },
  {
    text: "Holderegger, R., & Di Giulio, M. (2010). The genetic effects of roads: A review of empirical evidence. Basic and Applied Ecology, 11(6), 522–531.",
    url: "https://doi.org/10.1016/j.baae.2010.06.006",
  },
  {
    text: "Prange, S., Gehrt, S. D., & Wiggers, E. P. (2003). Demographic factors contributing to high raccoon densities in urban landscapes. The Journal of Wildlife Management, 67(2), 324–333.",
    url: "https://doi.org/10.2307/3802774",
  },
  {
    text: "Hamer, A. J., & McDonnell, M. J. (2008). Amphibian ecology and conservation in the urbanising world: A review. Biological Conservation, 141(10), 2432–2449.",
    url: "https://doi.org/10.1016/j.biocon.2008.07.020",
  },
  {
    text: "Capilla-Lasheras, P., et al. (2022). A global meta-analysis reveals higher variation in breeding phenology in urban birds than in non-urban neighbours. Ecology Letters, 25(11), 2552–2570.",
    url: "https://doi.org/10.1111/ele.14099",
  },
  {
    text: "Winbourne, J. B., et al. (2020). Tree transpiration and urban temperatures: Current understanding, implications, and future research directions. BioScience, 70(7), 576–588.",
    url: "https://doi.org/10.1093/biosci/biaa055",
  },
  {
    text: "Cosgrove, A., & Berkelhammer, M. (2018). Downwind footprint of an urban heat island on air and lake temperatures. npj Climate and Atmospheric Science, 1, 46.",
    url: "https://doi.org/10.1038/s41612-018-0055-3",
  },
  {
    text: "Diamond, S. E., et al. (2018). Evolution of thermal tolerance and its fitness consequences: Parallel and non-parallel responses to urban heat islands across three cities. Proceedings of the Royal Society B, 285(1882), 20180036.",
    url: "https://doi.org/10.1098/rspb.2018.0036",
  },
  {
    text: "Campbell-Staton, S. C., et al. (2020). Parallel selection on thermal physiology facilitates repeated adaptation of city lizards to urban heat islands. Nature Ecology & Evolution, 4, 652–658.",
    url: "https://doi.org/10.1038/s41559-020-1131-8",
  },
  {
    text: "Gallo, T., Fidino, M., Lehrer, E. W., & Magle, S. B. (2022). Mammals adjust diel activity across gradients of urbanization. eLife, 11, e74756.",
    url: "https://doi.org/10.7554/eLife.74756",
  },
  {
    text: "Ritzel, K., & Gallo, T. (2020). Behavior change in urban mammals: A systematic review. Frontiers in Ecology and Evolution, 8, 576665.",
    url: "https://doi.org/10.3389/fevo.2020.576665",
  },
  {
    text: "Hall, J. M., Warner, D. A., & others. (2018). Thermal spikes from the urban heat island increase mortality and alter physiology of lizard embryos. Journal of Experimental Biology, 221(14), jeb181552.",
    url: "https://doi.org/10.1242/jeb.181552",
  },
  {
    text: "United Nations Human Settlements Programme (UN-Habitat). (2022). World cities report 2022: Envisaging the future of cities. United Nations.",
    url: "https://digitallibrary.un.org/record/3984713",
  },
  {
    text: "Gaynor, K. M., Hojnowski, C. E., Carter, N. H., & Brashares, J. S. (2018). The influence of human disturbance on wildlife nocturnality. Science, 360(6394), 1232–1235.",
    url: "https://doi.org/10.1126/science.aar7121",
  },
  {
    text: "Kronfeld-Schor, N., & Dayan, T. (2003). Partitioning of time as an ecological resource. Annual Review of Ecology, Evolution, and Systematics, 34, 153–181.",
    url: null,
  },
  {
    text: "Connell, J. H. (1978). Diversity in tropical rain forests and coral reefs. Science, 199(4335), 1302–1310.",
    url: "https://doi.org/10.1126/science.199.4335.1302",
  },
];

const citationByNumber = new Map(citations.map((item, idx) => [idx + 1, item]));

const list = document.getElementById("citation-list");
if (list) {
  citations.forEach((item, idx) => {
    const number = idx + 1;
    const li = document.createElement("li");
    li.id = `citation-${number}`;
    li.className = "citation-item";

    const label = document.createElement("span");
    label.className = "citation-label";
    label.textContent = `[${number}] `;
    li.appendChild(label);

    const text = document.createElement("span");
    text.textContent = `${item.text} `;
    li.appendChild(text);

    if (item.url) {
      const a = document.createElement("a");
      a.href = item.url;
      a.target = "_blank";
      a.rel = "noreferrer";
      a.textContent = item.url;
      li.appendChild(a);
    }
    list.appendChild(li);
  });
}

const parseCsvRows = (csvText) => {
  const rows = [];
  let current = "";
  let row = [];
  let inQuotes = false;

  for (let i = 0; i < csvText.length; i += 1) {
    const char = csvText[i];
    const next = csvText[i + 1];

    if (char === '"') {
      if (inQuotes && next === '"') {
        current += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (char === "," && !inQuotes) {
      row.push(current);
      current = "";
      continue;
    }

    if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && next === "\n") {
        i += 1;
      }
      row.push(current);
      current = "";
      if (row.some((cell) => cell.trim().length > 0)) {
        rows.push(row);
      }
      row = [];
      continue;
    }

    current += char;
  }

  row.push(current);
  if (row.some((cell) => cell.trim().length > 0)) {
    rows.push(row);
  }

  return rows;
};

const renderSampleDataTable = (headers, records, mountNode) => {
  const table = document.createElement("table");
  table.className = "sample-table";

  const thead = document.createElement("thead");
  const headRow = document.createElement("tr");
  headers.forEach((header) => {
    const th = document.createElement("th");
    th.textContent = header.trim();
    headRow.appendChild(th);
  });
  thead.appendChild(headRow);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  records.forEach((record) => {
    const tr = document.createElement("tr");
    for (let i = 0; i < headers.length; i += 1) {
      const td = document.createElement("td");
      td.textContent = (record[i] || "").trim();
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);

  mountNode.replaceChildren(table);
};

const loadSampleDataTable = async () => {
  const container = document.getElementById("sample-table-shell");
  if (!container) {
    return;
  }

  const csvCandidates = ["data/sample.csv", "data/data_sample.csv"];
  let csvText = "";
  let loaded = false;

  for (const path of csvCandidates) {
    try {
      const response = await fetch(path, { cache: "no-store" });
      if (!response.ok) {
        continue;
      }
      csvText = await response.text();
      loaded = true;
      break;
    } catch (_error) {
      // Try next candidate path.
    }
  }

  if (!loaded) {
    container.innerHTML = `<p class="sample-table-status">${tr("无法加载示例 CSV 数据。", "Unable to load sample CSV data.")}</p>`;
    return;
  }

  const rows = parseCsvRows(csvText.replace(/^\uFEFF/, ""));
  if (rows.length === 0) {
    container.innerHTML = `<p class="sample-table-status">${tr("CSV 文件为空。", "CSV file is empty.")}</p>`;
    return;
  }

  const [headers, ...records] = rows;
  renderSampleDataTable(headers, records, container);
};

loadSampleDataTable();

const loadSpeciesDistributionChart = async () => {
  const container = document.getElementById("species-pie-shell");
  if (!container) {
    return;
  }

  const csvCandidates = ["data/species_freq.csv", "data/species_freq。csv"];
  let csvText = "";
  let loaded = false;

  for (const path of csvCandidates) {
    try {
      const response = await fetch(path, { cache: "no-store" });
      if (!response.ok) {
        continue;
      }
      csvText = await response.text();
      loaded = true;
      break;
    } catch (_error) {
      // Try next candidate path.
    }
  }

  if (!loaded) {
    container.innerHTML = `<p class="species-pie-status">${tr("无法加载物种频次数据。", "Unable to load species frequency data.")}</p>`;
    return;
  }

  const rows = parseCsvRows(csvText.replace(/^\uFEFF/, ""));
  if (rows.length < 2) {
    container.innerHTML = `<p class="species-pie-status">${tr("物种频次 CSV 为空。", "Species frequency CSV is empty.")}</p>`;
    return;
  }

  const headers = rows[0].map((h) => h.trim());
  const lowerHeaders = headers.map((h) => h.toLowerCase());
  const speciesIdx = lowerHeaders.findIndex((h) => h.includes("species common name") || h.includes("species"));
  const presenceIdx = lowerHeaders.findIndex((h) => h.includes("presence") || h.includes("freq") || h.includes("count"));

  if (speciesIdx < 0 || presenceIdx < 0) {
    container.innerHTML = `<p class="species-pie-status">${tr("CSV 列格式不符合预期。", "CSV columns are not in the expected format.")}</p>`;
    return;
  }

  const mammalTrailingSpecies = "Other Mammals";
  const nonMammalOrder = ["Birds", "Unidentified"];
  const isNonMammalSpecies = (species) => nonMammalOrder.includes(species);
  const sortDescending = (a, b) => b.value - a.value;
  const sortSpeciesDistribution = (items) => {
    const mammals = items
      .filter((item) => !isNonMammalSpecies(item.species) && item.species !== mammalTrailingSpecies)
      .sort(sortDescending);
    const otherMammals = items.filter((item) => item.species === mammalTrailingSpecies);
    const orderedNonMammals = nonMammalOrder.flatMap((species) => items.filter((item) => item.species === species));
    const remaining = items
      .filter((item) => !mammals.includes(item) && !otherMammals.includes(item) && !orderedNonMammals.includes(item))
      .sort(sortDescending);

    return [...mammals, ...otherMammals, ...remaining, ...orderedNonMammals];
  };

  const data = sortSpeciesDistribution(rows
    .slice(1)
    .map((row) => ({
      species: (row[speciesIdx] || "").trim(),
      value: Number.parseFloat((row[presenceIdx] || "").trim()),
    }))
    .filter((item) => item.species.length > 0 && Number.isFinite(item.value) && item.value > 0));

  const total = data.reduce((sum, item) => sum + item.value, 0);
  if (data.length === 0 || total <= 0) {
    container.innerHTML = `<p class="species-pie-status">${tr("未找到有效的物种频次数据。", "No valid species frequency data found.")}</p>`;
    return;
  }

  const createSvgNode = (tagName, attrs = {}) => {
    const node = document.createElementNS("http://www.w3.org/2000/svg", tagName);
    Object.entries(attrs).forEach(([key, value]) => {
      node.setAttribute(key, String(value));
    });
    return node;
  };

  const polarPoint = (cx, cy, r, angle) => ({
    x: cx + r * Math.cos(angle),
    y: cy + r * Math.sin(angle),
  });

  const buildSlicePath = (cx, cy, radius, startAngle, endAngle) => {
    const span = endAngle - startAngle;
    if (span >= Math.PI * 2 - 1e-6) {
      return `M ${cx} ${cy} m 0 ${-radius} a ${radius} ${radius} 0 1 1 0 ${radius * 2} a ${radius} ${radius} 0 1 1 0 ${-radius * 2} Z`;
    }
    const start = polarPoint(cx, cy, radius, startAngle);
    const end = polarPoint(cx, cy, radius, endAngle);
    const largeArcFlag = span > Math.PI ? 1 : 0;
    return `M ${cx} ${cy} L ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${end.x} ${end.y} Z`;
  };

  const palette = ["#1f77b4", "#2ca02c", "#ff7f0e", "#d62728", "#9467bd", "#17becf", "#bcbd22", "#8c564b", "#e377c2", "#7f7f7f", "#aec7e8"];

  const wrap = document.createElement("div");
  wrap.className = "species-pie-wrap";

  const chartTitle = document.createElement("h4");
  chartTitle.className = "species-pie-title";
  chartTitle.textContent = tr("各物种出现占比（%）", "% of presence across species");

  const visual = document.createElement("div");
  visual.className = "species-pie-visual";

  const svg = createSvgNode("svg", {
    class: "species-pie-svg",
    viewBox: "0 0 380 380",
    role: "img",
    "aria-label": tr("物种分布饼图", "Species distribution pie chart"),
  });

  const legendPanel = document.createElement("div");

  const legend = document.createElement("ul");
  legend.className = "species-legend";
  legendPanel.appendChild(legend);

  const cx = 190;
  const cy = 190;
  const radius = 154;
  const labelRadius = 98;

  let angleCursor = -Math.PI / 2;
  const slices = [];
  const labels = [];
  const legendItems = [];

  let mammalsHeadingAdded = false;

  data.forEach((item, index) => {
    const ratio = item.value / total;
    const start = angleCursor;
    const end = start + ratio * Math.PI * 2;
    angleCursor = end;

    const slice = createSvgNode("path", {
      d: buildSlicePath(cx, cy, radius, start, end),
      fill: palette[index % palette.length],
      stroke: "#fff",
      "stroke-width": "0",
      class: "species-slice",
      "data-index": index,
    });
    svg.appendChild(slice);
    slices.push(slice);

    const mid = (start + end) / 2;
    const labelPoint = polarPoint(cx, cy, labelRadius, mid);
    const label = createSvgNode("text", {
      x: labelPoint.x.toFixed(2),
      y: labelPoint.y.toFixed(2),
      "text-anchor": "middle",
      "dominant-baseline": "middle",
      class: "species-slice-label",
    });
    label.textContent = `${(ratio * 100).toFixed(1)}%`;
    if (index >= 4) {
      label.style.opacity = "0";
    }
    svg.appendChild(label);
    labels.push(label);

    const isMammal = !isNonMammalSpecies(item.species);
    if (isMammal && !mammalsHeadingAdded) {
      const mammalsHeading = document.createElement("li");
      mammalsHeading.className = "species-legend-heading";
      mammalsHeading.textContent = tr("哺乳动物", "Mammals");
      legend.appendChild(mammalsHeading);
      mammalsHeadingAdded = true;
    }

    const legendItem = document.createElement("li");
    legendItem.className = `species-legend-item ${isMammal ? "is-mammal" : "is-non-mammal"}`;
    legendItem.dataset.index = String(index);

    const dot = document.createElement("span");
    dot.className = "species-legend-dot";
    dot.style.backgroundColor = palette[index % palette.length];

    const name = document.createElement("span");
    name.textContent = item.species;

    legendItem.append(dot, name);
    legend.appendChild(legendItem);
    legendItems.push(legendItem);
  });

  let activeIndex = -1;
  const applyHoverState = (index) => {
    activeIndex = index;
    slices.forEach((slice, i) => {
      slice.style.opacity = activeIndex === -1 || i === activeIndex ? "1" : "0.5";
    });
    legendItems.forEach((item, i) => {
      item.style.opacity = activeIndex === -1 || i === activeIndex ? "1" : "0.5";
      item.classList.toggle("is-active", i === activeIndex);
    });
    labels.forEach((label, i) => {
      const showLabel = activeIndex === -1 ? i < 4 : i === activeIndex;
      label.style.opacity = showLabel ? "1" : "0";
      label.style.fontWeight = i === activeIndex ? "700" : "600";
    });
  };

  let autoplayTimer = null;
  let autoplayPhase = "idle";
  let autoplayIndex = 0;
  let manualHoverActive = false;

  const stopAutoplay = () => {
    if (autoplayTimer != null) {
      window.clearInterval(autoplayTimer);
      autoplayTimer = null;
    }
  };

  const runAutoplayStep = () => {
    if (manualHoverActive || data.length === 0) {
      return;
    }
    if (autoplayPhase === "idle") {
      applyHoverState(autoplayIndex);
      autoplayPhase = "highlight";
      return;
    }
    applyHoverState(-1);
    autoplayPhase = "idle";
    autoplayIndex = (autoplayIndex + 1) % data.length;
  };

  const startAutoplay = () => {
    stopAutoplay();
    autoplayPhase = "idle";
    applyHoverState(-1);
    autoplayTimer = window.setInterval(runAutoplayStep, 3000);
  };

  const enterManualHover = (index) => {
    manualHoverActive = true;
    stopAutoplay();
    applyHoverState(index);
  };

  const leaveManualHover = () => {
    manualHoverActive = false;
    startAutoplay();
  };

  slices.forEach((slice, index) => {
    slice.addEventListener("mouseenter", () => enterManualHover(index));
    slice.addEventListener("mouseleave", leaveManualHover);
  });
  legendItems.forEach((item, index) => {
    item.addEventListener("mouseenter", () => enterManualHover(index));
    item.addEventListener("mouseleave", leaveManualHover);
  });

  startAutoplay();
  visual.appendChild(svg);
  wrap.append(visual, legendPanel);
  container.replaceChildren(chartTitle, wrap);
};

loadSpeciesDistributionChart();

const loadTemporalPresenceChart = async () => {
  const container = document.getElementById("temporal-presence-shell");
  if (!container) {
    return;
  }

  const csvCandidates = ["data/total_presence。csv", "data/total_presence.csv"];
  let csvText = "";
  let loaded = false;

  for (const path of csvCandidates) {
    try {
      const response = await fetch(path, { cache: "no-store" });
      if (!response.ok) {
        continue;
      }
      csvText = await response.text();
      loaded = true;
      break;
    } catch (_error) {
      // Try next candidate path.
    }
  }

  if (!loaded) {
    container.innerHTML = `<p class="temporal-presence-status">${tr("无法加载时间维度出现数据。", "Unable to load temporal presence data.")}</p>`;
    return;
  }

  const rows = parseCsvRows(csvText.replace(/^\uFEFF/, ""));
  if (rows.length < 2) {
    container.innerHTML = `<p class="temporal-presence-status">${tr("时间维度出现 CSV 为空。", "Temporal presence CSV is empty.")}</p>`;
    return;
  }

  const headers = rows[0].map((h) => h.trim());
  const lowerHeaders = headers.map((h) => h.toLowerCase());
  const hourIdx = lowerHeaders.findIndex((h) => h.includes("hour"));
  const presenceIdx = lowerHeaders.findIndex((h) => h.includes("presence") || h.includes("count"));
  const monthIdx = lowerHeaders.findIndex((h) => h.includes("month"));

  if (hourIdx < 0 || presenceIdx < 0) {
    container.innerHTML = `<p class="temporal-presence-status">${tr("CSV 列格式不符合预期。", "CSV columns are not in the expected format.")}</p>`;
    return;
  }

  const defaultMonth = "October";
  const data = rows
    .slice(1)
    .map((row) => ({
      hour: Number.parseFloat((row[hourIdx] || "").trim()),
      presence: Number.parseFloat((row[presenceIdx] || "").trim()),
      month: monthIdx >= 0 ? ((row[monthIdx] || "").trim() || defaultMonth) : defaultMonth,
    }))
    .filter((item) => Number.isFinite(item.hour) && Number.isFinite(item.presence))
    .sort((a, b) => a.hour - b.hour);

  if (data.length === 0) {
    container.innerHTML = `<p class="temporal-presence-status">${tr("未找到有效的时间维度出现数据。", "No valid temporal presence data found.")}</p>`;
    return;
  }

  const createSvgNode = (tagName, attrs = {}) => {
    const node = document.createElementNS("http://www.w3.org/2000/svg", tagName);
    Object.entries(attrs).forEach(([key, value]) => {
      node.setAttribute(key, String(value));
    });
    return node;
  };

  const svgW = 620;
  const svgH = 340;
  const margin = { top: 34, right: 20, bottom: 42, left: 46 };
  const plotW = svgW - margin.left - margin.right;
  const plotH = svgH - margin.top - margin.bottom;

  const minHour = data[0].hour;
  const maxHour = data[data.length - 1].hour;
  const maxPresence = Math.max(...data.map((d) => d.presence));
  const niceSteps = [10, 20, 25, 50, 100, 200];
  const roughStep = Math.max(1, maxPresence / 5);
  const yStep = niceSteps.find((step) => step >= roughStep) || 200;
  const yMax = Math.ceil(maxPresence / yStep) * yStep;

  const xScale = (hour) => margin.left + ((hour - minHour) / Math.max(1, maxHour - minHour)) * plotW;
  const yScale = (value) => margin.top + (1 - value / yMax) * plotH;

  const title = document.createElement("h4");
  title.className = "temporal-presence-title";
  title.textContent = tr("出现次数 × 小时", "Presence x Hour");

  const svg = createSvgNode("svg", {
    class: "temporal-presence-svg",
    viewBox: `0 0 ${svgW} ${svgH}`,
    role: "img",
    "aria-label": tr("出现次数与小时折线图", "Presence x Hour line chart"),
  });

  for (let y = 0; y <= yMax; y += yStep) {
    const yPos = yScale(y);
    svg.appendChild(createSvgNode("line", { x1: margin.left, y1: yPos, x2: svgW - margin.right, y2: yPos, class: "temporal-grid-line" }));
    const yLabel = createSvgNode("text", { x: margin.left - 8, y: yPos + 4, "text-anchor": "end", class: "temporal-axis-label" });
    yLabel.textContent = String(y);
    svg.appendChild(yLabel);
  }

  const xTickStep = maxHour - minHour > 12 ? 2 : 1;
  for (let hour = minHour; hour <= maxHour; hour += xTickStep) {
    const xPos = xScale(hour);
    const xLabel = createSvgNode("text", { x: xPos, y: svgH - margin.bottom + 18, "text-anchor": "middle", class: "temporal-axis-label" });
    xLabel.textContent = String(hour);
    svg.appendChild(xLabel);
  }
  if ((maxHour - minHour) % xTickStep !== 0) {
    const xPos = xScale(maxHour);
    const xLabel = createSvgNode("text", { x: xPos, y: svgH - margin.bottom + 18, "text-anchor": "middle", class: "temporal-axis-label" });
    xLabel.textContent = String(maxHour);
    svg.appendChild(xLabel);
  }

  svg.appendChild(createSvgNode("line", { x1: margin.left, y1: margin.top, x2: margin.left, y2: svgH - margin.bottom, class: "temporal-axis-line" }));
  svg.appendChild(
    createSvgNode("line", { x1: margin.left, y1: svgH - margin.bottom, x2: svgW - margin.right, y2: svgH - margin.bottom, class: "temporal-axis-line" }),
  );

  const pathD = data.map((d, idx) => `${idx === 0 ? "M" : "L"} ${xScale(d.hour)} ${yScale(d.presence)}`).join(" ");
  svg.appendChild(createSvgNode("path", { d: pathD, class: "temporal-line-path" }));

  const hoverGroup = createSvgNode("g", { visibility: "hidden" });
  const hoverLine = createSvgNode("line", {
    class: "temporal-hover-line",
    x1: margin.left,
    y1: margin.top,
    x2: margin.left,
    y2: svgH - margin.bottom,
  });
  const hoverDot = createSvgNode("circle", { class: "temporal-hover-dot", cx: margin.left, cy: yScale(data[0].presence), r: 4.5 });
  const tooltipGroup = createSvgNode("g");
  const tooltipBg = createSvgNode("rect", { class: "temporal-tooltip-bg", x: 0, y: 0, width: 10, height: 10 });
  const tooltipText1 = createSvgNode("text", { class: "temporal-tooltip-text", x: 8, y: 14 });
  const tooltipText2 = createSvgNode("text", { class: "temporal-tooltip-text", x: 8, y: 28 });
  tooltipGroup.append(tooltipBg, tooltipText1, tooltipText2);
  hoverGroup.append(hoverLine, hoverDot, tooltipGroup);
  svg.appendChild(hoverGroup);

  const hitArea = createSvgNode("rect", {
    x: margin.left,
    y: margin.top,
    width: plotW,
    height: plotH,
    fill: "transparent",
    style: "cursor: crosshair",
  });
  svg.appendChild(hitArea);

  const showHover = (datum) => {
    const x = xScale(datum.hour);
    const y = yScale(datum.presence);
    hoverGroup.setAttribute("visibility", "visible");
    hoverLine.setAttribute("x1", String(x));
    hoverLine.setAttribute("x2", String(x));
    hoverDot.setAttribute("cx", String(x));
    hoverDot.setAttribute("cy", String(y));

    tooltipText1.textContent = tr(`小时：${Math.round(datum.hour)}`, `Hour: ${Math.round(datum.hour)}`);
    tooltipText2.textContent = tr(`数量：${Math.round(datum.presence)}`, `Count: ${Math.round(datum.presence)}`);
    const width = Math.max(tooltipText1.getComputedTextLength(), tooltipText2.getComputedTextLength()) + 16;
    const height = 34;
    tooltipBg.setAttribute("width", String(width));
    tooltipBg.setAttribute("height", String(height));

    const tx = Math.min(svgW - margin.right - width, Math.max(margin.left, x - width / 2));
    const ty = Math.max(4, margin.top - height - 8);
    tooltipGroup.setAttribute("transform", `translate(${tx},${ty})`);
  };

  hitArea.addEventListener("mousemove", (event) => {
    const rect = svg.getBoundingClientRect();
    const localX = ((event.clientX - rect.left) * svgW) / rect.width;
    const clampedX = Math.min(svgW - margin.right, Math.max(margin.left, localX));
    const nearest = data.reduce((best, current) =>
      Math.abs(xScale(current.hour) - clampedX) < Math.abs(xScale(best.hour) - clampedX) ? current : best,
    );
    showHover(nearest);
  });

  hitArea.addEventListener("mouseleave", () => {
    hoverGroup.setAttribute("visibility", "hidden");
  });

  container.replaceChildren(title, svg);
};

loadTemporalPresenceChart();

const loadSpeciesTemporalChart = async () => {
  const container = document.getElementById("species-temporal-shell");
  if (!container) {
    return;
  }

  const csvCandidates = ["data/species_presence。csv", "data/species_presence.csv"];
  let csvText = "";
  let loaded = false;

  for (const path of csvCandidates) {
    try {
      const response = await fetch(path, { cache: "no-store" });
      if (!response.ok) {
        continue;
      }
      csvText = await response.text();
      loaded = true;
      break;
    } catch (_error) {
      // Try next candidate path.
    }
  }

  if (!loaded) {
    container.innerHTML = `<p class="species-temporal-status">${tr("无法加载物种时间序列数据。", "Unable to load species temporal data.")}</p>`;
    return;
  }

  const rows = parseCsvRows(csvText.replace(/^\uFEFF/, ""));
  if (rows.length < 2) {
    container.innerHTML = `<p class="species-temporal-status">${tr("物种时间序列 CSV 为空。", "Species temporal CSV is empty.")}</p>`;
    return;
  }

  const headers = rows[0].map((h) => h.trim());
  const lowerHeaders = headers.map((h) => h.toLowerCase());
  const hourIdx = lowerHeaders.findIndex((h) => h.includes("hour"));
  if (hourIdx < 0) {
    container.innerHTML = `<p class="species-temporal-status">${tr("CSV 列格式不符合预期。", "CSV columns are not in the expected format.")}</p>`;
    return;
  }

  const speciesColumns = headers
    .map((name, idx) => ({ name, idx }))
    .filter((column) => column.idx !== hourIdx && column.name.length > 0);

  if (speciesColumns.length < 4) {
    container.innerHTML = `<p class="species-temporal-status">${tr("至少需要 4 个物种列。", "At least 4 species columns are required.")}</p>`;
    return;
  }

  const speciesUsed = speciesColumns.slice(0, 4);
  const data = rows
    .slice(1)
    .map((row) => {
      const hour = Number.parseFloat((row[hourIdx] || "").trim());
      const values = speciesUsed.map((species) => Number.parseFloat((row[species.idx] || "").trim()));
      return { hour, values };
    })
    .filter((item) => Number.isFinite(item.hour) && item.values.every((value) => Number.isFinite(value)))
    .sort((a, b) => a.hour - b.hour);

  if (data.length === 0) {
    container.innerHTML = `<p class="species-temporal-status">${tr("未找到有效的物种时间序列数据。", "No valid species temporal data found.")}</p>`;
    return;
  }

  const createSvgNode = (tagName, attrs = {}) => {
    const node = document.createElementNS("http://www.w3.org/2000/svg", tagName);
    Object.entries(attrs).forEach(([key, value]) => {
      node.setAttribute(key, String(value));
    });
    return node;
  };

  const colors = ["#d62728", "#2ca02c", "#ff7f0e", "#1f77b4"];
  const svgW = 620;
  const svgH = 356;
  const margin = { top: 26, right: 16, bottom: 40, left: 44 };
  const plotW = svgW - margin.left - margin.right;
  const plotH = svgH - margin.top - margin.bottom;

  const minHour = data[0].hour;
  const maxHour = data[data.length - 1].hour;
  const maxValue = Math.max(...data.flatMap((item) => item.values));
  const niceSteps = [5, 10, 20, 25, 50, 100];
  const roughStep = Math.max(1, maxValue / 5);
  const yStep = niceSteps.find((step) => step >= roughStep) || 100;
  const yMax = Math.ceil(maxValue / yStep) * yStep;

  const xScale = (hour) => margin.left + ((hour - minHour) / Math.max(1, maxHour - minHour)) * plotW;
  const yScale = (value) => margin.top + (1 - value / yMax) * plotH;

  const title = document.createElement("h4");
  title.className = "species-temporal-title";
  title.textContent = tr("物种 × 小时", "Species x Hour");

  const wrap = document.createElement("div");
  wrap.className = "species-temporal-wrap";

  const visual = document.createElement("div");
  visual.className = "species-temporal-visual";

  const svg = createSvgNode("svg", {
    class: "species-temporal-svg",
    viewBox: `0 0 ${svgW} ${svgH}`,
    role: "img",
    "aria-label": tr("物种与小时折线图", "Species x Hour line chart"),
  });

  for (let y = 0; y <= yMax; y += yStep) {
    const yPos = yScale(y);
    svg.appendChild(createSvgNode("line", { x1: margin.left, y1: yPos, x2: svgW - margin.right, y2: yPos, class: "species-temporal-grid-line" }));
    const yLabel = createSvgNode("text", { x: margin.left - 8, y: yPos + 4, "text-anchor": "end", class: "species-temporal-axis-label" });
    yLabel.textContent = String(y);
    svg.appendChild(yLabel);
  }

  const xTickStep = maxHour - minHour > 12 ? 2 : 1;
  for (let hour = minHour; hour <= maxHour; hour += xTickStep) {
    const xPos = xScale(hour);
    const xLabel = createSvgNode("text", { x: xPos, y: svgH - margin.bottom + 18, "text-anchor": "middle", class: "species-temporal-axis-label" });
    xLabel.textContent = String(hour);
    svg.appendChild(xLabel);
  }
  if ((maxHour - minHour) % xTickStep !== 0) {
    const xPos = xScale(maxHour);
    const xLabel = createSvgNode("text", { x: xPos, y: svgH - margin.bottom + 18, "text-anchor": "middle", class: "species-temporal-axis-label" });
    xLabel.textContent = String(maxHour);
    svg.appendChild(xLabel);
  }

  svg.appendChild(createSvgNode("line", { x1: margin.left, y1: margin.top, x2: margin.left, y2: svgH - margin.bottom, class: "species-temporal-axis-line" }));
  svg.appendChild(
    createSvgNode("line", { x1: margin.left, y1: svgH - margin.bottom, x2: svgW - margin.right, y2: svgH - margin.bottom, class: "species-temporal-axis-line" }),
  );

  const lines = [];
  const lineHits = [];
  const valueLabelGroups = [];

  speciesUsed.forEach((species, speciesIdx) => {
    const color = colors[speciesIdx % colors.length];
    const pathD = data.map((d, pointIdx) => `${pointIdx === 0 ? "M" : "L"} ${xScale(d.hour)} ${yScale(d.values[speciesIdx])}`).join(" ");

    const path = createSvgNode("path", { d: pathD, class: "species-temporal-line", stroke: color });
    svg.appendChild(path);
    lines.push(path);

    const hit = createSvgNode("path", { d: pathD, class: "species-temporal-hit", "data-species-index": speciesIdx });
    svg.appendChild(hit);
    lineHits.push(hit);

    const labelsGroup = createSvgNode("g", { visibility: "hidden" });
    data.forEach((d) => {
      const txt = createSvgNode("text", {
        x: xScale(d.hour),
        y: yScale(d.values[speciesIdx]) - 10,
        class: "species-temporal-value-label",
        fill: color,
      });
      txt.textContent = String(Math.round(d.values[speciesIdx]));
      labelsGroup.appendChild(txt);
    });
    valueLabelGroups.push(labelsGroup);
  });

  valueLabelGroups.forEach((group) => {
    svg.appendChild(group);
  });

  const hoverGroup = createSvgNode("g", { visibility: "hidden" });
  const vLine = createSvgNode("line", {
    class: "species-temporal-vline",
    x1: margin.left,
    y1: margin.top,
    x2: margin.left,
    y2: svgH - margin.bottom,
  });
  hoverGroup.appendChild(vLine);

  const hoverDots = speciesUsed.map((_, speciesIdx) => {
    const dot = createSvgNode("circle", {
      class: "species-temporal-hover-dot",
      cx: margin.left,
      cy: margin.top,
      r: 4.2,
      fill: colors[speciesIdx % colors.length],
    });
    hoverGroup.appendChild(dot);
    return dot;
  });

  const tooltipGroup = createSvgNode("g");
  const tooltipBg = createSvgNode("rect", { class: "species-temporal-tip-bg", x: 0, y: 0, width: 10, height: 10, rx: 6, ry: 6 });
  tooltipGroup.appendChild(tooltipBg);

  const tooltipTextNodes = [];
  const hourText = createSvgNode("text", { class: "species-temporal-tip-text", x: 8, y: 14, fill: "#111" });
  tooltipGroup.appendChild(hourText);
  tooltipTextNodes.push(hourText);

  speciesUsed.forEach((species, speciesIdx) => {
    const t = createSvgNode("text", {
      class: "species-temporal-tip-text",
      x: 8,
      y: 14 + (speciesIdx + 1) * 14,
      fill: colors[speciesIdx % colors.length],
    });
    tooltipGroup.appendChild(t);
    tooltipTextNodes.push(t);
  });

  hoverGroup.appendChild(tooltipGroup);
  svg.appendChild(hoverGroup);

  const legend = document.createElement("ul");
  legend.className = "species-temporal-legend";
  const legendItems = [];

  speciesUsed.forEach((species, speciesIdx) => {
    const item = document.createElement("li");
    item.className = "species-temporal-legend-item";
    const dot = document.createElement("span");
    dot.className = "species-temporal-legend-line";
    item.style.setProperty("--legend-color", colors[speciesIdx % colors.length]);
    const label = document.createElement("span");
    label.textContent = species.name;
    item.append(dot, label);
    legend.appendChild(item);
    legendItems.push(item);
  });

  let activeSpecies = -1;
  const applyEmphasis = (speciesIdx) => {
    activeSpecies = speciesIdx;
    lines.forEach((line, idx) => {
      line.style.opacity = activeSpecies === -1 || idx === activeSpecies ? "1" : "0.5";
      line.style.strokeWidth = activeSpecies !== -1 && idx === activeSpecies ? "3.6" : "2.4";
    });
    legendItems.forEach((item, idx) => {
      item.style.opacity = activeSpecies === -1 || idx === activeSpecies ? "1" : "0.5";
      item.style.fontWeight = idx === activeSpecies ? "700" : "400";
    });
    valueLabelGroups.forEach((group, idx) => {
      group.setAttribute("visibility", idx === activeSpecies ? "visible" : "hidden");
    });
  };

  const showCrosshair = (datum) => {
    const x = xScale(datum.hour);
    hoverGroup.setAttribute("visibility", "visible");
    vLine.setAttribute("x1", String(x));
    vLine.setAttribute("x2", String(x));
    hoverDots.forEach((dot, idx) => {
      dot.setAttribute("cx", String(x));
      dot.setAttribute("cy", String(yScale(datum.values[idx])));
    });

    tooltipTextNodes[0].textContent = `Hour: ${Math.round(datum.hour)}`;
    speciesUsed.forEach((species, speciesIdx) => {
      tooltipTextNodes[speciesIdx + 1].textContent = `${species.name}: ${Math.round(datum.values[speciesIdx])}`;
    });

    const width = Math.max(...tooltipTextNodes.map((t) => t.getComputedTextLength())) + 16;
    const height = 10 + tooltipTextNodes.length * 14;
    tooltipBg.setAttribute("width", String(width));
    tooltipBg.setAttribute("height", String(height));

    const tx = Math.min(svgW - margin.right - width, Math.max(margin.left, x - width / 2));
    const ty = Math.max(4, margin.top - height - 8);
    tooltipGroup.setAttribute("transform", `translate(${tx},${ty})`);
  };

  svg.addEventListener("mousemove", (event) => {
    const rect = svg.getBoundingClientRect();
    const lx = ((event.clientX - rect.left) * svgW) / rect.width;
    const ly = ((event.clientY - rect.top) * svgH) / rect.height;
    if (lx < margin.left || lx > svgW - margin.right || ly < margin.top || ly > svgH - margin.bottom) {
      hoverGroup.setAttribute("visibility", "hidden");
      return;
    }
    const nearest = data.reduce((best, current) =>
      Math.abs(xScale(current.hour) - lx) < Math.abs(xScale(best.hour) - lx) ? current : best,
    );
    showCrosshair(nearest);
  });

  svg.addEventListener("mouseleave", () => {
    hoverGroup.setAttribute("visibility", "hidden");
    applyEmphasis(-1);
  });

  lineHits.forEach((hit, idx) => {
    hit.addEventListener("mouseenter", () => applyEmphasis(idx));
    hit.addEventListener("mouseleave", () => applyEmphasis(-1));
  });

  legendItems.forEach((item, idx) => {
    item.addEventListener("mouseenter", () => applyEmphasis(idx));
    item.addEventListener("mouseleave", () => applyEmphasis(-1));
  });

  applyEmphasis(-1);
  visual.appendChild(svg);
  wrap.append(visual, legend);
  container.replaceChildren(title, wrap);
};

loadSpeciesTemporalChart();

const loadLocationDayNightChart = async () => {
  const container = document.getElementById("location-daynight-shell");
  if (!container) {
    return;
  }

  const csvCandidates = ["data/camera。csv", "data/camera.csv"];
  let csvText = "";
  let loaded = false;

  for (const path of csvCandidates) {
    try {
      const response = await fetch(path, { cache: "no-store" });
      if (!response.ok) {
        continue;
      }
      csvText = await response.text();
      loaded = true;
      break;
    } catch (_error) {
      // Try next candidate path.
    }
  }

  if (!loaded) {
    container.innerHTML = `<p class="location-daynight-status">${tr("无法加载相机点位数据。", "Unable to load camera location data.")}</p>`;
    return;
  }

  const rows = parseCsvRows(csvText.replace(/^\uFEFF/, ""));
  if (rows.length < 2) {
    container.innerHTML = `<p class="location-daynight-status">${tr("相机 CSV 为空。", "Camera CSV is empty.")}</p>`;
    return;
  }

  const headers = rows[0].map((h) => h.trim());
  const lowerHeaders = headers.map((h) => h.toLowerCase());
  const findColumn = (patterns) => lowerHeaders.findIndex((header) => patterns.some((pattern) => header.includes(pattern)));

  const locationIdx = findColumn(["location"]);
  const dayIdx = findColumn(["day presence", "day_photos"]);
  const nightIdx = findColumn(["night presence", "night_photos"]);
  const dayPctIdx = findColumn(["%day", "day %"]);
  const nightPctIdx = findColumn(["%night", "night %"]);

  if (locationIdx < 0 || dayIdx < 0 || nightIdx < 0) {
    container.innerHTML = `<p class="location-daynight-status">${tr("CSV 列格式不符合预期。", "CSV columns are not in the expected format.")}</p>`;
    return;
  }

  const parsePercentCell = (raw) => {
    const cleaned = (raw || "").trim().replace("%", "");
    const parsed = Number.parseFloat(cleaned);
    return Number.isFinite(parsed) ? parsed : NaN;
  };

  const data = rows
    .slice(1)
    .map((row, rowIndex) => {
      const locationRaw = (row[locationIdx] || "").trim();
      const locationNum = Number.parseFloat(locationRaw);
      const day = Number.parseFloat((row[dayIdx] || "").trim());
      const night = Number.parseFloat((row[nightIdx] || "").trim());

      if (!Number.isFinite(day) || !Number.isFinite(night)) {
        return null;
      }

      const total = day + night;
      if (!Number.isFinite(total) || total <= 0) {
        return null;
      }

      let dayPct = dayPctIdx >= 0 ? parsePercentCell(row[dayPctIdx]) : NaN;
      let nightPct = nightPctIdx >= 0 ? parsePercentCell(row[nightPctIdx]) : NaN;

      if (!Number.isFinite(dayPct) && Number.isFinite(nightPct)) {
        dayPct = 100 - nightPct;
      }
      if (!Number.isFinite(nightPct) && Number.isFinite(dayPct)) {
        nightPct = 100 - dayPct;
      }
      if (!Number.isFinite(dayPct) || !Number.isFinite(nightPct)) {
        dayPct = (day / total) * 100;
        nightPct = (night / total) * 100;
      }

      return {
        order: rowIndex,
        locationLabel: locationRaw || String(rowIndex + 1),
        locationNum,
        day,
        night,
        total,
        dayPct,
        nightPct,
      };
    })
    .filter(Boolean)
    .sort((a, b) => {
      const aFinite = Number.isFinite(a.locationNum);
      const bFinite = Number.isFinite(b.locationNum);
      if (aFinite && bFinite) {
        return a.locationNum - b.locationNum;
      }
      if (aFinite) {
        return -1;
      }
      if (bFinite) {
        return 1;
      }
      return a.order - b.order;
    });

  if (data.length === 0) {
    container.innerHTML = `<p class="location-daynight-status">${tr("未找到有效的点位昼夜数据。", "No valid location day/night data found.")}</p>`;
    return;
  }

  const createSvgNode = (tagName, attrs = {}) => {
    const node = document.createElementNS("http://www.w3.org/2000/svg", tagName);
    Object.entries(attrs).forEach(([key, value]) => {
      node.setAttribute(key, String(value));
    });
    return node;
  };

  const svgW = 620;
  const svgH = 370;
  const margin = { top: 24, right: 14, bottom: 56, left: 44 };
  const plotW = svgW - margin.left - margin.right;
  const plotH = svgH - margin.top - margin.bottom;
  const bottomY = svgH - margin.bottom;

  const maxTotal = Math.max(...data.map((item) => item.total));
  const niceSteps = [10, 20, 25, 50, 100, 200];
  const roughStep = Math.max(1, maxTotal / 6);
  const yStep = niceSteps.find((step) => step >= roughStep) || 200;
  const yMax = Math.ceil(maxTotal / yStep) * yStep;

  const xStep = plotW / data.length;
  const barW = Math.min(34, Math.max(16, xStep * 0.58));
  const xCenter = (idx) => margin.left + xStep * (idx + 0.5);
  const yScale = (value) => margin.top + (1 - value / Math.max(1, yMax)) * plotH;

  const title = document.createElement("h4");
  title.className = "location-daynight-title";
  title.textContent = tr("昼/夜 × 点位", "Day/Night x Location");

  const svg = createSvgNode("svg", {
    class: "location-daynight-svg",
    viewBox: `0 0 ${svgW} ${svgH}`,
    role: "img",
    "aria-label": tr("各点位昼夜出现情况", "Day and Night presence across locations"),
  });

  for (let y = 0; y <= yMax; y += yStep) {
    const yPos = yScale(y);
    svg.appendChild(createSvgNode("line", { x1: margin.left, y1: yPos, x2: svgW - margin.right, y2: yPos, class: "location-daynight-grid-line" }));
    const yLabel = createSvgNode("text", { x: margin.left - 8, y: yPos + 4, "text-anchor": "end", class: "location-daynight-axis-label" });
    yLabel.textContent = String(y);
    svg.appendChild(yLabel);
  }

  data.forEach((item, idx) => {
    const xPos = xCenter(idx);
    const xLabel = createSvgNode("text", {
      x: xPos,
      y: svgH - margin.bottom + 20,
      "text-anchor": "middle",
      class: "location-daynight-axis-label",
    });
    xLabel.textContent = item.locationLabel;
    svg.appendChild(xLabel);
  });

  svg.appendChild(createSvgNode("line", { x1: margin.left, y1: margin.top, x2: margin.left, y2: bottomY, class: "location-daynight-axis-line" }));
  svg.appendChild(createSvgNode("line", { x1: margin.left, y1: bottomY, x2: svgW - margin.right, y2: bottomY, class: "location-daynight-axis-line" }));

  const bars = [];

  data.forEach((item, idx) => {
    const cx = xCenter(idx);
    const x = cx - barW / 2;

    const group = createSvgNode("g", { class: "location-daynight-bar-group" });
    const dayRect = createSvgNode("rect", { class: "location-daynight-bar-day", x, y: bottomY, width: barW, height: 0 });
    const nightRect = createSvgNode("rect", { class: "location-daynight-bar-night", x, y: bottomY, width: barW, height: 0 });

    const dayLabel = createSvgNode("text", { class: "location-daynight-inbar-label", x: cx, y: bottomY - 6, visibility: "hidden" });
    const nightLabel = createSvgNode("text", { class: "location-daynight-inbar-label", x: cx, y: bottomY - 6, visibility: "hidden" });
    const topLabel = createSvgNode("text", { class: "location-daynight-top-label", x: cx, y: bottomY - 6, visibility: "hidden" });

    const hitRect = createSvgNode("rect", {
      class: "location-daynight-hit",
      x: x - 4,
      y: margin.top,
      width: barW + 8,
      height: plotH,
    });

    group.append(dayRect, nightRect, dayLabel, nightLabel, topLabel, hitRect);
    svg.appendChild(group);

    bars.push({ item, group, dayRect, nightRect, dayLabel, nightLabel, topLabel, hitRect });
  });

  const legend = document.createElement("ul");
  legend.className = "location-daynight-legend";

  const dayLegend = document.createElement("li");
  dayLegend.className = "location-daynight-legend-item";
  dayLegend.innerHTML = `<span class="location-daynight-legend-swatch day"></span><span>${tr("白天出现", "Day presence")}</span>`;

  const nightLegend = document.createElement("li");
  nightLegend.className = "location-daynight-legend-item";
  nightLegend.innerHTML = `<span class="location-daynight-legend-swatch night"></span><span>${tr("夜间出现", "Night presence")}</span>`;

  legend.append(dayLegend, nightLegend);

  let mode = "stacked";
  let activeBar = -1;

  const setRect = (rect, x, y, width, height, opacity = 1) => {
    rect.setAttribute("x", String(x));
    rect.setAttribute("y", String(y));
    rect.setAttribute("width", String(width));
    rect.setAttribute("height", String(Math.max(0, height)));
    rect.style.opacity = String(opacity);
  };

  const updateChart = () => {
    dayLegend.classList.toggle("is-active", mode === "day");
    nightLegend.classList.toggle("is-active", mode === "night");
    dayLegend.classList.toggle("is-hidden", mode === "night");
    nightLegend.classList.toggle("is-hidden", mode === "day");

    bars.forEach((bar, idx) => {
      const { item, group, dayRect, nightRect, dayLabel, nightLabel, topLabel } = bar;
      const x = xCenter(idx) - barW / 2;
      const dayTop = yScale(item.day);
      const nightOnlyTop = yScale(item.night);
      const totalTop = yScale(item.total);

      if (mode === "day") {
        setRect(dayRect, x, dayTop, barW, bottomY - dayTop, 1);
        setRect(nightRect, x, bottomY, barW, 0, 0);
        dayLabel.setAttribute("visibility", "hidden");
        nightLabel.setAttribute("visibility", "hidden");
        topLabel.setAttribute("visibility", "visible");
        topLabel.textContent = `${Math.round(item.day)} | ${item.dayPct.toFixed(1)}%`;
        topLabel.setAttribute("y", String(dayTop - 6));
        group.style.opacity = "1";
        return;
      }

      if (mode === "night") {
        setRect(dayRect, x, bottomY, barW, 0, 0);
        setRect(nightRect, x, nightOnlyTop, barW, bottomY - nightOnlyTop, 1);
        dayLabel.setAttribute("visibility", "hidden");
        nightLabel.setAttribute("visibility", "hidden");
        topLabel.setAttribute("visibility", "visible");
        topLabel.textContent = `${Math.round(item.night)} | ${item.nightPct.toFixed(1)}%`;
        topLabel.setAttribute("y", String(nightOnlyTop - 6));
        group.style.opacity = "1";
        return;
      }

      setRect(dayRect, x, dayTop, barW, bottomY - dayTop, 1);
      setRect(nightRect, x, totalTop, barW, dayTop - totalTop, 1);

      const isActive = activeBar === idx;
      group.style.opacity = activeBar === -1 || isActive ? "1" : "0.5";

      dayLabel.textContent = `${Math.round(item.day)} | ${item.dayPct.toFixed(1)}%`;
      nightLabel.textContent = `${Math.round(item.night)} | ${item.nightPct.toFixed(1)}%`;

      dayLabel.setAttribute("y", String(dayTop + (bottomY - dayTop) / 2 + 3));
      nightLabel.setAttribute("y", String(totalTop + (dayTop - totalTop) / 2 + 3));

      dayLabel.setAttribute("visibility", isActive ? "visible" : "hidden");
      nightLabel.setAttribute("visibility", isActive ? "visible" : "hidden");
      topLabel.setAttribute("visibility", isActive ? "visible" : "hidden");
      topLabel.textContent = `${Math.round(item.total)}`;
      topLabel.setAttribute("y", String(totalTop - 6));
    });
  };

  bars.forEach((bar, idx) => {
    bar.hitRect.addEventListener("mouseenter", () => {
      if (mode !== "stacked") {
        return;
      }
      activeBar = idx;
      updateChart();
    });

    bar.hitRect.addEventListener("mouseleave", () => {
      if (mode !== "stacked") {
        return;
      }
      activeBar = -1;
      updateChart();
    });
  });

  dayLegend.addEventListener("mouseenter", () => {
    mode = "day";
    activeBar = -1;
    updateChart();
  });
  dayLegend.addEventListener("mouseleave", () => {
    mode = "stacked";
    updateChart();
  });

  nightLegend.addEventListener("mouseenter", () => {
    mode = "night";
    activeBar = -1;
    updateChart();
  });
  nightLegend.addEventListener("mouseleave", () => {
    mode = "stacked";
    updateChart();
  });

  svg.addEventListener("mouseleave", () => {
    if (mode !== "stacked") {
      return;
    }
    activeBar = -1;
    updateChart();
  });

  updateChart();
  container.replaceChildren(title, svg, legend);
};

loadLocationDayNightChart();

const loadLocationFrequencyChart = async () => {
  const container = document.getElementById("location-frequency-shell");
  if (!container) {
    return;
  }

  const csvCandidates = ["data/camera。csv", "data/camera.csv"];
  let csvText = "";
  let loaded = false;

  for (const path of csvCandidates) {
    try {
      const response = await fetch(path, { cache: "no-store" });
      if (!response.ok) {
        continue;
      }
      csvText = await response.text();
      loaded = true;
      break;
    } catch (_error) {
      // Try next candidate path.
    }
  }

  if (!loaded) {
    container.innerHTML = `<p class="location-frequency-status">${tr("无法加载相机频次数据。", "Unable to load camera frequency data.")}</p>`;
    return;
  }

  const rows = parseCsvRows(csvText.replace(/^\uFEFF/, ""));
  if (rows.length < 2) {
    container.innerHTML = `<p class="location-frequency-status">${tr("相机 CSV 为空。", "Camera CSV is empty.")}</p>`;
    return;
  }

  const headers = rows[0].map((h) => h.trim());
  const lowerHeaders = headers.map((h) => h.toLowerCase());
  const findColumn = (patterns) => lowerHeaders.findIndex((header) => patterns.some((pattern) => header.includes(pattern)));

  const locationIdx = findColumn(["location"]);
  const freqIdx = findColumn(["photo frequency", "frequency"]);

  if (locationIdx < 0 || freqIdx < 0) {
    container.innerHTML = `<p class="location-frequency-status">${tr("CSV 列格式不符合预期。", "CSV columns are not in the expected format.")}</p>`;
    return;
  }

  const data = rows
    .slice(1)
    .map((row, rowIndex) => {
      const locationRaw = (row[locationIdx] || "").trim();
      const locationNum = Number.parseFloat(locationRaw);
      const freq = Number.parseFloat((row[freqIdx] || "").trim());
      if (!Number.isFinite(freq)) {
        return null;
      }
      return {
        order: rowIndex,
        locationLabel: locationRaw || String(rowIndex + 1),
        locationNum,
        freq,
      };
    })
    .filter(Boolean)
    .sort((a, b) => {
      const aFinite = Number.isFinite(a.locationNum);
      const bFinite = Number.isFinite(b.locationNum);
      if (aFinite && bFinite) {
        return a.locationNum - b.locationNum;
      }
      if (aFinite) {
        return -1;
      }
      if (bFinite) {
        return 1;
      }
      return a.order - b.order;
    });

  if (data.length === 0) {
    container.innerHTML = `<p class="location-frequency-status">${tr("未找到有效的点位频次数据。", "No valid location frequency data found.")}</p>`;
    return;
  }

  const createSvgNode = (tagName, attrs = {}) => {
    const node = document.createElementNS("http://www.w3.org/2000/svg", tagName);
    Object.entries(attrs).forEach(([key, value]) => {
      node.setAttribute(key, String(value));
    });
    return node;
  };

  const formatValue = (value) => {
    if (!Number.isFinite(value)) {
      return "0";
    }
    const rounded = Math.round(value);
    if (Math.abs(value - rounded) < 1e-6) {
      return String(rounded);
    }
    return value.toFixed(2).replace(/\.?0+$/, "");
  };

  const svgW = 620;
  const svgH = 370;
  const margin = { top: 24, right: 14, bottom: 68, left: 44 };
  const plotW = svgW - margin.left - margin.right;
  const plotH = svgH - margin.top - margin.bottom;
  const bottomY = svgH - margin.bottom;

  const maxFreq = Math.max(...data.map((item) => item.freq));
  const niceSteps = [0.5, 1, 2, 2.5, 5];
  const roughStep = Math.max(0.5, maxFreq / 6);
  const yStep = niceSteps.find((step) => step >= roughStep) || 5;
  const yMax = Math.ceil(maxFreq / yStep) * yStep;

  const xStep = plotW / data.length;
  const barW = Math.min(28, Math.max(14, xStep * 0.42));
  const xCenter = (idx) => margin.left + xStep * (idx + 0.5);
  const yScale = (value) => margin.top + (1 - value / Math.max(0.001, yMax)) * plotH;

  const title = document.createElement("h4");
  title.className = "location-frequency-title";
  title.textContent = tr("频次 × 点位", "Frequency x Location");

  const svg = createSvgNode("svg", {
    class: "location-frequency-svg",
    viewBox: `0 0 ${svgW} ${svgH}`,
    role: "img",
    "aria-label": tr("各点位拍摄频次", "Photo frequency across locations"),
  });

  for (let y = 0; y <= yMax + 1e-6; y += yStep) {
    const yPos = yScale(y);
    svg.appendChild(createSvgNode("line", { x1: margin.left, y1: yPos, x2: svgW - margin.right, y2: yPos, class: "location-frequency-grid-line" }));
    const yLabel = createSvgNode("text", { x: margin.left - 8, y: yPos + 4, "text-anchor": "end", class: "location-frequency-axis-label" });
    yLabel.textContent = formatValue(y);
    svg.appendChild(yLabel);
  }

  data.forEach((item, idx) => {
    const xPos = xCenter(idx);
    const yPos = svgH - margin.bottom + 22;
    const xLabel = createSvgNode("text", {
      x: xPos,
      y: yPos,
      "text-anchor": "end",
      class: "location-frequency-axis-label",
      transform: `rotate(-45 ${xPos} ${yPos})`,
    });
    xLabel.textContent = item.locationLabel;
    svg.appendChild(xLabel);
  });

  svg.appendChild(createSvgNode("line", { x1: margin.left, y1: margin.top, x2: margin.left, y2: bottomY, class: "location-frequency-axis-line" }));
  svg.appendChild(createSvgNode("line", { x1: margin.left, y1: bottomY, x2: svgW - margin.right, y2: bottomY, class: "location-frequency-axis-line" }));

  const bars = [];

  data.forEach((item, idx) => {
    const cx = xCenter(idx);
    const x = cx - barW / 2;
    const yTop = yScale(item.freq);

    const group = createSvgNode("g", { class: "location-frequency-bar-group" });
    const bar = createSvgNode("rect", {
      class: "location-frequency-bar",
      x,
      y: yTop,
      width: barW,
      height: bottomY - yTop,
    });

    const freqLabel = createSvgNode("text", {
      class: "location-frequency-hover-label",
      x: cx,
      y: Math.max(margin.top + 12, yTop - 8),
      visibility: "hidden",
    });
    freqLabel.textContent = formatValue(item.freq);

    const hitRect = createSvgNode("rect", {
      class: "location-frequency-hit",
      x: x - 5,
      y: margin.top,
      width: barW + 10,
      height: plotH,
    });

    group.append(bar, freqLabel, hitRect);
    svg.appendChild(group);
    bars.push({ item, group, yTop, freqLabel, hitRect });
  });

  let activeBar = -1;
  const applyHoverState = (index) => {
    activeBar = index;
    bars.forEach((bar, idx) => {
      const isActive = activeBar === idx;
      bar.group.style.opacity = activeBar === -1 || isActive ? "1" : "0.5";

      const showLabels = isActive;
      let freqY = Math.max(margin.top + 12, bar.yTop - 8);
      if (freqY < margin.top + 14) {
        freqY = bar.yTop + 14;
      }
      bar.freqLabel.setAttribute("y", String(freqY));
      bar.freqLabel.setAttribute("visibility", showLabels ? "visible" : "hidden");
    });
  };

  bars.forEach((bar, idx) => {
    bar.hitRect.addEventListener("mouseenter", () => applyHoverState(idx));
    bar.hitRect.addEventListener("mouseleave", () => applyHoverState(-1));
  });

  svg.addEventListener("mouseleave", () => applyHoverState(-1));

  applyHoverState(-1);
  const note = document.createElement("p");
  note.className = "location-frequency-note";
  note.textContent = tr("注：数值表示各点位记录到的日均出现次数。", "Note: Values represent the average daily presence recorded per location.");

  container.replaceChildren(title, svg, note);
};

loadLocationFrequencyChart();

const loadLocationRichnessChart = async () => {
  const container = document.getElementById("location-richness-shell");
  if (!container) {
    return;
  }

  const csvCandidates = ["data/camera。csv", "data/camera.csv"];
  let csvText = "";
  let loaded = false;

  for (const path of csvCandidates) {
    try {
      const response = await fetch(path, { cache: "no-store" });
      if (!response.ok) {
        continue;
      }
      csvText = await response.text();
      loaded = true;
      break;
    } catch (_error) {
      // Try next candidate path.
    }
  }

  if (!loaded) {
    container.innerHTML = `<p class="location-richness-status">${tr("无法加载相机丰富度数据。", "Unable to load camera richness data.")}</p>`;
    return;
  }

  const rows = parseCsvRows(csvText.replace(/^\uFEFF/, ""));
  if (rows.length < 2) {
    container.innerHTML = `<p class="location-richness-status">${tr("相机 CSV 为空。", "Camera CSV is empty.")}</p>`;
    return;
  }

  const headers = rows[0].map((h) => h.trim());
  const lowerHeaders = headers.map((h) => h.toLowerCase());
  const findColumn = (patterns) => lowerHeaders.findIndex((header) => patterns.some((pattern) => header.includes(pattern)));

  const locationIdx = findColumn(["location"]);
  const richnessIdx = findColumn(["species count", "richness"]);
  const topSpeciesIdx = findColumn(["top 1 species"]);

  if (locationIdx < 0 || richnessIdx < 0 || topSpeciesIdx < 0) {
    container.innerHTML = `<p class="location-richness-status">${tr("CSV 列格式不符合预期。", "CSV columns are not in the expected format.")}</p>`;
    return;
  }

  const data = rows
    .slice(1)
    .map((row, rowIndex) => {
      const locationRaw = (row[locationIdx] || "").trim();
      const locationNum = Number.parseFloat(locationRaw);
      const richness = Number.parseFloat((row[richnessIdx] || "").trim());
      const top1Species = (row[topSpeciesIdx] || "").trim();
      if (!Number.isFinite(richness)) {
        return null;
      }
      return {
        order: rowIndex,
        locationLabel: locationRaw || String(rowIndex + 1),
        locationNum,
        richness,
        top1Species: top1Species || tr("未知", "Unknown"),
      };
    })
    .filter(Boolean)
    .sort((a, b) => {
      const aFinite = Number.isFinite(a.locationNum);
      const bFinite = Number.isFinite(b.locationNum);
      if (aFinite && bFinite) {
        return a.locationNum - b.locationNum;
      }
      if (aFinite) {
        return -1;
      }
      if (bFinite) {
        return 1;
      }
      return a.order - b.order;
    });

  if (data.length === 0) {
    container.innerHTML = `<p class="location-richness-status">${tr("未找到有效的点位丰富度数据。", "No valid location richness data found.")}</p>`;
    return;
  }

  const createSvgNode = (tagName, attrs = {}) => {
    const node = document.createElementNS("http://www.w3.org/2000/svg", tagName);
    Object.entries(attrs).forEach(([key, value]) => {
      node.setAttribute(key, String(value));
    });
    return node;
  };

  const svgW = 620;
  const svgH = 370;
  const margin = { top: 24, right: 44, bottom: 68, left: 44 };
  const plotW = svgW - margin.left - margin.right;
  const plotH = svgH - margin.top - margin.bottom;
  const bottomY = svgH - margin.bottom;

  const maxRichness = Math.max(...data.map((item) => item.richness));
  const niceSteps = [1, 2, 5];
  const roughStep = Math.max(1, maxRichness / 6);
  const yStep = niceSteps.find((step) => step >= roughStep) || 5;
  const yMax = Math.ceil(maxRichness / yStep) * yStep;

  const xStep = plotW / data.length;
  const barW = Math.min(28, Math.max(14, xStep * 0.42));
  const xCenter = (idx) => margin.left + xStep * (idx + 0.5);
  const yScale = (value) => margin.top + (1 - value / Math.max(0.001, yMax)) * plotH;

  const title = document.createElement("h4");
  title.className = "location-richness-title";
  title.textContent = tr("丰富度 × 点位", "Richness x Location");

  const svg = createSvgNode("svg", {
    class: "location-richness-svg",
    viewBox: `0 0 ${svgW} ${svgH}`,
    role: "img",
    "aria-label": tr("各点位物种丰富度", "Species richness across locations"),
  });

  for (let y = 0; y <= yMax + 1e-6; y += yStep) {
    const yPos = yScale(y);
    svg.appendChild(createSvgNode("line", { x1: margin.left, y1: yPos, x2: svgW - margin.right, y2: yPos, class: "location-richness-grid-line" }));
    const yLabel = createSvgNode("text", { x: margin.left - 8, y: yPos + 4, "text-anchor": "end", class: "location-richness-axis-label" });
    yLabel.textContent = String(Math.round(y));
    svg.appendChild(yLabel);
  }

  data.forEach((item, idx) => {
    const xPos = xCenter(idx);
    const yPos = svgH - margin.bottom + 22;
    const xLabel = createSvgNode("text", {
      x: xPos,
      y: yPos,
      "text-anchor": "end",
      class: "location-richness-axis-label",
      transform: `rotate(-45 ${xPos} ${yPos})`,
    });
    xLabel.textContent = item.locationLabel;
    svg.appendChild(xLabel);
  });

  svg.appendChild(createSvgNode("line", { x1: margin.left, y1: margin.top, x2: margin.left, y2: bottomY, class: "location-richness-axis-line" }));
  svg.appendChild(createSvgNode("line", { x1: margin.left, y1: bottomY, x2: svgW - margin.right, y2: bottomY, class: "location-richness-axis-line" }));

  const bars = [];

  data.forEach((item, idx) => {
    const cx = xCenter(idx);
    const x = cx - barW / 2;
    const yTop = yScale(item.richness);

    const group = createSvgNode("g", { class: "location-richness-bar-group" });
    const bar = createSvgNode("rect", {
      class: "location-richness-bar",
      x,
      y: yTop,
      width: barW,
      height: bottomY - yTop,
    });

    const richnessLabel = createSvgNode("text", {
      class: "location-richness-hover-label",
      x: cx,
      y: Math.max(margin.top + 12, yTop - 18),
      visibility: "hidden",
    });
    richnessLabel.textContent = `${Math.round(item.richness)}`;

    const top1Label = createSvgNode("text", {
      class: "location-richness-hover-label",
      x: cx,
      y: Math.max(margin.top + 24, yTop - 6),
      visibility: "hidden",
    });
    top1Label.textContent = item.top1Species;

    const hitRect = createSvgNode("rect", {
      class: "location-richness-hit",
      x: x - 5,
      y: margin.top,
      width: barW + 10,
      height: plotH,
    });

    group.append(bar, richnessLabel, top1Label, hitRect);
    svg.appendChild(group);
    bars.push({ group, yTop, richnessLabel, top1Label, hitRect });
  });

  let activeBar = -1;
  const applyHoverState = (index) => {
    activeBar = index;
    bars.forEach((bar, idx) => {
      const isActive = activeBar === idx;
      bar.group.style.opacity = activeBar === -1 || isActive ? "1" : "0.5";

      let countY = Math.max(margin.top + 12, bar.yTop - 18);
      let speciesY = Math.max(margin.top + 24, bar.yTop - 6);
      if (countY < margin.top + 14) {
        countY = bar.yTop + 14;
        speciesY = countY + 12;
      }
      bar.richnessLabel.setAttribute("y", String(countY));
      bar.top1Label.setAttribute("y", String(speciesY));
      bar.richnessLabel.setAttribute("visibility", isActive ? "visible" : "hidden");
      bar.top1Label.setAttribute("visibility", isActive ? "visible" : "hidden");
    });
  };

  bars.forEach((bar, idx) => {
    bar.hitRect.addEventListener("mouseenter", () => applyHoverState(idx));
    bar.hitRect.addEventListener("mouseleave", () => applyHoverState(-1));
  });

  svg.addEventListener("mouseleave", () => applyHoverState(-1));

  applyHoverState(-1);
  const note = document.createElement("p");
  note.className = "location-richness-note";
  note.textContent = tr("注：数值表示各点位观测到的物种数量及出现频率最高的 TOP1 物种。", "Note: Values represent the number of species observed at each location and the most frequently observed top-1 species.");

  container.replaceChildren(title, svg, note);
};

loadLocationRichnessChart();

const loadBuiltEnvDashboard = async () => {
  const dashboard = document.getElementById("built-dashboard");
  const status = document.getElementById("built-dashboard-status");
  if (!dashboard) {
    return;
  }

  const locationList = document.getElementById("dashboard-location-list");
  if (!locationList) {
    return;
  }

  const csvCandidates = ["data/camer。csv", "data/camera。csv", "data/camer.csv", "data/camera.csv"];
  let csvText = "";
  let loaded = false;

  for (const path of csvCandidates) {
    try {
      const response = await fetch(path, { cache: "no-store" });
      if (!response.ok) {
        continue;
      }
      csvText = await response.text();
      loaded = true;
      break;
    } catch (_error) {
      // Try next candidate path.
    }
  }

  if (!loaded) {
    if (status) {
      status.textContent = tr("无法加载看板数据。", "Unable to load dashboard data.");
      status.classList.remove("is-hidden");
    }
    return;
  }

  const rows = parseCsvRows(csvText.replace(/^\uFEFF/, ""));
  if (rows.length < 2) {
    if (status) {
      status.textContent = tr("看板 CSV 为空。", "Dashboard CSV is empty.");
      status.classList.remove("is-hidden");
    }
    return;
  }

  const headers = rows[0].map((h) => h.trim());
  const lowerHeaders = headers.map((h) => h.toLowerCase());

  const findColumn = (patterns) => lowerHeaders.findIndex((header) => patterns.some((pattern) => header.includes(pattern)));
  const findExactColumn = (name) => lowerHeaders.findIndex((header) => header === name);

  const locationIdx = findColumn(["location"]);
  const transIdx = findColumn(["trans"]);
  const waterIdx = findColumn(["water"]);
  const greenIdx = findColumn(["green"]);
  const mrtIdx = findColumn(["mrt"]);
  const impIdx = findColumn(["imp"]);
  const speciesCountIdx = findColumn(["species count"]);
  const presenceIdx = findExactColumn("presence");
  const avesIdx = findExactColumn("aves");
  const avesPctIdx = findColumn(["%aves"]);
  const mammaliaIdx = findExactColumn("mammalia");
  const mammaliaPctIdx = findColumn(["%mammalia"]);
  const dayPresenceIdx = findColumn(["day presence"]);
  const dayPctIdx = findColumn(["%day"]);
  const nightPresenceIdx = findColumn(["night presence"]);
  const nightPctIdx = findColumn(["%night"]);
  const trueDaysIdx = findColumn(["true days"]);
  const photoFreqIdx = findColumn(["photo frequency"]);
  const top1SpeciesIdx = findColumn(["top 1 species"]);
  const top1CountIdx = findColumn(["top 1 count"]);
  const top2SpeciesIdx = findColumn(["top 2 species"]);
  const top2CountIdx = findColumn(["top 2 count"]);
  const top3SpeciesIdx = findColumn(["top 3 species"]);
  const top3CountIdx = findColumn(["top 3 count"]);

  if (
    locationIdx < 0 ||
    transIdx < 0 ||
    waterIdx < 0 ||
    greenIdx < 0 ||
    mrtIdx < 0 ||
    impIdx < 0 ||
    speciesCountIdx < 0 ||
    presenceIdx < 0
  ) {
    if (status) {
      status.textContent = tr("看板 CSV 列格式不符合预期。", "Dashboard CSV columns are not in the expected format.");
      status.classList.remove("is-hidden");
    }
    return;
  }

  const parseNumber = (raw) => {
    const value = Number.parseFloat((raw || "").trim());
    return Number.isFinite(value) ? value : NaN;
  };

  const parsePercent = (raw) => {
    const cleaned = (raw || "").trim().replace("%", "");
    const value = Number.parseFloat(cleaned);
    return Number.isFinite(value) ? value : NaN;
  };

  const rowsData = rows
    .slice(1)
    .map((row, idx) => {
      const locationRaw = (row[locationIdx] || "").trim();
      const locationNum = parseNumber(locationRaw);
      const presence = parseNumber(row[presenceIdx]);
      const dayPresence = dayPresenceIdx >= 0 ? parseNumber(row[dayPresenceIdx]) : NaN;
      const nightPresence = nightPresenceIdx >= 0 ? parseNumber(row[nightPresenceIdx]) : NaN;
      const speciesCount = parseNumber(row[speciesCountIdx]);
      const aves = avesIdx >= 0 ? parseNumber(row[avesIdx]) : NaN;
      const mammalia = mammaliaIdx >= 0 ? parseNumber(row[mammaliaIdx]) : NaN;

      if (!Number.isFinite(presence)) {
        return null;
      }

      let dayPct = dayPctIdx >= 0 ? parsePercent(row[dayPctIdx]) : NaN;
      let nightPct = nightPctIdx >= 0 ? parsePercent(row[nightPctIdx]) : NaN;
      if (!Number.isFinite(dayPct) && Number.isFinite(dayPresence) && presence > 0) {
        dayPct = (dayPresence / presence) * 100;
      }
      if (!Number.isFinite(nightPct) && Number.isFinite(nightPresence) && presence > 0) {
        nightPct = (nightPresence / presence) * 100;
      }

      let avesPct = avesPctIdx >= 0 ? parsePercent(row[avesPctIdx]) : NaN;
      let mammaliaPct = mammaliaPctIdx >= 0 ? parsePercent(row[mammaliaPctIdx]) : NaN;
      if (!Number.isFinite(avesPct) && Number.isFinite(aves) && presence > 0) {
        avesPct = (aves / presence) * 100;
      }
      if (!Number.isFinite(mammaliaPct) && Number.isFinite(mammalia) && presence > 0) {
        mammaliaPct = (mammalia / presence) * 100;
      }

      return {
        rowOrder: idx,
        locationLabel: locationRaw || String(idx + 1),
        locationNum,
        trans: parseNumber(row[transIdx]),
        water: parseNumber(row[waterIdx]),
        green: parseNumber(row[greenIdx]),
        mrt: parseNumber(row[mrtIdx]),
        imp: parseNumber(row[impIdx]),
        speciesCount,
        presence,
        aves,
        avesPct,
        mammalia,
        mammaliaPct,
        dayPresence,
        dayPct,
        nightPresence,
        nightPct,
        trueDays: trueDaysIdx >= 0 ? parseNumber(row[trueDaysIdx]) : NaN,
        photoFrequency: photoFreqIdx >= 0 ? parseNumber(row[photoFreqIdx]) : NaN,
        top1Species: top1SpeciesIdx >= 0 ? (row[top1SpeciesIdx] || "").trim() : "",
        top1Count: top1CountIdx >= 0 ? parseNumber(row[top1CountIdx]) : NaN,
        top2Species: top2SpeciesIdx >= 0 ? (row[top2SpeciesIdx] || "").trim() : "",
        top2Count: top2CountIdx >= 0 ? parseNumber(row[top2CountIdx]) : NaN,
        top3Species: top3SpeciesIdx >= 0 ? (row[top3SpeciesIdx] || "").trim() : "",
        top3Count: top3CountIdx >= 0 ? parseNumber(row[top3CountIdx]) : NaN,
      };
    })
    .filter(Boolean)
    .sort((a, b) => {
      const aFinite = Number.isFinite(a.locationNum);
      const bFinite = Number.isFinite(b.locationNum);
      if (aFinite && bFinite) {
        return a.locationNum - b.locationNum;
      }
      if (aFinite) {
        return -1;
      }
      if (bFinite) {
        return 1;
      }
      return a.rowOrder - b.rowOrder;
    });

  if (rowsData.length === 0) {
    if (status) {
      status.textContent = tr("未找到有效的看板数据。", "No valid dashboard data found.");
      status.classList.remove("is-hidden");
    }
    return;
  }

  const metricDefs = [
    { key: "mrt", valueId: "dashboard-mrt-value", fillId: "dashboard-mrt-fill" },
    { key: "imp", valueId: "dashboard-imp-value", fillId: "dashboard-imp-fill" },
    { key: "green", valueId: "dashboard-green-value", fillId: "dashboard-green-fill" },
    { key: "water", valueId: "dashboard-water-value", fillId: "dashboard-water-fill" },
    { key: "trans", valueId: "dashboard-trans-value", fillId: "dashboard-trans-fill" },
  ];

  const metricRanges = new Map();
  metricDefs.forEach((metric) => {
    const values = rowsData.map((item) => item[metric.key]).filter((value) => Number.isFinite(value));
    const min = values.length ? Math.min(...values) : 0;
    const max = values.length ? Math.max(...values) : 0;
    metricRanges.set(metric.key, { min, max });
  });

  const setText = (id, text) => {
    const el = document.getElementById(id);
    if (el) {
      el.textContent = text;
    }
  };

  const formatInteger = (value) => (Number.isFinite(value) ? String(Math.round(value)) : "0");
  const formatDecimal = (value) => {
    if (!Number.isFinite(value)) {
      return "0";
    }
    return value.toFixed(2).replace(/\.?0+$/, "");
  };
  const formatFixed2 = (value) => (Number.isFinite(value) ? value.toFixed(2) : "0.00");
  const formatCountPctInteger = (count, pct) => `${formatInteger(count)} (${Number.isFinite(pct) ? Math.round(pct) : 0}%)`;
  const formatCountPctOneDecimal = (count, pct) => `${formatInteger(count)} (${Number.isFinite(pct) ? pct.toFixed(1) : "0.0"}%)`;

  const locationButtons = [];
  locationList.replaceChildren();
  rowsData.forEach((item, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "built-dashboard-location-btn";
    btn.textContent = item.locationLabel;
    btn.setAttribute("aria-label", tr(`点位 ${item.locationLabel}`, `Location ${item.locationLabel}`));
    btn.addEventListener("click", () => {
      renderLocation(idx);
    });
    locationButtons.push(btn);
    locationList.appendChild(btn);
  });

  let activeIndex = 0;
  const renderLocation = (idx) => {
    activeIndex = idx;
    const item = rowsData[idx];
    if (!item) {
      return;
    }

    locationButtons.forEach((btn, buttonIdx) => {
      btn.classList.toggle("is-active", buttonIdx === activeIndex);
    });

    setText("dashboard-location-name-middle", item.locationLabel);
    setText("dashboard-location-name-right", item.locationLabel);

    setText("dashboard-presence", formatInteger(item.presence));
    setText("dashboard-day", formatCountPctInteger(item.dayPresence, item.dayPct));
    setText("dashboard-night", formatCountPctInteger(item.nightPresence, item.nightPct));
    setText("dashboard-frequency", formatFixed2(item.photoFrequency));
    setText("dashboard-recording-day", formatFixed2(item.trueDays));

    setText("dashboard-richness", formatInteger(item.speciesCount));
    setText("dashboard-aves", formatCountPctOneDecimal(item.aves, item.avesPct));
    setText("dashboard-mammalia", formatCountPctOneDecimal(item.mammalia, item.mammaliaPct));
    setText("dashboard-top1", item.top1Species || "-");
    setText("dashboard-top1-count", formatInteger(item.top1Count));
    setText("dashboard-top2", item.top2Species || "-");
    setText("dashboard-top2-count", formatInteger(item.top2Count));
    setText("dashboard-top3", item.top3Species || "-");
    setText("dashboard-top3-count", formatInteger(item.top3Count));

    metricDefs.forEach((metric) => {
      const value = item[metric.key];
      const valueEl = document.getElementById(metric.valueId);
      const fillEl = document.getElementById(metric.fillId);
      const range = metricRanges.get(metric.key) || { min: 0, max: 0 };
      const percentile =
        range.max === range.min || !Number.isFinite(value) ? 0 : ((value - range.min) / (range.max - range.min)) * 100;
      const boundedPercentile = Math.max(0, Math.min(100, percentile));

      if (valueEl) {
        valueEl.textContent = formatDecimal(value);
      }
      if (fillEl) {
        fillEl.style.width = `${boundedPercentile.toFixed(2)}%`;
      }
    });
  };

  renderLocation(0);
  if (status) {
    status.classList.add("is-hidden");
  }
};

loadBuiltEnvDashboard();

const parseCitationNumbers = (raw) =>
  raw
    .split(",")
    .map((chunk) => Number.parseInt(chunk.trim(), 10))
    .filter((n) => Number.isFinite(n) && citationByNumber.has(n));

const enhanceInTextCitations = () => {
  const main = document.querySelector("main");
  if (!main) {
    return;
  }

  const citationPattern = /\[(\d+(?:\s*,\s*\d+)*)\]/g;
  const walker = document.createTreeWalker(main, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent) {
        return NodeFilter.FILTER_REJECT;
      }
      if (parent.closest("#citation-list")) {
        return NodeFilter.FILTER_REJECT;
      }
      if (parent.closest("a, button, script, style")) {
        return NodeFilter.FILTER_REJECT;
      }
      citationPattern.lastIndex = 0;
      return citationPattern.test(node.nodeValue || "") ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    },
  });

  const textNodes = [];
  while (walker.nextNode()) {
    textNodes.push(walker.currentNode);
  }

  textNodes.forEach((node) => {
    const source = node.nodeValue || "";
    citationPattern.lastIndex = 0;
    if (!citationPattern.test(source)) {
      return;
    }
    citationPattern.lastIndex = 0;

    const fragment = document.createDocumentFragment();
    let lastIndex = 0;
    let match;

    while ((match = citationPattern.exec(source)) !== null) {
      const [fullMatch, rawNumbers] = match;
      const start = match.index;

      if (start > lastIndex) {
        fragment.appendChild(document.createTextNode(source.slice(lastIndex, start)));
      }

      const parsed = parseCitationNumbers(rawNumbers);
      if (parsed.length > 0) {
        const citeLink = document.createElement("a");
        citeLink.className = "intext-cite";
        citeLink.href = `#citation-${parsed[0]}`;
        citeLink.dataset.cites = parsed.join(",");
        citeLink.textContent = `[${parsed.join(",")}]`;
        fragment.appendChild(citeLink);
      } else {
        fragment.appendChild(document.createTextNode(fullMatch));
      }

      lastIndex = start + fullMatch.length;
    }

    if (lastIndex < source.length) {
      fragment.appendChild(document.createTextNode(source.slice(lastIndex)));
    }

    node.parentNode?.replaceChild(fragment, node);
  });
};

const buildTooltipContent = (numbers) =>
  numbers
    .map((num) => {
      const item = citationByNumber.get(num);
      return item ? item.text : "";
    })
    .filter(Boolean)
    .join("\n\n");

const citationTooltip = document.createElement("div");
citationTooltip.className = "citation-tooltip";
citationTooltip.hidden = true;
document.body.appendChild(citationTooltip);

const returnPositionButton = document.createElement("button");
returnPositionButton.type = "button";
returnPositionButton.className = "return-reading-pos";
returnPositionButton.textContent = tr("返回刚才阅读位置", "Back to where you were");
returnPositionButton.hidden = true;
document.body.appendChild(returnPositionButton);

let savedReadingPosition = null;
let activeCitationHover = null;
let tooltipOriginPoint = null;

const getNavOffset = () => {
  const nav = document.getElementById("floating-nav");
  if (!nav || !nav.classList.contains("is-visible")) {
    const shellHeader = document.querySelector("[data-template-shell='detail-header']");
    if (shellHeader instanceof HTMLElement) {
      const shellHeight = shellHeader.getBoundingClientRect().height || 0;
      return shellHeight + 8;
    }
    return 0;
  }
  const navHeight = nav.getBoundingClientRect().height || 0;
  return navHeight + 8;
};

const scrollToTargetWithOffset = (target) => {
  if (!target) {
    return;
  }
  const targetTop = window.scrollY + target.getBoundingClientRect().top;
  const top = Math.max(0, targetTop - getNavOffset());
  window.scrollTo({ top, behavior: "smooth" });
};

const hideCitationTooltip = () => {
  citationTooltip.hidden = true;
  activeCitationHover = null;
  tooltipOriginPoint = null;
};

const placeCitationTooltip = (anchorRect) => {
  const pad = 12;
  const rect = citationTooltip.getBoundingClientRect();
  let left = anchorRect.left;
  let top = anchorRect.bottom + 10;

  if (left + rect.width > window.innerWidth - pad) {
    left = window.innerWidth - rect.width - pad;
  }
  if (top + rect.height > window.innerHeight - pad) {
    top = anchorRect.top - rect.height - 10;
  }
  if (left < pad) {
    left = pad;
  }
  if (top < pad) {
    top = pad;
  }

  citationTooltip.style.left = `${left}px`;
  citationTooltip.style.top = `${top}px`;
};

const showReturnPositionButton = () => {
  returnPositionButton.hidden = false;
  requestAnimationFrame(() => {
    returnPositionButton.classList.add("is-visible");
  });
};

const hideReturnPositionButton = () => {
  returnPositionButton.classList.remove("is-visible");
  window.setTimeout(() => {
    if (!returnPositionButton.classList.contains("is-visible")) {
      returnPositionButton.hidden = true;
    }
  }, 220);
};

enhanceInTextCitations();

document.addEventListener("pointerover", (event) => {
  const cite = event.target.closest(".intext-cite");
  if (!cite) {
    return;
  }
  activeCitationHover = cite;
  const numbers = parseCitationNumbers(cite.dataset.cites || "");
  if (numbers.length === 0) {
    return;
  }
  citationTooltip.textContent = buildTooltipContent(numbers);
  citationTooltip.hidden = false;
  placeCitationTooltip(cite.getBoundingClientRect());
  tooltipOriginPoint = { x: event.clientX, y: event.clientY };
});

document.addEventListener("pointermove", (event) => {
  if (!tooltipOriginPoint || citationTooltip.hidden) {
    return;
  }
  const distance = Math.hypot(event.clientX - tooltipOriginPoint.x, event.clientY - tooltipOriginPoint.y);
  if (distance > 28) {
    hideCitationTooltip();
  }
});

document.addEventListener("click", (event) => {
  hideCitationTooltip();

  const cite = event.target.closest(".intext-cite");
  if (!cite) {
    return;
  }
  event.preventDefault();
  savedReadingPosition = window.scrollY;
  showReturnPositionButton();

  const target = document.querySelector(cite.getAttribute("href"));
  if (target) {
    scrollToTargetWithOffset(target);
  }
});

window.addEventListener("wheel", hideCitationTooltip, { passive: true });
window.addEventListener("scroll", hideCitationTooltip, { passive: true });

returnPositionButton.addEventListener("click", () => {
  if (savedReadingPosition == null) {
    return;
  }
  window.scrollTo({ top: savedReadingPosition, behavior: "smooth" });
  savedReadingPosition = null;
  hideReturnPositionButton();
});

const detailOutlineToggle = document.getElementById("detail-outline-toggle");
const detailOutline = document.getElementById("detail-outline-panel");
const detailOutlineBackdrop = document.getElementById("detail-outline-backdrop");
const detailOutlineTitle = document.querySelector(".detail-outline-title");
const detailOutlineNav = document.querySelector(".detail-outline-nav");

const getSiteLang = () => {
  const saved = localStorage.getItem("siteLang");
  if (saved === "zh" || saved === "en") {
    return saved;
  }
  const htmlLang = String(document.documentElement.lang || "").toLowerCase();
  if (htmlLang.startsWith("zh")) {
    return "zh";
  }
  const navLang = String(navigator.language || "en").toLowerCase();
  return navLang.startsWith("zh") ? "zh" : "en";
};

const applyContentsLabel = () => {
  const lang = getSiteLang();
  const buttonLabel = lang === "zh" ? "提纲" : "TOC";
  const titleLabel = lang === "zh" ? "提纲" : "Outline";
  if (detailOutlineToggle) {
    detailOutlineToggle.setAttribute("aria-label", buttonLabel);
    detailOutlineToggle.setAttribute("title", buttonLabel);
    const toggleLabel = detailOutlineToggle.querySelector(".detail-outline-toggle-label");
    if (toggleLabel) {
      toggleLabel.textContent = buttonLabel;
    }
  }
  if (detailOutlineTitle) {
    detailOutlineTitle.textContent = titleLabel;
  }
  if (detailOutlineNav) {
    detailOutlineNav.setAttribute("aria-label", titleLabel);
  }
};

const syncLanguageRoute = () => {
  const lang = getSiteLang();
  const pathname = window.location.pathname;
  const isEn = /index-en\.html$/i.test(pathname);
  const isZh = /index\.html$/i.test(pathname) && !isEn;

  if (lang === "en" && isZh) {
    const nextPath = pathname.replace(/index\.html$/i, "index-en.html");
    if (nextPath !== pathname) {
      window.location.replace(`${nextPath}${window.location.search}${window.location.hash}`);
    }
    return;
  }

  if (lang === "zh" && isEn) {
    const nextPath = pathname.replace(/index-en\.html$/i, "index.html");
    if (nextPath !== pathname) {
      window.location.replace(`${nextPath}${window.location.search}${window.location.hash}`);
    }
  }
};

applyContentsLabel();
syncLanguageRoute();
window.addEventListener("storage", (event) => {
  if (event.key === "siteLang") {
    applyContentsLabel();
    syncLanguageRoute();
  }
});

document.addEventListener("click", (event) => {
  if (!event.target.closest("#tpl-shell-lang")) {
    return;
  }
  window.setTimeout(() => {
    applyContentsLabel();
    syncLanguageRoute();
  }, 0);
});

if (detailOutlineToggle && detailOutline) {
  const closeOutline = () => {
    detailOutline.classList.remove("is-open");
    detailOutline.setAttribute("aria-hidden", "true");
    detailOutline.setAttribute("inert", "");
    detailOutlineToggle.classList.remove("is-active");
    detailOutlineToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("detail-outline-open");
    if (detailOutlineBackdrop) {
      detailOutlineBackdrop.classList.remove("is-active");
      window.setTimeout(() => {
        if (!detailOutline.classList.contains("is-open")) {
          detailOutline.hidden = true;
          detailOutlineBackdrop.hidden = true;
        }
      }, 220);
    } else {
      detailOutline.hidden = true;
    }
  };

  const openOutline = () => {
    detailOutline.hidden = false;
    detailOutline.classList.add("is-open");
    detailOutline.setAttribute("aria-hidden", "false");
    detailOutline.removeAttribute("inert");
    detailOutlineToggle.classList.add("is-active");
    detailOutlineToggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("detail-outline-open");
    if (detailOutlineBackdrop) {
      detailOutlineBackdrop.hidden = false;
      requestAnimationFrame(() => {
        detailOutlineBackdrop.classList.add("is-active");
      });
    }
  };

  detailOutlineToggle.addEventListener("click", () => {
    if (detailOutline.classList.contains("is-open")) {
      closeOutline();
      return;
    }
    openOutline();
  });

  if (detailOutlineBackdrop) {
    detailOutlineBackdrop.addEventListener("click", closeOutline);
  }

  if (detailOutlineNav) {
    detailOutlineNav.addEventListener("click", (event) => {
      const link = event.target.closest("a[href^='#']");
      if (!link) return;
      const targetId = link.getAttribute("href");
      const target = targetId ? document.querySelector(targetId) : null;
      if (!target) {
        closeOutline();
        return;
      }
      event.preventDefault();
      closeOutline();
      window.setTimeout(() => {
        scrollToTargetWithOffset(target);
      }, 0);
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && detailOutline.classList.contains("is-open")) {
      closeOutline();
    }
  });
}

const zoomableImageNodeIds = [
  // Figma names: frame40, frame119 1, image 37, image 72, image 71, frame111
  "54:36",
  "54:4",
  "54:248",
  "61:358",
  "54:170",
  "54:178",
  // Figma names: image10, image11, image12, image13, image14, image15, image16, image17, image18
  "54:143",
  "54:139",
  "54:141",
  "54:151",
  "54:147",
  "54:149",
  "54:155",
  "54:157",
  "54:159",
  // Figma names: imp-rich1, imp-pres1, histo1
  "54:64",
  "54:302",
  "54:301",
];

const zoomableImages = zoomableImageNodeIds
  .map((id) => document.querySelector(`img[data-node-id="${id}"]`))
  .filter((node) => node instanceof HTMLImageElement);

if (zoomableImages.length > 0) {
  const imageViewer = document.createElement("div");
  imageViewer.className = "image-zoom-viewer";
  imageViewer.hidden = true;
  imageViewer.setAttribute("aria-hidden", "true");

  const viewerBackdrop = document.createElement("div");
  viewerBackdrop.className = "image-zoom-backdrop";

  const viewerStage = document.createElement("div");
  viewerStage.className = "image-zoom-stage";

  const viewerImage = document.createElement("img");
  viewerImage.className = "image-zoom-img";
  viewerImage.alt = "";
  viewerImage.draggable = false;

  const viewerClose = document.createElement("button");
  viewerClose.type = "button";
  viewerClose.className = "image-zoom-close";
  viewerClose.setAttribute("aria-label", tr("关闭图片查看器", "Close image viewer"));
  viewerClose.textContent = "×";

  viewerStage.appendChild(viewerImage);
  imageViewer.append(viewerBackdrop, viewerStage, viewerClose);
  document.body.appendChild(imageViewer);

  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
  const pointerMap = new Map();
  const minScale = 1;
  const maxScale = 5;
  let scale = 1;
  let translateX = 0;
  let translateY = 0;
  let dragStartX = 0;
  let dragStartY = 0;
  let dragBaseX = 0;
  let dragBaseY = 0;
  let dragging = false;
  let pinchStartDistance = 0;
  let pinchStartScale = 1;
  let suppressOpenUntil = 0;

  const getPinchDistance = () => {
    const points = Array.from(pointerMap.values());
    if (points.length < 2) {
      return 0;
    }
    return Math.hypot(points[0].x - points[1].x, points[0].y - points[1].y);
  };

  const clampTranslate = () => {
    const maxX = Math.max(0, ((scale - 1) * viewerImage.clientWidth) / 2);
    const maxY = Math.max(0, ((scale - 1) * viewerImage.clientHeight) / 2);
    translateX = clamp(translateX, -maxX, maxX);
    translateY = clamp(translateY, -maxY, maxY);
  };

  const applyImageTransform = () => {
    if (scale <= minScale + 0.001) {
      scale = minScale;
      translateX = 0;
      translateY = 0;
    }
    clampTranslate();
    viewerImage.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
  };

  const zoomTo = (nextScale, clientX, clientY) => {
    const clampedScale = clamp(nextScale, minScale, maxScale);
    if (Math.abs(clampedScale - scale) < 0.001) {
      return;
    }
    const stageRect = viewerStage.getBoundingClientRect();
    const pivotX = clientX - (stageRect.left + stageRect.width / 2);
    const pivotY = clientY - (stageRect.top + stageRect.height / 2);
    const ratio = clampedScale / scale;
    translateX = translateX * ratio + pivotX * (1 - ratio);
    translateY = translateY * ratio + pivotY * (1 - ratio);
    scale = clampedScale;
    applyImageTransform();
  };

  const openImageViewer = (sourceImage) => {
    viewerImage.src = sourceImage.currentSrc || sourceImage.src;
    viewerImage.alt = sourceImage.alt || "";
    scale = 1;
    translateX = 0;
    translateY = 0;
    pointerMap.clear();
    dragging = false;
    pinchStartDistance = 0;
    applyImageTransform();
    imageViewer.hidden = false;
    imageViewer.setAttribute("aria-hidden", "false");
    document.body.classList.add("image-viewer-open");
  };

  const closeImageViewer = () => {
    if (imageViewer.hidden) {
      return;
    }
    suppressOpenUntil = Date.now() + 240;
    imageViewer.hidden = true;
    imageViewer.setAttribute("aria-hidden", "true");
    pointerMap.clear();
    dragging = false;
    pinchStartDistance = 0;
    viewerImage.classList.remove("is-dragging");
    document.body.classList.remove("image-viewer-open");
  };

  zoomableImages.forEach((image) => {
    image.classList.add("zoomable-target");
    image.draggable = false;
    image.addEventListener("click", () => {
      if (Date.now() < suppressOpenUntil || !imageViewer.hidden) {
        return;
      }
      openImageViewer(image);
    });
  });

  viewerClose.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    closeImageViewer();
  });

  imageViewer.addEventListener("click", (event) => {
    if (event.target === imageViewer || event.target === viewerBackdrop || event.target === viewerStage) {
      closeImageViewer();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !imageViewer.hidden) {
      closeImageViewer();
    }
  });

  viewerImage.addEventListener("dblclick", (event) => {
    event.preventDefault();
    if (scale > 1.5) {
      zoomTo(1, event.clientX, event.clientY);
      return;
    }
    zoomTo(2.5, event.clientX, event.clientY);
  });

  viewerStage.addEventListener(
    "wheel",
    (event) => {
      if (imageViewer.hidden) {
        return;
      }
      event.preventDefault();
      const factor = event.deltaY < 0 ? 1.18 : 0.85;
      zoomTo(scale * factor, event.clientX, event.clientY);
    },
    { passive: false },
  );

  viewerImage.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }
    viewerImage.setPointerCapture(event.pointerId);
    pointerMap.set(event.pointerId, { x: event.clientX, y: event.clientY });
    if (pointerMap.size === 2) {
      pinchStartDistance = getPinchDistance();
      pinchStartScale = scale;
      dragging = false;
      viewerImage.classList.remove("is-dragging");
    } else if (pointerMap.size === 1 && scale > 1) {
      dragging = true;
      dragStartX = event.clientX;
      dragStartY = event.clientY;
      dragBaseX = translateX;
      dragBaseY = translateY;
      viewerImage.classList.add("is-dragging");
    }
    event.preventDefault();
  });

  viewerImage.addEventListener("pointermove", (event) => {
    if (!pointerMap.has(event.pointerId)) {
      return;
    }
    pointerMap.set(event.pointerId, { x: event.clientX, y: event.clientY });
    if (pointerMap.size >= 2 && pinchStartDistance > 0) {
      const distance = getPinchDistance();
      if (distance > 0) {
        scale = clamp((distance / pinchStartDistance) * pinchStartScale, minScale, maxScale);
        applyImageTransform();
      }
      return;
    }
    if (dragging && pointerMap.size === 1) {
      translateX = dragBaseX + (event.clientX - dragStartX);
      translateY = dragBaseY + (event.clientY - dragStartY);
      applyImageTransform();
    }
  });

  const endPointerInteraction = (event) => {
    pointerMap.delete(event.pointerId);
    if (pointerMap.size < 2) {
      pinchStartDistance = 0;
    }
    if (pointerMap.size === 0) {
      dragging = false;
      viewerImage.classList.remove("is-dragging");
    }
  };

  viewerImage.addEventListener("pointerup", endPointerInteraction);
  viewerImage.addEventListener("pointercancel", endPointerInteraction);
}
