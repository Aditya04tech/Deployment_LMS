import React from 'react';
import { Link } from 'react-router-dom'
import IFooter from "./IFooter"
const Instructor_Reviews = () => {
  return (
    <div>
     <main>
  {/* =======================
    Main Banner START */}
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
    Main Banner END */}
  {/* =======================
    Inner part START */}
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
                  <Link className="list-group-item" to="/instrctororder"><i className="bi bi-folder-check fa-fw me-2" />Orders</Link>
                  <Link className="list-group-item active" to="/instructorreviews"><i className="bi bi-star fa-fw me-2" />Reviews</Link>
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
          {/* Student review START */}
          <div className="card border bg-transparent rounded-3">
            {/* Header START */}
            <div className="card-header bg-transparent border-bottom">
              <div className="row justify-content-between align-middle">
                {/* Title */}
                <div className="col-sm-6">
                  <h3 className="card-header-title mb-2 mb-sm-0">Student review</h3>
                </div>
                {/* Short by filter */}
                <div className="col-sm-4">
                  <form>
                    <select className="form-select js-choice z-index-9 bg-white" aria-label=".form-select-sm">
                      <option value>Sort by</option>
                      <option>★★★★★ (5/5)</option>
                      <option>★★★★☆ (4/5)</option>
                      <option>★★★☆☆ (3/5)</option>
                      <option>★★☆☆☆ (2/5)</option>
                      <option>★☆☆☆☆ (1/5)</option>
                    </select>
                  </form>
                </div>
              </div>
            </div>
            {/* Header END */}
            {/* Reviews START */}
            <div className="card-body mt-2 mt-sm-4">
              {/* Review item START */}
              <div className="d-sm-flex">
                {/* Avatar image */}
                <img className="avatar avatar-lg rounded-circle float-start me-3" src="assets/images/avatar/01.jpg" alt="avatar" />
                <div>
                  <div className="mb-3 d-sm-flex justify-content-sm-between align-items-center">
                    {/* Title */}
                    <div>
                      <h5 className="m-0">Frances Guerrero</h5>
                      <span className="me-3 small">June 11, 2021 at 6:01 am </span>
                    </div>
                    {/* Review star */}
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item me-0"><i className="fas fa-star text-warning" /></li>
                      <li className="list-inline-item me-0"><i className="fas fa-star text-warning" /></li>
                      <li className="list-inline-item me-0"><i className="fas fa-star text-warning" /></li>
                      <li className="list-inline-item me-0"><i className="fas fa-star text-warning" /></li>
                      <li className="list-inline-item me-0"><i className="far fa-star text-warning" /></li>
                    </ul>	
                  </div>
                  {/* Content */}
                  <h6><span className="text-body fw-light">Review on:</span> How to implement sitemap on sass</h6>
                  <p>Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do. </p>
                  {/* Button */}
                  <div className="text-end">
                    <Link to="#" className="btn btn-sm btn-primary-soft mb-1 mb-sm-0">Direct message</Link>
                    <Link className="btn btn-sm btn-light mb-0" data-bs-toggle="collapse" href="#collapseComment" role="button" aria-expanded="false" aria-controls="collapseComment">
                      Reply
                    </Link>
                    {/* collapse textarea */}
                    <div className="collapse show" id="collapseComment">
                      <div className="d-flex mt-3">
                        <textareLink className="form-control mb-0" placeholder="Add a comment..." rows={2} spellCheck="false" defaultValue={""} />
                        <button className="btn btn-sm btn-primary-soft ms-2 px-4 mb-0 flex-shrink-0"><i className="fas fa-paper-plane fs-5" /></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Divider */}
              <hr />
              {/* Review item END */}
              {/* Review item START */}
              <div className="d-sm-flex">
                {/* Avatar image */}
                <img className="avatar avatar-lg rounded-circle float-start me-3" src="assets/images/avatar/03.jpg" alt="avatar" />
                <div>
                  <div className="mb-3 d-sm-flex justify-content-sm-between align-items-center">
                    {/* Title */}
                    <div>
                      <h5 className="m-0">Louis Ferguson</h5>
                      <span className="me-3 small">June 18, 2021 at 11:55 am</span>
                    </div>
                    {/* Review star */}
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                      <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                      <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                      <li className="list-inline-item me-0 small"><i className="fas fa-star-half-alt text-warning" /></li>
                      <li className="list-inline-item me-0 small"><i className="far fa-star text-warning" /></li>
                    </ul>
                  </div>
                  {/* Content */}
                  <h6><span className="text-body fw-light">Review on:</span> How does an Angular application work?</h6>
                  <p>Far advanced settling say finished raillery. Offered chiefly farther Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do. </p>
                  {/* Button */}
                  <div className="text-end">
                    <Link to="#" className="btn btn-sm btn-primary-soft mb-0">Direct message</Link>
                    <Link to="#" className="btn btn-sm btn-light mb-0">Reply</Link>
                  </div>
                </div>
              </div>
              {/* Divider */}
              <hr />
              {/* Review item END */}
              {/* Review item START */}
              <div className="d-sm-flex">
                {/* Avatar image */}
                <img className="avatar avatar-lg rounded-circle float-start me-3" src="assets/images/avatar/05.jpg" alt="avatar" />
                <div>
                  <div className="mb-3 d-sm-flex justify-content-sm-between align-items-center">
                    {/* Title */}
                    <div>
                      <h5 className="m-0">Carolyn Ortiz</h5>
                      <span className="me-3 small">August 28, 2021 at 3:08 pm</span>
                    </div>
                    {/* Review star */}
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                      <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                      <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                      <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                      <li className="list-inline-item me-0 small"><i className="far fa-star text-warning" /></li>
                    </ul>
                  </div>
                  {/* Content */}
                  <h6><span className="text-body fw-light">Review on:</span> What is Flexbox and describe any elaborate on its most used properties??</h6>
                  <p>Offered chiefly farther Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do. </p>
                  {/* Button */}
                  <div className="text-end">
                    <Link to="#" className="btn btn-sm btn-primary-soft mb-0">Direct message</Link>
                    <Link to="#" className="btn btn-sm btn-light mb-0">Reply</Link>
                  </div>
                </div>
              </div>
              {/* Divider */}
              <hr />
              {/* Review item END */}
              {/* Review item START */}
              <div className="d-sm-flex">
                {/* Avatar image */}
                <img className="avatar avatar-lg rounded-circle float-start me-3" src="assets/images/avatar/08.jpg" alt="avatar" />
                <div>
                  <div className="mb-3 d-sm-flex justify-content-sm-between align-items-center">
                    {/* Title */}
                    <div>
                      <h5 className="m-0">Dennis Barrett</h5>
                      <span className="me-3 small">August 29, 2021 at 5:35 pm</span>
                    </div>
                    {/* Review star */}
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                      <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                      <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                      <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                      <li className="list-inline-item me-0 small"><i className="far fa-star text-warning" /></li>
                    </ul>
                  </div>
                  {/* Content */}
                  <h6><span className="text-body fw-light">Review on:</span> What are the different data types present in javascript?</h6>
                  <p>Chiefly farther Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do. </p>
                  {/* Button */}
                  <div className="text-end">
                    <Link to="#" className="btn btn-sm btn-primary-soft mb-0">Direct message</Link>
                    <Link to="#" className="btn btn-sm btn-light mb-0">Reply</Link>
                  </div>
                </div>
              </div>
              {/* Divider */}
              <hr />
              {/* Review item END */}
              {/* Review item START */}
              <div className="d-sm-flex">
                {/* Avatar image */}
                <img className="avatar avatar-lg rounded-circle float-start me-3" src="assets/images/avatar/09.jpg" alt="avatar" />
                <div>
                  <div className="mb-3 d-sm-flex justify-content-sm-between align-items-center">
                    {/* Title */}
                    <div>
                      <h5 className="m-0">Carolyn Ortiz</h5>
                      <span className="me-3 small">September 15, 2021 at 8:28 am</span>
                    </div>
                    {/* Review star */}
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                      <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                      <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                      <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                      <li className="list-inline-item me-0 small"><i className="far fa-star text-warning" /></li>
                    </ul>
                  </div>
                  {/* Content */}
                  <h6><span className="text-body fw-light">Review on:</span> What are object prototypes?</h6>
                  <p>Chiefly farther Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do. </p>
                  {/* Button */}
                  <div className="text-end">
                    <Link to="#" className="btn btn-sm btn-primary-soft mb-0">Direct message</Link>
                    <Link to="#" className="btn btn-sm btn-light mb-0">Reply</Link>
                  </div>
                </div>
              </div>
              {/* Review item END */}
            </div>
            {/* Reviews END */}
            <div className="card-footer border-top">
              {/* Pagination START */}
              <div className="d-sm-flex justify-content-sm-between align-items-sm-center">
                {/* Content */}
                <p className="mb-0 text-center text-sm-start">Showing 1 to 8 of 20 entries</p>
                {/* Pagination */}
                <nav className="d-flex justify-content-center mb-0" aria-label="navigation">
                  <ul className="pagination pagination-sm pagination-primary-soft my-0 py-0">
                    <li className="page-item my-0"><Link className="page-link" href="#" tabIndex={-1}><i className="fas fa-angle-left" /></Link></li>
                    <li className="page-item my-0"><Link className="page-link" href="#">1</Link></li>
                    <li className="page-item my-0 active"><Link className="page-link" href="#">2</Link></li>
                    <li className="page-item my-0"><Link className="page-link" href="#">3</Link></li>
                    <li className="page-item my-0"><Link className="page-link" href="#"><i className="fas fa-angle-right" /></Link></li>
                  </ul>
                </nav>
              </div>
              {/* Pagination END */}
            </div>
          </div>
          {/* Student review END */}
        </div>
        {/* Main content END */}
      </div>{/* Row END */}
    </div>
  </section>
  {/* =======================
    Inner part END */}
</main>
<IFooter/>  
    </div>
  )
}

export default Instructor_Reviews
