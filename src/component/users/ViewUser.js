import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

export default function ViewUser() {
	const [user, setUser] = useState();

	useEffect(() => {
		axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
			.then((res) => {
				setUser(res.data)
			})
	}, []);

	const { id } = useParams()


	return <>
		<div className='w-full h-full flex justify-center items-center   '>
			{user && (
				<>
					<div className='w-[500px] h-[500px] flex border border-black mt-16'>
						<div className='w-5/12 flex flex-col space-y-4'>
							<h2 className='text-black font-semibold font-Inter'>Name</h2>
							<h2 className='text-black font-semibold font-Inter'>Username</h2>
							<h2 className='text-black font-semibold font-Inter'>Email</h2>
							<h2 className='text-black font-semibold font-Inter'>Address</h2>
							<h2 className='text-black font-semibold font-Inter'>Phone</h2>
							<h2 className='text-black font-semibold font-Inter'>Website</h2>
							<h2 className='text-black font-semibold font-Inter'>Company</h2>
						</div>
						<div className='w-5/12 flex flex-col space-y-4     '>
							<h2 className='text-black font-semibold font-Inter text-2xl border-b border-black'>{user.name}</h2>
							<h2 className='text-black font-semibold font-Inter text-2xl border-b border-black'>{user.username}</h2>
							<h2 className='text-black font-semibold font-Inter text-2xl border-b border-black'>{user.email}</h2>
							<h2 className='text-black font-semibold font-Inter text-2xl border-b border-black'>{user.address.city}</h2>
							<h2 className='text-black font-semibold font-Inter text-2xl border-b border-black'>{user.phone}</h2>
							<h2 className='text-black font-semibold font-Inter text-2xl border-b border-black'>{user.website}</h2>
							<h2 className='text-black font-semibold font-Inter text-2xl border-b border-black'>{user.company.name}</h2>
						</div>
					</div>
					<Link to={`/users/${posts.id}`} className='btn btn-dark m-2'>Show Post</Link>
				</>
			)}

		</div>
	</>
}