export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Startup Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Calculate Startup Runway<br />
          <span className="text-[#58a6ff]">Across Every Scenario</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Model cash runway based on burn rate, hiring plans, and revenue projections.
          Get real-time alerts before your runway runs out.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Get Access — $39/mo
        </a>
        <div className="mt-10 grid grid-cols-3 gap-4 text-center">
          {[
            ["Scenario Modeling", "Compare best, base & worst cases"],
            ["Runway Alerts", "Automated threshold notifications"],
            ["Hiring Plans", "Model headcount impact instantly"]
          ].map(([title, desc]) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
              <div className="text-[#58a6ff] font-semibold text-sm mb-1">{title}</div>
              <div className="text-[#8b949e] text-xs">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-xs uppercase tracking-widest text-[#58a6ff] mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$39</div>
          <div className="text-[#8b949e] text-sm mb-6">/month · cancel anytime</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited runway scenarios",
              "Real-time burn rate calculator",
              "Hiring plan impact modeling",
              "Revenue projection engine",
              "Automated runway alerts",
              "CSV export & shareable links"
            ].map(f => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            [
              "How does scenario modeling work?",
              "You input your current cash balance, monthly burn, planned hires, and revenue forecasts. The engine calculates runway for best, base, and worst-case scenarios simultaneously."
            ],
            [
              "When do runway alerts trigger?",
              "You set custom thresholds (e.g. 6 months, 3 months). The system monitors your inputs in real time and notifies you the moment any scenario drops below your threshold."
            ],
            [
              "Can I share scenarios with investors?",
              "Yes. Every scenario generates a shareable read-only link and can be exported as a CSV for board decks or investor updates."
            ]
          ].map(([q, a]) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center pb-10 text-[#484f58] text-xs">
        &copy; {new Date().getFullYear()} Startup Runway Calculator. All rights reserved.
      </footer>
    </main>
  );
}