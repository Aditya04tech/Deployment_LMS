import React from 'react'
import { Link } from 'react-router-dom'
import IFooter from "./IFooter"


const Instructor_PayOuts = () => {
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
                  <Link className="list-group-item" to="/instructordashboard"><i className="bi bi-ui-checks-grid fa-fw me-2" />Dashboard</Link>
                  <Link className="list-group-item" to="/instructorcourses"><i className="bi bi-basket fa-fw me-2" />My Courses</Link>
                  <Link className="list-group-item" to="/instructorquiz"><i className="bi bi-question-diamond fa-fw me-2" />Quiz</Link>
                  <Link className="list-group-item" to="/instructorearning"><i className="bi bi-graph-up fa-fw me-2" />Earnings</Link>
                  <Link className="list-group-item" to="/instructorstudentlist"><i className="bi bi-people fa-fw me-2" />Students</Link>
                  <Link className="list-group-item " to="/instrctororder"><i className="bi bi-folder-check fa-fw me-2" />Orders</Link>
                  <Link className="list-group-item" to="/instructorreviews"><i className="bi bi-star fa-fw me-2" />Reviews</Link>
                  <Link className="list-group-item" to="/instructoreditprofile"><i className="bi bi-pencil-square fa-fw me-2" />Edit Profile</Link>
                  <Link className="list-group-item active" to="/instructorpayout"><i className="bi bi-wallet2 fa-fw me-2" />Payouts</Link>
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
          {/* Payout box START */}
          <div className="row g-4 mb-4">
            {/* Box item */}
            <div className="col-sm-6 col-md-4">
              <div className="border p-3 rounded-3 h-100">
                <div className="d-flex mb-1 justify-content-between align-items-center">
                  <h6 className="mb-0">Last month payout</h6>
                  <span className="badge bg-success bg-opacity-10 text-success ms-2 mb-0">Paid</span>
                </div>
                <h2 className="mb-2 mt-2">$12,825</h2>
                <Link href="#">View transaction</Link>
              </div>
            </div>
            {/* Box item */}
            <div className="col-sm-6 col-md-4">
              <div className="border p-3 rounded-3 h-100">
                <h6 className="mb-0">This month earning</h6>
                <h2 className="mb-2 mt-2">$15,356</h2>
                <p className="mb-0">Expected payout on 05/01/2023</p>
              </div>
            </div>
            {/* Box item */}
            <div className="col-sm-6 col-md-4">
              <div className="bg-primary bg-opacity-10 h-100 p-3 rounded-3">
                <h6 className="mb-0">Balance</h6>
                <h2 className="mb-2 mt-2">$8,485</h2>
                <Link href="#" className="btn btn-sm btn-primary mb-0">Withdraw Earning</Link>
              </div>
            </div>
          </div>
          {/* Payout box END */}
          <div className="card bg-transparent border rounded-3">
            {/* Card header START */}
            <div className="card-header bg-transparent border-bottom">
              <h3 className="mb-0">Payouts</h3>
            </div>
            {/* Card header END */}
            {/* Card body START */}
            <div className="card-body">
              {/* Title and select START */}
              <div className="row g-3 align-items-center justify-content-between mb-4">
                {/* Content */}
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
              {/* Title and select END */}
              {/* Payout list table START */}
              <div className="table-responsive border-0">
                <table className="table table-dark-gray align-middle p-4 mb-0 table-hover">
                  {/* Table head */}
                  <thead>
                    <tr>
                      <th scope="col" className="border-0 rounded-start">Payout</th>
                      <th scope="col" className="border-0">Amount</th>
                      <th scope="col" className="border-0">Status</th>
                      <th scope="col" className="border-0 rounded-end">Date</th>
                    </tr>
                  </thead>
                  {/* Table body START */}
                  <tbody>
                    {/* Table item */}
                    <tr>
                      {/* Table data */}
                      <td>
                        <h6 className="mt-2 mt-lg-0 mb-0"><Link href="#">Successful payout #102356</Link></h6>
                      </td>
                      {/* Table data */}
                      <td>$3,999
                        {/* Drop down with id */}
                        <Link href="#" className="h6 mb-0" role="button" id="dropdownShare" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="bi bi-info-circle-fill" />
                        </Link>
                        <ul className="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded" aria-labelledby="dropdownShare">
                          <li>
                            <div className="d-flex justify-content-between">
                              <span className="small">Commission</span>
                              <span className="h6 mb-0 small">$86</span>
                            </div>
                            <hr className="my-1" />
                          </li>
                          {/* Divider */}
                          <li>
                            <div className="d-flex justify-content-between">
                              <span className="me-4 small">Us royalty withholding</span>
                              <span className="text-danger small">-$0.00</span>
                            </div>
                            <hr className="my-1" />
                          </li>
                          <li>
                            <div className="d-flex justify-content-between">
                              <span className="small">Earning</span>
                              <span className="h6 mb-0 small">$86</span>
                            </div>
                          </li>
                        </ul>
                      </td>
                      {/* Table data */}
                      <td className="text-center text-sm-start">
                        <span className="badge bg-success bg-opacity-10 text-success">Paid</span>
                      </td>
                      {/* Table data */}
                      <td>18/1/2023</td>
                    </tr>
                    {/* Table item */}
                    <tr>
                      {/* Table data */}
                      <td>
                        {/* Title */}
                        <h6 className="mt-2 mt-lg-0 mb-0"><Link href="#">Successful payout #102589</Link></h6>
                      </td>
                      {/* Table data */}
                      <td>$4,875
                        {/* Drop down with id */}
                        <Link href="#" className="h6 mb-0" role="button" id="dropdownShare1" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="bi bi-info-circle-fill" />
                        </Link>
                        <ul className="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded" aria-labelledby="dropdownShare1">
                          <li>
                            <div className="d-flex justify-content-between">
                              <span className="small">Commission</span>
                              <span className="h6 mb-0 small">$86</span>
                            </div>
                            <hr className="my-1" />
                          </li>
                          {/* Divider */}
                          <li>
                            <div className="d-flex justify-content-between">
                              <span className="me-4 small">Us royalty withholding</span>
                              <span className="text-danger small">-$0.00</span>
                            </div>
                            <hr className="my-1" />
                          </li>
                          <li>
                            <div className="d-flex justify-content-between">
                              <span className="small">Earning</span>
                              <span className="h6 mb-0 small">$86</span>
                            </div>
                          </li>
                        </ul>
                      </td>
                      {/* Table data */}
                      <td className="text-center text-sm-start">
                        <span className="badge bg-success bg-opacity-10 text-success">Paid</span>
                      </td>
                      {/* Table data */}
                      <td>12/1/2023</td>
                    </tr>
                    {/* Table item */}
                    <tr>
                      {/* Table data */}
                      <td>
                        <h6 className="mt-2 mt-lg-0 mb-0"><Link href="#">Successful payout #108645</Link></h6>
                      </td>
                      {/* Table data */}
                      <td>$1,800
                        {/* Drop down with id */}
                        <Link href="#" className="h6 mb-0" role="button" id="dropdownShare2" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="bi bi-info-circle-fill" />
                        </Link>
                        <ul className="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded" aria-labelledby="dropdownShare2">
                          <li>
                            <div className="d-flex justify-content-between">
                              <span className="small">Commission</span>
                              <span className="h6 mb-0 small">$86</span>
                            </div>
                            <hr className="my-1" />
                          </li>
                          {/* Divider */}
                          <li>
                            <div className="d-flex justify-content-between">
                              <span className="me-4 small">Us royalty withholding</span>
                              <span className="text-danger small">-$0.00</span>
                            </div>
                            <hr className="my-1" />
                          </li>
                          <li>
                            <div className="d-flex justify-content-between">
                              <span className="small">Earning</span>
                              <span className="h6 mb-0 small">$86</span>
                            </div>
                          </li>
                        </ul>
                      </td>
                      {/* Table data */}
                      <td className="text-center text-sm-start">
                        <span className="badge bg-danger bg-opacity-10 text-danger">Cancelled </span>
                      </td>
                      {/* Table data */}
                      <td>22/1/2023</td>
                    </tr>
                    {/* Table item */}
                    <tr>
                      {/* Table data */}
                      <td>
                        <h6 className="mt-2 mt-lg-0 mb-0"><Link href="#">Successful payout #108645</Link></h6>
                      </td>
                      {/* Table data */}
                      <td>$6,800
                        {/* Drop down with id */}
                        <Link href="#" className="h6 mb-0" role="button" id="dropdownShare3" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="bi bi-info-circle-fill" />
                        </Link>
                        <ul className="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded" aria-labelledby="dropdownShare3">
                          <li>
                            <div className="d-flex justify-content-between">
                              <span className="small">Commission</span>
                              <span className="h6 mb-0 small">$86</span>
                            </div>
                            <hr className="my-1" />
                          </li>
                          {/* Divider */}
                          <li>
                            <div className="d-flex justify-content-between">
                              <span className="me-4 small">Us royalty withholding</span>
                              <span className="text-danger small">-$0.00</span>
                            </div>
                            <hr className="my-1" />
                          </li>
                          <li>
                            <div className="d-flex justify-content-between">
                              <span className="small">Earning</span>
                              <span className="h6 mb-0 small">$86</span>
                            </div>
                          </li>
                        </ul>
                      </td>
                      {/* Table data */}
                      <td className="text-center text-sm-start">
                        <span className="badge bg-success bg-opacity-10 text-success">Paid</span>
                      </td>
                      {/* Table data */}
                      <td>28/1/2023</td>
                    </tr>
                    {/* Table item */}
                    <tr>
                      {/* Table data */}
                      <td>
                        {/* Title */}
                        <h6 className="mt-2 mt-lg-0 mb-0"><Link href="#">Successful payout #108645</Link></h6>
                      </td>
                      {/* Table data */}
                      <td>$3,576
                        {/* Drop down with id */}
                        <Link href="#" className="h6 mb-0" role="button" id="dropdownShare4" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="bi bi-info-circle-fill" />
                        </Link>
                        <ul className="dropdown-menu dropdown-w-sm dropdown-menu-end min-w-auto shadow rounded" aria-labelledby="dropdownShare4">
                          <li>
                            <div className="d-flex justify-content-between">
                              <span className="small">Commission</span>
                              <span className="h6 mb-0 small">$86</span>
                            </div>
                            <hr className="my-1" />
                          </li>
                          {/* Divider */}
                          <li>
                            <div className="d-flex justify-content-between">
                              <span className="me-4 small">Us royalty withholding</span>
                              <span className="text-danger small">-$0.00</span>
                            </div>
                            <hr className="my-1" />
                          </li>
                          <li>
                            <div className="d-flex justify-content-between">
                              <span className="small">Earning</span>
                              <span className="h6 mb-0 small">$86</span>
                            </div>
                          </li>
                        </ul>
                      </td>
                      {/* Table data */}
                      <td className="text-center text-sm-start">
                        <span className="badge bg-orange bg-opacity-10 text-orange">Pending</span>
                      </td>
                      {/* Table data */}
                      <td>12/1/2023</td>
                    </tr>
                  </tbody>
                  {/* Table body END */}
                </table>
              </div>
              {/* Payout list table END */}
              {/* Pagination START */}
              <div className="d-sm-flex justify-content-sm-between align-items-sm-center mt-4 mt-sm-3">
                {/* Content */}
                <p className="mb-0 text-center text-sm-start">Showing 1 to 8 of 20 entries</p>
                {/* Pagination */}
                <nav className="d-flex justify-content-center mb-0" aria-label="navigation">
                  <ul className="pagination pagination-sm pagination-primary-soft d-inline-block d-md-flex rounded mb-0">
                    <li className="page-item mb-0"><Link className="page-link" href="#" tabIndex={-1}><i className="fas fa-angle-left" /></Link></li>
                    <li className="page-item mb-0"><Link className="page-link" href="#">1</Link></li>
                    <li className="page-item mb-0 active"><Link className="page-link" href="#">2</Link></li>
                    <li className="page-item mb-0"><Link className="page-link" href="#">3</Link></li>
                    <li className="page-item mb-0"><Link className="page-link" href="#"><i className="fas fa-angle-right" /></Link></li>
                  </ul>
                </nav>
              </div>
              {/* Pagination END */}
            </div>
            {/* Card body START */}
          </div>
          {/* Payout END */}
        </div>
        {/* Main content END */}
      </div>{/* Row END */}
    </div>
  </section>
  {/* =======================
    Page content END */}
</main>
<IFooter/>
{/* Add course modal START */}
<div className="modal fade" id="addQuiz" tabIndex={-1} aria-labelledby="addQuizLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header bg-dark">
        <h5 className="modal-title text-white" id="addQuizLabel">Add New Quiz</h5>
        <button type="button" className="btn btn-sm btn-light mb-0 ms-auto" data-bs-dismiss="modal" aria-label="Close"><i className="bi bi-x-lg" /></button>
      </div>
      <div className="modal-body">
        <form className="row text-start g-3">
          {/* Question */}
          <div className="col-12">
            <label className="form-label">Question</label>
            <input className="form-control" type="text" placeholder="Write a question" />
          </div>
          {/* Answer options START */}
          <div className="col-6">
            <label className="form-label">Option 1</label>
            <input className="form-control" type="text" placeholder="Write a option" />
          </div>
          <div className="col-6">
            <label className="form-label">Option 2</label>
            <input className="form-control" type="text" placeholder="Write a option" />
          </div>
          <div className="col-6">
            <label className="form-label">Option 3</label>
            <input className="form-control" type="text" placeholder="Write a option" />
          </div>
          <div className="col-6">
            <label className="form-label">Option 4</label>
            <input className="form-control" type="text" placeholder="Write a option" />
          </div>
          {/* Answer options END */}
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-danger-soft my-0" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-success my-0">Add Quiz</button>
      </div>
    </div>
  </div>
</div>
{/* Add course modal START */}

    </div>
  )
}

export default Instructor_PayOuts
