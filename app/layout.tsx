import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
  weight: ["400", "500", "700", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ayumu Ota | AI活用コンサルタント Portfolio",
  description:
    "岐阜県でベーカリーを経営するAyumu OtaのAI活用ポートフォリオ。現場経験をもとに、業務改善・売上分析・RAGチャットボットを開発します。",
  metadataBase: new URL("https://ayumu-ota-ai-portfolio.vercel.app"),
  openGraph: {
    title: "Ayumu Ota | 現場経験を、AIの力で価値に変える。",
    description:
      "ベーカリー経営 × AI活用。現場を理解した実務改善ツールとAIコンサルティングのポートフォリオです。",
    images: ["/assets/portfolio_profile.png"],
    locale: "ja_JP",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={`${notoSansJp.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
