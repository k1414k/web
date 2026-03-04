// web/src/lib/api.ts
import axios from "axios";
import type { PostDetail, PostSummary } from "@/types/post";

function resolveBaseURL() {
  const isServer = typeof window === "undefined";

  // ✅ Server Component / Route Handler など「サーバ側」で叩くURL
  // - Next が Docker 内: http://api:3000 (docker compose の service 名)
  // - Next がローカル:  http://localhost:3000
  const serverBase =
    process.env.INTERNAL_API_BASE_URL || process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";

  // ✅ Browser(クライアント) で叩くURL（公開URL or localhost）
  const clientBase =
    process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";

  return isServer ? serverBase : clientBase;
}

const api = axios.create({
  baseURL: resolveBaseURL(),
  headers: { "Content-Type": "application/json", Accept: "application/json" },
  withCredentials: true,
});

export async function getPosts(): Promise<PostSummary[]> {
  const res = await api.get<{ posts: PostSummary[] }>("/web/v1/posts");
  return res.data.posts;
}

export async function getPost(slug: string): Promise<PostDetail | null> {
  try {
    const res = await api.get<{ post: PostDetail }>(`/web/v1/posts/${slug}`);
    return res.data.post;
  } catch {
    return null;
  }
}

export default api;