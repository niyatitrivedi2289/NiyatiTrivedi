
/* lib/icons */
(function(){
/* CardioNexion 2025 — Icon (Lucide wrapper)
   Renders into an imperatively-managed span so React never fights
   Lucide's <i> -> <svg> replacement. Loaded as a Babel script. */

function Icon({
  name,
  size = 22,
  color,
  strokeWidth = 2,
  fill = "none",
  style,
  className
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || !window.lucide) return;
    el.innerHTML = "";
    const i = document.createElement("i");
    i.setAttribute("data-lucide", name);
    el.appendChild(i);
    try {
      window.lucide.createIcons({
        attrs: {
          "stroke-width": strokeWidth
        }
      });
    } catch (e) {}
    const svg = el.querySelector("svg");
    if (svg) {
      svg.style.width = size + "px";
      svg.style.height = size + "px";
      svg.style.display = "block";
      if (color) svg.style.stroke = color;
      if (fill && fill !== "none") svg.style.fill = fill;
    }
  });
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    className: className,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      color: color || "inherit",
      flex: `0 0 ${size}px`,
      ...style
    }
  });
}
Object.assign(window, {
  Icon
});
})();

/* lib/device */
(function(){
/* CardioNexion 2025 — Device frames (iOS + Android)
   Lightweight, document-friendly bezels for embedding many
   screens on a case-study page. Loaded as a Babel script. */

const SAFE = {
  ios: 56,
  android: 42
};

// ---- Status bar -------------------------------------------
function StatusBar({
  platform,
  dark,
  time = "9:41"
}) {
  const col = dark ? "var(--ink)" : "#fff";
  const h = SAFE[platform];
  if (platform === "android") {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        height: h,
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
        padding: "0 18px 8px",
        color: col,
        fontWeight: 600,
        fontSize: 13,
        letterSpacing: ".01em",
        position: "relative",
        zIndex: 5,
        pointerEvents: "none"
      }
    }, /*#__PURE__*/React.createElement("span", null, time), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        gap: 7,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "wifi",
      size: 15,
      color: col,
      strokeWidth: 2.4
    }), /*#__PURE__*/React.createElement(Icon, {
      name: "signal",
      size: 15,
      color: col,
      strokeWidth: 2.4
    }), /*#__PURE__*/React.createElement(Icon, {
      name: "battery-full",
      size: 17,
      color: col,
      strokeWidth: 2.2
    })));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: h,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "12px 30px 0",
      color: col,
      fontWeight: 700,
      fontSize: 15.5,
      position: "relative",
      zIndex: 5,
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      letterSpacing: ".01em",
      fontFamily: "var(--font-tab)"
    }
  }, time), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      gap: 6,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "signal-high",
    size: 17,
    color: col,
    strokeWidth: 2.4
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "wifi",
    size: 16,
    color: col,
    strokeWidth: 2.4
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "battery-full",
    size: 22,
    color: col,
    strokeWidth: 2
  })));
}

// ---- Bottom system affordance -----------------------------
function NavAffordance({
  platform,
  dark
}) {
  const tint = dark ? "rgba(255,255,255,.55)" : "rgba(20,33,31,.32)";
  if (platform === "android") {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        height: 30,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 132,
        height: 4.5,
        borderRadius: 999,
        background: tint
      }
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 26,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 138,
      height: 5,
      borderRadius: 999,
      background: tint
    }
  }));
}

// ---- Phone frame ------------------------------------------
function PhoneFrame({
  platform = "ios",
  statusBg = "var(--c-surface)",
  statusDark = true,
  navBg,
  dark,
  children,
  w = 384,
  screenH,
  tall,
  label,
  style,
  bare
}) {
  const isIos = platform === "ios";
  const bezel = isIos ? 15 : 13;
  const outerR = isIos ? 58 : 46;
  const innerR = outerR - bezel;
  const nb = navBg || statusBg;
  return /*#__PURE__*/React.createElement("figure", {
    className: "cn-artifact",
    style: {
      margin: 0,
      width: bare ? w : w + bezel * 2,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: bare ? w : w + bezel * 2,
      padding: bare ? 0 : bezel,
      borderRadius: bare ? 0 : outerR,
      background: bare ? "transparent" : dark ? "#1A1A1C" : "#0C1413",
      boxShadow: bare ? "none" : "var(--sh-3), inset 0 0 0 1.5px rgba(255,255,255,.06)",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: w,
      borderRadius: bare ? 0 : innerR,
      overflow: "hidden",
      position: "relative",
      background: "var(--c-surface)",
      height: tall ? "auto" : screenH || (isIos ? 832 : 864),
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: statusBg,
      position: "relative",
      flex: "0 0 auto"
    }
  }, /*#__PURE__*/React.createElement(StatusBar, {
    platform: platform,
    dark: statusDark
  }), bare ? null : isIos ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 9,
      left: "50%",
      transform: "translateX(-50%)",
      width: 108,
      height: 30,
      borderRadius: 999,
      background: "#0C1413"
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 13,
      left: "50%",
      transform: "translateX(-50%)",
      width: 11,
      height: 11,
      borderRadius: 999,
      background: "#0C1413",
      boxShadow: "0 0 0 2.5px rgba(0,0,0,.25)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 auto",
      minHeight: 0,
      display: "flex",
      flexDirection: "column"
    }
  }, children), /*#__PURE__*/React.createElement("div", {
    style: {
      background: nb,
      flex: "0 0 auto"
    }
  }, /*#__PURE__*/React.createElement(NavAffordance, {
    platform: platform,
    dark: !statusDark && nb !== "var(--c-surface)"
  })))), label && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: 16,
      textAlign: "center",
      fontSize: 13,
      fontWeight: 600,
      color: "var(--c-ink-3)",
      letterSpacing: ".01em"
    }
  }, label));
}
Object.assign(window, {
  PhoneFrame,
  StatusBar,
  NavAffordance,
  SAFE
});
})();

/* lib/viz */
(function(){
/* CardioNexion 2025 — Data visualisations
   Health-score gauge, progress rings, animated ECG trace,
   trend area-charts, weekly bars, sparklines. Babel script. */

// ---- in-view hook (gates entrance animations) -------------
// Geometry-based (not IntersectionObserver) so it works in
// offscreen/embedded iframes. Retries on timers + scroll, and
// reveals unconditionally if the viewport can't be measured.
function useInView() {
  const ref = React.useRef(null);
  const [seen, setSeen] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || seen) return;
    let done = false;
    const reveal = () => {
      if (!done) {
        done = true;
        cleanup();
        setSeen(true);
      }
    };
    const check = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight || 0;
      if (vh === 0) {
        reveal();
        return true;
      } // can't measure -> just show
      if (r.top < vh * 0.92 && r.bottom > 0) {
        reveal();
        return true;
      }
      return false;
    };
    const on = () => check();
    window.addEventListener("scroll", on, {
      passive: true
    });
    window.addEventListener("resize", on);
    const timers = [requestAnimationFrame(check), setTimeout(check, 80), setTimeout(check, 350), setTimeout(check, 1000), setTimeout(reveal, 700)]; // 700ms: guaranteed reveal, never stay hidden
    function cleanup() {
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
      cancelAnimationFrame(timers[0]);
      timers.slice(1).forEach(clearTimeout);
    }
    el.__cleanup = cleanup;
    return cleanup;
  }, [seen]);
  return [ref, seen];
}

// ---- ECG path builder -------------------------------------
function ecgPath(beats, W, H, amp) {
  const midY = H / 2;
  const beat = [[0.00, 0], [0.12, 0], [0.18, 0.14], [0.24, 0], [0.32, 0], [0.36, -0.20], [0.40, 1.0], [0.44, -0.40], [0.48, 0], [0.64, 0.34], [0.78, 0], [1.0, 0]];
  const bw = W / beats;
  let d = "";
  for (let b = 0; b < beats; b++) {
    beat.forEach(([fx, fy], i) => {
      const x = (b + fx) * bw,
        y = midY - fy * amp;
      d += (b === 0 && i === 0 ? "M" : "L") + x.toFixed(1) + "," + y.toFixed(1) + " ";
    });
  }
  return d.trim();
}

// ---- Animated ECG trace -----------------------------------
function EcgTrace({
  height = 120,
  beats = 5,
  color = "var(--ecg-trace)",
  strokeW = 2.4,
  grid = true,
  animated = true,
  glow = true
}) {
  const W = 600,
    amp = height * 0.30;
  const [ref, seen] = useInView();
  const d = ecgPath(beats, W, height, amp);
  const len = 1800;
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: "relative",
      width: "100%",
      height,
      background: grid ? "var(--ecg-bg)" : "transparent",
      borderRadius: grid ? "var(--r-sm)" : 0,
      overflow: "hidden"
    }
  }, grid && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "repeating-linear-gradient(to right, var(--ecg-grid) 0 1px, transparent 1px 16px),repeating-linear-gradient(to bottom, var(--ecg-grid) 0 1px, transparent 1px 16px)"
    }
  }), /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${W} ${height}`,
    preserveAspectRatio: "none",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%"
    }
  }, glow && /*#__PURE__*/React.createElement("path", {
    d: d,
    fill: "none",
    stroke: color,
    strokeWidth: strokeW + 4,
    strokeLinejoin: "round",
    strokeLinecap: "round",
    opacity: "0.18",
    style: {
      filter: "blur(3px)"
    }
  }), /*#__PURE__*/React.createElement("path", {
    d: d,
    fill: "none",
    stroke: color,
    strokeWidth: strokeW,
    strokeLinejoin: "round",
    strokeLinecap: "round",
    style: animated ? {
      strokeDasharray: len,
      strokeDashoffset: seen ? 0 : len,
      transition: "stroke-dashoffset 2.2s cubic-bezier(.4,0,.2,1)"
    } : {}
  })));
}

// ---- Circular score gauge (270° sweep) --------------------
function ScoreGauge({
  value = 86,
  max = 100,
  size = 188,
  stroke = 16,
  color = "var(--brand-500)",
  track = "var(--c-surface-3)",
  label = "Cardiac Wellness",
  sub
}) {
  const [ref, seen] = useInView();
  const r = (size - stroke) / 2;
  const cx = size / 2,
    cy = size / 2;
  const sweep = 0.75; // 270°
  const circ = 2 * Math.PI * r;
  const arc = circ * sweep;
  const frac = Math.min(value / max, 1);
  const gid = "g" + Math.round(value * 97 % 9999);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: "relative",
      width: size,
      height: size
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    style: {
      transform: "rotate(135deg)"
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: gid,
    x1: "0",
    y1: "0",
    x2: "1",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "var(--brand-700)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "0.6",
    stopColor: "var(--brand-400)"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "var(--green-500)"
  }))), /*#__PURE__*/React.createElement("circle", {
    cx: cx,
    cy: cy,
    r: r,
    fill: "none",
    stroke: track,
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeDasharray: `${arc} ${circ}`
  }), /*#__PURE__*/React.createElement("circle", {
    cx: cx,
    cy: cy,
    r: r,
    fill: "none",
    stroke: `url(#${gid})`,
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeDasharray: `${arc * (seen ? frac : 0)} ${circ}`,
    style: {
      transition: "stroke-dasharray 1.6s cubic-bezier(.34,1.2,.4,1)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-num)",
      fontWeight: 800,
      fontSize: size * 0.30,
      lineHeight: 1,
      color: "var(--c-ink)",
      letterSpacing: "-.02em"
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: size * 0.072,
      fontWeight: 600,
      color: "var(--c-ink-3)",
      marginTop: 2
    }
  }, "/ ", max), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: size * 0.072,
      fontWeight: 600,
      color: "var(--brand-600)",
      marginTop: 6,
      maxWidth: size * 0.7
    }
  }, label), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: size * 0.062,
      color: "var(--c-ink-3)",
      marginTop: 2
    }
  }, sub)));
}

// ---- Progress ring (full circle) --------------------------
function Ring({
  value = 70,
  size = 64,
  stroke = 7,
  color = "var(--brand-500)",
  track = "var(--c-surface-3)",
  children
}) {
  const [ref, seen] = useInView();
  const r = (size - stroke) / 2,
    circ = 2 * Math.PI * r;
  const frac = Math.min(value / 100, 1);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: "relative",
      width: size,
      height: size
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    style: {
      transform: "rotate(-90deg)"
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: track,
    strokeWidth: stroke
  }), /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: color,
    strokeWidth: stroke,
    strokeLinecap: "round",
    strokeDasharray: circ,
    strokeDashoffset: seen ? circ * (1 - frac) : circ,
    style: {
      transition: "stroke-dashoffset 1.4s cubic-bezier(.34,1.1,.4,1)"
    }
  })), children && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, children));
}

// ---- Trend area chart -------------------------------------
function TrendChart({
  data = [],
  height = 120,
  color = "var(--brand-500)",
  fill = true,
  strokeW = 2.5,
  dots = false,
  axis = false,
  labels
}) {
  const [ref, seen] = useInView();
  const W = 320,
    H = height,
    pad = 8;
  const min = Math.min(...data),
    max = Math.max(...data);
  const rng = max - min || 1;
  const xs = i => pad + i / (data.length - 1) * (W - pad * 2);
  const ys = v => pad + (1 - (v - min) / rng) * (H - pad * 2 - (labels ? 16 : 0));
  // smooth path
  let d = "";
  data.forEach((v, i) => {
    const x = xs(i),
      y = ys(v);
    if (i === 0) {
      d += `M${x},${y}`;
      return;
    }
    const px = xs(i - 1),
      py = ys(data[i - 1]);
    const cx = (px + x) / 2;
    d += ` C${cx},${py} ${cx},${y} ${x},${y}`;
  });
  const area = d + ` L${xs(data.length - 1)},${H - pad - (labels ? 16 : 0)} L${xs(0)},${H - pad - (labels ? 16 : 0)} Z`;
  const fid = "f" + Math.round(Math.random() * 1e6);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${W} ${H}`,
    preserveAspectRatio: "none",
    style: {
      width: "100%",
      height,
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: fid,
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: color,
    stopOpacity: "0.26"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: color,
    stopOpacity: "0"
  }))), fill && /*#__PURE__*/React.createElement("path", {
    d: area,
    fill: `url(#${fid})`,
    style: {
      opacity: seen ? 1 : 0,
      transition: "opacity 1s ease .3s"
    }
  }), /*#__PURE__*/React.createElement("path", {
    d: d,
    fill: "none",
    stroke: color,
    strokeWidth: strokeW,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    pathLength: "1",
    style: {
      strokeDasharray: 1,
      strokeDashoffset: seen ? 0 : 1,
      transition: "stroke-dashoffset 1.6s cubic-bezier(.4,0,.2,1)"
    }
  }), dots && data.map((v, i) => /*#__PURE__*/React.createElement("circle", {
    key: i,
    cx: xs(i),
    cy: ys(v),
    r: "3",
    fill: "var(--c-surface)",
    stroke: color,
    strokeWidth: "2",
    style: {
      opacity: seen ? 1 : 0,
      transition: `opacity .4s ease ${0.8 + i * 0.06}s`
    }
  }))), labels && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: 2
    }
  }, labels.map((l, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontSize: "var(--t-cap)",
      color: "var(--c-ink-4)",
      fontWeight: 600
    }
  }, l))));
}

// ---- Weekly bars ------------------------------------------
function Bars({
  data = [],
  height = 96,
  color = "var(--brand-400)",
  labels,
  highlight = -1
}) {
  const [ref, seen] = useInView();
  const max = Math.max(...data) || 1;
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      gap: 7,
      height
    }
  }, data.map((v, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      borderRadius: 6,
      background: i === highlight ? "var(--brand-700)" : color,
      height: seen ? `${v / max * 100}%` : "2%",
      transition: `height .9s cubic-bezier(.34,1.1,.4,1) ${i * 0.05}s`
    }
  })))), labels && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 7,
      marginTop: 7
    }
  }, labels.map((l, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      flex: 1,
      textAlign: "center",
      fontSize: "var(--t-cap)",
      color: i === highlight ? "var(--brand-700)" : "var(--c-ink-4)",
      fontWeight: 700
    }
  }, l))));
}
Object.assign(window, {
  useInView,
  ecgPath,
  EcgTrace,
  ScoreGauge,
  Ring,
  TrendChart,
  Bars
});
})();

/* lib/ui */
(function(){
/* CardioNexion 2025 — Product UI primitives. Babel script. */

function Card({
  children,
  style,
  pad = 18,
  soft,
  onClick,
  accent
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      background: "var(--c-surface)",
      borderRadius: "var(--r-md)",
      padding: pad,
      boxShadow: soft ? "var(--sh-1)" : "var(--sh-2)",
      border: "1px solid var(--c-hairline)",
      ...(accent ? {
        borderLeft: `4px solid ${accent}`
      } : {}),
      ...style
    }
  }, children);
}

// status -> color map
const STATUS = {
  stable: {
    c: "var(--green-600)",
    bg: "var(--green-50)",
    bd: "var(--green-100)",
    label: "Stable"
  },
  monitor: {
    c: "var(--amber-600)",
    bg: "var(--amber-50)",
    bd: "var(--amber-100)",
    label: "Monitor"
  },
  critical: {
    c: "var(--red-600)",
    bg: "var(--red-50)",
    bd: "var(--red-100)",
    label: "Critical"
  },
  info: {
    c: "var(--blue-600)",
    bg: "var(--blue-50)",
    bd: "var(--blue-100)",
    label: "Info"
  }
};
function StatusBadge({
  status = "stable",
  label,
  dot = true,
  size = "md"
}) {
  const s = STATUS[status];
  const big = size === "lg";
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      padding: big ? "8px 14px" : "5px 11px",
      borderRadius: 999,
      background: s.bg,
      border: `1px solid ${s.bd}`,
      color: s.c,
      fontWeight: 700,
      fontSize: big ? "var(--t-foot)" : "var(--t-cap)",
      letterSpacing: ".01em"
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: big ? 9 : 7,
      height: big ? 9 : 7,
      borderRadius: 999,
      background: s.c
    }
  }), label || s.label);
}
function Btn({
  children,
  variant = "primary",
  full,
  size = "md",
  icon,
  iconRight,
  onClick,
  style
}) {
  const h = size === "lg" ? 56 : size === "sm" ? 40 : 50;
  const skins = {
    primary: {
      background: "var(--brand-700)",
      color: "#fff",
      border: "1px solid transparent"
    },
    bright: {
      background: "var(--brand-500)",
      color: "#fff",
      border: "1px solid transparent"
    },
    tint: {
      background: "var(--brand-50)",
      color: "var(--brand-700)",
      border: "1px solid var(--brand-100)"
    },
    outline: {
      background: "transparent",
      color: "var(--c-ink)",
      border: "1.5px solid var(--c-hairline)"
    },
    ghost: {
      background: "transparent",
      color: "var(--brand-700)",
      border: "1px solid transparent"
    },
    danger: {
      background: "var(--red-500)",
      color: "#fff",
      border: "1px solid transparent"
    },
    dark: {
      background: "var(--brand-900)",
      color: "#fff",
      border: "1px solid transparent"
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      height: h,
      padding: size === "lg" ? "0 26px" : "0 20px",
      borderRadius: "var(--r-pill)",
      width: full ? "100%" : "auto",
      cursor: "pointer",
      fontFamily: "var(--font)",
      fontWeight: 700,
      fontSize: size === "lg" ? "var(--t-headline)" : "var(--t-body)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 9,
      letterSpacing: ".01em",
      ...skins[variant],
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: size === "lg" ? 21 : 18,
    strokeWidth: 2.2
  }), children, iconRight && /*#__PURE__*/React.createElement(Icon, {
    name: iconRight,
    size: size === "lg" ? 21 : 18,
    strokeWidth: 2.2
  }));
}
function IconBtn({
  name,
  size = 42,
  icon = 20,
  onClick,
  tint = "var(--c-surface-3)",
  color = "var(--c-ink)",
  style
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      width: size,
      height: size,
      borderRadius: 999,
      border: "none",
      background: tint,
      color,
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flex: `0 0 ${size}px`,
      ...style
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: name,
    size: icon,
    strokeWidth: 2.2,
    color: color
  }));
}

/* Global app chrome — menu + wordmark + bell + avatar (matches Home) */
function TopBar({
  title = "CardioNexion",
  initials = "JD",
  dot = true,
  left,
  onMenu
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "6px 18px 4px",
      background: "var(--c-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      flex: "0 0 auto",
      width: 74
    }
  }, left || /*#__PURE__*/React.createElement(Icon, {
    name: "menu",
    size: 24,
    color: "var(--brand-900)",
    strokeWidth: 2.2
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--t-headline)",
      fontWeight: 700,
      color: "var(--brand-700)",
      letterSpacing: "-.01em"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      flex: "0 0 auto",
      width: 74,
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bell",
    size: 22,
    color: "var(--brand-900)",
    strokeWidth: 2
  }), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: -1,
      right: -1,
      width: 8,
      height: 8,
      borderRadius: 999,
      background: "var(--amber-500)",
      border: "1.5px solid var(--c-page)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 999,
      background: "var(--c-surface-3)",
      border: "1px solid var(--c-hairline)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 11.5,
      fontWeight: 700,
      color: "var(--c-ink-2)"
    }
  }, initials)));
}

/* Small white pill used for dates / ranges */
function Pill({
  children,
  tone = "surface"
}) {
  const tones = {
    surface: {
      background: "var(--c-surface)",
      color: "var(--c-ink)",
      border: "1px solid var(--c-hairline)",
      boxShadow: "var(--sh-1)"
    },
    inset: {
      background: "var(--c-surface-3)",
      color: "var(--c-ink-2)",
      border: "1px solid transparent"
    },
    live: {
      background: "var(--red-50)",
      color: "var(--red-600)",
      border: "1px solid var(--red-100)"
    },
    good: {
      background: "var(--green-50)",
      color: "var(--green-600)",
      border: "1px solid var(--green-100)"
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "6px 12px",
      borderRadius: 999,
      fontSize: "var(--t-foot)",
      fontWeight: 700,
      whiteSpace: "nowrap",
      ...tones[tone]
    }
  }, children);
}

/* Section heading: bold ink title + quiet right meta (Home pattern) */
function SectionHead({
  children,
  meta,
  action,
  italic,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12,
      margin: "26px 0 12px",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--t-headline)",
      fontWeight: 800,
      color: "var(--c-ink)",
      letterSpacing: "-.01em"
    }
  }, children), meta && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--t-foot)",
      color: "var(--c-ink-4)",
      fontStyle: italic ? "italic" : "normal",
      whiteSpace: "nowrap"
    }
  }, meta), action && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 3,
      fontSize: "var(--t-foot)",
      fontWeight: 700,
      color: "var(--brand-700)",
      whiteSpace: "nowrap"
    }
  }, action, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 15,
    strokeWidth: 2.4
  })));
}

/* Thin progress track used on glance cards */
function MiniBar({
  value = 60,
  color = "var(--green-500)"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      borderRadius: 999,
      background: "var(--c-surface-3)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${Math.min(value, 100)}%`,
      height: "100%",
      borderRadius: 999,
      background: color
    }
  }));
}

