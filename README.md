# ホッキョクグマ保護サイト

ホッキョクグマの環境保護と生態系の維持を支援するWEBサイトです。

## 技術スタック

- **フレームワーク**: Next.js 14 (App Router)
- **言語**: TypeScript
- **UIライブラリ**: Material-UI (MUI)
- **デプロイ**: Vercel

## セットアップ

### 必要な環境

- Node.js 18以上
- npm

### インストール

```bash
npm install
```

### 開発サーバー起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

## ビルド

```bash
npm run build
```

## デプロイ

### Vercelへのデプロイ

1. GitHubにリポジトリをプッシュ
2. [Vercel](https://vercel.com)にログイン
3. 「New Project」をクリック
4. GitHubリポジトリを選択
5. 設定を確認（Next.jsは自動検出されます）
6. 「Deploy」をクリック

### 環境変数

必要に応じて、Vercelのダッシュボードで環境変数を設定してください。

## プロジェクト構造

```
/
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── layout.tsx    # ルートレイアウト
│   │   ├── page.tsx      # トップページ
│   │   ├── theme.ts      # MUIテーマ設定
│   │   └── globals.css   # グローバルスタイル
│   ├── components/       # 再利用可能なコンポーネント
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── lib/              # ユーティリティ関数
│   └── types/            # TypeScript型定義
├── public/               # 静的ファイル
└── docs/                 # ドキュメント（mdファイル）
```

詳細は `folder-structure.md` を参照してください。

## ドキュメント

- `Agent.md` - AIの行動規範
- `requirements.md` - 要件定義
- `data-model.md` - データモデル
- `folder-structure.md` - 構造ルール
- `progress.md` - 進捗管理
- `decisions.md` - 技術選定・判断理由
- `constraints.md` - 制約まとめ

## ライセンス

このプロジェクトは環境保護を目的とした非営利プロジェクトです。

