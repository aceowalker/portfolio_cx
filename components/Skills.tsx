import { skills } from "@/data/site";
import { MotionSection } from "./MotionSection";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <MotionSection id="skills" className="section-shell py-24">
      <div className="glass rounded-2xl p-7 sm:p-10">
        <SectionHeading
          eyebrow="Skills"
          title="技術と事業理解を横断するスキル"
          body="AI実装だけでなく、現場業務、売上分析、ユーザー体験の設計まで一連で考えます。"
        />
        <div className="mt-10 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/12 bg-white/9 px-4 py-2 text-sm font-medium text-white shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}
