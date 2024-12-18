import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext.jsx';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    
    const {toggle,sidebarToggle} = useContext(AppContext);

  return (
    <>
        
        {/*  Sidebar  */}
        <ul className={`navbar-nav bg-gradient-primary sidebar side-ani sidebar-dark accordion ${toggle && 'toggled'}`} id="accordionSidebar">

            {/*  Sidebar - Brand  */}
            <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </Link>

            {/*  Divider  */}
            <hr className="sidebar-divider my-0"/>

            {/*  Nav Item - Dashboard  */}
            <li className="nav-item active">
                <Link className="nav-link" to="/dashboard">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></Link>
            </li>

            {/*  Divider  */}
            <hr className="sidebar-divider"/>

            {/*  Heading  */}
            <div className="sidebar-heading">
                Interface
            </div>

            {/*  Nav Item - Pages Collapse Menu  */}
            <li className="nav-item">
                <Link className="nav-link collapsed" to="#" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fas fa-fw fa-cog"></i>
                    <span>Maintenance</span>
                </Link>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <Link className="collapse-item" to="/current-payroll">Current Payroll</Link>
                        <Link className="collapse-item" to="/company">Company</Link>
                        <Link className="collapse-item" to="/branch">Branch</Link>
                    </div>
                </div>
            </li>

            {/*  Divider  */}
            <hr className="sidebar-divider d-none d-md-block"/>

            {/*  Sidebar Toggler (Sidebar)  */}
            <div className="text-center d-none d-md-inline">
                <button className="rounded-circle border-0" id="sidebarToggle" onClick={sidebarToggle}></button>
            </div>

        </ul>
        {/*  End of Sidebar  */}
    </>
  )
}

export default Sidebar
