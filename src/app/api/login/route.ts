// import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";
import * as jose from "jose";

const users = [
	{
		name: "bilal",
		email: "bilal@gmail.com",
		password: "bilal123"
	},
	{
		name: "hammad",
		email: "hammad@gmail.com",
		password: "hammad123"
	},
	{
		name: "ahsan",
		email: "ahsan@gamil.com",
		password: "ahsan123"
	}
]

export const POST = async (req: NextRequest) => {
	const body = await req.json();
	const userLoggedIn = users.find(user => user.email === body.email && user.password === body.password)
	// console.log(body);

	const alg = "HS256";
	const secret = new TextEncoder().encode(process.env.SECRET_KEY);


	if (userLoggedIn) {
		const jwt = await new jose.SignJWT({ email: body.email })
			.setProtectedHeader({ alg })
			.setIssuedAt()
			.setExpirationTime("2h")
			.sign(secret)

		console.log(secret);
		console.log(jwt);

		const response = NextResponse.json(body);
		response.cookies.set("user", jwt)
		return response
	} else {
		return NextResponse.json("Email is not correct", {
			status: 400
		})
	}

}