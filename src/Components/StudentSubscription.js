import React from 'react'
import { Link } from 'react-router-dom'
const StudentSubscription = () => {
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
                  <Link className="list-group-item" to="/studentdashboard"><i className="bi bi-ui-checks-grid fa-fw me-2" />Dashboard</Link>
                  <Link className="list-group-item active" to="/studentsubscription"><i className="bi bi-card-checklist fa-fw me-2" />My Subscriptions</Link>
                  <Link className="list-group-item" to="/studentlist"><i className="bi bi-basket fa-fw me-2" />My Courses</Link>
                  <Link className="list-group-item" to="/studentresume"><i className="far fa-fw fa-file-alt me-2" />Course Resume</Link>
                  <Link className="list-group-item" to="/studentquiz"><i className="bi bi-question-diamond fa-fw me-2" />Quiz</Link>
                  <Link className="list-group-item" to="/studentpaymentinfo"><i className="bi bi-credit-card-2-front fa-fw me-2" />Payment Info</Link>
                  <Link className="list-group-item" to="/studentbookmark"><i className="bi bi-cart-check fa-fw me-2" />Wishlist</Link>
                  <Link className="list-group-item" to="/studenteditprofile"><i className="bi bi-pencil-square fa-fw me-2" />Edit Profile</Link>
                   {/* <Link className="list-group-item" to="/studentpayout"><i className="bi bi-pencil-square fa-fw me-2" />Payout</Link>  */}
                  <Link className="list-group-item" to="/studentsetting"><i className="bi bi-gear fa-fw me-2" />Settings</Link>
                  <Link className="list-group-item" to="/studentdeleteaccoun"><i className="bi bi-trash fa-fw me-2" />Delete Profile</Link>
                  <Link className="list-group-item text-danger bg-danger-soft-hover" to="/signout"><i className="fas fa-sign-out-alt fa-fw me-2" />Sign Out</Link>
                  {/* Collapse menu */}
                  <a className="list-group-item" data-bs-toggle="collapse" href="#collapseauthentication" role="button" aria-expanded="false" aria-controls="collapseauthentication">
                    <i className="bi bi-lock fa-fw me-2" />Dropdown level
                  </a>
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
          <div className="card card-body bg-transparent border rounded-3">
            {/* Update plan START */}
            <div className="row g-4">
              {/* Update plan item */}
              <div className="col-6 col-lg-3">
                <span>Active Plan</span>
                <h4>Basic</h4>
              </div>
              {/* Update plan item */}
              <div className="col-6 col-lg-3">
                <span>Monthly limit</span>
                <h4>Unlimited</h4>
              </div>
              {/* Update plan item */}
              <div className="col-6 col-lg-3">
                <span>Cost</span>
                <h4>$99/Month</h4>
              </div>
              {/* Update plan item */}
              <div className="col-6 col-lg-3">
                <span>Renewal Date</span>
                <h4>Feb 17, 2023</h4>
              </div>
            </div>
            {/* Update plan END */}
            {/* Progress bar */}
            <div className="overflow-hidden my-4">
              <h6 className="mb-0">85%</h6>
              <div className="progress progress-sm bg-primary bg-opacity-10">
                <div className="progress-bar bg-primary aos" role="progressbar" data-aos="slide-right" data-aos-delay={200} data-aos-duration={1000} data-aos-easing="ease-in-out" style={{width: '85%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>
                </div>
              </div>
            </div>
            {/* Button */}
            <div className="d-sm-flex justify-content-sm-between align-items-center">
              <div>
                {/* Switch Content */}
                <div className="d-sm-flex">
                  <div className="form-check form-switch form-check-md">
                    <input className="form-check-input" type="checkbox" id="checkPrivacy1" defaultChecked />
                    <label className="form-check-label" htmlFor="checkPrivacy1">Auto Renewal</label>
                  </div>
                </div>
                <p className="mb-0 small">Your plan will automatically renew on: 02/17/2023. Payment Amount: USD250</p>
              </div>	
              {/* Buttons */}
              <div className="mt-2 mt-sm-0">
                <button type="button" className="btn btn-sm btn-danger-soft me-2 mb-0">Cancel plan</button>
                <a href="#" className="btn btn-sm btn-success mb-0">Upgrade plan</a>
              </div>
            </div>
            {/* Divider */}
            <hr />
            {/* Plan Benefits */}
            <div className="row">
              <h6 className="mb-3">The plan includes</h6>
              <div className="col-md-6">
                <ul className="list-unstyled">
                  <li className="mb-3 h6 fw-light"><i className="bi bi-patch-check-fill text-success me-2" />Up to 05 users monthly</li>
                  <li className="mb-3 h6 fw-light"><i className="bi bi-patch-check-fill text-success me-2" />Free 5 host &amp; domain</li>
                  <li className="mb-3 h6 fw-light"><i className="bi bi-patch-check-fill text-success me-2" />Custom infrastructure</li>
                  <li className="mb-3 h6 fw-light"><i className="bi bi-patch-check-fill text-success me-2" />Access to all our room</li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="list-unstyled">
                  <li className="mb-3 h6 fw-light"><i className="bi bi-patch-check-fill text-success me-2" />24/7 dedicated Support</li>
                  <li className="mb-3 h6 fw-light"><i className="bi bi-patch-check-fill text-success me-2" />Unlimited updates</li>
                  <li className="h6 fw-light"><i className="bi bi-patch-check-fill text-success me-2" />Landing pages &amp; Web widgets</li>
                </ul>
              </div>
            </div>
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

export default StudentSubscription
