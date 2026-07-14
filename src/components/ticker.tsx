const ITEMS = [
  "TOP 5 WORLDWIDE",
  "ZILDJIAN",
  "TAMA",
  "VIC FIRTH",
  "SONOR",
  "SCRIPTONITE",
  "SD DRUM SHOW",
  "40+ COUNTRIES",
];

export function Ticker({ tone = "electric" }: { tone?: "electric" | "hot" }) {
  const line = ITEMS.join("   ●   ");
  const bg = tone === "electric" ? "bg-electric" : "bg-hot";
  const text = tone === "electric" ? "text-bg" : "text-bg";

  return (
    <div className={`overflow-hidden py-2.5 sm:py-3 ${bg}`}>
      <div className="ticker-track flex whitespace-nowrap">
        <span className={`font-display px-4 text-lg sm:text-2xl ${text} md:text-3xl`}>
          {line}   ●   {line}   ●
        </span>
        <span
          className={`font-display px-4 text-lg sm:text-2xl ${text} md:text-3xl`}
          aria-hidden
        >
          {line}   ●   {line}   ●
        </span>
      </div>
    </div>
  );
}
