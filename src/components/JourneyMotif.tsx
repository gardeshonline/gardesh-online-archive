/**
 * Abstract, architectural journey motif: a thin route line that draws itself
 * once and terminates in a quiet open circle. Decorative only.
 */
export function JourneyMotif({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 120"
      fill="none"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="none"
      className={className}
    >
      <line
        x1="0"
        y1="60"
        x2="1200"
        y2="60"
        stroke="currentColor"
        strokeOpacity="0.1"
        strokeWidth="1"
        strokeDasharray="2 7"
      />
      <path
        d="M1196 60 C 1010 60, 980 22, 830 22 C 660 22, 620 96, 460 96 C 320 96, 280 46, 130 46 C 80 46, 40 54, 6 60"
        stroke="currentColor"
        strokeOpacity="0.42"
        strokeWidth="1.25"
        strokeLinecap="round"
        className="draw-line"
        style={{ ["--dash" as string]: 1600, ["--reveal-delay" as string]: "700ms" }}
      />
      <circle
        cx="1196"
        cy="60"
        r="3"
        fill="currentColor"
        className="dot-in"
        style={{ ["--reveal-delay" as string]: "800ms" }}
      />
      <circle
        cx="830"
        cy="22"
        r="1.75"
        fill="currentColor"
        fillOpacity="0.45"
        className="dot-in"
        style={{ ["--reveal-delay" as string]: "1500ms" }}
      />
      <circle
        cx="460"
        cy="96"
        r="1.75"
        fill="currentColor"
        fillOpacity="0.45"
        className="dot-in"
        style={{ ["--reveal-delay" as string]: "2100ms" }}
      />
      <circle
        cx="6"
        cy="60"
        r="4.5"
        stroke="currentColor"
        strokeWidth="1.25"
        fill="none"
        className="dot-in"
        style={{ ["--reveal-delay" as string]: "3100ms" }}
      />
    </svg>
  );
}