/* Segmented device-status strip */
function StatusStrip({
  items = []
}) {
  return /*#__PURE__*/React.createElement(Card, {
    pad: 0,
    soft: true,
    style: {
      borderRadius: "var(--r-sm)",
      display: "flex",
      alignItems: "stretch",
      overflow: "hidden"
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 7,
      padding: "12px 10px",
      borderLeft: i ? "1px solid var(--c-hairline)" : "none",
      minWidth: 0
    }
  }, it.dot ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 999,
      background: it.color || "var(--green-500)",
      flex: "0 0 8px"
    }
  }) : /*#__PURE__*/React.createElement(Icon, {
    name: it.icon,
    size: 16,
    color: it.color || "var(--c-ink-3)",
    strokeWidth: 2.1
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--t-foot)",
      fontWeight: 600,
      color: "var(--c-ink-2)",
      lineHeight: 1.25
    }
  }, it.label))));
}
function AppBar({
  title,
  big,
  left,
  right,
  bg = "var(--c-page)",
  color = "var(--c-ink)",
  sub,
  pill
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      padding: big ? "10px 18px 14px" : "8px 18px 12px",
      display: "flex",
      alignItems: big ? "flex-end" : "center",
      justifyContent: "space-between",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, left, sub && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--t-foot)",
      fontWeight: 500,
      color,
      opacity: .62,
      marginBottom: 1
    }
  }, sub), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: big ? "30px" : "var(--t-title)",
      letterSpacing: "-.01em",
      color,
      lineHeight: 1.08
    }
  }, title)), pill ? /*#__PURE__*/React.createElement(Pill, null, pill) : right && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center",
      flex: "0 0 auto"
    }
  }, right));
}
function ListRow({
  icon,
  iconBg,
  iconColor = "var(--brand-700)",
  title,
  sub,
  right,
  onClick,
  last,
  lead
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      padding: "14px 0",
      borderBottom: last ? "none" : "1px solid var(--c-hairline)",
      cursor: onClick ? "pointer" : "default"
    }
  }, lead || icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 42,
      height: 42,
      borderRadius: 13,
      flex: "0 0 42px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: iconBg || "var(--brand-50)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 21,
    color: iconColor,
    strokeWidth: 2
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--t-body)",
      fontWeight: 600,
      color: "var(--c-ink)"
    }
  }, title), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--t-foot)",
      color: "var(--c-ink-3)",
      marginTop: 2
    }
  }, sub)), right);
}
function Toggle({
  on = true,
  color = "var(--green-500)"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 50,
      height: 30,
      borderRadius: 999,
      background: on ? color : "var(--c-surface-3)",
      position: "relative",
      flex: "0 0 50px",
      transition: "background .2s"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 3,
      left: on ? 23 : 3,
      width: 24,
      height: 24,
      borderRadius: 999,
      background: "#fff",
      boxShadow: "0 1px 3px rgba(0,0,0,.25)",
      transition: "left .2s"
    }
  }));
}
function Metric({
  icon,
  iconColor = "var(--brand-600)",
  label,
  value,
  unit,
  sub,
  trend
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 7,
      color: "var(--c-ink-3)"
    }
  }, icon && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 16,
    color: iconColor,
    strokeWidth: 2.2
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--t-cap)",
      fontWeight: 700,
      letterSpacing: ".04em",
      textTransform: "uppercase"
    }
  }, label)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-num)",
      fontSize: "var(--t-title)",
      fontWeight: 800,
      color: "var(--c-ink)",
      letterSpacing: "-.02em"
    }
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--t-foot)",
      fontWeight: 700,
      color: "var(--c-ink-3)"
    }
  }, unit)), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--t-cap)",
      color: trend === "up" ? "var(--green-600)" : trend === "down" ? "var(--red-600)" : "var(--c-ink-3)",
      fontWeight: 600
    }
  }, sub));
}
function Avatar({
  name = "",
  size = 44,
  img,
  ring
}) {
  const initials = name.split(" ").map(w => w[0]).slice(0, 2).join("").toUpperCase();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: 999,
      flex: `0 0 ${size}px`,
      overflow: "hidden",
      background: "var(--brand-100)",
      color: "var(--brand-700)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 700,
      fontSize: size * 0.36,
      fontFamily: "var(--font)",
      ...(ring ? {
        boxShadow: `0 0 0 2.5px var(--c-surface), 0 0 0 4.5px ${ring}`
      } : {})
    }
  }, img ? /*#__PURE__*/React.createElement("img", {
    src: img,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials);
}

// platform-aware bottom tab bar
function TabBar({
  platform = "ios",
  active = 0,
  items
}) {
  const tabs = items || [{
    icon: "house",
    label: "Home"
  }, {
    icon: "activity",
    label: "Heart"
  }, {
    icon: "bell",
    label: "Alerts"
  }, {
    icon: "user-round",
    label: "Care"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      background: "var(--c-surface)",
      borderTop: "1px solid var(--c-hairline)",
      padding: platform === "ios" ? "10px 6px 4px" : "10px 8px"
    }
  }, tabs.map((t, i) => {
    const on = i === active;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        color: on ? "var(--brand-700)" : "var(--c-ink-4)",
        position: "relative"
      }
    }, platform === "android" && on && /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        top: -2,
        width: 56,
        height: 30,
        borderRadius: 999,
        background: "var(--brand-50)"
      }
    }), /*#__PURE__*/React.createElement(Icon, {
      name: t.icon,
      size: 23,
      strokeWidth: on ? 2.4 : 2,
      fill: on && platform === "ios" ? "var(--brand-100)" : "none",
      style: {
        position: "relative"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        fontWeight: on ? 700 : 600,
        position: "relative"
      }
    }, t.label));
  }));
}
function SegTabs({
  items = [],
  active = 0
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      background: "var(--c-surface-3)",
      borderRadius: 999,
      padding: 4,
      gap: 2
    }
  }, items.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      textAlign: "center",
      padding: "9px 4px",
      borderRadius: 999,
      fontSize: "var(--t-foot)",
      fontWeight: 700,
      background: i === active ? "var(--c-surface)" : "transparent",
      color: i === active ? "var(--c-ink)" : "var(--c-ink-3)",
      boxShadow: i === active ? "var(--sh-1)" : "none"
    }
  }, t)));
}
Object.assign(window, {
  Card,
  StatusBadge,
  STATUS,
  Btn,
  IconBtn,
  AppBar,
  TopBar,
  Pill,
  SectionHead,
  MiniBar,
  StatusStrip,
  ListRow,
  Toggle,
  Metric,
  Avatar,
  TabBar,
  SegTabs
});
})();

/* lib/browser */
(function(){
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* CardioNexion 2025 — Desktop chrome + dashboard shell for the
   clinical back-office (Doctor / MO / Supervisor consoles). Babel script. */

// ---- Browser window frame ---------------------------------
function BrowserFrame({
  url = "app.cardionexion.health",
  w = 1180,
  h = 720,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "cn-artifact",
    style: {
      width: w,
      borderRadius: 16,
      overflow: "hidden",
      background: "#0C1413",
      boxShadow: "var(--sh-3)",
      border: "1px solid var(--c-hairline)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 46,
      display: "flex",
      alignItems: "center",
      gap: 14,
      padding: "0 16px",
      background: "linear-gradient(180deg,#14201F,#0C1413)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, ["#FF5F57", "#FEBC2E", "#28C840"].map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    style: {
      width: 12,
      height: 12,
      borderRadius: 999,
      background: c
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      height: 28,
      padding: "0 18px",
      background: "rgba(255,255,255,.07)",
      borderRadius: 999,
      color: "rgba(255,255,255,.62)",
      fontSize: 12.5,
      fontWeight: 600,
      fontFamily: "var(--font)",
      maxWidth: 440
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lock",
    size: 12,
    color: "rgba(255,255,255,.5)",
    strokeWidth: 2.4
  }), url)), /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 16,
    color: "rgba(255,255,255,.4)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: h,
      overflow: "hidden",
      background: "var(--c-page)",
      position: "relative"
    }
  }, children));
}

// ---- Sidebar nav item -------------------------------------
function NavItem({
  icon,
  label,
  active,
  badge
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      height: 44,
      padding: "0 14px",
      borderRadius: 12,
      background: active ? "var(--brand-50)" : "transparent",
      color: active ? "var(--brand-700)" : "var(--c-ink-3)",
      fontWeight: active ? 700 : 600,
      fontSize: 14.5,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 20,
    strokeWidth: active ? 2.3 : 2,
    color: active ? "var(--brand-700)" : "var(--c-ink-3)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, label), badge != null && /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 22,
      height: 22,
      padding: "0 6px",
      borderRadius: 999,
      background: active ? "var(--brand-700)" : "var(--c-surface-3)",
      color: active ? "#fff" : "var(--c-ink-3)",
      fontSize: 12,
      fontWeight: 800,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, badge));
}

// ---- Dashboard shell (sidebar + topbar + content) ---------
function DashShell({
  role,
  roleIcon = "stethoscope",
  nav = [],
  title,
  sub,
  topRight,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      height: "100%",
      fontFamily: "var(--font)",
      color: "var(--c-ink)"
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 224,
      flex: "0 0 224px",
      background: "var(--c-surface)",
      borderRight: "1px solid var(--c-hairline)",
      display: "flex",
      flexDirection: "column",
      padding: "18px 14px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9,
      padding: "4px 8px 18px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      borderRadius: 9,
      background: "var(--brand-700)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "heart-pulse",
    size: 17,
    color: "#fff",
    strokeWidth: 2.4
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      letterSpacing: ".04em",
      fontSize: 16
    }
  }, "@-HEALTH")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "8px 10px",
      marginBottom: 14,
      borderRadius: 12,
      background: "var(--brand-900)",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: roleIcon,
    size: 17,
    color: "var(--brand-400)",
    strokeWidth: 2.2
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      fontWeight: 700,
      letterSpacing: ".02em"
    }
  }, role)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 3
    }
  }, nav.map((n, i) => /*#__PURE__*/React.createElement(NavItem, _extends({
    key: i
  }, n)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "10px 8px",
      borderTop: "1px solid var(--c-hairline)"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: role,
    size: 34
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, "James Shaw"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: "var(--c-ink-4)"
    }
  }, role)))), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      minWidth: 0,
      display: "flex",
      flexDirection: "column",
      background: "var(--c-page)"
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      height: 66,
      flex: "0 0 66px",
      borderBottom: "1px solid var(--c-hairline)",
      background: "var(--c-surface)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 26px"
    }
  }, /*#__PURE__*/React.createElement("div", null, sub && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      fontWeight: 700,
      letterSpacing: ".12em",
      textTransform: "uppercase",
      color: "var(--brand-600)"
    }
  }, sub), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 800,
      letterSpacing: "-.02em",
      lineHeight: 1.1
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, topRight)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      overflow: "hidden",
      padding: 26
    }
  }, children)));
}

// ---- shared bits ------------------------------------------
function Search({
  ph = "Search patients, tickets…",
  w = 230
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9,
      width: w,
      height: 40,
      padding: "0 14px",
      borderRadius: 999,
      background: "var(--c-surface-3)",
      color: "var(--c-ink-4)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 16,
    color: "var(--c-ink-4)",
    strokeWidth: 2.2
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13.5
    }
  }, ph));
}

// criticality triangle + label (clinical)
function Crit({
  level,
  sm
}) {
  const red = level === "Critical";
  const c = red ? "var(--red-600)" : "var(--amber-600)";
  const bg = red ? "var(--red-50)" : "var(--amber-50)";
  const bd = red ? "var(--red-100)" : "var(--amber-100)";
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      padding: sm ? "3px 9px" : "5px 11px",
      borderRadius: 999,
      background: bg,
      border: `1px solid ${bd}`,
      color: c,
      fontWeight: 700,
      fontSize: sm ? 12 : 13
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "triangle-alert",
    size: sm ? 13 : 15,
    color: c,
    strokeWidth: 2.3
  }), level);
}

// countdown ring (the MO/MOS 2-minute action timer)
function Countdown({
  remain = 84,
  total = 120,
  size = 132,
  danger
}) {
  const r = (size - 12) / 2,
    circ = 2 * Math.PI * r;
  const frac = remain / total;
  const col = danger || frac < 0.3 ? "var(--red-500)" : frac < 0.6 ? "var(--amber-500)" : "var(--brand-500)";
  const mm = Math.floor(remain / 60),
    ss = String(remain % 60).padStart(2, "0");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: size,
      height: size
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    style: {
      transform: "rotate(-90deg)"
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: "var(--c-surface-3)",
    strokeWidth: 12
  }), /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: col,
    strokeWidth: 12,
    strokeLinecap: "round",
    strokeDasharray: circ,
    strokeDashoffset: circ * (1 - frac)
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-num)",
      fontSize: size * 0.26,
      fontWeight: 800,
      color: "var(--c-ink)",
      letterSpacing: "-.02em"
    }
  }, mm, ":", ss), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: ".1em",
      textTransform: "uppercase",
      color: "var(--c-ink-4)",
      marginTop: 2
    }
  }, "to act")));
}
Object.assign(window, {
  BrowserFrame,
  DashShell,
  NavItem,
  Search,
  Crit,
  Countdown
});
})();

/* screens/home */
(function(){
/* CardioNexion 2025 — Home / Cardiac Wellness dashboard (hero) */

function GlanceCard({
  icon,
  iconColor,
  tint,
  value,
  unit,
  label,
  bar,
  barCaption,
  barColor,
  chip,
  chipTone = "good",
  delta
}) {
  return /*#__PURE__*/React.createElement(Card, {
    pad: 15,
    soft: true,
    style: {
      borderRadius: 18,
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 11,
      background: tint,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "0 0 34px"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 18,
    color: iconColor,
    strokeWidth: 2.2
  })), chip && /*#__PURE__*/React.createElement(Pill, {
    tone: chipTone
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--t-cap)"
    }
  }, chip))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-num)",
      fontSize: "var(--t-title)",
      color: "var(--c-ink)",
      letterSpacing: "-.01em",
      lineHeight: 1
    }
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--t-foot)",
      fontWeight: 700,
      color: "var(--c-ink-3)"
    }
  }, unit)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--t-foot)",
      color: "var(--c-ink-3)",
      marginTop: 5
    }
  }, label)), bar != null && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(MiniBar, {
    value: bar,
    color: barColor || "var(--brand-600)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--t-cap)",
      fontWeight: 700,
      color: "var(--c-ink-2)"
    }
  }, barCaption)), delta && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--t-cap)",
      fontWeight: 700,
      color: "var(--c-ink-2)"
    }
  }, delta));
}
function InsightCard({
  icon,
  iconColor,
  text,
  tint
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "0 0 258px",
      background: tint,
      border: "1px solid var(--brand-100)",
      borderRadius: 18,
      padding: 16,
      display: "flex",
      gap: 12,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 999,
      background: "var(--c-surface)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "0 0 34px",
      boxShadow: "var(--sh-1)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 17,
    color: iconColor,
    strokeWidth: 2.2
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--t-foot)",
      fontWeight: 600,
      color: "var(--c-ink)",
      lineHeight: 1.4
    }
  }, text));
}
function TrendStat({
  label,
  value,
  unit
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--t-cap)",
      fontWeight: 700,
      color: "var(--c-ink-3)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 5,
      fontFamily: "var(--font-num)",
      fontSize: "var(--t-title)",
      color: "var(--c-ink)",
      lineHeight: 1
    }
  }, value, unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font)",
      fontSize: "var(--t-foot)",
      fontWeight: 700,
      color: "var(--c-ink-2)"
    }
  }, " ", unit)));
}
function PersonCard({
  initials,
  ring,
  tint,
  name,
  role,
  action,
  variant
}) {
  return /*#__PURE__*/React.createElement(Card, {
    pad: 16,
    soft: true,
    style: {
      borderRadius: 18,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 4,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 999,
      background: tint,
      border: `1.5px solid ${ring}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 17,
      fontWeight: 700,
      color: ring,
      marginBottom: 6
    }
  }, initials), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--t-body)",
      fontWeight: 700,
      color: "var(--c-ink)"
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--t-foot)",
      color: "var(--c-ink-3)"
    }
  }, role), /*#__PURE__*/React.createElement("button", {
    style: {
      marginTop: 12,
      width: "100%",
      height: 44,
      borderRadius: 999,
      cursor: "pointer",
      fontFamily: "var(--font)",
      fontSize: "var(--t-foot)",
      fontWeight: 700,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 7,
      background: "var(--c-surface)",
      color: "var(--brand-700)",
      border: "1.5px solid var(--brand-200)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: variant === "call" ? "phone" : "message-square",
    size: 15,
    strokeWidth: 2.3
  }), action));
}
function AlertCardRow({
  icon,
  iconColor,
  tint,
  title,
  time,
  timeColor
}) {
  return /*#__PURE__*/React.createElement(Card, {
    pad: 14,
    soft: true,
    style: {
      borderRadius: 18,
      display: "flex",
      alignItems: "center",
      gap: 13,
      minHeight: 44
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 999,
      background: tint,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "0 0 36px"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 18,
    color: iconColor,
    strokeWidth: 2.1
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--t-foot)",
      fontWeight: 700,
      color: "var(--c-ink)",
      lineHeight: 1.35
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--t-cap)",
      color: timeColor || "var(--c-ink-3)",
      marginTop: 3
    }
  }, time)), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 18,
    color: "var(--c-ink-4)",
    strokeWidth: 2.2
  }));
}
function HomeScreen({
  platform = "ios"
}) {
  const onDark = "rgba(255,255,255,.8)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--c-page)",
      flex: 1,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement(TopBar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "0 18px 18px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: 12,
      margin: "16px 0 14px"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--t-foot)",
      color: "var(--c-ink-3)"
    }
  }, "Good morning,"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--t-display)",
      color: "var(--c-ink)",
      lineHeight: 1.1,
      letterSpacing: "-.01em"
    }
  }, "John.")), /*#__PURE__*/React.createElement(Pill, null, "Thu, 12 Jun")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 24,
      overflow: "hidden",
      padding: "22px 22px 18px",
      background: "linear-gradient(155deg, var(--brand-900) 0%, #0A4B55 55%, var(--brand-700) 100%)",
      boxShadow: "var(--sh-float)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      opacity: .35
    }
  }, /*#__PURE__*/React.createElement(EcgTrace, {
    height: 190,
    beats: 5,
    color: "rgba(255,255,255,.12)",
    strokeW: 2,
    grid: false,
    glow: false,
    animated: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--t-foot)",
      fontWeight: 700,
      color: onDark
    }
  }, "Cardiac wellness"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      gap: 2,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-num)",
      fontSize: "var(--t-score)",
      color: "#fff",
      lineHeight: .92,
      letterSpacing: "-.02em"
    }
  }, "86"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--t-body)",
      fontWeight: 600,
      color: onDark,
      paddingBottom: 5
    }
  }, "/100"))), /*#__PURE__*/React.createElement("button", {
    "aria-label": "What is the cardiac wellness score?",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      height: 44,
      padding: "0 14px",
      borderRadius: 999,
      cursor: "pointer",
      background: "rgba(255,255,255,.13)",
      border: "1px solid rgba(255,255,255,.2)",
      color: "#fff",
      fontFamily: "var(--font)",
      fontSize: "var(--t-foot)",
      fontWeight: 700
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "info",
    size: 15,
    color: "#fff",
    strokeWidth: 2.3
  }), "What's this?")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--t-foot)",
      color: onDark,
      marginTop: 10,
      lineHeight: 1.45,
      maxWidth: 260
    }
  }, "Combines rhythm, resting heart rate, sleep and activity. Not a diagnosis."), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "rgba(255,255,255,.18)",
      margin: "16px 0 14px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 20,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      fontSize: "var(--t-foot)",
      fontWeight: 700,
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 999,
      background: "var(--green-500)"
    }
  }), "Stable"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      fontSize: "var(--t-foot)",
      fontWeight: 700,
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-up",
    size: 14,
    color: "#fff",
    strokeWidth: 2.6
  }), "3 pts vs last week"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--t-foot)",
      fontWeight: 700,
      color: "#fff"
    }
  }, "6h 40m monitored")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(StatusStrip, {
    items: [{
      dot: true,
      label: "Sense V3 connected"
    }, {
      icon: "battery-medium",
      label: "80% battery"
    }]
  })), /*#__PURE__*/React.createElement(Card, {
    pad: 18,
    style: {
      marginTop: 14,
      borderRadius: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--t-headline)",
      fontWeight: 800,
      color: "var(--c-ink)",
      letterSpacing: "-.01em"
    }
  }, "Heart status"), /*#__PURE__*/React.createElement(Pill, {
    tone: "live"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: "var(--red-500)"
    },
    className: "cn-blink"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--t-cap)"
    }
  }, "Live"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 10,
      marginTop: 14,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--t-title)",
      fontWeight: 800,
      color: "var(--green-600)",
      letterSpacing: "-.01em"
    }
  }, "Normal sinus rhythm"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--t-body)",
      fontWeight: 600,
      color: "var(--c-ink-2)"
    }
  }, "72 bpm")), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "10px -2px 0"
    }
  }, /*#__PURE__*/React.createElement(EcgTrace, {
    height: 62,
    beats: 4,
    strokeW: 2.1,
    color: "var(--green-500)",
    grid: false,
    glow: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginTop: 12,
      padding: "10px 12px",
      borderRadius: 14,
      background: "var(--brand-50)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      borderRadius: 999,
      background: "var(--c-surface)",
      border: "1.5px solid var(--brand-600)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 11,
      fontWeight: 700,
      color: "var(--brand-700)",
      flex: "0 0 28px"
    }
  }, "SC"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--t-foot)",
      color: "var(--c-ink)",
      lineHeight: 1.35
    }
  }, /*#__PURE__*/React.createElement("b", null, "Reviewed by Dr. Chen"), " \xB7 2 hours ago"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      height: 52,
      borderRadius: 16,
      cursor: "pointer",
      fontFamily: "var(--font)",
      fontSize: "var(--t-body)",
      fontWeight: 700,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      background: "var(--c-surface)",
      color: "var(--brand-700)",
      border: "1.5px solid var(--brand-200)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "notebook-pen",
    size: 18,
    strokeWidth: 2.2
  }), "Log symptoms"), /*#__PURE__*/React.createElement("button", {
    style: {
      height: 52,
      borderRadius: 16,
      cursor: "pointer",
      fontFamily: "var(--font)",
      fontSize: "var(--t-body)",
      fontWeight: 700,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      background: "var(--red-600)",
      color: "#fff",
      border: "none"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "siren",
    size: 18,
    color: "#fff",
    strokeWidth: 2.2
  }), "SOS")), /*#__PURE__*/React.createElement(SectionHead, null, "Today at a glance"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(GlanceCard, {
    icon: "heart-pulse",
    iconColor: "var(--brand-600)",
    tint: "var(--brand-50)",
    value: "68",
    unit: "bpm",
    label: "resting heart rate",
    delta: "Down 6 bpm this week"
  }), /*#__PURE__*/React.createElement(GlanceCard, {
    icon: "droplet",
    iconColor: "var(--blue-500)",
    tint: "var(--blue-50)",
    value: "97%",
    label: "blood oxygen",
    chip: "Normal"
  }), /*#__PURE__*/React.createElement(GlanceCard, {
    icon: "moon",
    iconColor: "var(--brand-600)",
    tint: "var(--brand-50)",
    value: "7h 20m",
    label: "sleep last night"
  }), /*#__PURE__*/React.createElement(GlanceCard, {
    icon: "footprints",
    iconColor: "var(--brand-600)",
    tint: "var(--brand-50)",
    value: "4,280",
    label: "steps",
    bar: 72,
    barCaption: "72% of goal"
  })), /*#__PURE__*/React.createElement(Card, {
    pad: 18,
    style: {
      marginTop: 22,
      borderRadius: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--t-headline)",
      fontWeight: 800,
      color: "var(--c-ink)",
      letterSpacing: "-.01em"
    }
  }, "Resting heart rate"), /*#__PURE__*/React.createElement(Pill, {
    tone: "inset"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--t-foot)"
    }
  }, "7 days"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(TrendChart, {
    data: [74, 73, 73, 71, 70, 69, 68],
    height: 112,
    color: "var(--brand-700)",
    dots: false,
    labels: ["M", "T", "W", "T", "F", "S", "S"]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "var(--c-hairline)",
      margin: "14px 0 14px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(TrendStat, {
    label: "Average",
    value: "71",
    unit: "bpm"
  }), /*#__PURE__*/React.createElement(TrendStat, {
    label: "High",
    value: "74"
  }), /*#__PURE__*/React.createElement(TrendStat, {
    label: "Low",
    value: "68"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "flex-start",
      marginTop: 14,
      padding: "12px 14px",
      borderRadius: 14,
      background: "var(--c-surface-3)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trending-down",
    size: 17,
    color: "var(--brand-700)",
    strokeWidth: 2.3,
    style: {
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--t-foot)",
      fontWeight: 600,
      color: "var(--c-ink)",
      lineHeight: 1.4
    }
  }, "Resting heart rate is down 8% this week. Earlier bedtimes line up with your lowest days."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--t-cap)",
      color: "var(--c-ink-3)",
      marginTop: 4
    }
  }, "Based on your last 7 days")))), /*#__PURE__*/React.createElement(SectionHead, {
    action: "View all"
  }, "Alerts"), /*#__PURE__*/React.createElement(AlertCardRow, {
    icon: "file-text",
    iconColor: "var(--brand-600)",
    tint: "var(--brand-50)",
    title: "Your weekly report is ready",
    time: "Yesterday"
  })), /*#__PURE__*/React.createElement(TabBar, {
    platform: platform,
    active: 0
  }));
}
Object.assign(window, {
  HomeScreen,
  GlanceCard,
  InsightCard,
  TrendStat,
  PersonCard,
  AlertCardRow
});
})();

/* screens/onboarding */
(function(){
/* CardioNexion 2025 — Onboarding & sensor pairing flow */

// big circular illustration medallion (icon-based, on-brand)
function Medallion({
  icon,
  dark,
  pulse
}) {
  const bg = dark ? "rgba(255,255,255,.08)" : "var(--brand-50)";
  const ring = dark ? "rgba(255,255,255,.18)" : "var(--brand-100)";
  const ic = dark ? "#fff" : "var(--brand-700)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 188,
      height: 188,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, pulse && [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      position: "absolute",
      inset: 0,
      borderRadius: 999,
      border: `2px solid ${ring}`,
      animation: `cn-pulse-ring 2.6s ease-out ${i * 0.8}s infinite`
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 156,
      height: 156,
      borderRadius: 999,
      background: bg,
      border: `2px solid ${ring}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 72,
    color: ic,
    strokeWidth: 1.6
  })));
}
function Dots({
  n = 5,
  active = 0,
  dark
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 7,
      justifyContent: "center"
    }
  }, Array.from({
    length: n
  }).map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      height: 7,
      borderRadius: 999,
      width: i === active ? 22 : 7,
      background: i === active ? dark ? "#fff" : "var(--brand-600)" : dark ? "rgba(255,255,255,.3)" : "var(--c-hairline)",
      transition: "all .3s"
    }
  })));
}

