import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { MotionSection } from "./MotionSection";
import { SectionHeading } from "./SectionHeading";

const badgeUrl =
  "https://www.openbadge-global.com/ns/portal/openbadge/public/assertions/unAcquired/anMvM3NKUnBWTkl3NmttWWdNdkcvdz09";

export function OpenBadge() {
  return (
    <MotionSection id="badge" className="section-shell py-24">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHeading
          eyebrow="Certification"
          title="取得資格・認定"
          body="生成AIエンジニアとしての学習と実装経験を、現場改善の成果物へ接続しています。"
        />
        <a
          href={badgeUrl}
          target="_blank"
          rel="noreferrer"
          className="glass group grid gap-7 rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/12 sm:grid-cols-[220px_1fr] sm:items-center"
        >
          <div className="rounded-2xl bg-white p-5 shadow-lift">
            <Image
              src="/assets/openbadge.jpg"
              alt="DMM 生成AI CAMP 生成AIエンジニア スキル習得認定バッジ"
              width={420}
              height={420}
              className="mx-auto aspect-square w-full object-contain"
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-100/80">
              Open Badge
            </p>
            <h3 className="mt-3 text-2xl font-bold text-white">DMM 生成AI CAMP 生成AIエンジニア</h3>
            <p className="mt-4 leading-7 text-slate-200/82">
              AI活用の基礎から実装までを学び、業務改善ツール開発へ応用。認定情報はバッジ画像から確認できます。
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-cyan-100">
              認定ページを開く
              <ExternalLink size={17} className="transition group-hover:translate-x-0.5" />
            </span>
          </div>
        </a>
      </div>
    </MotionSection>
  );
}
