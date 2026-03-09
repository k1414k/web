URL: https://jongin.blog

```markdown
# web

jongin.blog のメインサイト（ポートフォリオ・ブログ）です。

## 概要

このプロジェクトは、自分の開発内容を外部に伝えるための公開サイトです。

- プロフィール・プロジェクト紹介
- ブログ記事一覧・詳細
- 技術スタック・GitHub リンク

## 設計

### 役割
- プロフィール・プロジェクト紹介
- ブログ記事一覧・詳細
- 技術スタック・GitHub リンク

### 技術構成
- **Next.js 16**（App Router）
- **React 19**
- **Tailwind CSS 4**
- **Server Components** で記事取得

### API 連携
- `getPosts()`, `getPost(slug)` で Rails `/web/v1/posts` を呼び出し
- 認証不要の公開 API

## 技術スタック

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4

## セットアップ

```bash
npm install
npm run dev
