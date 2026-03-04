// web/src/components/posts/PostBody.tsx
type Props = {
  content: string;
};

export default function PostBody({ content }: Props) {
  return (
    <article className="rounded-[28px] border border-zinc-200 bg-white p-5 shadow-sm sm:p-8">
      <div className="whitespace-pre-line text-[15px] leading-8 text-zinc-700">
        {content}
      </div>
    </article>
  );
}