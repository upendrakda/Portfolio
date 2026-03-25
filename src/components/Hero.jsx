import { DATA } from "../data/portfolioData";

export default function Hero({ scrollTo }) {
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-56px)] grid grid-rows-[1fr_auto] px-5 sm:px-10 pt-10 pb-6 overflow-hidden"
    >
      {/* Background orbs */}
      <div
        className="absolute w-75 sm:w-150 h-75 sm:h-150 rounded-full -right-20 top-1/2 -translate-y-1/2 pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(123,94,167,0.18) 0%, transparent 70%)" }}
      />
      <div
        className="absolute w-50 sm:w-75 h-50 sm:h-75 rounded-full left-[20%] top-[20%] pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(200,241,53,0.08) 0%, transparent 70%)" }}
      />

      {/* Tagline */}
      <div className="relative z-10 flex flex-col justify-center gap-6">
        {DATA.available && (
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase text-[#c8f135] bg-[#c8f135]/10 border border-[#c8f135]/25 w-fit">
            ✦ Available for work
          </div>
        )}
        <h1 className="text-[clamp(3rem,10vw,9.5rem)] font-black leading-[0.88] tracking-[-0.05em]">
          {DATA.tagline[0]}
          <br />
          <span className="text-[#c8f135]">{DATA.tagline[1]}</span>
          <br />
          <span className="font-['Instrument_Serif'] italic font-normal text-[0.85em] text-[#f7f4ee]/55">
            {DATA.tagline[2]}
          </span>
        </h1>
      </div>

      {/* Stat bar */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-xl overflow-hidden mt-8">
        {DATA.heroStats.map((s, i) => (
          <div key={i} className="bg-[#0d0d0d] px-5 py-4 sm:py-5">
            <div className="text-2xl sm:text-3xl font-black tracking-tight leading-none mb-1" style={{ color: s.color }}>
              {s.num}
            </div>
            <div className="text-[11px] font-medium uppercase tracking-widest text-white/40">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
