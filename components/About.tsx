import { valuePoints } from "@/data/site";
import { SectionHeading } from "./SectionHeading";
import { MotionSection } from "./MotionSection";

export function About() {
  return (
    <MotionSection id="about" className="section-shell py-24">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeading
          eyebrow="About"
          title="現場の課題を、使い続けられるAIへ。"
          body="AI導入で大切なのは、技術そのものよりも、誰が、いつ、どんな判断のために使うのかを理解すること。ベーカリー経営の経験をもとに、現場の手触りを失わない業務改善を設計します。"
        />
        <div className="grid gap-4">
          {valuePoints.map((point) => {
            const Icon = point.icon;
            return (
              <article key={point.title} className="glass rounded-2xl p-6">
                <div className="mb-5 inline-flex size-11 items-center justify-center rounded-2xl bg-cyan-100/12 text-cyan-100">
                  <Icon size={22} />
                </div>
                <h3 className="text-xl font-bold text-white">{point.title}</h3>
                <p className="mt-3 leading-7 text-slate-200/82">{point.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </MotionSection>
  );
}
