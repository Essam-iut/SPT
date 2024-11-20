import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export asfunction middleware(request) {
    
    if (!(await isAuthenticated())) {
  return NextResponse.redirect(new URL('/home', request.url))
    }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/about/:path*',
}