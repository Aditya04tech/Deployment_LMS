import React from 'react'
import { NavLink } from 'react-router-dom'
import AdminSideNavbar from './AdminSideNavbar'
import AdminTopNavBar from './AdminTopNavBar'
const AdminError404 = () => {
  return (
    <>
{/* **************** MAIN CONTENT START **************** */}
<main>
  {/* Sidebar START */}
  
<AdminSideNavbar/>
 
  {/* Page content START */}
  <div className="page-content">
 
    <AdminTopNavBar/>
      

    {/* Top bar END */}
    {/* Page main content START */}
    <div className="page-content-wrapper border">
      {/* Main card START */}
      <div className="row">
        <div className="col-12 text-center">
          {/* Image */}
          <img src="assets/images/element/error404-01.svg" className="h-200px h-md-400px mb-4" alt />
          {/* Title */}
          <h1 className="display-1 text-danger mb-0">404</h1>
          {/* Subtitle */}
          <h2>Oh no, something went wrong!</h2>
          {/* info */}
          <p className="mb-4">Either something went wrong or this page doesn't exist anymore.</p>
          {/* Button */}
          <a href="admin-dashboard.html" className="btn btn-primary mb-0">Go to Dashboard</a>
        </div>
      </div>
      {/* Main card END */}
    </div>
    {/* Page main content END */}
  </div>
  {/* Page content END */}
</main>
{/* **************** MAIN CONTENT END **************** */}

    </>
  )
}

export default AdminError404