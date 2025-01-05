import React from 'react'
import { NavLink } from 'react-router-dom'
import AdminSideNavbar from './AdminSideNavbar'
import AdminTopNavBar from './AdminTopNavBar'
const AdminCourseDetail = () => {
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
      {/* Title */}
      <div className="row mb-3">
        <div className="col-12 d-sm-flex justify-content-between align-items-center">
          <h1 className="h3 mb-2 mb-sm-0">Course Details</h1>
          <a href="admin-edit-course-detail.html" className="btn btn-sm btn-primary mb-0">Edit Course</a>
        </div>
      </div>
      <div className="row g-4">
        {/* Course information START */}
        <div className="col-xxl-6">
          <div className="card bg-transparent border rounded-3 h-100">
            {/* Catd header */}
            <div className="card-header bg-lights border-bottom">
              <h5 className="card-header-title">The Complete Digital Marketing Course - 12 Courses in 1</h5>
            </div>
            {/* Card body START */}
            <div className="card-body">
              {/* Course image and info START */}
              <div className="row g-4">
                {/* Course image */}
                <div className="col-md-6">
                  <img src="assets/images/courses/4by3/01.jpg" className="rounded" alt />
                </div>
                {/* Course info and avatar */}
                <div className="col-md-6">
                  {/* Info */}
                  <p className="mb-3">Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do.</p>
                  {/* Price */}
                  <h5 className="mb-3">$295.55</h5>
                  {/* Avatar */}
                  <div className="d-sm-flex align-items-center">
                    {/* Avatar image */}
                    <div className="avatar avatar-md">
                      <img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt="avatar" />
                    </div>
                    <div className="ms-sm-3 mt-2 mt-sm-0">
                      <h6 className="mb-0"><a href="#">By Jacqueline Miller</a></h6>
                      <p className="mb-0 small">Founder Eduport company</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Course image and info END */}
              {/* Information START */}
              <div className="row mt-3">
                {/* Information item */}
                <div className="col-md-6">
                  <ul className="list-group list-group-borderless">
                    <li className="list-group-item">
                      <span>release date:</span>
                      <span className="h6 mb-0">29 Aug 2020</span>
                    </li>
                    <li className="list-group-item">
                      <span>Total Hour:</span>
                      <span className="h6 mb-0">4h 50m</span>
                    </li>
                    <li className="list-group-item">
                      <span>Total Enrolled:</span>
                      <span className="h6 mb-0">12,000+</span>
                    </li>
                    <li className="list-group-item">
                      <span>Certificate:</span>
                      <span className="h6 mb-0">Yes</span>
                    </li>
                  </ul>
                </div>
                {/* Information item */}
                <div className="col-md-6">
                  <ul className="list-group list-group-borderless">
                    <li className="list-group-item">
                      <span>Skills:</span>
                      <span className="h6 mb-0">All level</span>
                    </li>
                    <li className="list-group-item">
                      <span>Total Lecture:</span>
                      <span className="h6 mb-0">30</span>
                    </li>
                    <li className="list-group-item">
                      <span>Language:</span>
                      <span className="h6 mb-0">English</span>
                    </li>
                    <li className="list-group-item">
                      <span>Review:</span>
                      <span className="h6 mb-0">4.5<i className="fas fa-star text-warning ms-1" /></span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Information END */}
            </div>
            {/* Card body END */}
          </div>
        </div>
        {/* Course information END */}
        {/* Chart START */}
        <div className="col-xxl-6">
          <div className="row g-4">
            {/* Active student START */}
            <div className="col-md-6 col-xxl-12">
              <div className="card bg-transparent border overflow-hidden">
                {/* Card header */}
                <div className="card-header bg-lights border-bottom">
                  <h5 className="card-header-title mb-0">Total course earning</h5>
                </div>
                {/* Card body */}
                <div className="card-body p-0">
                  <div className="d-sm-flex justify-content-between p-4">
                    <h4 className="text-blue mb-0">$12,586</h4>
                    <p className="mb-0"><span className="text-success me-1">0.20%<i className="bi bi-arrow-up" /></span>vs last Week</p>
                  </div>
                  {/* Apex chart */}
                  <div id="activeChartstudent" />
                </div>
              </div>
            </div>
            {/* Active student END */}
            {/* Enrolled START */}
            <div className="col-md-6 col-xxl-12">
              <div className="card bg-transparent border overflow-hidden">
                {/* Card header */}
                <div className="card-header bg-lights border-bottom">
                  <h5 className="card-header-title mb-0">New Enrollment This Month</h5>
                </div>
                {/* Card body */}
                <div className="card-body p-0">
                  <div className="d-sm-flex justify-content-between p-4">
                    <h4 className="text-blue mb-0">186</h4>
                    <p className="mb-0"><span className="text-success me-1">0.35%<i className="bi bi-arrow-up" /></span>vs last Week</p>
                  </div>
                  {/* Apex chart */}
                  <div id="activeChartstudent2" />
                </div>
              </div>
            </div>
            {/* Enrolled END */}
          </div>
        </div>
        {/* Chart END */}
        {/* Student review START */}
        <div className="col-12">
          <div className="card bg-transparent border">
            {/* Card header START */}
            <div className="card-header bg-lights border-bottom">
              <h5 className="mb-0">Students all Reviews</h5>
            </div>
            {/* Card header END */}
            {/* Card body START */}
            <div className="card-body pb-0">
              {/* Table START */}
              <div className="table-responsive border-0">
                <table className="table table-dark-gray align-middle p-4 mb-0 table-hover">
                  {/* Table head */}
                  <thead>
                    <tr>
                      <th scope="col" className="border-0 rounded-start">Student Name</th>
                      <th scope="col" className="border-0">Date</th>
                      <th scope="col" className="border-0">Rating</th>
                      <th scope="col" className="border-0 rounded-end">Action</th>
                    </tr>
                  </thead>
                  {/* Table body START */}
                  <tbody>
                    {/* Table row */}
                    <tr>
                      {/* Table data */}
                      <td>
                        <div className="d-flex align-items-center position-relative">
                          {/* Image */}
                          <div className="avatar avatar-xs mb-2 mb-md-0">
                            <img src="assets/images/avatar/09.jpg" className="rounded-circle" alt />
                          </div>
                          <div className="mb-0 ms-2">
                            {/* Title */}
                            <h6 className="mb-0"><a href="#" className="stretched-link">Lori Stevens</a></h6>
                          </div>
                        </div>
                      </td>
                      {/* Table data */}
                      <td className="text-center text-sm-start">
                        <h6 className="mb-0">29 Nov 2021</h6>
                      </td>
                      {/* Table data */}
                      <td>
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                          <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                          <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                          <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                          <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                        </ul>
                      </td>
                      {/* Table data */}
                      <td>
                        <a href="#" className="btn btn-sm btn-info-soft mb-0" data-bs-toggle="modal" data-bs-target="#viewReview">View</a>
                        <button className="btn btn-sm btn-danger-soft me-1 mb-1 mb-md-0">Delete</button>
                      </td>
                    </tr>
                    {/* Table row */}
                    <tr>
                      {/* Table data */}
                      <td>
                        <div className="d-flex align-items-center position-relative">
                          {/* Image */}
                          <div className="avatar avatar-xs mb-2 mb-md-0">
                            <img src="assets/images/avatar/01.jpg" className="rounded-circle" alt />
                          </div>
                          <div className="mb-0 ms-2">
                            {/* Title */}
                            <h6 className="mb-0"><a href="#" className="stretched-link">Carolyn Ortiz</a></h6>
                          </div>
                        </div>
                      </td>
                      {/* Table data */}
                      <td className="text-center text-sm-start">
                        <h6 className="mb-0">15 Nov 2021</h6>
                      </td>
                      {/* Table data */}
                      <td>
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                          <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                          <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                          <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                          <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                        </ul>
                      </td>
                      {/* Table data */}
                      <td>
                        <a href="#" className="btn btn-sm btn-info-soft mb-0" data-bs-toggle="modal" data-bs-target="#viewReview">View</a>
                        <button className="btn btn-sm btn-danger-soft me-1 mb-1 mb-md-0">Delete</button>
                      </td>
                    </tr>
                    {/* Table row */}
                    <tr>
                      {/* Table data */}
                      <td>
                        <div className="d-flex align-items-center position-relative">
                          {/* Image */}
                          <div className="avatar avatar-xs mb-2 mb-md-0">
                            <img src="assets/images/avatar/03.jpg" className="rounded-circle" alt />
                          </div>
                          <div className="mb-0 ms-2">
                            {/* Title */}
                            <h6 className="mb-0"><a href="#" className="stretched-link">Dennis Barrett</a></h6>
                          </div>
                        </div>
                      </td>
                      {/* Table data */}
                      <td className="text-center text-sm-start">
                        <h6 className="mb-0">28 Oct 2021</h6>
                      </td>
                      {/* Table data */}
                      <td>
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                          <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                          <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                          <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                          <li className="list-inline-item me-0 small"><i className="fas fa-star-half-alt text-warning" /></li>
                        </ul>
                      </td>
                      {/* Table data */}
                      <td>
                        <a href="#" className="btn btn-sm btn-info-soft mb-0" data-bs-toggle="modal" data-bs-target="#viewReview">View</a>
                        <button className="btn btn-sm btn-danger-soft me-1 mb-1 mb-md-0">Delete</button>
                      </td>
                    </tr>
                    {/* Table row */}
                    <tr>
                      {/* Table data */}
                      <td>
                        <div className="d-flex align-items-center position-relative">
                          {/* Image */}
                          <div className="avatar avatar-xs mb-2 mb-md-0">
                            <img src="assets/images/avatar/04.jpg" className="rounded-circle" alt />
                          </div>
                          <div className="mb-0 ms-2">
                            {/* Title */}
                            <h6 className="mb-0"><a href="#" className="stretched-link">Billy Vasquez</a></h6>
                          </div>
                        </div>
                      </td>
                      {/* Table data */}
                      <td className="text-center text-sm-start">
                        <h6 className="mb-0"><a href="#">12 Oct 2021</a></h6>
                      </td>
                      {/* Table data */}
                      <td>
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                          <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                          <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                          <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                          <li className="list-inline-item me-0 small"><i className="fas fa-star-half-alt text-warning" /></li>
                        </ul>
                      </td>
                      {/* Table data */}
                      <td>
                        <a href="#" className="btn btn-sm btn-info-soft mb-0" data-bs-toggle="modal" data-bs-target="#viewReview">View</a>
                        <button className="btn btn-sm btn-danger-soft me-1 mb-1 mb-md-0">Delete</button>
                      </td>
                    </tr>
                    {/* Table row */}
                    <tr>
                      {/* Table data */}
                      <td>
                        <div className="d-flex align-items-center position-relative">
                          {/* Image */}
                          <div className="avatar avatar-xs mb-2 mb-md-0">
                            <img src="assets/images/avatar/05.jpg" className="rounded-circle" alt />
                          </div>
                          <div className="mb-0 ms-2">
                            {/* Title */}
                            <h6 className="mt-2"><a href="#" className="stretched-link">Jacqueline Miller</a></h6>
                          </div>
                        </div>
                      </td>
                      {/* Table data */}
                      <td className="text-center text-sm-start">
                        <h6 className="mb-0"><a href="#">31 Sep 2021</a></h6>
                      </td>
                      {/* Table data */}
                      <td>
                        <ul className="list-inline mb-0">
                          <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                          <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                          <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                          <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                          <li className="list-inline-item me-0 small"><i className="far fa-star text-warning" /></li>
                        </ul>
                      </td>
                      {/* Table data */}
                      <td>
                        <a href="#" className="btn btn-sm btn-info-soft mb-0" data-bs-toggle="modal" data-bs-target="#viewReview">View</a>
                        <button className="btn btn-sm btn-danger-soft me-1 mb-1 mb-md-0">Delete</button>
                      </td>
                    </tr>
                  </tbody>
                  {/* Table body END */}
                </table>
              </div>
              {/* Table END */}
            </div>
            {/* Card body END */}
            {/* Card footer START */}
            <div className="card-footer bg-transparent">
              {/* Pagination START */}
              <div className="d-sm-flex justify-content-sm-between align-items-sm-center">
                {/* Content */}
                <p className="mb-0 text-center text-sm-start">Showing 1 to 8 of 20 entries</p>
                {/* Pagination */}
                <nav className="d-flex justify-content-center mb-0" aria-label="navigation">
                  <ul className="pagination pagination-sm pagination-primary-soft d-inline-block d-md-flex rounded mb-0">
                    <li className="page-item mb-0"><a className="page-link" href="#" tabIndex={-1}><i className="fas fa-angle-left" /></a></li>
                    <li className="page-item mb-0"><a className="page-link" href="#">1</a></li>
                    <li className="page-item mb-0 active"><a className="page-link" href="#">2</a></li>
                    <li className="page-item mb-0"><a className="page-link" href="#">3</a></li>
                    <li className="page-item mb-0"><a className="page-link" href="#"><i className="fas fa-angle-right" /></a></li>
                  </ul>
                </nav>
              </div>
              {/* Pagination END */}
            </div>
            {/* Card footer END */}
          </div>
        </div>
        {/* Student review END */}
      </div> {/* Row END */}
    </div>
    {/* Page main content END */}
  </div>
  {/* Page content END */}
</main>
{/* **************** MAIN CONTENT END **************** */}


   </>
  )
}

export default AdminCourseDetail