// web/src/types/post.ts
export type PostSummary = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  cover_image_url: string | null;
  published_at: string;
};

export type PostDetail = PostSummary & {
  content: string;
};