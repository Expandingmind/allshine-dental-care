export type ServiceKind =
  | "preventive"
  | "cosmetic"
  | "restorative"
  | "implants"
  | "ortho"
  | "pediatric"
  | "root-canal"
  | "emergency";

export function ServiceIllustration({ kind }: { kind: ServiceKind }) {
  return (
    <svg
      viewBox="0 0 200 150"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-hidden
    >
      <defs>
        <linearGradient id={`g-${kind}`} x1="0" y1="0" x2="1" y2="1">
          {gradientStops(kind)}
        </linearGradient>
      </defs>
      <rect width="200" height="150" fill={`url(#g-${kind})`} />
      {illustration(kind)}
    </svg>
  );
}

function gradientStops(kind: ServiceKind) {
  const map: Record<ServiceKind, [string, string]> = {
    preventive: ["#d3f6f3", "#73dfd9"],
    cosmetic: ["#fff3d4", "#f7c873"],
    restorative: ["#fce7c2", "#e8a93a"],
    implants: ["#aceeea", "#1aada8"],
    ortho: ["#e0f2fe", "#7dd3fc"],
    pediatric: ["#fde2f3", "#f9a8d4"],
    "root-canal": ["#cffafe", "#22d3ee"],
    emergency: ["#fee2e2", "#fb7185"],
  };
  const [a, b] = map[kind];
  return (
    <>
      <stop offset="0%" stopColor={a} />
      <stop offset="100%" stopColor={b} />
    </>
  );
}

