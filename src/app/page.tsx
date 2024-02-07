"use client"
// import Image from "next/image";
// import { TodoProvider } from "./context/todoCtx";
import { useState } from "react";
export default function Home() {

  const [counter, setCount] = useState(0)
  // const AddItem = () => {
  //   setStudent((prev) => [...prev, "Bilal"])
  //   // console.log(students);
 
  // }
  const AddCount = () => {
    setCount((prev) => prev + 1)
    setCount((prev) => prev + 1)
    setCount((prev) => prev + 1)
  }
  return (
    
      <main className="">

        <h1 >{counter}</h1>

        <button onClick={AddCount}>Counter</button>
      </main>
 
  );
}
