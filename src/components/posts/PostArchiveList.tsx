// web/src/components/posts/PostArchiveList.tsx
import Link from "next/link";
import type { PostSummary } from "@/types/post";

type Props = {
  posts: PostSummary[];
};

export default function PostArchiveList({ posts }: Props) {
  return (
    <div className="mt-6 space-y-4">
      {posts.map((post) => (
        <Link
          key={post.id}
          href={`/blog/${post.slug}`}
          className="block rounded-[24px] border border-zinc-200 bg-zinc-50 p-5 transition hover:bg-zinc-100"
        >
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-base font-semibold text-zinc-900">
              {post.title}
            </h3>
            <span className="rounded-full border border-zinc-300 bg-white px-3 py-1 text-[11px] text-zinc-600">
              Archive
            </span>
          </div>

          <p className="mt-3 text-sm leading-7 text-zinc-600">
            {post.excerpt}
          </p>
        </Link>
      ))}
    </div>
  );
}