import { DATA } from "../data/portfolioData";

export default function Footer({ scrollTo }) {
  return (
    <footer className="border-t border-white/8">
      <div className="max-w-6xl mx-auto px-5 sm:px-10 py-6 sm:py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-sm font-semibold text-white/35">
          © {new Date().getFullYear()} {DATA.name}
        </span>
        <div className="flex gap-4 sm:gap-6 flex-wrap justify-center">
          {["about", "projects", "contact"].map((s) => (
            <button
              key={s}
              onClick={() => scrollTo(s)}
              className="text-xs font-semibold tracking-wide text-white/25 hover:text-white/70 transition-colors bg-transparent border-none cursor-pointer capitalize"
            >
              {s}
            </button>
          ))}
          <button
            onClick={() => scrollTo("hero")}
            className="text-xs font-semibold tracking-wide text-white/25 hover:text-white/70 transition-colors bg-transparent border-none cursor-pointer"
          >
            ↑ Top
          </button>
        </div>
      </div>
    </footer>
  );
}
