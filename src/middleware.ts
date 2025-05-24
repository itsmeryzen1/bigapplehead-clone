import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Middleware function to protect admin routes
export function middleware(request: NextRequest) {
  // Check if the request is for an admin route
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // We don't block the route completely, we just let the client-side handle the authentication
    // This is because we're using a simple password protection approach
    // For a more secure application, we would implement proper session-based authentication
    return NextResponse.next();
  }

  // For API routes that need protection
  if (request.nextUrl.pathname.startsWith('/api/contact/list')) {
    const authHeader = request.headers.get('Authorization');

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return new NextResponse(
        JSON.stringify({ error: 'Unauthorized' }),
        { status: 401, headers: { 'content-type': 'application/json' } }
      );
    }
  }

  // Allow the request to continue
  return NextResponse.next();
}
