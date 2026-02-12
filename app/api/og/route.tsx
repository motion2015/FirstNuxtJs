import { NextRequest, NextResponse } from "next/server";
import { ImageResponse } from "next/og";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = request.nextUrl.searchParams.get("title") || "Default Title";

  if (!title) {
    return NextResponse.json(
      { message: "Title does not specified" },
      { status: 400 },
    );
  }

  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        flexWrap: "nowrap",
      }}
    >
      <h1
        style={{
          fontSize: 60,
          fontStyle: "normal",
          color: "black",
          margin: "0 30px",
          lineHeight: 1.2,
          textAlign: "center",
        }}
      >
        {title}
      </h1>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  );
}
