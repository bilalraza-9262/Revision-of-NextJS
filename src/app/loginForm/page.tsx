"use client"

import { redirect } from 'next/dist/server/api-utils'
import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useRouter } from 'next/navigation'
interface Input {
	name: string,
	email: string,
	password: string
}
const page = () => {
	const router = useRouter()
	const [error, setError] = useState<string>()
	const { register, handleSubmit, formState: { errors }, } = useForm<Input>();
	const formSubmit: SubmitHandler<Input> = async (data) => {

		const res = await fetch("http://localhost:3000/api/login ", {
			method: "POST",
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json"
			}
		})
		// console.log(await res.json());
		// const getRes = await res.json();
		if (res.ok) {
			router.push("/")
		} else {
			setError("User not Fount")
		}
	}
	return (
		<div>
			<form className='flex flex-col gap-4 border justify-center items-center' onSubmit={handleSubmit(formSubmit)}>
				<input type="text" {...register("name", { required: true })} placeholder='Enter Your Name' />
				<input type="email" {...register("email", { required: "Email Address is required" })} placeholder='Enter Your Email' />
				{errors.email && <p role="alert">{errors.email.message}</p>}
				<input type="password" {...register("password", { required: true })} placeholder='Enter Your Password' />
				<button className='bg-blue-300 rounded-sm p-2' type='submit'>Submit</button>
			</form>
			{error && <p>{error}</p>}
		</div>
	)
}

export default page