// ---- 1. Welcome (dark teal, brand) ------------------------
function OnboardWelcome() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      padding: "30px 26px 26px",
      background: "linear-gradient(165deg, var(--brand-900), var(--brand-950))",
      color: "#fff",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      top: "34%",
      opacity: .22
    }
  }, /*#__PURE__*/React.createElement(EcgTrace, {
    height: 150,
    beats: 5,
    color: "var(--brand-400)",
    strokeW: 2.5,
    grid: false,
    glow: false
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 800,
      letterSpacing: ".04em"
    }
  }, "@-HEALTH"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--t-display)",
      fontWeight: 800,
      letterSpacing: "-.03em",
      lineHeight: 1.04,
      marginTop: 18
    }
  }, "Continuous care", /*#__PURE__*/React.createElement("br", null), "for your heart."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--t-headline)",
      color: "rgba(255,255,255,.78)",
      lineHeight: 1.5,
      marginTop: 16,
      maxWidth: 290
    }
  }, "Your Cardionexion garment watches over your rhythm \u2014 quietly, all day, with your care team one tap away.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    variant: "bright",
    size: "lg",
    full: true,
    iconRight: "arrow-right"
  }, "Set up my sensor"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      fontSize: "var(--t-foot)",
      color: "rgba(255,255,255,.7)",
      fontWeight: 600
    }
  }, "I already have an account")));
}

// ---- 2. Sensor placement ----------------------------------
function OnboardPlacement() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      background: "var(--c-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-left",
    size: 26,
    color: "var(--c-ink)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--t-foot)",
      fontWeight: 700,
      color: "var(--brand-600)"
    }
  }, "Skip")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "0 30px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(Medallion, {
    icon: "shirt"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--t-display)",
      fontWeight: 800,
      letterSpacing: "-.02em",
      color: "var(--c-ink)",
      marginTop: 34
    }
  }, "Wear your garment"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--t-headline)",
      color: "var(--c-ink-2)",
      lineHeight: 1.5,
      marginTop: 12,
      maxWidth: 300
    }
  }, "Slip on the Cardionexion vest. The ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--brand-700)"
    }
  }, "master sensor"), " sits on the left, the reference sensor on the right.")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 26px 22px",
      display: "flex",
      flexDirection: "column",
      gap: 22
    }
  }, /*#__PURE__*/React.createElement(Dots, {
    n: 5,
    active: 0
  }), /*#__PURE__*/React.createElement(Btn, {
    variant: "primary",
    size: "lg",
    full: true,
    iconRight: "arrow-right"
  }, "Continue")));
}

// ---- 3. Pairing / scanning --------------------------------
function OnboardPairing() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      background: "var(--c-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 20px"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-left",
    size: 26,
    color: "var(--c-ink)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "0 26px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(Medallion, {
    icon: "bluetooth-searching",
    pulse: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--t-title)",
      fontWeight: 800,
      color: "var(--c-ink)",
      marginTop: 30
    }
  }, "Looking for your sensor\u2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--t-foot)",
      color: "var(--c-ink-3)",
      marginTop: 8
    }
  }, "Keep your phone close to the garment.")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 20px 22px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--t-cap)",
      fontWeight: 700,
      letterSpacing: ".06em",
      textTransform: "uppercase",
      color: "var(--c-ink-3)",
      marginBottom: 8
    }
  }, "Found nearby"), /*#__PURE__*/React.createElement(Card, {
    pad: 6,
    soft: true,
    style: {
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement(ListRow, {
    icon: "check",
    iconBg: "var(--green-50)",
    iconColor: "var(--green-600)",
    title: "Sense V3 \xB7 M211 4023",
    sub: "Signal strong \xB7 your device",
    right: /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--t-cap)",
        fontWeight: 700,
        color: "var(--brand-700)",
        padding: "8px 14px",
        background: "var(--brand-50)",
        borderRadius: 999
      }
    }, "Connect"),
    last: true
  })), /*#__PURE__*/React.createElement(Card, {
    pad: 6,
    soft: true
  }, /*#__PURE__*/React.createElement(ListRow, {
    icon: "bluetooth",
    iconBg: "var(--c-surface-3)",
    iconColor: "var(--c-ink-3)",
    title: "Sense V3 \xB7 M218 8841",
    sub: "Signal weak",
    right: /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-right",
      size: 20,
      color: "var(--c-ink-4)"
    }),
    last: true
  }))));
}

// ---- 4. All set -------------------------------------------
function OnboardSuccess() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "30px 30px 26px",
      background: "linear-gradient(165deg, var(--green-600), var(--brand-700))",
      color: "#fff",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 110,
      height: 110,
      borderRadius: 999,
      background: "rgba(255,255,255,.16)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 80,
      height: 80,
      borderRadius: 999,
      background: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 46,
    color: "var(--green-600)",
    strokeWidth: 3
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--t-display)",
      fontWeight: 800,
      letterSpacing: "-.02em",
      marginTop: 28
    }
  }, "You're protected"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--t-headline)",
      color: "rgba(255,255,255,.85)",
      lineHeight: 1.5,
      marginTop: 12,
      maxWidth: 290
    }
  }, "Your sensor is paired and monitoring has begun. Dr. Mendez can now see your readings."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      width: "100%",
      paddingTop: 28
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    variant: "bright",
    size: "lg",
    full: true,
    style: {
      background: "#fff",
      color: "var(--brand-700)"
    },
    iconRight: "arrow-right"
  }, "Go to dashboard")));
}
Object.assign(window, {
  Medallion,
  Dots,
  OnboardWelcome,
  OnboardPlacement,
  OnboardPairing,
  OnboardSuccess
});
})();

/* screens/sensor */
(function(){
/* CardioNexion 2025 — Sensor / device management */

function StatRow({
  icon,
  iconColor,
  label,
  value,
  valueColor
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 11,
      padding: "13px 0"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 20,
    color: iconColor,
    strokeWidth: 2
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: "var(--t-body)",
      fontWeight: 600,
      color: "var(--c-ink)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--t-foot)",
      fontWeight: 700,
      color: valueColor || "var(--c-ink-3)"
    }
  }, value));
}
function SensorScreen({
  platform = "ios"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--c-page)",
      flex: 1,
      display: "flex",
      flexDirection: "column",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(TopBar, null), /*#__PURE__*/React.createElement(AppBar, {
    big: true,
    sub: "Device",
    title: "My Sensor.",
    right: /*#__PURE__*/React.createElement(IconBtn, {
      name: "plus",
      size: 36,
      icon: 18,
      tint: "var(--brand-700)",
      color: "#fff"
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "4px 18px 18px"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: 0,
    style: {
      borderRadius: 24,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 20px 18px",
      background: "linear-gradient(155deg, var(--brand-900) 0%, #0A4B55 55%, var(--brand-700) 100%)",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 13
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 50,
      height: 50,
      borderRadius: 15,
      background: "rgba(255,255,255,.14)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shirt",
    size: 26,
    color: "#fff",
    strokeWidth: 1.8
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--t-headline)",
      fontWeight: 800
    }
  }, "Sense V3"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--t-cap)",
      color: "rgba(255,255,255,.7)",
      fontFamily: "var(--font-tab)"
    }
  }, "M211 4023 5")), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "6px 12px",
      borderRadius: 999,
      background: "rgba(255,255,255,.16)",
      fontSize: "var(--t-cap)",
      fontWeight: 700
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 999,
      background: "var(--green-400, #5fe3b0)"
    },
    className: "cn-blink"
  }), "Connected")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(Ring, {
    value: 80,
    size: 68,
    stroke: 8,
    color: "#fff",
    track: "rgba(255,255,255,.18)"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-num)",
      fontSize: 20,
      fontWeight: 800,
      color: "#fff"
    }
  }, "80", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11
    }
  }, "%"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--t-foot)",
      fontWeight: 700
    }
  }, "Battery healthy"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--t-cap)",
      color: "rgba(255,255,255,.72)",
      marginTop: 2
    }
  }, "\u2248 12 h 30 m of monitoring left")))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "4px 18px 8px"
    }
  }, /*#__PURE__*/React.createElement(StatRow, {
    icon: "bluetooth",
    iconColor: "var(--blue-600)",
    label: "Bluetooth",
    value: "Connected",
    valueColor: "var(--green-600)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "var(--c-hairline)"
    }
  }), /*#__PURE__*/React.createElement(StatRow, {
    icon: "wifi",
    iconColor: "var(--brand-600)",
    label: "Cloud sync",
    value: "Synced 2 min ago",
    valueColor: "var(--green-600)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "var(--c-hairline)"
    }
  }), /*#__PURE__*/React.createElement(StatRow, {
    icon: "activity",
    iconColor: "var(--red-500)",
    label: "Live recording",
    value: "Active",
    valueColor: "var(--green-600)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    variant: "tint",
    full: true,
    icon: "refresh-cw"
  }, "Sync now"), /*#__PURE__*/React.createElement(Btn, {
    variant: "outline",
    full: true,
    icon: "unlink",
    style: {
      color: "var(--red-600)",
      borderColor: "var(--red-100)"
    }
  }, "Disconnect")), /*#__PURE__*/React.createElement(SectionHead, {
    meta: "2 paired"
  }, "Other devices"), /*#__PURE__*/React.createElement(Card, {
    pad: 4,
    soft: true,
    style: {
      borderRadius: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 14px"
    }
  }, /*#__PURE__*/React.createElement(ListRow, {
    icon: "shirt",
    iconBg: "var(--c-surface-3)",
    iconColor: "var(--c-ink-3)",
    title: "Sense V3 \xB7 M210 9920",
    sub: "Last connected 15 h ago",
    right: /*#__PURE__*/React.createElement(Btn, {
      variant: "tint",
      size: "sm"
    }, "Connect")
  }), /*#__PURE__*/React.createElement(ListRow, {
    icon: "shirt",
    iconBg: "var(--c-surface-3)",
    iconColor: "var(--c-ink-3)",
    title: "Sense V2 \xB7 M198 4471",
    sub: "Last connected 3 days ago",
    right: /*#__PURE__*/React.createElement(Btn, {
      variant: "tint",
      size: "sm"
    }, "Connect"),
    last: true
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "14px 16px",
      background: "var(--brand-50)",
      borderRadius: "var(--r-md)",
      border: "1px solid var(--brand-100)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield-check",
    size: 22,
    color: "var(--brand-700)",
    strokeWidth: 2
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--t-foot)",
      color: "var(--c-ink-2)",
      lineHeight: 1.4
    }
  }, "Your readings are encrypted end-to-end and shared only with your care team."))), /*#__PURE__*/React.createElement(TabBar, {
    platform: platform,
    active: 1,
    items: [{
      icon: "house",
      label: "Home"
    }, {
      icon: "shirt",
      label: "Sensor"
    }, {
      icon: "bell",
      label: "Alerts"
    }, {
      icon: "user-round",
      label: "Care"
    }]
  }));
}
Object.assign(window, {
  SensorScreen,
  StatRow
});
})();

/* screens/alerts */
(function(){
/* CardioNexion 2025 — Alert Center & smart alerts */

function AlertRow({
  status,
  title,
  time,
  body,
  last
}) {
  const s = STATUS[status];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 13,
      padding: "15px 0",
      borderBottom: last ? "none" : "1px solid var(--c-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 12,
      flex: "0 0 40px",
      background: s.bg,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: status === "stable" ? "check" : status === "critical" ? "alert-triangle" : "activity",
    size: 20,
    color: s.c,
    strokeWidth: 2.2
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--t-body)",
      fontWeight: 700,
      color: "var(--c-ink)"
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--t-cap)",
      color: "var(--c-ink-4)",
      whiteSpace: "nowrap"
    }
  }, time)), body && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--t-foot)",
      color: "var(--c-ink-3)",
      marginTop: 3,
      lineHeight: 1.45
    }
  }, body)));
}
function AlertsScreen({
  platform = "ios"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--c-page)",
      flex: 1,
      display: "flex",
      flexDirection: "column",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(TopBar, null), /*#__PURE__*/React.createElement(AppBar, {
    big: true,
    sub: "Notifications",
    title: "Alerts.",
    pill: "Thu, 12 Jun"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 18px 12px"
    }
  }, /*#__PURE__*/React.createElement(SegTabs, {
    items: ["All", "Attention", "Resolved"],
    active: 0
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "8px 18px 18px"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: 18,
    accent: "var(--amber-500)",
    style: {
      borderRadius: 20,
      background: "var(--amber-50)",
      border: "1px solid var(--amber-100)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "activity",
    size: 20,
    color: "var(--amber-600)",
    strokeWidth: 2.4
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--t-cap)",
      fontWeight: 800,
      letterSpacing: ".06em",
      textTransform: "uppercase",
      color: "var(--amber-600)"
    }
  }, "Needs your attention \xB7 9:42 PM")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--t-headline)",
      fontWeight: 700,
      color: "var(--c-ink)",
      lineHeight: 1.4
    }
  }, "Your heart rhythm looked a little different from your recent baseline last night."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--t-foot)",
      color: "var(--c-ink-2)",
      marginTop: 8,
      lineHeight: 1.5
    }
  }, "It lasted about 4 minutes and has settled. This isn't an emergency \u2014 your doctor has been notified for review."), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "14px 0 4px",
      borderRadius: "var(--r-sm)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(EcgTrace, {
    height: 70,
    beats: 5,
    strokeW: 2.2
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    variant: "primary",
    full: true
  }, "I'm feeling fine"), /*#__PURE__*/React.createElement(Btn, {
    variant: "outline",
    full: true,
    icon: "phone"
  }, "Call doctor"))), /*#__PURE__*/React.createElement(SectionHead, {
    meta: "Thu 12 Jun",
    style: {
      margin: "24px 0 10px"
    }
  }, "Today"), /*#__PURE__*/React.createElement(Card, {
    pad: 4,
    soft: true,
    style: {
      borderRadius: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 16px"
    }
  }, /*#__PURE__*/React.createElement(AlertRow, {
    status: "stable",
    title: "Weekly summary ready",
    time: "7:00 AM",
    body: "Your recovery trend is positive \u2014 resting HR down 8%."
  }), /*#__PURE__*/React.createElement(AlertRow, {
    status: "info",
    title: "Medication reminder",
    time: "8:30 AM",
    body: "Beta-blocker \xB7 marked as taken.",
    last: true
  }))), /*#__PURE__*/React.createElement(SectionHead, {
    meta: "Wed 11 Jun",
    style: {
      margin: "22px 0 10px"
    }
  }, "Yesterday"), /*#__PURE__*/React.createElement(Card, {
    pad: 4,
    soft: true,
    style: {
      borderRadius: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 16px"
    }
  }, /*#__PURE__*/React.createElement(AlertRow, {
    status: "monitor",
    title: "Rhythm variation",
    time: "9:42 PM",
    body: "Reviewed by Dr. Mendez \u2014 no action needed."
  }), /*#__PURE__*/React.createElement(AlertRow, {
    status: "stable",
    title: "Sensor reconnected",
    time: "2:10 PM",
    last: true
  })))), /*#__PURE__*/React.createElement(TabBar, {
    platform: platform,
    active: 2,
    items: [{
      icon: "house",
      label: "Home"
    }, {
      icon: "shirt",
      label: "Sensor"
    }, {
      icon: "bell",
      label: "Alerts"
    }, {
      icon: "user-round",
      label: "Care"
    }]
  }));
}
Object.assign(window, {
  AlertsScreen,
  AlertRow
});
})();

/* screens/ecg */
(function(){
/* CardioNexion 2025 — ECG detail / live monitoring */

function EcgStat({
  label,
  value,
  unit
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-num)",
      fontSize: "var(--t-title)",
      fontWeight: 800,
      color: "var(--c-ink)"
    }
  }, value, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--t-cap)",
      color: "var(--c-ink-3)",
      fontWeight: 700
    }
  }, unit)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--t-cap)",
      color: "var(--c-ink-3)",
      fontWeight: 700,
      letterSpacing: ".04em",
      textTransform: "uppercase",
      marginTop: 2
    }
  }, label));
}
function EcgScreen({
  platform = "ios"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--c-page)",
      flex: 1,
      display: "flex",
      flexDirection: "column",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    title: "Live ECG",
    left: /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-left",
      size: 24,
      color: "var(--brand-900)",
      strokeWidth: 2.2
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 18px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 24,
      background: "linear-gradient(155deg, var(--brand-900) 0%, #0A4B55 55%, var(--brand-700) 100%)",
      padding: "20px 20px 18px",
      color: "#fff",
      boxShadow: "var(--sh-float)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 9,
      height: 9,
      borderRadius: 999,
      background: "var(--red-500)"
    },
    className: "cn-blink"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--t-foot)",
      fontWeight: 700,
      color: "rgba(255,255,255,.85)"
    }
  }, "Recording \xB7 06:12")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
      gap: 6,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-num)",
      fontSize: "62px",
      lineHeight: .92,
      letterSpacing: "-.02em"
    }
  }, "68"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--t-headline)",
      fontWeight: 700,
      color: "rgba(255,255,255,.7)",
      paddingBottom: 8
    }
  }, "bpm")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      borderRadius: 16,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(EcgTrace, {
    height: 132,
    beats: 5,
    strokeW: 2.6,
    color: "var(--brand-400)",
    grid: false
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "14px 18px 18px"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: 16,
    style: {
      borderRadius: 20,
      display: "flex",
      alignItems: "center",
      gap: 13
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 13,
      background: "var(--green-50)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "heart-pulse",
    size: 24,
    color: "var(--green-600)",
    strokeWidth: 2
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--t-body)",
      fontWeight: 800,
      color: "var(--c-ink)"
    }
  }, "Normal sinus rhythm"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--t-foot)",
      color: "var(--c-ink-3)",
      marginTop: 1
    }
  }, "Classified on-device \xB7 99% confidence")), /*#__PURE__*/React.createElement(StatusBadge, {
    status: "stable"
  })), /*#__PURE__*/React.createElement(Card, {
    pad: 18,
    style: {
      marginTop: 14,
      borderRadius: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(EcgStat, {
    label: "Avg",
    value: "68",
    unit: " bpm"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      background: "var(--c-hairline)"
    }
  }), /*#__PURE__*/React.createElement(EcgStat, {
    label: "Min",
    value: "61",
    unit: ""
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      background: "var(--c-hairline)"
    }
  }), /*#__PURE__*/React.createElement(EcgStat, {
    label: "Max",
    value: "84",
    unit: ""
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      background: "var(--c-hairline)"
    }
  }), /*#__PURE__*/React.createElement(EcgStat, {
    label: "HRV",
    value: "42",
    unit: "ms"
  }))), /*#__PURE__*/React.createElement(Card, {
    pad: 18,
    style: {
      marginTop: 14,
      borderRadius: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--t-headline)",
      fontWeight: 800,
      color: "var(--c-ink)",
      letterSpacing: "-.01em",
      marginBottom: 14
    }
  }, "Heart rate \xB7 this session"), /*#__PURE__*/React.createElement(TrendChart, {
    data: [64, 66, 70, 84, 75, 69, 66, 68],
    height: 92,
    color: "var(--red-500)",
    labels: ["0", "", "2", "", "4", "", "6 m", ""]
  })), /*#__PURE__*/React.createElement(Btn, {
    variant: "primary",
    size: "lg",
    full: true,
    icon: "send",
    style: {
      marginTop: 16
    }
  }, "Send strip to Dr. Mendez")));
}
Object.assign(window, {
  EcgScreen,
  EcgStat
});
})();

