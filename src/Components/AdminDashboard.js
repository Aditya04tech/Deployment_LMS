import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import "./AdminSideNavbar";
import AdminSideNavbar from "./AdminSideNavbar";
import "./AdminTopNavBar";
import AdminTopNavBar from "./AdminTopNavBar";

const AdminDashboard = () => {
  // Counter values
  const [completedCourses, setCompletedCourses] = useState(0);
  const [enrolledCourses, setEnrolledCourses] = useState(0);
  const [coursesInProgress, setCoursesInProgress] = useState(0);
  const [watchTime, setWatchTime] = useState(0);

  // Function to handle the counter incrementing
  const incrementCounter = (start, end, setValue, duration = 2000) => {
    let startValue = start;
    const increment = Math.ceil(end / (duration / 50)); // Determines step size
    const interval = setInterval(() => {
      startValue += increment;
      if (startValue >= end) {
        clearInterval(interval);
        setValue(end); // Ensure it ends exactly at the target value
      } else {
        setValue(startValue);
      }
    }, 50); // Update the counter every 50ms
  };

  useEffect(() => {
    incrementCounter(0, 1958, setCompletedCourses);
    incrementCounter(0, 1600, setEnrolledCourses);
    incrementCounter(0, 1235, setCoursesInProgress);
    incrementCounter(0, 845, setWatchTime);
  }, []);

  const [chartData, setChartData] = useState({
    series: [
      {
        name: "Earnings",
        data: [100, 200, 300, 400, 500, 600, 700],
      },
    ],
    options: {
      chart: {
        type: "line",
        height: 350,
      },
      title: {
        text: "Earnings Overview",
        align: "left",
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      },
      yaxis: {
        title: {
          text: "Earnings in $",
        },
      },
      stroke: {
        curve: "smooth",
      },
      tooltip: {
        x: {
          format: "MM",
        },
      },
    },
  });

  return (
    <>
      {/* **************** MAIN CONTENT START **************** */}
      <main>
        <AdminSideNavbar />

        {/* Page content START */}
        <div className="page-content">
          {/* Top bar START */}
          <AdminTopNavBar />

          {/* Page main content START */}
          <div className="page-content-wrapper border">
            {/* Title */}
            <div className="row">
              <div className="col-12 mb-3">
                <h1 className="h3 mb-2 mb-sm-0">Dashboard</h1>
              </div>
            </div>
            {/* Counter boxes START */}
            <div className="row g-4 mb-4">
              {/* Counter item */}
              <div className="col-md-6 col-xxl-3">
                <div className="card card-body bg-warning bg-opacity-15 p-4 h-100">
                  <div className="d-flex justify-content-between align-items-center">
                    {/* Digit */}
                    <div>
                      <h2 className="mb-0 fw-bold">{completedCourses}</h2>
                      <span className="mb-0 h6 fw-light">
                        Completed Courses
                      </span>
                    </div>
                    {/* Icon */}
                    <div className="icon-lg rounded-circle bg-warning text-white mb-0">
                      <i className="fas fa-tv fa-fw" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Counter item */}
              <div className="col-md-6 col-xxl-3">
                <div className="card card-body bg-purple bg-opacity-10 p-4 h-100">
                  <div className="d-flex justify-content-between align-items-center">
                    {/* Digit */}
                    <div>
                      <h2 className="mb-0 fw-bold">{enrolledCourses}</h2>
                      <span className="mb-0 h6 fw-light">Enrolled Courses</span>
                    </div>
                    {/* Icon */}
                    <div className="icon-lg rounded-circle bg-purple text-white mb-0">
                      <i className="fas fa-user-tie fa-fw" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Counter item */}
              <div className="col-md-6 col-xxl-3">
                <div className="card card-body bg-primary bg-opacity-10 p-4 h-100">
                  <div className="d-flex justify-content-between align-items-center">
                    {/* Digit */}
                    <div>
                      <h2 className="mb-0 fw-bold">{coursesInProgress}</h2>
                      <span className="mb-0 h6 fw-light">
                        Course In Progress
                      </span>
                    </div>
                    {/* Icon */}
                    <div className="icon-lg rounded-circle bg-primary text-white mb-0">
                      <i className="fas fa-user-graduate fa-fw" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Counter item */}
              <div className="col-md-6 col-xxl-3">
                <div className="card card-body bg-success bg-opacity-10 p-4 h-100">
                  <div className="d-flex justify-content-between align-items-center">
                    {/* Digit */}
                    <div>
                      <div className="d-flex">
                        <h2 className="mb-0 fw-bold">{watchTime}</h2>
                        <span className="mb-0 h2 ms-1">hrs</span>
                      </div>
                      <span className="mb-0 h6 fw-light">Total Watch Time</span>
                    </div>
                    {/* Icon */}
                    <div className="icon-lg rounded-circle bg-success text-white mb-0">
                      <i className="bi bi-stopwatch-fill fa-fw" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Counter boxes END */}
            {/* Chart and Ticket START */}
            <div className="row g-4 mb-4">
              {/* Chart START */}
              <div className="col-xxl-8">
                <div className="card shadow h-100">
                  {/* Card header */}
                  <div className="card-header p-4 border-bottom">
                    <h5 className="card-header-title">Earnings</h5>
                  </div>
                  {/* Card body */}
                  <div className="card-body">
                    {/* Apex chart */}
                    <div id="ChartPayout">
                      <Chart
                        options={chartData.options}
                        series={chartData.series}
                        type="line"
                        height={350}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Chart END */}
              {/* Ticket START */}
              <div className="col-xxl-4">
                <div className="card shadow h-100">
                  {/* Card header */}
                  <div className="card-header border-bottom d-flex justify-content-between align-items-center p-4">
                    <h5 className="card-header-title">Support Requests</h5>
                    <a href="#" className="btn btn-link p-0 mb-0">
                      View all
                    </a>
                  </div>
                  {/* Card body START */}
                  <div className="card-body p-4">
                    {/* Ticket item START */}
                    <div className="d-flex justify-content-between position-relative">
                      <div className="d-sm-flex">
                        {/* Avatar */}
                        <div className="avatar avatar-md flex-shrink-0">
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/images/avatar/09.jpg"
                            alt="avatar"
                          />
                        </div>
                        {/* Info */}
                        <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                          <h6 className="mb-0">
                            <a href="#" className="stretched-link">
                              Lori Stevens
                            </a>
                          </h6>
                          <p className="mb-0">
                            New ticket #759 from Lori Stevens for General
                            Enquiry
                          </p>
                          <span className="small">8 hour ago</span>
                        </div>
                      </div>
                    </div>
                    {/* Ticket item END */}
                    <hr />
                    {/* Divider */}
                    {/* Ticket item START */}
                    <div className="d-flex justify-content-between position-relative">
                      <div className="d-sm-flex">
                        {/* Avatar */}
                        <div className="avatar avatar-md flex-shrink-0">
                          <div className="avatar-img rounded-circle bg-purple bg-opacity-10">
                            <span className="text-purple position-absolute top-50 start-50 translate-middle fw-bold">
                              DB
                            </span>
                          </div>
                        </div>
                        {/* Info */}
                        <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                          <h6 className="mb-0">
                            <a href="#" className="stretched-link">
                              Dennis Barrett
                            </a>
                          </h6>
                          <p className="mb-0">
                            Comment from Billy Vasquez on ticket #659
                          </p>
                          <span className="small">8 hour ago</span>
                        </div>
                      </div>
                    </div>
                    {/* Ticket item END */}
                    <hr />
                    {/* Divider */}
                    {/* Ticket item START */}
                    <div className="d-flex justify-content-between position-relative">
                      <div className="d-sm-flex">
                        {/* Avatar */}
                        <div className="avatar avatar-md flex-shrink-0">
                          <div className="avatar-img rounded-circle bg-orange bg-opacity-10">
                            <span className="text-orange position-absolute top-50 start-50 translate-middle fw-bold">
                              WB
                            </span>
                          </div>
                        </div>
                        {/* Info */}
                        <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                          <h6 className="mb-0">
                            <a href="#" className="stretched-link">
                              Dennis Barrett
                            </a>
                          </h6>
                          <p className="mb-0">
                            <b>Webestica</b> assign you a new ticket for{" "}
                            <b>Eduport theme</b>
                          </p>
                          <span className="small">5 hour ago</span>
                        </div>
                      </div>
                    </div>
                    {/* Ticket item END */}
                    <hr />
                    {/* Divider */}
                    {/* Ticket item START */}
                    <div className="d-flex justify-content-between position-relative">
                      <div className="d-sm-flex">
                        {/* Avatar */}
                        <div className="avatar avatar-md flex-shrink-0">
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/images/avatar/04.jpg"
                            alt="avatar"
                          />
                        </div>
                        {/* Info */}
                        <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                          <h6 className="mb-0">
                            <a href="#" className="stretched-link">
                              Dennis Barrett
                            </a>
                          </h6>
                          <p className="mb-0">
                            Thanks for contact us with your issues.
                          </p>
                          <span className="small">9 hour ago</span>
                        </div>
                      </div>
                    </div>
                    {/* Ticket item END */}
                  </div>
                  {/* Card body END */}
                </div>
              </div>
              {/* Ticket END */}
            </div>
            {/* Chart and Ticket END */}
            {/* Top listed Cards START */}
            <div className="row g-4">
              {/* Top instructors START */}
              <div className="col-lg-6 col-xxl-4">
                <div className="card shadow h-100">
                  {/* Card header */}
                  <div className="card-header border-bottom d-flex justify-content-between align-items-center p-4">
                    <h5 className="card-header-title">Top Instructors</h5>
                    <a href="#" className="btn btn-link p-0 mb-0">
                      View all
                    </a>
                  </div>
                  {/* Card body START */}
                  <div className="card-body p-4">
                    {/* Instructor item START */}
                    <div className="d-sm-flex justify-content-between align-items-center">
                      {/* Avatar and info */}
                      <div className="d-sm-flex align-items-center mb-1 mb-sm-0">
                        {/* Avatar */}
                        <div className="avatar avatar-md flex-shrink-0">
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/images/avatar/09.jpg"
                            alt="avatar"
                          />
                        </div>
                        {/* Info */}
                        <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                          <h6 className="mb-1">
                            Lori Stevens
                            <i className="bi bi-patch-check-fill text-info small ms-1" />
                          </h6>
                          <ul className="list-inline mb-0 small">
                            <li className="list-inline-item fw-light me-2 mb-1 mb-sm-0">
                              <i className="fas fa-book text-purple me-1" />
                              25 Courses
                            </li>
                            <li className="list-inline-item fw-light me-2 mb-1 mb-sm-0">
                              <i className="fas fa-star text-warning me-1" />
                              4.5/5.0
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* Button */}
                      <a href="#" className="btn btn-sm btn-light mb-0">
                        View
                      </a>
                    </div>
                    {/* Instructor item END */}
                    <hr />
                    {/* Divider */}
                    {/* Instructor item START */}
                    <div className="d-sm-flex justify-content-between align-items-center">
                      {/* Avatar and info */}
                      <div className="d-sm-flex align-items-center mb-1 mb-sm-0">
                        {/* Avatar */}
                        <div className="avatar avatar-md flex-shrink-0">
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/images/avatar/03.jpg"
                            alt="avatar"
                          />
                        </div>
                        {/* Info */}
                        <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                          <h6 className="mb-1">Dennis Barrett</h6>
                          <ul className="list-inline mb-0 small">
                            <li className="list-inline-item fw-light me-2 mb-1 mb-sm-0">
                              <i className="fas fa-book text-purple me-1" />
                              18 Courses
                            </li>
                            <li className="list-inline-item fw-light me-2 mb-1 mb-sm-0">
                              <i className="fas fa-star text-warning me-1" />
                              4.5/5.0
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* Button */}
                      <a href="#" className="btn btn-sm btn-light mb-0">
                        View
                      </a>
                    </div>
                    {/* Instructor item END */}
                    <hr />
                    {/* Divider */}
                    {/* Instructor item START */}
                    <div className="d-sm-flex justify-content-between align-items-center">
                      {/* Avatar and info */}
                      <div className="d-sm-flex align-items-center mb-1 mb-sm-0">
                        {/* Avatar */}
                        <div className="avatar avatar-md flex-shrink-0">
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/images/avatar/01.jpg"
                            alt="avatar"
                          />
                        </div>
                        {/* Info */}
                        <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                          <h6 className="mb-1">
                            Jacqueline Miller
                            <i className="bi bi-patch-check-fill text-info small ms-1" />
                          </h6>
                          <ul className="list-inline mb-0 small">
                            <li className="list-inline-item fw-light me-2 mb-1 mb-sm-0">
                              <i className="fas fa-book text-purple me-1" />
                              21 Courses
                            </li>
                            <li className="list-inline-item fw-light me-2 mb-1 mb-sm-0">
                              <i className="fas fa-star text-warning me-1" />
                              4.8/5.0
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* Button */}
                      <a href="#" className="btn btn-sm btn-light mb-0">
                        View
                      </a>
                    </div>
                    {/* Instructor item END */}
                    <hr />
                    {/* Divider */}
                    {/* Instructor item START */}
                    <div className="d-sm-flex justify-content-between align-items-center">
                      {/* Avatar and info */}
                      <div className="d-sm-flex align-items-center mb-1 mb-sm-0">
                        {/* Avatar */}
                        <div className="avatar avatar-md flex-shrink-0">
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/images/avatar/04.jpg"
                            alt="avatar"
                          />
                        </div>
                        {/* Info */}
                        <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                          <h6 className="mb-1">Billy Vasquez</h6>
                          <ul className="list-inline mb-0 small">
                            <li className="list-inline-item fw-light me-2 mb-1 mb-sm-0">
                              <i className="fas fa-book text-purple me-1" />
                              15 Courses
                            </li>
                            <li className="list-inline-item fw-light me-2 mb-1 mb-sm-0">
                              <i className="fas fa-star text-warning me-1" />
                              4.5/5.0
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* Button */}
                      <a href="#" className="btn btn-sm btn-light mb-0">
                        View
                      </a>
                    </div>
                    {/* Instructor item END */}
                    <hr />
                    {/* Divider */}
                    {/* Instructor item START */}
                    <div className="d-sm-flex justify-content-between align-items-center">
                      {/* Avatar and info */}
                      <div className="d-sm-flex align-items-center mb-1 mb-sm-0">
                        {/* Avatar */}
                        <div className="avatar avatar-md flex-shrink-0">
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/images/avatar/05.jpg"
                            alt="avatar"
                          />
                        </div>
                        {/* Info */}
                        <div className="ms-0 ms-sm-2 mt-2 mt-sm-0">
                          <h6 className="mb-1">
                            Amanda Reed
                            <i className="bi bi-patch-check-fill text-info small ms-1" />
                          </h6>
                          <ul className="list-inline mb-0 small">
                            <li className="list-inline-item fw-light me-2 mb-1 mb-sm-0">
                              <i className="fas fa-book text-purple me-1" />
                              29 Courses
                            </li>
                            <li className="list-inline-item fw-light me-2 mb-1 mb-sm-0">
                              <i className="fas fa-star text-warning me-1" />
                              4.5/5.0
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* Button */}
                      <a href="#" className="btn btn-sm btn-light mb-0">
                        View
                      </a>
                    </div>
                    {/* Instructor item END */}
                  </div>
                  {/* Card body END */}
                </div>
              </div>
              {/* Top instructors END */}
              {/* Notice Board START */}
              <div className="col-lg-6 col-xxl-4">
                <div className="card shadow h-100">
                  {/* Card header */}
                  <div className="card-header border-bottom p-4">
                    <h5 className="card-header-title">Notice board</h5>
                  </div>
                  {/* Card body START */}
                  <div className="card-body p-4">
                    <div className="custom-scrollbar h-300px">
                      {/* Notice Board item START */}
                      <div className="d-flex justify-content-between position-relative">
                        <div className="d-sm-flex">
                          <div className="icon-lg bg-purple bg-opacity-10 text-purple rounded-2 flex-shrink-0">
                            <i className="fas fa-user-tie fs-5" />
                          </div>
                          {/* Info */}
                          <div className="ms-0 ms-sm-3 mt-2 mt-sm-0">
                            <h6 className="mb-0">
                              <a href="#" className="stretched-link">
                                Join New Instructor
                              </a>
                            </h6>
                            <p className="mb-0">
                              Amongst moments do in arrived Fat weddings
                              believed prospect
                            </p>
                            <span className="small">5 min ago</span>
                          </div>
                        </div>
                      </div>
                      {/* Notice Board item END */}
                      <hr />
                      {/* Divider */}
                      {/* Other notice board items */}
                      <div className="d-flex justify-content-between position-relative">
                        <div className="d-sm-flex">
                          <div className="icon-lg bg-orange bg-opacity-10 text-orange rounded-2 flex-shrink-0">
                            <i className="fas fa-book-open fs-5" />
                          </div>
                          {/* Info */}
                          <div className="ms-0 ms-sm-3 mt-2 mt-sm-0">
                            <h6 className="mb-0">
                              <a href="#" className="stretched-link">
                                Update New Course
                              </a>
                            </h6>
                            <p className="mb-0">
                              Arrived Fat weddings believed prospect
                            </p>
                            <span className="small">4 hour ago</span>
                          </div>
                        </div>
                      </div>
                      <hr />
                      {/* More notice items */}
                    </div>
                  </div>
                  {/* Card body END */}
                  {/* Card footer START */}
                  <div className="card-footer border-top">
                    <div className="alert alert-success d-flex align-items-center mb-0 py-2">
                      <div>
                        <small className="mb-0">45 more notices listed</small>
                      </div>
                      <div className="ms-auto">
                        <a
                          className="btn btn-sm btn-success-soft mb-0"
                          href="#!"
                        >
                          View all
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Card footer END */}
                </div>
              </div>

              {/* Notice Board END */}
              {/* Traffic sources START */}
              <div className="col-lg-6 col-xxl-4">
                <div className="card shadow h-100">
                  {/* Card header */}
                  <div className="card-header border-bottom d-flex justify-content-between align-items-center p-4">
                    <h5 className="card-header-title">Traffic Sources</h5>
                    <a href="#" className="btn btn-link p-0 mb-0">
                      View all
                    </a>
                  </div>
                  {/* Card body START */}
                  <div className="card-body p-4">
                    {/* Chart */}
                    <div className="col-sm-6 mx-auto">
                      <div id="ChartTrafficViews" />
                    </div>
                    {/* Content */}
                    <ul className="list-group list-group-borderless mt-3">
                      <li className="list-group-item">
                        <i className="text-primary fas fa-circle me-2" />
                        Create a Design System in Figma
                      </li>
                      <li className="list-group-item">
                        <i className="text-success fas fa-circle me-2" />
                        The Complete Digital Marketing Course - 12 Courses in 1
                      </li>
                      <li className="list-group-item">
                        <i className="text-warning fas fa-circle me-2" />
                        Google Ads Training: Become a PPC Expert
                      </li>
                      <li className="list-group-item">
                        <i className="text-danger fas fa-circle me-2" />
                        Microsoft Excel - Excel from Beginner to Advanced
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Card body END */}
              </div>
              {/* Traffic sources END */}
            </div>
            {/* Top listed Cards END */}
          </div>
          {/* Page main content END */}
        </div>
        {/* Page content END */}
      </main>
      {/* **************** MAIN CONTENT END **************** */}
    </>
  );
};

export default AdminDashboard;
