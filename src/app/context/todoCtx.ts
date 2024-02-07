"use client"
import { createContext } from "react";

export const todoCtx = createContext({
	todo: "",
	setTodo: (val: string) => { }
}
);
