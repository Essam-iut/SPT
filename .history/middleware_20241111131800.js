import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  if (!(await isAuthenticated())) {
    return NextResponse.redirect(new URL("/api/auth/login?post_login_redirect_url=/dashboard", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
    import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";

  matcher: "/dashboard/:path*",
};
