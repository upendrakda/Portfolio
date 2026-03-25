import { DATA } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-5 sm:px-10 py-16 sm:py-20">
      <div className="flex items-center gap-4 text-[11px] font-bold tracking-widest uppercase text-white/35 mb-6 after:content-[''] after:flex-1 after:h-px after:bg-white/8">
        01 — About me
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[5fr_3fr] gap-10 lg:gap-16 items-start">
        {/* Left: bio */}
        <div>
          {DATA.bio.map((para, i) => (
            <p key={i} className={`text-base sm:text-xl font-medium leading-relaxed text-white/70 ${i > 0 ? "mt-4" : ""}`}>
              {para}
            </p>
          ))}

          <blockquote className="mt-6 bg-[#7b5ea7] p-6 sm:p-8 rounded-xl font-['Instrument_Serif'] italic text-lg sm:text-xl leading-relaxed text-[#f7f4ee]">
            {DATA.quote}
          </blockquote>

          <div className="flex flex-wrap gap-2 mt-6">
            {DATA.chips.map((c) => (
              <span key={c.label} className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wide ${c.cls}`}>
                {c.label}
              </span>
            ))}
          </div>
        </div>

        {/* Right: stat cards */}
        <div className="flex flex-col gap-px bg-white/8 border border-white/8 rounded-xl overflow-hidden">
          {DATA.stats.map((s, i) => (
            <div key={i} className="bg-[#161616] px-5 sm:px-6 py-4 sm:py-5">
              <div
                className={`font-black leading-none mb-1 ${s.small ? "text-base sm:text-lg font-semibold tracking-normal" : "text-3xl sm:text-4xl tracking-tight"}`}
                style={{ color: s.color || "rgba(247,244,238,0.6)" }}
              >
                {s.val}
              </div>
              <div className="text-[11px] font-semibold uppercase tracking-widest text-white/40">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
