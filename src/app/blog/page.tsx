// web/src/app/blog/page.tsx
import Link from "next/link";
import { getPosts } from "@/lib/api";
import PostCard from "@/components/posts/PostCard";

export const metadata = {
  title: "Blog | Jongin",
  description: "過去の制作や設計判断、振り返りをまとめた記事一覧。",
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="min-h-screen bg-[#f5f5f3] text-zinc-900">
      <main className="mx-auto max-w-[1400px] px-4 py-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          <section className="rounded-[28px] border border-zinc-200 bg-white p-5 shadow-sm sm:p-8">
            <Link
              href="/"
              className="text-sm font-medium text-zinc-500 transition hover:text-zinc-900"
            >
              ← Home
            </Link>

            <p className="mt-6 text-xs uppercase tracking-[0.2em] text-zinc-500">
              Archive
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
              Blog
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-8 text-zinc-600 sm:text-base">
              昔のプロジェクトの振り返り、設計判断、制作記録を記事として整理しています。
            </p>
          </section>

          <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </section>
        </div>
      </main>
    </div>
  );
}