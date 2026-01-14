import { useEffect } from "react";

import { usePostsStore } from "../store/postStore";

function Posts() {
  const { post, loading, error, fetchPosts } = usePostsStore((state: any) => ({
    post: state.post,
    loading: state.loading,
    error: state.error,
    fetchPosts: state.fetchPosts,
  }));

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  if (loading) return <p>Loading....</p>;
  if (error) return <p>{error}</p>;
  return (
    <ul>
      {post.map((p: any) => (
        <li key={p.id}>{p.title}</li>
      ))}
    </ul>
  );
}

export default Posts;
