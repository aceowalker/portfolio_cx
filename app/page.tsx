import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { OpenBadge } from "@/components/OpenBadge";
import { Portfolio } from "@/components/Portfolio";
import { Skills } from "@/components/Skills";
import { metrics } from "@/data/site";

function CapabilityStrip() {
  return (
    <section className="section-shell -mt-14 pb-16">
      <div className="glass grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
        {metrics.slice(0, 3).map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.label} className="bg-[#061525]/70 p-5">
              <Icon className="mb-4 text-cyan-100" size={22} />
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">{item.label}</p>
              <p className="mt-2 text-base font-bold text-white">{item.value}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[760px] bg-[radial-gradient(circle_at_70%_12%,rgba(145,245,255,0.22),transparent_34%),radial-gradient(circle_at_12%_18%,rgba(255,255,255,0.12),transparent_28%)]" />
      <Header />
      <Hero />
      <CapabilityStrip />
      <About />
      <OpenBadge />
      <Portfolio />
      <Skills />
      <Contact />
    </main>
  );
}
