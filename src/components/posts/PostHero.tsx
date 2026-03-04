// web/src/components/posts/PostHero.tsx
type Props = {
  title: string;
  excerpt: string;
  coverImageUrl?: string | null;
};

export default function PostHero({ title, excerpt, coverImageUrl }: Props) {
  return (
    <section className="overflow-hidden rounded-[28px] border border-zinc-200 bg-white shadow-sm">
      {coverImageUrl ? (
        <div
          className="h-[260px] w-full bg-cover bg-center sm:h-[360px]"
          style={{ backgroundImage: `url(${coverImageUrl})` }}
        />
      ) : null}

      <div className="p-5 sm:p-8">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
          Archive
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-8 text-zinc-600 sm:text-base">
          {excerpt}
        </p>
      </div>
    </section>
  );
}