import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ postId: string }>;
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { params } = props;
  const { postId } = await params;
  console.log("Post ID:", postId);

  return {
    title: `Title ( Post ID: ${postId} )`,
    description: `Description for post ID  : ${postId}`,
    openGraph: {
      title: `OG Title ( Post ID: ${postId} )`,
      description: `OG Description for post ID  : ${postId}`,
      url: `https://example.com/posts/${postId}`,
      images: [
        {
          url: `/api/og?title=Post%20${postId}`,
          width: 1200,
          height: 630,
          alt: `OG Image for post ID : ${postId}`,
          type: "image/png",
        },
      ],
    },
  };
}

async function PostIemPage(props: PageProps) {
  const { params } = props;
  const { postId } = await params;

  return <div className="box page">{`PostItemPage ${postId}`}</div>;
}

export default PostIemPage;
