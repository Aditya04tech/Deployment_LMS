import React from 'react'
import IFooter from "./IFooter"

const Instructor_Single = () => {
  return (
    <div>
      
    <main>
  {/* =======================
Page content START */}
  <section className="pt-5 pb-0">
    <div className="container">
      <div className="row g-0 g-lg-5">
        {/* Left sidebar START */}
        <div className="col-lg-4">
          <div className="row">
            <div className="col-md-6 col-lg-12">
              {/* Instructor image START */}
              <div className="card shadow p-2 mb-4 text-center">
                <div className="rounded-3">
                  {/* Image */}
                  <img src="assets/images/instructor/07.jpg" className="card-img" alt="" />
                </div>
                {/* Card body */}
                <div className="card-body px-3">
                  {/* Rating */}
                  <ul className="list-inline">
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star-half-alt text-warning" /></li>
                    <li className="list-inline-item ms-2 h6 fw-light mb-0">4.5/5.0</li>
                  </ul>
                  {/* Social media button */}
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item"> <Link className="btn px-2 btn-sm bg-facebook" to="#"><i className="fab fa-fw fa-facebook-f" /></Link> </li>
                    <li className="list-inline-item"> <Link className="btn px-2 btn-sm bg-instagram-gradient" to="#"><i className="fab fa-fw fa-instagram" /></Link> </li>
                    <li className="list-inline-item"> <Link className="btn px-2 btn-sm bg-twitter" to="#"><i className="fab fa-fw fa-twitter" /></Link> </li>
                    <li className="list-inline-item"> <Link className="btn px-2 btn-sm bg-linkedin" to="#"><i className="fab fa-fw fa-linkedin-in" /></Link> </li>
                  </ul>
                </div>
              </div>
              {/* Instructor image END */}
            </div>
            <div className="col-md-6 col-lg-12">
              <div className="card card-body shadow p-4 mb-4">
                {/* Education START */}
                {/* Title */}
                <h4 className="mb-3">Education</h4>
                {/* Education item */}
                <div className="d-flex align-items-center mb-4">
                  <span className="icon-md mb-0 bg-light rounded-3"><i className="fas fa-graduation-cap" /></span>
                  <div className="ms-3">
                    <h6 className="mb-0">Harvard University</h6>
                    <p className="mb-0 small">Bachelor in Computer Graphics</p>
                  </div>
                </div>
                {/* Education item */}
                <div className="d-flex align-items-center mb-4">
                  <span className="icon-md mb-0 bg-light rounded-3"><i className="fas fa-graduation-cap" /></span>
                  <div className="ms-3">
                    <h6 className="mb-0">University of Toronto</h6>
                    <p className="mb-0 small">Master in Computer Graphics</p>
                  </div>
                </div>
                {/* Education item */}
                <div className="d-flex align-items-center mb-4">
                  <span className="icon-md mb-0 bg-light rounded-3"><i className="fas fa-graduation-cap" /></span>
                  <div className="ms-3">
                    <h6 className="mb-0">East Ray University</h6>
                    <p className="mb-0 small">Bachelor in Computer Graphics</p>
                  </div>
                </div>
                {/* Education END */}
                <hr /> {/* Divider */}
                {/* Skills START */}
                <h4 className="mb-3">Skills</h4>
                {/* Progress item */}
                <div className="overflow-hidden mb-4">
                  <h6 className="uppercase">Graphic design</h6>
                  <div className="progress progress-sm bg-primary bg-opacity-10">
                    <div className="progress-bar bg-primary aos" role="progressbar" data-aos="slide-right" data-aos-delay={200} data-aos-duration={1000} data-aos-easing="ease-in-out" style={{width: '90%'}} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}>
                      <span className="progress-percent-simple h6 mb-0">90%</span>
                    </div>
                  </div>
                </div>
                {/* Progress item */}
                <div className="overflow-hidden mb-4">
                  <h6 className="uppercase">Web design</h6>
                  <div className="progress progress-sm bg-success bg-opacity-10">
                    <div className="progress-bar bg-success aos" role="progressbar" data-aos="slide-right" data-aos-delay={200} data-aos-duration={1000} data-aos-easing="ease-in-out" style={{width: '80%'}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}>
                      <span className="progress-percent-simple h6 mb-0">80%</span>
                    </div>
                  </div>
                </div>
                {/* Progress item */}
                <div className="overflow-hidden mb-4">
                  <h6 className="uppercase">HTML/CSS</h6>
                  <div className="progress progress-sm bg-warning bg-opacity-15">
                    <div className="progress-bar bg-warning aos" role="progressbar" data-aos="slide-right" data-aos-delay={200} data-aos-duration={1000} data-aos-easing="ease-in-out" style={{width: '60%'}} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100}>
                      <span className="progress-percent-simple h6 mb-0">60%</span>
                    </div>
                  </div>
                </div>
                {/* Progress item */}
                <div className="overflow-hidden mb-4">
                  <h6 className="uppercase">UI/UX</h6>
                  <div className="progress progress-sm bg-danger bg-opacity-10">
                    <div className="progress-bar bg-danger aos" role="progressbar" data-aos="slide-right" data-aos-delay={200} data-aos-duration={1000} data-aos-easing="ease-in-out" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
                      <span className="progress-percent-simple h6 mb-0">50%</span>
                    </div>
                  </div>
                </div>
                {/* Skills END */}
              </div>
            </div>
          </div> {/* Row End */}
        </div>
        {/* Left sidebar END */}
        {/* Main content START */}
        <div className="col-lg-8">
          {/* Title */}
          <h5 className="mb-0">Hi, I am</h5>
          <h1 className="mb-0">Lori Stevens</h1>
          <p>Graphic Designer</p>
          {/* Content */}
          <p className="mt-4">Satisfied conveying a dependent contented he gentleman agreeable do be. Warrant private blushes removed an in equally totally if. Delivered dejection necessary objection do Mr prevailed. Mr feeling does chiefly cordial in do.</p>
          <p>We focus a great deal on the understanding of behavioral psychology and influence triggers which are crucial for becoming a well-rounded Digital Marketer. We understand that theory is important to build a solid foundation, we understand that theory alone isn’t going to get the job done so that’s why this course is packed with practical hands-on examples that you can follow step by step.</p>
          {/* Personal info */}
          <ul className="list-group list-group-borderless">
            <li className="list-group-item px-0">
              <span className="h6 fw-light"><i className="fas fa-fw fa-map-marker-alt text-primary me-1 me-sm-3" />Address:</span>
              <span>2002 Horton Ford Rd, Eidson, TN, 37731</span>
            </li>
            <li className="list-group-item px-0">
              <span className="h6 fw-light"><i className="fas fa-fw fa-envelope text-primary me-1 me-sm-3" />Email:</span>
              <span>example@gmail.com</span>
            </li>
            <li className="list-group-item px-0">
              <span className="h6 fw-light"><i className="fas fa-fw fa-headphones text-primary me-1 me-sm-3" />Phone number:</span>
              <span>+896-789-546</span>
            </li>
            <li className="list-group-item px-0">
              <span className="h6 fw-light"><i className="fas fa-fw fa-globe text-primary me-1 me-sm-3" />Website:</span>
              <span>https://eduport.webestica.com/</span>
            </li>
          </ul>
          {/* Counter START */}
          <div className="row mt-4 g-3">
            {/* Counter item */}
            <div className="col-sm-6 col-lg-4">
              <div className="d-flex align-items-center">
                <span className="icon-lg text-success mb-0 bg-success bg-opacity-10 rounded-3"><i className="fas fa-play" /></span>
                <div className="ms-3">
                  <div className="d-flex">
                    <h5 className="purecounter mb-0 fw-bold" data-purecounter-start={0} data-purecounter-end={10} data-purecounter-delay={200}>0</h5>
                    <span className="mb-0 h5">+</span>
                  </div>
                  <p className="mb-0 h6 fw-light">Total Courses</p>
                </div>
              </div>
            </div>
            {/* Counter item */}
            <div className="col-sm-6 col-lg-4">
              <div className="d-flex align-items-center">
                <span className="icon-lg text-purple bg-purple bg-opacity-10 rounded-3 mb-0"><i className="fas fa-users" /></span>
                <div className="ms-3">
                  <div className="d-flex">
                    <h5 className="purecounter mb-0 fw-bold" data-purecounter-start={0} data-purecounter-end={36} data-purecounter-delay={200}>0</h5>
                    <span className="mb-0 h5">K+</span>
                  </div>
                  <p className="mb-0 h6 fw-light">Total Students</p>
                </div>
              </div>
            </div>
            {/* Counter item */}
            <div className="col-sm-6 col-lg-4">
              <div className="d-flex align-items-center">
                <span className="icon-lg text-orange bg-orange bg-opacity-10 rounded-3 mb-0"><i className="fas fa-trophy" /></span>
                <div className="ms-3">
                  <div className="d-flex">
                    <h5 className="purecounter mb-0 fw-bold" data-purecounter-start={0} data-purecounter-end={11} data-purecounter-delay={200}>0</h5>
                    <span className="mb-0 h5">+</span>
                  </div>
                  <p className="mb-0 h6 fw-light">Years in Experience</p>
                </div>
              </div>
            </div>
          </div>
          {/* Counter END */}
          {/* Course START */}
          <div className="row g-4 mt-4">
            {/* Title */}
            <h2>Courses List</h2>
            {/* Card item START */}
            <div className="col-sm-6">
              <div className="card shadow h-100">
                {/* Image */}
                <img src="assets/images/courses/4by3/08.jpg" className="card-img-top" alt="" />
                {/* Card body */}
                <div className="card-body pb-0">
                  {/* Badge and favorite */}
                  <div className="d-flex justify-content-between mb-2">
                    <Link to="#" className="badge bg-purple bg-opacity-10 text-purple">All level</Link>
                    <Link to="#" className="h6 fw-light mb-0"><i className="far fa-heart" /></Link>
                  </div>
                  {/* Title */}
                  <h5 className="card-title fw-normal"><Link to="#">Sketch from A to Z: for app designer</Link></h5>
                  <p className="mb-2 text-truncate-2">Proposal indulged no do sociable he throwing settling</p>
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
                    <span className="h6 fw-light mb-0"><i className="far fa-clock text-danger me-2" />12h 56m</span>
                    <span className="h6 fw-light mb-0"><i className="fas fa-table text-orange me-2" />15 lectures</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Card item END */}
            {/* Card item START */}
            <div className="col-sm-6">
              <div className="card shadow h-100">
                {/* Image */}
                <img src="assets/images/courses/4by3/02.jpg" className="card-img-top" alt="" />
                <div className="card-body pb-0">
                  {/* Badge and favorite */}
                  <div className="d-flex justify-content-between mb-2">
                    <Link to="#" className="badge bg-info bg-opacity-10 text-info">Intermediate</Link>
                    <Link to="#" className="text-danger"><i className="fas fa-heart" /></Link>
                  </div>
                  {/* Title */}
                  <h5 className="card-title fw-normal"><Link to="#">Graphic Design Masterclass</Link></h5>
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
                  <div className="d-flex justify-content-between ">
                    <span className="h6 fw-light mb-0"><i className="far fa-clock text-danger me-2" />9h 56m</span>
                    <span className="h6 fw-light mb-0"><i className="fas fa-table text-orange me-2" />65 lectures</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Card item END */}
            {/* Card item START */}
            <div className="col-sm-6">
              <div className="card shadow h-100">
                {/* Image */}
                <img src="assets/images/courses/4by3/03.jpg" className="card-img-top" alt="" />
                <div className="card-body pb-0">
                  {/* Badge and favorite */}
                  <div className="d-flex justify-content-between mb-2">
                    <Link to="#" className="badge bg-success bg-opacity-10 text-success">Beginner</Link>
                    <Link to="#" className="h6 fw-light mb-0"><i className="far fa-heart" /></Link>
                  </div>
                  {/* Title */}
                  <h5 className="card-title fw-normal"><Link to="#">Create a Design System in Figma</Link></h5>
                  <p className="mb-2 text-truncate-2">Rooms oh fully taken by worse do. Points afraid but may end afraid
                    but may end.</p>
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
                    <span className="h6 fw-light mb-0"><i className="far fa-clock text-danger me-2" />5h 56m</span>
                    <span className="h6 fw-light mb-0"><i className="fas fa-table text-orange me-2" />32 lectures</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Card item END */}
            {/* Card item START */}
            <div className="col-sm-6">
              <div className="card shadow h-100">
                {/* Image */}
                <img src="assets/images/courses/4by3/07.jpg" className="card-img-top" alt="" />
                <div className="card-body pb-0">
                  {/* Badge and favorite */}
                  <div className="d-flex justify-content-between mb-2">
                    <Link to="#" className="badge bg-success bg-opacity-10 text-success">Beginner</Link>
                    <Link to="#" className="text-danger"><i className="fas fa-heart" /></Link>
                  </div>
                  {/* Title */}
                  <h5 className="card-title fw-normal"><Link to="#">Deep Learning with React-Native </Link></h5>
                  <p className="mb-2 text-truncate-2">Far advanced settling say finished raillery. Offered chiefly
                    farther..</p>
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
          </div>
          {/* Course END */}
        </div>
        {/* Main content END */}
      </div>{/* Row END */}
    </div>
  </section>
  {/* =======================
Page content END */}
  {/* =======================
Related instructor START */}
  <section>
    <div className="container">
      {/* Title */}
      <div className="row mb-4">
        <h2 className="mb-0">Related Instructors</h2>
      </div>
      {/* Slider START */}
      <div className="tiny-slider arrow-round arrow-creative arrow-blur arrow-hover">
        <div className="tiny-slider-inner" data-autoplay="false" data-arrow="true" data-dots="false" data-items={4} data-items-lg={3} data-items-md={2} data-items-xs={1}>
          {/* Card item START */}
          <div className="card bg-transparent">
            <div className="position-relative">
              {/* Image */}
              <img src="assets/images/instructor/02.jpg" className="card-img" alt="" />
              {/* Overlay */}
              <div className="card-img-overlay d-flex flex-column p-3">
                <div className="w-100 mt-auto text-end">
                  {/* Card category */}
                  <Link to="#" className="badge text-bg-info rounded-1"><i className="fas fa-user-graduate me-2" />25</Link>
                  <Link to="#" className="badge text-bg-orange rounded-1"><i className="fas fa-clipboard-list me-2" />15</Link>
                </div>
              </div>
            </div>
            {/* Card body */}
            <div className="card-body text-center">
              {/* Title */}
              <h5 className="card-title"><Link to="#">Jacqueline Miller</Link></h5>
              <p className="mb-2">Web Developer</p>
              {/* Rating */}
              <ul className="list-inline hstack justify-content-center">
                <li className="list-inline-item ms-2 h6 mb-0 fw-normal">4.5/5.0</li>
                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                <li className="list-inline-item me-0 small"><i className="fas fa-star-half-alt text-warning" /></li>
              </ul>
            </div>
          </div>
          {/* Card item END */}
          {/* Card item START */}
          <div className="card bg-transparent">
            <div className="position-relative">
              {/* Image */}
              <img src="assets/images/instructor/01.jpg" className="card-img" alt="" />
              {/* Overlay */}
              <div className="card-img-overlay d-flex flex-column p-3">
                <div className="w-100 mt-auto text-end">
                  {/* Card category */}
                  <Link to="#" className="badge text-bg-info rounded-1"><i className="fas fa-user-graduate me-2" />118</Link>
                  <Link to="#" className="badge text-bg-orange rounded-1"><i className="fas fa-clipboard-list me-2" />09</Link>
                </div>
              </div>
            </div>
            {/* Card body */}
            <div className="card-body text-center">
              {/* Title */}
              <h5 className="card-title"><Link to="#">Samuel Bishop</Link></h5>
              <p className="mb-2">Marketing Instructor</p>
              {/* Rating */}
              <ul className="list-inline hstack justify-content-center">
                <li className="list-inline-item ms-2 h6 mb-0 fw-normal">4.5/5.0</li>
                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                <li className="list-inline-item me-0 small"><i className="fas fa-star-half-alt text-warning" /></li>
              </ul>
            </div>
          </div>
          {/* Card item END */}
          {/* Card item START */}
          <div className="card bg-transparent">
            <div className="position-relative">
              {/* Image */}
              <img src="assets/images/instructor/08.jpg" className="card-img" alt="" />
              {/* Overlay */}
              <div className="card-img-overlay d-flex flex-column p-3">
                <div className="w-100 mt-auto text-end">
                  {/* Card category */}
                  <Link to="#" className="badge text-bg-info rounded-1"><i className="fas fa-user-graduate me-2" />92</Link>
                  <Link to="#" className="badge text-bg-orange rounded-1"><i className="fas fa-clipboard-list me-2" />38</Link>
                </div>
              </div>
            </div>
            {/* Card body */}
            <div className="card-body text-center">
              {/* Title */}
              <h5 className="card-title"><Link to="#">Dennis Barrett</Link></h5>
              <p className="mb-2">Maths Instructor</p>
              {/* Rating */}
              <ul className="list-inline hstack justify-content-center">
                <li className="list-inline-item ms-2 h6 mb-0 fw-normal">4.5/5.0</li>
                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                <li className="list-inline-item me-0 small"><i className="fas fa-star-half-alt text-warning" /></li>
              </ul>
            </div>
          </div>
          {/* Card item END */}
          {/* Card item START */}
          <div className="card bg-transparent">
            <div className="position-relative">
              {/* Image */}
              <img src="assets/images/instructor/04.jpg" className="card-img" alt="" />
              {/* Overlay */}
              <div className="card-img-overlay d-flex flex-column p-3">
                <div className="w-100 mt-auto text-end">
                  {/* Card category */}
                  <Link to="#" className="badge text-bg-info rounded-1"><i className="fas fa-user-graduate me-2" />82</Link>
                  <Link to="#" className="badge text-bg-orange rounded-1"><i className="fas fa-clipboard-list me-2" />05</Link>
                </div>
              </div>
            </div>
            {/* Card body */}
            <div className="card-body text-center">
              {/* Title */}
              <h5 className="card-title"><Link to="#">Carolyn Ortiz</Link></h5>
              <p className="mb-2">Economics Teacher</p>
              {/* Rating */}
              <ul className="list-inline hstack justify-content-center">
                <li className="list-inline-item ms-2 h6 mb-0 fw-normal">4.5/5.0</li>
                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                <li className="list-inline-item me-0 small"><i className="fas fa-star-half-alt text-warning" /></li>
              </ul>
            </div>
          </div>
          {/* Card item END */}
          {/* Card item START */}
          <div className="card bg-transparent">
            <div className="position-relative">
              {/* Image */}
              <img src="assets/images/instructor/03.jpg" className="card-img" alt="" />
              {/* Overlay */}
              <div className="card-img-overlay d-flex flex-column p-3">
                <div className="w-100 mt-auto text-end">
                  {/* Card category */}
                  <Link to="#" className="badge text-bg-info rounded-1"><i className="fas fa-user-graduate me-2" />50</Link>
                  <Link to="#" className="badge text-bg-orange rounded-1"><i className="fas fa-clipboard-list me-2" />10</Link>
                </div>
              </div>
            </div>
            {/* Card body */}
            <div className="card-body text-center">
              {/* Title */}
              <h5 className="card-title"><Link to="#">Billy Vasquez</Link></h5>
              <p className="mb-2">UI/UX Designer</p>
              {/* Rating */}
              <ul className="list-inline hstack justify-content-center">
                <li className="list-inline-item ms-2 h6 mb-0 fw-normal">4.5/5.0</li>
                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                <li className="list-inline-item me-0 small"><i className="fas fa-star-half-alt text-warning" /></li>
              </ul>
            </div>
          </div>
          {/* Card item END */}
        </div>
      </div>
      {/* Slider END */}
    </div>
  </section>
  {/* =======================
Related instructor END */}
</main>
<IFooter/>
    </div>
  )
}

export default Instructor_Single
