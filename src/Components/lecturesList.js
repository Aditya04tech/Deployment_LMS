import React from 'react'

const lecturesList = () => {
  return (
    <>
    
    <div>
  <section className="bg-dark align-items-center d-flex" style={{background: 'url(assets/images/pattern/04.png) no-repeat center center', backgroundSize: 'cover'}}>
    {/* Main banner background image */}
    <div className="container">
      <div className="row">
        <div className="col-12">
          {/* Title */}
          <h1 className="text-white">Course List Classic</h1>
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
  <section className="pb-0 py-sm-5">
    <div className="container">
      {/* Title and select START */}
      <div className="row g-3 align-items-center mb-4">
        {/* Content */}
        <div className="col-md-4">
          <h4 className="mb-0">Showing 1 of 10 result</h4>
        </div>
        {/* Select option */}
        <div className="col-md-8">
          <div className="row g-3 align-items-center justify-content-md-end me-auto">
            {/* List and Grid icon */}
            <div className="col-sm-4 col-xl-6 text-md-end d-none d-md-block">
              <ul className="list-inline mb-0">
                {/* Grid icon */}
                <li className="list-inline-item"><a href="course-grid.html" className="btn btn-outline-light mb-0 me-2"><i className="fas fa-fw fa-th-large" /></a></li>
                {/* list icon */}
                <li className="list-inline-item"><a href="course-list.html" className="btn btn-outline-light mb-0 me-2"><i className="fas fa-fw fa-list-ul" /></a></li>
              </ul>
            </div>
            {/* Short by filter */}
            <form className="col-md-4 border rounded p-1 input-borderless">
              <select className="form-select js-choice z-index-9" aria-label=".form-select-sm">
                <option value>Sort by</option>
                <option>Free</option>
                <option>Newest</option>
                <option>Most popular</option>
                <option>Most Viewed</option>
              </select>
            </form>
            {/* Advanced filter responsive toggler START */}
            <div className="col-4 text-md-end">
              <button className="btn btn-primary mb-0 d-xl-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSidebar" aria-controls="offcanvasSidebar">
                <i className="fas fa-sliders-h me-1" /> Show filter
              </button>
            </div>
            {/* Advanced filter responsive toggler END */}
          </div>
        </div>
      </div>
      {/* Title and select END */}
      <div className="row">
        {/* Main content START */}
        <div className="col-xl-9 col-xxl-8">
          {/* Course list START */}
          <div className="row g-4">
            {/* Card list START */}
            <div className="col-12">
              <div className="card shadow overflow-hidden p-2">
                <div className="row g-0">
                  <div className="col-md-5 overflow-hidden">
                    <img src="assets/images/courses/4by3/06.jpg" className="rounded-2" alt="Card image" />
                    {/* Ribbon */}
                    <div className="card-img-overlay">
                      <div className="ribbon"><span>Free</span></div>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      {/* Badge and rating */}
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        {/* Badge */}
                        <a href="#" className="badge text-bg-primary mb-2 mb-sm-0">Development</a>
                        {/* Rating and wishlist */}
                        <div>
                          <span className="h6 fw-light me-3"><i className="fas fa-star text-warning me-1" />4.5</span>
                          <a href="#" className="text-danger"><i className="fas fa-heart" /></a>
                        </div>
                      </div>
                      {/* Title */}
                      <h5 className="card-title"><a href="#">Networking</a></h5>
                      <p className="text-truncate-2 d-none d-lg-block">Satisfied conveying a dependent contented he gentleman agreeable do be. dependent contented he</p>
                      {/* Info */}
                      <ul className="list-inline">
                        <li className="list-inline-item h6 fw-light mb-1 mb-sm-0"><i className="far fa-clock text-danger me-2" />21h 56m</li>
                        <li className="list-inline-item h6 fw-light mb-1 mb-sm-0"><i className="fas fa-table text-orange me-2" />52 lectures</li>
                        <li className="list-inline-item h6 fw-light"><i className="fas fa-signal text-success me-2" />Intermediate</li>
                      </ul>
                      {/* Price and avatar */}
                      <div className="d-sm-flex justify-content-sm-between align-items-center">
                        {/* Avatar */}
                        <div className="d-flex align-items-center">
                          <div className="avatar">
                            <img className="avatar-img rounded-circle" src="assets/images/avatar/06.jpg" alt="avatar" />
                          </div>
                          <p className="mb-0 ms-2"><a href="#" className="h6 fw-light">Jacqueline Miller</a></p>
                        </div>
                        {/* Price */}
                        <div className="mt-3 mt-sm-0">
                          <a href="#" className="btn btn-dark">View more</a>    
                        </div>                  
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Card list END */}
            {/* Card list START */}
            <div className="col-12">
              <div className="card shadow p-2">
                <div className="row g-0">
                  <div className="col-md-5">
                    <img src="assets/images/courses/4by3/01.jpg" className="rounded-2" alt="Card image" />
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      {/* Badge and rating */}
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        {/* Badge */}
                        <a href="#" className="badge text-bg-primary mb-2 mb-sm-0">Marketing</a>
                        {/* Rating and wishlist */}
                        <div>
                          <span className="h6 fw-light me-3"><i className="fas fa-star text-warning me-1" />4.5</span>
                          <a href="#" className="h6 fw-light"><i className="far fa-heart" /></a>
                        </div>
                      </div>
                      {/* Title */}
                      <h5 className="card-title"><a href="#">The Complete Digital Marketing Course - 12 Courses in 1</a></h5>
                      <p className="text-truncate">Explained propriety off out perpetual his you. Dependent contented he explained propriety off out perpetual his you. </p>
                      {/* Info */}
                      <ul className="list-inline">
                        <li className="list-inline-item h6 fw-light mb-1 mb-sm-0"><i className="far fa-clock text-danger me-2" />6h 56m</li>
                        <li className="list-inline-item h6 fw-light mb-1 mb-sm-0"><i className="fas fa-table text-orange me-2" />82 lectures</li>
                        <li className="list-inline-item h6 fw-light"><i className="fas fa-signal text-success me-2" />Beginner</li>
                      </ul>
                      {/* Price and avatar */}
                      <div className="d-sm-flex justify-content-sm-between align-items-center">
                        {/* Avatar */}
                        <div className="d-flex align-items-center">
                          <div className="avatar">
                            <img className="avatar-img rounded-circle" src="assets/images/avatar/10.jpg" alt="avatar" />
                          </div>
                          <p className="mb-0 ms-2"><a href="#" className="h6 fw-light">Larry Lawson</a></p>
                        </div>
                        {/* Price */}
                        <div className="mt-3 mt-sm-0">
                          <a href="#" className="btn btn-dark">View more</a>    
                        </div>                  
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Card list END */}
            {/* Card list START */}
            <div className="col-12">
              <div className="card shadow p-2">
                <div className="row g-0">
                  <div className="col-md-5">
                    <img src="assets/images/courses/4by3/11.jpg" className="rounded-2" alt="Card image" />
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      {/* Badge and rating */}
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        {/* Badge */}
                        <a href="#" className="badge text-bg-primary mb-2 mb-sm-0">Development</a>
                        {/* Rating and wishlist */}
                        <div>
                          <span className="h6 fw-light me-3"><i className="fas fa-star text-warning me-1" />4.8</span>
                          <a href="#" className="h6 fw-light"><i className="far fa-heart" /></a>
                        </div>
                      </div>
                      {/* Title */}
                      <h5 className="card-title"><a href="#">The Ultimate Copywriting Course - Write Copy That Sells</a></h5>
                      <p className="text-truncate">Insipidity the sufficient discretion imprudence resolution sir him decisively. Proceed how any engaged visitor.</p>
                      {/* Info */}
                      <ul className="list-inline">
                        <li className="list-inline-item h6 fw-light mb-1 mb-sm-0"><i className="far fa-clock text-danger me-2" />15h 30m</li>
                        <li className="list-inline-item h6 fw-light mb-1 mb-sm-0"><i className="fas fa-table text-orange me-2" />72 lectures</li>
                        <li className="list-inline-item h6 fw-light"><i className="fas fa-signal text-success me-2" />All level</li>
                      </ul>
                      {/* Price and avatar */}
                      <div className="d-sm-flex justify-content-sm-between align-items-center">
                        {/* Avatar */}
                        <div className="d-flex align-items-center">
                          <div className="avatar">
                            <img className="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="avatar" />
                          </div>
                          <p className="mb-0 ms-2"><a href="#" className="h6 fw-light">Louis Crawford</a></p>
                        </div>
                        {/* Price */}
                        <div className="mt-3 mt-sm-0">
                          <a href="#" className="btn btn-dark">View more</a>    
                        </div>                  
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Card list END */}
            {/* Card list START */}
            <div className="col-12">
              <div className="card shadow p-2">
                <div className="row g-0">
                  <div className="col-md-5">
                    <img src="assets/images/courses/4by3/03.jpg" className="rounded-2" alt="Card image" />
                  </div>
                  <div className="col-md-7">
                    <div className="card-body">
                      {/* Badge and rating */}
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        {/* Badge */}
                        <a href="#" className="badge text-bg-primary mb-2 mb-sm-0">Design</a>
                        {/* Rating and wishlist */}
                        <div>
                          <span className="h6 fw-light me-3"><i className="fas fa-star text-warning me-1" />4.0</span>
                          <a href="#" className="h6 fw-light"><i className="far fa-heart" /></a>
                        </div>
                      </div>
                      {/* Title */}
                      <h5 className="card-title"><a href="#">Create a Design System in Figma</a></h5>
                      <p className="text-truncate-2">Fulfilled direction use continual set him propriety continued. Saw met applauded favorite deficient engrossed concealed and her. Concluded boy perpetual old supposing.</p>
                      {/* Info */}
                      <ul className="list-inline">
                        <li className="list-inline-item h6 fw-light mb-1 mb-sm-0"><i className="far fa-clock text-danger me-2" />7h 50m</li>
                        <li className="list-inline-item h6 fw-light mb-1 mb-sm-0"><i className="fas fa-table text-orange me-2" />21 lectures</li>
                        <li className="list-inline-item h6 fw-light"><i className="fas fa-signal text-success me-2" />All level</li>
                      </ul>
                      {/* Price and avatar */}
                      <div className="d-sm-flex justify-content-sm-between align-items-center">
                        {/* Avatar */}
                        <div className="d-flex align-items-center">
                          <div className="avatar">
                            <img className="avatar-img rounded-circle" src="assets/images/avatar/09.jpg" alt="avatar" />
                          </div>
                          <p className="mb-0 ms-2"><a href="#" className="h6 fw-light">Frances Guerrero</a></p>
                        </div>
                        {/* Price */}
                        <div className="mt-3 mt-sm-0">
                          <a href="#" className="btn btn-dark">View more</a>    
                        </div>                  
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Card list END */}
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
        {/* Main content END */}
        {/* Right sidebar START */}
        <div className="col-lg-3 col-xxl-4">
          {/* Responsive offcanvas body START */}
          <div className="offcanvas-xl offcanvas-end" tabIndex={-1} id="offcanvasSidebar">
            <div className="offcanvas-header bg-light">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Advance Filter</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasSidebar" aria-label="Close" />
            </div>
            <div className="offcanvas-body p-3 p-xl-0">
              <form>
                {/* Category START */}
                <div className="card card-body shadow p-4 mb-4">
                  {/* Title */}
                  <h4 className="mb-4">Category</h4>
                  <div className="row">
                    {/* Category group */}
                    <div className="col-xxl-6">
                      {/* Checkbox */}
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault9" />
                        <label className="form-check-label" htmlFor="flexCheckDefault9">All</label>
                      </div>
                      {/* Checkbox */}
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault10" />
                        <label className="form-check-label" htmlFor="flexCheckDefault10">Development</label>
                      </div>
                      {/* Checkbox */}
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault11" />
                        <label className="form-check-label" htmlFor="flexCheckDefault11">Design</label>
                      </div>
                      {/* Checkbox */}
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault12" />
                        <label className="form-check-label" htmlFor="flexCheckDefault12">Accounting</label>
                      </div>
                      {/* Checkbox */}
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault17" />
                        <label className="form-check-label" htmlFor="flexCheckDefault17">Translation</label>
                      </div>
                    </div>
                    {/* Category group */}
                    <div className="col-xxl-6">
                      {/* Checkbox */}
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault13" />
                        <label className="form-check-label" htmlFor="flexCheckDefault13">Finance</label>
                      </div>
                      {/* Checkbox */}
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault14" />
                        <label className="form-check-label" htmlFor="flexCheckDefault14">Legal</label>
                      </div>
                      {/* Checkbox */}
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault15" />
                        <label className="form-check-label" htmlFor="flexCheckDefault15">Photography</label>
                      </div>
                      {/* Checkbox */}
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault16" />
                        <label className="form-check-label" htmlFor="flexCheckDefault16">Writing</label>
                      </div>
                      {/* Checkbox */}
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault18" />
                        <label className="form-check-label" htmlFor="flexCheckDefault18">Marketing</label>
                      </div>
                    </div>
                  </div>{/* Row END */}
                </div>
                {/* Category END */}
                {/* Price START */}
                <div className="card card-body shadow p-4 mb-4">
                  {/* Title */}
                  <h4 className="mb-3">Price Level</h4>
                  <ul className="list-inline mb-0">
                    {/* Price item */}
                    <li className="list-inline-item">
                      <input type="radio" className="btn-check" name="options" id="option1" />
                      <label className="btn btn-light btn-primary-soft-check" htmlFor="option1">All</label>
                    </li>
                    {/* Price item */}
                    <li className="list-inline-item">
                      <input type="radio" className="btn-check" name="options" id="option2" />
                      <label className="btn btn-light btn-primary-soft-check" htmlFor="option2">Free</label>
                    </li>
                    {/* Price item */}
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
            <div className="d-grid p-2 p-xl-0 bg-body text-center">
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

    </>
  )
}

export default lecturesList
