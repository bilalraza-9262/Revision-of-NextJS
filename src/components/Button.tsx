import React from 'react'

const Button = (props: any) => {
	console.log(props);
	
	return (

		<button className='bg-red-300 m-4'>{props.text}</button>
	)
}

export default Button
