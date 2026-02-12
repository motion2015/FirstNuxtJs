"use client";
import { useEffect, useState } from "react";

interface FeedTemplateProps {
  children: React.ReactNode;
}

function FeedTemplate({ children }: FeedTemplateProps) {
  const [status, setState] = useState("mounting.....");

  useEffect(() => {
    setTimeout(() => {
      setState("mounted!!!");
    }, 1000);
  }, []);

  return (
    <div className="box template">
      <h1>Feed Template - {status}</h1>
      <div style={{ padding: 8 }}>{children}</div>
    </div>
  );
}
export default FeedTemplate;
