"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/data/site";

type ProjectCardProps = {
  project: Project;
  index: number;
};

function ProjectMedia({ project }: { project: Project }) {
  if (project.media.type === "image") {
    return (
      <Image
        src={project.media.src}
        alt={project.media.alt}
        width={1600}
        height={900}
        className="aspect-video w-full rounded-xl object-cover"
      />
    );
  }

  if (project.media.type === "video") {
    return (
      <video
        controls
        playsInline
        preload="metadata"
        className="aspect-video w-full rounded-xl bg-black object-cover"
        aria-label={project.media.label}
      >
        <source src={project.media.src} type="video/mp4" />
      </video>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-white">
      <div className="flex flex-col gap-3 border-b border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-semibold">{project.media.title}</p>
        <a
          href={project.media.src}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-bold text-sky-700 transition hover:text-sky-900"
        >
          外部で開く
          <ExternalLink size={16} />
        </a>
      </div>
      <iframe
        title={project.media.title}
        src={project.media.src}
        loading="lazy"
        className="h-[520px] w-full border-0 bg-white md:h-[640px]"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      className="glass overflow-hidden rounded-2xl"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay: Math.min(index * 0.08, 0.18), ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
    >
      <div className="px-5 pb-4 pt-6 sm:px-7 sm:pt-7">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-100/78">
          {project.eyebrow}
        </p>
        <div className="mt-3 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h3 className="text-2xl font-bold leading-tight text-white md:text-3xl">{project.title}</h3>
            <p className="mt-4 leading-7 text-slate-200/84">{project.summary}</p>
          </div>
          {project.link ? (
            <a
              href={project.link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-cyan-100/30 bg-cyan-100/10 px-5 py-3 text-sm font-bold text-cyan-50 transition hover:bg-cyan-100/18"
            >
              {project.link.label}
              <ExternalLink size={17} />
            </a>
          ) : null}
        </div>
      </div>
      <div className="px-4 pb-4 sm:px-5">
        <ProjectMedia project={project} />
      </div>
      <div className="px-5 pb-7 pt-2 sm:px-7">
        <div className="mt-7 grid gap-3 md:grid-cols-2">
          {project.sections.map((section) => (
            <div key={section.label} className="rounded-xl border border-white/10 bg-white/[0.055] p-4">
              <h4 className="text-sm font-bold text-cyan-100">■ {section.label}</h4>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-200/82">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
