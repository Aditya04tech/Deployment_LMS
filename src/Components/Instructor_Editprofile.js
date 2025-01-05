import React from 'react'
import IFooter from "./IFooter"
import { Link } from 'react-router-dom'

const Instructor_Editprofile = () => {
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
                  <Link className="list-group-item " to="/instructordashboard"><i className="bi bi-ui-checks-grid fa-fw me-2" />Dashboard</Link>
                  <Link className="list-group-item" to="/instructorcourses"><i className="bi bi-basket fa-fw me-2" />My Courses</Link>
                  <Link className="list-group-item" to="/instructorquiz"><i className="bi bi-question-diamond fa-fw me-2" />Quiz</Link>
                  <Link className="list-group-item" to="/instructorearning"><i className="bi bi-graph-up fa-fw me-2" />Earnings</Link>
                  <Link className="list-group-item" to="/instructorstudentlist"><i className="bi bi-people fa-fw me-2" />Students</Link>
                  <Link className="list-group-item" to="/instrctororder"><i className="bi bi-folder-check fa-fw me-2" />Orders</Link>
                  <Link className="list-group-item" to="/instructorreviews"><i className="bi bi-star fa-fw me-2" />Reviews</Link>
                  <Link className="list-group-item active" to="/instructoreditprofile"><i className="bi bi-pencil-square fa-fw me-2" />Edit Profile</Link>
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
          {/* Edit profile START */}
          <div className="card bg-transparent border rounded-3">
            {/* Card header */}
            <div className="card-header bg-transparent border-bottom">
              <h3 className="card-header-title mb-0">Edit Profile</h3>
            </div>
            {/* Card body START */}
            <div className="card-body">
              {/* Form */}
              <form className="row g-4">
                {/* Profile picture */}
                <div className="col-12 justify-content-center align-items-center">
                  <label className="form-label">Profile picture</label>
                  <div className="d-flex align-items-center">
                    <label className="position-relative me-4" htmlFor="uploadfile-1" title="Replace this pic">
                      {/* Avatar place holder */}
                      <span className="avatar avatar-xl">
                        <img id="uploadfile-1-preview" className="avatar-img rounded-circle border border-white border-3 shadow" src="assets/images/avatar/07.jpg" alt="" />
                      </span>
                      {/* Remove btn */}
                      <button type="button" className="uploadremove"><i className="bi bi-x text-white" /></button>
                    </label>
                    {/* Upload button */}
                    <label className="btn btn-primary-soft mb-0" htmlFor="uploadfile-1">Change</label>
                    <input id="uploadfile-1" className="form-control d-none" type="file" />
                  </div>
                </div>
                {/* Full name */}
                <div className="col-12">
                  <label className="form-label">Full name</label>
                  <div className="input-group">
                    <input type="text" className="form-control" defaultValue="Lori" placeholder="First name" />
                    <input type="text" className="form-control" defaultValue="Stevens" placeholder="Last name" />
                  </div>
                </div>
                {/* Username */}
                <div className="col-md-6">
                  <label className="form-label">Username</label>
                  <div className="input-group">
                    <span className="input-group-text">Eduport.com</span>
                    <input type="text" className="form-control" defaultValue="loristev" />
                  </div>
                </div>
                {/* Email id */}
                <div className="col-md-6">
                  <label className="form-label">Email id</label>
                  <input className="form-control" type="email" defaultValue="example@gmail.com" placeholder="Email" />
                </div>
                {/* Phone number */}
                <div className="col-md-6">
                  <label className="form-label">Phone number</label>
                  <input type="text" className="form-control" defaultValue={1234567890} placeholder="Phone number" />
                </div>
                {/* Location */}
                <div className="col-md-6">
                  <label className="form-label">Location</label>
                  <input className="form-control" type="text" defaultValue="California" />
                </div>
                {/* About me */}
                <div className="col-12">
                  <label className="form-label">About me</label>
                  <textareLink className="form-control" rows={3} defaultValue={"I’ve found a way to get paid for my favorite hobby, and do so while following my dream of traveling the world."} />
                  <div className="form-text">Brief description for your profile.</div> 
                </div>
                {/* Education */}
                <div className="col-12">
                  <label className="form-label">Education</label>
                  <input className="form-control mb-2" type="text" defaultValue="Bachelor in Computer Graphics" />
                  <input className="form-control mb-2" type="text" defaultValue="Masters in Computer Graphics" />
                  <button className="btn btn-sm btn-light mb-0"><i className="bi bi-plus me-1" />Add more</button>
                </div>
                {/* Save button */}
                <div className="d-sm-flex justify-content-end">
                  <button type="button" className="btn btn-primary mb-0">Save changes</button>
                </div>
              </form>
            </div>
            {/* Card body END */}
          </div>
          {/* Edit profile END */}
          <div className="row g-4 mt-3">
            {/* Linked account START */}
            <div className="col-lg-6">
              <div className="card bg-transparent border rounded-3">
                {/* Card header */}
                <div className="card-header bg-transparent border-bottom">
                  <h5 className="card-header-title mb-0">Linked account</h5>
                </div>
                {/* Card body START */}
                <div className="card-body pb-0">
                  {/* Google */}
                  <div className="position-relative mb-4 d-sm-flex bg-success bg-opacity-10 border border-success p-3 rounded">
                    {/* Title and content */}
                    <h2 className="fs-1 mb-0 me-3"><i className="fab fa-google text-google-icon" /></h2>
                    <div>
                      <div className="position-absolute top-0 start-100 translate-middle bg-white rounded-circle lh-1 h-20px">
                        <i className="bi bi-check-circle-fill text-success fs-5" />
                      </div>
                      <h6 className="mb-1">Google</h6>
                      <p className="mb-1 small">You are successfully connected to your Google account</p>
                      {/* Button */}
                      <button type="button" className="btn btn-sm btn-danger mb-0">Invoke</button>
                      <Link href="#" className="btn btn-sm btn-link text-body mb-0">Learn more</Link>
                    </div>
                  </div>
                  {/* Linkedin */}
                  <div className="mb-4 d-sm-flex border p-3 rounded">
                    {/* Title and content */}
                    <h2 className="fs-1 mb-0 me-3"><i className="fab fa-linkedin-in text-linkedin" /></h2>
                    <div>
                      <h6 className="mb-1">Linkedin</h6>
                      <p className="mb-1 small">Connect with Linkedin account for a personalized experience</p>
                      {/* Button */}
                      <button type="button" className="btn btn-sm btn-primary mb-0">Connect Linkedin</button>
                      <Link href="#" className="btn btn-sm btn-link text-body mb-0">Learn more</Link>
                    </div>
                  </div>
                  {/* Facebook */}
                  <div className="mb-4 d-sm-flex border p-3 rounded">
                    {/* Title and content */}
                    <h2 className="fs-1 mb-0 me-3"><i className="fab fa-facebook text-facebook" /></h2>
                    <div>
                      <h6 className="mb-1">Facebook</h6>
                      <p className="mb-1 small">Connect with Facebook account for a personalized experience</p>
                      {/* Button */}
                      <button type="button" className="btn btn-sm btn-primary mb-0">Connect Facebook</button>
                      <Link href="#" className="btn btn-sm btn-link text-body mb-0">Learn more</Link>
                    </div>
                  </div>
                </div>
                {/* Card body END */}
              </div>
            </div>
            {/* Linked account end */}
            {/* Social media profile START */}
            <div className="col-lg-6">
              <div className="card bg-transparent border rounded-3">
                {/* Card header */}
                <div className="card-header bg-transparent border-bottom">
                  <h5 className="card-header-title mb-0">Social media profile</h5>
                </div>
                {/* Card body START */}
                <div className="card-body">
                  {/* Facebook username */}
                  <div className="mb-3">
                    <label className="form-label"><i className="fab fa-facebook text-facebook me-2" />Enter facebook username</label>
                    <input className="form-control" type="text" defaultValue="loristev" placeholder="Enter username" />
                  </div>
                  {/* Twitter username */}
                  <div className="mb-3">
                    <label className="form-label"><i className="bi bi-twitter text-twitter me-2" />Enter twitter username</label>
                    <input className="form-control" type="text" defaultValue="loristev" placeholder="Enter username" />
                  </div>
                  {/* Instagram username */}
                  <div className="mb-3">
                    <label className="form-label"><i className="fab fa-instagram text-instagram-gradient me-2" />Enter instagram username</label>
                    <input className="form-control" type="text" defaultValue="loristev" placeholder="Enter username" />
                  </div>
                  {/* Youtube */}
                  <div className="mb-3">
                    <label className="form-label"><i className="fab fa-youtube text-youtube me-2" />Add your youtube profile URL</label>
                    <input className="form-control" type="text" defaultValue="https://www.youtube.com/in/Eduport-05620abc" placeholder="Enter username" />
                  </div>
                  {/* Button */}
                  <div className="d-flex justify-content-end mt-4">
                    <button type="button" className="btn btn-primary mb-0">Save changes</button>
                  </div>
                </div>
                {/* Card body END */}
              </div>
            </div>
            {/* Social media profile END */}
            {/* EMail change START */}
            <div className="col-lg-6">
              <div className="card bg-transparent border rounded-3">
                {/* Card header */}
                <div className="card-header bg-transparent border-bottom">
                  <h5 className="card-header-title mb-0">Update email</h5>
                </div>
                {/* Card body */}
                <div className="card-body">
                  <p>Your current email address is <span className="text-primary">example@gmail.com</span></p>
                  {/* Email */}
                  <form>
                    <label className="form-label">Enter your new email id</label>
                    <input className="form-control" type="email" placeholder="Enter new email" />
                    <div className="d-flex justify-content-end mt-4">
                      <button type="button" className="btn btn-primary mb-0">Update email</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* EMail change end */}
            {/* Password change START */}
            <div className="col-lg-6">
              <div className="card border bg-transparent rounded-3">
                {/* Card header */}
                <div className="card-header bg-transparent border-bottom">
                  <h5 className="card-header-title mb-0">Update password</h5>
                </div>
                {/* Card body START */}
                <div className="card-body">
                  {/* Current password */}
                  <div className="mb-3">
                    <label className="form-label">Current password</label>
                    <input className="form-control" type="password" placeholder="Enter current password" />
                    
                  </div>
                  {/* New password */}
                  <div className="mb-3">
                    <label className="form-label"> Enter new password</label>
                    <div className="input-group">
                      <input className="form-control" type="password" placeholder="Enter new password" />
                      <span className="input-group-text p-0 bg-transparent">
                        <i className="far fa-eye cursor-pointer p-2 w-40px" />
                      </span>
                    </div>
                    <div className="rounded mt-1" id="psw-strength" />
                  </div>
                  {/* Confirm password */}
                  <div>
                    <label className="form-label">Confirm new password</label>
                    <input className="form-control" type="password" placeholder="Enter new password" />
                  </div>
                  {/* Button */}
                  <div className="d-flex justify-content-end mt-4">
                    <button type="button" className="btn btn-primary mb-0">Change password</button>
                  </div>
                </div>
                {/* Card body END */}
              </div>
            </div>
            {/* Password change end */}
          </div>
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

export default Instructor_Editprofile
