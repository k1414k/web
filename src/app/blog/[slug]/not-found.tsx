// web/src/app/blog/[slug]/not-found.tsx
import Link from "next/link";

export default function BlogPostNotFound() {
  return (
    <div className="min-h-screen bg-[#f5f5f3] px-4 py-10 text-zinc-900">
      <main className="mx-auto max-w-3xl rounded-[28px] border border-zinc-200 bg-white p-8 shadow-sm">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
          Not Found
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight">
          記事が見つかりません
        </h1>
        <p className="mt-4 text-sm leading-8 text-zinc-600">
          URL が間違っているか、記事がまだ公開されていません。
        </p>

        <div className="mt-6">
          <Link
            href="/blog"
            className="inline-flex h-11 items-center justify-center rounded-full bg-zinc-900 px-6 text-sm font-medium text-white transition hover:opacity-90"
          >
            Blog 一覧へ戻る
          </Link>
        </div>
      </main>
    </div>
  );
}