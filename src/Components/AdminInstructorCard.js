import React from 'react'
import { NavLink } from 'react-router-dom'
import AdminSideNavbar from './AdminSideNavbar'
import AdminTopNavBar from './AdminTopNavBar'

const AdminInstructorCard = () => {
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
      <div className="row">
        <div className="col-12 mb-3">
          <h1 className="h3 mb-2 mb-sm-0">Instructor detail</h1>
        </div>
      </div>
      <div className="row g-4">
        {/* Personal information START */}
        <div className="col-xxl-7">
          <div className="card bg-transparent border rounded-3 h-100">
            {/* Card header */}
            <div className="card-header bg-lights border-bottom">
              <h5 className="card-header-title mb-0">Personal Information</h5>
            </div>
            {/* Card body START */}
            <div className="card-body">
              {/* Profile picture */}
              <div className="avatar avatar-xl mb-3">
                <img className="avatar-img rounded-circle border border-white border-3 shadow" src="assets/images/avatar/07.jpg" alt />
              </div>
              {/* Information START */}
              <div className="row">
                {/* Information item */}
                <div className="col-md-6">
                  <ul className="list-group list-group-borderless">
                    <li className="list-group-item">
                      <span>Title:</span>
                      <span className="h6 mb-0">Mr.</span>
                    </li>
                    <li className="list-group-item">
                      <span>Full Name:</span>
                      <span className="h6 mb-0">Louis Ferguson</span>
                    </li>
                    <li className="list-group-item">
                      <span>User Name:</span>
                      <span className="h6 mb-0">Lousifer</span>
                    </li>
                    <li className="list-group-item">
                      <span>Mobile Number:</span>
                      <span className="h6 mb-0">+123 456 789 10</span>
                    </li>
                  </ul>
                </div>
                {/* Information item */}
                <div className="col-md-6">
                  <ul className="list-group list-group-borderless">
                    <li className="list-group-item">
                      <span>Email ID:</span>
                      <span className="h6 mb-0">example@gmail.com</span>
                    </li>
                    <li className="list-group-item">
                      <span>Location:</span>
                      <span className="h6 mb-0">California</span>
                    </li>
                    <li className="list-group-item">
                      <span>Joining Date:</span>
                      <span className="h6 mb-0">29 Aug 2019</span>
                    </li>
                  </ul>
                </div>
                {/* Information item */}
                <div className="col-12">
                  <ul className="list-group list-group-borderless">
                    <li className="list-group-item">
                      <span>Education:</span>
                      <span className="h6 mb-0">Bachelor in Computer Graphics,</span>
                      <span className="h6 mb-0">Masters in Computer Graphics</span>
                    </li>
                  </ul>
                </div>
                {/* Information item */}
                <div className="col-12">
                  <ul className="list-group list-group-borderless">
                    <li className="list-group-item d-flex">
                      <span>Description:</span>
                      <p className="h6 mb-0">As it so contrasted oh estimating instrument. Size like body someone had. Are conduct viewing boy minutes warrant the expense Tolerably behavior may admit daughters offending her ask own. Praise effect wishes change way and any wanted. Lively use looked latter regard had. Do he it part more last in</p>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Information END */}
            </div>
            {/* Card body END */}
          </div>
        </div>
        {/* Personal information END */}
        {/* Student status chart START */}
        <div className="col-xxl-5">
          <div className="row g-4">
            {/* Active student START */}
            <div className="col-md-6 col-xxl-12">
              <div className="card bg-transparent border overflow-hidden">
                {/* Card header */}
                <div className="card-header bg-lights border-bottom">
                  <h5 className="card-header-title mb-0">Active Students</h5>
                </div>
                {/* Card body */}
                <div className="card-body p-0">
                  <div className="d-sm-flex justify-content-between p-4">
                    <h4 className="text-blue mb-0">984</h4>
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
                  <h5 className="card-header-title mb-0">New Enrollment</h5>
                </div>
                {/* Card body */}
                <div className="card-body p-0">
                  <div className="d-sm-flex justify-content-between p-4">
                    <h4 className="text-blue mb-0">140</h4>
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
        {/* Student status chart END */}
        {/* Instructor course list START */}
        <div className="col-12">
          <div className="card bg-transparent border h-100">
            {/* Card header */}
            <div className="card-header bg-lights border-bottom">
              <h5 className="mb-0">Courses List</h5>
            </div>
            {/* Card body START */}
            <div className="card-body pb-0">
              {/* Table START */}
              <div className="table-responsive border-0">
                <table className="table table-dark-gray align-middle p-4 mb-0 table-hover">
                  {/* Table head */}
                  <thead>
                    <tr>
                      <th scope="col" className="border-0 rounded-start">Course Name</th>
                      <th scope="col" className="border-0">Enrolled</th>
                      <th scope="col" className="border-0">Status</th>
                      <th scope="col" className="border-0 rounded-end">Action</th>
                    </tr>
                  </thead>
                  {/* Table body START */}
                  <tbody>
                    {/* Table row */}
                    <tr>
                      {/* Table data */}
                      <td className="d-flex align-items-center position-relative">
                        <div className="w-60px"><img src="assets/images/courses/4by3/08.jpg" className="rounded" alt /></div>
                        <h6 className="table-responsive-title mb-0 ms-2"><a href="#" className="stretched-link">Building Scalable APIs with GraphQL</a></h6>
                      </td>
                      {/* Table data */}
                      <td>412</td>
                      {/* Table data */}
                      <td>
                        <span className="badge bg-success bg-opacity-15 text-success">Live</span>
                      </td>
                      {/* Table data */}
                      <td>
                        <a href="#" className="btn btn-sm btn-info-soft mb-0">View</a>
                      </td>
                    </tr>
                    {/* Table row */}
                    <tr>
                      {/* Table data */}
                      <td className="d-flex align-items-center position-relative">
                        <div className="w-60px"><img src="assets/images/courses/4by3/02.jpg" className="rounded" alt /></div>
                        <h6 className="table-responsive-title mb-0 ms-2"><a href="#" className="stretched-link">Graphic Design Masterclass</a></h6>
                      </td>
                      {/* Table data */}
                      <td>254</td>
                      {/* Table data */}
                      <td>
                        <span className="badge bg-success bg-opacity-15 text-success">Live</span>
                      </td>
                      {/* Table data */}
                      <td>
                        <a href="#" className="btn btn-sm btn-info-soft mb-0">View</a>
                      </td>
                    </tr>
                    {/* Table row */}
                    <tr>
                      {/* Table data */}
                      <td className="d-flex align-items-center position-relative">
                        <div className="w-60px"><img src="assets/images/courses/4by3/04.jpg" className="rounded" alt /></div>
                        <h6 className="table-responsive-title mb-0 ms-2"><a href="#" className="stretched-link">Learn Invision</a></h6>
                      </td>
                      {/* Table data */}
                      <td>0</td>
                      {/* Table data */}
                      <td>
                        <span className="badge bg-warning bg-opacity-15 text-warning">Pending</span>
                      </td>
                      {/* Table data */}
                      <td>
                        <a href="#" className="btn btn-sm btn-info-soft mb-0">View</a>
                      </td>
                    </tr>
                    {/* Table row */}
                    <tr>
                      {/* Table data */}
                      <td className="d-flex align-items-center position-relative">
                        <div className="w-60px"><img src="assets/images/courses/4by3/07.jpg" className="rounded" alt /></div>
                        <h6 className="table-responsive-title mb-0 ms-2"><a href="#" className="stretched-link">Deep Learning with React-Native</a></h6>
                      </td>
                      {/* Table data */}
                      <td>98</td>
                      {/* Table data */}
                      <td>
                        <span className="badge bg-success bg-opacity-15 text-success">Live</span>
                      </td>
                      {/* Table data */}
                      <td>
                        <a href="#" className="btn btn-sm btn-info-soft mb-0">View</a>
                      </td>
                    </tr>
                    {/* Table row */}
                    <tr>
                      {/* Table data */}
                      <td className="d-flex align-items-center position-relative">
                        <div className="w-60px"><img src="assets/images/courses/4by3/10.jpg" className="rounded" alt /></div>
                        <h6 className="table-responsive-title mb-0 ms-2"><a href="#" className="stretched-link">Bootstrap 5 From Scratch</a></h6>
                      </td>
                      {/* Table data */}
                      <td>58</td>
                      {/* Table data */}
                      <td>
                        <span className="badge bg-danger bg-opacity-15 text-danger">Cancel</span>
                      </td>
                      {/* Table data */}
                      <td>
                        <a href="#" className="btn btn-sm btn-info-soft mb-0">View</a>
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
        {/* Instructor course list END */}
        {/* Student review START */}
        <div className="col-12">
          <div className="card bg-transparent border">
            {/* Card header START */}
            <div className="card-header border-bottom bg-lights">
              <h5 className="mb-0">All Reviews</h5>
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
                      <th scope="col" className="border-0">Course Name</th>
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
                      <td>
                        <h6 className="table-responsive-title mb-0"><a href="#">Building Scalable APIs with GraphQL</a></h6>
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
                      <td>
                        <h6 className="table-responsive-title mb-0"><a href="#">Graphic Design Masterclass</a></h6>
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
                      <td>
                        <h6 className="table-responsive-title mb-0"><a href="#">Deep Learning with React-Native</a></h6>
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
                      <td>
                        <h6 className="table-responsive-title mb-0"><a href="#">Bootstrap 5 From Scratch</a></h6>
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
                      <td>
                        <h6 className="table-responsive-title mb-0"><a href="#">Learn Invision</a></h6>
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

export default AdminInstructorCard