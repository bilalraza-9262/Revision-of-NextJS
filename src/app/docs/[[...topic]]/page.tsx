import React from 'react'

interface IParams {
	topic: string
};

export const generateStaticParams = async () => {
	return [{
		slug: ["1", "3", "3"]
	}]
}

const page = async ({ params }: { params: IParams }) => {

	const val = parseInt(params.topic);
	const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${val}`)
	// console.log(await res.json());
	const data = await res.json();

	// const { topic } = params;
	// console.log(topic);

	// if (topic?.length > 2) {
	// 	return <h1>Typescript and Function</h1>
	// }
	return (
		<div>
			<h1>{data.title}</h1>
		</div>
	)
}

export default page
