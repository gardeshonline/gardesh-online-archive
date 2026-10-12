export default function App() {
  return (
    <main className="landing" dir="rtl">
      <div className="ambient ambientOne" aria-hidden="true" />
      <div className="ambient ambientTwo" aria-hidden="true" />

      <section className="content" aria-labelledby="coming-soon-title">
        <div className="logoFrame">
          <img src="/logo.png" alt="لوگوی گردش" className="logo" />
        </div>

        <div className="copy">
          <p className="eyebrow">گردش</p>
          <h1 id="coming-soon-title">به‌زودی</h1>
          <p className="subtitle">نسخه‌ی جدید گردش در راه است.</p>
        </div>
      </section>

      <footer>
        <span>gardeshonline.com</span>
      </footer>
    </main>
  );
}