/* screens/care */
(function(){
/* CardioNexion 2025 — Doctor connection, Care Circle, recovery */

function CareScreen({
  platform = "ios"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--c-page)",
      flex: 1,
      display: "flex",
      flexDirection: "column",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(TopBar, null), /*#__PURE__*/React.createElement(AppBar, {
    big: true,
    sub: "Your people",
    title: "Care Circle.",
    right: /*#__PURE__*/React.createElement(IconBtn, {
      name: "user-plus",
      size: 36,
      icon: 18,
      tint: "var(--brand-700)",
      color: "#fff"
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "4px 18px 18px"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: 18,
    style: {
      borderRadius: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Sarah Mendez",
    size: 58,
    ring: "var(--brand-200)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--t-headline)",
      fontWeight: 800,
      color: "var(--c-ink)"
    }
  }, "Dr. Sarah Mendez"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--t-foot)",
      color: "var(--c-ink-3)"
    }
  }, "Cardiologist \xB7 St. Vincent's"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      marginTop: 5,
      fontSize: "var(--t-cap)",
      fontWeight: 700,
      color: "var(--green-600)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 999,
      background: "var(--green-500)"
    }
  }), "Reviewing your data"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 9,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    variant: "primary",
    full: true,
    icon: "message-circle"
  }, "Message"), /*#__PURE__*/React.createElement(Btn, {
    variant: "tint",
    full: true,
    icon: "phone"
  }, "Call"), /*#__PURE__*/React.createElement(Btn, {
    variant: "tint",
    icon: "video",
    style: {
      flex: "0 0 auto",
      padding: "0 16px"
    }
  }))), /*#__PURE__*/React.createElement(SectionHead, {
    meta: "Day 24 of 90"
  }, "Recovery"), /*#__PURE__*/React.createElement(Card, {
    pad: 18,
    style: {
      borderRadius: 20,
      display: "flex",
      gap: 18,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Ring, {
    value: 27,
    size: 86,
    stroke: 10,
    color: "var(--green-500)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-num)",
      fontSize: 22,
      fontWeight: 800,
      color: "var(--c-ink)",
      lineHeight: 1
    }
  }, "24"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      color: "var(--c-ink-3)"
    }
  }, "OF 90"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--t-body)",
      fontWeight: 700,
      color: "var(--c-ink)"
    }
  }, "Post-surgery recovery"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--t-foot)",
      color: "var(--c-ink-2)",
      marginTop: 4,
      lineHeight: 1.45
    }
  }, "You're on track. Next milestone: ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--green-600)"
    }
  }, "light activity"), " at day 30."))), /*#__PURE__*/React.createElement(SectionHead, {
    action: "Manage"
  }, "Emergency contacts"), /*#__PURE__*/React.createElement(Card, {
    pad: 4,
    soft: true,
    style: {
      borderRadius: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 16px"
    }
  }, /*#__PURE__*/React.createElement(ListRow, {
    lead: /*#__PURE__*/React.createElement(Avatar, {
      name: "Maria Doe",
      size: 42
    }),
    title: "Maria Doe",
    sub: "Spouse \xB7 primary contact",
    right: /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--t-cap)",
        fontWeight: 800,
        color: "var(--red-600)",
        padding: "5px 10px",
        background: "var(--red-50)",
        borderRadius: 999
      }
    }, "SOS")
  }), /*#__PURE__*/React.createElement(ListRow, {
    lead: /*#__PURE__*/React.createElement(Avatar, {
      name: "James Doe",
      size: 42
    }),
    title: "James Doe",
    sub: "Son",
    right: /*#__PURE__*/React.createElement(IconBtn, {
      name: "phone",
      size: 36,
      icon: 17,
      tint: "var(--brand-50)",
      color: "var(--brand-700)"
    })
  }), /*#__PURE__*/React.createElement(ListRow, {
    lead: /*#__PURE__*/React.createElement(Avatar, {
      name: "Anna Lee",
      size: 42
    }),
    title: "Anna Lee",
    sub: "Caregiver \xB7 can view dashboard",
    right: /*#__PURE__*/React.createElement(IconBtn, {
      name: "phone",
      size: 36,
      icon: 17,
      tint: "var(--brand-50)",
      color: "var(--brand-700)"
    }),
    last: true
  }))), /*#__PURE__*/React.createElement("button", {
    style: {
      marginTop: 18,
      width: "100%",
      height: 58,
      borderRadius: 999,
      border: "none",
      cursor: "pointer",
      background: "var(--red-500)",
      color: "#fff",
      fontWeight: 800,
      fontSize: "var(--t-headline)",
      letterSpacing: ".02em",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone-call",
    size: 22,
    strokeWidth: 2.3
  }), "Emergency call \xB7 911"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      fontSize: "var(--t-cap)",
      color: "var(--c-ink-3)",
      marginTop: 10,
      lineHeight: 1.4
    }
  }, "Shares your location and latest ECG with responders and your care circle.")), /*#__PURE__*/React.createElement(TabBar, {
    platform: platform,
    active: 3,
    items: [{
      icon: "house",
      label: "Home"
    }, {
      icon: "shirt",
      label: "Sensor"
    }, {
      icon: "bell",
      label: "Alerts"
    }, {
      icon: "user-round",
      label: "Care"
    }]
  }));
}
Object.assign(window, {
  CareScreen
});
})();

/* screens/settings */
(function(){
/* CardioNexion 2025 — Settings & Notifications */

function SettingRow({
  icon,
  iconBg,
  iconColor,
  title,
  sub,
  right,
  last
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 13,
      padding: "14px 0",
      borderBottom: last ? "none" : "1px solid var(--c-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 11,
      flex: "0 0 38px",
      background: iconBg || "var(--brand-50)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 19,
    color: iconColor || "var(--brand-700)",
    strokeWidth: 2
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--t-body)",
      fontWeight: 600,
      color: "var(--c-ink)"
    }
  }, title), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--t-cap)",
      color: "var(--c-ink-3)",
      marginTop: 1
    }
  }, sub)), right);
}
function SettingsScreen({
  platform = "ios"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--c-page)",
      flex: 1,
      display: "flex",
      flexDirection: "column",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(TopBar, null), /*#__PURE__*/React.createElement(AppBar, {
    big: true,
    sub: "Preferences",
    title: "Settings."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "4px 18px 18px"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: 16,
    style: {
      borderRadius: 20,
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "John Doe",
    size: 52
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--t-headline)",
      fontWeight: 800,
      color: "var(--c-ink)"
    }
  }, "John Doe"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--t-foot)",
      color: "var(--c-ink-3)"
    }
  }, "Age 64 \xB7 Plan active to 27 Mar 2026")), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 20,
    color: "var(--c-ink-4)"
  })), /*#__PURE__*/React.createElement(SectionHead, {
    style: {
      margin: "22px 0 10px"
    }
  }, "Alerts & monitoring"), /*#__PURE__*/React.createElement(Card, {
    pad: 4,
    soft: true,
    style: {
      borderRadius: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 16px"
    }
  }, /*#__PURE__*/React.createElement(SettingRow, {
    icon: "bell",
    title: "Notification sounds",
    sub: "On",
    right: /*#__PURE__*/React.createElement(Toggle, {
      on: true
    })
  }), /*#__PURE__*/React.createElement(SettingRow, {
    icon: "battery-low",
    iconColor: "var(--amber-600)",
    iconBg: "var(--amber-50)",
    title: "Low battery warnings",
    sub: "Alert below 20%",
    right: /*#__PURE__*/React.createElement(Toggle, {
      on: true
    })
  }), /*#__PURE__*/React.createElement(SettingRow, {
    icon: "wifi",
    title: "Connection alerts",
    sub: "When sensor disconnects",
    right: /*#__PURE__*/React.createElement(Toggle, {
      on: true
    })
  }), /*#__PURE__*/React.createElement(SettingRow, {
    icon: "moon",
    title: "Quiet hours",
    sub: "10 PM \u2013 7 AM \xB7 critical only",
    right: /*#__PURE__*/React.createElement(Toggle, {
      on: true,
      color: "var(--brand-500)"
    }),
    last: true
  }))), /*#__PURE__*/React.createElement(SectionHead, {
    style: {
      margin: "22px 0 10px"
    }
  }, "Accessibility"), /*#__PURE__*/React.createElement(Card, {
    pad: 4,
    soft: true,
    style: {
      borderRadius: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 16px"
    }
  }, /*#__PURE__*/React.createElement(SettingRow, {
    icon: "type",
    title: "Larger text",
    sub: "System default",
    right: /*#__PURE__*/React.createElement(Toggle, {
      on: false
    })
  }), /*#__PURE__*/React.createElement(SettingRow, {
    icon: "contrast",
    title: "High contrast",
    right: /*#__PURE__*/React.createElement(Toggle, {
      on: false
    })
  }), /*#__PURE__*/React.createElement(SettingRow, {
    icon: "volume-2",
    title: "Voice readouts",
    sub: "Speak my daily summary",
    right: /*#__PURE__*/React.createElement(Toggle, {
      on: true,
      color: "var(--brand-500)"
    }),
    last: true
  }))), /*#__PURE__*/React.createElement(SectionHead, {
    style: {
      margin: "22px 0 10px"
    }
  }, "Data & privacy"), /*#__PURE__*/React.createElement(Card, {
    pad: 4,
    soft: true,
    style: {
      borderRadius: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 16px"
    }
  }, /*#__PURE__*/React.createElement(SettingRow, {
    icon: "cloud",
    title: "Remote sync",
    sub: "On \xB7 every 5 min",
    right: /*#__PURE__*/React.createElement(Toggle, {
      on: true
    })
  }), /*#__PURE__*/React.createElement(SettingRow, {
    icon: "shield-check",
    iconColor: "var(--green-600)",
    iconBg: "var(--green-50)",
    title: "Share with care team",
    sub: "Dr. Mendez, 1 caregiver",
    right: /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-right",
      size: 20,
      color: "var(--c-ink-4)"
    })
  }), /*#__PURE__*/React.createElement(SettingRow, {
    icon: "download",
    title: "Export health record",
    sub: "PDF \xB7 last 90 days",
    right: /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-right",
      size: 20,
      color: "var(--c-ink-4)"
    }),
    last: true
  })))));
}
Object.assign(window, {
  SettingsScreen,
  SettingRow
});
})();

/* screens/states */
(function(){
/* CardioNexion 2025 — Empty / error / system states
   Reframed from the legacy full-red panic screens into calm,
   reassuring states that never imply monitoring has stopped. */

function StateScreen({
  tone = "amber",
  icon,
  eyebrow,
  title,
  body,
  reassure,
  primary,
  secondary
}) {
  const map = {
    amber: {
      c: "var(--amber-600)",
      bg: "var(--amber-50)",
      bd: "var(--amber-100)"
    },
    blue: {
      c: "var(--blue-600)",
      bg: "var(--blue-50)",
      bd: "var(--blue-100)"
    },
    teal: {
      c: "var(--brand-700)",
      bg: "var(--brand-50)",
      bd: "var(--brand-100)"
    }
  }[tone];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      background: "var(--c-page)",
      padding: "26px 28px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 120,
      height: 120,
      borderRadius: 999,
      background: map.bg,
      border: `2px solid ${map.bd}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 54,
    color: map.c,
    strokeWidth: 1.7
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--t-cap)",
      fontWeight: 800,
      letterSpacing: ".1em",
      textTransform: "uppercase",
      color: map.c,
      marginTop: 26
    }
  }, eyebrow), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--t-display)",
      fontWeight: 800,
      letterSpacing: "-.02em",
      color: "var(--c-ink)",
      marginTop: 8
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--t-headline)",
      color: "var(--c-ink-2)",
      lineHeight: 1.5,
      marginTop: 12,
      maxWidth: 300
    }
  }, body)), reassure && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "13px 16px",
      background: "var(--green-50)",
      border: "1px solid var(--green-100)",
      borderRadius: "var(--r-md)",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "heart-pulse",
    size: 22,
    color: "var(--green-600)",
    strokeWidth: 2
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--t-foot)",
      color: "var(--c-ink-2)",
      fontWeight: 600,
      lineHeight: 1.4,
      textAlign: "left"
    }
  }, reassure)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    variant: "primary",
    size: "lg",
    full: true,
    icon: primary.icon
  }, primary.label), secondary && /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      fontSize: "var(--t-foot)",
      fontWeight: 700,
      color: "var(--c-ink-3)"
    }
  }, secondary)));
}
function StateLowBattery() {
  return /*#__PURE__*/React.createElement(StateScreen, {
    tone: "amber",
    icon: "battery-low",
    eyebrow: "Sensor battery \xB7 18%",
    title: "Time to recharge",
    body: "Your Cardionexion garment has about 1 hour of monitoring left. Pop it on the charger when you can.",
    reassure: "You're still being monitored right now \u2014 nothing is missed.",
    primary: {
      label: "How to charge",
      icon: "battery-charging"
    },
    secondary: "Remind me in 20 minutes"
  });
}
function StateOffline() {
  return /*#__PURE__*/React.createElement(StateScreen, {
    tone: "blue",
    icon: "cloud-off",
    eyebrow: "No internet connection",
    title: "You're offline",
    body: "We can't reach the cloud right now, so your care team won't see live updates until you reconnect.",
    reassure: "Readings are saved on your phone and will sync automatically.",
    primary: {
      label: "Try again",
      icon: "refresh-cw"
    },
    secondary: "Continue offline"
  });
}
Object.assign(window, {
  StateScreen,
  StateLowBattery,
  StateOffline
});
})();

/* web/console-mo */
(function(){
/* CardioNexion 2025 — Medical Operator console (alert triage) */

const MO_QUEUE = [{
  crit: "Critical",
  name: "John Snow",
  age: 41,
  path: "Bradycardia",
  time: "16:27",
  alerts: 4,
  remain: 84,
  active: true
}, {
  crit: "Critical",
  name: "Emilia Clark",
  age: 33,
  path: "Tachycardia",
  time: "17:00",
  alerts: 3,
  remain: 102
}, {
  crit: "Critical",
  name: "Dan Brown",
  age: 58,
  path: "Arrhythmia",
  time: "17:15",
  alerts: 2,
  remain: 110
}, {
  crit: "Warning",
  name: "George Lucas",
  age: 72,
  path: "Atrial fibrillation",
  time: "15:20",
  alerts: 5,
  remain: 38
}, {
  crit: "Critical",
  name: "Peter Din",
  age: 64,
  path: "Atrial flutter",
  time: "17:20",
  alerts: 1,
  remain: 116
}, {
  crit: "Warning",
  name: "Farrow Sparrow",
  age: 49,
  path: "Palpitations",
  time: "17:21",
  alerts: 7,
  remain: 71
}];
function MoRowCard({
  t,
  onSel
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onSel,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      padding: "12px 14px",
      borderRadius: 14,
      cursor: "pointer",
      background: t.active ? "var(--c-surface)" : "transparent",
      border: `1px solid ${t.active ? "var(--brand-200)" : "transparent"}`,
      boxShadow: t.active ? "var(--sh-1)" : "none"
    }
  }, /*#__PURE__*/React.createElement(Crit, {
    level: t.crit,
    sm: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      fontWeight: 700,
      color: "var(--c-ink)"
    }
  }, t.name, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--c-ink-4)",
      fontWeight: 600
    }
  }, "\xB7 ", t.age)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--c-ink-3)",
      marginTop: 1
    }
  }, t.path, " \xB7 ", t.alerts, " alerts / 8 wks")), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-num)",
      fontSize: 15,
      fontWeight: 800,
      color: t.remain < 45 ? "var(--red-600)" : "var(--c-ink-2)"
    }
  }, Math.floor(t.remain / 60), ":", String(t.remain % 60).padStart(2, "0")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--c-ink-4)",
      fontWeight: 600
    }
  }, t.time)));
}
function MOConsole() {
  const active = MO_QUEUE[0];
  return /*#__PURE__*/React.createElement(DashShell, {
    role: "Medical Operator",
    roleIcon: "headset",
    sub: "Triage",
    title: "New alerts",
    nav: [{
      icon: "inbox",
      label: "New",
      active: true,
      badge: 6
    }, {
      icon: "layers",
      label: "Open",
      badge: 3
    }, {
      icon: "history",
      label: "History"
    }, {
      icon: "users-round",
      label: "Patients"
    }],
    topRight: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Search, null), /*#__PURE__*/React.createElement(Btn, {
      variant: "tint",
      size: "sm",
      icon: "sliders-horizontal"
    }, "Criticality"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 392px",
      gap: 20,
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 8,
      padding: "0 4px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: "var(--c-ink-3)"
    }
  }, "Live queue \xB7 6 waiting"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 7,
      fontSize: 12.5,
      fontWeight: 700,
      color: "var(--red-600)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 999,
      background: "var(--red-500)"
    },
    className: "cn-blink"
  }), " 4 critical")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      overflow: "hidden"
    }
  }, MO_QUEUE.map((t, i) => /*#__PURE__*/React.createElement(MoRowCard, {
    key: i,
    t: t
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--c-surface)",
      borderRadius: "var(--r-lg)",
      border: "1px solid var(--c-hairline)",
      boxShadow: "var(--sh-2)",
      padding: 20,
      display: "flex",
      flexDirection: "column",
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: active.name,
    size: 46,
    ring: "var(--red-100)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 800
    }
  }, active.name, ", ", active.age), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--c-ink-3)"
    }
  }, active.path, " \xB7 Sensor ISEMF678905")), /*#__PURE__*/React.createElement(Crit, {
    level: "Critical",
    sm: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      borderRadius: 14,
      overflow: "hidden",
      border: "1px solid var(--c-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "9px 13px",
      background: "var(--brand-950)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      fontWeight: 700,
      letterSpacing: ".08em",
      textTransform: "uppercase",
      color: "var(--brand-400)"
    }
  }, "Current ECG \xB7 live"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      color: "rgba(255,255,255,.5)",
      fontFamily: "var(--font-num)"
    }
  }, "148 bpm")), /*#__PURE__*/React.createElement(EcgTrace, {
    height: 84,
    beats: 5,
    strokeW: 2.2
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 18,
      alignItems: "center",
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(Countdown, {
    remain: 84,
    total: 120,
    size: 118
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--c-ink-3)",
      lineHeight: 1.5
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--c-ink)"
    }
  }, "Act within 2 minutes."), " If no action is taken the ticket returns to ", /*#__PURE__*/React.createElement("b", null, "New"), " and is re-queued for the team.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      paddingTop: 18,
      display: "flex",
      flexDirection: "column",
      gap: 9
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    variant: "primary",
    full: true,
    icon: "stethoscope"
  }, "Refer to Doctor"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 9
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    variant: "outline",
    full: true,
    icon: "check"
  }, "Close"), /*#__PURE__*/React.createElement(Btn, {
    variant: "dark",
    full: true,
    icon: "arrow-up-right"
  }, "Escalate"))))));
}
Object.assign(window, {
  MOConsole,
  MO_QUEUE
});
})();

/* web/console-mos */
(function(){
/* CardioNexion 2025 — Medical Officer Supervisor console (oversight + escalation) */

const MOS_OPERATORS = [{
  name: "James Shaw",
  load: 3,
  cap: 5,
  sla: "ok"
}, {
  name: "Anita Bose",
  load: 5,
  cap: 5,
  sla: "warn"
}, {
  name: "Leo Marchand",
  load: 2,
  cap: 5,
  sla: "ok"
}, {
  name: "Priya Nair",
  load: 4,
  cap: 5,
  sla: "ok"
}];
const MOS_ESCALATED = [{
  crit: "Critical",
  name: "John Snow",
  note: "Referred back by Dr. Doe",
  time: "16:41"
}, {
  crit: "Critical",
  name: "Dan Brown",
  note: "Escalated by A. Bose",
  time: "17:02"
}, {
  crit: "Warning",
  name: "Peter Din",
  note: "No action · re-queued",
  time: "17:24"
}];
function MosStat({
  icon,
  label,
  value,
  tone = "var(--brand-700)",
  sub
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      background: "var(--c-surface)",
      border: "1px solid var(--c-hairline)",
      borderRadius: "var(--r-md)",
      padding: "14px 16px",
      boxShadow: "var(--sh-1)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      color: "var(--c-ink-3)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 15,
    color: tone,
    strokeWidth: 2.2
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: ".06em",
      textTransform: "uppercase"
    }
  }, label)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 6,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-num)",
      fontSize: 26,
      fontWeight: 800,
      color: "var(--c-ink)",
      letterSpacing: "-.02em"
    }
  }, value), sub && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: "var(--c-ink-4)"
    }
  }, sub)));
}
function MosEcg({
  label,
  tag,
  color,
  bpm
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      borderRadius: 14,
      overflow: "hidden",
      border: "1px solid var(--c-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "8px 12px",
      background: "var(--brand-950)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: ".06em",
      textTransform: "uppercase",
      color: "var(--brand-400)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      color: tag === "Anomaly" ? "var(--red-500)" : "var(--green-500)"
    }
  }, tag, " \xB7 ", bpm)), /*#__PURE__*/React.createElement(EcgTrace, {
    height: 72,
    beats: 4,
    strokeW: 2.1,
    color: color
  }));
}
function MosOpRow({
  o
}) {
  const full = o.load >= o.cap;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 11,
      padding: "9px 0",
      borderBottom: "1px solid var(--c-hairline)"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: o.name,
    size: 32
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      whiteSpace: "nowrap"
    }
  }, o.name), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 5,
      borderRadius: 999,
      background: "var(--c-surface-3)",
      marginTop: 5,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${o.load / o.cap * 100}%`,
      height: "100%",
      borderRadius: 999,
      background: full ? "var(--amber-500)" : "var(--brand-500)"
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: full ? "var(--amber-600)" : "var(--c-ink-3)",
      fontFamily: "var(--font-num)"
    }
  }, o.load, "/", o.cap));
}
function MOSConsole() {
  return /*#__PURE__*/React.createElement(DashShell, {
    role: "Officer Supervisor",
    roleIcon: "shield-check",
    sub: "Supervision",
    title: "Supervisor console",
    nav: [{
      icon: "layout-dashboard",
      label: "Overview",
      active: true
    }, {
      icon: "arrow-up-right",
      label: "Escalations",
      badge: 5
    }, {
      icon: "layers",
      label: "Tickets"
    }, {
      icon: "users-round",
      label: "Operators"
    }, {
      icon: "history",
      label: "History"
    }],
    topRight: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 7,
        fontSize: 12.5,
        fontWeight: 700,
        color: "var(--c-ink-3)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: 999,
        background: "var(--green-500)"
      }
    }), " Day shift"), /*#__PURE__*/React.createElement(Search, {
      w: 200
    }))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(MosStat, {
    icon: "layers",
    label: "Open tickets",
    value: "18"
  }), /*#__PURE__*/React.createElement(MosStat, {
    icon: "triangle-alert",
    label: "Escalations",
    value: "5",
    tone: "var(--red-600)",
    sub: "2 critical"
  }), /*#__PURE__*/React.createElement(MosStat, {
    icon: "timer",
    label: "Avg response",
    value: "41s",
    tone: "var(--green-600)",
    sub: "\u2193 12s"
  }), /*#__PURE__*/React.createElement(MosStat, {
    icon: "users-round",
    label: "Operators",
    value: "4/5",
    tone: "var(--brand-700)",
    sub: "online"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 312px",
      gap: 16,
      flex: 1,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--c-surface)",
      borderRadius: "var(--r-lg)",
      border: "1px solid var(--c-hairline)",
      boxShadow: "var(--sh-2)",
      padding: 20,
      display: "flex",
      flexDirection: "column",
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "John Snow",
    size: 44,
    ring: "var(--red-100)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16.5,
      fontWeight: 800
    }
  }, "John Snow, 41 ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      fontWeight: 600,
      color: "var(--c-ink-4)"
    }
  }, "\xB7 Bradycardia")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--c-ink-3)"
    }
  }, "Referred back by Dr. Doe \xB7 ticket #4471 \xB7 4 alerts / 8 wks")), /*#__PURE__*/React.createElement(Crit, {
    level: "Critical",
    sm: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(MosEcg, {
    label: "Current ECG",
    tag: "Anomaly",
    color: "var(--red-500)",
    bpm: "44 bpm"
  }), /*#__PURE__*/React.createElement(MosEcg, {
    label: "Reference ECG",
    tag: "Baseline",
    color: "var(--brand-400)",
    bpm: "72 bpm"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      padding: "12px 14px",
      borderRadius: 14,
      background: "var(--surface-2)",
      border: "1px solid var(--c-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: ".08em",
      textTransform: "uppercase",
      color: "var(--c-ink-4)",
      marginBottom: 5
    }
  }, "Latest note \xB7 CMO"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--c-ink-2)",
      lineHeight: 1.5
    }
  }, "\u201CRate dipped below 45 bpm overnight. Confirm meds adherence before closing \u2014 escalate if symptomatic.\u201D")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      paddingTop: 16,
      display: "flex",
      flexWrap: "wrap",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    variant: "primary",
    size: "sm",
    icon: "stethoscope"
  }, "Refer to Doctor"), /*#__PURE__*/React.createElement(Btn, {
    variant: "dark",
    size: "sm",
    icon: "arrow-up-right"
  }, "Escalate to CMO"), /*#__PURE__*/React.createElement(Btn, {
    variant: "tint",
    size: "sm",
    icon: "message-square"
  }, "Notify via SMS"), /*#__PURE__*/React.createElement(Btn, {
    variant: "outline",
    size: "sm",
    icon: "check"
  }, "Close"), /*#__PURE__*/React.createElement(Btn, {
    variant: "danger",
    size: "sm",
    icon: "phone-call"
  }, "Emergency"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--c-surface)",
      borderRadius: "var(--r-md)",
      border: "1px solid var(--c-hairline)",
      boxShadow: "var(--sh-1)",
      padding: "14px 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      fontWeight: 800,
      color: "var(--c-ink)",
      marginBottom: 4
    }
  }, "Operators on shift"), MOS_OPERATORS.map((o, i) => /*#__PURE__*/React.createElement(MosOpRow, {
    key: i,
    o: o
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--c-surface)",
      borderRadius: "var(--r-md)",
      border: "1px solid var(--c-hairline)",
      boxShadow: "var(--sh-1)",
      padding: "14px 16px",
      flex: 1,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      fontWeight: 800,
      color: "var(--c-ink)",
      marginBottom: 8
    }
  }, "Escalated & referred back"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 9
    }
  }, MOS_ESCALATED.map((e, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "triangle-alert",
    size: 16,
    color: e.crit === "Critical" ? "var(--red-600)" : "var(--amber-600)",
    strokeWidth: 2.3
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700
    }
  }, e.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: "var(--c-ink-4)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, e.note)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      color: "var(--c-ink-4)",
      fontFamily: "var(--font-num)"
    }
  }, e.time)))))))));
}
Object.assign(window, {
  MOSConsole
});
})();