function illustration(kind: ServiceKind) {
  switch (kind) {
    case "preventive":
      return (
        <g>
          <Tooth x={100} y={85} scale={1} />
          {/* Toothbrush */}
          <g transform="translate(40 95) rotate(-25)">
            <rect x="0" y="0" width="60" height="9" rx="4" fill="#fff" stroke="#0f6f6e" strokeWidth="1.5" />
            <rect x="55" y="-3" width="20" height="15" rx="2" fill="#0f8b88" />
            {Array.from({ length: 5 }).map((_, i) => (
              <line key={i} x1={59 + i * 3.5} y1="-3" x2={59 + i * 3.5} y2="-7" stroke="#fff" strokeWidth="1.2" />
            ))}
          </g>
          <Sparkle x={150} y={40} size={6} />
          <Sparkle x={170} y={70} size={4} />
          <Sparkle x={60} y={45} size={5} />
        </g>
      );
    case "cosmetic":
      return (
        <g>
          <Tooth x={100} y={80} scale={1.15} fill="#fff" />
          {/* Big shine line */}
          <path d="M88 60 q4 10 0 22" stroke="#fff" strokeWidth="3" fill="none" opacity="0.9" />
          <Sparkle x={140} y={45} size={7} color="#fff" />
          <Sparkle x={60} y={55} size={5} color="#fff" />
          <Sparkle x={155} y={95} size={4} color="#fff" />
          <Sparkle x={45} y={100} size={4} color="#fff" />
        </g>
      );
    case "restorative":
      return (
        <g>
          {/* Crown */}
          <path
            d="M70 55 L80 38 L90 50 L100 32 L110 50 L120 38 L130 55 Z"
            fill="#f7c873"
            stroke="#c98a1f"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <rect x="68" y="55" width="64" height="10" fill="#e8a93a" stroke="#c98a1f" strokeWidth="1.5" />
          <circle cx="85" cy="46" r="3" fill="#fff" />
          <circle cx="100" cy="40" r="3" fill="#fff" />
          <circle cx="115" cy="46" r="3" fill="#fff" />
          <Tooth x={100} y={105} scale={0.85} />
        </g>
      );
    case "implants":
      return (
        <g>
          <Tooth x={100} y={70} scale={1} fill="#fff" />
          {/* Implant post — screw threads */}
          <g transform="translate(92 95)">
            <rect x="0" y="0" width="16" height="6" fill="#94a3b8" />
            <path d="M2 8 L14 8 L11 38 L5 38 Z" fill="#cbd5e1" stroke="#475569" strokeWidth="1" />
            {Array.from({ length: 6 }).map((_, i) => (
              <line key={i} x1="3" y1={11 + i * 4.5} x2="13" y2={11 + i * 4.5} stroke="#475569" strokeWidth="1" />
            ))}
          </g>
        </g>
      );
    case "ortho":
      return (
        <g>
          {/* Row of three teeth */}
          <Tooth x={65} y={80} scale={0.7} />
          <Tooth x={100} y={80} scale={0.7} />
          <Tooth x={135} y={80} scale={0.7} />
          {/* Aligner / wire */}
          <path
            d="M45 80 q55 -25 110 0"
            stroke="#fff"
            strokeWidth="3"
            fill="none"
            opacity="0.9"
          />
          {/* Brackets */}
          <rect x="62" y="72" width="6" height="6" fill="#fff" rx="1" />
          <rect x="97" y="68" width="6" height="6" fill="#fff" rx="1" />
          <rect x="132" y="72" width="6" height="6" fill="#fff" rx="1" />
        </g>
      );
    case "pediatric":
      return (
        <g>
          <Tooth x={100} y={85} scale={1.1} fill="#fff" />
          {/* Smile face on tooth */}
          <circle cx="92" cy="78" r="2.5" fill="#0f6f6e" />
          <circle cx="108" cy="78" r="2.5" fill="#0f6f6e" />
          <path d="M90 92 q10 8 20 0" stroke="#0f6f6e" strokeWidth="2.2" fill="none" strokeLinecap="round" />
          <Sparkle x={55} y={50} size={5} color="#fff" />
          <Sparkle x={145} y={55} size={6} color="#fff" />
        </g>
      );
    case "root-canal":
      return (
        <g>
          {/* Tooth outline */}
          <path
            d="M100 35 c-15 0 -22 8 -22 18 0 14 5 24 7 35 c2 11 5 30 13 30 c5 0 5 -10 12 -10 s5 10 11 10 c8 0 11 -19 13 -30 c2 -11 7 -21 7 -35 c0 -10 -7 -18 -22 -18 c-7 0 -10 5 -19 0 z"
            fill="#fff"
            stroke="#0f6f6e"
            strokeWidth="1.5"
          />
          {/* Visible roots/canals inside */}
          <path d="M92 70 L88 110" stroke="#22d3ee" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M108 70 L112 110" stroke="#22d3ee" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <circle cx="92" cy="68" r="2.5" fill="#0f6f6e" />
          <circle cx="108" cy="68" r="2.5" fill="#0f6f6e" />
        </g>
      );
    case "emergency":
      return (
        <g>
          <Tooth x={100} y={85} scale={1} fill="#fff" />
          {/* Red plus badge */}
          <circle cx="140" cy="55" r="20" fill="#fff" stroke="#dc2626" strokeWidth="2.5" />
          <rect x="136" y="44" width="8" height="22" rx="1.5" fill="#dc2626" />
          <rect x="129" y="51" width="22" height="8" rx="1.5" fill="#dc2626" />
        </g>
      );
  }
}

function Tooth({
  x,
  y,
  scale = 1,
  fill = "#ffffff",
}: {
  x: number;
  y: number;
  scale?: number;
  fill?: string;
}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale}) translate(-12 -16)`}>
      <path
        d="M12 0c2.7 0 4 1.5 5.7 1.5 1.6 0 2.9 1.1 2.9 3.4 0 2.6-1 4.6-1.5 6.7-.6 2.4-1.3 7.2-3.7 7.2-1.7 0-1.9-2.5-3.4-2.5s-1.7 2.5-3.4 2.5c-2.4 0-3.1-4.8-3.7-7.2C4.4 9.4 3.4 7.4 3.4 4.9c0-2.3 1.3-3.4 2.9-3.4C8 1.5 9.3 0 12 0Z"
        fill={fill}
        stroke="#0f6f6e"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </g>
  );
}

function Sparkle({
  x,
  y,
  size = 5,
  color = "#fff",
}: {
  x: number;
  y: number;
  size?: number;
  color?: string;
}) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <path
        d={`M0 ${-size} L${size * 0.35} ${-size * 0.35} L${size} 0 L${size * 0.35} ${size * 0.35} L0 ${size} L${-size * 0.35} ${size * 0.35} L${-size} 0 L${-size * 0.35} ${-size * 0.35} Z`}
        fill={color}
        opacity="0.95"
      />
    </g>
  );
}
