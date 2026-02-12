interface TemplateProps {
  children: React.ReactNode;
}

function Template(props: TemplateProps) {
  const { children } = props;   
    return <div className="template">{children}</div>;
}
export default Template;    