import { navItems } from "@/data/site";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#04101f]/70 backdrop-blur-xl">
      <nav className="section-shell flex h-16 items-center justify-between">
        <a href="#hero" className="text-sm font-semibold tracking-[0.18em] text-white">
          AYUMU OTA
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="mailto:ace.o.walker@gmail.com"
          className="rounded-full border border-cyan-200/30 bg-cyan-200/10 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:bg-cyan-200/18"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
