import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


export default function ShowPost() {
	const [posts, setPosts] = useState();

	useEffect(() => {
		axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then((res) => {
				setPosts(res.data)
			})
	}, []);

	const { id } = useParams()

	return <>
		<div className='w-full h-full flex justify-center items-center   '>
			{posts && (
				<>
					<div className='w-[500px] h-[500px] flex border border-black mt-16'>
						<div className='w-5/12 flex flex-col space-y-4'>
							<h2 className='text-black font-semibold font-Inter'>Id</h2>
							<h2 className='text-black font-semibold font-Inter'>Title</h2>
						</div>
						<div className='w-5/12 flex flex-col space-y-4     '>
							<h2 className='text-black font-semibold font-Inter text-2xl border-b border-black'>{posts.id}</h2>
							<h2 className='text-black font-semibold font-Inter text-2xl border-b border-black'>{posts.title}</h2>
							<h2 className='text-black font-semibold font-Inter text-2xl border-b border-black'>{posts.body}</h2>
						</div>
					</div>
				</>
			)}

		</div>
	</>
}