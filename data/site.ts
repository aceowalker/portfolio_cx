import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  BarChart3,
  Bot,
  BrainCircuit,
  ExternalLink,
  LineChart,
  Mail,
  Sparkles,
  Store,
} from "lucide-react";

export type Project = {
  title: string;
  eyebrow: string;
  summary: string;
  media:
    | {
        type: "image";
        src: string;
        alt: string;
      }
    | {
        type: "video";
        src: string;
        label: string;
      }
    | {
        type: "iframe";
        src: string;
        title: string;
      }
    | {
        type: "lpGenerator";
        src: string;
        title: string;
      };
  link?: {
    href: string;
    label: string;
  };
  sections: {
    label: string;
    items: string[];
  }[];
};

export type ValuePoint = {
  icon: LucideIcon;
  title: string;
  body: string;
};

export const profile = {
  name: "Ayumu Ota",
  nameJa: "太田 歩",
  email: "ace.o.walker@gmail.com",
  catchphrase: "現場経験を、AIの力で価値に変える。",
  subCatchphrase: "ベーカリー経営 × AI活用",
};

export const navItems = [
  { href: "#about", label: "About" },
  { href: "#badge", label: "Badge" },
  { href: "#portfolio", label: "Works" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export const valuePoints: ValuePoint[] = [
  {
    icon: Store,
    title: "現場での意思決定を理解",
    body: "岐阜県でベーカリーを経営し、接客、製造、商品管理、売上判断まで日々の実務に向き合っています。",
  },
  {
    icon: BrainCircuit,
    title: "AIを業務改善へ接続",
    body: "AIを流行の技術としてではなく、問い合わせ対応、分析、改善提案など、実務の負担を減らす仕組みとして設計します。",
  },
  {
    icon: LineChart,
    title: "売上と運用に効く設計",
    body: "現場で使い続けられるUI、非エンジニアでも扱える導線、判断に使える出力品質を重視しています。",
  },
];

export const projects: Project[] = [
  {
    eyebrow: "RAG Chatbot",
    title: "ベーカリー向けAI問い合わせチャットボット",
    summary:
      "ベーカリー情報を学習し、顧客からの問い合わせへ自動応答するRAG型チャットボット。営業時間外の質問にも、店舗ナレッジに基づいて回答します。",
    media: {
      type: "image",
      src: "/assets/bakery_chatbot_screen.jpg",
      alt: "ベーカリー向けRAGチャットボットの画面",
    },
    link: {
      href: "https://www.bakerydemain.com/",
      label: "サイトを見る",
    },
    sections: [
      { label: "概要", items: ["店舗情報をもとに顧客対応を自動化するAIチャットボット。"] },
      {
        label: "課題",
        items: ["問い合わせ対応負荷", "営業時間外対応不可", "情報共有の属人化"],
      },
      {
        label: "解決",
        items: ["AIによる自動応答", "ナレッジ参照型回答", "FAQ自動化"],
      },
      {
        label: "主な機能",
        items: ["店舗情報に基づく回答", "自然文での質問受付", "問い合わせ導線の簡略化"],
      },
      {
        label: "技術スタック",
        items: ["Python", "Streamlit", "OpenAI API", "RAG構成"],
      },
      {
        label: "工夫した点",
        items: ["回答精度を保つナレッジ設計", "顧客が迷わない入力体験", "店舗運用に合わせた情報粒度"],
      },
      {
        label: "成果・効果",
        items: ["問い合わせ対応の省力化", "営業時間外の情報提供", "接客品質の標準化"],
      },
    ],
  },
  {
    eyebrow: "AI Consulting Tool",
    title: "パン屋の売上分析を自動化するAIコンサルティングツール",
    summary:
      "売上データ、商品のABC分析、客層データ、専門家ナレッジを組み合わせ、その店舗だけの経営戦略を提案するRAG型AIコンサルティングWebアプリです。",
    media: {
      type: "video",
      src: "/assets/bakery_rag_video.mp4",
      label: "ベーカリーAIコンサルティングツールのデモ動画",
    },
    sections: [
      {
        label: "概要",
        items: [
          "ベーカリーの売上向上を目的に、店舗ごとのデータを読み解いて改善アドバイスを返すWebアプリ。",
          "売上データ、商品のABC分析、客層データをもとに、ユーザーの相談内容へ店舗特化の回答を生成。",
          "専門家のアドバイス、成功店舗事例、繁盛店アイデアをまとめた資料をRAGで参照し、実務に落とし込める経営戦略を提案します。",
        ],
      },
      {
        label: "課題",
        items: [
          "売上分析が感覚に頼りやすい",
          "商品ごとの強み・弱みが把握しづらい",
          "客層に合わせた商品改善や販促判断が難しい",
          "成功事例や専門家ノウハウを自店舗にどう活かすか判断しづらい",
        ],
      },
      {
        label: "解決",
        items: [
          "CSVアップロードだけで売上データを分析",
          "商品のABC分析を自動化",
          "客層データを踏まえた改善方針を生成",
          "専門家ナレッジを参照し、店舗限定の経営アドバイスとして回答",
        ],
      },
      {
        label: "主な機能",
        items: [
          "売上データ読み込み",
          "商品別売上分析",
          "商品のABC分析",
          "客層データ分析",
          "専門家ナレッジ参照型RAG回答",
          "経営相談チャット機能",
        ],
      },
      {
        label: "技術スタック",
        items: ["Python", "Streamlit", "OpenAI API", "RAG", "CSV Analysis", "Prompt Engineering"],
      },
      {
        label: "工夫した点",
        items: [
          "店舗ごとの売上・商品・客層を前提にした回答設計",
          "専門家資料をそのまま返すのではなく、自店舗向けの戦略へ変換",
          "非エンジニアでも使える入力導線",
          "ナレッジ流出防止を意識した設計",
        ],
      },
      {
        label: "成果・効果",
        items: [
          "分析時間削減",
          "商品改善・販促判断の高速化",
          "専門家視点を取り入れたデータ経営の実現",
          "その店舗限定の経営戦略立案を支援",
        ],
      },
    ],
  },
  {
    eyebrow: "AI LP Generator",
    title: "AI搭載 LP自動生成ツール",
    summary:
      "商品情報を入力するだけで、コピーライティング、画像生成、LP構成生成までを自動化するAIツールです。",
    media: {
      type: "lpGenerator",
      src: "https://lp-generator-rkatetxhs6qghvbffmqfgn.streamlit.app/",
      title: "AI搭載 LP自動生成ツール",
    },
    link: {
      href: "https://lp-generator-rkatetxhs6qghvbffmqfgn.streamlit.app/",
      label: "デモを開く",
    },
    sections: [
      {
        label: "概要",
        items: ["商品情報からLPの訴求、構成、クリエイティブの方向性を自動生成。"],
      },
      {
        label: "課題",
        items: ["LP制作の初速が遅い", "コピー設計に時間がかかる", "訴求軸の整理が属人化しやすい"],
      },
      {
        label: "解決",
        items: ["入力情報から訴求を整理", "AIでコピー案を生成", "LP構成のたたき台を即時作成"],
      },
      {
        label: "主な機能",
        items: ["商品情報入力", "コピーライティング生成", "画像生成", "LP構成生成"],
      },
      {
        label: "技術スタック",
        items: ["Python", "Streamlit", "OpenAI API", "Prompt Engineering"],
      },
      {
        label: "工夫した点",
        items: ["入力負荷の少ない設計", "マーケティング視点の出力構成", "短時間で検証できるUX"],
      },
      {
        label: "成果・効果",
        items: ["制作前の構成検討を短縮", "仮説検証の高速化", "小規模事業者の発信力向上"],
      },
    ],
  },
];

export const skills = [
  "Python",
  "Streamlit",
  "OpenAI API",
  "RAG",
  "Prompt Engineering",
  "AI Consulting",
  "UI/UX Design",
  "Business Analysis",
  "Bakery Management",
];

export const metrics = [
  { icon: Bot, label: "AI Automation", value: "RAG / Chatbot" },
  { icon: BarChart3, label: "Business Insight", value: "Sales Analysis" },
  { icon: BadgeCheck, label: "Certification", value: "DMM AI CAMP" },
  { icon: Sparkles, label: "Consulting", value: "Field-first AI" },
  { icon: Mail, label: "Contact", value: profile.email },
  { icon: ExternalLink, label: "Works", value: "Deployed Apps" },
];
