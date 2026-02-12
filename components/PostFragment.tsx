"use client";

import usePost from "@/lib/hooks/usePost";

interface PostFragmentProps {
  postId: string;
}

function PostFragment(props: PostFragmentProps) {
  const { postId } = props;
  console.log("postId:", postId);
  const { isLoading, post, error } = usePost(postId);
  console.log("PostFragment props:", props);
  console.log("PostFragment post:", post);

  if (isLoading || !post) {
    return <div>Loading post...</div>;
  }
  if (error) {
    return <div>Error loading post.</div>;
  }
  if (!post) {
    return <div>No post found.</div>;
  }
  return (
    <div className="post-fragment">
      <img src={post.image} alt="post image" width="256px" height="auto" />
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
}
export default PostFragment;
