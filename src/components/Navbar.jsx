import { useState } from "react";
import { DATA } from "../data/portfolioData";

export default function Navbar({ scrollTo }) {
  const [open, setOpen] = useState(false);
  const links = ["about", "projects", "skills", "contact"];

  const handleNav = (id) => {
    scrollTo(id);
    setOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-white/8 bg-[#0d0d0d]/90 backdrop-blur-md">
      <div className="flex items-center justify-between px-5 sm:px-10 h-14">
        {/* Logo */}
        <span className="text-base font-black tracking-tight text-[#f7f4ee]">
          {DATA.nameSlug.replace(".", "")}
          <span className="text-[#c8f135]">.</span>
        </span>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 list-none">
          {links.map((s) => (
            <li key={s}>
              <button
                onClick={() => handleNav(s)}
                className="text-xs font-medium tracking-widest uppercase text-white/40 hover:text-[#f7f4ee] transition-colors bg-transparent border-none cursor-pointer"
              >
                {s}
              </button>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <span className="hidden md:block w-2 h-2 rounded-full bg-[#c8f135] animate-pulse" />
          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 bg-transparent border-none cursor-pointer p-1"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-[#f7f4ee] transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-[#f7f4ee] transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-[#f7f4ee] transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-64" : "max-h-0"}`}>
        <ul className="flex flex-col px-5 pb-4 gap-1 list-none">
          {links.map((s) => (
            <li key={s}>
              <button
                onClick={() => handleNav(s)}
                className="w-full text-left py-3 text-sm font-medium tracking-widest uppercase text-white/50 hover:text-[#f7f4ee] transition-colors bg-transparent border-none cursor-pointer border-b border-white/8"
              >
                {s}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
