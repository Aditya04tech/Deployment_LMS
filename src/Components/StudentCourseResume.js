import React from 'react'
import { Link } from 'react-router-dom'
function StudentCourseResume() {
  return (
    <div>
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
                  <img className="avatar-img rounded-circle border border-white border-3 shadow" src="assets/images/avatar/09.jpg" alt="" />
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
              <div className="bg-dark border rounded-3 p-3 w-100">
                {/* Dashboard menu */}
                <div className="list-group list-group-dark list-group-borderless collapse-list">
                  <Link className="list-group-item" to="/studentdashboard"><i className="bi bi-ui-checks-grid fa-fw me-2" />Dashboard</Link>
                  <Link className="list-group-item" to="/studentsubscription"><i className="bi bi-card-checklist fa-fw me-2" />My Subscriptions</Link>
                  <Link className="list-group-item" to="/studentlist"><i className="bi bi-basket fa-fw me-2" />My Courses</Link>
                  <Link className="list-group-item active" to="/studentresume"><i className="far fa-fw fa-file-alt me-2" />Course Resume</Link>
                  <Link className="list-group-item" to="/studentquiz"><i className="bi bi-question-diamond fa-fw me-2" />Quiz</Link>
                  <Link className="list-group-item" to="/studentpaymentinfo"><i className="bi bi-credit-card-2-front fa-fw me-2" />Payment Info</Link>
                  <Link className="list-group-item" to="/studentbookmark"><i className="bi bi-cart-check fa-fw me-2" />Wishlist</Link>
                  <Link className="list-group-item" to="/studenteditprofile"><i className="bi bi-pencil-square fa-fw me-2" />Edit Profile</Link>
                  {/* <Link className="list-group-item" to="/studentpayout"><i className="bi bi-pencil-square fa-fw me-2" />Payout</Link>  */}
                  <Link className="list-group-item" to="/studentsetting"><i className="bi bi-gear fa-fw me-2" />Settings</Link>
                  <Link className="list-group-item" to="/studentdeleteaccount"><i className="bi bi-trash fa-fw me-2" />Delete Profile</Link>
                  <Link className="list-group-item text-danger bg-danger-soft-hover" to="/signout"><i className="fas fa-sign-out-alt fa-fw me-2" />Sign Out</Link>
                  {/* Collapse menu */}
                  <Link className="list-group-item" data-bs-toggle="collapse" href="#collapseauthentication" role="button" aria-expanded="false" aria-controls="collapseauthentication">
                    <i className="bi bi-lock fa-fw me-2" />Dropdown level
                  </Link>
                  {/* Submenu */}
                  <ul className="nav collapse flex-column" id="collapseauthentication" data-bs-parent="#navbar-sidebar">
                    <li className="nav-item"> <Link className="nav-link" to="#">Dropdown item</Link></li>
                    <li className="nav-item"> <Link className="nav-link" to="#">Dropdown item</Link></li>
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
          {/* Course item START */}
          <div className="card border">
            <div className="card-header border-bottom">
              {/* Card START */}
              <div className="card">
                <div className="row g-0">
                  <div className="col-md-3">
                    <img src="assets/images/courses/4by3/01.jpg" className="rounded-2" alt="" />
                  </div>
                  <div className="col-md-9">
                    <div className="card-body">
                      {/* Title */}
                      <h3 className="card-title"><Link to="#">The Complete Digital Marketing Course - 12 Courses in 1</Link></h3>
                      {/* Info */}
                      <ul className="list-inline mb-2">
                        <li className="list-inline-item h6 fw-light mb-1 mb-sm-0"><i className="far fa-clock text-danger me-2" />6h 56m</li>
                        <li className="list-inline-item h6 fw-light mb-1 mb-sm-0"><i className="fas fa-table text-orange me-2" />82 lectures</li>
                        <li className="list-inline-item h6 fw-light"><i className="fas fa-signal text-success me-2" />Beginner</li>
                      </ul>
                      {/* button */}
                      <Link to="#" className="btn btn-primary-soft btn-sm mb-0">Resume course</Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card END */}
            </div>
            <div className="card-body">
              {/* Title */}
              <h5>Course Curriculum</h5>
              {/* Accordion START */}
              <div className="accordion accordion-icon accordion-bg-light" id="accordionExample2">
                {/* Item */}
                <div className="accordion-item mb-3">
                  <h6 className="accordion-header font-base" id="heading-1">
                    <Link className="accordion-button fw-bold rounded collapsed d-block pe-4" href="#collapse-1" data-bs-toggle="collapse" data-bs-target="#collapse-1" aria-expanded="true" aria-controls="collapse-1">
                      <span className="mb-0">Introduction of Digital Marketing</span> 
                      <span className="small d-block mt-1">(3 Lectures)</span> 
                    </Link>
                  </h6>
                  <div id="collapse-1" className="accordion-collapse collapse show" aria-labelledby="heading-1" data-bs-parent="#accordionExample2">
                    <div className="accordion-body mt-3">
                      <div className="vstack gap-3">
                        {/* Progress bar */}
                        <div className="overflow-hidden">
                          <div className="d-flex justify-content-between">
                            <p className="mb-1 h6">1/2 Completed</p>
                            <h6 className="mb-1 text-end">80%</h6>
                          </div>
                          <div className="progress progress-sm bg-primary bg-opacity-10">
                            <div className="progress-bar bg-primary aos" role="progressbar" data-aos="slide-right" data-aos-delay={200} data-aos-duration={1000} data-aos-easing="ease-in-out" style={{width: '80%'}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}>
                            </div>
                          </div>
                        </div>
                        {/* Course lecture */}
                        <div>
                          <div className="d-flex justify-content-between align-items-center mb-2">
                            <div className="position-relative d-flex align-items-center">
                              <Link to="#" className="btn btn-success btn-round btn-sm mb-0 stretched-link position-static">
                                <i className="fas fa-play me-0" />
                              </Link>
                              <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-150px w-sm-200px">Introduction</span>
                            </div>
                            <p className="mb-0 text-truncate">2m 10s</p>
                          </div>
                          {/* Add note button */}
                          <Link className="btn btn-xs btn-warning mb-0" data-bs-toggle="collapse" href="#addnote-1" role="button" aria-expanded="false" aria-controls="addnote-1">
                            <i className="bi fa-fw bi-pencil-square me-2" />Note
                          </Link>&nbsp;
                          <Link to="#" className="btn btn-xs btn-dark mb-0">Play again</Link>
                          {/* Notes START */}
                          <div className="collapse" id="addnote-1">
                            <div className="card card-body p-0 mt-2">
                              {/* Note item */}
                              <div className="d-flex justify-content-between bg-light rounded-2 p-2 mb-2">
                                {/* Content */}
                                <div className="d-flex align-items-center">
                                  <span className="badge bg-dark me-2">5:20</span>
                                  <h6 className="d-inline-block text-truncate w-100px w-sm-200px mb-0 fw-light">Describe SEO Engine</h6>
                                </div>
                                {/* Button */}
                                <div className="d-flex">
                                  <Link to="#" className="btn btn-sm btn-light btn-round me-2 mb-0"><i className="bi fa-fw bi-play-fill" /></Link>
                                  <Link to="#" className="btn btn-sm btn-light btn-round mb-0"><i className="bi fa-fw bi-trash-fill" /></Link>
                                </div>
                              </div>
                              {/* Note item */}
                              <div className="d-flex justify-content-between bg-light rounded-2 p-2 mb-2">
                                {/* Content */}
                                <div className="d-flex align-items-center">
                                  <span className="badge bg-dark me-2">10:20</span>
                                  <h6 className="d-inline-block text-truncate w-100px w-sm-200px mb-0 fw-light">Know about all marketing</h6>
                                </div>
                                {/* Button */}
                                <div className="d-flex">
                                  <Link to="#" className="btn btn-sm btn-light btn-round me-2 mb-0"><i className="bi fa-fw bi-play-fill" /></Link>
                                  <Link to="#" className="btn btn-sm btn-light btn-round mb-0"><i className="bi fa-fw bi-trash-fill" /></Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Notes END */}
                          <hr className="mb-0" />
                        </div>	
                        {/* Course lecture */}
                        <div>
                          <div className="d-flex justify-content-between align-items-center mb-2">
                            <div className="position-relative d-flex align-items-center">
                              <Link to="#" className="btn btn-success btn-round btn-sm mb-0 stretched-link position-static">
                                <i className="fas fa-play me-0" />
                              </Link>
                              <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-150px w-sm-400px"> What is Digital Marketing What is Digital Marketing</span>
                            </div>
                            <p className="mb-0 text-truncate">15m 10s</p>
                          </div>
                          {/* Add note button */}
                          <Link className="btn btn-xs btn-warning mb-0" data-bs-toggle="collapse" href="#addnote-2" role="button" aria-expanded="false" aria-controls="addnote-2">
                            <i className="bi fa-fw bi-pencil-square me-2" />Note
                          </Link>&nbsp;
                          <Link to="#" className="btn btn-xs btn-dark mb-0">Play again</Link>
                          {/* Notes START */}
                          <div className="collapse" id="addnote-2">
                            <div className="card card-body p-0 mt-2">
                              {/* Note item */}
                              <div className="d-flex justify-content-between bg-light rounded-2 p-2 mb-2">
                                {/* Content */}
                                <div className="d-flex align-items-center">
                                  <span className="badge bg-dark me-2">5:20</span>
                                  <h6 className="d-inline-block text-truncate w-100px w-sm-200px mb-0 fw-light">Describe SEO Engine</h6>
                                </div>
                                {/* Button */}
                                <div className="d-flex">
                                  <Link to="#" className="btn btn-sm btn-light btn-round me-2 mb-0"><i className="bi fa-fw bi-play-fill" /></Link>
                                  <Link to="#" className="btn btn-sm btn-light btn-round mb-0"><i className="bi fa-fw bi-trash-fill" /></Link>
                                </div>
                              </div>
                              {/* Note item */}
                              <div className="d-flex justify-content-between bg-light rounded-2 p-2 mb-2">
                                {/* Content */}
                                <div className="d-flex align-items-center">
                                  <span className="badge bg-dark me-2">10:20</span>
                                  <h6 className="d-inline-block text-truncate w-100px w-sm-200px mb-0 fw-light">Know about all marketing</h6>
                                </div>
                                {/* Button */}
                                <div className="d-flex">
                                  <Link to="#" className="btn btn-sm btn-light btn-round me-2 mb-0"><i className="bi fa-fw bi-play-fill" /></Link>
                                  <Link to="#" className="btn btn-sm btn-light btn-round mb-0"><i className="bi fa-fw bi-trash-fill" /></Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Notes END */}
                          <hr className="mb-0" />
                        </div>
                        {/* Course lecture */}
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="position-relative d-flex align-items-center">
                            <Link to="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                              <i className="fas fa-play me-0" />
                            </Link>
                            <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-150px w-sm-400px">Type of Digital Marketing</span>
                          </div>
                          <p className="mb-0 text-truncate">18m 10s</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Item */}
                <div className="accordion-item mb-3">
                  <h6 className="accordion-header font-base" id="heading-2">
                    <Link className="accordion-button fw-bold collapsed rounded d-block pe-4" href="#collapse-2" data-bs-toggle="collapse" data-bs-target="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
                      <span className="mb-0">Customer Life cycle</span> 
                      <span className="small d-block mt-1">(3 Lectures)</span> 
                    </Link>
                  </h6>
                  <div id="collapse-2" className="accordion-collapse collapse" aria-labelledby="heading-2" data-bs-parent="#accordionExample2">
                    {/* Accordion body START */}
                    <div className="accordion-body mt-3">
                      <div className="vstack gap-3">
                        {/* Progress bar */}
                        <div className="overflow-hidden">
                          <div className="d-flex justify-content-between">
                            <p className="mb-1 h6">0/3 Completed</p>
                            <h6 className="mb-1 text-end">0%</h6>
                          </div>
                          <div className="progress progress-sm bg-primary bg-opacity-10">
                            <div className="progress-bar bg-primary aos" role="progressbar" data-aos="slide-right" data-aos-delay={200} data-aos-duration={1000} data-aos-easing="ease-in-out" style={{width: '0%'}} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100}>
                            </div>
                          </div>
                        </div>
                        {/* Course lecture */}
                        <div>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="position-relative d-flex align-items-center">
                              <Link to="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                <i className="fas fa-play me-0" />
                              </Link>
                              <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-sm-400px">Introduction</span>
                            </div>
                            <p className="mb-0 text-truncate">2m 10s</p>
                          </div>
                          <hr className="mb-0" />
                        </div>
                        {/* Course lecture */}
                        <div>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="position-relative d-flex align-items-center">
                              <Link to="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                <i className="fas fa-play me-0" />
                              </Link>
                              <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-150px w-sm-400px"> What is Digital Marketing What is Digital Marketing</span>
                            </div>
                            <p className="mb-0 text-truncate">15m 10s</p>
                          </div>
                          <hr className="mb-0" />
                        </div>
                        {/* Course lecture */}
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="position-relative d-flex align-items-center">
                            <Link to="#" className="btn btn-light btn-round btn-sm mb-0 stretched-link position-static" data-bs-toggle="modal" data-bs-target="#coursePremium">
                              <i className="bi bi-lock-fill" />
                            </Link>
                            <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-150px w-sm-400px">Type of Digital Marketing</span>
                          </div>
                          <p className="mb-0 text-truncate">18m 10s</p>
                        </div>
                      </div>
                    </div>
                    {/* Accordion body END */}
                  </div>
                </div>
              </div>
              {/* Accordion END */}
            </div>
          </div>
          {/* Course item END */}
          {/* Course item START */}
          <div className="card border mt-4">
            <div className="card-header border-bottom">
              {/* Card START */}
              <div className="card">
                <div className="row g-0">
                  <div className="col-md-3">
                    <img src="assets/images/courses/4by3/08.jpg" className="rounded-2" alt="" />
                  </div>
                  <div className="col-md-9">
                    <div className="card-body">
                      {/* Title */}
                      <h3 className="card-title"><Link to="#">Sketch from A to Z: for app designer</Link></h3>
                      {/* Info */}
                      <ul className="list-inline mb-2">
                        <li className="list-inline-item h6 fw-light mb-1 mb-sm-0"><i className="far fa-clock text-danger me-2" />8h 56m</li>
                        <li className="list-inline-item h6 fw-light mb-1 mb-sm-0"><i className="fas fa-table text-orange me-2" />65 lectures</li>
                        <li className="list-inline-item h6 fw-light"><i className="fas fa-signal text-success me-2" />All level</li>
                      </ul>
                      {/* Button */}
                      <Link to="#" className="btn btn-primary-soft btn-sm mb-0">Resume course</Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card END */}
            </div>
            <div className="card-body">
              {/* Title */}
              <h5>Course Curriculum</h5>
              {/* Accordion START */}
              <div className="accordion accordion-icon accordion-bg-light" id="accordionExample4">
                {/* Item */}
                <div className="accordion-item mb-3">
                  <h6 className="accordion-header font-base" id="heading-1-1">
                    <Link className="accordion-button fw-bold rounded collapsed d-block pe-4" href="#collapse-1-1" data-bs-toggle="collapse" data-bs-target="#collapse-1-1" aria-expanded="false" aria-controls="collapse-1-1">
                      <span className="mb-0">Introduction of Sketch</span> 
                      <span className="small d-block mt-1">(3 Lectures)</span> 
                    </Link>
                  </h6>
                  <div id="collapse-1-1" className="accordion-collapse collapse" aria-labelledby="heading-1-1" data-bs-parent="#accordionExample4">
                    <div className="accordion-body mt-3">
                      <div className="vstack gap-3">
                        {/* Progress bar */}
                        <div className="overflow-hidden">
                          <div className="d-flex justify-content-between">
                            <p className="mb-1 h6">1/3 Completed</p>
                            <h6 className="mb-1 text-end">35%</h6>
                          </div>
                          <div className="progress progress-sm bg-primary bg-opacity-10">
                            <div className="progress-bar bg-primary aos" role="progressbar" data-aos="slide-right" data-aos-delay={200} data-aos-duration={1000} data-aos-easing="ease-in-out" style={{width: '35%'}} aria-valuenow={35} aria-valuemin={0} aria-valuemax={100}>
                            </div>
                          </div>
                        </div>
                        {/* Course lecture */}
                        <div>
                          <div className="d-flex justify-content-between align-items-center mb-2">
                            <div className="position-relative d-flex align-items-center">
                              <Link to="#" className="btn btn-success btn-round btn-sm mb-0 stretched-link position-static">
                                <i className="fas fa-play me-0" />
                              </Link>
                              <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-150px w-sm-400px">Introduction</span>
                            </div>
                            <p className="mb-0 text-truncate">2m 10s</p>
                          </div>
                          {/* Add note button */}
                          <Link className="btn btn-xs btn-warning mb-0" data-bs-toggle="collapse" href="#addnote-3" role="button" aria-expanded="false" aria-controls="addnote-3">
                            <i className="bi fa-fw bi-pencil-square me-2" />Note
                          </Link>&nbsp;&nbsp;&nbsp;
                          <Link to="#" className="btn btn-xs btn-dark mb-0">Play again</Link>
                          {/* Notes START */}
                          <div className="collapse" id="addnote-3">
                            <div className="card card-body p-0 mt-2">
                              {/* Note item */}
                              <div className="d-flex justify-content-between bg-light rounded-2 p-2 mb-2">
                                {/* Content */}
                                <div className="d-flex align-items-center">
                                  <span className="badge bg-dark me-2">5:20</span>
                                  <h6 className="d-inline-block text-truncate w-100px w-sm-400px mb-0 fw-light">Describe SEO Engine</h6>
                                </div>
                                {/* Button */}
                                <div className="d-flex">
                                  <Link to="#" className="btn btn-sm btn-light btn-round me-2 mb-0"><i className="bi fa-fw bi-play-fill" /></Link>
                                  <Link to="#" className="btn btn-sm btn-light btn-round mb-0"><i className="bi fa-fw bi-trash-fill" /></Link>
                                </div>
                              </div>
                              {/* Note item */}
                              <div className="d-flex justify-content-between bg-light rounded-2 p-2 mb-2">
                                {/* Content */}
                                <div className="d-flex align-items-center">
                                  <span className="badge bg-dark me-2">10:20</span>
                                  <h6 className="d-inline-block text-truncate w-100px w-sm-400px mb-0 fw-light">Know about all marketing</h6>
                                </div>
                                {/* Button */}
                                <div className="d-flex">
                                  <Link to="#" className="btn btn-sm btn-light btn-round me-2 mb-0"><i className="bi fa-fw bi-play-fill" /></Link>
                                  <Link to="#" className="btn btn-sm btn-light btn-round mb-0"><i className="bi fa-fw bi-trash-fill" /></Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Notes END */}
                          <hr className="mb-0" />
                        </div>	
                        {/* Course lecture */}
                        <div>
                          <div className="d-flex justify-content-between align-items-center mb-2">
                            <div className="position-relative d-flex align-items-center">
                              <Link to="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                <i className="fas fa-play me-0" />
                              </Link>
                              <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-150px w-sm-400px"> What is Digital Marketing What is Digital Marketing</span>
                            </div>
                            <p className="mb-0 text-truncate">15m 10s</p>
                          </div>
                          <hr className="mb-0" />
                        </div>
                        {/* Course lecture */}
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="position-relative d-flex align-items-center">
                            <Link to="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                              <i className="fas fa-play me-0" />
                            </Link>
                            <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-150px w-sm-400px">Type of Digital Marketing</span>
                          </div>
                          <p className="mb-0 text-truncate">18m 10s</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Item */}
                <div className="accordion-item mb-3">
                  <h6 className="accordion-header font-base" id="heading-1-4">
                    <Link className="accordion-button fw-bold collapsed rounded d-block pe-4" href="#collapse-1-4" data-bs-toggle="collapse" data-bs-target="#collapse-1-4" aria-expanded="false" aria-controls="collapse-1-4">
                      <span className="mb-0">YouTube Marketing</span> 
                      <span className="small d-block mt-1">(5 Lectures)</span>
                    </Link>
                  </h6>
                  <div id="collapse-1-4" className="accordion-collapse collapse" aria-labelledby="heading-1-4" data-bs-parent="#accordionExample4">
                    {/* Accordion body START */}
                    <div className="accordion-body mt-3">
                      <div className="vstack gap-3">
                        {/* Progress bar */}
                        <div className="overflow-hidden">
                          <div className="d-flex justify-content-between">
                            <p className="mb-1 h6">0/5 Completed</p>
                            <h6 className="mb-1 text-end">0%</h6>
                          </div>
                          <div className="progress progress-sm bg-primary bg-opacity-10">
                            <div className="progress-bar bg-primary aos" role="progressbar" data-aos="slide-right" data-aos-delay={200} data-aos-duration={1000} data-aos-easing="ease-in-out" style={{width: '0%'}} aria-valuenow={0} aria-valuemin={0} aria-valuemax={100}>
                            </div>
                          </div>
                        </div>
                        {/* Course lecture */}
                        <div>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="position-relative d-flex align-items-center">
                              <Link to="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                <i className="fas fa-play me-0" />
                              </Link>
                              <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-150px w-sm-400px">Video Flow</span>
                            </div>
                            <p className="mb-0 text-truncate">25m 5s</p>
                          </div>
                          <hr className="mb-0" />
                        </div>
                        {/* Course lecture */}
                        <div>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="position-relative d-flex align-items-center">
                              <Link to="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                <i className="fas fa-play me-0" />
                              </Link>
                              <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-150px w-sm-400px">Webmaster Tool</span>
                            </div>
                            <p className="mb-0 text-truncate">15m 20s</p>
                          </div>
                          <hr className="mb-0" />
                        </div>
                        {/* Course lecture */}
                        <div>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="position-relative d-flex align-items-center">
                              <Link to="#" className="btn btn-danger-soft btn-round btn-sm mb-0 stretched-link position-static">
                                <i className="fas fa-play me-0" />
                              </Link>
                              <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-150px w-sm-400px">Featured Contents on Channel</span>
                            </div>
                            <p className="mb-0 text-truncate">32m 20s</p>
                          </div>
                          <hr className="mb-0" />
                        </div>
                        {/* Course lecture */}
                        <div>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="position-relative d-flex align-items-center">
                              <Link to="#" className="btn btn-light btn-round btn-sm mb-0 stretched-link position-static" data-bs-toggle="modal" data-bs-target="#coursePremium">
                                <i className="bi bi-lock-fill" />
                              </Link>
                              <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-150px w-sm-400px">Managing Comments</span>
                            </div>
                            <p className="mb-0 text-truncate">20m 20s</p>
                          </div>
                          <hr className="mb-0" />
                        </div>
                        {/* Course lecture */}
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="position-relative d-flex align-items-center">
                            <Link to="#" className="btn btn-light btn-round btn-sm mb-0 stretched-link position-static" data-bs-toggle="modal" data-bs-target="#coursePremium">
                              <i className="bi bi-lock-fill" />
                            </Link>
                            <span className="d-inline-block text-truncate ms-2 mb-0 h6 fw-light w-150px w-sm-400px">Channel Analytics</span>
                          </div>
                          <p className="mb-0 text-truncate">18m 20s</p>
                        </div>
                      </div>
                    </div>
                    {/* Accordion body END */}
                  </div>	
                </div>
              </div>
              {/* Accordion END */}
            </div>
          </div>
          {/* Course item END */}
        </div>
        {/* Main content END */}
      </div> {/* Row END */}
    </div>	
  </section>
  {/* =======================
Page content END */}
</div>

    </div>
  )
}

export default StudentCourseResume
