import Navbar   from "./components/Navbar";
import Hero     from "./components/Hero";
import About    from "./components/About";
import Projects from "./components/Projects";
import Skills   from "./components/Skills";
import Contact  from "./components/Contact";
import Footer   from "./components/Footer";

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function App() {
  return (
    <div className="bg-[#0d0d0d] text-[#f7f4ee] min-h-screen font-['Cabinet_Grotesk',sans-serif]">
      <Navbar   scrollTo={scrollTo} />
      <Hero     scrollTo={scrollTo} />
      <hr className="max-w-6xl mx-auto border-white/[0.07]" />
      <About    />
      <hr className="max-w-6xl mx-auto border-white/[0.07]" />
      <Projects />
      <hr className="max-w-6xl mx-auto border-white/[0.07]" />
      <Skills   />
      <hr className="max-w-6xl mx-auto border-white/[0.07]" />
      <Contact  />
      <Footer   scrollTo={scrollTo} />
    </div>
  );
}
