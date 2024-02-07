import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
	title:{
		absolute:"Dashboard"
	}
}

const layout = ({ children, notification, user }: {
	children: React.ReactNode,
	notification: React.ReactNode,
	user: React.ReactNode
}) => {

	return (
		<div>
			<h1>{children}</h1>
			<h2>{notification}</h2>
			<h3>{user}</h3>
		</div>
	)
}

export default layout
