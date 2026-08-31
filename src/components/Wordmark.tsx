type WordmarkProps = {
  className?: string;
  /** tailwind text size classes for the wordmark */
  sizeClass?: string;
};

/**
 * Typographic wordmark for «گردش آنلاین».
 * Pure text + CSS: no icon, no raster asset, monochrome-safe.
 */
export function Wordmark({ className = "", sizeClass = "text-lg sm:text-xl" }: WordmarkProps) {
  return (
    <span
      className={`inline-flex items-baseline gap-[0.28em] leading-none ${sizeClass} ${className}`}
    >
      <span className="font-semibold tracking-[-0.02em] text-ink">گردش</span>
      <span className="font-light tracking-[0.06em] text-ink-soft">آنلاین</span>
    </span>
  );
}
