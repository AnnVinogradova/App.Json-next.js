import { Link } from 'react-router-dom'

export default function Navbar() {
	return <>
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
			<div className="container">
				<span className="navbar-brand">JsonUsers</span>
				<li className="nav-item">
					<Link to='add-user'className='btn btn-outline-light w-26' aria-current='page'>Add Users</Link>
				</li>
			</div>
		</nav>
	</>
}