/* web/console-doctor */
(function(){
/* CardioNexion 2025 — Doctor console (patient detail, current vs reference ECG) */

function DocEcg({
  label,
  tag,
  tagColor,
  color,
  bpm
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      borderRadius: 16,
      overflow: "hidden",
      border: "1px solid var(--c-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 14px",
      background: "var(--brand-950)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      fontWeight: 700,
      letterSpacing: ".07em",
      textTransform: "uppercase",
      color: "var(--brand-400)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      fontWeight: 700,
      color: tagColor
    }
  }, tag, " \xB7 ", bpm)), /*#__PURE__*/React.createElement(EcgTrace, {
    height: 104,
    beats: 5,
    strokeW: 2.2,
    color: color
  }));
}
function DocInfoRow({
  k,
  v
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      gap: 12,
      padding: "8px 0",
      borderBottom: "1px solid var(--c-hairline)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: "var(--c-ink-4)",
      fontWeight: 600
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: "var(--c-ink-2)",
      fontWeight: 700,
      textAlign: "right"
    }
  }, v));
}
const DOC_TICKETS = [{
  date: "23 Nov",
  crit: "Critical",
  status: "Open"
}, {
  date: "09 Nov",
  crit: "Warning",
  status: "Closed"
}, {
  date: "28 Oct",
  crit: "Warning",
  status: "Closed"
}];
function DoctorConsole() {
  return /*#__PURE__*/React.createElement(DashShell, {
    role: "Cardiologist",
    roleIcon: "stethoscope",
    sub: "Patient detail",
    title: "John Snow",
    nav: [{
      icon: "users-round",
      label: "Patients",
      active: true
    }, {
      icon: "layers",
      label: "Tickets",
      badge: 7
    }, {
      icon: "history",
      label: "History"
    }],
    topRight: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Btn, {
      variant: "outline",
      size: "sm",
      icon: "corner-up-left"
    }, "Refer back"), /*#__PURE__*/React.createElement(Btn, {
      variant: "primary",
      size: "sm",
      icon: "check"
    }, "Resolve"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 304px",
      gap: 18,
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "John Snow",
    size: 52,
    ring: "var(--red-100)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 19,
      fontWeight: 800,
      letterSpacing: "-.01em"
    }
  }, "John Snow, 41"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--c-ink-3)"
    }
  }, "Bradycardia \xB7 monitored since 12 Dec 2016")), /*#__PURE__*/React.createElement(Crit, {
    level: "Critical"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6
    }
  }, ["ECG", "Temp", "Pulse", "BP"].map(s => /*#__PURE__*/React.createElement("span", {
    key: s,
    style: {
      fontSize: 11.5,
      fontWeight: 700,
      color: "var(--brand-700)",
      background: "var(--brand-50)",
      border: "1px solid var(--brand-100)",
      borderRadius: 999,
      padding: "4px 10px"
    }
  }, s)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(DocEcg, {
    label: "Current ECG",
    tag: "Anomaly",
    tagColor: "var(--red-500)",
    color: "var(--red-500)",
    bpm: "44 bpm"
  }), /*#__PURE__*/React.createElement(DocEcg, {
    label: "Reference ECG",
    tag: "Baseline",
    tagColor: "var(--green-500)",
    color: "var(--brand-400)",
    bpm: "72 bpm"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--c-surface)",
      borderRadius: "var(--r-md)",
      border: "1px solid var(--c-hairline)",
      boxShadow: "var(--sh-1)",
      padding: "16px 20px",
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement(Metric, {
    icon: "heart-pulse",
    iconColor: "var(--red-500)",
    label: "Heart rate",
    value: "44",
    unit: "bpm",
    sub: "\u2193 below baseline",
    trend: "down"
  }), /*#__PURE__*/React.createElement(Metric, {
    icon: "activity",
    label: "HRV",
    value: "28",
    unit: "ms",
    sub: "Low"
  }), /*#__PURE__*/React.createElement(Metric, {
    icon: "thermometer",
    label: "Skin temp",
    value: "36.5",
    unit: "\xB0c",
    sub: "Normal"
  }), /*#__PURE__*/React.createElement(Metric, {
    icon: "gauge",
    label: "Blood pressure",
    value: "128/82",
    sub: "Normal"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--c-surface)",
      borderRadius: "var(--r-md)",
      border: "1px solid var(--c-hairline)",
      boxShadow: "var(--sh-1)",
      padding: "14px 18px",
      flex: 1,
      minHeight: 0,
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      fontWeight: 800,
      marginBottom: 8
    }
  }, "Clinical notes"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--c-ink-2)",
      lineHeight: 1.5
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--c-ink)"
    }
  }, "Dr. Doe"), " \xB7 23 Nov 2016 \u2014 Nocturnal bradycardia confirmed on current strip vs baseline. Holding for 24h Holter before pacing decision."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      display: "flex",
      gap: 9,
      alignItems: "center",
      paddingTop: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 40,
      borderRadius: 999,
      background: "var(--c-surface-3)",
      display: "flex",
      alignItems: "center",
      padding: "0 16px",
      fontSize: 13,
      color: "var(--c-ink-4)"
    }
  }, "Add a note\u2026"), /*#__PURE__*/React.createElement(Btn, {
    variant: "tint",
    size: "sm",
    icon: "plus"
  }, "Add")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--c-surface)",
      borderRadius: "var(--r-md)",
      border: "1px solid var(--c-hairline)",
      boxShadow: "var(--sh-1)",
      padding: "14px 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      fontWeight: 800,
      marginBottom: 6
    }
  }, "Patient information"), /*#__PURE__*/React.createElement(DocInfoRow, {
    k: "Date of birth",
    v: "14-03-1985"
  }), /*#__PURE__*/React.createElement(DocInfoRow, {
    k: "Mobile",
    v: "+33 7 89 65 41 23"
  }), /*#__PURE__*/React.createElement(DocInfoRow, {
    k: "Relative",
    v: "Sansa Snow"
  }), /*#__PURE__*/React.createElement(DocInfoRow, {
    k: "Sensor ID",
    v: "ISEMF678905"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--c-surface)",
      borderRadius: "var(--r-md)",
      border: "1px solid var(--c-hairline)",
      boxShadow: "var(--sh-1)",
      padding: "14px 16px",
      flex: 1,
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      fontWeight: 800,
      marginBottom: 8
    }
  }, "Ticket history"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, DOC_TICKETS.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "10px 0",
      borderBottom: i < DOC_TICKETS.length - 1 ? "1px solid var(--c-hairline)" : "none"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "triangle-alert",
    size: 16,
    color: t.crit === "Critical" ? "var(--red-600)" : "var(--amber-600)",
    strokeWidth: 2.3
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700
    }
  }, t.date, " \xB7 2016"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: "var(--c-ink-4)"
    }
  }, t.crit)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      fontWeight: 700,
      color: t.status === "Open" ? "var(--brand-700)" : "var(--c-ink-4)"
    }
  }, t.status))))))));
}
Object.assign(window, {
  DoctorConsole,
  DOC_TICKETS
});
})();

/* sections/parts */
(function(){
/* CardioNexion 2025 — Case-study shared section primitives */

function Reveal({
  children,
  delay = 0,
  y = 26,
  style
}) {
  const [ref, seen] = useInView({
    threshold: 0.15
  });
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      opacity: seen ? 1 : 0,
      transform: seen ? "none" : `translateY(${y}px)`,
      transition: `opacity .7s ease ${delay}s, transform .7s cubic-bezier(.2,.7,.3,1) ${delay}s`,
      ...style
    }
  }, children);
}
function Eyebrow({
  children,
  num
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 18
    }
  }, num && /*#__PURE__*/React.createElement("span", {
    className: "cs-mono",
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: "var(--pf-num, #111)",
      padding: "4px 10px",
      border: "1px solid var(--pf-num-line, #DADAD6)",
      borderRadius: 999
    }
  }, num), /*#__PURE__*/React.createElement("span", {
    className: "cs-eyebrow"
  }, children));
}

// section wrapper with optional alt background
function Section({
  id,
  children,
  alt,
  dark,
  style,
  artifact
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    className: "cs-section" + (artifact ? " cn-artifact" : "") + (dark ? " cs-dark" : ""),
    style: {
      background: dark ? "var(--brand-950)" : alt ? "var(--c-surface-2)" : "transparent",
      color: dark ? "#EAF6F6" : "inherit",
      borderTop: alt ? "1px solid var(--c-hairline)" : "none",
      borderBottom: alt ? "1px solid var(--c-hairline)" : "none",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-wrap"
  }, children));
}

// principle card
function PrincipleCard({
  icon,
  title,
  body,
  n
}) {
  return /*#__PURE__*/React.createElement(Reveal, {
    delay: n * 0.06
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--c-surface)",
      border: "1px solid var(--c-hairline)",
      borderRadius: 14,
      padding: 28,
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 16,
      background: "var(--brand-50)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 26,
    color: "var(--brand-700)",
    strokeWidth: 1.9
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'General Sans',sans-serif",
      fontSize: 21,
      fontWeight: 500,
      letterSpacing: "-.01em",
      color: "var(--c-ink)"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Switzer',sans-serif",
      fontSize: 15.5,
      lineHeight: 1.6,
      color: "var(--c-ink-2)",
      marginTop: 10
    }
  }, body)));
}

// big stat
function BigStat({
  value,
  label,
  color
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'General Sans',sans-serif",
      fontSize: "clamp(40px,5vw,60px)",
      fontWeight: 500,
      letterSpacing: "-.03em",
      color: color || "#111",
      lineHeight: 1
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Switzer',sans-serif",
      fontSize: 15,
      color: color ? "rgba(255,255,255,.72)" : "#5F5F5C",
      marginTop: 10,
      maxWidth: 220,
      lineHeight: 1.45
    }
  }, label));
}

// legacy screenshot tile (desaturated "before")
function LegacyTile({
  src,
  label,
  flag
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "0 0 auto",
      width: 150
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 16,
      overflow: "hidden",
      border: "1px solid var(--c-hairline)",
      background: "#222",
      position: "relative",
      boxShadow: "var(--sh-1)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: label,
    style: {
      width: "100%",
      display: "block",
      filter: "saturate(.75)"
    },
    loading: "lazy"
  }), flag && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 8,
      left: 8,
      fontSize: 10,
      fontWeight: 800,
      letterSpacing: ".05em",
      textTransform: "uppercase",
      color: "#fff",
      background: "var(--red-500)",
      padding: "3px 7px",
      borderRadius: 6
    }
  }, flag)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--c-ink-3)",
      marginTop: 8,
      textAlign: "center"
    }
  }, label));
}

// before -> after critique block
function CritiqueRow({
  src,
  screen,
  problems,
  fixes,
  reverse
}) {
  return /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "150px 1fr",
      gap: 36,
      alignItems: "center",
      padding: "30px 0",
      borderTop: "1px solid var(--c-hairline)"
    },
    className: "cs-critique"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 16,
      overflow: "hidden",
      border: "1px solid var(--c-hairline)",
      boxShadow: "var(--sh-2)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: screen,
    style: {
      width: "100%",
      display: "block",
      filter: "saturate(.78)"
    },
    loading: "lazy"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--c-ink-4)",
      marginTop: 8,
      textAlign: "center",
      fontWeight: 600
    }
  }, "Legacy \xB7 2017")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'General Sans',sans-serif",
      fontSize: 22,
      fontWeight: 500,
      letterSpacing: "-.01em",
      marginBottom: 16
    }
  }, screen), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 24
    },
    className: "cs-cf"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 800,
      letterSpacing: ".08em",
      textTransform: "uppercase",
      color: "var(--red-600)",
      marginBottom: 10
    }
  }, "What held it back"), problems.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      gap: 9,
      marginBottom: 9
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 17,
    color: "var(--red-500)",
    strokeWidth: 2.5,
    style: {
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14.5,
      color: "var(--c-ink-2)",
      lineHeight: 1.45
    }
  }, p)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 800,
      letterSpacing: ".08em",
      textTransform: "uppercase",
      color: "var(--green-600)",
      marginBottom: 10
    }
  }, "2025 approach"), fixes.map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      gap: 9,
      marginBottom: 9
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 17,
    color: "var(--green-600)",
    strokeWidth: 2.5,
    style: {
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14.5,
      color: "var(--c-ink-2)",
      lineHeight: 1.45
    }
  }, f))))))));
}
Object.assign(window, {
  Reveal,
  Eyebrow,
  Section,
  PrincipleCard,
  BigStat,
  LegacyTile,
  CritiqueRow
});
})();

/* sections/system */
(function(){
/* CardioNexion 2025 — Design system showcase section */

function Swatch({
  color,
  name,
  hex,
  ink
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--r-sm)",
      overflow: "hidden",
      border: "1px solid var(--c-hairline)",
      background: "var(--c-surface)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 76,
      background: color
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 12px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      fontWeight: 700,
      color: "var(--c-ink)"
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    className: "cs-mono",
    style: {
      fontSize: 12,
      color: "var(--c-ink-3)",
      marginTop: 2
    }
  }, hex)));
}
function TypeRow({
  size,
  weight,
  label,
  sample,
  ls
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 24,
      padding: "16px 0",
      borderBottom: "1px solid var(--c-hairline)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 140,
      flex: "0 0 140px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: "var(--c-ink)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "cs-mono",
    style: {
      fontSize: 11.5,
      color: "var(--c-ink-3)"
    }
  }, size, " \xB7 ", weight)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: size,
      fontWeight: parseInt(weight),
      letterSpacing: ls || "-.01em",
      color: "var(--c-ink)",
      lineHeight: 1.1,
      flex: 1,
      minWidth: 0
    }
  }, sample));
}
function SystemSection() {
  return /*#__PURE__*/React.createElement(Section, {
    id: "system",
    alt: true,
    artifact: true
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    num: "06"
  }, "The design system"), /*#__PURE__*/React.createElement("h2", {
    className: "cs-h2",
    style: {
      maxWidth: 800
    }
  }, "An evolution of @-HEALTH \u2014 not a reset."), /*#__PURE__*/React.createElement("p", {
    className: "cs-lede",
    style: {
      maxWidth: 720,
      marginTop: 18
    }
  }, "The 2017 brand already had a soul: cardiac teal and a clinical calm. We kept the heritage hue, deepened it for contrast and trust, and built a warm, accessible neutral world around it.")), /*#__PURE__*/React.createElement(Reveal, {
    style: {
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 18,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 54,
      height: 54,
      borderRadius: 14,
      background: "#5FC9D0",
      border: "1px solid var(--c-hairline)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 54,
      height: 54,
      borderRadius: 14,
      background: "#224C59"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "cs-cap",
    style: {
      marginLeft: 4
    }
  }, "Legacy cyan + teal")), /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 24,
    color: "var(--c-ink-4)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 54,
      height: 54,
      borderRadius: 14,
      background: "var(--brand-700)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 54,
      height: 54,
      borderRadius: 14,
      background: "var(--brand-400)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 54,
      height: 54,
      borderRadius: 14,
      background: "var(--brand-950)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "cs-cap",
    style: {
      marginLeft: 4
    }
  }, "2025 deep-teal system")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-cap",
    style: {
      fontWeight: 800,
      letterSpacing: ".08em",
      textTransform: "uppercase",
      marginBottom: 14
    }
  }, "Core palette"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(132px, 1fr))",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Swatch, {
    color: "var(--brand-700)",
    name: "Deep Teal",
    hex: "#0E6E78"
  }), /*#__PURE__*/React.createElement(Swatch, {
    color: "var(--brand-400)",
    name: "Signal Teal",
    hex: "#2BC0CB"
  }), /*#__PURE__*/React.createElement(Swatch, {
    color: "var(--blue-600)",
    name: "Medical Blue",
    hex: "#2C66D4"
  }), /*#__PURE__*/React.createElement(Swatch, {
    color: "var(--green-500)",
    name: "Soft Green",
    hex: "#2FB783"
  }), /*#__PURE__*/React.createElement(Swatch, {
    color: "var(--amber-500)",
    name: "Amber \xB7 Monitor",
    hex: "#F2A92C"
  }), /*#__PURE__*/React.createElement(Swatch, {
    color: "var(--red-500)",
    name: "Critical",
    hex: "#E5484D"
  }), /*#__PURE__*/React.createElement(Swatch, {
    color: "var(--page)",
    name: "Warm White",
    hex: "#F4F1EC"
  }), /*#__PURE__*/React.createElement(Swatch, {
    color: "var(--ink)",
    name: "Ink",
    hex: "#16211F"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.15fr .85fr",
      gap: 40,
      marginTop: 48,
      alignItems: "start"
    },
    className: "cs-2up"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--c-surface)",
      border: "1px solid var(--c-hairline)",
      borderRadius: "var(--r-lg)",
      padding: "8px 28px 20px",
      boxShadow: "var(--sh-1)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-cap",
    style: {
      fontWeight: 800,
      letterSpacing: ".08em",
      textTransform: "uppercase",
      padding: "18px 0 4px"
    }
  }, "Type \xB7 SF Pro Display + Inter"), /*#__PURE__*/React.createElement(TypeRow, {
    size: "44px",
    weight: "800",
    label: "Display",
    sample: "86 / 100",
    ls: "-.03em"
  }), /*#__PURE__*/React.createElement(TypeRow, {
    size: "26px",
    weight: "800",
    label: "Title",
    sample: "Cardiac Wellness"
  }), /*#__PURE__*/React.createElement(TypeRow, {
    size: "17px",
    weight: "700",
    label: "Headline",
    sample: "Heart rhythm is stable"
  }), /*#__PURE__*/React.createElement(TypeRow, {
    size: "15px",
    weight: "400",
    label: "Body",
    sample: "Continuous, reassuring care.",
    ls: "0"
  }), /*#__PURE__*/React.createElement(TypeRow, {
    size: "12px",
    weight: "700",
    label: "Caption",
    sample: "UPDATED 2 MIN AGO",
    ls: ".06em"
  }))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 0.08
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--c-surface)",
      border: "1px solid var(--c-hairline)",
      borderRadius: "var(--r-lg)",
      padding: 28,
      boxShadow: "var(--sh-1)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-cap",
    style: {
      fontWeight: 800,
      letterSpacing: ".08em",
      textTransform: "uppercase",
      marginBottom: 18
    }
  }, "Components"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 10,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    variant: "primary",
    size: "sm"
  }, "Primary"), /*#__PURE__*/React.createElement(Btn, {
    variant: "tint",
    size: "sm"
  }, "Tint"), /*#__PURE__*/React.createElement(Btn, {
    variant: "outline",
    size: "sm"
  }, "Outline")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 10,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(StatusBadge, {
    status: "stable"
  }), /*#__PURE__*/React.createElement(StatusBadge, {
    status: "monitor"
  }), /*#__PURE__*/React.createElement(StatusBadge, {
    status: "critical"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(ScoreGauge, {
    value: 86,
    size: 92,
    stroke: 9,
    label: ""
  }), /*#__PURE__*/React.createElement(Ring, {
    value: 80,
    size: 56,
    stroke: 7,
    color: "var(--green-500)"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 800,
      color: "var(--green-600)"
    }
  }, "80")), /*#__PURE__*/React.createElement(Toggle, {
    on: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--r-sm)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(EcgTrace, {
    height: 64,
    beats: 4,
    strokeW: 2.2
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 18,
      marginTop: 36
    },
    className: "cs-3up"
  }, [["Radii", "10 · 14 · 20 · 28 px + pills", "frame"], ["Elevation", "Soft, warm-tinted, never heavy", "layers"], ["Spacing", "8-pt grid · generous breathing room", "ruler"]].map(([t, d, ic], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: i,
    delay: i * 0.05
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--c-surface)",
      border: "1px solid var(--c-hairline)",
      borderRadius: "var(--r-md)",
      padding: 22,
      display: "flex",
      gap: 14,
      alignItems: "center",
      boxShadow: "var(--sh-1)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 26,
    color: "var(--brand-700)",
    strokeWidth: 1.8
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 800
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    className: "cs-cap",
    style: {
      marginTop: 3
    }
  }, d)))))));
}
Object.assign(window, {
  SystemSection,
  Swatch,
  TypeRow
});
})();

