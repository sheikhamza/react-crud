import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppProvider } from './context/AppContext.jsx'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Dashboard from './Components/dasboard/Dashboard.jsx'
import CurrentPayroll from './Components/current-payroll/CurrentPayroll.jsx'
import Company from './Components/company/Company.jsx'
import Branch from './Components/branch/Branch.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>} >
      <Route path='dashboard' element={<Dashboard/>} />
      <Route path='current-payroll' element={<CurrentPayroll/>} />
      <Route path='branch' element={<Branch/>} />
      <Route path='company' element={<Company/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <RouterProvider router={router}/>
      {/* <App /> */}
    </AppProvider>
  </StrictMode>
)
