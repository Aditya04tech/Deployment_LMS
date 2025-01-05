import React from 'react'
import { Link } from 'react-router-dom'

const StudentDeleteAccount = () => {
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
                  <a className="list-group-item" href="instructor-earning.html"><i className="bi bi-graph-up fa-fw me-2" />Earnings</a>
                  <a className="list-group-item" href="instructor-studentlist.html"><i className="bi bi-people fa-fw me-2" />Students</a>
                  <a className="list-group-item" href="instructor-order.html"><i className="bi bi-folder-check fa-fw me-2" />Orders</a>
                  <a className="list-group-item" href="instructor-review.html"><i className="bi bi-star fa-fw me-2" />Reviews</a>
                  <Link className="list-group-item" to="/studenteditprofile"><i className="bi bi-pencil-square fa-fw me-2" />Edit Profile</Link>
                  {/* <Link className="list-group-item" to="/payout"><i className="bi bi-wallet2 fa-fw me-2" />Payouts</Link> */}
                  <Link className="list-group-item" to="/studentsetting"><i className="bi bi-gear fa-fw me-2" />Settings</Link>
                  <Link className="list-group-item active" to="/studentdeleteaccount"><i className="bi bi-trash fa-fw me-2" />Delete Profile</Link>
                  <Link className="list-group-item text-danger bg-danger-soft-hover" to="/signout"><i className="fas fa-sign-out-alt fa-fw me-2" />Sign Out</Link>
                </div>
              </div>
            </div>
          </div>
          {/* Responsive offcanvas body END */}
        </div>
        {/* Left sidebar END */}
        {/* Main content START */}
        <div className="col-xl-9">
          {/* Title and select START */}
          <div className="card border bg-transparent rounded-3 mb-0">
            {/* Card header */}
            <div className="card-header bg-transparent border-bottom">
              <h3 className="card-header-title mb-0">Deactivate Account</h3>
            </div>
            {/* Card body */}
            <div className="card-body">
              <h6>Before you go...</h6>
              <ul>
                <li>Take a backup of your data <a href="#">Here</a> </li>
                <li>If you delete your account, you will lose your all data.</li>
              </ul>
              <div className="form-check form-check-md my-4">
                <input className="form-check-input" type="checkbox" defaultValue id="deleteaccountCheck" />
                <label className="form-check-label" htmlFor="deleteaccountCheck">Yes, I'd like to delete my account</label>
              </div>
              <a href="#" className="btn btn-success-soft mb-2 mb-sm-0">Keep my account</a>
              <a href="#" className="btn btn-danger mb-0">Delete my account</a>
            </div>
          </div>
          {/* Title and select END */}
        </div>
        {/* Main content END */}
      </div>
    </div>	
  </section>
  {/* =======================
Page content END */}
</div>

  )
}

export default StudentDeleteAccount
