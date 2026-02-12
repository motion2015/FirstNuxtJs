import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
export function middleware(request: NextRequest) {
  const response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });
  response.headers.set("X-hello-from-middleware", "my-middleware");
  return response;
}

// export const config = {
//   matcher: "/about/:path*",
// };
