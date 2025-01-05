import React from 'react'
import Footer from './Footer'

const CourseList = () => {
  return (
    <> 
    <div>
  <section className="bg-dark align-items-center d-flex" style={{background: 'url(assets/images/pattern/04.png) no-repeat center center', backgroundSize: 'cover'}}>
    {/* Main banner background image */}
    <div className="container">
      <div className="row">
        <div className="col-12">
          {/* Title */}
          <h1 className="text-white">Course List</h1>
          {/* Breadcrumb */}
          <div className="d-flex">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb breadcrumb-dark breadcrumb-dots mb-0">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active" aria-current="page">Courses</li>
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
  <section className="pt-5">
    <div className="container">
      {/* Search option START */}
      <div className="row mb-4 align-items-center">
        {/* Search bar */}
        <div className="col-sm-6 col-xl-4">
          <form className="border rounded p-2">
            <div className="input-group input-borderless">
              <input className="form-control me-1" type="search" placeholder="Search course" />
              <button type="button" className="btn btn-primary mb-0 rounded"><i className="fas fa-search" /></button>
            </div>
          </form>
        </div>
        {/* Select option */}
        <div className="col-sm-6 col-xl-3 mt-3 mt-lg-0">
          <form className="border rounded p-2 input-borderless">
            <select className="form-select form-select-sm js-choice" aria-label=".form-select-sm">
              <option value>Category</option>
              <option>All</option>
              <option>Networking</option>
              <option>FrontEnd</option>
              <option>Backend</option>
              <option>Graphics</option>
              <option>Digital Marketing</option>
              
            </select>
          </form>
        </div>
        {/* Select option */}
        <div className="col-sm-6 col-xl-3 mt-3 mt-xl-0">
          <form className="border rounded p-2 input-borderless">
            <select className="form-select form-select-sm js-choice" aria-label=".form-select-sm">
              <option value>Sort by</option>
              <option>Free</option>
              <option>Most viewed</option>
              <option>Popular</option>
            </select>
          </form>
        </div>
        {/* Button */}
        <div className="col-sm-6 col-xl-2 mt-3 mt-xl-0 d-grid">
          <a href="#" className="btn btn-lg btn-primary mb-0">Filter Results</a>
        </div>
      </div>
      {/* Search option END */}
      {/* Course list START */}
      <div className="row g-4 justify-content-center">
        {/* Card item START */}
        <div className="col-lg-10 col-xxl-6">
          <div className="card rounded overflow-hidden shadow">
            <div className="row g-0">
              {/* Image */}
              <div className="col-md-4">
                <img src="assets/images/courses/4by3/01.jpg" alt="card image" />
              </div>
              {/* Card body */}
              <div className="col-md-8">
                <div className="card-body">
                  {/* Title */}
                  <div className="d-flex justify-content-between mb-2">
                    <h5 className="card-title mb-0 mt-5" ><a href="#">The Complete Computer Networking Course - 12 Courses in 1</a></h5>
                    {/* Wishlist icon */}
                    <a href="#"><i className="fas fa-heart text-danger" /></a>
                  </div>
                  {/* Content */}
                  {/* Info */}
                  <ul className="list-inline mb-1">
                    <li className="list-inline-item h6 fw-light mb-1 mb-sm-0"><i className="far fa-clock text-danger me-2 mt-3" />6h 56m</li>
                    <li className="list-inline-item h6 fw-light mb-1 mb-sm-0"><i className="fas fa-table text-orange me-2 mt-3" />82 lectures</li>
                    <li className="list-inline-item h6 fw-light"><i className="fas fa-signal text-success me-2 mt-3" />Beginner</li>
                  </ul>
                  {/* Rating */}
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star-half-alt text-warning" /></li>
                    <li className="list-inline-item ms-2 h6 fw-light">4.5/5.0</li>
                  </ul>
                  <div className="mt-5 mt-sm-3 mx-3">
				    <a href="#" className="btn btn-dark">Buy Now</a>  
                    <a href="#" className="btn btn-dark mx-3" >Add Cart</a>   
				</div> 
                
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card item END */}
        {/* Card item START */}
        <div className="col-lg-10 col-xxl-6">
          <div className="card rounded overflow-hidden shadow">
            <div className="row g-0">
              {/* Image */}
              <div className="col-md-4">
                <img src="assets/images/courses/4by3/02.jpg" alt="card image" />
              </div>
              {/* Card body */}
              <div className="col-md-8">
                <div className="card-body">
                  {/* Title */}
                  <div className="d-flex justify-content-between mb-2">
                    <h5 className="card-title mb-0"><a href="#">Graphic Design Masterclass</a></h5>
                    {/* Wishlist icon */}
                    <a href="#" className="h6 fw-light"><i className="far fa-heart" /></a>
                  </div>
                  {/* Content */}
                  {/* Info */}
                  <ul className="list-inline mb-1">
                    <li className="list-inline-item h6 fw-light mb-1 mb-sm-0"><i className="far fa-clock text-danger me-2" />9h 56m</li>
                    <li className="list-inline-item h6 fw-light mb-1 mb-sm-0"><i className="fas fa-table text-orange me-2" />65 lectures</li>
                    <li className="list-inline-item h6 fw-light"><i className="fas fa-signal text-success me-2" />All level</li>
                  </ul>
                  {/* Rating */}
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="far fa-star text-warning" /></li>
                    <li className="list-inline-item ms-2 h6 fw-light">4.0/5.0</li>
                  </ul>
                  <div className="mt-5 mt-sm-3 mx-3">
				    <a href="#" className="btn btn-dark">Buy Now</a>  
                    <a href="#" className="btn btn-dark mx-3" >Add Cart</a>   
				</div> 
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card item END */}
        {/* Card item START */}
        <div className="col-lg-10 col-xxl-6">
          <div className="card rounded overflow-hidden shadow">
            <div className="row g-0">
              {/* Image */}
              <div className="col-md-4">
                <img src="assets/images/courses/4by3/03.jpg" alt="card image" />
              </div>
              {/* Card body */}
              <div className="col-md-8">
                <div className="card-body">
                  {/* Title */}
                  <div className="d-flex justify-content-between mb-2">
                    <h5 className="card-title mb-0"><a href="#">Create a Design System in Figma</a></h5>
                    {/* Wishlist icon */}
                    <a href="#" className="h6 fw-light"><i className="far fa-heart" /></a>
                  </div>
                  {/* Content */}
                  {/* Info */}
                  <ul className="list-inline mb-1">
                    <li className="list-inline-item h6 fw-light mb-1 mb-sm-0"><i className="far fa-clock text-danger me-2" />7h 16m</li>
                    <li className="list-inline-item h6 fw-light mb-1 mb-sm-0"><i className="fas fa-table text-orange me-2" />32 lectures</li>
                    <li className="list-inline-item h6 fw-light"><i className="fas fa-signal text-success me-2" />Intermediate</li>
                  </ul>
                  {/* Rating */}
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="far fa-star text-warning" /></li>
                    <li className="list-inline-item ms-2 h6 fw-light">4.0/5.0</li>
                  </ul>
                  <div className="mt-5 mt-sm-3 mx-3">
				    <a href="#" className="btn btn-dark">Buy Now</a>  
                    <a href="#" className="btn btn-dark mx-3" >Add Cart</a>   
				</div> 
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card item END */}
        {/* Card item START */}
        <div className="col-lg-10 col-xxl-6">
          <div className="card rounded overflow-hidden shadow">
            <div className="row g-0">
              {/* Image */}
              <div className="col-md-4">
                <img src="assets/images/courses/4by3/05.jpg" alt="card image" />
              </div>
              {/* Card body */}
              <div className="col-md-8">
                <div className="card-body">
                  {/* Title */}
                  <div className="d-flex justify-content-between mb-2">
                    <h5 className="card-title mb-0"><a href="#">The Complete Web Development in python</a></h5>
                    {/* Wishlist icon */}
                    <a href="#"><i className="fas fa-heart text-danger" /></a>
                  </div>
                  {/* Content */}
                  {/* Info */}
                  <ul className="list-inline mb-1">
                    <li className="list-inline-item h6 fw-light mb-1 mb-sm-0"><i className="far fa-clock text-danger me-2" />7h 16m</li>
                    <li className="list-inline-item h6 fw-light mb-1 mb-sm-0"><i className="fas fa-table text-orange me-2" />32 lectures</li>
                    <li className="list-inline-item h6 fw-light"><i className="fas fa-signal text-success me-2" />Intermediate</li>
                  </ul>
                  {/* Rating */}
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="far fa-star text-warning" /></li>
                    <li className="list-inline-item ms-2 h6 fw-light">4.0/5.0</li>
                  </ul>
                  <div className="mt-5 mt-sm-3 mx-3">
				    <a href="#" className="btn btn-dark">Buy Now</a>  
                    <a href="#" className="btn btn-dark mx-3" >Add Cart</a>   
				</div> 
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card item END */}
        {/* Card item START */}
        <div className="col-lg-10 col-xxl-6">
          <div className="card rounded overflow-hidden shadow">
            <div className="row g-0">
              {/* Image */}
              <div className="col-md-4">
                <img src="assets/images/courses/4by3/06.jpg" alt="card image" />
              </div>
              {/* Card body */}
              <div className="col-md-8">
                <div className="card-body">
                  {/* Title */}
                  <div className="d-flex justify-content-between mb-2">
                    <h5 className="card-title mb-0"><a href="#">Angular – The Complete Guider</a></h5>
                    {/* Wishlist icon */}
                    <a href="#" className="h6 fw-light"><i className="far fa-heart" /></a>
                  </div>
                  {/* Content */}
                  {/* Info */}
                  <ul className="list-inline mb-1">
                    <li className="list-inline-item h6 fw-light mb-1 mb-sm-0"><i className="far fa-clock text-danger me-2" />21h 16m</li>
                    <li className="list-inline-item h6 fw-light mb-1 mb-sm-0"><i className="fas fa-table text-orange me-2" />68 lectures</li>
                    <li className="list-inline-item h6 fw-light"><i className="fas fa-signal text-success me-2" />All level</li>
                  </ul>
                  {/* Rating */}
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star-half-alt text-warning" /></li>
                    <li className="list-inline-item ms-2 h6 fw-light">4.5/5.0</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card item END */}
        {/* Card item START */}
        <div className="col-lg-10 col-xxl-6">
          <div className="card rounded overflow-hidden shadow">
            <div className="row g-0">
              {/* Image */}
              <div className="col-md-4">
                <img src="assets/images/courses/4by3/07.jpg" alt="card image" />
              </div>
              {/* Card body */}
              <div className="col-md-8">
                <div className="card-body">
                  {/* Title */}
                  <div className="d-flex justify-content-between mb-2">
                    <h5 className="card-title mb-0"><a href="#">Deep Learning with React-Native</a></h5>
                    {/* Wishlist icon */}
                    <a href="#" className="h6 fw-light"><i className="far fa-heart" /></a>
                  </div>
                  {/* Content */}
                  {/* Info */}
                  <ul className="list-inline mb-1">
                    <li className="list-inline-item h6 fw-light mb-1 mb-sm-0"><i className="far fa-clock text-danger me-2" />10h 16m</li>
                    <li className="list-inline-item h6 fw-light mb-1 mb-sm-0"><i className="fas fa-table text-orange me-2" />21 lectures</li>
                    <li className="list-inline-item h6 fw-light"><i className="fas fa-signal text-success me-2" />Advance</li>
                  </ul>
                  {/* Rating */}
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star-half-alt text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="far fa-star text-warning" /></li>
                    <li className="list-inline-item ms-2 h6 fw-light">3.5/5.0</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card item END */}
        {/* Card item START */}
        <div className="col-lg-10 col-xxl-6">
          <div className="card rounded overflow-hidden shadow">
            <div className="row g-0">
              {/* Image */}
              <div className="col-md-4">
                <img src="assets/images/courses/4by3/09.jpg" alt="card image" />
              </div>
              {/* Card body */}
              <div className="col-md-8">
                <div className="card-body">
                  {/* Title */}
                  <div className="d-flex justify-content-between mb-2">
                    <h5 className="card-title mb-0"><a href="#">JavaScript: Full Understanding</a></h5>
                    {/* Wishlist icon */}
                    <a href="#"><i className="fas fa-heart text-danger" /></a>
                  </div>
                  {/* Content */}
                  {/* Info */}
                  <ul className="list-inline mb-1">
                    <li className="list-inline-item h6 fw-light mb-1 mb-sm-0"><i className="far fa-clock text-danger me-2" />7h 16m</li>
                    <li className="list-inline-item h6 fw-light mb-1 mb-sm-0"><i className="fas fa-table text-orange me-2" />12 lectures</li>
                    <li className="list-inline-item h6 fw-light"><i className="fas fa-signal text-success me-2" />Beginner</li>
                  </ul>
                  {/* Rating */}
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="far fa-star text-warning" /></li>
                    <li className="list-inline-item ms-2 h6 fw-light">4.0/5.0</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card item END */}
        {/* Card item START */}
        <div className="col-lg-10 col-xxl-6">
          <div className="card rounded overflow-hidden shadow">
            <div className="row g-0">
              {/* Image */}
              <div className="col-md-4">
                <img src="assets/images/courses/4by3/11.jpg" alt="card image" />
              </div>
              {/* Card body */}
              <div className="col-md-8">
                <div className="card-body">
                  {/* Title */}
                  <div className="d-flex justify-content-between mb-2">
                    <h5 className="card-title mb-0"><a href="#">Build Responsive Websites with HTML</a></h5>
                    {/* Wishlist icon */}
                    <a href="#" className="h6 fw-light"><i className="far fa-heart" /></a>
                  </div>
                  {/* Content */}
                  {/* Info */}
                  <ul className="list-inline mb-1">
                    <li className="list-inline-item h6 fw-light mb-1 mb-sm-0"><i className="far fa-clock text-danger me-2" />15h 16m</li>
                    <li className="list-inline-item h6 fw-light mb-1 mb-sm-0"><i className="fas fa-table text-orange me-2" />38 lectures</li>
                    <li className="list-inline-item h6 fw-light"><i className="fas fa-signal text-success me-2" />All level</li>
                  </ul>
                  {/* Rating */}
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="far fa-star text-warning" /></li>
                    <li className="list-inline-item ms-2 h6 fw-light">4.0/5.0</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card item END */}
        {/* Card item START */}
        <div className="col-lg-10 col-xxl-6">
          <div className="card rounded overflow-hidden shadow">
            <div className="row g-0">
              {/* Image */}
              <div className="col-md-4">
                <img src="assets/images/courses/4by3/12.jpg" alt="card image" />
              </div>
              {/* Card body */}
              <div className="col-md-8">
                <div className="card-body">
                  {/* Title */}
                  <div className="d-flex justify-content-between mb-2">
                    <h5 className="card-title mb-0"><a href="#">Build Websites with CSS</a></h5>
                    {/* Wishlist icon */}
                    <a href="#" className="h6 fw-light"><i className="far fa-heart" /></a>
                  </div>
                  {/* Content */}
                  {/* Info */}
                  <ul className="list-inline mb-1">
                    <li className="list-inline-item h6 fw-light mb-1 mb-sm-0"><i className="far fa-clock text-danger me-2" />22h 16m</li>
                    <li className="list-inline-item h6 fw-light mb-1 mb-sm-0"><i className="fas fa-table text-orange me-2" />16 lectures</li>
                    <li className="list-inline-item h6 fw-light"><i className="fas fa-signal text-success me-2" />Advance</li>
                  </ul>
                  {/* Rating */}
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star-half-alt text-warning" /></li>
                    <li className="list-inline-item ms-2 h6 fw-light">4.5/5.0</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card item END */}
        {/* Card item START */}
        <div className="col-lg-10 col-xxl-6">
          <div className="card rounded overflow-hidden shadow">
            <div className="row g-0">
              {/* Image */}
              <div className="col-md-4">
                <img src="assets/images/courses/4by3/13.jpg" alt="card image" />
              </div>
              {/* Card body */}
              <div className="col-md-8">
                <div className="card-body">
                  {/* Title */}
                  <div className="d-flex justify-content-between mb-2">
                    <h5 className="card-title mb-0"><a href="#">PHP with - CMS Project</a></h5>
                    {/* Wishlist icon */}
                    <a href="#"><i className="fas fa-heart text-danger" /></a>
                  </div>
                  {/* Content */}
                  {/* Info */}
                  <ul className="list-inline mb-1">
                    <li className="list-inline-item h6 fw-light mb-1 mb-sm-0"><i className="far fa-clock text-danger me-2" />10h 16m</li>
                    <li className="list-inline-item h6 fw-light mb-1 mb-sm-0"><i className="fas fa-table text-orange me-2" />9 lectures</li>
                    <li className="list-inline-item h6 fw-light"><i className="fas fa-signal text-success me-2" />Intermediate</li>
                  </ul>
                  {/* Rating */}
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star text-warning" /></li>
                    <li className="list-inline-item me-0 small"><i className="fas fa-star-half-alt text-warning" /></li>
                    <li className="list-inline-item ms-2 h6 fw-light">4.5/5.0</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card item END */}
      </div>
      {/* Course list END */}
      {/* Pagination START */}
      <div className="col-12">
        <nav className="mt-4 d-flex justify-content-center" aria-label="navigation">
          <ul className="pagination pagination-primary-soft d-inline-block d-md-flex rounded mb-0">
            <li className="page-item mb-0"><a className="page-link" href="#" tabIndex={-1}><i className="fas fa-angle-double-left" /></a></li>
            <li className="page-item mb-0"><a className="page-link" href="#">1</a></li>
            <li className="page-item mb-0 active"><a className="page-link" href="#">2</a></li>
            <li className="page-item mb-0"><a className="page-link" href="#">..</a></li>
            <li className="page-item mb-0"><a className="page-link" href="#">6</a></li>
            <li className="page-item mb-0"><a className="page-link" href="#"><i className="fas fa-angle-double-right" /></a></li>
          </ul>
        </nav>
      </div>
      {/* Pagination END */}
    </div>
  </section>
</div>
<Footer/>
    </>
  )
}

export default CourseList
