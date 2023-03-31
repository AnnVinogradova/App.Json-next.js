import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import Navbar from './component/Navbar'
import AddUser from './component/users/AddUser'
import EditUser from './component/users/EditUser'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


export default function App() {
	return <>
		<Router>
			<div className='app'>
				<Navbar />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/about' component={About} />
					<Route exact path='/contact' component={Contact} />
					<Route exact path='/user/add' component={AddUser} />
					<Route exact path='/user/edit' component={EditUser} />
				</Switch>
			</div>
		</Router>
	</>

}


