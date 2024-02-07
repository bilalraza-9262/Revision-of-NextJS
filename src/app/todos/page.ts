// "use c"
import Link from 'next/link';
import React from 'react'


const page = async () => {

	const res = await fetch(`https://jsonplaceholder.typicode.com/todos/`)
	// console.log(await res.json());
	const data = await res.json();

	// console.log( res);
	return "Todos Page"
	// return (
	// 	<div>
	// 		{data.map((val: any) => (
	// 			<Link href={`/docs/${val.id}`} key={val.id}>
	// 				<h1>TODO : {val.id}</h1>
	// 			</Link>
	// 		))}
	// 	</div>
	// )
}

export default page
