// web/src/components/posts/PostCard.tsx
import Link from "next/link";
import type { PostSummary } from "@/types/post";

type Props = {
  post: PostSummary;
};

export default function PostCard({ post }: Props) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="block overflow-hidden rounded-[28px] border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      {post.cover_image_url ? (
        <div
          className="h-52 w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${post.cover_image_url})` }}
        />
      ) : (
        <div className="h-52 w-full bg-zinc-100" />
      )}

      <div className="p-5 sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full border border-zinc-300 bg-white px-3 py-1 text-[11px] text-zinc-600">
            Archive
          </span>
          <span className="text-xs text-zinc-400">
            {new Date(post.published_at).toLocaleDateString("ja-JP")}
          </span>
        </div>

        <h3 className="mt-4 text-xl font-semibold tracking-tight text-zinc-900">
          {post.title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-zinc-600">
          {post.excerpt}
        </p>
      </div>
    </Link>
  );
}