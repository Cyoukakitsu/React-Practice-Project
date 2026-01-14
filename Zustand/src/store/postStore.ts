import { create } from "zustand";

//数据类型
export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

//Store 类型
type PostsStore = {
  post: Post[];
  loading: boolean;
  error: string | null;
  fetchPosts: () => Promise<void>;
};

export const usePostsStore = create((set) => ({
  post: [],
  loading: false,
  error: null,
  fetchPosts: async () => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }
      const data = await response.json();
      set({ post: data, loading: false });
    } catch (error) {
      set({ error: "Failed to fetch posts", loading: false });
    }
  },
}));
