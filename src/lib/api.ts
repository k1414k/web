// web/src/lib/api.ts
import axios from "axios";
import { cache } from "react";
import type { PostDetail, PostSummary } from "@/types/post";

export type ApiResult<T> =
  | { ok: true; data: T }
  | { ok: false; reason: "NOT_FOUND" | "UNAVAILABLE" };

function resolveBaseURL() {
  const isServer = typeof window === "undefined";

  if (isServer) {
    return (
      process.env.INTERNAL_API_BASE_URL ||
      process.env.NEXT_PUBLIC_API_BASE_URL ||
      "http://localhost:3000"
    );
  }

  return process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";
}

function createApiClient() {
  return axios.create({
    baseURL: resolveBaseURL(),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    withCredentials: true,
    timeout: 8000,
  });
}

export const getPosts = cache(async (): Promise<PostSummary[]> => {
  try {
    const api = createApiClient();
    const res = await api.get<{ posts: PostSummary[] }>("/web/v1/posts");
    return res.data.posts;
  } catch (error) {
    console.error("[getPosts] failed:", error);
    return [];
  }
});

export const getPost = cache(
  async (slug: string): Promise<ApiResult<PostDetail>> => {
    try {
      const api = createApiClient();
      const res = await api.get<{ post: PostDetail }>(`/web/v1/posts/${slug}`);

      return {
        ok: true,
        data: res.data.post,
      };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 404) {
          return {
            ok: false,
            reason: "NOT_FOUND",
          };
        }
      }

      console.error(`[getPost] failed for slug="${slug}":`, error);

      return {
        ok: false,
        reason: "UNAVAILABLE",
      };
    }
  }
);

export default createApiClient;