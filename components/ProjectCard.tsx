"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ExternalLink } from "lucide-react";
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

  if (project.media.type === "lpGenerator") {
    return <LpGeneratorPreview href={project.media.src} title={project.media.title} />;
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

function LpGeneratorPreview({ href, title }: { href: string; title: string }) {
  const steps = [
    { label: "Step 1：商品情報の入力", active: true },
    { label: "Step 2：テキスト一括生成", active: false },
    { label: "Step 3：画像生成", active: false },
    { label: "Step 4：LP HTML生成", active: false },
  ];

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white text-slate-900 shadow-lift">
      <div className="grid min-h-[620px] lg:grid-cols-[310px_1fr]">
        <aside className="border-b border-slate-200 bg-slate-100 px-6 py-7 lg:border-b-0 lg:border-r lg:px-8">
          <div className="mb-14 flex items-center justify-end text-slate-500">
            <ChevronLeft size={20} />
          </div>
          <h4 className="text-2xl font-black tracking-tight text-slate-950">進行状況</h4>
          <div className="mt-6 grid gap-5">
            {steps.map((step) => (
              <div key={step.label} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                <span
                  className={`size-4 rounded-[4px] ${
                    step.active
                      ? "bg-gradient-to-br from-sky-400 to-blue-600"
                      : "bg-gradient-to-br from-purple-100 to-purple-300"
                  }`}
                />
                <span>{step.label}</span>
              </div>
            ))}
          </div>
        </aside>

        <div className="relative px-6 py-8 sm:px-10 lg:px-16">
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="absolute right-5 top-5 inline-flex items-center gap-2 rounded-sm bg-slate-950 px-4 py-2 text-xs font-bold text-amber-200 transition hover:bg-slate-800"
          >
            別タブで開く
            <ExternalLink size={14} />
          </a>

          <div className="pt-16">
            <h4 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              LP × AIコピー生成ツール
            </h4>
            <p className="mt-5 text-sm leading-7 text-slate-700 sm:text-base">
              商品情報を入力するだけで、キャッチコピー・LP・画像を自動生成します。
            </p>

            <div className="my-10 h-px bg-slate-200" />

            <h5 className="text-3xl font-black tracking-tight text-slate-950">
              Step 1 <span className="text-slate-400">|</span> 商品情報の入力
            </h5>

            <form className="mt-6 max-w-2xl rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <label className="block text-sm font-medium text-slate-700">
                商品名 *
                <input
                  readOnly
                  aria-label={`${title} 商品名`}
                  placeholder="例：バターサンドクッキー"
                  className="mt-2 w-full rounded-md border-0 bg-slate-100 px-4 py-3 text-slate-500 outline-none"
                />
              </label>
              <label className="mt-5 block text-sm font-medium text-slate-700">
                特徴
                <textarea
                  readOnly
                  aria-label={`${title} 特徴`}
                  placeholder="例：国産バター使用、外はサクサク・中はもちもち"
                  className="mt-2 min-h-28 w-full resize-none rounded-md border-0 bg-slate-100 px-4 py-3 text-slate-500 outline-none"
                />
              </label>
              <label className="mt-5 block text-sm font-medium text-slate-700">
                ターゲット
                <input
                  readOnly
                  aria-label={`${title} ターゲット`}
                  placeholder="例：30〜40代女性、カフェ好き"
                  className="mt-2 w-full rounded-md border-0 bg-slate-100 px-4 py-3 text-slate-500 outline-none"
                />
              </label>
              <label className="mt-5 block text-sm font-medium text-slate-700">
                価格
                <input
                  readOnly
                  aria-label={`${title} 価格`}
                  placeholder="例：280円"
                  className="mt-2 w-full rounded-md border-0 bg-slate-100 px-4 py-3 text-slate-500 outline-none"
                />
              </label>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex rounded-lg bg-rose-500 px-5 py-3 text-sm font-black text-white shadow-sm transition hover:bg-rose-600"
              >
                Step 2へ：テキストを生成する
              </a>
            </form>
          </div>
        </div>
      </div>
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
