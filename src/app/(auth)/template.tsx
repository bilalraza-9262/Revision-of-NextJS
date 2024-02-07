import Link from 'next/link'
import React from 'react'

const Navbar = [
	{
		name: "Login",
		href: "/login",
	},
	{
		name: "Register",
		href: "/register",
	}
]
const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<input type="text" name="" id="" />
			{
				Navbar.map((val) => (
					<Link className='m-3' href={val.href}>{val.name}</Link>
				))
			}
			{children}
		</div>
	)
}

export default layout
