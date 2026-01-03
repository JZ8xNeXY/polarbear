# folder-structure.md - 構造ルール

## フォルダ構成

```
/
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── layout.tsx    # ルートレイアウト
│   │   ├── page.tsx      # トップページ
│   │   └── globals.css   # グローバルスタイル
│   ├── components/       # 再利用可能なコンポーネント
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── ...
│   ├── lib/              # ユーティリティ関数
│   └── types/            # TypeScript型定義
├── public/               # 静的ファイル
│   └── images/
├── docs/                 # ドキュメント（mdファイル）
│   ├── Agent.md
│   ├── requirements.md
│   └── ...
└── [設定ファイル]
```

## 命名規則

- **ファイル**: `kebab-case` (例: `polar-bear-info.tsx`)
- **コンポーネント**: `PascalCase` (例: `Header.tsx`)
- **関数・変数**: `camelCase` (例: `getBearData`)
- **定数**: `UPPER_SNAKE_CASE` (例: `MAX_POPULATION`)

## 増やしていいもの

- `src/components/` 配下のコンポーネント
- `src/lib/` 配下のユーティリティ
- `public/images/` 配下の画像

## 増やしてはいけないもの

- ルート直下の設定ファイル（勝手に追加禁止）
- `node_modules/` の手動編集
- `.next/` ディレクトリ（自動生成）

## 特別ルール

- `docs/` ディレクトリは人間が管理（AIは参照のみ）
- `src/` 配下はAIが編集可能
- 設定ファイルの変更は事前確認

