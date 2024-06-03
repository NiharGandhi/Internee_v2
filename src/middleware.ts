import {
    clerkMiddleware,
    createRouteMatcher
} from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher([
    '/admin(.*)',
    '/dashboard(.*)',
    '/events(.*)',
    '/internships(.*)',
    '/myProfile(.*)',
    'organizations(.*)',
    '/resources(.*)',
    '/users(.*)',
]);

export default clerkMiddleware((auth, req) => {
    if (isProtectedRoute(req)) auth().protect();
});

export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};