import { Wordmark } from "@/components/Wordmark";
import { JourneyMotif } from "@/components/JourneyMotif";

const chapters = [
  {
    title: "روایت سفر",
    body: "نوشتن از مسیر، از آدم‌ها و از آنچه میان مبدأ و مقصد اتفاق می‌افتد.",
  },
  {
    title: "معرفی مقصدها",
    body: "شناساندن شهرها و طبیعت‌هایی که ارزش دیده‌شدن داشتند.",
  },
  {
    title: "راهنماهای گردشگری",
    body: "یادداشت‌های کاربردی برای کسانی که تازه راه می‌افتادند.",
  },
  {
    title: "تجربه‌ها و داستان‌ها",
    body: "روایت‌هایی از سفرهایی که تمام شدند اما در حافظه ماندند.",
  },
];

const numerals = ["۰۱", "۰۲", "۰۳", "۰۴"];

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <div className="mx-auto w-full max-w-[1180px] px-6 sm:px-10 lg:px-16">
        <header className="reveal flex items-center justify-between py-7 sm:py-9">
          <Wordmark />
          <span className="flex items-center gap-2 text-[11px] font-light tracking-[0.14em] text-muted-foreground sm:text-xs">
            <span
              aria-hidden="true"
              className="inline-block size-[5px] rounded-full bg-evergreen/70"
            />
            آرشیو شده
          </span>
        </header>

        <div className="hairline-t" />

        <main>
          {/* Hero */}
          <section className="pt-16 pb-10 sm:pt-24 lg:pt-32 lg:pb-14">
            <p
              className="reveal text-[11px] font-light tracking-[0.22em] text-evergreen sm:text-xs"
              style={{ ["--reveal-delay" as string]: "80ms" }}
            >
              پایان فعالیت
            </p>

            <h1
              className="reveal text-balance-fa mt-7 max-w-[19ch] text-[2rem] leading-[1.35] font-semibold tracking-[-0.015em] text-ink sm:text-[2.9rem] sm:leading-[1.3] lg:max-w-[22ch] lg:text-[3.75rem] lg:leading-[1.22]"
              style={{ ["--reveal-delay" as string]: "160ms" }}
            >
              قصه‌ی گردش آنلاین اینجا تمام می‌شود.
              <span className="block font-light text-ink-soft">قصه‌ی سفر نه.</span>
            </h1>

            <p
              className="reveal mt-9 max-w-[52ch] text-[0.95rem] leading-[2.1] font-light text-muted-foreground sm:text-base"
              style={{ ["--reveal-delay" as string]: "280ms" }}
            >
              گردش آنلاین با هدف روایت سفر، معرفی مقصدها و تولید محتوای گردشگری شکل گرفت. امروز
              فعالیت این رسانه به پایان رسیده است.
            </p>
          </section>

          {/* Journey motif */}
          <section aria-hidden="true" className="py-10 sm:py-16">
            <JourneyMotif className="h-20 w-full text-evergreen sm:h-28" />
          </section>

          {/* آنچه بودیم */}
          <section className="pt-10 pb-16 sm:pt-16 sm:pb-24" aria-labelledby="what-we-were">
            <h2
              id="what-we-were"
              className="reveal text-[11px] font-light tracking-[0.22em] text-muted-foreground sm:text-xs"
              style={{ ["--reveal-delay" as string]: "60ms" }}
            >
              آنچه بودیم
            </h2>

            <ol className="mt-10 grid grid-cols-1 gap-px bg-hairline sm:mt-14 sm:grid-cols-2">
              {chapters.map((item, i) => (
                <li
                  key={item.title}
                  className="reveal bg-background py-8 sm:px-8 sm:py-12 sm:first:ps-0 lg:py-14"
                  style={{ ["--reveal-delay" as string]: `${120 + i * 90}ms` }}
                >
                  <div className="flex items-baseline gap-4">
                    <span className="text-[11px] font-light tabular-nums text-evergreen/70">
                      {numerals[i]}
                    </span>
                    <h3 className="text-lg font-medium tracking-[-0.01em] text-ink sm:text-xl">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-3 max-w-[42ch] ps-8 text-sm leading-[2] font-light text-muted-foreground">
                    {item.body}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          <div className="hairline-t" />

          {/* Closing note */}
          <section className="py-16 sm:py-24 lg:py-32" aria-labelledby="closing">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
              <h2
                id="closing"
                className="reveal text-balance-fa text-[1.6rem] leading-[1.6] font-medium tracking-[-0.015em] text-ink sm:text-[2rem] sm:leading-[1.55]"
                style={{ ["--reveal-delay" as string]: "60ms" }}
              >
                ممنون که هم‌سفر ما بودید.
              </h2>
              <p
                className="reveal max-w-[56ch] text-[0.95rem] leading-[2.15] font-light text-muted-foreground sm:text-base"
                style={{ ["--reveal-delay" as string]: "180ms" }}
              >
                این صفحه پایان فعالیت گردش آنلاین را ثبت می‌کند؛ اما خاطره‌ی مسیر، مقصدها و
                روایت‌هایی که در این سال‌ها ساخته شد، باقی می‌ماند.
              </p>
            </div>
          </section>
        </main>

        <div className="hairline-t" />

        <footer className="flex flex-col gap-3 py-8 text-[11px] font-light tracking-[0.08em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:py-10 sm:text-xs">
          <span dir="ltr" className="tracking-[0.14em]">
            GardeshOnline — Archived
          </span>
          <Wordmark sizeClass="text-sm" className="opacity-70" />
        </footer>
      </div>
    </div>
  );
}
