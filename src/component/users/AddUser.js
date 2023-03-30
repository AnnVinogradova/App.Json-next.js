
export default function addUser() {
	return <>
		<div className="container">
			<div className="w-75 mx-auto shadow p-5">
				<h2 className="text-center mb-4">Add User</h2>
				<form onSubmit={evt => onsubmit(evt)}>
					<div className="form-group">
						<input type="text"
							className="form-control form-control-lg"
							placeholder="Enter Your Name"
							name="name"
							value={name}
							onChange={evt => onInputChange(evt)}>
						</input>
					</div>
					<div className="form-group">
						<input type="text"
							className="form-control form-control-lg"
							placeholder="Enter Your User Name"
							name="username"
							value={username}
							onChange={evt => onInputChange(evt)}>
						</input>
					</div>
					<div className="form-group">
						<input type="email"
							className="form-control form-control-lg"
							placeholder="Enter Your Email"
							name="email"
							value={email}
							onChange={evt => onInputChange(evt)}>
						</input>
					</div>
					<div className="form-group">
						<input type="text"
							className="form-control form-control-lg"
							placeholder="Enter Your City"
							name="city"
							value={address?.city}
							onChange={evt => onInputChange(evt)}>
						</input>
					</div>
					<div className="form-group">
						<input type="text"
							className="form-control form-control-lg"
							placeholder="Enter Your Phone"
							name="phone"
							value={phone}
							onChange={evt => onInputChange(evt)}>
						</input>
					</div>
					<div className="form-group">
						<input type="text"
							className="form-control form-control-lg"
							placeholder="Enter Your Website"
							name="website"
							value={website}
							onChange={evt => onInputChange(evt)}>
						</input>
					</div>
					<div className="form-group">
						<input type="text"
							className="form-control form-control-lg"
							placeholder="Enter Your Company}"
							name="company"
							value={company?.name}
							onChange={evt => onInputChange(evt)}>
						</input>
					</div>
					<button className="btn btn-primary btn-block">Add User</button>
				</form>
			</div>
		</div>
	</>
}