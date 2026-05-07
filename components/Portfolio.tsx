import { projects } from "@/data/site";
import { SectionHeading } from "./SectionHeading";
import { ProjectCard } from "./ProjectCard";

export function Portfolio() {
  return (
    <section id="portfolio" className="section-shell py-24">
      <SectionHeading
        eyebrow="Works"
        title="AIで現場改善につなげる制作実績"
        body="問い合わせ対応、売上分析、LP制作。小規模事業者が日々直面する課題を、AIで扱いやすい業務フローへ落とし込んでいます。"
        align="center"
      />
      <div className="mt-14 grid gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
