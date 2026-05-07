# Ayumu Ota AI Portfolio

AI活用フリーランス向けのポートフォリオサイトです。  
コンセプトは「現場経験 × AI活用」。ベーカリー経営の実務経験をもとに、AIによる業務改善・売上改善ツールを開発できる人材として伝わる構成にしています。

## 技術構成

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- lucide-react
- next/font（Noto Sans JP / Inter）

## ディレクトリ構成

```txt
.
├── app
│   ├── globals.css
│   ├── icon.svg
│   ├── layout.tsx
│   └── page.tsx
├── components
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── MotionSection.tsx
│   ├── OpenBadge.tsx
│   ├── Portfolio.tsx
│   ├── ProjectCard.tsx
│   └── Skills.tsx
├── data
│   └── site.ts
├── public
│   └── assets
│       ├── bakery_chatbot_screen.jpg
│       ├── bakery_rag_video.mp4
│       ├── openbadge.jpg
│       └── portfolio_profile.png
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

## セットアップ

```bash
npm install
npm run dev
```

ブラウザで `http://localhost:3000` を開きます。

## npm install 一覧

通常は `npm install` だけで `package.json` の依存関係が入ります。個別に入れる場合は以下です。

```bash
npm install next react react-dom framer-motion lucide-react
npm install -D typescript @types/node @types/react @types/react-dom tailwindcss postcss autoprefixer eslint eslint-config-next
```

## 画像・動画の配置場所

使用素材は `public/assets` に配置しています。

- 顔写真: `public/assets/portfolio_profile.png`
- Open Badge画像: `public/assets/openbadge.jpg`
- コンサルアプリ動画: `public/assets/bakery_rag_video.mp4`
- RAGチャットボット画像: `public/assets/bakery_chatbot_screen.jpg`

Next.jsでは `public` 配下のファイルを `/assets/ファイル名` で参照します。

## Vercelデプロイ

1. GitHubなどにこのフォルダをpush
2. Vercelで新規プロジェクトを作成
3. Framework Presetは `Next.js`
4. Build Commandは `npm run build`
5. Output Directoryは未指定
6. Deploy

## .env

このサイトは静的なポートフォリオ表示のため、`.env` は不要です。
