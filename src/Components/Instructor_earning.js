import React from 'react'
import IFooter from "./IFooter"
import Chart_Earning from './Chart_Earning'
import Chart_View from './Chart_View'
import { Link } from 'react-router-dom'

const Instructor_earning = () => {
  return (
    <div>
      
    <main>
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
                <Link to="/instructorcreatecourses" className="btn btn-success mb-0">Create a course</Link>
                </div>
              </div>
            </div>
          </div>
          {/* Profile banner END */}
          {/* Advanced filter responsive toggler START */}
          {/* Divider */}
          <hr className="d-xl-none" />
          <div className="col-12 col-xl-3 d-flex justify-content-between align-items-center">
            <Link className="h6 mb-0 fw-bold d-xl-none" href="#">Menu</Link>
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
                  <Link className="list-group-item " to="/instructordashboard"><i className="bi bi-ui-checks-grid fa-fw me-2" />Dashboard</Link>
                  <Link className="list-group-item" to="/instructorcourses"><i className="bi bi-basket fa-fw me-2" />My Courses</Link>
                  <Link className="list-group-item" to="/instructorquiz"><i className="bi bi-question-diamond fa-fw me-2" />Quiz</Link>
                  <Link className="list-group-item active" to="/instructorearning"><i className="bi bi-graph-up fa-fw me-2" />Earnings</Link>
                  <Link className="list-group-item" to="/instructorstudentlist"><i className="bi bi-people fa-fw me-2" />Students</Link>
                  <Link className="list-group-item" to="/instrctororder"><i className="bi bi-folder-check fa-fw me-2" />Orders</Link>
                  <Link className="list-group-item" to="/instructorreviews"><i className="bi bi-star fa-fw me-2" />Reviews</Link>
                  <Link className="list-group-item" to="/instructoreditprofile"><i className="bi bi-pencil-square fa-fw me-2" />Edit Profile</Link>
                  <Link className="list-group-item" to="/instructorpayout"><i className="bi bi-wallet2 fa-fw me-2" />Payouts</Link>
                  <Link className="list-group-item" to="/instructorsetting"><i className="bi bi-gear fa-fw me-2" />Settings</Link>
                  <Link className="list-group-item" to="/instructordelete"><i className="bi bi-trash fa-fw me-2" />Delete Profile</Link>
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
          {/* Earning boxes START */}
          <div className="row g-4">
            {/* Earning item */}
            <div className="col-sm-6 col-lg-4">
              <div className="text-center p-4 bg-light rounded-3">
                <h6 className="text-body">Sales this month</h6>
                <h2 className="mb-0 fs-1">$899.95</h2>
              </div>
            </div>
            {/* Earning item */}
            <div className="col-sm-6 col-lg-4">
              <div className="text-center p-4 bg-light rounded-3">
                <h6 className="text-body">To be paid
                  <a tabIndex={0} className="h6 mb-0" role="button" data-bs-toggle="popover" data-bs-trigger="focus" data-bs-placement="top" data-bs-content="After US royalty withholding tax">
                    <i className="bi bi-info-circle-fill small" />
                  </a>
                </h6>
                <h2 className="mb-0 fs-1">$750.35</h2>
              </div>
            </div>
            {/* Earning item */}
            <div className="col-sm-6 col-lg-4">
              <div className="text-center p-4 bg-light rounded-3">
                <h6 className="text-body">Lifetime Earnings</h6>
                <h2 className="mb-0 fs-1">$4882.65</h2>
              </div>
            </div>
          </div>
          {/* Earning boxes END */}
          {/* Chart START */}
          <div className="card card-body bg-transparent rounded-top border overflow-hidden p-0 mt-5">
            <div className="row g-4 p-4">
              {/* Content */}
              <div className="col-sm-6 col-md-4">
                <span className="badge text-bg-dark">Current Month</span>
                <h4 className="text-primary my-2">$35000</h4>
                <p className="mb-0"><span className="text-success me-1">0.20%<i className="bi bi-arrow-up" /></span>vs last month</p>
              </div>
              {/* Content */}
              <div className="col-sm-6 col-md-4">
                <span className="badge text-bg-dark">Last Month</span>
                <h4 className="my-2">$28000</h4>
                <p className="mb-0"><span className="text-danger me-1">0.10%<i className="bi bi-arrow-down" /></span>Then last month</p>
              </div>
            </div>
            {/* Apex chart */}

            <div className="ChartPayoutEarning" />
            <Chart_Earning/>
          </div>
          {/* Chart END */}
          {/* Earning chart START */}
          <div className="card bg-transparent border rounded-3 mt-5">
            {/* Card title */}
            <div className="card-header bg-transparent">
              <h5 className="mb-0">Top five earning sources</h5>
            </div>
            {/* Card body */}
            <div className="card-body">
              <div className="row g-4 g-md-5 align-items-center">
                {/* Chart */}
                <div className="col-md-6">
                  <div className="ChartPageViews" />
                  <Chart_View/>
                </div>
                {/* Content */}
                <div className="col-md-6">
                  <ul className="list-group list-group-borderless mb-3">
                    <li className="list-group-item"><h6 className="mb-0">Course Name</h6></li>
                    <li className="list-group-item"><i className="text-success fas fa-circle me-2" />The Complete Digital Marketing Course - 12 Courses in 1</li>
                    <li className="list-group-item"><i className="text-warning fas fa-circle me-2" />Google Ads Training: Become a PPC Expert</li>
                    <li className="list-group-item"><i className="text-danger fas fa-circle me-2" />Microsoft Excel - Excel from Beginner to Advanced</li>
                    <li className="list-group-item"><i className="text-primary fas fa-circle me-2" />Create a Design System in Figma</li>
                    <li className="list-group-item"><i className="text-secondary fas fa-circle me-2" />Deep Learning with React-Native</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Earning chart END */}
        </div>
        {/* Main content END */}
      </div>{/* Row END */}
    </div>
  </section>
  {/* =======================
    Page content END */}
</main>
<IFooter/>
    </div>
  )
}

export default Instructor_earning
