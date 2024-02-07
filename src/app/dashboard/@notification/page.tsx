import Link from 'next/link'
import React from 'react'

const page = () => {
	return (
		<div>
			Notification Page
			<Link href={"/blog"}>Blog</Link>
			<Link href={"/dashboard/auth"} className='m-3'>Auth</Link>

		</div>
	)
}

export default page
