import React from 'react'
import { Link } from 'react-router-dom'

const StudentSetting = () => {
  return (
<div>
  {/* =======================
Page Banner START */}
  <section className="pt-0">
    {/* Main banner background image */}
    <div className="container-fluid px-0">
      <div className="bg-blue h-100px h-md-200px rounded-0" style={{background: 'url(assets/images/pattern/04.png) no-repeat center center', backgroundSize: 'cover'}}>
      </div>
    </div>
    <div className="container mt-n4">
      <div className="row">
        {/* Profile banner START */}
        <div className="col-12">
          <div className="card bg-transparent card-body p-0">
            <div className="row d-flex justify-content-between">
              {/* Avatar */}
              <div className="col-auto mt-4 mt-md-0">
                <div className="avatar avatar-xxl mt-n3">
                  <img className="avatar-img rounded-circle border border-white border-3 shadow" src="assets/images/avatar/01.jpg" alt />
                </div>
              </div>
              {/* Profile info */}
              <div className="col d-md-flex justify-content-between align-items-center mt-4">
                <div>
                  <h1 className="my-1 fs-4">Lori Stevens <i className="bi bi-patch-check-fill text-info small" /></h1>
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item h6 fw-light me-3 mb-1 mb-sm-0"><i className="fas fa-star text-warning me-2" />4.5/5.0</li>
                    <li className="list-inline-item h6 fw-light me-3 mb-1 mb-sm-0"><i className="fas fa-user-graduate text-orange me-2" />12k Enrolled Students</li>
                    <li className="list-inline-item h6 fw-light me-3 mb-1 mb-sm-0"><i className="fas fa-book text-purple me-2" />25 Courses</li>
                  </ul>
                </div>
                {/* Button */}
                <div className="d-flex align-items-center mt-2 mt-md-0">
                  <a href="/instructorcreatecourses" className="btn btn-success mb-0">Create a course</a>
                </div>
              </div>
            </div>
          </div>
          {/* Profile banner END */}
          {/* Advanced filter responsive toggler START */}
          {/* Divider */}
          <hr className="d-xl-none" />
          <div className="col-12 col-xl-3 d-flex justify-content-between align-items-center">
            <a className="h6 mb-0 fw-bold d-xl-none" href="#">Menu</a>
            <button className="btn btn-primary d-xl-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSidebar" aria-controls="offcanvasSidebar">
              <i className="fas fa-sliders-h" />
            </button>
          </div>
          {/* Advanced filter responsive toggler END */}
        </div>
      </div>
    </div>
  </section>
  {/* =======================
Page Banner END */}
  {/* =======================
Page content START */}
  <section className="pt-0">
    <div className="container">
      <div className="row">
        {/* Left sidebar START */}
        <div className="col-xl-3">
          {/* Responsive offcanvas body START */}
          <div className="offcanvas-xl offcanvas-end" tabIndex={-1} id="offcanvasSidebar">
            {/* Offcanvas header */}
            <div className="offcanvas-header bg-light">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">My profile</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasSidebar" aria-label="Close" />
            </div>
            {/* Offcanvas body */}
            <div className="offcanvas-body p-3 p-xl-0">
              <div className="bg-dark border rounded-3 pb-0 p-3 w-100">
                {/* Dashboard menu */}
                <div className="list-group list-group-dark list-group-borderless">
                <Link className="list-group-item" to="/studentdashboard"><i className="bi bi-ui-checks-grid fa-fw me-2" />Dashboard</Link>
                <Link className="list-group-item" to="/studentlist"><i className="bi bi-basket fa-fw me-2" />My Courses</Link>
                <Link className="list-group-item" to="/studentquiz"><i className="bi bi-question-diamond fa-fw me-2" />Quiz</Link>
                  <Link className="list-group-item" href="instructor-earning.html"><i className="bi bi-graph-up fa-fw me-2" />Earnings</Link>
                  <Link className="list-group-item" href="instructor-studentlist.html"><i className="bi bi-people fa-fw me-2" />Students</Link>
                  <Link className="list-group-item" href="instructor-order.html"><i className="bi bi-folder-check fa-fw me-2" />Orders</Link>
                  <Link className="list-group-item" href="instructor-review.html"><i className="bi bi-star fa-fw me-2" />Reviews</Link>
                  <Link className="list-group-item " to="/studenteditprofile"><i className="bi bi-pencil-square fa-fw me-2" />Edit Profile</Link>
                  {/* <Link className="list-group-item" to="/payout"><i className="bi bi-wallet2 fa-fw me-2" />Payouts</Link> */}
                  <Link className="list-group-item active " to="/studentsetting"><i className="bi bi-gear fa-fw me-2" />Settings</Link>
                  <Link className="list-group-item" to="/studentdeleteaccount"><i className="bi bi-trash fa-fw me-2" />Delete Profile</Link>
                  <Link className="list-group-item text-danger bg-danger-soft-hover" to="/signout"><i className="fas fa-sign-out-alt fa-fw me-2" />Sign out</Link>
                </div>
              </div>
            </div>
          </div>
          {/* Responsive offcanvas body END */}
        </div>
        {/* Left sidebar END */}
        {/* Main content START */}
        <div className="col-xl-9">
          {/* Privacy START */}
          <div className="border rounded-3">
            <div className="row">
              <div className="col-12">
                {/* Card START */}
                <div className="card bg-transparent">
                  {/* Card header START */}
                  <div className="card-header bg-transparent border-bottom">
                    <h3 className="card-header-title">Settings</h3>
                  </div>
                  {/* Card header END */}
                  {/* Card body START */}
                  <div className="card-body">
                    {/* Profile START */}
                    <h5 className="mb-4">Profile Settings</h5>
                    <div className="form-check form-switch form-check-md">
                      <input className="form-check-input" type="checkbox" role="switch" id="profilePublic" defaultChecked />
                      <label className="form-check-label" htmlFor="profilePublic">Your profile's public visibility</label>
                    </div>
                    {/* Profile START */}
                    <hr />{/* Divider */}
                    {/* Notification START */}
                    <h5 className="card-header-title">Notifications Settings</h5>
                    <p className="mb-2 mt-3">Choose type of notifications you want to receive</p>
                    <div className="form-check form-switch form-check-md mb-3">
                      <input className="form-check-input" type="checkbox" id="checkPrivacy1" defaultChecked />
                      <label className="form-check-label" htmlFor="checkPrivacy1">Notify me via email when logging in</label>
                    </div>
                    <div className="form-check form-switch form-check-md mb-3">
                      <input className="form-check-input" type="checkbox" id="checkPrivacy2" />
                      <label className="form-check-label" htmlFor="checkPrivacy2">Send SMS confirmation for all online payments</label>
                    </div>
                    <div className="form-check form-switch form-check-md mb-3">
                      <input className="form-check-input" type="checkbox" id="checkPrivacy3" defaultChecked />
                      <label className="form-check-label" htmlFor="checkPrivacy3">Check which device(s) access your account</label>
                    </div>
                    <div className="form-check form-switch form-check-md mb-3">
                      <input className="form-check-input" type="checkbox" id="checkPrivacy4" />
                      <label className="form-check-label" htmlFor="checkPrivacy4">Show your profile publicly</label>
                    </div>
                    {/* Notification START */}
                    {/* Buttons */}
                    <div className="d-sm-flex justify-content-end">
                      <button type="button" className="btn btn-sm btn-primary me-2 mb-0">Save changes</button>
                      <a href="#" className="btn btn-sm btn-outline-secondary mb-0">Cancel</a>
                    </div>
                  </div>
                  {/* Card body END */}
                </div>
                {/* Card END */}
              </div> 	
              {/* Privacy END */}
            </div>
          </div>
          {/* Main content END */}
        </div>{/* Row END */}
      </div>
    </div>	
  </section>
  {/* =======================
Page content END */}
</div>

  )
}

export default StudentSetting

