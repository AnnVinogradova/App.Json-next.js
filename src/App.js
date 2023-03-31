import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Home from './component/Home'
import Navbar from './component/Navbar'
import AddUser from './component/users/AddUser'
import ViewUser from './component/users/ViewUser'
import ShowPost from './component/users/ShowPost'
import { Routes, Route } from 'react-router-dom'



export default function App() {
	return <>
		<div className='app'>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home/>} />
				<Route path='/users/:id' element={<ViewUser/>} />
				<Route path='/posts/:id' element={<ShowPost/>} />
				<Route path='/add-user' element={<AddUser/>} />
			</Routes>
		</div>
	</>

}


