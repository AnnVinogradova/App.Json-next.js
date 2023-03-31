import { useState } from "react"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export default function AddUser() {

	const [name, setName] = useState('');
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [address, setAddress] = useState('');
	const [phone, setPhone] = useState('');
	const [website, setWebsite] = useState('');
	const [company, setCompany] = useState('');

	const navigate = useNavigate()

	const data = {
		name: name,
		username: username,
		email: email,
		address: address.city,
		phone: phone,
		website: website,
		company: company.name
	}
	function Submit(evt) {
		evt.preventDefault();
		axios.post('https://jsonplaceholder.typicode.com/users', data)
			.then(
				navigate('/')
			)
	}
	return <>
		<div className="container">
			<div className="w-75 mx-auto shadow p-5">
				<h2 className="text-center mb-4">Add User</h2>
				<form>
					<div className="form-group">
						<input type="text"
							className="form-control form-control-lg"
							placeholder="Enter Your Name"
							value={name}
							onChange={(evt) => setName(evt.target.value)}
						>
						</input>
					</div>
					<div className="form-group">
						<input type="text"
							className="form-control form-control-lg"
							placeholder="Enter Your User Name"
							value={username}
							onChange={(evt) => setUsername(evt.target.value)}
						>
						</input>
					</div>
					<div className="form-group">
						<input type="email"
							className="form-control form-control-lg"
							placeholder="Enter Your Email"
							value={email}
							onChange={(evt) => setEmail(evt.target.value)}
						>
						</input>
					</div>
					<div className="form-group">
						<input type="text"
							className="form-control form-control-lg"
							placeholder="Enter Your City"
							value={address}
							onChange={(evt) => setAddress(evt.target.value)}
						>
						</input>
					</div>
					<div className="form-group">
						<input type="phone"
							className="form-control form-control-lg"
							placeholder="Enter Your Phone"
							value={phone}
							onChange={(evt) => setPhone(evt.target.value)}
						>
						</input>
					</div>
					<div className="form-group">
						<input type="text"
							className="form-control form-control-lg"
							placeholder="Enter Your Website"
							value={website}
							onChange={(evt) => setWebsite(evt.target.value)}
						>
						</input>
					</div>
					<div className="form-group">
						<input type="text"
							className="form-control form-control-lg"
							placeholder="Enter Your Company"
							value={company}
							onChange={(evt) => setCompany(evt.target.value)}
						>
						</input>
					</div>
					<button onClick={Submit} className="btn btn-primary btn-block">Add User</button>
				</form>
			</div>
		</div>
	</>
}