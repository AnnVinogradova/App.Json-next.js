import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import Navbar from './component/Navbar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return<>
<Router>
<div className='App'>
    <Navbar/>
    <Home/>
    <About/>
    <Contact/> 
  </div>
</Router>
  </>
  
}

export default App;
