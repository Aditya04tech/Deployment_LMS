import React from 'react';
import AdminSideNavbar from './AdminSideNavbar';
import AdminTopNavBar from './AdminTopNavBar';
import { Link } from 'react-router-dom';
const AdminCourseCategory = () => {
  return (
    <>
{/* **************** MAIN CONTENT START **************** */}
<main>
 {/* Sidebar START */}
<AdminSideNavbar/>

 
  {/* Page content START */}
  <div className="page-content">
 
       {/* Top bar START */}
      <AdminTopNavBar/>
    
      

    
    {/* Top bar END */}
    {/* Page main content START */}
    <div className="page-content-wrapper border">
      {/* Title */}
      <div className="row mb-3">
        <div className="col-12 d-sm-flex justify-content-between align-items-center">
          <h1 className="h3 mb-2 mb-sm-0">Web design <span className="badge bg-orange bg-opacity-10 text-orange">245</span></h1>
          <Link to="instructor-create-course.html" className="btn btn-sm btn-primary mb-0">Create a Course</Link>
        </div>
      </div>
      {/* Card START */}
      <div className="card bg-transparent border">
        {/* Card header START */}
        <div className="card-header bg-lights border-bottom">
          {/* Search and select START */}
          <div className="row g-3 align-items-center justify-content-between">
            {/* Search bar */}
            <div className="col-md-8">
              <form className="rounded position-relative">
                <input className="form-control bg-body" type="search" placeholder="Search" aria-label="Search" />
                <button className="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset" type="submit">
                  <i className="fas fa-search fs-6 " />
                </button>
              </form>
            </div>
            {/* Select option */}
            <div className="col-md-3">
              {/* Short by filter */}
              <form>
                <select className="form-select js-choice border-0 z-index-9" aria-label=".form-select-sm">
                  <option value>Sort by</option>
                  <option>Newest</option>
                  <option>Oldest</option>
                  <option>Accepted</option>
                  <option>Rejected</option>
                </select>
              </form>
            </div>
          </div>
          {/* Search and select END */}
        </div>
        {/* Card header END */}
        {/* Card body START */}
        <div className="card-body">
          {/* Course table START */}
          <div className="table-responsive border-0 rounded-3">
            {/* Table START */}
            <table className="table table-dark-gray align-middle p-4 mb-0 table-hover">
              {/* Table head */}
              <thead>
                <tr>
                  <th scope="col" className="border-0 rounded-start">Course Name</th>
                  <th scope="col" className="border-0">Instructor</th>
                  <th scope="col" className="border-0">Rating</th>
                  <th scope="col" className="border-0">Enrolled</th>
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
                      <div className="w-60px">
                        <img src="assets/images/courses/4by3/08.jpg" className="rounded" alt="" />
                      </div>
                      {/* Title */}
                      <h6 className="table-responsive-title mb-0 ms-2">	
                        <Link to="#" className="stretched-link">Building Scalable APIs with GraphQL</Link>
                      </h6>
                    </div>
                  </td>
                  {/* Table data */}
                  <td>
                    <div className="d-flex align-items-center">
                      {/* Avatar */}
                      <div className="avatar avatar-xs flex-shrink-0">
                        <img className="avatar-img rounded-circle" src="assets/images/avatar/09.jpg" alt="" />
                      </div>
                      {/* Info */}
                      <div className="ms-2">
                        <h6 className="mb-0 fw-light">Lori Stevens</h6>
                      </div>
                    </div>
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
                  <td> 15,567</td>
                  {/* Table data */}
                  <td>
                    <Link to="#" className="btn btn-sm btn-success me-1 mb-1 mb-md-0">Edit</Link>
                    <button className="btn btn-sm btn-danger mb-0">Delete</button>
                  </td>
                </tr>
                {/* Table row */}
                <tr>
                  {/* Table data */}
                  <td>
                    <div className="d-flex align-items-center position-relative">
                      {/* Image */}
                      <div className="w-60px">
                        <img src="assets/images/courses/4by3/10.jpg" className="rounded" alt="" />
                      </div>
                      {/* Title */}
                      <h6 className="table-responsive-title mb-0 ms-2">	
                        <Link to="#" className="stretched-link">Bootstrap 5 From Scratch</Link>
                      </h6>
                    </div>
                  </td>
                  {/* Table data */}
                  <td>
                    <div className="d-flex align-items-center">
                      {/* Avatar */}
                      <div className="avatar avatar-xs flex-shrink-0">
                        <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="" />
                      </div>
                      {/* Info */}
                      <div className="ms-2">
                        <h6 className="mb-0 fw-light">Billy Vasquez</h6>
                      </div>
                    </div>
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
                  <td>16,584</td>
                  {/* Table data */}
                  <td>
                    <Link to="#" className="btn btn-sm btn-success me-1 mb-1 mb-md-0">Edit</Link>
                    <button className="btn btn-sm btn-danger mb-0">Delete</button>
                  </td>
                </tr>
                {/* Table row */}
                <tr>
                  {/* Table data */}
                  <td>
                    <div className="d-flex align-items-center position-relative">
                      {/* Image */}
                      <div className="w-60px">
                        <img src="assets/images/courses/4by3/02.jpg" className="rounded" alt="" />
                      </div>
                      {/* Title */}
                      <h6 className="table-responsive-title mb-0 ms-2">	
                        <Link to="#" className="stretched-link">Graphic Design Masterclass</Link>
                      </h6>
                    </div>
                  </td>
                  {/* Table data */}
                  <td>
                    <div className="d-flex align-items-center">
                      {/* Avatar */}
                      <div className="avatar avatar-xs flex-shrink-0">
                        <img className="avatar-img rounded-circle" src="assets/images/avatar/05.jpg" alt="" />
                      </div>
                      {/* Info */}
                      <div className="ms-2">
                        <h6 className="mb-0 fw-light">Carolyn Ortiz</h6>
                      </div>
                    </div>
                  </td>
                  {/* Table data */}
                  <td>
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                      <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                      <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                      <li className="list-inline-item me-0 small"><i className="fas fa-star-half-alt text-warning" /></li>
                      <li className="list-inline-item me-0 small"><i className="far fa-star text-warning" /></li>
                    </ul>
                  </td>
                  {/* Table data */}
                  <td>6,458</td>
                  {/* Table data */}
                  <td>
                    <Link to="#" className="btn btn-sm btn-success me-1 mb-1 mb-md-0">Edit</Link>
                    <button className="btn btn-sm btn-danger mb-0">Delete</button>
                  </td>
                </tr>
                {/* Table row */}
                <tr>
                  {/* Table data */}
                  <td>
                    <div className="d-flex align-items-center position-relative">
                      {/* Image */}
                      <div className="w-60px">
                        <img src="assets/images/courses/4by3/04.jpg" className="rounded" alt="" />
                      </div>
                      {/* Title */}
                      <h6 className="table-responsive-title mb-0 ms-2">	
                        <Link to="#" className="stretched-link">Learn Invision</Link>
                      </h6>
                    </div>
                  </td>
                  {/* Table data */}
                  <td>
                    <div className="d-flex align-items-center">
                      {/* Avatar */}
                      <div className="avatar avatar-xs flex-shrink-0">
                        <img className="avatar-img rounded-circle" src="assets/images/avatar/06.jpg" alt="" />
                      </div>
                      {/* Info */}
                      <div className="ms-2">
                        <h6 className="mb-0 fw-light">Frances Guerrero</h6>
                      </div>
                    </div>
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
                  <td>20,158</td>
                  {/* Table data */}
                  <td>
                    <Link to="#" className="btn btn-sm btn-success me-1 mb-1 mb-md-0">Edit</Link>
                    <button className="btn btn-sm btn-danger mb-0">Delete</button>
                  </td>
                </tr>
                {/* Table row */}
                <tr>
                  {/* Table data */}
                  <td>
                    <div className="d-flex align-items-center position-relative">
                      {/* Image */}
                      <div className="w-60px">
                        <img src="assets/images/courses/4by3/09.jpg" className="rounded" alt="" />
                      </div>
                      {/* Title */}
                      <h6 className="table-responsive-title mb-0 ms-2">	
                        <Link to="#" className="stretched-link">JavaScript: Full Understanding</Link>
                      </h6>
                    </div>
                  </td>
                  {/* Table data */}
                  <td>
                    <div className="d-flex align-items-center">
                      {/* Avatar */}
                      <div className="avatar avatar-xs flex-shrink-0">
                        <img className="avatar-img rounded-circle" src="assets/images/avatar/08.jpg" alt="" />
                      </div>
                      {/* Info */}
                      <div className="ms-2">
                        <h6 className="mb-0 fw-light">Samuel Bishop</h6>
                      </div>
                    </div>
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
                  <td>5,325</td>
                  {/* Table data */}
                  <td>
                    <Link to="#" className="btn btn-sm btn-success me-1 mb-1 mb-md-0">Edit</Link>
                    <button className="btn btn-sm btn-danger mb-0">Delete</button>
                  </td>
                </tr>
                {/* Table row */}
                <tr>
                  {/* Table data */}
                  <td>
                    <div className="d-flex align-items-center position-relative">
                      {/* Image */}
                      <div className="w-60px">
                        <img src="assets/images/courses/4by3/11.jpg" className="rounded" alt="" />
                      </div>
                      {/* Title */}
                      <h6 className="table-responsive-title mb-0 ms-2">	
                        <Link to="#" className="stretched-link">Build Responsive Websites with HTML</Link>
                      </h6>
                    </div>
                  </td>
                  {/* Table data */}
                  <td>
                    <div className="d-flex align-items-center">
                      {/* Avatar */}
                      <div className="avatar avatar-xs flex-shrink-0">
                        <img className="avatar-img rounded-circle" src="assets/images/avatar/02.jpg" alt="" />
                      </div>
                      {/* Info */}
                      <div className="ms-2">
                        <h6 className="mb-0 fw-light">Dennis Barrett</h6>
                      </div>
                    </div>
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
                  <td>8,258</td>
                  {/* Table data */}
                  <td>
                    <Link to="#" className="btn btn-sm btn-success me-1 mb-1 mb-md-0">Edit</Link>
                    <button className="btn btn-sm btn-danger mb-0">Delete</button>
                  </td>
                </tr>
                {/* Table row */}
                <tr>
                  {/* Table data */}
                  <td>
                    <div className="d-flex align-items-center position-relative">
                      {/* Image */}
                      <div className="w-60px">
                        <img src="assets/images/courses/4by3/12.jpg" className="rounded" alt="" />
                      </div>
                      {/* Title */}
                      <h6 className="table-responsive-title mb-0 ms-2">	
                        <Link to="#" className="stretched-link">Build Websites with CSS</Link>
                      </h6>
                    </div>
                  </td>
                  {/* Table data */}
                  <td>
                    <div className="d-flex align-items-center">
                      {/* Avatar */}
                      <div className="avatar avatar-xs flex-shrink-0">
                        <img className="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt="" />
                      </div>
                      {/* Info */}
                      <div className="ms-2">
                        <h6 className="mb-0 fw-light">Joan Wallace</h6>
                      </div>
                    </div>
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
                  <td>17,654</td>
                  {/* Table data */}
                  <td>
                    <Link to="#" className="btn btn-sm btn-success me-1 mb-1 mb-md-0">Edit</Link>
                    <button className="btn btn-sm btn-danger mb-0">Delete</button>
                  </td>
                </tr>
              </tbody>
              {/* Table body END */}
            </table>
            {/* Table END */}
          </div>
          {/* Course table END */}
        </div>
        {/* Card body END */}
        {/* Card footer START */}
        <div className="card-footer bg-transparent pt-0">
          {/* Pagination START */}
          <div className="d-sm-flex justify-content-sm-between align-items-sm-center">
            {/* Content */}
            <p className="mb-0 text-center text-sm-start">Showing 1 to 8 of 20 entries</p>
            {/* Pagination */}
            <nav className="d-flex justify-content-center mb-0" aria-label="navigation">
              <ul className="pagination pagination-sm pagination-primary-soft d-inline-block d-md-flex rounded mb-0">
                <li className="page-item mb-0"><Link className="page-link" to="#" tabIndex={-1}><i className="fas fa-angle-left" /></Link></li>
                <li className="page-item mb-0"><Link className="page-link" to="#">1</Link></li>
                <li className="page-item mb-0 active"><Link className="page-link" to="#">2</Link></li>
                <li className="page-item mb-0"><Link className="page-link" to="#">3</Link></li>
                <li className="page-item mb-0"><Link className="page-link" to="#"><i className="fas fa-angle-right" /></Link></li>
              </ul>
            </nav>
          </div>
          {/* Pagination END */}
        </div>
        {/* Card footer END */}
      </div>
      {/* Card END */}
    </div>
    {/* Page main content END */}
  </div>
  {/* Page content END */}
</main>
{/* **************** MAIN CONTENT END **************** */}

    </>
  )
}

export default AdminCourseCategory