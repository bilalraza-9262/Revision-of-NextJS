import { NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
	const logIn = false;
	// console.log(request.url);

	if (!logIn) {
		return NextResponse.redirect(new URL("/loginForm", request.url))
	}
	return NextResponse.redirect(new URL("/blog", request.url))
	// return NextResponse.redirect(new URL('/loginForm', request.url))
}
export const config = {
	matcher: ["/todos","/dashboard"]
}