// app/feed/page.tsx

// "use client";
// import { useState, useEffect } from "react";
// import Link from "next/link";

// function FeedPage() {
//   const [posts, setPosts] = useState<MyNextApp.Post[]>([]);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       const data = await fetch("/api/posts").then((res) => res.json());
//       setPosts(data);
//     };
//     fetchPosts();
//   }, []);

//   return (
//     <div className="box page">
//       <h4>Page</h4>
//       <ul style={{ listStylePosition: "inside" }}>
//         {posts.map((post, index) => {
//           const postId = index + 1;
//           return (
//             <li key={index}>
//               <Link href={`/posts/${postId}`}>{post.title}</Link>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }

import { Suspense } from "react";
import PostList from "@/components/PostList";
import { readPostsAction } from "@/lib/actions/posts";

function FeedPage() {
  const postsPromise = readPostsAction();

  return (
    <div className="box page">
      <h4>Page</h4>
      <Suspense fallback={<div>Loading posts...</div>}>
        <PostList postsPromise={postsPromise} />
      </Suspense>
    </div>
  );
}

export default FeedPage;
