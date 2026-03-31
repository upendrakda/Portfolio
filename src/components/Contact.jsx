import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { DATA } from "../data/portfolioData";

// ─── YOUR EMAILJS CREDENTIALS HERE ────────────────────
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;   // EmailJS > Email Services
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;  // EmailJS > Email Templates
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY; // EmailJS > Account > Public Key
// ────────────────────────────────────────────────────────────

const contactLinks = [
  { icon: "✉",  sub: "Email",    key: "email",    href: (v) => `mailto:${v}` },
  { icon: "GH", sub: "GitHub",   key: "github",   href: (v) => `https://${v}` },
  { icon: "LI", sub: "LinkedIn", key: "linkedin", href: (v) => `https://${v}` },
];

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      formRef.current.reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-5 sm:px-10 py-16 sm:py-20">
      <div className="flex items-center gap-4 text-[11px] font-bold tracking-widest uppercase text-white/35 mb-6 after:content-[''] after:flex-1 after:h-px after:bg-white/8">
        04 — Get in touch
      </div>

      <div className="bg-[#0a0a0a] border border-white/8 rounded-2xl p-6 sm:p-10 lg:p-14 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        {/* Left */}
        <div>
          <h3 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight mb-4">
            Let's make<br />something<br />
            <em className="font-['Instrument_Serif'] font-normal italic text-white/45">remarkable.</em>
          </h3>
          <p className="text-sm font-medium text-white/45 leading-loose mb-6 sm:mb-8">
            Open to freelance projects, full-time roles, and interesting conversations.
            If you're building something that matters, I want to hear about it.
          </p>
          {contactLinks.map(({ icon, sub, key, href }) => (
            <a
              key={key}
              href={href(DATA.contact[key])}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 py-3.5 border-t border-white/6 no-underline hover:opacity-70 transition-opacity"
            >
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/[0.07] flex items-center justify-center text-[10px] font-extrabold text-white/40 shrink-0">
                {icon}
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-0.5">{sub}</div>
                <div className="text-sm font-semibold text-white/70">{DATA.contact[key]}</div>
              </div>
            </a>
          ))}
        </div>

        {/* Right: form */}
        <form ref={formRef} className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField label="Name"    name="from_name"  type="text"  placeholder="Your name"         required />
            <FormField label="Email"   name="from_email" type="email" placeholder="you@email.com"     required />
          </div>
          <FormField   label="Subject" name="subject"    type="text"  placeholder="What's this about?" required />
          <FormField   label="Message" name="message"    as="textarea" placeholder="Tell me about your project..." rows={5} required />

          <button
            type="submit"
            disabled={status === "sending"}
            className={`self-start px-7 py-3 text-xs font-extrabold uppercase tracking-widest rounded-lg transition-all active:scale-95
              ${status === "idle"    ? "bg-[#c8f135] text-[#0d0d0d] hover:opacity-90 hover:-translate-y-px" : ""}
              ${status === "sending" ? "bg-white/20 text-white/40 cursor-not-allowed" : ""}
              ${status === "success" ? "bg-[#c8f135]/20 text-[#c8f135] cursor-default" : ""}
              ${status === "error"   ? "bg-red-500/20 text-red-400 cursor-default" : ""}
            `}
          >
            {status === "idle"    && "Send it ↗"}
            {status === "sending" && "Sending…"}
            {status === "success" && "✓ Sent successfully!"}
            {status === "error"   && "✗ Failed — try again"}
          </button>
        </form>
      </div>
    </section>
  );
}

function FormField({ label, as = "input", ...props }) {
  const base =
    "w-full bg-white/4 border border-white/8 text-[#f7f4ee] px-4 py-3 rounded-lg text-sm font-medium outline-none resize-none placeholder:text-white/20 focus:border-[#c8f135]/40 focus:bg-white/[0.06] transition-colors";
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[11px] font-bold uppercase tracking-widest text-white/30">{label}</label>
      {as === "textarea" ? <textarea className={base} {...props} /> : <input className={base} {...props} />}
    </div>
  );
}
