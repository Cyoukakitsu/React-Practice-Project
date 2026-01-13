import { useEffect } from "react";

import { useCounterStore } from "../store/postStore";

function Posts() {
  const { post, loading, error, fetchPosts } = useCounterStore();
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  if (loading) return <p>Loading....</p>;
  if (error) return <p>{error}</p>;
  return (
    <ul>
      {post.map((p) => (
        <li key={p.id}>{p.title}</li>
      ))}
    </ul>
  );
}

export default Posts;
