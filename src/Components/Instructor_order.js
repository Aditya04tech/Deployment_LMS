import React from 'react'
import IFooter from "./IFooter"
import { Link } from 'react-router-dom'

const Instructor_order = () => {
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
            <Link ClassName="h6 mb-0 fw-bold d-xl-none" to="#">Menu</Link>
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
                  <Link className="list-group-item" to="/instructorearning"><i className="bi bi-graph-up fa-fw me-2" />Earnings</Link>
                  <Link className="list-group-item" to="/instructorstudentlist"><i className="bi bi-people fa-fw me-2" />Students</Link>
                  <Link className="list-group-item active" to="/instrctororder"><i className="bi bi-folder-check fa-fw me-2" />Orders</Link>
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
          {/* Card START */}
          <div className="card border bg-transparent rounded-3">
            {/* Card header START */}
            <div className="card-header bg-transparent border-bottom">
              <h3 className="mb-0">Order List</h3>
            </div>
            {/* Card header END */}
            {/* Card body START */}
            <div className="card-body">
              {/* Search and select START */}
              <div className="row g-3 align-items-center justify-content-between mb-4">
                {/* Search */}
                <div className="col-md-8">
                  <form className="rounded position-relative">
                    <input className="form-control pe-5 bg-transparent" type="search" placeholder="Search" aria-label="Search" />
                    <button className="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset" type="submit">
                      <i className="fas fa-search fs-6 " />
                    </button>
                  </form>
                </div>
                {/* Select option */}
                <div className="col-md-3">
                  {/* Short by filter */}
                  <form>
                    <select className="form-select js-choice border-0 z-index-9 bg-transparent" aria-label=".form-select-sm">
                      <option value>Sort by</option>
                      <option>Free</option>
                      <option>Newest</option>
                      <option>Oldest</option>
                    </select>
                  </form>
                </div>
              </div>
              {/* Search and select END */}
              {/* Order list table START */}
              <div className="table-responsive border-0">
                {/* Table START */}
                <table className="table table-dark-gray align-middle p-4 mb-0 table-hover">
                  {/* Table head */}
                  <thead>
                    <tr>
                      <th scope="col" className="border-0 rounded-start">Course name</th>
                      <th scope="col" className="border-0">Order ID</th>
                      <th scope="col" className="border-0">Date</th>
                      <th scope="col" className="border-0">Amount</th>
                      <th scope="col" className="border-0 rounded-end">Payment</th>
                    </tr>
                  </thead>
                  {/* Table body START */}
                  <tbody>
                    {/* Table item */}
                    <tr>
                      {/* Table data */}
                      <td>
                        <h6 className="table-responsive-title mt-2 mt-lg-0 mb-0"><Link to="#">The complete Digital Marketing Course - 8 Course in 1</Link></h6>
                      </td>
                      {/* Table data */}
                      <td className="text-center text-sm-start text-primary-hover">
                        <Link to="#" className="text-body"><u>#125489</u></Link>
                      </td>
                      {/* Table data */}
                      <td>18/1/2023</td>
                      {/* Table data */}
                      <td>$356</td>
                      {/* Table data */}
                      <td>Credit Card</td>
                    </tr>
                    {/* Table item */}
                    <tr>
                      {/* Table data */}
                      <td>
                        <h6 className="table-responsive-title mt-2 mt-lg-0 mb-0"><Link to="#">Time Management Mastery: Do More, Stress Less</Link></h6>
                      </td>
                      {/* Table data */}
                      <td className="text-center text-sm-start text-primary-hover">
                        <Link to="#" className="text-body"><u>#235486</u></Link>
                      </td>
                      {/* Table data */}
                      <td>25/1/2023</td>
                      {/* Table data */}
                      <td>$186</td>
                      {/* Table data */}
                      <td>Debit Card</td>
                    </tr>
                    {/* Table item */}
                    <tr>
                      {/* Table data */}
                      <td>
                        <h6 className="table-responsive-title mt-2 mt-lg-0 mb-0"><Link to="#">Building Scalable APIs with GraphQL</Link></h6>
                      </td>
                      {/* Table data */}
                      <td className="text-center text-sm-start text-primary-hover">
                        <Link to="#" className="text-body"><u>#0215789</u></Link>
                      </td>
                      {/* Table data */}
                      <td>4/9/2020</td>
                      {/* Table data */}
                      <td>$450</td>
                      {/* Table data */}
                      <td>Paypal</td>
                    </tr>
                    {/* Table item */}
                    <tr>
                      {/* Table data */}
                      <td>
                        <h6 className="table-responsive-title mt-2 mt-lg-0 mb-0"><Link to="#">Sketch from A to Z: for app designer</Link></h6>
                      </td>
                      {/* Table data */}
                      <td className="text-center text-sm-start text-primary-hover">
                        <Link to="#" className="text-body"><u>#0135689</u></Link>
                      </td>
                      {/* Table data */}
                      <td>5/1/2023</td>
                      {/* Table data */}
                      <td>$0</td>
                      {/* Table data */}
                      <td>Free</td>
                    </tr>
                    {/* Table item */}
                    <tr>
                      {/* Table data */}
                      <td>
                        <h6 className="table-responsive-title mt-2 mt-lg-0 mb-0"><Link to="#">Build Responsive Websites with HTML</Link></h6>
                      </td>
                      {/* Table data */}
                      <td className="text-center text-sm-start text-primary-hover">
                        <Link to="#" className="text-body"><u>#0587623</u></Link>
                      </td>
                      {/* Table data */}
                      <td>2/1/2023</td>
                      {/* Table data */}
                      <td>$250</td>
                      {/* Table data */}
                      <td>Credit Card</td>
                    </tr>
                    {/* Table item */}
                    <tr>
                      {/* Table data */}
                      <td>
                        <h6 className="table-responsive-title mt-2 mt-lg-0 mb-0"><Link to="#">JavaScript: Full Understanding</Link></h6>
                      </td>
                      {/* Table data */}
                      <td className="text-center text-sm-start text-primary-hover">
                        <Link to="#" className="text-body"><u>#0215789</u></Link>
                      </td>
                      {/* Table data */}
                      <td>14/1/2023</td>
                      {/* Table data */}
                      <td>$325</td>
                      {/* Table data */}
                      <td>Debit Card</td>
                    </tr>
                  </tbody>
                  {/* Table body END */}
                </table>
                {/* Table END */}
              </div>
              {/* Order list table END */}
              {/* Pagination START */}
              <div className="d-sm-flex justify-content-sm-between align-items-sm-center mt-4 mt-sm-3">
                {/* Content */}
                <p className="mb-0 text-center text-sm-start">Showing 1 to 8 of 20 entries</p>
                {/* Pagination */}
                <nav className="d-flex justify-content-center mb-0" aria-label="navigation">
                  <ul className="pagination pagination-sm pagination-primary-soft d-inline-block d-md-flex rounded mb-0">
                    <li className="page-item mb-0"><Link ClassName="page-link" to="#" tabIndex={-1}><i className="fas fa-angle-left" /></Link></li>
                    <li className="page-item mb-0"><Link ClassName="page-link" to="#">1</Link></li>
                    <li className="page-item mb-0 active"><Link ClassName="page-link" to="#">2</Link></li>
                    <li className="page-item mb-0"><Link ClassName="page-link" to="#">3</Link></li>
                    <li className="page-item mb-0"><Link ClassName="page-link" to="#"><i className="fas fa-angle-right" /></Link></li>
                  </ul>
                </nav>
              </div>
              {/* Pagination END */}
            </div>
            {/* Card body START */}
          </div>
          {/*Card END  */}
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

export default Instructor_order
