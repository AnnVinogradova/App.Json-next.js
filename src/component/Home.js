import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function Home() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/users')
			.then((res) => {
				setUsers(res.data)
			})
	}, []);

	// const loadUser = async () => {
	// 	const result = await axios.get('https://jsonplaceholder.typicode.com/users');
	// 	setUsers(result.data)
	// }

	// const deleteUser = async id =>{
	// 	await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
	// 	loadUser();
	// }	
	return <>
		<div>
			<h1 className='flex justify-center items-center'>Home Page</h1>
			<table className="table">
				<thead>
					<tr className='bg-dark text-white'>
						<th scope="col">#</th>
						<th scope="col">Name</th>
						<th scope="col">User name</th>
						<th scope="col">Email</th>
						<th scope="col">City</th>
						<th scope="col">Phone</th>
						<th scope="col">Website</th>
						<th scope="col">Company</th>
						<th scope="col">Action</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user, id) => (
						<tr key={id + 1}>
							<th scope='row'>{id + 1}</th>
							<td>{user.name}</td>
							<td>{user.username}</td>
							<td>{user.email}</td>
							<td>{user.address?.city}</td>
							<td>{user.phone}</td>
							<td>{user.website}</td>
							<td>{user.company?.name}</td>
							<td>
								<Link to={`/users/${user.id}`} className='btn btn-dark m-2'>View</Link>
								<button className='btn btn-primary m-2'>Edit</button>
								<button className='btn btn-danger m-2'>Delete</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	</>
}