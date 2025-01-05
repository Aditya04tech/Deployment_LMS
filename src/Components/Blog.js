import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

const Blog = () => {
  return (
    <>
    <Nav/>
{/* **************** MAIN CONTENT START **************** */}
<main>
  {/* =======================
Page Banner START */}
  <section className="py-5">
    <div className="container">
      <div className="row position-relative">
        {/* SVG decoration */}
        <figure className="position-absolute top-0 start-0 d-none d-sm-block">	
          <svg width="22px" height="22px" viewBox="0 0 22 22">
            <polygon className="fill-purple" points="22,8.3 13.7,8.3 13.7,0 8.3,0 8.3,8.3 0,8.3 0,13.7 8.3,13.7 8.3,22 13.7,22 13.7,13.7 22,13.7 " />
          </svg>
        </figure>
        {/* Title and breadcrumb */}
        <div className="col-lg-10 mx-auto text-center position-relative">
          {/* SVG decoration */}
          <figure className="position-absolute top-50 end-0 translate-middle-y">
            <svg width="27px" height="27px">
              <path className="fill-orange" d="M13.122,5.946 L17.679,-0.001 L17.404,7.528 L24.661,5.946 L19.683,11.533 L26.244,15.056 L18.891,16.089 L21.686,23.068 L15.400,19.062 L13.122,26.232 L10.843,19.062 L4.557,23.068 L7.352,16.089 L-0.000,15.056 L6.561,11.533 L1.582,5.946 L8.839,7.528 L8.565,-0.001 L13.122,5.946 Z" />
            </svg>
          </figure>
          {/* SVG decoration */}
          <figure className="position-absolute top-100 start-50 translate-middle mt-3 ms-n9 d-none d-lg-block">
            <svg>
              <path className="fill-success" d="m181.6 6.7c-0.1 0-0.2-0.1-0.3 0-2.5-0.3-4.9-1-7.3-1.4-2.7-0.4-5.5-0.7-8.2-0.8-1.4-0.1-2.8-0.1-4.1-0.1-0.5 0-0.9-0.1-1.4-0.2-0.9-0.3-1.9-0.1-2.8-0.1-5.4 0.2-10.8 0.6-16.1 1.4-2.7 0.3-5.3 0.8-7.9 1.3-0.6 0.1-1.1 0.3-1.8 0.3-0.4 0-0.7-0.1-1.1-0.1-1.5 0-3 0.7-4.3 1.2-3 1-6 2.4-8.8 3.9-2.1 1.1-4 2.4-5.9 3.9-1 0.7-1.8 1.5-2.7 2.2-0.5 0.4-1.1 0.5-1.5 0.9s-0.7 0.8-1.1 1.2c-1 1-1.9 2-2.9 2.9-0.4 0.3-0.8 0.5-1.2 0.5-1.3-0.1-2.7-0.4-3.9-0.6-0.7-0.1-1.2 0-1.8 0-3.1 0-6.4-0.1-9.5 0.4-1.7 0.3-3.4 0.5-5.1 0.7-5.3 0.7-10.7 1.4-15.8 3.1-4.6 1.6-8.9 3.8-13.1 6.3-2.1 1.2-4.2 2.5-6.2 3.9-0.9 0.6-1.7 0.9-2.6 1.2s-1.7 1-2.5 1.6c-1.5 1.1-3 2.1-4.6 3.2-1.2 0.9-2.7 1.7-3.9 2.7-1 0.8-2.2 1.5-3.2 2.2-1.1 0.7-2.2 1.5-3.3 2.3-0.8 0.5-1.7 0.9-2.5 1.5-0.9 0.8-1.9 1.5-2.9 2.2 0.1-0.6 0.3-1.2 0.4-1.9 0.3-1.7 0.2-3.6 0-5.3-0.1-0.9-0.3-1.7-0.8-2.4s-1.5-1.1-2.3-0.8c-0.2 0-0.3 0.1-0.4 0.3s-0.1 0.4-0.1 0.6c0.3 3.6 0.2 7.2-0.7 10.7-0.5 2.2-1.5 4.5-2.7 6.4-0.6 0.9-1.4 1.7-2 2.6s-1.5 1.6-2.3 2.3c-0.2 0.2-0.5 0.4-0.6 0.7s0 0.7 0.1 1.1c0.2 0.8 0.6 1.6 1.3 1.8 0.5 0.1 0.9-0.1 1.3-0.3 0.9-0.4 1.8-0.8 2.7-1.2 0.4-0.2 0.7-0.3 1.1-0.6 1.8-1 3.8-1.7 5.8-2.3 4.3-1.1 9-1.1 13.3 0.1 0.2 0.1 0.4 0.1 0.6 0.1 0.7-0.1 0.9-1 0.6-1.6-0.4-0.6-1-0.9-1.7-1.2-2.5-1.1-4.9-2.1-7.5-2.7-0.6-0.2-1.3-0.3-2-0.4-0.3-0.1-0.5 0-0.8-0.1s-0.9 0-1.1-0.1-0.3 0-0.3-0.2c0-0.4 0.7-0.7 1-0.8 0.5-0.3 1-0.7 1.5-1l5.4-3.6c0.4-0.2 0.6-0.6 1-0.9 1.2-0.9 2.8-1.3 4-2.2 0.4-0.3 0.9-0.6 1.3-0.9l2.7-1.8c1-0.6 2.2-1.2 3.2-1.8 0.9-0.5 1.9-0.8 2.7-1.6 0.9-0.8 2.2-1.4 3.2-2 1.2-0.7 2.3-1.4 3.5-2.1 4.1-2.5 8.2-4.9 12.7-6.6 5.2-1.9 10.6-3.4 16.2-4 5.4-0.6 10.8-0.3 16.2-0.5h0.5c1.4-0.1 2.3-0.1 1.7 1.7-1.4 4.5 1.3 7.5 4.3 10 3.4 2.9 7 5.7 11.3 7.1 4.8 1.6 9.6 3.8 14.9 2.7 3-0.6 6.5-4 6.8-6.4 0.2-1.7 0.1-3.3-0.3-4.9-0.4-1.4-1-3-2.2-3.9-0.9-0.6-1.6-1.6-2.4-2.4-0.9-0.8-1.9-1.7-2.9-2.3-2.1-1.4-4.2-2.6-6.5-3.5-3.2-1.3-6.6-2.2-10-3-0.8-0.2-1.6-0.4-2.5-0.5-0.2 0-1.3-0.1-1.3-0.3-0.1-0.2 0.3-0.4 0.5-0.6 0.9-0.8 1.8-1.5 2.7-2.2 1.9-1.4 3.8-2.8 5.8-3.9 2.1-1.2 4.3-2.3 6.6-3.2 1.2-0.4 2.3-0.8 3.6-1 0.6-0.2 1.2-0.2 1.8-0.4 0.4-0.1 0.7-0.3 1.1-0.5 1.2-0.5 2.7-0.5 3.9-0.8 1.3-0.2 2.7-0.4 4.1-0.7 2.7-0.4 5.5-0.8 8.2-1.1 3.3-0.4 6.7-0.7 10-1 7.7-0.6 15.3-0.3 23 1.3 4.2 0.9 8.3 1.9 12.3 3.6 1.2 0.5 2.3 1.1 3.5 1.5 0.7 0.2 1.3 0.7 1.8 1.1 0.7 0.6 1.5 1.1 2.3 1.7 0.2 0.2 0.6 0.3 0.8 0.2 0.1-0.1 0.1-0.2 0.2-0.4 0.1-0.9-0.2-1.7-0.7-2.4-0.4-0.6-1-1.4-1.6-1.9-0.8-0.7-2-1.1-2.9-1.6-1-0.5-2-0.9-3.1-1.3-2.5-1.1-5.2-2-7.8-2.8-1-0.8-2.4-1.2-3.7-1.4zm-64.4 25.8c4.7 1.3 10.3 3.3 14.6 7.9 0.9 1 2.4 1.8 1.8 3.5-0.6 1.6-2.2 1.5-3.6 1.7-4.9 0.8-9.4-1.2-13.6-2.9-4.5-1.7-8.8-4.3-11.9-8.3-0.5-0.6-1-1.4-1.1-2.2 0-0.3 0-0.6-0.1-0.9s-0.2-0.6 0.1-0.9c0.2-0.2 0.5-0.2 0.8-0.2 2.3-0.1 4.7 0 7.1 0.4 0.9 0.1 1.6 0.6 2.5 0.8 1.1 0.4 2.3 0.8 3.4 1.1z" />
            </svg>
          </figure>
          {/* Title */}
          <h1>Blog Grid</h1>
          {/* Breadcrumb */}
          <div className="d-flex justify-content-center position-relative">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Library</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* =======================
Page Banner END */}
  {/* =======================
Page content START */}
  <section className="position-relative pt-0 pt-lg-5">
    <div className="container">
      <div className="row g-4">
        {/* Card item START */}
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <div className="card bg-transparent">
            <div className="overflow-hidden rounded-3">
              <img src="assets/images/event/02.jpg" className="card-img" alt="course image" />
              {/* Overlay */}
              <div className="bg-overlay bg-dark opacity-4" />
              <div className="card-img-overlay d-flex align-items-start p-3">
                {/* badge */}
                <a href="#" className="badge text-bg-danger">Student life</a>
              </div>
            </div>
            {/* Card body */}
            <div className="card-body">
              {/* Title */}
              <h5 className="card-title"><a href="#">Student Loan Survey: Many Owe $50K-plus</a></h5>
              <p className="text-truncate-2">Affronting imprudence do he he everything. Offered chiefly farther of my no colonel shyness. Such on help ye some door if in. Laughter proposal laughing any son law consider. Needed except up piqued an.</p>
              {/* Info */}
              <div className="d-flex justify-content-between">
                <h6 className="mb-0"><a href="#">Frances Guerrero</a></h6>
                <span className="small">30M Ago</span>
              </div>
            </div>
          </div>
        </div>
        {/* Card item END */}
        {/* Card item START */}
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <div className="card bg-transparent">
            <div className="overflow-hidden rounded-3">
              <img src="assets/images/event/08.jpg" className="card-img" alt="course image" />
              {/* Overlay */}
              <div className="bg-overlay bg-dark opacity-4" />
              <div className="card-img-overlay d-flex align-items-start p-3">
                {/* badge */}
                <a href="#" className="badge text-bg-success">Student life</a>
              </div>
            </div>
            {/* Card body */}
            <div className="card-body">
              {/* Title */}
              <h5 className="card-title"><a href="#">How to make a college list</a></h5>
              <p className="text-truncate-2">Prospective students should start broadly and then narrow their list down to colleges that best fit their needs, experts say. Yet remarkably appearance get him his projection.</p>
              {/* Info */}
              <div className="d-flex justify-content-between">
                <h6 className="mb-0"><a href="#">Louis Crawford</a></h6>
                <span className="small">12H Ago</span>
              </div>
            </div>
          </div>
        </div>
        {/* Card item END */}
        {/* Card item START */}
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <div className="card bg-transparent">
            <div className="overflow-hidden rounded-3">
              <img src="assets/images/event/09.jpg" className="card-img" alt="course image" />
              {/* Overlay */}
              <div className="bg-overlay bg-dark opacity-4" />
              <div className="card-img-overlay d-flex align-items-start p-3">
                {/* badge */}
                <a href="#" className="badge text-bg-purple">Travel</a>
              </div>
            </div>
            {/* Card body */}
            <div className="card-body">
              {/* Title */}
              <h5 className="card-title"><a href="#">Never underestimate the influence of Eduport</a></h5>
              <p className="text-truncate-2">Prospective students should start broadly and then narrow their list</p>
              {/* Info */}
              <div className="d-flex justify-content-between">
                <h6 className="mb-0"><a href="#">Joan Wallace</a></h6>
                <span className="small">5D Ago</span>
              </div>
            </div>
          </div>
        </div>
        {/* Card item END */}
        {/* Card item START */}
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <div className="card bg-transparent">
            <div className="overflow-hidden rounded-3">
              <img src="assets/images/event/03.jpg" className="card-img-top" alt="course image" />
              {/* Overlay */}
              <div className="bg-overlay bg-dark opacity-4" />
              <div className="card-img-overlay d-flex align-items-start p-3">
                {/* badge */}
                <a href="#" className="badge text-bg-danger">Research</a>
              </div>
            </div>
            {/* Card body */}
            <div className="card-body">
              {/* Title */}
              <h5 className="card-title"><a href="#">Covid-19 and the college experienced</a></h5>
              <p className="text-truncate-2">Rooms oh fully taken by worse do. Points afraid but may end law. Points afraid but may end law.</p>
              {/* Info */}
              <div className="d-flex justify-content-between">
                <h6 className="mb-0"><a href="#">Amanda Reed</a></h6>
                <span className="small">July 21, 2021</span>
              </div>
            </div>
          </div>
        </div>
        {/* Card item END */}
        {/* Card item START */}
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <div className="card bg-transparent">
            <div className="overflow-hidden rounded-3">
              <img src="assets/images/event/07.jpg" className="card-img-top" alt="course image" />
              {/* Overlay */}
              <div className="bg-overlay bg-dark opacity-4" />
              <div className="card-img-overlay d-flex align-items-start p-3">
                {/* badge */}
                <a href="#" className="badge text-bg-success">Research</a>
              </div>
            </div>
            {/* Card body */}
            <div className="card-body">
              {/* Title */}
              <h5 className="card-title"><a href="#">Best Pinterest Boards for learning about business</a></h5>
              <p className="text-truncate-2">Fully taken by worse do. Points afraid but may end law. Points afraid but may end law.</p>
              {/* Info */}
              <div className="d-flex justify-content-between">
                <h6 className="mb-0"><a href="#">Samuel Bishop</a></h6>
                <span className="small">40D ago</span>
              </div>
            </div>
          </div>
        </div>
        {/* Card item END */}
        {/* Card item START */}
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <div className="card bg-transparent">
            <div className="overflow-hidden rounded-3">
              <img src="assets/images/event/04.jpg" className="card-img-top" alt="course image" />
              {/* Overlay */}
              <div className="bg-overlay bg-dark opacity-4" />
              <div className="card-img-overlay d-flex align-items-start p-3">
                {/* badge */}
                <a href="#" className="badge text-bg-primary">Sports</a>
              </div>
            </div>
            {/* Card body */}
            <div className="card-body">
              {/* Title */}
              <h5 className="card-title"><a href="#">The Olympics are over, now what?</a></h5>
              <p className="text-truncate-2">Rooms oh fully taken by worse do. Points afraid but may end law. Points afraid but may end law.</p>
              {/* Info */}
              <div className="d-flex justify-content-between">
                <h6 className="mb-0"><a href="#">Carolyn Ortiz</a></h6>
                <span className="small">Aug 31, 2021</span>
              </div>
            </div>
          </div>
        </div>
        {/* Card item END */}
        {/* Card item START */}
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <div className="card bg-transparent">
            <div className="overflow-hidden rounded-3">
              <img src="assets/images/event/05.jpg" className="card-imgp" alt="course image" />
              {/* Overlay */}
              <div className="bg-overlay bg-dark opacity-4" />
              <div className="card-img-overlay d-flex align-items-start p-3">
                {/* badge */}
                <a href="#" className="badge text-bg-info">Student story</a>
              </div>
            </div>
            {/* Card body */}
            <div className="card-body">
              {/* Title */}
              <h5 className="card-title"><a href="#">Campus Support for First-Year Students</a></h5>
              <p className="text-truncate-2">Prospective students should start broadly and then narrow their list</p>
              {/* Info */}
              <div className="d-flex justify-content-between">
                <h6 className="mb-0"><a href="#">Lori Stevens</a></h6>
                <span className="small">3M Ago</span>
              </div>
            </div>
          </div>
        </div>
        {/* Card item END */}
        {/* Card item START */}
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <div className="card bg-transparent">
            <div className="overflow-hidden rounded-3">
              <img src="assets/images/event/06.jpg" className="card-imgp" alt="course image" />
              {/* Overlay */}
              <div className="bg-overlay bg-dark opacity-4" />
              <div className="card-img-overlay d-flex align-items-start p-3">
                {/* badge */}
                <a href="#" className="badge text-bg-orange">Marketing</a>
              </div>
            </div>
            {/* Card body */}
            <div className="card-body">
              {/* Title */}
              <h5 className="card-title"><a href="#">Bad habits that people in the industry need to quit</a></h5>
              <p className="text-truncate-2">Prospective students should start broadly and then narrow their list</p>
              {/* Info */}
              <div className="d-flex justify-content-between">
                <h6 className="mb-0"><a href="#">Louis Crawford</a></h6>
                <span className="small">10D Ago</span>
              </div>
            </div>
          </div>
        </div>
        {/* Card item END */}
      </div> {/* Row end */}
      {/* Pagination START */}
      <nav className="d-flex justify-content-center mt-5" aria-label="navigation">
        <ul className="pagination pagination-primary-soft rounded mb-0">
          <li className="page-item mb-0"><a className="page-link" href="#" tabIndex={-1}><i className="fas fa-angle-double-left" /></a></li>
          <li className="page-item mb-0"><a className="page-link" href="#">1</a></li>
          <li className="page-item mb-0 active"><a className="page-link" href="#">2</a></li>
          <li className="page-item mb-0"><a className="page-link" href="#">..</a></li>
          <li className="page-item mb-0"><a className="page-link" href="#">6</a></li>
          <li className="page-item mb-0"><a className="page-link" href="#"><i className="fas fa-angle-double-right" /></a></li>
        </ul>
      </nav>
      {/* Pagination END */}
    </div>
  </section>
  {/* =======================
Page content END */}
</main>
{/* **************** MAIN CONTENT END **************** */}
<Footer/>
    </>
  )
}

export default Blog