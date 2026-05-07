"use client";

import Image from "next/image";
import { ArrowDown, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { profile } from "@/data/site";

export function Hero() {
  return (
    <section id="hero" className="section-shell flex min-h-screen items-center pb-20 pt-28">
      <div className="grid w-full items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-6 inline-flex rounded-full border border-cyan-100/20 bg-cyan-100/10 px-4 py-2 text-sm text-cyan-50">
            {profile.subCatchphrase}
          </div>
          <h1 className="text-balance text-4xl font-black leading-[1.08] text-white sm:text-6xl lg:text-7xl">
            {profile.catchphrase}
          </h1>
          <p className="mt-6 text-xl font-semibold text-slate-100">
            {profile.name} <span className="text-slate-300">/ {profile.nameJa}</span>
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200/86 sm:text-lg">
            岐阜県でベーカリーを経営しながら、AIを活用した業務改善ツールや売上分析システムを開発。
            現場理解をベースに、実務で使えるAI活用を得意としています。
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-navy transition hover:-translate-y-0.5 hover:bg-cyan-50"
            >
              実績を見る
              <ArrowDown size={18} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/18 bg-white/8 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/14"
            >
              <Mail size={18} />
              相談する
            </a>
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-[520px]"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-cyan-200/16 blur-3xl" />
          <div className="glass relative overflow-hidden rounded-[1.6rem] p-3 shadow-glow">
            <Image
              src="/assets/portfolio_profile.png"
              alt="Ayumu Otaのプロフィール写真"
              width={1200}
              height={1200}
              priority
              className="aspect-[4/5] rounded-[1.15rem] object-cover object-center"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
