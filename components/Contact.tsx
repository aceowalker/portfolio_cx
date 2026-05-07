import { Mail } from "lucide-react";
import { profile } from "@/data/site";
import { MotionSection } from "./MotionSection";

export function Contact() {
  return (
    <MotionSection id="contact" className="section-shell pb-24 pt-20">
      <div className="glass rounded-2xl p-8 text-center sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-100/80">Contact</p>
        <h2 className="mx-auto mt-4 max-w-3xl text-balance text-3xl font-bold leading-tight text-white sm:text-5xl">
          AIを、現場で使える改善策に変えるご相談を承ります。
        </h2>
        <div className="mt-8 flex justify-center">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex flex-col items-center justify-center gap-1 rounded-2xl bg-white px-7 py-4 text-sm font-bold text-navy transition hover:-translate-y-0.5 hover:bg-cyan-50 sm:flex-row sm:gap-3 sm:rounded-full"
          >
            <span className="inline-flex items-center gap-2">
              <Mail size={18} />
              問い合わせる
            </span>
            <span className="font-medium text-slate-600">{profile.email}</span>
          </a>
        </div>
      </div>
    </MotionSection>
  );
}