/* sections/narrative */
(function(){
/* CardioNexion 2025 — Case-study narrative (part 1) */

const LEGACY = "/casestudy/uploads/";

// scaled phone for editorial layout — renders the device at a FULL,
// fixed screen height (never content-driven) and sizes its box to fit,
// so every preview is the same full-screen device regardless of which
// screen it contains. deviceH = inner screen height + both bezels
// (iOS 832+30 = 862; matched Android frames pass screenH so they tie).
function ScaledPhone({
  scale = 0.5,
  children,
  deviceH = 862
}) {
  // measures the real (unscaled) device so the box matches it exactly — no crop, no dead space
  const ref = React.useRef(null);
  const [sz, setSz] = React.useState(null);
  React.useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const m = () => setSz({
      w: el.offsetWidth,
      h: el.offsetHeight
    });
    m();
    const ro = new ResizeObserver(m);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      margin: "0 auto",
      maxWidth: "100%",
      width: sz ? Math.round(sz.w * scale) : Math.round(414 * scale),
      height: sz ? Math.round(sz.h * scale) : Math.round(deviceH * scale)
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "max-content",
      transform: `scale(${scale})`,
      transformOrigin: "top left"
    }
  }, children));
}

// ---- HERO -------------------------------------------------
function Hero() {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "relative",
      overflow: "hidden",
      paddingTop: 30
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-wrap",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.05fr .95fr",
      gap: 40,
      alignItems: "center",
      minHeight: "82vh"
    },
    className: "cs-hero"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap",
      marginBottom: 26
    }
  }, ["Healthcare", "Mobile · iOS + Android", "Self-directed concept study"].map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontFamily: "'Switzer',sans-serif",
      fontSize: 13,
      fontWeight: 500,
      color: "#111",
      padding: "6px 13px",
      border: "1px solid #EAEAEA",
      borderRadius: 999,
      background: "#F2F2EF",
      display: "inline-flex",
      alignItems: "center",
      gap: 8
    }
  }, i === 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 999,
      background: "#7CFF3A"
    }
  }), t)))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 0.05
  }, /*#__PURE__*/React.createElement("h1", {
    className: "cs-h1"
  }, "CardioNexion", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brand-600)"
    }
  }, "."))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 0.1
  }, /*#__PURE__*/React.createElement("p", {
    className: "cs-lede",
    style: {
      maxWidth: 540,
      marginTop: 22
    }
  }, "Reimagining ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--c-ink)"
    }
  }, "@-HEALTH"), "'s cardiac-monitoring app \u2014 a product I worked on, redesigned here as a calm companion rather than a device manager."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13.5,
      lineHeight: 1.6,
      color: "var(--c-ink-3)",
      maxWidth: 560,
      marginTop: 20,
      paddingTop: 18,
      borderTop: "1px solid var(--c-hairline)"
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--c-ink-2)"
    }
  }, "Where this sits:"), " the 2017 product and the 21 legacy screens are real \u2014 I worked on it. Everything from the redesign onward is my own concept work, not a shipped release. The original site is offline now, but the product was presented at ", /*#__PURE__*/React.createElement("a", {
    href: "https://esc365.escardio.org/presentation/181219",
    target: "_blank",
    rel: "noopener",
    style: {
      color: "var(--brand-700)",
      textDecoration: "underline",
      textUnderlineOffset: 2
    }
  }, "ESC Congress"), " and demonstrated ", /*#__PURE__*/React.createElement("a", {
    href: "https://www.youtube.com/watch?v=Cr36OX5fhKU",
    target: "_blank",
    rel: "noopener",
    style: {
      color: "var(--brand-700)",
      textDecoration: "underline",
      textUnderlineOffset: 2
    }
  }, "on video"), ".")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 0.13
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: 28,
      flexWrap: "wrap",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#context",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      height: 44,
      padding: "0 18px",
      borderRadius: 999,
      fontFamily: "'General Sans',sans-serif",
      fontSize: 14,
      fontWeight: 500,
      textDecoration: "none",
      background: "#111",
      color: "#fff",
      border: "1px solid #111"
    }
  }, "Read the case study \u2192"), /*#__PURE__*/React.createElement("a", {
    href: "https://www.youtube.com/watch?v=Cr36OX5fhKU",
    target: "_blank",
    rel: "noopener",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      height: 44,
      padding: "0 18px",
      borderRadius: 999,
      fontFamily: "'General Sans',sans-serif",
      fontSize: 14,
      fontWeight: 500,
      textDecoration: "none",
      background: "#fff",
      color: "#111",
      border: "1px solid #DADAD6"
    }
  }, "Watch the 2017 demo \u2197"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Switzer',sans-serif",
      fontSize: 13,
      color: "#5F5F5C"
    }
  }, "~12 min read"))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 0.15
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 28,
      marginTop: 40,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(BigStat, {
    value: "21",
    label: "Legacy screens reimagined across the full journey"
  }), /*#__PURE__*/React.createElement(BigStat, {
    value: "2\xD7",
    label: "Platforms \u2014 native iOS and Material 3 Android"
  }), /*#__PURE__*/React.createElement(BigStat, {
    value: "50+",
    label: "Designed for older and post-surgery patients first"
  })))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 0.12
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: "-6% -10%",
      background: "radial-gradient(60% 50% at 60% 30%, var(--brand-100), transparent 70%)",
      filter: "blur(20px)",
      opacity: .7
    }
  }), /*#__PURE__*/React.createElement(ScaledPhone, {
    scale: 0.62
  }, /*#__PURE__*/React.createElement(PhoneFrame, {
    platform: "ios"
  }, /*#__PURE__*/React.createElement(HomeScreen, {
    platform: "ios"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "cs-herochip",
    style: {
      width: 168,
      borderRadius: 20,
      overflow: "hidden",
      border: "5px solid #05090E",
      boxShadow: "var(--sh-3)",
      background: "#05090E"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "/casestudy/health/assets/hw-sense-full.png",
    alt: "CardioNexion Sense ECG sensor",
    style: {
      width: "100%",
      display: "block"
    },
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 8,
      bottom: 8,
      display: "flex",
      alignItems: "center",
      gap: 6,
      padding: "5px 10px 5px 8px",
      borderRadius: 999,
      background: "rgba(7,38,43,.82)",
      backdropFilter: "blur(4px)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 999,
      background: "var(--brand-400)"
    },
    className: "cn-blink"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: ".02em",
      color: "#fff"
    }
  }, "Sensor paired"))))))));
}

// ---- CONTEXT ----------------------------------------------
function ContextSection() {
  const tiles = [[2, "Onboarding"], [9, "Find sensor"], [12, "Sensor status"], [16, "Devices"], [17, "Menu"], [18, "Low battery"], [19, "No internet"], [20, "Settings"], [21, "Notifications"]];
  return /*#__PURE__*/React.createElement(Section, {
    id: "context"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 50,
      alignItems: "start"
    },
    className: "cs-2up"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    num: "01"
  }, "The starting point"), /*#__PURE__*/React.createElement("h2", {
    className: "cs-h2"
  }, "A 2017 product doing", /*#__PURE__*/React.createElement("br", null), "a 2025 job.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 0.08
  }, /*#__PURE__*/React.createElement("p", {
    className: "cs-body",
    style: {
      marginTop: 8
    }
  }, "@-HEALTH connects patients wearing a smart ECG garment to their care team \u2014 continuous monitoring, emergency alerts and remote supervision for people over 50, most of them recovering from cardiac surgery."), /*#__PURE__*/React.createElement("p", {
    className: "cs-body",
    style: {
      marginTop: 16
    }
  }, "The app, though, was built around ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--c-ink)"
    }
  }, "pairing a sensor"), ". It opened on a \"Find Sensor\" button, kept health data behind menus, and went full-screen red when something looked wrong. Looking at it again years later, what struck me was the mismatch: the person holding this phone has just had heart surgery and wants to know whether they're alright. The app answered a different question \u2014 whether the hardware was connected. The data was all there. The ", /*#__PURE__*/React.createElement("i", null, "reassurance"), " wasn't."))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 0.1
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      overflowX: "auto",
      marginTop: 48,
      padding: "4px 0 18px"
    }
  }, tiles.map(([n, l], i) => /*#__PURE__*/React.createElement(LegacyTile, {
    key: i,
    src: `${LEGACY}${n}.png`,
    label: l,
    flag: n === 18 || n === 19 ? "Panic" : null
  })))));
}

// ---- VISION (dark) ----------------------------------------
function VisionSection() {
  return /*#__PURE__*/React.createElement(Section, {
    id: "vision",
    dark: true
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    num: "03"
  }, "Product vision"), /*#__PURE__*/React.createElement("h2", {
    className: "cs-h2",
    style: {
      maxWidth: 980,
      color: "#fff"
    }
  }, "From a device manager into a ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brand-400)"
    }
  }, "calm daily companion"), " that turns continuous data into quiet confidence.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 24,
      marginTop: 56
    },
    className: "cs-3up"
  }, [["radar", "Prevention over panic", "Surface gentle, early signals — not just emergencies — so patients and doctors act before a crisis."], ["hand-heart", "Reassurance by default", "Every screen answers the patient's real question first: \u201cIs my heart okay right now?\u201d"], ["accessibility", "Built for 50+", "Large type, high contrast, big targets and plain language as the baseline, not a setting."]].map(([ic, t, b], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: i,
    delay: i * 0.07
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "2px solid var(--brand-400)",
      paddingTop: 22
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 30,
    color: "var(--brand-400)",
    strokeWidth: 1.8
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 800,
      marginTop: 16,
      color: "#fff"
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15.5,
      lineHeight: 1.6,
      color: "rgba(255,255,255,.72)",
      marginTop: 10
    }
  }, b))))));
}

// ---- PRINCIPLES -------------------------------------------
function PrinciplesSection() {
  return /*#__PURE__*/React.createElement(Section, {
    id: "principles",
    alt: true
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    num: "04"
  }, "Design principles"), /*#__PURE__*/React.createElement("h2", {
    className: "cs-h2",
    style: {
      maxWidth: 760
    }
  }, "Four commitments that shaped every screen.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 20,
      marginTop: 48
    },
    className: "cs-4up"
  }, /*#__PURE__*/React.createElement(PrincipleCard, {
    n: 0,
    icon: "heart-handshake",
    title: "Empathy & reassurance",
    body: "Cardiac anxiety is real. Copy is human and calm; color and motion soothe rather than alarm."
  }), /*#__PURE__*/React.createElement(PrincipleCard, {
    n: 1,
    icon: "accessibility",
    title: "Accessibility first",
    body: "Minimum 15px body, 44px+ targets, AA contrast, voice readouts and a live large-text mode."
  }), /*#__PURE__*/React.createElement(PrincipleCard, {
    n: 2,
    icon: "stethoscope",
    title: "Clinical clarity",
    body: "Complex signals become a single wellness score, a status word, and one clear next step."
  }), /*#__PURE__*/React.createElement(PrincipleCard, {
    n: 3,
    icon: "shield-plus",
    title: "Preventive care",
    body: "Trends, baselines and early nudges keep monitoring continuous \u2014 not emergency-only."
  })));
}
Object.assign(window, {
  Hero,
  ContextSection,
  VisionSection,
  PrinciplesSection,
  ScaledPhone,
  LEGACY
});
})();

/* sections/showcase */
(function(){
/* CardioNexion 2025 — Case-study showcase (part 2) */

function PhoneCaption({
  children,
  sub
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: "var(--c-ink)"
    }
  }, children), sub && /*#__PURE__*/React.createElement("div", {
    className: "cs-cap",
    style: {
      marginTop: 3
    }
  }, sub));
}

// ---- HOME SHOWCASE ----------------------------------------
function HomeShowcase() {
  const anat = [["gauge", "Cardiac Wellness Score", "One number — 86/100 — answers \u201cam I okay?\u201d at a glance, with a calm status word."], ["sparkles", "Cardio Insights (AI)", "Plain-language takeaways: \u201cResting HR improved 8% this week.\u201d"], ["heart-pulse", "Live monitoring", "A real-time ECG ribbon and today's recording time, always visible."], ["grid-2x2", "Today's health", "Heart rate, ECG, activity and sleep as scannable, color-coded tiles."], ["trending-up", "Weekly trends", "Recovery and rhythm trends that reward consistency."], ["users-round", "Care, one tap away", "Doctor and emergency contacts surfaced — never buried in a menu."]];
  return /*#__PURE__*/React.createElement(Section, {
    id: "home"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    num: "05"
  }, "The homepage"), /*#__PURE__*/React.createElement("h2", {
    className: "cs-h2",
    style: {
      maxWidth: 820
    }
  }, "The screen that used to say ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--c-ink-4)"
    }
  }, "\"Find Sensor\""), " now says ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brand-600)"
    }
  }, "\"your heart is okay.\"")), /*#__PURE__*/React.createElement("p", {
    className: "cs-lede",
    style: {
      maxWidth: 720,
      marginTop: 18
    }
  }, "The dashboard is the whole product. It leads with reassurance, then layers in data for those who want it \u2014 the same architecture, rendered natively on each platform.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 0.08
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 60,
      justifyContent: "center",
      flexWrap: "wrap",
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ScaledPhone, {
    scale: 0.66
  }, /*#__PURE__*/React.createElement(PhoneFrame, {
    platform: "ios"
  }, /*#__PURE__*/React.createElement(HomeScreen, {
    platform: "ios"
  }))), /*#__PURE__*/React.createElement(PhoneCaption, {
    sub: "SF Pro \xB7 Dynamic Island \xB7 large-title rhythm"
  }, "iOS")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ScaledPhone, {
    scale: 0.66
  }, /*#__PURE__*/React.createElement(PhoneFrame, {
    platform: "android",
    screenH: 836
  }, /*#__PURE__*/React.createElement(HomeScreen, {
    platform: "android"
  }))), /*#__PURE__*/React.createElement(PhoneCaption, {
    sub: "Material 3 \xB7 pill nav \xB7 tonal active states"
  }, "Android")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 28,
      marginTop: 72
    },
    className: "cs-3up"
  }, anat.map(([ic, t, b], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: i,
    delay: i * 0.04
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 13,
      flex: "0 0 44px",
      background: "var(--brand-50)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 22,
    color: "var(--brand-700)",
    strokeWidth: 1.9
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 800,
      color: "var(--c-ink)"
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      lineHeight: 1.55,
      color: "var(--c-ink-2)",
      marginTop: 4
    }
  }, b)))))));
}

// ---- INFORMATION ARCHITECTURE -----------------------------
function IASection() {
  const cols = [["house", "Home", ["Wellness score", "Cardio Insights", "Today's health", "Live monitoring", "Weekly trends"]], ["activity", "Heart", ["Live ECG", "Rhythm history", "HR & HRV", "Recordings", "Share with doctor"]], ["bell", "Alerts", ["Smart alerts", "Needs attention", "Resolved", "Medication", "Health timeline"]], ["users-round", "Care", ["Your doctor", "Recovery plan", "Care circle", "Emergency / SOS", "Messages"]]];
  return /*#__PURE__*/React.createElement(Section, {
    id: "ia",
    alt: true
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    num: "07"
  }, "Information architecture"), /*#__PURE__*/React.createElement("h2", {
    className: "cs-h2",
    style: {
      maxWidth: 760
    }
  }, "Five buried menu items became four clear tabs."), /*#__PURE__*/React.createElement("p", {
    className: "cs-lede",
    style: {
      maxWidth: 700,
      marginTop: 16
    }
  }, "The legacy app hid Dashboard, Settings, Notifications, Subscription and Product Guide in a side drawer. We replaced it with a thumb-reachable tab bar organised around what patients actually ask.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 18,
      marginTop: 48
    },
    className: "cs-4up"
  }, cols.map(([ic, t, items], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: i,
    delay: i * 0.06
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--c-surface)",
      border: "1px solid var(--c-hairline)",
      borderRadius: "var(--r-lg)",
      overflow: "hidden",
      boxShadow: "var(--sh-1)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "18px 20px",
      background: i === 0 ? "var(--brand-700)" : "var(--c-surface)",
      color: i === 0 ? "#fff" : "var(--c-ink)",
      borderBottom: "1px solid var(--c-hairline)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 20,
    color: i === 0 ? "#fff" : "var(--brand-700)",
    strokeWidth: 2.1
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 800
    }
  }, t)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "8px 20px 16px"
    }
  }, items.map((it, j) => /*#__PURE__*/React.createElement("div", {
    key: j,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9,
      padding: "9px 0",
      fontSize: 14,
      color: "var(--c-ink-2)",
      borderBottom: j < items.length - 1 ? "1px solid var(--c-hairline)" : "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: 999,
      background: "var(--brand-400)"
    }
  }), it))))))));
}

// ---- CRITIQUE ---------------------------------------------
function CritiqueSection() {
  return /*#__PURE__*/React.createElement(Section, {
    id: "critique"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    num: "08"
  }, "Screen by screen"), /*#__PURE__*/React.createElement("h2", {
    className: "cs-h2",
    style: {
      maxWidth: 760
    }
  }, "What was holding each screen back \u2014 and the 2025 fix.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(CritiqueRow, {
    src: `${LEGACY}9.png`,
    screen: "Home \u2192 Cardiac dashboard",
    problems: ["Opens to an empty \u201cFind Sensor\u201d button", "No health information at all", "Stock photo, weak hierarchy"],
    fixes: ["Leads with a wellness score & status", "Live data, insights and trends up front", "Calm teal system, clear type scale"]
  }), /*#__PURE__*/React.createElement(CritiqueRow, {
    src: `${LEGACY}2.png`,
    screen: "Onboarding & pairing",
    reverse: true,
    problems: ["Six near-identical instruction slides", "Typos and tiny low-contrast text", "Pairing felt technical and cold"],
    fixes: ["Guided, reassuring step-by-step setup", "Big type, plain language, clear progress", "Auto-discovery with a friendly success state"]
  }), /*#__PURE__*/React.createElement(CritiqueRow, {
    src: `${LEGACY}18.png`,
    screen: "Error & empty states",
    problems: ["Full-screen red implies an emergency", "Alarming for an anxious cardiac patient", "No reassurance that monitoring continues"],
    fixes: ["Calm amber/blue, contained illustration", "Human copy and a clear next step", "\u201cYou're still being monitored\u201d up front"]
  }), /*#__PURE__*/React.createElement(CritiqueRow, {
    src: `${LEGACY}21.png`,
    screen: "Notifications \u2192 Smart alerts",
    reverse: true,
    problems: ["Generic \u201cWarning\u201d with no meaning", "No priority, no context, no action", "Subscription noise mixed with health"],
    fixes: ["Plain-language, baseline-aware alerts", "Priority grouping with one clear action", "Doctor-review status shown inline"]
  })));
}

// ---- ONBOARDING FLOW --------------------------------------
function FlowSection() {
  const steps = [[/*#__PURE__*/React.createElement(OnboardWelcome, null), "Welcome", "Reassurance before setup"], [/*#__PURE__*/React.createElement(OnboardPlacement, null), "Wear the garment", "Plain, large guidance"], [/*#__PURE__*/React.createElement(OnboardPairing, null), "Auto-pair", "Finds the sensor for you"], [/*#__PURE__*/React.createElement(OnboardSuccess, null), "You're protected", "Warm, confident finish"]];
  return /*#__PURE__*/React.createElement(Section, {
    id: "flow",
    alt: true
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    num: "09"
  }, "Onboarding flow"), /*#__PURE__*/React.createElement("h2", {
    className: "cs-h2",
    style: {
      maxWidth: 760
    }
  }, "Six instruction slides \u2192 four reassuring steps.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 0.08
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 30,
      overflowX: "auto",
      marginTop: 50,
      padding: "4px 4px 18px",
      justifyContent: "center",
      flexWrap: "wrap"
    }
  }, steps.map(([scr, t, s], i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement(ScaledPhone, {
    scale: 0.5
  }, /*#__PURE__*/React.createElement(PhoneFrame, {
    platform: "ios",
    statusBg: i === 0 ? "var(--brand-900)" : i === 3 ? "var(--green-600)" : "var(--c-page)",
    statusDark: i !== 0 && i !== 3,
    navBg: "var(--c-page)"
  }, scr)), /*#__PURE__*/React.createElement(PhoneCaption, {
    sub: s
  }, `${i + 1}. ${t}`))))));
}
Object.assign(window, {
  HomeShowcase,
  IASection,
  CritiqueSection,
  FlowSection,
  PhoneCaption
});
})();

/* sections/gallery */
(function(){
/* CardioNexion 2025 — Case-study gallery, features, a11y, close */

function GalleryItem({
  platform = "ios",
  statusBg = "var(--c-page)",
  statusDark = true,
  navBg,
  children,
  title,
  sub
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ScaledPhone, {
    scale: 0.5
  }, /*#__PURE__*/React.createElement(PhoneFrame, {
    platform: platform,
    statusBg: statusBg,
    statusDark: statusDark,
    navBg: navBg || statusBg
  }, children)), /*#__PURE__*/React.createElement(PhoneCaption, {
    sub: sub
  }, title));
}
function ScreensGallery() {
  return /*#__PURE__*/React.createElement(Section, {
    id: "screens"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    num: "10"
  }, "The full journey"), /*#__PURE__*/React.createElement("h2", {
    className: "cs-h2",
    style: {
      maxWidth: 760
    }
  }, "Every legacy screen, reimagined."), /*#__PURE__*/React.createElement("p", {
    className: "cs-lede",
    style: {
      maxWidth: 700,
      marginTop: 16
    }
  }, "Sensor management, alerts, live ECG, the care circle, settings and the moments when things go wrong \u2014 all rebuilt on one calm system.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 0.08
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 40,
      flexWrap: "wrap",
      justifyContent: "center",
      marginTop: 52
    }
  }, /*#__PURE__*/React.createElement(GalleryItem, {
    title: "Sensor",
    sub: "Status, battery & devices"
  }, /*#__PURE__*/React.createElement(SensorScreen, {
    platform: "ios"
  })), /*#__PURE__*/React.createElement(GalleryItem, {
    title: "Alerts",
    sub: "Smart, human-worded"
  }, /*#__PURE__*/React.createElement(AlertsScreen, {
    platform: "ios"
  })), /*#__PURE__*/React.createElement(GalleryItem, {
    title: "Live ECG",
    sub: "On-demand recording"
  }, /*#__PURE__*/React.createElement(EcgScreen, {
    platform: "ios"
  })), /*#__PURE__*/React.createElement(GalleryItem, {
    title: "Care Circle",
    sub: "Doctor, family & SOS"
  }, /*#__PURE__*/React.createElement(CareScreen, {
    platform: "ios"
  })), /*#__PURE__*/React.createElement(GalleryItem, {
    title: "Settings",
    sub: "Calm, grouped, a11y-first"
  }, /*#__PURE__*/React.createElement(SettingsScreen, {
    platform: "ios"
  })), /*#__PURE__*/React.createElement(GalleryItem, {
    title: "Low battery",
    sub: "Calm, not alarming"
  }, /*#__PURE__*/React.createElement(StateLowBattery, null)), /*#__PURE__*/React.createElement(GalleryItem, {
    title: "Offline",
    sub: "Reassuring recovery"
  }, /*#__PURE__*/React.createElement(StateOffline, null)))));
}

