import React, { useEffect } from 'react';
import PureCounter from '@srexi/purecounterjs';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from 'recharts';
import Chart from './Chart'; 
import { Link } from 'react-router-dom';
import IFooter from "./IFooter";


const Instructor_Dashboard = () => {
  useEffect(() => {
    // Initialize the counter after the component mounts
    new PureCounter();
  }, []); 
 
  return (
    <div>
   <main>
    <br/>
    <br/>
    <br/>
    <br/>
  {/* ======================= 
    Page Banner START */}
  <section className="pt-0">
    {/* Main banner background image */}
    <div className="container-fluid px-0">
      {/* <div className="bg-blue h-100px h-md-200px rounded-0" style={{background: 'url(assets/images/pattern/04.png) no-repeat center center', backgroundSize: 'cover'}}>
      </div> */}
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
                  <img className="avatar-img rounded-circle border border-white border-3 shadow" src="assets/images/avatar/01.jpg" alt="" />
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
                   <Link to="/createcource" className="btn btn-success mb-0">Create a course</Link>
                </div>
              </div>
            </div>
          </div>
          {/* Profile banner END */}
          {/* Advanced filter responsive toggler START */}
          {/* Divider */}
          <hr className="d-xl-none" />
          <div className="col-12 col-xl-3 d-flex justify-content-between align-items-center">
            <Link className="h6 mb-0 fw-bold d-xl-none" to="#">Menu</Link>
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
                  <Link className="list-group-item active" to="/instructordashboard"><i className="bi bi-ui-checks-grid fa-fw me-2" />Dashboard</Link>
                  <Link className="list-group-item" to="/instructorcourses"><i className="bi bi-basket fa-fw me-2" />My Courses</Link>
                  <Link className="list-group-item" to="/instructorquiz"><i className="bi bi-question-diamond fa-fw me-2" />Quiz</Link>
                  <Link className="list-group-item" to="/instructorearning"><i className="bi bi-graph-up fa-fw me-2" />Earnings</Link>
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
          {/* Counter boxes START */}
          <div className="row g-4">
      {/* Counter item */}
      <div className="col-sm-6 col-lg-4">
        <div className="d-flex justify-content-center align-items-center p-4 bg-warning bg-opacity-15 rounded-3">
          <span className="display-6 text-warning mb-0">
            <i className="fas fa-tv fa-fw" />
          </span>
          <div className="ms-4">
            <div className="d-flex">
              <h5
                className="purecounter mb-0 fw-bold"
                data-purecounter-start="0"
                data-purecounter-end="25"
                data-purecounter-delay="200"
              >
                0
              </h5>
            </div>
            <span className="mb-0 h6 fw-light">Total Courses</span>
          </div>
        </div>
      </div>
      {/* Counter item */}
      <div className="col-sm-6 col-lg-4">
        <div className="d-flex justify-content-center align-items-center p-4 bg-purple bg-opacity-10 rounded-3">
          <span className="display-6 text-purple mb-0">
            <i className="fas fa-user-graduate fa-fw" />
          </span>
          <div className="ms-4">
            <div className="d-flex">
              <h5
                className="purecounter mb-0 fw-bold"
                data-purecounter-start="0"
                data-purecounter-end="25"
                data-purecounter-delay="200"
              >
                0
              </h5>
              <span className="mb-0 h5">K+</span>
            </div>
            <span className="mb-0 h6 fw-light">Total Students</span>
          </div>
        </div>
      </div>
      {/* Counter item */}
      <div className="col-sm-6 col-lg-4">
        <div className="d-flex justify-content-center align-items-center p-4 bg-info bg-opacity-10 rounded-3">
          <span className="display-6 text-info mb-0">
            <i className="fas fa-gem fa-fw" />
          </span>
          <div className="ms-4">
            <div className="d-flex">
              <h5
                className="purecounter mb-0 fw-bold"
                data-purecounter-start="0"
                data-purecounter-end="12"
                data-purecounter-delay="300"
              >
                0
              </h5>
              <span className="mb-0 h5">K</span>
            </div>
            <span className="mb-0 h6 fw-light">Enrolled Students</span>
          </div>
        </div>
      </div>
    </div>
         
          {/* Counter boxes END */}
          {/* Chart START */}
          <div className="row mt-5">
            <div className="col-12">
              <div className="card card-body bg-transparent border p-4 h-100">
                <div className="row g-4">
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
                <div className="ChartPayout" >
                <Chart/>
                 
                    </div>
              </div>
            </div>
          </div>
          {/* Chart END */}
          {/* Course List table START */}
         
          {/* Course List table END */}
        </div>
        {/* Main content END */}
      </div>{/* Row END */}
    </div>
  </section>
</main>
<IFooter/>

    </div>
  )
}

export default Instructor_Dashboard
