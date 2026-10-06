import * as React from "react";
import { cn } from "@/lib/utils";

export type BlueprintMotif =
  | "crane"
  | "building"
  | "bridge"
  | "compass"
  | "document"
  | "frame"
  | "network"
  | "message";

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
} as const;

const thin = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1,
} as const;

const motifs: Record<BlueprintMotif, React.ReactNode> = {
  crane: (
    <g>
      <line {...stroke} x1="120" y1="408" x2="540" y2="408" />
      <path {...stroke} d="M150 408v-56h324v56" />
      <line {...stroke} x1="388" y1="76" x2="388" y2="356" />
      <line {...thin} x1="388" y1="108" x2="398" y2="88" />
      <line {...thin} x1="388" y1="108" x2="378" y2="88" />
      <line {...stroke} x1="300" y1="88" x2="520" y2="88" />
      <line {...thin} x1="380" y1="96" x2="412" y2="128" />
      <line {...thin} x1="340" y1="96" x2="368" y2="128" />
      <line {...thin} x1="452" y1="96" x2="424" y2="132" />
      <line {...stroke} x1="488" y1="88" x2="488" y2="182" />
      <rect {...stroke} x="462" y="182" width="52" height="34" rx="3" />
      <line {...thin} x1="462" y1="199" x2="514" y2="199" />
      <path {...stroke} d="M488 216v34" />
      <rect {...thin} x="226" y="330" width="262" height="78" />
      <line {...thin} x1="226" y1="356" x2="488" y2="356" />
      <line {...thin} x1="226" y1="382" x2="488" y2="382" />
      <line {...thin} x1="300" y1="330" x2="300" y2="408" />
      <line {...thin} x1="398" y1="330" x2="398" y2="408" />
      <g transform="translate(0 -10)" className="animate-dash">
        <line {...stroke} x1="300" y1="250" x2="300" y2="330" />
        <line {...stroke} x1="380" y1="250" x2="380" y2="330" />
      </g>
      <circle {...thin} cx="408" cy="340" r="5" />
    </g>
  ),

  building: (
    <g>
      <line {...stroke} x1="120" y1="408" x2="540" y2="408" />
      <rect {...stroke} x="210" y="180" width="150" height="228" rx="2" />
      <line {...thin} x1="210" y1="235" x2="360" y2="235" />
      <line {...thin} x1="210" y1="290" x2="360" y2="290" />
      <line {...thin} x1="210" y1="345" x2="360" y2="345" />
      <line {...thin} x1="285" y1="180" x2="285" y2="408" />
      <rect {...thin} x="242" y="200" width="15" height="19" />
      <rect {...thin} x="307" y="200" width="15" height="19" />
      <rect {...thin} x="242" y="255" width="15" height="19" />
      <rect {...thin} x="307" y="255" width="15" height="19" />
      <rect {...thin} x="242" y="310" width="15" height="19" />
      <rect {...thin} x="307" y="310" width="15" height="19" />
      <rect {...stroke} x="400" y="268" width="118" height="140" rx="2" />
      <line {...thin} x1="400" y1="308" x2="518" y2="308" />
      <line {...thin} x1="400" y1="348" x2="518" y2="348" />
      <rect {...thin} x="418" y="372" width="22" height="36" />
      <rect {...thin} x="459" y="372" width="22" height="36" />
      <line {...stroke} x1="494" y1="128" x2="494" y2="268" />
      <line {...thin} x1="494" y1="160" x2="506" y2="140" />
      <line {...thin} x1="494" y1="160" x2="482" y2="140" />
      <line {...stroke} x1="420" y1="140" x2="546" y2="140" />
      <line {...stroke} x1="546" y1="140" x2="546" y2="178" />
      <circle {...thin} cx="459" cy="160" r="9" className="animate-dash" />
    </g>
  ),

  bridge: (
    <g>
      <line {...stroke} x1="120" y1="408" x2="540" y2="408" />
      <path {...stroke} d="M160 408q118-150 236 0" />
      <path {...thin} d="M196 408q118-122 236 0" opacity="0.6" />
      <line {...stroke} x1="396" y1="300" x2="396" y2="408" />
      <line {...thin} x1="160" y1="363" x2="396" y2="262" />
      <line {...thin} x1="396" y1="262" x2="536" y2="363" />
      <line {...thin} x1="160" y1="330" x2="396" y2="222" />
      <line {...thin} x1="396" y1="222" x2="536" y2="330" />
      <line {...stroke} x1="140" y1="330" x2="556" y2="330" />
      <line {...thin} x1="140" y1="330" x2="556" y2="330" className="animate-rubber-dash" opacity="0.8" />
      <path {...thin} d="M130 420q14-10 28 0q14 10 28 0" />
      <path {...thin} d="M196 420q14-10 28 0q14 10 28 0" />
      <path {...thin} d="M262 420q14-10 28 0q14 10 28 0" />
      <path {...thin} d="M328 420q14-10 28 0q14 10 28 0" />
      <path {...thin} d="M394 420q14-10 28 0q14 10 28 0" />
      <path {...thin} d="M460 420q14-10 28 0q14 10 28 0" opacity="0.7" />
      <circle {...thin} cx="396" cy="222" r="4" />
      <line {...thin} x1="422" y1="246" x2="452" y2="200" />
      <line {...thin} x1="452" y1="200" x2="470" y2="212" />
      <line {...thin} x1="308" y1="280" x2="318" y2="262" />
      <line {...thin} x1="318" y1="262" x2="336" y2="270" />
    </g>
  ),

  compass: (
    <g>
      <rect {...thin} x="140" y="120" width="340" height="280" rx="6" />
      <g className="animate-dash" opacity="0.7">
        <line {...thin} x1="140" y1="180" x2="480" y2="180" />
        <line {...thin} x1="140" y1="240" x2="480" y2="240" />
        <line {...thin} x1="140" y1="300" x2="480" y2="300" />
        <line {...thin} x1="140" y1="360" x2="480" y2="360" />
        <line {...thin} x1="200" y1="120" x2="200" y2="400" />
        <line {...thin} x1="260" y1="120" x2="260" y2="400" />
        <line {...thin} x1="320" y1="120" x2="320" y2="400" />
        <line {...thin} x1="380" y1="120" x2="380" y2="400" />
        <line {...thin} x1="440" y1="120" x2="440" y2="400" />
      </g>
      <path {...stroke} d="M310 400q-12-168 0-170q12 2 0 170" className="animate-glow-pulse" />
      <path {...stroke} d="M262 400q-34-210 68-222" className="animate-glow-pulse" />
      <circle {...stroke} cx="310" cy="228" r="14" />
      <path {...stroke} d="M310 228l-16-22 16 6 16-6z" className="fill-current" />
      <line {...thin} x1="150" y1="132" x2="470" y2="132" />
      <line {...thin} x1="150" y1="388" x2="470" y2="388" />
      <circle {...thin} cx="438" cy="170" r="22" className="animate-spin-slow" style={{ transformBox: "fill-box", transformOrigin: "center" }}>
        <line {...thin} x1="438" y1="154" x2="438" y2="186" />
      </circle>
      <line {...thin} x1="438" y1="151" x2="438" y2="157" />
      <line {...thin} x1="438" y1="183" x2="438" y2="189" />
    </g>
  ),

  document: (
    <g>
      <rect {...stroke} x="200" y="120" width="150" height="196" rx="4" />
      <path {...stroke} d="M332 120h-24v40h-24v-40h-60v-40h84z" transform="translate(16 40)" />
      <path {...thin} d="M224 168h100M224 192h82M224 216h92M224 240h70M224 264h88" className="animate-dash" />
      <circle {...thin} cx="200" cy="120" r="3" />
      <line {...stroke} x1="330" y1="430" x2="290" y2="336" />
      <line {...thin} x1="290" y1="336" x2="294" y2="326" />
      <path {...thin} d="M328 420q-4-6 4-9" />
      <circle {...thin} cx="352" cy="404" r="34" />
      <line {...thin} x1="340" y1="416" x2="344" y2="392" />
      <path {...thin} d="M358 412l12 10" />
      <rect {...thin} x="420" y="180" width="88" height="26" rx="4" />
      <rect {...thin} x="420" y="220" width="88" height="26" rx="4" />
      <rect {...thin} x="420" y="260" width="60" height="26" rx="4" />
    </g>
  ),

  frame: (
    <g>
      <rect {...stroke} x="160" y="150" width="200" height="150" rx="4" />
      <g className="animate-dash" opacity="0.75">
        <path {...thin} d="M190 190l48 42 36-28 86 78" />
        <path {...thin} d="M160 260l52-6" />
      </g>
      <circle {...thin} cx="300" cy="196" r="12" />
      <line {...thin} x1="196" y1="252" x2="230" y2="210" />
      <line {...thin} x1="230" y1="210" x2="236" y2="218" />
      <rect {...stroke} x="398" y="210" width="110" height="82" rx="4" />
      <path {...thin} d="M420 250l22-18 16 12 26-22 24 30" />
      <rect {...thin} x="398" y="268" width="110" height="24" />
      <rect {...stroke} x="254" y="330" width="86" height="62" rx="3" />
      <path {...thin} d="M270 366l18-14 14 10 20-16" />
      <line {...thin} x1="160" y1="420" x2="430" y2="420" />
      <circle {...thin} cx="452" cy="404" r="16" className="animate-spin-slow" style={{ transformBox: "fill-box", transformOrigin: "center" }}>
        <line {...thin} x1="452" y1="396" x2="452" y2="412" />
      </circle>
    </g>
  ),

  network: (
    <g>
      <circle {...thin} cx="240" cy="196" r="18" />
      <circle {...thin} cx="404" cy="180" r="18" />
      <circle {...thin} cx="338" cy="300" r="18" />
      <circle {...thin} cx="176" cy="322" r="18" />
      <circle {...thin} cx="480" cy="300" r="18" />
      <g className="animate-dash" opacity="0.8">
        <line {...thin} x1="240" y1="196" x2="404" y2="180" />
        <line {...thin} x1="240" y1="196" x2="176" y2="322" />
        <line {...thin} x1="240" y1="196" x2="338" y2="300" />
        <line {...thin} x1="404" y1="180" x2="480" y2="300" />
        <line {...thin} x1="404" y1="180" x2="338" y2="300" />
        <line {...thin} x1="338" y1="300" x2="480" y2="300" />
        <line {...thin} x1="176" y1="322" x2="338" y2="300" />
      </g>
      <circle {...thin} cx="240" cy="196" r="26" opacity="0.45" />
      <circle {...thin} cx="480" cy="300" r="26" opacity="0.45" />
      <circle {...thin} cx="160" cy="150" r="6" />
      <line {...thin} x1="160" y1="150" x2="204" y2="150" />
      <line {...thin} x1="204" y1="150" x2="222" y2="180" />
      <circle {...thin} cx="160" cy="368" r="6" />
      <line {...thin} x1="160" y1="368" x2="176" y2="340" />
      <line {...thin} x1="120" y1="408" x2="540" y2="408" />
    </g>
  ),

  message: (
    <g>
      <rect {...stroke} x="170" y="150" width="230" height="120" rx="14" />
      <path {...stroke} d="M222 270l-24 44 64-44" />
      <path {...stroke} d="M284 210a34 34 0 1 0 68 0" />
      <line {...thin} x1="352" y1="210" x2="356" y2="210" />
      <rect {...stroke} x="438" y="150" width="72" height="72" rx="14" />
      <line {...thin} x1="438" y1="186" x2="510" y2="186" />
      <rect {...stroke} x="294" y="306" width="150" height="66" rx="12" />
      <path {...thin} d="M320 330h70M320 350h44" className="animate-dash" />
      <circle {...thin} cx="258" cy="150" r="6" />
      <line {...thin} x1="258" y1="150" x2="258" y2="120" />
      <circle {...thin} cx="486" cy="126" r="16" className="animate-spin-slow" style={{ transformBox: "fill-box", transformOrigin: "center" }}>
        <line {...thin} x1="486" y1="118" x2="486" y2="134" />
      </circle>
    </g>
  ),
};

