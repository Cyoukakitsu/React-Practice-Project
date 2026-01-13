import { create } from "zustand";

export const useCounterStore = create((set) => ({
  post: [],
  loading: false,
  error: null,
  fetchPosts: async () => {
    set({ loading: true, error: null });
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );
      const data = await response.json();
      set({ post: data, loading: false });
    } catch (error) {
      set({ error: "Failed to fetch posts", loading: false });
    }
  },
}));