// ---- FEATURE ROW ------------------------------------------
function FeatureRow({
  device,
  scale = 0.56,
  statusBg,
  statusDark = true,
  navBg,
  eyebrow,
  title,
  body,
  points,
  reverse,
  accent = "var(--brand-700)"
}) {
  return /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "0.85fr 1.15fr",
      gap: 60,
      alignItems: "center",
      padding: "20px 0"
    },
    className: "cs-feat"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      order: reverse ? 2 : 0
    }
  }, /*#__PURE__*/React.createElement(ScaledPhone, {
    scale: scale
  }, /*#__PURE__*/React.createElement(PhoneFrame, {
    platform: "ios",
    statusBg: statusBg,
    statusDark: statusDark,
    navBg: navBg || statusBg
  }, device))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "cs-eyebrow",
    style: {
      color: accent,
      marginBottom: 14
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h3", {
    className: "cs-h3",
    style: {
      maxWidth: 460
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "cs-body",
    style: {
      marginTop: 14,
      maxWidth: 480
    }
  }, body), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, points.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      gap: 11,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 24,
      height: 24,
      borderRadius: 999,
      flex: "0 0 24px",
      background: "var(--brand-50)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 15,
    color: accent,
    strokeWidth: 3
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15.5,
      color: "var(--c-ink-2)",
      lineHeight: 1.5
    }
  }, p)))))));
}
function FeaturesSection() {
  return /*#__PURE__*/React.createElement(Section, {
    id: "features",
    alt: true
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    num: "13"
  }, "New for 2025"), /*#__PURE__*/React.createElement("h2", {
    className: "cs-h2",
    style: {
      maxWidth: 760
    }
  }, "Features a modern cardiac platform should have.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      display: "flex",
      flexDirection: "column",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement(FeatureRow, {
    device: /*#__PURE__*/React.createElement(AlertsScreen, {
      platform: "ios"
    }),
    eyebrow: "Smart alerts",
    accent: "var(--amber-600)",
    title: "Alerts that explain, not alarm.",
    body: "Instead of a bare \u201CWarning,\u201D alerts describe what changed in plain language, set against the patient's own baseline \u2014 and tell them exactly what to do next.",
    points: ["\u201cYour rhythm looked different from your baseline last night.\u201d", "Priority grouping: needs attention, informational, resolved", "Doctor-review status shown inline — no guessing"]
  }), /*#__PURE__*/React.createElement(FeatureRow, {
    device: /*#__PURE__*/React.createElement(EcgScreen, {
      platform: "ios"
    }),
    reverse: true,
    eyebrow: "Cardio Insights \xB7 AI",
    title: "A weekly read on your recovery.",
    body: "On-device intelligence turns months of signal into a sentence a patient can act on \u2014 celebrating progress and flagging drift early.",
    points: ["\u201cResting heart rate improved 8% this week.\u201d", "Recovery and consistency trends in everyday words", "Live ECG with on-device rhythm classification"]
  }), /*#__PURE__*/React.createElement(FeatureRow, {
    device: /*#__PURE__*/React.createElement(CareScreen, {
      platform: "ios"
    }),
    eyebrow: "Care Circle & recovery",
    accent: "var(--green-600)",
    title: "The people who keep you safe, together.",
    body: "A doctor, family and caregivers in one place \u2014 with post-surgery recovery milestones and a one-tap SOS that shares location and your latest ECG.",
    points: ["Post-surgery recovery tracking with milestones", "Caregivers can follow your dashboard with consent", "Emergency call shares ECG + location instantly"]
  })));
}

// ---- ACCESSIBILITY ----------------------------------------
function AccessibilitySection() {
  const items = [["type", "15px minimum body", "Scaling to a true large-text mode — never the 11px the legacy used."], ["scan", "AA+ contrast", "Deep teal on warm white clears WCAG AA; status colors are paired with words and icons, never color alone."], ["hand", "44px+ targets", "Every tap target meets the platform minimum; primary actions are 50–58px tall."], ["volume-2", "Voice readouts", "\u201cSpeak my daily summary\u201d reads the score and status aloud for low-vision users."], ["message-square", "Plain language", "No jargon on the surface; clinical detail is available, never required."], ["moon-star", "Dark & quiet hours", "A premium dark mode plus quiet-hours that mute all but critical alerts."]];
  return /*#__PURE__*/React.createElement(Section, {
    id: "accessibility"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 50,
      alignItems: "start"
    },
    className: "cs-2up"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    num: "14"
  }, "Accessibility"), /*#__PURE__*/React.createElement("h2", {
    className: "cs-h2"
  }, "Designed for the people who need it, first."), /*#__PURE__*/React.createElement("p", {
    className: "cs-body",
    style: {
      marginTop: 16,
      maxWidth: 460
    }
  }, "The primary users are 50+, often post-surgery, sometimes anxious. Accessibility wasn't a checklist at the end \u2014 it set the type scale, contrast and language from the first frame."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      marginTop: 26,
      padding: "16px 18px",
      background: "var(--brand-50)",
      border: "1px solid var(--brand-100)",
      borderRadius: "var(--r-md)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sliders-horizontal",
    size: 22,
    color: "var(--brand-700)",
    strokeWidth: 2
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14.5,
      color: "var(--c-ink-2)",
      lineHeight: 1.5
    }
  }, "Open ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--c-ink)"
    }
  }, "Tweaks"), " to flip dark mode and bump the live large-text scale across the mockups."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    },
    className: "cs-cf"
  }, items.map(([ic, t, b], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: i,
    delay: i * 0.04
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--c-surface)",
      border: "1px solid var(--c-hairline)",
      borderRadius: "var(--r-md)",
      padding: 20,
      height: "100%",
      boxShadow: "var(--sh-1)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 24,
    color: "var(--brand-700)",
    strokeWidth: 1.9
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 800,
      marginTop: 14
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      lineHeight: 1.5,
      color: "var(--c-ink-3)",
      marginTop: 6
    }
  }, b)))))));
}

// ---- CLOSING ----------------------------------------------
function ClosingSection() {
  return /*#__PURE__*/React.createElement(Section, {
    id: "close",
    dark: true
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      maxWidth: 820,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, /*#__PURE__*/React.createElement("span", {
    style: {
      width: "100%",
      display: "block",
      textAlign: "center"
    }
  }, "The outcome")), /*#__PURE__*/React.createElement("h2", {
    className: "cs-h2",
    style: {
      color: "#fff"
    }
  }, "A device manager became a reason to feel calm."), /*#__PURE__*/React.createElement("p", {
    className: "cs-lede",
    style: {
      color: "rgba(255,255,255,.75)",
      marginTop: 20
    }
  }, "Same product goals, same teal heritage \u2014 reframed around the one question every cardiac patient wakes up with. Continuous monitoring, now in service of confidence."))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 0.1
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 40,
      justifyContent: "center",
      flexWrap: "wrap",
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement(BigStat, {
    value: "1",
    label: "Wellness score in place of a wall of data",
    color: "var(--brand-400)"
  }), /*#__PURE__*/React.createElement(BigStat, {
    value: "4",
    label: "Clear tabs replacing a hidden drawer",
    color: "var(--brand-400)"
  }), /*#__PURE__*/React.createElement(BigStat, {
    value: "0",
    label: "Full-screen red panic states remaining",
    color: "var(--brand-400)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid rgba(255,255,255,.14)",
      marginTop: 70,
      paddingTop: 28,
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "rgba(255,255,255,.72)",
      maxWidth: 640,
      lineHeight: 1.5
    }
  }, "Concept redesign case study. Builds on the original CardioNexion / @-HEALTH product (\xA9 2017). All patient data shown is fictional. Not a medical device; illustrative only.")));
}
Object.assign(window, {
  ScreensGallery,
  FeaturesSection,
  AccessibilitySection,
  ClosingSection,
  FeatureRow,
  GalleryItem
});
})();

/* sections/hardware */
(function(){
/* CardioNexion 2025 — The Hardware showcase (real product renders) */

const HW = "/casestudy/health/assets/";

/* ---------- small building blocks ---------- */

// vertical spec readout (55mm / 45mm / 12mm / 25g)
function SpecRow({
  icon,
  value,
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "0 0 40px",
      width: 40,
      height: 40,
      borderRadius: 12,
      border: "1px solid rgba(43,192,203,.28)",
      background: "rgba(43,192,203,.07)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 19,
    color: "var(--brand-400)",
    strokeWidth: 1.9
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1.05
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-num)",
      fontSize: 26,
      fontWeight: 800,
      color: "#fff",
      letterSpacing: "-.01em"
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: ".12em",
      textTransform: "uppercase",
      color: "rgba(190,214,212,.55)",
      marginTop: 3
    }
  }, label)));
}

// short feature item with teal icon chip
function HwFeature({
  icon,
  title,
  body
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 13,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "0 0 38px",
      width: 38,
      height: 38,
      borderRadius: 11,
      background: "rgba(43,192,203,.1)",
      border: "1px solid rgba(43,192,203,.24)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 18,
    color: "var(--brand-400)",
    strokeWidth: 2
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      fontWeight: 800,
      letterSpacing: ".04em",
      textTransform: "uppercase",
      color: "var(--brand-200)"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      lineHeight: 1.5,
      color: "rgba(214,232,231,.7)",
      marginTop: 3
    }
  }, body)));
}

// 8-up key-feature card
function FeatureCard({
  icon,
  title,
  body,
  delay
}) {
  return /*#__PURE__*/React.createElement(Reveal, {
    delay: delay,
    y: 20
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-fcard",
    style: {
      position: "relative",
      height: "100%",
      padding: "26px 24px 28px",
      borderRadius: "var(--r-lg)",
      background: "linear-gradient(180deg, rgba(18,40,44,.9), rgba(9,24,27,.9))",
      border: "1px solid rgba(43,192,203,.16)",
      overflow: "hidden",
      transition: "border-color .35s, transform .35s"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 50,
      height: 50,
      borderRadius: 14,
      background: "rgba(43,192,203,.1)",
      border: "1px solid rgba(43,192,203,.26)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 24,
    color: "var(--brand-400)",
    strokeWidth: 1.9
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17.5,
      fontWeight: 800,
      letterSpacing: "-.01em",
      color: "#EAF6F6",
      lineHeight: 1.18
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      lineHeight: 1.55,
      color: "rgba(206,226,225,.64)",
      marginTop: 9
    }
  }, body)));
}

// shared product-shot frame: identical scale, glow and alignment in every block
const PRODUCT_H = 560;
function ProductShot({
  src,
  alt,
  shadow
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      width: "76%",
      height: "68%",
      borderRadius: "50%",
      background: "radial-gradient(closest-side, rgba(43,192,203,.2), transparent 72%)",
      filter: "blur(24px)"
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    loading: "lazy",
    className: "cs-shot",
    style: {
      position: "relative",
      height: "auto",
      maxHeight: PRODUCT_H,
      maxWidth: "100%",
      width: "auto",
      display: "block",
      filter: shadow ? "drop-shadow(0 30px 50px rgba(0,0,0,.5))" : "none"
    }
  }));
}

// numbered legend item for the exploded view
function LayerItem({
  n,
  title,
  body
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      alignItems: "flex-start",
      padding: "16px 0",
      borderTop: "1px solid rgba(43,192,203,.14)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "cs-mono",
    style: {
      flex: "0 0 30px",
      width: 30,
      height: 30,
      borderRadius: 999,
      marginTop: 1,
      background: "rgba(43,192,203,.12)",
      color: "var(--brand-400)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 13,
      fontWeight: 700,
      border: "1px solid rgba(43,192,203,.3)"
    }
  }, n), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16.5,
      fontWeight: 800,
      color: "#EAF6F6",
      letterSpacing: "-.01em"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      lineHeight: 1.55,
      color: "rgba(214,232,231,.66)",
      marginTop: 3
    }
  }, body)));
}

// pill badge for the certifications strip
function CertGroup({
  label,
  items
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      fontWeight: 800,
      letterSpacing: ".18em",
      textTransform: "uppercase",
      color: "rgba(190,214,212,.5)",
      marginBottom: 16
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 9
    }
  }, items.map(([ic, t], i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "9px 14px",
      borderRadius: 999,
      background: "rgba(43,192,203,.07)",
      border: "1px solid rgba(43,192,203,.2)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 15,
    color: "var(--brand-400)",
    strokeWidth: 2
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13.5,
      fontWeight: 700,
      color: "#DDEEEC"
    }
  }, t)))));
}

/* ---------- 1 · full-bleed hero band (vest on the chest) ---------- */

function HeroHardwareBand() {
  return /*#__PURE__*/React.createElement("section", {
    "aria-label": "The device",
    className: "cs-dark",
    style: {
      position: "relative",
      width: "100%",
      overflow: "hidden",
      background: "radial-gradient(120% 90% at 80% 20%, #0E3A41 0%, #07262B 45%, #05181C 100%)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-wrap",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-hwhero",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr .92fr",
      gap: 20,
      alignItems: "center",
      minHeight: "clamp(560px, 78vh, 760px)",
      paddingTop: 40,
      paddingBottom: 40
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("span", {
    className: "cs-eyebrow",
    style: {
      color: "var(--brand-400)"
    }
  }, "Before the redesign \u2014 the product"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "clamp(34px,5vw,68px)",
      lineHeight: .98,
      letterSpacing: "-.03em",
      fontWeight: 800,
      color: "#fff",
      margin: "18px 0 0",
      maxWidth: 640
    }
  }, "A clinical ECG,", /*#__PURE__*/React.createElement("br", null), "woven into something", /*#__PURE__*/React.createElement("br", null), "you'd actually wear."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "clamp(16px,1.4vw,20px)",
      lineHeight: 1.55,
      color: "rgba(224,240,239,.78)",
      maxWidth: 480,
      marginTop: 22
    }
  }, "CardioNexion isn't an app with a gadget bolted on \u2014 it's a worn medical device. A soft smart vest carries the", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "#fff",
      fontWeight: 700
    }
  }, " CardioNexion Sense"), " against the chest and streams continuous heart data to the @-HEALTH platform."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 26,
      marginTop: 36,
      flexWrap: "wrap"
    }
  }, [["Continuous", "ECG monitoring"], ["7-day", "battery life"], ["Clinical-grade", "accuracy"]].map(([a, b], i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-num)",
      fontSize: 26,
      fontWeight: 800,
      color: "var(--brand-400)",
      letterSpacing: "-.01em"
    }
  }, a), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "rgba(200,222,221,.62)",
      marginTop: 2
    }
  }, b))))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 0.12,
    style: {
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      width: "82%",
      height: "70%",
      borderRadius: "50%",
      background: "radial-gradient(closest-side, rgba(43,192,203,.34), transparent 72%)",
      filter: "blur(26px)"
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: `${HW}hw-vest.png`,
    alt: "The CardioNexion smart ECG vest with the Sense sensor docked on the chest",
    className: "cn-float",
    style: {
      position: "relative",
      height: "auto",
      maxHeight: "min(68vh, 660px)",
      maxWidth: "100%",
      width: "auto",
      display: "block",
      filter: "drop-shadow(0 40px 60px rgba(0,0,0,.55))"
    },
    loading: "lazy"
  }))))));
}

/* ---------- 2 · the full hardware section ---------- */

function HardwareSection() {
  const specs = [["move-horizontal", "55mm", "Width"], ["move-vertical", "45mm", "Height"], ["layers", "12mm", "Thickness"], ["feather", "25g", "Weight"]];
  const senseFeatures = [["activity", "Continuous ECG", "10-lead-grade rhythm capture, around the clock."], ["heart-pulse", "Real-time insights", "Live heart rhythm, trends and alerts."], ["battery-charging", "7-day battery", "A week of monitoring on one magnetic charge."], ["shield-check", "Secure & private", "End-to-end encrypted, HIPAA-aligned data."]];
  const features = [["activity", "Continuous ECG Monitoring", "Clinical-grade signal capture, every second of the day."], ["heart-pulse", "Real-Time Insights", "Live rhythm, trends and anomalies the moment they appear."], ["battery-charging", "7-Day Battery Life", "A full week of monitoring on a single magnetic charge."], ["lock-keyhole", "Secure Data Transmission", "End-to-end encrypted and HIPAA-aligned by default."], ["bluetooth", "Bluetooth Connectivity", "Bluetooth 5.3 pairs the Sense to the patient app instantly."], ["badge-check", "Medical-Grade Accuracy", "Validated against a 12-lead clinical reference."], ["radio", "Remote Monitoring", "Care teams follow a patient's vitals from anywhere."], ["siren", "Predictive Cardiac Alerts", "Early warning before an event becomes an emergency."]];
  const layers = [["1", "Sensor module", "The CardioNexion Sense — the only part a patient ever touches. Snaps in, charges magnetically."], ["2", "Magnetic coupling interface", "A pogo-pin and magnet dock aligns the sensor to the textile, every time."], ["3", "ECG textile", "A conductive silver thread network woven into the knit carries the signal."], ["4", "Integrated electrode layer", "Skin-contact electrodes capture a clean, clinical reference lead."], ["5", "Compression fabric layer", "Holds the electrodes flush to the chest for a low-noise signal."], ["6", "Performance base fabric", "Breathable, moisture-wicking and machine-washable for all-day wear."]];
  return /*#__PURE__*/React.createElement(Section, {
    id: "hardware",
    dark: true,
    style: {
      background: "radial-gradient(120% 80% at 15% 0%, #0C353C, #07262B 55%, #051519 100%)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 860
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    num: "02"
  }, "The hardware"), /*#__PURE__*/React.createElement("h2", {
    className: "cs-h2",
    style: {
      color: "#fff"
    }
  }, "Meet the device the app", /*#__PURE__*/React.createElement("br", null), "was built around."), /*#__PURE__*/React.createElement("p", {
    className: "cs-lede",
    style: {
      color: "rgba(220,235,234,.74)",
      marginTop: 18
    }
  }, "Every screen in this redesign has to live up to the thing on the patient's chest. So before the UI, the product: a compact, clinical-grade ECG sensor and the smart garment that carries it."))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 0.05
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-sensehero",
    style: {
      display: "grid",
      gridTemplateColumns: "1.05fr .95fr",
      gap: 44,
      alignItems: "center",
      marginTop: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: "var(--r-xl)",
      overflow: "hidden",
      border: "1px solid rgba(43,192,203,.22)",
      background: "#05090E",
      boxShadow: "0 30px 70px rgba(0,0,0,.5)",
      width: "100%",
      maxWidth: 460,
      justifySelf: "center",
      aspectRatio: "1 / 1"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 22,
      top: 20,
      zIndex: 2,
      fontSize: 12,
      fontWeight: 800,
      letterSpacing: ".16em",
      textTransform: "uppercase",
      color: "var(--brand-400)",
      border: "1px solid rgba(43,192,203,.34)",
      padding: "6px 12px",
      borderRadius: 999
    }
  }, "Product showcase"), /*#__PURE__*/React.createElement("img", {
    src: `${HW}hw-sense-full.png`,
    alt: "The CardioNexion Sense ECG sensor with its illuminated teal status ring",
    width: "430",
    height: "430",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
      display: "block"
    },
    loading: "lazy"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 800,
      letterSpacing: ".16em",
      textTransform: "uppercase",
      color: "var(--brand-400)"
    }
  }, "CardioNexion Sense"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "clamp(28px,3vw,42px)",
      lineHeight: 1.04,
      letterSpacing: "-.02em",
      fontWeight: 800,
      color: "#fff",
      margin: "12px 0 0"
    }
  }, "The whole clinic,", /*#__PURE__*/React.createElement("br", null), "in 25 grams."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16.5,
      lineHeight: 1.6,
      color: "rgba(218,234,233,.72)",
      marginTop: 16,
      maxWidth: 440
    }
  }, "A multi-sensor module the size of a stone, engineered to deliver hospital-grade ECG accuracy in something a patient forgets they're wearing."), /*#__PURE__*/React.createElement("div", {
    className: "cs-specgrid",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "22px 28px",
      margin: "30px 0 6px",
      padding: "26px 0",
      borderTop: "1px solid rgba(43,192,203,.16)",
      borderBottom: "1px solid rgba(43,192,203,.16)"
    }
  }, specs.map(([ic, v, l], i) => /*#__PURE__*/React.createElement(SpecRow, {
    key: i,
    icon: ic,
    value: v,
    label: l
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "22px 28px",
      marginTop: 26
    }
  }, senseFeatures.map(([ic, t, b], i) => /*#__PURE__*/React.createElement(HwFeature, {
    key: i,
    icon: ic,
    title: t,
    body: b
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 110
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 800,
      letterSpacing: ".16em",
      textTransform: "uppercase",
      color: "var(--brand-400)"
    }
  }, "Key features"), /*#__PURE__*/React.createElement("h3", {
    className: "cs-h3",
    style: {
      color: "#fff",
      marginTop: 12,
      maxWidth: 620
    }
  }, "Built to be trusted with a heartbeat.")), /*#__PURE__*/React.createElement("div", {
    className: "cs-feat-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 18,
      marginTop: 36
    }
  }, features.map(([ic, t, b], i) => /*#__PURE__*/React.createElement(FeatureCard, {
    key: i,
    icon: ic,
    title: t,
    body: b,
    delay: i % 4 * 0.05
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 110
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 800,
      letterSpacing: ".16em",
      textTransform: "uppercase",
      color: "var(--brand-400)"
    }
  }, "Engineering inside"), /*#__PURE__*/React.createElement("h3", {
    className: "cs-h3",
    style: {
      color: "#fff",
      marginTop: 12,
      maxWidth: 640
    }
  }, "Six layers between the skin and the cloud."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16.5,
      lineHeight: 1.6,
      color: "rgba(218,234,233,.7)",
      marginTop: 14,
      maxWidth: 560
    }
  }, "The signal travels from skin to silicon through a stack engineered for comfort and clinical fidelity in equal measure.")), /*#__PURE__*/React.createElement("div", {
    className: "cs-explode",
    style: {
      display: "grid",
      gridTemplateColumns: ".9fr 1.1fr",
      gap: 56,
      alignItems: "center",
      marginTop: 44
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(ProductShot, {
    src: `${HW}hw-stack-full.png`,
    alt: "Exploded view of the CardioNexion Sense and the smart vest's woven sensor stack"
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 0.08
  }, /*#__PURE__*/React.createElement("div", null, layers.map(([n, t, b]) => /*#__PURE__*/React.createElement(LayerItem, {
    key: n,
    n: n,
    title: t,
    body: b
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 110
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-vest",
    style: {
      display: "grid",
      gridTemplateColumns: ".9fr 1.1fr",
      gap: 56,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(ProductShot, {
    src: `${HW}hw-vest.png`,
    alt: "The CardioNexion smart ECG vest on a form, sensor docked at the chest",
    shadow: true
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 0.08
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 800,
      letterSpacing: ".16em",
      textTransform: "uppercase",
      color: "var(--brand-400)"
    }
  }, "The smart vest"), /*#__PURE__*/React.createElement("h3", {
    className: "cs-h3",
    style: {
      color: "#fff",
      marginTop: 12
    }
  }, "A medical garment", /*#__PURE__*/React.createElement("br", null), "you forget you're wearing."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16.5,
      lineHeight: 1.6,
      color: "rgba(218,234,233,.72)",
      marginTop: 14,
      maxWidth: 480
    }
  }, "The vest does the clinical work so the patient doesn't have to. It pulls on like a training top, docks the Sense at the chest, and holds a clinical-grade lead in place \u2014 no patches, no leads, no clinic visit."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "26px 32px",
      marginTop: 30
    }
  }, [["shirt", "Four-way-stretch knit", "Compression fabric with a woven silver-thread electrode network."], ["hand", "Pull-on wearability", "Goes on like a vest; the sensor snaps to its magnetic chest dock."], ["wind", "All-day comfort", "Flat seams and breathable side panels — no adhesive on skin."], ["waves", "Machine washable", "Sensor pops out; the garment goes in the wash between wears."]].map(([ic, t, b], i) => /*#__PURE__*/React.createElement(HwFeature, {
    key: i,
    icon: ic,
    title: t,
    body: b
  }))))))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 0.05
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-certstrip",
    style: {
      marginTop: 96,
      padding: "clamp(28px,4vw,48px)",
      borderRadius: "var(--r-xl)",
      border: "1px solid rgba(43,192,203,.18)",
      background: "linear-gradient(180deg, rgba(13,42,46,.7), rgba(7,24,27,.7))",
      display: "grid",
      gridTemplateColumns: "1.1fr 1fr 1.1fr .9fr",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement(CertGroup, {
    label: "Certified & trusted",
    items: [["shield-check", "HIPAA Compliant"], ["badge-check", "FDA Registered"], ["circle-check", "CE Certified"], ["file-check", "ISO 13485"]]
  }), /*#__PURE__*/React.createElement(CertGroup, {
    label: "Connected",
    items: [["bluetooth", "Bluetooth 5.3"], ["wifi", "Wi-Fi Sync"], ["cloud", "Cloud Connected"]]
  }), /*#__PURE__*/React.createElement(CertGroup, {
    label: "Built to last",
    items: [["gem", "Medical-grade materials"], ["droplets", "Water resistant · IPX4"], ["shield", "Shock resistant"], ["infinity", "Durable & reliable"]]
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      fontWeight: 800,
      letterSpacing: ".18em",
      textTransform: "uppercase",
      color: "rgba(190,214,212,.5)",
      marginBottom: 16
    }
  }, "Colorway"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, [["Graphite Black", "radial-gradient(circle at 35% 30%, #2a2e34, #0c0e11)"], ["Titanium Silver", "radial-gradient(circle at 35% 30%, #e7eaee, #9aa0a8)"]].map(([t, g], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 999,
      background: g,
      border: "1px solid rgba(255,255,255,.18)",
      boxShadow: "inset 0 1px 2px rgba(255,255,255,.2)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14.5,
      fontWeight: 700,
      color: "#DDEEEC"
    }
  }, t))))))));
}
Object.assign(window, {
  HeroHardwareBand,
  HardwareSection
});
})();

