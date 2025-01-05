import React from 'react'
import { Link } from 'react-router-dom'

const GraphicsVideo = () => {
  return (
    <div> 
      <section className="bg-blue align-items-center d-flex" style={{background: 'url(assets/images/pattern/04.png) no-repeat center center', backgroundSize: 'cover'}}>
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          {/* Title */}
          <h1 className="text-white">Course Grid Classic</h1>
          {/* Breadcrumb */}
          <div className="d-flex justify-content-center">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb breadcrumb-dark breadcrumb-dots mb-0">
                <li className="breadcrumb-item"><a href="#">H/W&N/W</a></li>
                <li className="breadcrumb-item active" aria-current="page">H/W&N/W Video</li>
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
  <section className="py-5">
    <div className="container">
      <div className="row">
        {/* Main content START */}
        <div className="col-lg-8 col-xl-9">
          {/* Search option START */}
          <div className="row mb-4 align-items-center">
            {/* Search bar */}
            <div className="col-xl-6">
              <form className="border rounded p-2">
                <div className="input-group input-borderless">
                  <input className="form-control me-1" type="search" placeholder="Find your course" />
                  <button type="button" className="btn btn-primary mb-0 rounded z-index-1"><i className="fas fa-search" /></button>
                </div>
              </form>
            </div>
            {/* Select option */}
            <div className="col-xl-3 mt-3 mt-xl-0">
              <form className="border rounded p-2 input-borderless">
                <select className="form-select form-select-sm js-choice border-0" aria-label=".form-select-sm">
                  <option value>Most Viewed</option>
                  <option>Recently search</option>
                  <option>Most popular</option>
                  <option>Top rated</option>
                </select>
              </form>
            </div>
            {/* Content */}
            <div className="col-12 col-xl-3 d-flex justify-content-between align-items-center mt-3 mt-xl-0">
              {/* Advanced filter responsive toggler START */}
              <button className="btn btn-primary mb-0 d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSidebar" aria-controls="offcanvasSidebar">
                <i className="fas fa-sliders-h me-1" /> Show filter
              </button>
              {/* Advanced filter responsive toggler END */}
              {/* <p className="mb-0 text-end">Showing 1-7 of 32 result</p> */}
            </div>
          </div>
          {/* Search option END */}
          {/* Course Grid START */}
          <div className="row g-4">
            {/* Card item START */}
            <div className="col-sm-6 col-xl-4">
              <div className="card shadow h-100">
                {/* Image */}
                <img src="assets/images/courses/4by3/08.jpg" className="card-img-top" alt="course image" />
                {/* Card body */}
                <div className="card-body pb-0">
                  {/* Badge and favorite */}
                  <div className="d-flex justify-content-between mb-2">
                    <a href="#" className="badge bg-purple bg-opacity-10 text-purple">All level</a>
                    <a href="#" className="h6 fw-light mb-0"><i className="far fa-heart" /></a>
                  </div>
                  {/* Title */}
                  <Link to="/videoplayer1" className='card-title'><h5>Video1 Title</h5></Link>
                  <p className="mb-2 text-truncate-2">Description</p>
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
            <div className="col-sm-6 col-xl-4">
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
                  <h5 className="card-title"><a href="#">Video1 Title</a></h5>
                  <p className="mb-2 text-truncate-2">Description</p>
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
            <div className="col-sm-6 col-xl-4">
              <div className="card shadow h-100">
                {/* Image */}
                <img src="assets/images/courses/4by3/03.jpg" className="card-img-top" alt="course image" />
                <div className="card-body pb-0">
                  {/* Badge and favorite */}
                  <div className="d-flex justify-content-between mb-2">
                    <a href="#" className="badge bg-success bg-opacity-10 text-success">Beginner</a>
                    <a href="#" className="h6 fw-light mb-0"><i className="far fa-heart" /></a>
                  </div>
                  {/* Title */}
                  <h5 className="card-title"><a href="#">Create a Design System in Figma</a></h5>
                  <p className="mb-2 text-truncate-2">Rooms oh fully taken by worse do. Points afraid but may end afraid but may end.</p>
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
            <div className="col-sm-6 col-xl-4">
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
                  <h5 className="card-title"><a href="#">Deep Learning with React-Native </a></h5>
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
            <div className="col-sm-6 col-xl-4">
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
                  <h5 className="card-title"><a href="#">Build Responsive Websites with HTML</a></h5>
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
            <div className="col-sm-6 col-xl-4">
              <div className="card shadow h-100">
                {/* Image */}
                <img src="assets/images/courses/4by3/12.jpg" className="card-img-top" alt="course image" />
                <div className="card-body pb-0">
                  {/* Badge and favorite */}
                  <div className="d-flex justify-content-between mb-2">
                    <a href="#" className="badge bg-success bg-opacity-10 text-success">Beginner</a>
                    <a href="#" className="h6 fw-light mb-0"><i className="far fa-heart" /></a>
                  </div>
                  {/* Title */}
                  <h5 className="card-title"><a href="#">Build Websites with CSS</a></h5>
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
                    <span className="h6 fw-light mb-0"><i className="far fa-clock text-danger me-2" />36h 30m</span>
                    <span className="h6 fw-light mb-0"><i className="fas fa-table text-orange me-2" />72 lectures</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Card item END */}
            {/* Card item START */}
            <div className="col-sm-6 col-xl-4">
              <div className="card shadow h-100">
                {/* Image */}
                <img src="assets/images/courses/4by3/05.jpg" className="card-img-top" alt="course image" />
                <div className="card-body pb-0">
                  {/* Badge and favorite */}
                  <div className="d-flex justify-content-between mb-2">
                    <a href="#" className="badge bg-success bg-opacity-10 text-success">Beginner</a>
                    <a href="#" className="h6 fw-light mb-0"><i className="far fa-heart" /></a>
                  </div>
                  {/* Title */}
                  <h5 className="card-title"><a href="#">The Complete Web Development in python</a></h5>
                  <p className="text-truncate-2 mb-2">Mention Mr manners opinion if garrets enabled.</p>
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
                    <span className="h6 fw-light mb-0"><i className="far fa-clock text-danger me-2" />10h 00m</span>
                    <span className="h6 fw-light mb-0"><i className="fas fa-table text-orange me-2" />26 lectures</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Card item END */}
            {/* Card item START */}
            <div className="col-sm-6 col-xl-4">
              <div className="card shadow h-100">
                {/* Image */}
                <img src="assets/images/courses/4by3/06.jpg" className="card-img-top" alt="course image" />
                <div className="card-body pb-0">
                  {/* Badge and favorite */}
                  <div className="d-flex justify-content-between mb-2">
                    <a href="#" className="badge bg-info bg-opacity-10 text-info">Intermediate</a>
                    <a href="#" className="h6 fw-light mb-0"><i className="far fa-heart" /></a>
                  </div>
                  {/* Title */}
                  <h5 className="card-title"><a href="#">Angular – The Complete Guider</a></h5>
                  <p className="text-truncate-2 mb-2">Rooms oh fully taken by worse do. Points afraid but may end.</p>
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
                    <span className="h6 fw-light mb-0"><i className="far fa-clock text-danger me-2" />9h 32m</span>
                    <span className="h6 fw-light mb-0"><i className="fas fa-table text-orange me-2" />42 lectures</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Card item END */}
            {/* Card item START */}
            <div className="col-sm-6 col-xl-4">
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
                  <h5 className="card-title"><a href="#">Bootstrap 5 From Scratch</a></h5>
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
          </div>
          {/* Course Grid END */}
          {/* Pagination START */}
          <div className="col-12">
            <nav className="mt-4 d-flex justify-content-center" aria-label="navigation">
              <ul className="pagination pagination-primary-soft d-inline-block d-md-flex rounded mb-0">
                <li className="page-item mb-0"><a className="page-link" href="#" tabIndex={-1}><i className="fas fa-angle-double-left" /></a></li>
                <li className="page-item mb-0"><a className="page-link" href="#">1</a></li>
                <li className="page-item mb-0 active" aria-current="page"><a className="page-link" href="#">2</a></li>
                <li className="page-item mb-0"><a className="page-link" href="#">..</a></li>
                <li className="page-item mb-0"><a className="page-link" href="#">6</a></li>
                <li className="page-item mb-0"><a className="page-link" href="#"><i className="fas fa-angle-double-right" /></a></li>
              </ul>
            </nav>
          </div>
          {/* Pagination END */}
        </div>
        {/* Main content END */}
        {/* Right sidebar START */}
        <div className="col-lg-4 col-xl-3">
          {/* Responsive offcanvas body START */}
          <div className="offcanvas-lg offcanvas-end" tabIndex={-1} id="offcanvasSidebar">
            <div className="offcanvas-header bg-light">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Advance Filter</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasSidebar" aria-label="Close" />
            </div>
            <div className="offcanvas-body p-3 p-lg-0">
              <form>
                {/* Category START */}
                <div className="card card-body shadow p-4 mb-4">
                  {/* Title */}
                  <h4 className="mb-3">Category</h4>
                  {/* Category group */}
                  <div className="col-12">
                    {/* Checkbox */}
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault9" />
                        <label className="form-check-label" htmlFor="flexCheckDefault9">All</label>
                      </div>
                      <span className="small">(1256)</span>
                    </div>
                    {/* Checkbox */}
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault10" />
                        <label className="form-check-label" htmlFor="flexCheckDefault10">Development</label>
                      </div>
                      <span className="small">(365)</span>
                    </div>
                    {/* Checkbox */}
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault11" />
                        <label className="form-check-label" htmlFor="flexCheckDefault11">Design</label>
                      </div>
                      <span className="small">(156)</span>
                    </div>
                    {/* Checkbox */}
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault12" />
                        <label className="form-check-label" htmlFor="flexCheckDefault12">Accounting</label>
                      </div>
                      <span className="small">(65)</span>
                    </div>
                    {/* Checkbox */}
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault17" />
                        <label className="form-check-label" htmlFor="flexCheckDefault17">Translation</label>
                      </div>
                      <span className="small">(245)</span>
                    </div>
                    {/* Checkbox */}
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault13" />
                        <label className="form-check-label" htmlFor="flexCheckDefault13">Finance</label>
                      </div>
                      <span className="small">(184)</span>
                    </div>
                    {/* Checkbox */}
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault14" />
                        <label className="form-check-label" htmlFor="flexCheckDefault14">Legal</label>
                      </div>
                      <span className="small">(65)</span>
                    </div>
                    {/* Checkbox */}
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault15" />
                        <label className="form-check-label" htmlFor="flexCheckDefault15">Photography</label>
                      </div>
                      <span className="small">(99)</span>
                    </div>
                    {/* Collapse body */}
                    <div className="collapse multi-collapse" id="multiCollapseExample1">
                      <div className="card card-body p-0">
                        {/* Checkbox */}
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault16" />
                            <label className="form-check-label" htmlFor="flexCheckDefault16">Writing</label>
                          </div>
                          <span className="small">(178)</span>
                        </div>
                        {/* Checkbox */}
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault18" />
                            <label className="form-check-label" htmlFor="flexCheckDefault18">Marketing</label>
                          </div>
                          <span className="small">(104)</span>
                        </div>
                      </div>
                    </div>
                    {/* Collapse button */}
                    <a className=" p-0 mb-0 mt-2 btn-more d-flex align-items-center" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">
                      See <span className="see-more ms-1">more</span><span className="see-less ms-1">less</span><i className="fas fa-angle-down ms-2" />
                    </a>
                  </div>
                </div>
                {/* Category END */}
                {/* Price START */}
                <div className="card card-body shadow p-4 mb-4">
                  {/* Title */}
                  <h4 className="mb-3">Price Level</h4>
                  <ul className="list-inline mb-0">
                    {/* Rent */}
                    <li className="list-inline-item">
                      <input type="radio" className="btn-check" name="options" id="option1" />
                      <label className="btn btn-light btn-primary-soft-check" htmlFor="option1">All</label>
                    </li>
                    {/* Sale */}
                    <li className="list-inline-item">
                      <input type="radio" className="btn-check" name="options" id="option2" />
                      <label className="btn btn-light btn-primary-soft-check" htmlFor="option2">Free</label>
                    </li>
                    {/* Buy */}
                    <li className="list-inline-item">
                      <input type="radio" className="btn-check" name="options" id="option3" />
                      <label className="btn btn-light btn-primary-soft-check" htmlFor="option3">Paid</label>
                    </li>
                  </ul>
                </div>
                {/* Price END */}
                {/* Skill level START */}
                <div className="card card-body shadow p-4 mb-4">
                  {/* Title */}
                  <h4 className="mb-3">Skill level</h4>
                  <ul className="list-inline mb-0">
                    {/* Item */}
                    <li className="list-inline-item mb-2">
                      <input type="checkbox" className="btn-check" id="btn-check-12" />
                      <label className="btn btn-light btn-primary-soft-check" htmlFor="btn-check-12">All levels</label>
                    </li>
                    {/* Item */}
                    <li className="list-inline-item mb-2">
                      <input type="checkbox" className="btn-check" id="btn-check-9" />
                      <label className="btn btn-light btn-primary-soft-check" htmlFor="btn-check-9">Beginner</label>
                    </li>
                    {/* Item */}
                    <li className="list-inline-item mb-2">
                      <input type="checkbox" className="btn-check" id="btn-check-10" />
                      <label className="btn btn-light btn-primary-soft-check" htmlFor="btn-check-10">Intermediate</label>
                    </li>
                    {/* Item */}
                    <li className="list-inline-item mb-2">
                      <input type="checkbox" className="btn-check" id="btn-check-11" />
                      <label className="btn btn-light btn-primary-soft-check" htmlFor="btn-check-11">Advanced</label>
                    </li>
                  </ul>
                </div>
                {/* Skill level END */}
                {/* Language START */}
                <div className="card card-body shadow p-4 mb-4">
                  {/* Title */}
                  <h4 className="mb-3">Language</h4>
                  <ul className="list-inline mb-0 g-3">
                    {/* Item */}
                    <li className="list-inline-item mb-2">
                      <input type="checkbox" className="btn-check" id="btn-check-2" />
                      <label className="btn btn-light btn-primary-soft-check" htmlFor="btn-check-2">English</label>
                    </li>
                    {/* Item */}
                    <li className="list-inline-item mb-2">
                      <input type="checkbox" className="btn-check" id="btn-check-3" />
                      <label className="btn btn-light btn-primary-soft-check" htmlFor="btn-check-3">Francas</label>
                    </li>
                    {/* Item */}
                    <li className="list-inline-item mb-2">
                      <input type="checkbox" className="btn-check" id="btn-check-4" />
                      <label className="btn btn-light btn-primary-soft-check" htmlFor="btn-check-4">Hindi</label>
                    </li>
                    {/* Item */}
                    <li className="list-inline-item mb-2">
                      <input type="checkbox" className="btn-check" id="btn-check-5" />
                      <label className="btn btn-light btn-primary-soft-check" htmlFor="btn-check-5">Russian</label>
                    </li>
                    {/* Item */}
                    <li className="list-inline-item mb-2">
                      <input type="checkbox" className="btn-check" id="btn-check-6" />
                      <label className="btn btn-light btn-primary-soft-check" htmlFor="btn-check-6">Spanish</label>
                    </li>
                    {/* Item */}
                    <li className="list-inline-item mb-2">
                      <input type="checkbox" className="btn-check" id="btn-check-7" />
                      <label className="btn btn-light btn-primary-soft-check" htmlFor="btn-check-7">Bengali</label>
                    </li>
                    {/* Item */}
                    <li className="list-inline-item mb-2">
                      <input type="checkbox" className="btn-check" id="btn-check-8" />
                      <label className="btn btn-light btn-primary-soft-check" htmlFor="btn-check-8">Portuguese</label>
                    </li>
                  </ul>
                </div>
                {/* Language END */}
              </form>{/* Form End */}
            </div>
            {/* Button */}
            <div className="d-grid p-2 p-lg-0 text-center">
              <button className="btn btn-primary mb-0">Filter Results</button>
            </div>
          </div>
          {/* Responsive offcanvas body END */}
        </div>
        {/* Right sidebar END */}
      </div>{/* Row END */}
    </div>
  </section>
    </div>
  )
}

export default GraphicsVideo
