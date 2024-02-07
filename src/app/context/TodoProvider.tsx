"use client"
import { todoCtx } from "./todoCtx";
import { useState } from "react";

export const TodoProvider = ({ children }: {
	children: React.ReactNode
}) => {
	const [todo, setTodo] = useState("");

	return (
		<todoCtx.Provider value={{ todo, setTodo }}>
			{children}
		</todoCtx.Provider>
	)
}