// web/src/app/blog/[slug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, getPosts } from "@/lib/api";
import PostArchiveList from "@/components/posts/PostArchiveList";
import PostBody from "@/components/posts/PostBody";
import PostHero from "@/components/posts/PostHero";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return {
      title: "Post | Jongin Blog",
    };
  }

  return {
    title: `${post.title} | Jongin Blog`,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;

  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const posts = await getPosts();
  const otherPosts = posts.filter((item) => item.slug !== slug);

  return (
    <div className="min-h-screen bg-[#f5f5f3] text-zinc-900">
      <main className="mx-auto max-w-[1600px] px-4 py-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_320px]">
          <section className="space-y-4">
            <div className="rounded-[28px] border border-zinc-200 bg-white p-4 shadow-sm">
              <Link
                href="/"
                className="text-sm font-medium text-zinc-500 transition hover:text-zinc-900"
              >
                ← Home
              </Link>
            </div>

            <PostHero
              title={post.title}
              excerpt={post.excerpt}
              coverImageUrl={post.cover_image_url}
            />

            <PostBody content={post.content} />
          </section>

          <aside className="rounded-[28px] border border-zinc-200 bg-white p-5 shadow-sm lg:sticky lg:top-4 lg:h-[calc(100vh-2rem)] lg:overflow-auto">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                Archive
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                他の記事
              </h2>
            </div>

            <PostArchiveList posts={otherPosts} />
          </aside>
        </div>
      </main>
    </div>
  );
}