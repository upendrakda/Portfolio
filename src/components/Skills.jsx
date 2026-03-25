import { DATA } from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-5 sm:px-10 py-16 sm:py-20">
      <div className="flex items-center gap-4 text-[11px] font-bold tracking-widest uppercase text-white/35 mb-6 after:content-[''] after:flex-1 after:h-px after:bg-white/8">
        03 — What I work with
      </div>

      <h2 className="text-[clamp(2rem,5vw,4.5rem)] font-black tracking-tight leading-none mb-10 sm:mb-14">
        Skills &amp;{" "}
        <em className="font-['Instrument_Serif'] font-normal italic text-white/40">tools</em>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/8 border border-white/8 rounded-2xl overflow-hidden">
        {DATA.skillPanels.map((panel) => (
          <div key={panel.label} className="bg-[#111111] p-6 sm:p-8">
            <div className={`flex items-center gap-3 text-[11px] font-extrabold tracking-widest uppercase mb-5 pb-4 border-b border-white/8 ${panel.headCls}`}>
              <span className={`w-7 h-7 rounded-md flex items-center justify-center text-sm ${panel.iconBg}`}>
                {panel.icon}
              </span>
              {panel.label}
            </div>
            <div className="flex flex-wrap gap-2">
              {panel.skills.map((s) => (
                <span
                  key={s.name}
                  className={`text-xs font-bold px-3 py-1.5 rounded-md tracking-wide transition-opacity hover:opacity-75 cursor-default
                    ${s.accent ? panel.accentCls : "bg-white/6 text-white/65"}`}
                >
                  {s.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
