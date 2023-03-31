import { NavLink } from 'react-router-dom'

export default function Navbar() {
	return <>
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
			<div className="container">
				<span className="navbar-brand">JsonUsers</span>
				<button className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<NavLink className="nav-link" aria-current='page' to="/">Home</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" aria-current='page' to="/about">About</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" aria-current='page' to="/contact">Contact</NavLink>
						</li>
					</ul>
				</div>
				<li className="nav-item">
					<NavLink className='btn btn-outline-light w-26' aria-current='page' to="/user/add">Add Users</NavLink>
				</li>
			</div>
		</nav>
	</>
}