"use client";

import Link from "next/dist/client/link";
import { useEffect, useState } from "react";
interface RootLayoutProps {
  children: React.ReactNode;
}
export default function RootLayout({ children }: RootLayoutProps) {
  const [status, setStatus] = useState("mounting...");

  useEffect(() => {
    setTimeout(() => {
      setStatus("mounted!");
    }, 1000);
  }, []);
  return (
    <div className="box layout">
      <h4>{`FeedLayout - ${status}`}</h4>
      <div style={{ padding: 8 }}>{children}</div>
    </div>
  );
}
