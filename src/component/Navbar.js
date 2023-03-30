
export default function Navbar(){
    return<>
       <nav className="navbar navbar-expand-lg navbar-dark bg-primary container">
          <a className="navbar-brand" href="/">JsonUsers</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/">About</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/">Contact</a>
              </li>
            </ul>
          </div>
      </nav>
    </>
}