// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Components
import Dashboard from './Components/dasboard/Dashboard'
import Sidebar from './Components/sidebar/Sidebar'
import Header from './Components/header/Header'

// Outlet
import { Outlet } from 'react-router-dom'


const App = () => {
  

  return (
    <>
    <div id="wrapper">
      <Sidebar/>
      {/* <Dashboard/> */}
      <div id="content-wrapper" class="d-flex flex-column">
        {/* Main Content */}
        <div id="content">
            <Header/>
            {/* <Dashboard/> */}
            <Outlet/>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
