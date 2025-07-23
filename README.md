# My Portfolio

これは、Next.js を使用して作成されたポートフォリオサイトです。

## 概要

このサイトは、私のスキルとこれまでに作成したプロジェクトを紹介するために作成されました。

## 主な機能

- **ホーム**: トップページ
- **自己紹介**: 私の経歴やスキルセットを掲載しています。
- **作品一覧**: これまでに開発したアプリケーションやツールの一覧です。
  - 日付計算ツール
  - 履歴表示ツール
  - 売上レポート
  - その他ポートフォリオ

## 使用技術

- **フレームワーク**: [Next.js](https://nextjs.org/)
- **言語**: [TypeScript](https://www.typescriptlang.org/)
- **UI ライブラリ**: [React](https://react.dev/)
- **スタイリング**:
  - [Sass (SCSS Modules)](https://sass-lang.com/)
  - [Tailwind CSS](https://tailwindcss.com/)
- **リンター**: [ESLint](https://eslint.org/)

## セットアップ手順

1.  **リポジトリをクローンします:**

    ```bash
    git clone https://github.com/<YOUR_USERNAME>/portfolio.git
    cd portfolio
    ```

2.  **依存関係をインストールします:**

    ```bash
    npm install
    ```

3.  **開発サーバーを起動します:**
    ```bash
    npm run dev
    ```
    ブラウザで `http://localhost:3000` を開いてください。

## ディレクトリ構成

```
.
├── public/ # 静的ファイル (画像、動画など)
├── src/
│   ├── app/ # Next.jsのApp Router
│   │   ├── component/ # 共通コンポーネント
│   │   ├── context/   # React Context
│   │   ├── home/      # ホームページ
│   │   └── ...        # 各ページのコンポーネント
│   └── ...
└── ...
```
