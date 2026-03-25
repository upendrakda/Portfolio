import { DATA } from "../data/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-5 sm:px-10 py-16 sm:py-20">
      <div className="flex items-center gap-4 text-[11px] font-bold tracking-widest uppercase text-white/35 mb-6 after:content-[''] after:flex-1 after:h-px after:bg-white/8">
        02 — Selected work
      </div>

      <h2 className="text-[clamp(2rem,5vw,4.5rem)] font-black tracking-tight leading-none mb-10 sm:mb-14">
        Things I've{" "}
        <em className="font-['Instrument_Serif'] font-normal italic text-white/40">built</em>
      </h2>

      <div className="flex flex-col gap-px bg-white/8 border border-white/8 rounded-2xl overflow-hidden">
        {DATA.projects.map((p) => (
          <a
            key={p.index}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col sm:grid sm:grid-cols-[48px_1fr_auto] gap-3 sm:gap-8 items-start sm:items-center px-5 sm:px-10 py-6 sm:py-8 bg-[#111111] hover:bg-[#181818] transition-colors no-underline"
          >
            <span className="hidden sm:block text-xs font-bold tracking-widest text-white/20">{p.index}</span>
            <div className="w-full">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-[10px] font-bold tracking-widest uppercase text-white/30">{p.year}</span>
                <span className={`text-[10px] font-bold tracking-wide px-2 py-0.5 rounded ${p.techCls}`}>{p.tech}</span>
              </div>
              <div className="text-lg sm:text-xl font-extrabold tracking-tight leading-tight mb-1.5 text-[#f7f4ee]">
                {p.title}
              </div>
              <div className="text-sm font-medium text-white/40 leading-relaxed">{p.desc}</div>
            </div>
            <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center text-base shrink-0 transition-transform group-hover:rotate-45 self-start sm:self-auto mt-1 sm:mt-0 ${p.ctaCls}`}>
              ↗
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
