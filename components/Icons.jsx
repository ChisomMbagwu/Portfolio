// Small inline icon set (24x24, stroke style). No dependencies.
const P = {
  user: ["M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", ["circle", 12, 7, 4]],
  file: ["M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z", "M14 2v6h6", "M16 13H8", "M16 17H8", "M10 9H8"],
  download: ["M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", "M7 10l5 5 5-5", "M12 15V3"],
  briefcase: [["rect", 2, 7, 20, 14, 2], "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"],
  cap: ["M22 10v6", "M2 10l10-5 10 5-10 5z", "M6 12v5c3 3 9 3 12 0v-5"],
  award: [["circle", 12, 8, 6], "M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"],
  layers: ["M12 2 2 7l10 5 10-5-10-5z", "M2 17l10 5 10-5", "M2 12l10 5 10-5"],
  book: ["M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z", "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"],
  search: [["circle", 11, 11, 8], "m21 21-4.3-4.3"],
  wrench: ["M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"],
  code: ["m16 18 6-6-6-6", "m8 6-6 6 6 6"],
  target: [["circle", 12, 12, 10], ["circle", 12, 12, 6], ["circle", 12, 12, 2]],
  heart: ["M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"],
  folder: ["M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"],
  zap: ["M13 2 3 14h9l-1 8 10-12h-9l1-8z"],
  mail: [["rect", 2, 4, 20, 16, 2], "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"],
  out: ["M7 7h10v10", "M7 17 17 7"],
  arrow: ["M5 12h14", "m12 5 7 7-7 7"],
  menu: ["M4 6h16", "M4 12h16", "M4 18h16"],
  linkedin: ["M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z", "M2 9h4v12H2z", ["circle", 4, 4, 2]],
  chart: ["M3 3v18h18", "M7 14l4-4 4 4 5-6"],
  board: [["rect", 3, 3, 18, 18, 2], "M3 9h18", "M9 21V9"],
};

export default function Icon({ name, size = 20, className = "" }) {
  if (name === "medium") {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
        <ellipse cx="7" cy="12" rx="5" ry="5.5" />
        <ellipse cx="16" cy="12" rx="2.6" ry="5" />
        <rect x="20.6" y="7" width="1.8" height="10" rx="0.9" />
      </svg>
    );
  }
  const parts = P[name] || [];
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      {parts.map((p, i) => {
        if (typeof p === "string") return <path key={i} d={p} />;
        const [t, a, b, c, d, r] = p;
        if (t === "circle") return <circle key={i} cx={a} cy={b} r={c} />;
        return <rect key={i} x={a} y={b} width={c} height={d} rx={r} />;
      })}
    </svg>
  );
}
