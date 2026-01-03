# constraints.md - 制約まとめ

## 使わない技術

- **クラスコンポーネント**: 関数コンポーネントのみ使用
- **Tailwind CSS**: MUIを使用するため不要
- **jQuery**: モダンなReact/Next.jsで不要
- **Redux**: 初期段階では不要（必要になったら検討）

## 変更禁止事項

- **mdファイル**: 人間が管理するため、AIは変更しない
- **package.jsonの主要依存関係**: 変更時はdecisions.mdに記録
- **フォルダ構造**: folder-structure.mdに従う

## パフォーマンス制約

- 初期ロード時間: 3秒以内を目標
- 画像最適化: next/imageを使用
- コード分割: Next.jsの自動分割に任せる

## セキュリティ制約

- 環境変数: `.env.local`で管理（gitignoreに追加）
- 外部API: 必要に応じてCORS対策
- ユーザー入力: XSS対策（Reactの自動エスケープを活用）

## ブラウザ対応

- モダンブラウザ（Chrome, Firefox, Safari, Edgeの最新2バージョン）
- IE11は非対応

