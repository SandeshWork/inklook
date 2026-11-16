// Flat SVG product blanks that "print" a brand mark live.
// Every product shares a 400x400 viewBox and declares its own print area.

export const products = {
  tee: {
    label: "T-Shirt",
    print: { x: 200, y: 200, w: 150 },
    body: (
      <path d="M128 58 L165 40 Q200 74 235 40 L272 58 L350 112 L318 170 L288 152 L288 362 L112 362 L112 152 L82 170 L50 112 Z" />
    ),
    detail: <path d="M165 40 Q200 74 235 40" fill="none" />,
  },
  hoodie: {
    label: "Hoodie",
    print: { x: 200, y: 205, w: 140 },
    body: (
      <>
        <path d="M128 82 L168 58 L232 58 L272 82 L346 146 L332 306 L302 306 L296 182 L296 366 L104 366 L104 182 L98 306 L68 306 L54 146 Z" />
        <path d="M162 62 Q160 18 200 16 Q240 18 238 62 Q220 96 200 98 Q180 96 162 62 Z" />
      </>
    ),
    detail: (
      <>
        <path d="M176 70 Q200 92 224 70" fill="none" />
        <path d="M146 290 L254 290 L268 346 L132 346 Z" fill="none" />
      </>
    ),
  },
  tote: {
    label: "Tote Bag",
    print: { x: 200, y: 262, w: 170 },
    body: <path d="M86 142 L314 142 L330 372 L70 372 Z" />,
    detail: (
      <path
        d="M140 142 Q140 46 200 46 Q260 46 260 142"
        fill="none"
        strokeWidth="14"
      />
    ),
  },
  cap: {
    label: "Cap",
    print: { x: 200, y: 196, w: 120 },
    body: (
      <>
        <path d="M86 254 Q86 118 200 112 Q314 118 314 254 Z" />
        <path d="M54 254 Q200 226 346 254 Q336 292 200 282 Q64 292 54 254 Z" />
      </>
    ),
    detail: (
      <>
        <circle cx="200" cy="112" r="9" />
        <path d="M200 112 L200 254" fill="none" />
      </>
    ),
  },
  mug: {
    label: "Mug",
    print: { x: 188, y: 236, w: 140 },
    body: (
      <path d="M98 108 L278 108 L278 338 Q278 362 254 362 L122 362 Q98 362 98 338 Z" />
    ),
    detail: (
      <path
        d="M278 158 Q348 158 348 226 Q348 294 278 294"
        fill="none"
        strokeWidth="22"
      />
    ),
  },
  bottle: {
    label: "Bottle",
    print: { x: 200, y: 246, w: 110 },
    body: (
      <>
        <path d="M168 76 L232 76 Q272 98 272 142 L272 360 Q272 378 254 378 L146 378 Q128 378 128 360 L128 142 Q128 98 168 76 Z" />
        <rect x="164" y="30" width="72" height="46" />
      </>
    ),
    detail: <path d="M128 150 L272 150 M128 330 L272 330" fill="none" />,
  },
};

export const garmentColors = [
  { id: "paper", label: "Natural", fill: "#F7F2E6" },
  { id: "ink", label: "Black", fill: "#1B1916" },
  { id: "blue", label: "Riso Blue", fill: "#0078BF" },
  { id: "pink", label: "Fluoro Pink", fill: "#FF48B0" },
  { id: "yellow", label: "Yellow", fill: "#FFE800" },
];

export const inkColors = [
  { id: "ink", label: "Black ink", fill: "#141210" },
  { id: "white", label: "White ink", fill: "#FFFFFF" },
  { id: "pink", label: "Pink ink", fill: "#FF48B0" },
  { id: "blue", label: "Blue ink", fill: "#0078BF" },
  { id: "red", label: "Red ink", fill: "#FF4F28" },
];

function fitSize(text, width) {
  const len = Math.max(text.length, 3);
  return Math.min(52, (width / (len * 0.6)) | 0);
}

export function PrintMark({ text, x, y, w, ink, offsetInk, scale = 1 }) {
  const t = (text || "YOUR BRAND").toUpperCase().slice(0, 18);
  const size = fitSize(t, w) * scale;
  return (
    <g fontFamily="Bricolage Grotesque, Arial Black, sans-serif" fontWeight="800">
      {/* Starburst badge */}
      <g transform={`translate(${x} ${y - size * 1.25}) scale(${(size / 40) * 0.55})`}>
        <path
          d="M0 -30 L7 -10 L28 -12 L12 2 L20 22 L0 10 L-20 22 L-12 2 L-28 -12 L-7 -10 Z"
          fill={offsetInk || ink}
          transform="translate(3 2)"
          opacity={offsetInk ? 0.9 : 0}
        />
        <path
          d="M0 -30 L7 -10 L28 -12 L12 2 L20 22 L0 10 L-20 22 L-12 2 L-28 -12 L-7 -10 Z"
          fill={ink}
        />
      </g>
      {offsetInk && (
        <text
          x={x + 3}
          y={y + 2}
          textAnchor="middle"
          fontSize={size}
          fill={offsetInk}
          letterSpacing="-1"
        >
          {t}
        </text>
      )}
      <text x={x} y={y} textAnchor="middle" fontSize={size} fill={ink} letterSpacing="-1">
        {t}
      </text>
      <text
        x={x}
        y={y + size * 0.62}
        textAnchor="middle"
        fontSize={Math.max(9, size * 0.24)}
        fontFamily="JetBrains Mono, monospace"
        fontWeight="500"
        fill={ink}
        letterSpacing="2"
      >
        MADE TANGIBLE
      </text>
    </g>
  );
}

export default function MerchSVG({
  product = "tee",
  garment = "#F7F2E6",
  ink = "#141210",
  offsetInk,
  text,
  printed = true,
  className,
  title,
}) {
  const p = products[product] ?? products.tee;
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      role="img"
      aria-label={title || `${p.label} printed with ${text || "your brand"}`}
    >
      <g fill={garment} stroke="#141210" strokeWidth="4" strokeLinejoin="round">
        {p.body}
      </g>
      <g stroke="#141210" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round" fill="#141210">
        {p.detail}
      </g>
      {printed && <PrintMark text={text} {...p.print} ink={ink} offsetInk={offsetInk} />}
    </svg>
  );
}