/* sections/roles */
(function(){
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* CardioNexion 2025 — Personas + the ticket relay (the multi-role product) */

function PersonaCard({
  icon,
  role,
  name,
  line,
  need,
  tone = "var(--brand-700)",
  tint = "var(--brand-50)",
  i
}) {
  return /*#__PURE__*/React.createElement(Reveal, {
    delay: i * 0.06
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--c-surface)",
      border: "1px solid var(--c-hairline)",
      borderRadius: "var(--r-lg)",
      padding: 24,
      height: "100%",
      boxShadow: "var(--sh-1)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 50,
      height: 50,
      borderRadius: 15,
      background: tint,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 24,
    color: tone,
    strokeWidth: 2
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      fontWeight: 700,
      letterSpacing: ".1em",
      textTransform: "uppercase",
      color: tone
    }
  }, role), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 19,
      fontWeight: 800,
      letterSpacing: "-.01em",
      color: "var(--c-ink)",
      marginTop: 4
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      lineHeight: 1.55,
      color: "var(--c-ink-2)",
      marginTop: 10
    }
  }, line), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: tone,
      marginTop: 14,
      paddingTop: 14,
      borderTop: "1px solid var(--c-hairline)"
    }
  }, need)));
}
function RelayStep({
  icon,
  label,
  sub,
  tone = "var(--brand-700)",
  tint = "var(--brand-50)",
  last
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      flex: "0 0 auto",
      width: 116
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 58,
      height: 58,
      borderRadius: 18,
      background: tint,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: `1px solid ${tone}22`
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 26,
    color: tone,
    strokeWidth: 2
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      fontWeight: 800,
      color: "var(--c-ink)",
      marginTop: 10
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: "var(--c-ink-3)",
      marginTop: 2,
      lineHeight: 1.35
    }
  }, sub)), !last && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 18,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: -28
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 20,
    color: "var(--c-ink-4)",
    strokeWidth: 2.4
  })));
}
function PersonasSection() {
  const people = [{
    icon: "user-round",
    role: "Patient",
    name: "Robert, 67",
    line: "Recovering from a bypass. Wears the garment all day and wants reassurance — not raw data.",
    need: "Needs: a calm “you’re okay.”",
    tone: "var(--green-600)",
    tint: "var(--green-50)"
  }, {
    icon: "headset",
    role: "Medical Operator",
    name: "James Shaw",
    line: "First responder to every alert. Triages a live queue against a two-minute clock.",
    need: "Needs: triage at a glance.",
    tone: "var(--brand-700)",
    tint: "var(--brand-50)"
  }, {
    icon: "shield-check",
    role: "Officer Supervisor",
    name: "Supervisor desk",
    line: "Owns escalations, re-queues, and team load. The safety net when an operator can’t act.",
    need: "Needs: oversight + fast escalation.",
    tone: "var(--amber-600)",
    tint: "var(--amber-50)"
  }, {
    icon: "stethoscope",
    role: "Cardiologist",
    name: "Dr. Doe",
    line: "Makes the clinical call on referred tickets — current ECG against the patient’s own baseline.",
    need: "Needs: signal, fast.",
    tone: "var(--blue-600)",
    tint: "var(--blue-50)"
  }];
  return /*#__PURE__*/React.createElement(Section, {
    id: "roles"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    num: "11"
  }, "The people"), /*#__PURE__*/React.createElement("h2", {
    className: "cs-h2",
    style: {
      maxWidth: 880
    }
  }, "Behind one calm number,", /*#__PURE__*/React.createElement("br", null), "a clinical relay team."), /*#__PURE__*/React.createElement("p", {
    className: "cs-lede",
    style: {
      maxWidth: 720,
      marginTop: 18
    }
  }, "The patient\u2019s app only feels effortless because three clinicians act in seconds on the other side. CardioNexion is really four products sharing one heartbeat \u2014 so I designed the back-office with the same care as the phone.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 20,
      marginTop: 52
    },
    className: "cs-4up"
  }, people.map((p, i) => /*#__PURE__*/React.createElement(PersonaCard, _extends({
    key: i
  }, p, {
    i: i
  })))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 0.1
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 64,
      background: "var(--c-surface)",
      border: "1px solid var(--c-hairline)",
      borderRadius: "var(--r-xl)",
      padding: "34px 30px",
      boxShadow: "var(--sh-1)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 26
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "route",
    size: 18,
    color: "var(--brand-700)",
    strokeWidth: 2.2
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 800,
      letterSpacing: ".04em",
      textTransform: "uppercase",
      color: "var(--c-ink-2)"
    }
  }, "The journey of one alert")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      flexWrap: "wrap",
      rowGap: 22
    }
  }, /*#__PURE__*/React.createElement(RelayStep, {
    icon: "user-round",
    label: "Patient",
    sub: "Wears the garment",
    tone: "var(--green-600)",
    tint: "var(--green-50)"
  }), /*#__PURE__*/React.createElement(RelayStep, {
    icon: "cpu",
    label: "Sensor",
    sub: "Detects anomaly"
  }), /*#__PURE__*/React.createElement(RelayStep, {
    icon: "cloud",
    label: "@-HEALTH cloud",
    sub: "Grades criticality"
  }), /*#__PURE__*/React.createElement(RelayStep, {
    icon: "headset",
    label: "Operator",
    sub: "Triages \xB7 2-min timer"
  }), /*#__PURE__*/React.createElement(RelayStep, {
    icon: "shield-check",
    label: "Supervisor",
    sub: "Escalates / re-queues",
    tone: "var(--amber-600)",
    tint: "var(--amber-50)"
  }), /*#__PURE__*/React.createElement(RelayStep, {
    icon: "stethoscope",
    label: "Doctor",
    sub: "Clinical decision",
    tone: "var(--blue-600)",
    tint: "var(--blue-50)"
  }), /*#__PURE__*/React.createElement(RelayStep, {
    icon: "phone-call",
    label: "Emergency",
    sub: "SMS \xB7 call \xB7 relatives",
    tone: "var(--red-600)",
    tint: "var(--red-50)",
    last: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8,
      marginTop: 30,
      paddingTop: 22,
      borderTop: "1px solid var(--c-hairline)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      fontWeight: 700,
      color: "var(--c-ink-4)",
      alignSelf: "center",
      marginRight: 4
    }
  }, "A ticket can be:"), ["Quick view", "Refer to Doctor", "Escalate to CMO", "Close", "Notify via SMS", "Re-queued if no action"].map((p, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontSize: 12.5,
      fontWeight: 700,
      color: "var(--brand-700)",
      background: "var(--brand-50)",
      border: "1px solid var(--brand-100)",
      borderRadius: 999,
      padding: "6px 13px"
    }
  }, p))))));
}
Object.assign(window, {
  PersonasSection,
  PersonaCard,
  RelayStep
});
})();

/* sections/web */
(function(){
/* CardioNexion 2025 — Web consoles showcase (the clinical back-office) */

// scale a fixed-size child down to fit the column width
function Fit({
  w,
  h,
  children
}) {
  const ref = React.useRef(null);
  const [s, setS] = React.useState(1);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const on = () => setS(Math.min(1, el.clientWidth / w));
    on();
    window.addEventListener("resize", on);
    return () => window.removeEventListener("resize", on);
  }, [w]);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: h * s,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: w,
      transform: `scale(${s})`,
      transformOrigin: "top left",
      position: "absolute",
      left: `calc(50% - ${w * s / 2}px)`
    }
  }, children)));
}
function ConsoleBlock({
  num,
  role,
  headline,
  body,
  url,
  children,
  delay
}) {
  return /*#__PURE__*/React.createElement(Reveal, {
    delay: delay
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: 24,
      marginBottom: 22,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 620
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 11,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "cs-mono",
    style: {
      fontSize: 12.5,
      fontWeight: 700,
      color: "var(--brand-400)",
      padding: "3px 9px",
      border: "1px solid rgba(43,192,203,.3)",
      borderRadius: 999
    }
  }, num), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      fontWeight: 700,
      letterSpacing: ".14em",
      textTransform: "uppercase",
      color: "var(--brand-400)"
    }
  }, role)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "clamp(22px,2.4vw,30px)",
      lineHeight: 1.1,
      letterSpacing: "-.02em",
      fontWeight: 800,
      color: "#fff",
      margin: 0
    }
  }, headline), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.55,
      color: "rgba(220,235,234,.7)",
      marginTop: 12
    }
  }, body))), /*#__PURE__*/React.createElement(Fit, {
    w: 1160,
    h: 746
  }, /*#__PURE__*/React.createElement(BrowserFrame, {
    url: url,
    w: 1160,
    h: 700
  }, children)));
}
function WebSection() {
  return /*#__PURE__*/React.createElement(Section, {
    id: "consoles",
    dark: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 860
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, {
    num: "12"
  }, "The operating system"), /*#__PURE__*/React.createElement("h2", {
    className: "cs-h2",
    style: {
      color: "#fff"
    }
  }, "The back-office,", /*#__PURE__*/React.createElement("br", null), "redesigned to match."), /*#__PURE__*/React.createElement("p", {
    className: "cs-lede",
    style: {
      color: "rgba(220,235,234,.72)",
      marginTop: 18
    }
  }, "The 2017 consoles were dense cyan tables built for speed but hard to scan under pressure. I rebuilt all three on the same 2025 system as the patient app \u2014 same type scale, same teal, the same criticality language \u2014 so a clinician moving between phone and desk never re-learns the product."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 72,
      marginTop: 56
    }
  }, /*#__PURE__*/React.createElement(ConsoleBlock, {
    num: "A",
    role: "Medical Operator",
    url: "app.cardionexion.health/triage",
    headline: "Triage, against a two-minute clock.",
    body: "The live queue leads with criticality and a per-ticket countdown. Open one and the operator sees the current ECG and three decisions \u2014 refer, close, escalate \u2014 without leaving the screen."
  }, /*#__PURE__*/React.createElement(MOConsole, null)), /*#__PURE__*/React.createElement(ConsoleBlock, {
    num: "B",
    role: "Officer Supervisor",
    url: "app.cardionexion.health/supervisor",
    delay: 0.05,
    headline: "Oversight, and the safety net.",
    body: "The supervisor sees team load, escalations and re-queued tickets at a glance \u2014 then works the hardest cases with current-vs-reference ECG, CMO notes, and the full escalation chain up to the CMO or emergency services."
  }, /*#__PURE__*/React.createElement(MOSConsole, null)), /*#__PURE__*/React.createElement(ConsoleBlock, {
    num: "C",
    role: "Cardiologist",
    url: "app.cardionexion.health/patient/john-snow",
    delay: 0.05,
    headline: "The clinical call, in one view.",
    body: "Referred tickets land on the doctor\u2019s desk as a patient detail: the current strip beside the patient\u2019s own baseline, vitals, history and notes \u2014 everything needed to decide, resolve, or refer back."
  }, /*#__PURE__*/React.createElement(DoctorConsole, null))));
}
Object.assign(window, {
  WebSection,
  Fit,
  ConsoleBlock
});
})();

/* tweaks-panel */
(function(){
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})();

/* sections/story */
(function(){
/* CardioNexion — portfolio story sections: my part in it, and how I'd measure it */

const pfDisplay = "'General Sans','Inter Tight',system-ui,sans-serif";
const pfBody = "'Switzer','General Sans',system-ui,sans-serif";
function JourneySection() {
  const items = [{
    when: "2017",
    title: "The original app",
    body: "I worked on the @-HEALTH patient app — the 21 legacy screens in this case study are from that release.",
    tags: ["Patient app", "Sensor pairing"],
    key: true
  }, {
    when: "2017",
    title: "Shown in public",
    body: "The product was presented at ESC Congress and demonstrated on video.",
    links: [["ESC Congress ↗", "https://esc365.escardio.org/presentation/181219"], ["Watch the demo ↗", "https://www.youtube.com/watch?v=Cr36OX5fhKU"]]
  }, {
    when: "Since",
    title: "Offline today",
    body: "The original site and app are no longer live. The screenshots here are the record of what shipped."
  }, {
    when: "2025 – 2026",
    title: "This concept",
    body: "A self-directed redesign — what I'd do with the same product and the same patients now. Not a shipped release.",
    tags: ["Concept study", "iOS + Android", "Clinical consoles"],
    key: true
  }];
  return /*#__PURE__*/React.createElement(Section, {
    id: "journey"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "My part in it"), /*#__PURE__*/React.createElement("h2", {
    className: "cs-h2",
    style: {
      maxWidth: 820
    }
  }, "Real product, then a concept of my own."), /*#__PURE__*/React.createElement("p", {
    className: "cs-body",
    style: {
      maxWidth: 680,
      marginTop: 16
    }
  }, "It matters where the line is, so here it is.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 0.06
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-4up",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,minmax(0,1fr))",
      borderTop: "2px solid #EAEAEA",
      marginTop: 40
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: "relative",
      padding: "26px 22px 0 0"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: -8,
      left: 0,
      width: 14,
      height: 14,
      borderRadius: 999,
      background: it.key ? "#7CFF3A" : "#fff",
      border: `2px solid ${it.key ? "#111" : "#8A8A87"}`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: pfBody,
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: ".12em",
      textTransform: "uppercase",
      color: "#5F5F5C"
    }
  }, it.when), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: pfDisplay,
      fontSize: 19,
      fontWeight: 500,
      letterSpacing: "-.01em",
      color: "#111",
      margin: "6px 0 8px"
    }
  }, it.title), /*#__PURE__*/React.createElement("p", {
    className: "cs-body",
    style: {
      fontSize: 15,
      margin: 0
    }
  }, it.body), it.tags && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 6,
      marginTop: 12
    }
  }, it.tags.map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      fontFamily: pfBody,
      fontSize: 12,
      fontWeight: 500,
      padding: "4px 10px",
      borderRadius: 999,
      background: "#F2F2EF",
      color: "#3A3A38"
    }
  }, t))), it.links && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 14,
      marginTop: 12
    }
  }, it.links.map(([l, h]) => /*#__PURE__*/React.createElement("a", {
    key: h,
    href: h,
    target: "_blank",
    rel: "noopener",
    style: {
      fontFamily: pfBody,
      fontSize: 14,
      fontWeight: 600,
      color: "#111",
      textDecoration: "underline",
      textUnderlineOffset: 4,
      textDecorationColor: "#DADAD6"
    }
  }, l))))))));
}
function MeasureSection() {
  const rows = [["Time to \u201cam I okay?\u201d", "How quickly a patient can tell their status after opening the app.", "First-glance comprehension tests with patients over 50, against the 2017 home screen."], ["Calmer alerts", "Fewer panicked calls to the care team after a non-critical alert.", "Tagged support and care-line calls per active patient, before vs. after."], ["Daily return", "Patients check in because it's useful, not because something broke.", "Weekly active patients and home-screen visits that don't follow an alert."], ["Care circle use", "Family and caregivers actually follow along, with consent.", "Share of patients with at least one active caregiver, and caregiver weekly visits."]];
  return /*#__PURE__*/React.createElement(Section, {
    id: "measure",
    alt: true
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Eyebrow, null, "How I'd measure it"), /*#__PURE__*/React.createElement("h2", {
    className: "cs-h2",
    style: {
      maxWidth: 820
    }
  }, "No results to report \u2014 so here's what I'd track."), /*#__PURE__*/React.createElement("p", {
    className: "cs-body",
    style: {
      maxWidth: 680,
      marginTop: 16
    }
  }, "This is a concept, so there are no outcomes. If it were built, these are the four signals I'd agree with the team before launch.")), /*#__PURE__*/React.createElement("div", {
    className: "cs-2up",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 20,
      marginTop: 40
    }
  }, rows.map(([t, b, m], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: i,
    delay: i * 0.05
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      border: "1px solid #EAEAEA",
      borderRadius: 14,
      padding: 28,
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      fontFamily: pfBody,
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: ".12em",
      textTransform: "uppercase",
      padding: "4px 10px",
      borderRadius: 999,
      background: "#F2F2EF",
      color: "#111",
      marginBottom: 12
    }
  }, "Target"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: pfDisplay,
      fontSize: 20,
      fontWeight: 500,
      letterSpacing: "-.01em",
      color: "#111"
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    className: "cs-body",
    style: {
      fontSize: 15,
      marginTop: 8
    }
  }, b), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      paddingTop: 12,
      borderTop: "1px solid #EAEAEA",
      fontFamily: pfBody,
      fontSize: 13.5,
      lineHeight: 1.5,
      color: "#5F5F5C"
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: "#3A3A38"
    }
  }, "Measure:"), " ", m))))));
}
Object.assign(window, {
  JourneySection,
  MeasureSection
});
})();

/* app */
(function(){
/* CardioNexion 2025 — App assembly, nav, tweaks */

// ---- Sticky top nav ---------------------------------------
function Nav() {
  const links = [["hardware", "Hardware"], ["home", "Homepage"], ["system", "System"], ["screens", "Screens"], ["consoles", "Web"], ["features", "Features"]];
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", on);
    on();
    return () => window.removeEventListener("scroll", on);
  }, []);
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      transition: "all .3s",
      background: "rgba(255,255,255,.92)",
      backdropFilter: "blur(14px)",
      WebkitBackdropFilter: "blur(14px)",
      borderBottom: "1px solid " + (scrolled ? "var(--c-hairline)" : "transparent")
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-wrap",
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: 64
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      textDecoration: "none",
      display: "flex",
      alignItems: "center",
      gap: 9,
      color: "var(--c-ink-2)",
      fontSize: 13,
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 999,
      background: "var(--brand-600)"
    }
  }), "Case study 02 \xB7 CardioNexion"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 26,
      alignItems: "center"
    },
    className: "cs-navlinks"
  }, links.map(([id, t]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    href: `#${id}`,
    style: {
      textDecoration: "none",
      fontSize: 13,
      fontWeight: 500,
      color: "var(--c-ink-2)"
    }
  }, t)))));
}

// ---- The case study content (never re-renders on tweak) ----
function Content() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    id: "top"
  }), /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(HeroHardwareBand, null), /*#__PURE__*/React.createElement(ContextSection, null), /*#__PURE__*/React.createElement(JourneySection, null), /*#__PURE__*/React.createElement(HardwareSection, null), /*#__PURE__*/React.createElement(VisionSection, null), /*#__PURE__*/React.createElement(PrinciplesSection, null), /*#__PURE__*/React.createElement(HomeShowcase, null), /*#__PURE__*/React.createElement(SystemSection, null), /*#__PURE__*/React.createElement(IASection, null), /*#__PURE__*/React.createElement(CritiqueSection, null), /*#__PURE__*/React.createElement(FlowSection, null), /*#__PURE__*/React.createElement(ScreensGallery, null), /*#__PURE__*/React.createElement(PersonasSection, null), /*#__PURE__*/React.createElement(WebSection, null), /*#__PURE__*/React.createElement(FeaturesSection, null), /*#__PURE__*/React.createElement(AccessibilitySection, null), /*#__PURE__*/React.createElement(MeasureSection, null), /*#__PURE__*/React.createElement(ClosingSection, null));
}

// ---- Tweaks (owns its own state; applies via CSS only) -----
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "dark": false,
  "textScale": 1,
  "accent": "#0E6E78"
} /*EDITMODE-END*/;
function Tweaks() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", t.dark ? "dark" : "light");
  }, [t.dark]);
  React.useEffect(() => {
    document.documentElement.style.setProperty("--ts", t.textScale);
  }, [t.textScale]);
  React.useEffect(() => {
    // remap the brand primary used across product UI + chrome
    document.documentElement.style.setProperty("--brand-700", t.accent);
    setTimeout(() => window.lucide && window.lucide.createIcons(), 30);
  }, [t.accent]);
  return /*#__PURE__*/React.createElement(TweaksPanel, null, /*#__PURE__*/React.createElement(TweakSection, {
    label: "Appearance"
  }), /*#__PURE__*/React.createElement(TweakToggle, {
    label: "Dark mode",
    value: t.dark,
    onChange: v => setTweak("dark", v)
  }), /*#__PURE__*/React.createElement(TweakColor, {
    label: "Brand accent",
    value: t.accent,
    options: ["#0E6E78", "#1C6FA8", "#1E8E6A", "#2C6A82"],
    onChange: v => setTweak("accent", v)
  }), /*#__PURE__*/React.createElement(TweakSection, {
    label: "Accessibility"
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Text size",
    value: String(t.textScale),
    options: ["1", "1.15", "1.3"],
    onChange: v => setTweak("textScale", parseFloat(v))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--c-ink-3)",
      padding: "4px 2px 2px",
      lineHeight: 1.4
    }
  }, "Text size scales the in-app mockup type \u2014 the live large-text mode for 50+ users."));
}

// ---- Mount -------------------------------------------------
ReactDOM.createRoot(document.getElementById("content")).render(/*#__PURE__*/React.createElement(Content, null));
ReactDOM.createRoot(document.getElementById("tweaks")).render(/*#__PURE__*/React.createElement(Tweaks, null));
setTimeout(() => window.lucide && window.lucide.createIcons(), 250);
// keep icons resolved as new sections reveal
let _t;
const _refresh = () => {
  clearTimeout(_t);
  _t = setTimeout(() => window.lucide && window.lucide.createIcons(), 120);
};
window.addEventListener("scroll", _refresh, {
  passive: true
});
})();
