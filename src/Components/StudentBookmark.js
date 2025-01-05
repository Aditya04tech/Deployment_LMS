import React from 'react'
import { Link } from 'react-router-dom'

function StudentBookmark() {
  return (
<div>
  {/* =======================
Page Banner START */}
  <section className="pt-0">
    <div className="container-fluid px-0">
      <div className="card bg-blue h-100px h-md-200px rounded-0" style={{background: 'url(assets/images/pattern/04.png) no-repeat center center', backgroundSize: 'cover'}}>
      </div>
    </div>
    <div className="container mt-n4">
      <div className="row">
        <div className="col-12">
          <div className="card bg-transparent card-body pb-0 px-0 mt-2 mt-sm-0">
            <div className="row d-sm-flex justify-sm-content-between mt-2 mt-md-0">
              {/* Avatar */}
              <div className="col-auto">
                <div className="avatar avatar-xxl position-relative mt-n3">
                  <img className="avatar-img rounded-circle border border-white border-3 shadow" src="assets/images/avatar/09.jpg" alt />
                  <span className="badge text-bg-success rounded-pill position-absolute top-50 start-100 translate-middle mt-4 mt-md-5 ms-n3 px-md-3">Pro</span>
                </div>
              </div>
              {/* Profile info */}
              <div className="col d-sm-flex justify-content-between align-items-center">
                <div>
                  <h1 className="my-1 fs-4">Lori Stevens</h1>
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item me-3 mb-1 mb-sm-0">
                      <span className="h6">255</span>
                      <span className="text-body fw-light"> points</span>
                    </li>
                    <li className="list-inline-item me-3 mb-1 mb-sm-0">
                      <span className="h6">7</span>
                      <span className="text-body fw-light"> Completed courses</span>
                    </li>
                    <li className="list-inline-item me-3 mb-1 mb-sm-0">
                      <span className="h6">52</span>
                      <span className="text-body fw-light"> Completed lessons</span>
                    </li>
                  </ul>
                </div>
                {/* Button */}
                <div className="mt-2 mt-sm-0">
                  <Link to="/studentlist" className="btn btn-outline-primary mb-0">View my courses</Link>
                </div>
              </div>
            </div>
          </div>
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
              <div className="bg-dark border rounded-3 p-3 w-100">
                {/* Dashboard menu */}
                <div className="list-group list-group-dark list-group-borderless collapse-list">
                  <Link className="list-group-item"to="/studentdashboard"><i className="bi bi-ui-checks-grid fa-fw me-2" />Dashboard</Link>
                  <Link className="list-group-item" to="/studentsubscription"><i className="bi bi-card-checklist fa-fw me-2" />My Subscriptions</Link>
                  <Link className="list-group-item" to="/studentlist"><i className="bi bi-basket fa-fw me-2" />My Courses</Link>
                  <Link className="list-group-item" to="/studentresume"><i className="far fa-fw fa-file-alt me-2" />Course Resume</Link>
                  <Link className="list-group-item" to="/studentquiz"><i className="bi bi-question-diamond fa-fw me-2" />Quiz</Link>
                  <Link className="list-group-item" to="/studentpaymentinfo"><i className="bi bi-credit-card-2-front fa-fw me-2" />Payment Info</Link>
                  <Link className="list-group-item active" to="/studentbookmark"><i className="bi bi-cart-check fa-fw me-2" />Wishlist</Link>
                  <Link className="list-group-item" to="/studenteditprofile"><i className="bi bi-pencil-square fa-fw me-2" />Edit Profile</Link>
                  <Link className="list-group-item" to="/studentsetting"><i className="bi bi-gear fa-fw me-2" />Settings</Link>
                  <Link className="list-group-item"  to="/studentdeleteaccount"><i className="bi bi-trash fa-fw me-2" />Delete Profile</Link>
                  <Link className="list-group-item text-danger bg-danger-soft-hover" to="/signout"><i className="fas fa-sign-out-alt fa-fw me-2" />Sign Out</Link>
                  {/* Collapse menu */}
                  <Link className="list-group-item" data-bs-toggle="collapse" href="#collapseauthentication" role="button" aria-expanded="false" aria-controls="collapseauthentication">
                    <i className="bi bi-lock fa-fw me-2" />Dropdown level
                  </Link>
                  {/* Submenu */}
                  <ul className="nav collapse flex-column" id="collapseauthentication" data-bs-parent="#navbar-sidebar">
                    <li className="nav-item"> <a className="nav-link" href="#">Dropdown item</a></li>
                    <li className="nav-item"> <a className="nav-link" href="#">Dropdown item</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Responsive offcanvas body END */}
        </div>
        {/* Left sidebar END */}
        {/* Main content START */}
        <div className="col-xl-9">
          <div className="card bg-transparent border rounded-3">
            {/* Card header START */}
            <div className="card-header bg-transparent border-bottom">
              <h3 className="mb-0">WishList</h3>
            </div>
            {/* Card header END */}
            {/* Card body START */}
            <div className="card-body p-3 p-md-4">
              <div className="row g-4">
                {/* Card item START */}
                <div className="col-sm-6 col-lg-4">
                  <div className="card shadow h-100">
                    {/* Image */}
                    <img src="assets/images/courses/4by3/02.jpg" className="card-img-top" alt="course image" />
                    <div className="card-body pb-0">
                      {/* Badge and favorite */}
                      <div className="d-flex justify-content-between mb-2">
                        <a href="#" className="badge bg-success bg-opacity-10 text-success">Beginner</a>
                        <a href="#" className="text-danger"><i className="fas fa-heart" /></a>
                      </div>
                      {/* Title */}
                      <h5 className="card-title fw-normal"><a href="#">Graphic Design Masterclass</a></h5>
                      <p className="mb-2 text-truncate-2">Rooms oh fully taken by worse do Points afraid but may end Rooms
                        Points afraid but may end Rooms</p>
                      {/* Rating star */}
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                        <li className="list-inline-item me-0 small"><i className="fas fa-star-half-alt text-warning" /></li>
                        <li className="list-inline-item ms-2 h6 fw-light mb-0">4.5/5.0</li>
                      </ul>
                    </div>
                    {/* Card footer */}
                    <div className="card-footer pt-0 pb-3">
                      <hr />
                      <div className="d-flex justify-content-between">
                        <span className="h6 fw-light mb-0"><i className="far fa-clock text-danger me-2" />9h 56m</span>
                        <span className="h6 fw-light mb-0"><i className="fas fa-table text-orange me-2" />65 lectures</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Card item END */}
                {/* Card item START */}
                <div className="col-sm-6 col-lg-4">
                  <div className="card shadow h-100">
                    {/* Image */}
                    <img src="assets/images/courses/4by3/07.jpg" className="card-img-top" alt="course image" />
                    <div className="card-body pb-0">
                      {/* Badge and favorite */}
                      <div className="d-flex justify-content-between mb-2">
                        <a href="#" className="badge bg-success bg-opacity-10 text-success">Beginner</a>
                        <a href="#" className="text-danger"><i className="fas fa-heart" /></a>
                      </div>
                      {/* Title */}
                      <h5 className="card-title fw-normal"><a href="#">Deep Learning with React-Native </a></h5>
                      <p className="mb-2 text-truncate-2">Far advanced settling say finished raillery. Offered chiefly farther.</p>
                      {/* Rating star */}
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                        <li className="list-inline-item me-0 small"><i className="far fa-star text-warning" /></li>
                        <li className="list-inline-item ms-2 h6 fw-light mb-0">4.0/5.0</li>
                      </ul>
                    </div>
                    {/* Card footer */}
                    <div className="card-footer pt-0 pb-3">
                      <hr />
                      <div className="d-flex justify-content-between">
                        <span className="h6 fw-light mb-0"><i className="far fa-clock text-danger me-2" />18h 56m</span>
                        <span className="h6 fw-light mb-0"><i className="fas fa-table text-orange me-2" />99 lectures</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Card item END */}
                {/* Card item START */}
                <div className="col-sm-6 col-lg-4">
                  <div className="card shadow h-100">
                    {/* Image */}
                    <img src="assets/images/courses/4by3/11.jpg" className="card-img-top" alt="course image" />
                    <div className="card-body pb-0">
                      {/* Badge and favorite */}
                      <div className="d-flex justify-content-between mb-2">
                        <a href="#" className="badge bg-purple bg-opacity-10 text-purple">All level</a>
                        <a href="#" className="text-danger"><i className="fas fa-heart" /></a>
                      </div>
                      {/* Title */}
                      <h5 className="card-title fw-normal"><a href="#">Build Responsive Websites with HTML</a></h5>
                      <p className="mb-2 text-truncate-2">Far advanced settling say finished raillery. Offered chiefly farther.</p>
                      {/* Rating star */}
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                        <li className="list-inline-item me-0 small"><i className="far fa-star text-warning" /></li>
                        <li className="list-inline-item ms-2 h6 fw-light mb-0">4.0/5.0</li>
                      </ul>
                    </div>
                    {/* Card footer */}
                    <div className="card-footer pt-0 pb-3">
                      <hr />
                      <div className="d-flex justify-content-between">
                        <span className="h6 fw-light mb-0"><i className="far fa-clock text-danger me-2" />15h 30m</span>
                        <span className="h6 fw-light mb-0"><i className="fas fa-table text-orange me-2" />68 lectures</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Card item END */}
                {/* Card item START */}
                <div className="col-sm-6 col-lg-4">
                  <div className="card shadow h-100">
                    {/* Image */}
                    <img src="assets/images/courses/4by3/10.jpg" className="card-img-top" alt="course image" />
                    <div className="card-body pb-0">
                      {/* Badge and favorite */}
                      <div className="d-flex justify-content-between mb-2">
                        <a href="#" className="badge bg-info bg-opacity-10 text-info">Intermediate</a>
                        <a href="#" className="text-danger"><i className="fas fa-heart" /></a>
                      </div>
                      {/* Title */}
                      <h5 className="card-title fw-normal"><a href="#">Bootstrap 5 From Scratch</a></h5>
                      <p className="text-truncate-2 mb-2">Far advanced settling say finished raillery. Offered chiefly farther.</p>
                      {/* Rating star */}
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                        <li className="list-inline-item me-0 small"><i className="fas fa-star-half-alt text-warning" /></li>
                        <li className="list-inline-item ms-2 h6 fw-light mb-0">4.5/5.0</li>
                      </ul>
                    </div>
                    {/* Card footer */}
                    <div className="card-footer pt-0 pb-3">
                      <hr />
                      <div className="d-flex justify-content-between">
                        <span className="h6 fw-light mb-0"><i className="far fa-clock text-danger me-2" />25h 56m</span>
                        <span className="h6 fw-light mb-0"><i className="fas fa-table text-orange me-2" />38 lectures</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Card item END */}
                {/* Card item START */}
                <div className="col-sm-6 col-lg-4">
                  <div className="card shadow h-100">
                    {/* Image */}
                    <img src="assets/images/courses/4by3/04.jpg" className="card-img-top" alt="course image" />
                    <div className="card-body pb-0">
                      {/* Badge and favorite */}
                      <div className="d-flex justify-content-between mb-2">
                        <a href="#" className="badge bg-purple bg-opacity-10 text-purple">All level</a>
                        <a href="#" className="text-danger"><i className="fas fa-heart" /></a>
                      </div>
                      {/* Title */}
                      <h5 className="card-title fw-normal"><a href="#">Learn Invision</a></h5>
                      <p className="mb-2">Arrived off she elderly beloved him Course regard to up he hardly.</p>
                      {/* Rating star */}
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                        <li className="list-inline-item me-0 small"><i className="fas fa-star-half-alt text-warning" /></li>
                        <li className="list-inline-item me-0 small"><i className="far fa-star text-warning" /></li>
                        <li className="list-inline-item ms-2 h6 fw-light mb-0">3.5/5.0</li>
                      </ul>
                    </div>
                    {/* Card footer */}
                    <div className="card-footer pt-0 pb-3">
                      <hr />
                      <div className="d-flex justify-content-between mt-2">
                        <span className="h6 fw-light mb-0"><i className="far fa-clock text-danger me-2" />6h 56m</span>
                        <span className="h6 fw-light mb-0"><i className="fas fa-table text-orange me-2" />82 lectures</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Card item END */}
                {/* Card item START */}
                <div className="col-sm-6 col-lg-4">
                  <div className="card shadow h-100">
                    {/* Image */}
                    <img src="assets/images/courses/4by3/01.jpg" className="card-img-top" alt="course image" />
                    <div className="card-body pb-0">
                      {/* Badge and favorite */}
                      <div className="d-flex justify-content-between mb-2">
                        <a href="#" className="badge bg-success bg-opacity-10 text-success">Beginner</a>
                        <a href="#" className="text-danger"><i className="fas fa-heart" /></a>
                      </div>
                      {/* Title */}
                      <h5 className="card-title fw-normal"><a href="#">Digital Marketing Masterclass</a></h5>
                      <p className="text-truncate-2 mb-2">Delivered dejection necessary objection do Mr prevailed.</p>
                      {/* Rating star */}
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                        <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                        <li className="list-inline-item me-0 small"><i className="fas fa-star-half-alt text-warning" /></li>
                        <li className="list-inline-item ms-2 h6 fw-light mb-0">4.5/5.0</li>
                      </ul>
                    </div>
                    {/* Card footer */}
                    <div className="card-footer pt-0 pb-3">
                      <hr />
                      <div className="d-flex justify-content-between">
                        <span className="h6 fw-light mb-0"><i className="far fa-clock text-danger me-2" />6h 56m</span>
                        <span className="h6 fw-light mb-0"><i className="fas fa-table text-orange me-2" />82 lectures</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Card item END */}
              </div>
            </div>
            {/* Card body EMD */}
          </div>  
        </div>
        {/* Main content END */}
      </div> {/* Row END */} 
    </div>	
  </section>
  {/* =======================
Page content END */}
</div>

  )
}

export default StudentBookmark
