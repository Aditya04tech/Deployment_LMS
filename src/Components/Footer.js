
import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <>
{/* =======================
Footer START */}
<footer className="pt-5">
  <div className="container">
    {/* Row START */}
    <div className="row g-4">
      {/* Widget 1 START */}
      <div className="col-lg-3">
        {/* logo */}

        <Link className="me-0" to="index-2.html">
          <img className="light-mode-item h-40px"    src="./assets/images/LMS.jpg" alt="logo" />

          {/* <img className="dark-mode-item h-40px" src="assets/images/logo-light.svg" alt="logo" /> */}
        </Link>
        <p className="my-3">Eduport education theme, built specifically for the education centers which is dedicated to teaching and involve learners.</p>
        {/* Social media icon */}
        <ul className="list-inline mb-0 mt-3">
          <li className="list-inline-item"> <Link className="btn btn-white btn-sm shadow px-2 text-facebook" to="#"><i className="fab fa-fw fa-facebook-f" /></Link> </li>
          <li className="list-inline-item"> <Link className="btn btn-white btn-sm shadow px-2 text-instagram" to="#"><i className="fab fa-fw fa-instagram" /></Link> </li>
          <li className="list-inline-item"> <Link className="btn btn-white btn-sm shadow px-2 text-twitter" to="#"><i className="fab fa-fw fa-twitter" /></Link> </li>
          <li className="list-inline-item"> <Link className="btn btn-white btn-sm shadow px-2 text-linkedin" to="#"><i className="fab fa-fw fa-linkedin-in" /></Link> </li>
        </ul>
      </div>
      {/* Widget 1 END */}
      {/* Widget 2 START */}
      <div className="col-lg-6">
        <div className="row g-4">
          {/* Link block */}
          <div className="col-6 col-md-4">
            <h5 className="mb-2 mb-md-4">Company</h5>
            <ul className="nav flex-column">
              <li className="nav-item"><Link className="nav-link" to="/about">About us</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/contactus">Contact us</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/blog">News and Blogs</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/">Library</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/">Career</Link></li>
            </ul>
          </div>
          {/* Link block */}
          <div className="col-6 col-md-4">
            <h5 className="mb-2 mb-md-4">Community</h5>
            <ul className="nav flex-column">
              <li className="nav-item"><Link className="nav-link" to="/">Documentation</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/">Faq</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/">Forum</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/">Sitemap</Link></li>
            </ul>
          </div>
          {/* Link block */}
          <div className="col-6 col-md-4">
            <h5 className="mb-2 mb-md-4">Teaching</h5>
            <ul className="nav flex-column">
              <li className="nav-item"><Link className="nav-link" to="/">Become a teacher</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/">How to guide</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/">Terms &amp; Conditions</Link></li>
            </ul>
          </div>
        </div>
      </div>
      {/* Widget 2 END */}
      {/* Widget 3 START */}
      <div className="col-lg-3">
        <h5 className="mb-2 mb-md-4">Contact</h5>
        {/* Time */}
        <p className="mb-2">
          Toll free:<span className="h6 fw-light ms-2">+1234 568 963</span>
          <span className="d-block small">(9:AM to 8:PM IST)</span>
        </p>
        <p className="mb-0">Email:<span className="h6 fw-light ms-2">example@gmail.com</span></p>
        <div className="row g-2 mt-2">
          {/* Google play store button */}
          <div className="col-6 col-sm-4 col-md-3 col-lg-6">
            <Link to="/"> <img src="assets/images/client/google-play.svg" alt /> </Link>
          </div>
          {/* App store button */}
          <div className="col-6 col-sm-4 col-md-3 col-lg-6">
            <Link to="/"> <img src="assets/images/client/app-store.svg" alt="app-store" /> </Link>
          </div>
        </div> {/* Row END */}
      </div> 
      {/* Widget 3 END */}
    </div>{/* Row END */}
    {/* Divider */}
    <hr className="mt-4 mb-0" />
    {/* Bottom footer */}
    <div className="py-3">
      <div className="container px-0">
        <div className="d-lg-flex justify-content-between align-items-center py-3 text-center text-md-left">
          {/* copyright text */}
          <div className="text-body text-primary-hover"> Copyrights ©2024 Eduport. Build by <Link to="https://www.webestica.com/" target="_blank" className="text-body">Webestica</Link></div>
          {/* copyright links*/}
          <div className="justify-content-center mt-3 mt-lg-0">
            <ul className="nav list-inline justify-content-center mb-0">
              <li className="list-inline-item">
                {/* Language selector */}
                <div className="dropup mt-0 text-center text-sm-end">
                  <Link className="dropdown-toggle nav-link" to="#" role="button" id="languageSwitcher" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="fas fa-globe me-2" />Language
                  </Link>
                  <ul className="dropdown-menu min-w-auto" aria-labelledby="languageSwitcher">
                    <li><Link className="dropdown-item me-4" to="#"><img className="fa-fw me-2" src="assets/images/flags/uk.svg" alt />English</Link></li>
                    <li><Link className="dropdown-item me-4" to="#"><img className="fa-fw me-2" src="assets/images/flags/gr.svg" alt />German </Link></li>
                    <li><Link className="dropdown-item me-4" to="#"><img className="fa-fw me-2" src="assets/images/flags/sp.svg" alt />French</Link></li>
                  </ul>
                </div>
              </li>
              <li className="list-inline-item"><Link className="nav-link" to="#">Terms of use</Link></li>
              <li className="list-inline-item"><Link className="nav-link pe-0" to="#">Privacy policy</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div> 
  </div>
</footer>
{/* =======================
Footer END */}


    </>
  )
}

export default Footer