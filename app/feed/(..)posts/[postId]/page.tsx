interface PageProps {
  params: Promise<{ postId: string }>;
}

async function PostItemPage(props: PageProps) {
  const { params } = props;
  const { postId } = await params;
  return <div className="box page">{`Intercepted PostItemPage ${postId}`}</div>;
}
export default PostItemPage;
