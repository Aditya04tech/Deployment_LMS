import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import usertxt from "../Components/Css/usertxt.css"; // Import CSS without assigning it to a variable


function StudentCourseList() {
  const [purchasedVideos, setPurchasedVideos] = useState([]);

  // Fetch purchased videos from localStorage on mount
  useEffect(() => {
    const videos = JSON.parse(localStorage.getItem('purchasedVideos')) || [];
    setPurchasedVideos(videos);
  }, []);

  // Handle video deletion
  const handleDelete = (videoId) => { 
    const updatedVideos = purchasedVideos.filter((video) => video.id !== videoId);
    localStorage.setItem('purchasedVideos', JSON.stringify(updatedVideos));
    setPurchasedVideos(updatedVideos);
  };

  return (
<div> 
  {/* Page Banner START  */}
  <section className="pt-0">
    <div className="container-fluid px-0">
      <div className="card bg-blue h-100px h-md-200px rounded-0" usertxt={{background: 'url(assets/images/pattern/04.png) no-repeat center center', backgroundSize: 'cover'}}>
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
  {/* Page Banner END --&gt; */}
  {/* Page content START --&gt; */}
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
                <Link className="list-group-item active" to="/studentlist"><i className="bi bi-basket fa-fw me-2" />My Courses</Link>
                <Link className="list-group-item" to="/studentresume"><i className="far fa-fw fa-file-alt me-2" />Course Resume</Link>
                <Link className="list-group-item" to="/studentquiz"><i className="bi bi-question-diamond fa-fw me-2" />Quiz</Link>
                <Link className="list-group-item" to="/studentpaymentinfo"><i className="bi bi-credit-card-2-front fa-fw me-2" />Payment Info</Link>
                <Link className="list-group-item" to="/studentbookmark"><i className="bi bi-cart-check fa-fw me-2" />Wishlist</Link>
                <Link className="list-group-item" to="/studenteditprofile"><i className="bi bi-pencil-square fa-fw me-2" />Edit Profile</Link>
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
          <div className="card bg-transparent border rounded-3">
            {/* Card header START */}
            <div className="card-header bg-transparent border-bottom">
              <h3 className="mb-0">My Courses List</h3>
            </div>
            {/* Card header END */}
            {/* Card body START */}
            <div className="card-body">
              {/* Search and select START */}
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
                      <option>Most popular</option>
                      <option>Most Viewed</option>
                    </select>
                  </form>
                </div>
              </div>
              {/* Search and select END */}
              
              <div className={usertxt.container}>
      <h2>Your Purchased Videos</h2>
      {purchasedVideos.length > 0 ? (
        <div className={usertxt.videoGrid}>
          {purchasedVideos.map((video) => (
            <div key={video.id} className={usertxt.videoCard}>
              <h3>{video.title}</h3> {/* Ensure this matches the video object */}
              <video controls src={video.videoUrl} className={usertxt.video} /> {/* Corrected property */}
              <button
                onClick={() => handleDelete(video.id)}
                className={usertxt.deleteButton}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>No purchased videos yet. Go add some!</p>
      )}
    </div>


              {/* Pagination START */}
              <div className="d-sm-flex justify-content-sm-between align-items-sm-center mt-4 mt-sm-3">
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
            {/* Card body START */}
          </div>
        </div>
        {/* Main content END */}
      </div> {/* Row END */}
    </div>	
  </section>
  {/* Page content END  */}
</div>

  )
}

export default StudentCourseList
