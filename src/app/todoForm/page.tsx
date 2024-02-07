"use client"
import React, { FormEvent, useRef } from 'react'
import { useContext } from 'react'
import { todoCtx } from '../context/todoCtx'

const page = () => {
	const ref = useRef() as any
	const { todo, setTodo } = useContext(todoCtx);
	const addTodo = (e: FormEvent) => {
		e.preventDefault();
		// console.log(ref.current.value);
		setTodo(ref.current.value)
	}
	return (
		<div>
			<form className='flex flex-col justify-center items-center gap-4' onSubmit={addTodo}>
				<input type="text" ref={ref} />
				<button className='bg-blue-400 rounded-sm p-2' type='submit'>Add Todo</button>
			</form>
			{todo && <h1>{todo}</h1>}
		</div>
	)
}

export default page
