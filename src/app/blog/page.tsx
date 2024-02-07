"use client"
import Link from 'next/link'
import React from 'react'
import Button from '@/components/Button';
// import { useRouter } from 'next/navigation';
const page = () => {
	// const {push} = useRouter();
	return (
		<div>
			<h1>
				All Blogs
			</h1>
			<Button text="Submit"/>
	
			<Link href={"/blog/blog1"}>Blog1</Link>
			<Link href={"/dashboard"}>Dashboard</Link>
			{/* <button onClick={() => push("/")}>Submit</button> */}
		</div>
	)
}

export default page
