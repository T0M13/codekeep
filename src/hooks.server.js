import { getUserFromToken } from '$lib/server/auth.js';

export async function handle({ event, resolve }) {
  const token = event.cookies.get('token');
  if (token) {
    const user = getUserFromToken(token);
    if (user) {
      event.locals.user = user;
    } else {
      event.cookies.delete('token', { path: '/' });
    }
  }

  const response = await resolve(event);

  // Security headers — lock this app down
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), usb=()');
  response.headers.set('X-XSS-Protection', '1; mode=block');

  // CSP: block all outbound connections from the page itself.
  // Playground iframes use blob: URLs with sandbox="allow-scripts" (no allow-same-origin),
  // so they cannot access cookies, localStorage, or make credentialed requests.
  // The inner CSP on JS iframes further restricts to script-src 'unsafe-inline' only.
  response.headers.set('Content-Security-Policy', [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline'",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src 'self' https://fonts.gstatic.com",
    "img-src 'self' data: blob:",
    "connect-src 'self'",
    "frame-src blob:",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
  ].join('; '));

  return response;
}
