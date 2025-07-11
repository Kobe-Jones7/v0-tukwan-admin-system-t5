import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher(["/", "/sign-in(.*)", "/sign-up(.*)"]);

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
		// If not signed in AND not already on sign-in page, redirect to sign-in
		if (!userId && !url.pathname.startsWith("/sign-in")) {
			const rewrittenUrl = url.clone();
			rewrittenUrl.pathname = "/sign-in";
			return NextResponse.rewrite(rewrittenUrl);
		}
	}

	if (!isPublicRoute(req)) await auth.protect();
});

export const config = {
	matcher: [
		// Skip Next.js internals and all static files, unless found in search params
		"/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
		// Always run for API routes
		"/(api|trpc)(.*)",
	],
};
