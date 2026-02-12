interface PostLayoutProps {
  children: React.ReactNode;
}
export default function PostLayout(props: Readonly<PostLayoutProps>) {
  const { children } = props;
  return <section className="post-layout">{children}</section>;
}