export function BlueprintArt({
  motif = "crane",
  className,
}: {
  motif?: BlueprintMotif;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 560 460"
      aria-hidden
      className={cn("select-none text-white", className)}
    >
      <defs>
        <pattern id="bp-grid" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M32 0H0v32" fill="none" stroke="currentColor" strokeWidth="0.6" />
        </pattern>
        <pattern id="bp-grid-lg" width="128" height="128" patternUnits="userSpaceOnUse">
          <rect width="128" height="128" fill="url(#bp-grid)" />
          <rect width="128" height="128" fill="none" stroke="currentColor" strokeWidth="1" />
        </pattern>
      </defs>

      <rect width="560" height="460" fill="url(#bp-grid-lg)" />

      <g className="animate-glow-pulse">
        <circle cx="330" cy="230" r="170" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <circle cx="330" cy="230" r="212" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.16" />
      </g>

      {motifs[motif]}

      <g stroke="currentColor" strokeWidth="1" opacity="0.5">
        {Array.from({ length: 14 }).map((_, i) => (
          <line key={`h-${i}`} x1={120 + i * 28} y1="408" x2={120 + i * 28} y2="414" />
        ))}
        {Array.from({ length: 13 }).map((_, i) => (
          <line key={`v-${i}`} x1="540" y1={28 + i * 28} x2="548" y2={28 + i * 28} />
        ))}
      </g>

      <g fill="currentColor" opacity="0.55">
        <circle cx="148" cy="148" r="2.5" />
        <circle cx="540" cy="148" r="2.5" />
        <circle cx="148" cy="414" r="2.5" />
      </g>

      <rect x="138" y="404" width="240" height="30" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.35" />
      <text
        x="150"
        y="423"
        fill="currentColor"
        opacity="0.5"
        style={{ fontFamily: "monospace" }}
        fontSize="10"
        letterSpacing="2"
      >
        DGN.NO. 24-15 - REV. B
      </text>
      <text
        x="420"
        y="423"
        fill="currentColor"
        opacity="0.5"
        style={{ fontFamily: "monospace" }}
        fontSize="10"
        letterSpacing="2"
      >
        SKALA 1 : 100
      </text>
    </svg>
  );
}