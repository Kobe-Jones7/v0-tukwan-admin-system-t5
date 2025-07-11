import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { routes } from "./routes";

const isPublicRoute = createRouteMatcher(["/", "/sign-in(.*)", "/sign-up(.*)"]);
const isPrivateRoute = createRouteMatcher(["/dashboard(.*)"]);

export default clerkMiddleware(async (auth, req: NextRequest) => {
	const url = req.nextUrl;
	const searchParams = url.searchParams.toString();
	const pathWithSearchParams = `${url.pathname}${
		searchParams.length > 0 ? `?${searchParams}` : ""
	}`;
	const hostname = req.headers.get("host") || "";

	// Check if subdomain is 'admin'
	const subdomain = hostname.split(".")[0];
	const isAdminSubdomain = subdomain === "admin";

	// Authenticated user ID
	const userId = (await auth()).userId;

	if (isAdminSubdomain) {
		// If not signed in, redirect to sign-in
		if (!userId) {
			const rewrittenUrl = url.clone();
			rewrittenUrl.pathname = "/sign-in";
			return NextResponse.rewrite(new URL(rewrittenUrl, req.url));
		}
	}

	// prevent dashboard access from site
	// NOTE: dashboard only accessible from admin subdomain
	if (!isAdminSubdomain && url.pathname.startsWith(routes.dashboard.index)) {
		// redirect to home
		return NextResponse.redirect(new URL(routes.home, req.url));
	}

	// prevent site pages from loading with admin subdomain
	if (isAdminSubdomain && !url.pathname.startsWith(routes.dashboard.index)) {
		// redirect to dashboard
		return NextResponse.redirect(new URL(routes.dashboard.index, req.url));
	}

	if (isPrivateRoute(req)) await auth.protect();
});

export const config = {
	matcher: [
		// Skip Next.js internals and all static files, unless found in search params
		"/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
		// Always run for API routes
		"/(api|trpc)(.*)",
	],
};
