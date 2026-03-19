import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest): NextResponse {
  const start = Date.now();

  console.log(`[${request.method}] ${request.nextUrl.pathname}`);

  const response = NextResponse.next();
  response.headers.set("x-request-time", String(Date.now() - start));

  return response;
}

export const config = {
  matcher: ["/api/:path*", "/poll/:path*"],
};
