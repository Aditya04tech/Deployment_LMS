import React from 'react'
import IFooter from "./IFooter"

const Instructor_List = () => {
  return (
    <div>
      
   <main>
  {/* =======================
Page Banner START */}
  <section className="py-0">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="bg-dark p-4 text-center rounded-3">
            <h1 className="text-white m-0">Instructors list</h1>
            {/* Breadcrumb */}
            <div className="d-flex justify-content-center">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb breadcrumb-dark breadcrumb-dots mb-0">
                  <li className="breadcrumb-item"><Link href="#">Home</Link></li>
                  <li className="breadcrumb-item active" aria-current="page">instructor list</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* =======================
Page Banner END */}

  {/* =======================
Inner part START */}
  <section className="pt-4">
    <div className="container">
      {/* Search option START */}
      <div className="row mb-4 align-items-center">
        {/* Search bar */}
        <div className="col-sm-6 col-xl-4">
          <form className="border rounded p-2">
            <div className="input-group input-borderless">
              <input className="form-control me-1" type="search" placeholder="Search instructor" />
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
              <option>Development</option>
              <option>Design</option>
              <option>Accounting</option>
              <option>Translation</option>
              <option>Finance</option>
              <option>Legal</option>
              <option>Photography</option>
              <option>Writing</option>
              <option>Marketing</option>
            </select>
          </form>
        </div>
        {/* Select option */}
        <div className="col-sm-6 col-xl-3 mt-3 mt-xl-0">
          <form className="border rounded p-2 input-borderless">
            <select className="form-select form-select-sm js-choice" aria-label=".form-select-sm">
              <option value>Sort by</option>
              <option>Most popular</option>
              <option>Most viewed</option>
              <option>Top rated</option>
            </select>
          </form>
        </div>
        {/* Button */}
        <div className="col-sm-6 col-xl-2 mt-3 mt-xl-0 d-grid">
          <Link href="#" className="btn btn-lg btn-primary mb-0">Filter Results</Link>
        </div>
      </div>
      {/* Search option END */}
      {/* Instructor list START */}
      <div className="row g-4 justify-content-center">
        {/* Card item START */}
        <div className="col-lg-10 col-xl-6">
          <div className="card shadow p-2">
            <div className="row g-0">
              {/* Image */}
              <div className="col-md-4">
                <img src="assets/images/instructor/01.jpg" className="rounded-3" alt="" />
              </div>
              {/* Card body */}
              <div className="col-md-8">
                <div className="card-body">
                  {/* Title */}
                  <div className="d-sm-flex justify-content-sm-between mb-2 mb-sm-3">
                    <div>
                      <h5 className="card-title mb-0"><Link href="#">Dennis Barrett</Link></h5>
                      <p className="small mb-2 mb-sm-0">Professor at Sigma College</p>
                    </div>
                    <span className="h6 fw-light">4.3<i className="fas fa-star text-warning ms-1" /></span>
                  </div>
                  {/* Content */}
                  <p className="text-truncate-2 mb-3">Perceived end knowledge certainly day sweetness why cordially. Ask a quick six seven offer see among.</p>
                  {/* Info */}
                  <div className="d-sm-flex justify-content-sm-between align-items-center">
                    {/* Title */}
                    <h6 className="text-orange mb-0">Digital Marketing</h6>
                    {/* Social button */}
                    <ul className="list-inline mb-0 mt-3 mt-sm-0">
                      <li className="list-inline-item"> 
                        <Link className="mb-0 me-1 text-facebook" href="#"><i className="fab fa-fw fa-facebook-f" /></Link> 
                      </li>
                      <li className="list-inline-item"> 
                        <Link className="mb-0 me-1 text-instagram-gradient" href="#"><i className="fab fa-fw fa-instagram" /></Link> 
                      </li>
                      <li className="list-inline-item"> 
                        <Link className="mb-0 me-1 text-twitter" href="#"><i className="fab fa-fw fa-twitter" /></Link> 
                      </li>
                      <li className="list-inline-item"> 
                        <Link className="mb-0 text-linkedin" href="#"><i className="fab fa-fw fa-linkedin-in" /></Link> 
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card item END */}
        {/* Card item START */}
        <div className="col-lg-10 col-xl-6">
          <div className="card shadow p-2">
            <div className="row g-0">
              {/* Image */}
              <div className="col-md-4">
                <img src="assets/images/instructor/02.jpg" className="rounded-3" alt="" />
              </div>
              {/* Card body */}
              <div className="col-md-8">
                <div className="card-body">
                  {/* Title */}
                  <div className="d-sm-flex justify-content-sm-between mb-2 mb-sm-3">
                    <div>
                      <h5 className="card-title mb-0"><Link href="#">Jacqueline Miller</Link></h5>
                      <p className="small mb-2 mb-sm-0">Professor at Eastbay College</p>
                    </div>
                    <span className="h6 fw-light">4.0<i className="fas fa-star text-warning ms-1" /></span>
                  </div>
                  {/* Content */}
                  <p className="text-truncate-2 mb-3">Passage its ten led hearted removal cordial. Preference any astonished unreserved Mrs.</p>
                  {/* Info */}
                  <div className="d-sm-flex justify-content-sm-between align-items-center">
                    {/* Title */}
                    <h6 className="text-orange mb-0">Graphic Designer</h6>
                    {/* Social button */}
                    <ul className="list-inline mb-0 mt-3 mt-sm-0">
                      <li className="list-inline-item"> 
                        <Link className="mb-0 me-1 text-facebook" href="#"><i className="fab fa-fw fa-facebook-f" /></Link> 
                      </li>
                      <li className="list-inline-item"> 
                        <Link className="mb-0 me-1 text-instagram-gradient" href="#"><i className="fab fa-fw fa-instagram" /></Link> 
                      </li>
                      <li className="list-inline-item"> 
                        <Link className="mb-0 me-1 text-twitter" href="#"><i className="fab fa-fw fa-twitter" /></Link> 
                      </li>
                      <li className="list-inline-item"> 
                        <Link className="mb-0 text-linkedin" href="#"><i className="fab fa-fw fa-linkedin-in" /></Link> 
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card item END */}
        {/* Card item START */}
        <div className="col-lg-10 col-xl-6">
          <div className="card shadow p-2">
            <div className="row g-0">
              {/* Image */}
              <div className="col-md-4">
                <img src="assets/images/instructor/03.jpg" className="rounded-3" alt="" />
              </div>
              {/* Card body */}
              <div className="col-md-8">
                <div className="card-body">
                  {/* Title */}
                  <div className="d-sm-flex justify-content-sm-between mb-2 mb-sm-3">
                    <div>
                      <h5 className="card-title mb-0"><Link href="#">Louis Ferguson</Link></h5>
                      <p className="small mb-2 mb-sm-0">Professor at Cambridge College</p>
                    </div>
                    <span className="h6 fw-light">3.8<i className="fas fa-star text-warning ms-1" /></span>
                  </div>
                  {/* Content */}
                  <p className="text-truncate-2 mb-3">Passage its ten led hearted removal cordial. Preference any astonished unreserved Mrs.</p>
                  {/* Info */}
                  <div className="d-sm-flex justify-content-sm-between align-items-center">
                    {/* Title */}
                    <h6 className="text-orange mb-0">Engineering Physics</h6>
                    {/* Social button */}
                    <ul className="list-inline mb-0 mt-3 mt-sm-0">
                      <li className="list-inline-item"> 
                        <Link className="mb-0 me-1 text-facebook" href="#"><i className="fab fa-fw fa-facebook-f" /></Link> 
                      </li>
                      <li className="list-inline-item"> 
                        <Link className="mb-0 me-1 text-instagram-gradient" href="#"><i className="fab fa-fw fa-instagram" /></Link> 
                      </li>
                      <li className="list-inline-item"> 
                        <Link className="mb-0 me-1 text-twitter" href="#"><i className="fab fa-fw fa-twitter" /></Link> 
                      </li>
                      <li className="list-inline-item"> 
                        <Link className="mb-0 text-linkedin" href="#"><i className="fab fa-fw fa-linkedin-in" /></Link> 
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card item END */}
        {/* Card item START */}
        <div className="col-lg-10 col-xl-6">
          <div className="card shadow p-2">
            <div className="row g-0">
              {/* Image */}
              <div className="col-md-4">
                <img src="assets/images/instructor/04.jpg" className="rounded-3" alt="" />
              </div>
              {/* Card body */}
              <div className="col-md-8">
                <div className="card-body">
                  {/* Title */}
                  <div className="d-sm-flex justify-content-sm-between mb-2 mb-sm-3">
                    <div>
                      <h5 className="card-title mb-0"><Link href="#">Frances Guerrero</Link></h5>
                      <p className="small mb-2 mb-sm-0">Professor at LPU College</p>
                    </div>
                    <span className="h6 fw-light">4.5<i className="fas fa-star text-warning ms-1" /></span>
                  </div>
                  {/* Content */}
                  <p className="text-truncate-2 mb-3">As it so contrasted oh estimating instrument. Size like body some one had. Are conduct viewing boy minutes warrant the expense</p>
                  {/* Info */}
                  <div className="d-sm-flex justify-content-sm-between align-items-center">
                    {/* Title */}
                    <h6 className="text-orange mb-0">Graphic Designer</h6>
                    {/* Social button */}
                    <ul className="list-inline mb-0 mt-3 mt-sm-0">
                      <li className="list-inline-item"> 
                        <Link className="mb-0 me-1 text-facebook" href="#"><i className="fab fa-fw fa-facebook-f" /></Link> 
                      </li>
                      <li className="list-inline-item"> 
                        <Link className="mb-0 me-1 text-instagram-gradient" href="#"><i className="fab fa-fw fa-instagram" /></Link> 
                      </li>
                      <li className="list-inline-item"> 
                        <Link className="mb-0 me-1 text-twitter" href="#"><i className="fab fa-fw fa-twitter" /></Link> 
                      </li>
                      <li className="list-inline-item"> 
                        <Link className="mb-0 text-linkedin" href="#"><i className="fab fa-fw fa-linkedin-in" /></Link> 
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card item END */}
        {/* Card item START */}
        <div className="col-lg-10 col-xl-6">
          <div className="card shadow p-2">
            <div className="row g-0">
              {/* Image */}
              <div className="col-md-4">
                <img src="assets/images/instructor/06.jpg" className="rounded-3" alt="" />
              </div>
              {/* Card body */}
              <div className="col-md-8">
                <div className="card-body">
                  {/* Title */}
                  <div className="d-sm-flex justify-content-sm-between mb-2 mb-sm-3">
                    <div>
                      <h5 className="card-title mb-0"><Link href="#">Amanda Reed</Link></h5>
                      <p className="small mb-2 mb-sm-0">Professor at NIT College</p>
                    </div>
                    <span className="h6 fw-light">4.8<i className="fas fa-star text-warning ms-1" /></span>
                  </div>
                  {/* Content */}
                  <p className="text-truncate-2 mb-3">Contrasted oh estimating instrument. Size like body some one had. Are conduct viewing boy minutes warrant the expense</p>
                  {/* Info */}
                  <div className="d-sm-flex justify-content-sm-between align-items-center">
                    {/* Title */}
                    <h6 className="text-orange mb-0">Web Designer</h6>
                    {/* Social button */}
                    <ul className="list-inline mb-0 mt-3 mt-sm-0">
                      <li className="list-inline-item"> 
                        <Link className="mb-0 me-1 text-facebook" href="#"><i className="fab fa-fw fa-facebook-f" /></Link> 
                      </li>
                      <li className="list-inline-item"> 
                        <Link className="mb-0 me-1 text-instagram-gradient" href="#"><i className="fab fa-fw fa-instagram" /></Link> 
                      </li>
                      <li className="list-inline-item"> 
                        <Link className="mb-0 me-1 text-twitter" href="#"><i className="fab fa-fw fa-twitter" /></Link> 
                      </li>
                      <li className="list-inline-item"> 
                        <Link className="mb-0 text-linkedin" href="#"><i className="fab fa-fw fa-linkedin-in" /></Link> 
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card item END */}
        {/* Card item START */}
        <div className="col-lg-10 col-xl-6">
          <div className="card shadow p-2">
            <div className="row g-0">
              {/* Image */}
              <div className="col-md-4">
                <img src="assets/images/instructor/07.jpg" className="rounded-3" alt="" />
              </div>
              {/* Card body */}
              <div className="col-md-8">
                <div className="card-body">
                  {/* Title */}
                  <div className="d-sm-flex justify-content-sm-between mb-2 mb-sm-3">
                    <div>
                      <h5 className="card-title mb-0"><Link href="#">Lori Stevens</Link></h5>
                      <p className="small mb-2 mb-sm-0">Professor at Oxford University</p>
                    </div>
                    <span className="h6 fw-light">4.2<i className="fas fa-star text-warning ms-1" /></span>
                  </div>
                  {/* Content */}
                  <p className="text-truncate-2 mb-3">Yet no jokes worse her why. Bed one supposing breakfast day fulfilled off depending questions. Whatever boy her exertion his extended. Ecstatic followed handsome drawings</p>
                  {/* Info */}
                  <div className="d-sm-flex justify-content-sm-between align-items-center">
                    {/* Title */}
                    <h6 className="text-orange mb-0">Medical Science</h6>
                    {/* Social button */}
                    <ul className="list-inline mb-0 mt-3 mt-sm-0">
                      <li className="list-inline-item"> 
                        <Link className="mb-0 me-1 text-facebook" href="#"><i className="fab fa-fw fa-facebook-f" /></Link> 
                      </li>
                      <li className="list-inline-item"> 
                        <Link className="mb-0 me-1 text-instagram-gradient" href="#"><i className="fab fa-fw fa-instagram" /></Link> 
                      </li>
                      <li className="list-inline-item"> 
                        <Link className="mb-0 me-1 text-twitter" href="#"><i className="fab fa-fw fa-twitter" /></Link> 
                      </li>
                      <li className="list-inline-item"> 
                        <Link className="mb-0 text-linkedin" href="#"><i className="fab fa-fw fa-linkedin-in" /></Link> 
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card item END */}
        {/* Card item START */}
        <div className="col-lg-10 col-xl-6">
          <div className="card shadow p-2">
            <div className="row g-0">
              {/* Image */}
              <div className="col-md-4">
                <img src="assets/images/instructor/08.jpg" className="rounded-3" alt="" />
              </div>
              {/* Card body */}
              <div className="col-md-8">
                <div className="card-body">
                  {/* Title */}
                  <div className="d-sm-flex justify-content-sm-between mb-2 mb-sm-3">
                    <div>
                      <h5 className="card-title mb-0"><Link href="#">Samuel Bishop</Link></h5>
                      <p className="small mb-2 mb-sm-0">Professor at VNSGU College</p>
                    </div>
                    <span className="h6 fw-light">4.5<i className="fas fa-star text-warning ms-1" /></span>
                  </div>
                  {/* Content */}
                  <p className="text-truncate-2 mb-3">As it so contrasted oh estimating instrument. Size like body some one had. Are conduct viewing boy minutes warrant the expense</p>
                  {/* Info */}
                  <div className="d-sm-flex justify-content-sm-between align-items-center">
                    {/* Title */}
                    <h6 className="text-orange mb-0">Digital Marketing</h6>
                    {/* Social button */}
                    <ul className="list-inline mb-0 mt-3 mt-sm-0">
                      <li className="list-inline-item"> 
                        <Link className="mb-0 me-1 text-facebook" href="#"><i className="fab fa-fw fa-facebook-f" /></Link> 
                      </li>
                      <li className="list-inline-item"> 
                        <Link className="mb-0 me-1 text-instagram-gradient" href="#"><i className="fab fa-fw fa-instagram" /></Link> 
                      </li>
                      <li className="list-inline-item"> 
                        <Link className="mb-0 me-1 text-twitter" href="#"><i className="fab fa-fw fa-twitter" /></Link> 
                      </li>
                      <li className="list-inline-item"> 
                        <Link className="mb-0 text-linkedin" href="#"><i className="fab fa-fw fa-linkedin-in" /></Link> 
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card item END */}
        {/* Card item START */}
        <div className="col-lg-10 col-xl-6">
          <div className="card shadow p-2">
            <div className="row g-0">
              {/* Image */}
              <div className="col-md-4">
                <img src="assets/images/instructor/09.jpg" className="rounded-3" alt="" />
              </div>
              {/* Card body */}
              <div className="col-md-8">
                <div className="card-body">
                  {/* Title */}
                  <div className="d-sm-flex justify-content-sm-between mb-2 mb-sm-3">
                    <div>
                      <h5 className="card-title mb-0"><Link href="#">Joan Wallace</Link></h5>
                      <p className="small mb-2 mb-sm-0">Professor at LPU College</p>
                    </div>
                    <span className="h6 fw-light">4.6<i className="fas fa-star text-warning ms-1" /></span>
                  </div>
                  {/* Content */}
                  <p className="text-truncate-2 mb-3">Tt so contrasted oh estimating instrument. Size like body some one had. Are conduct viewing boy minutes warrant the expense</p>
                  {/* Info */}
                  <div className="d-sm-flex justify-content-sm-between align-items-center">
                    {/* Title */}
                    <h6 className="text-orange mb-0">Graphic Designer</h6>
                    {/* Social button */}
                    <ul className="list-inline mb-0 mt-3 mt-sm-0">
                      <li className="list-inline-item"> 
                        <Link className="mb-0 me-1 text-facebook" href="#"><i className="fab fa-fw fa-facebook-f" /></Link> 
                      </li>
                      <li className="list-inline-item"> 
                        <Link className="mb-0 me-1 text-instagram-gradient" href="#"><i className="fab fa-fw fa-instagram" /></Link> 
                      </li>
                      <li className="list-inline-item"> 
                        <Link className="mb-0 me-1 text-twitter" href="#"><i className="fab fa-fw fa-twitter" /></Link> 
                      </li>
                      <li className="list-inline-item"> 
                        <Link className="mb-0 text-linkedin" href="#"><i className="fab fa-fw fa-linkedin-in" /></Link> 
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Card item END */}
      </div>
      {/* Instructor list END */}
      {/* Pagination START */}
      <nav className="mt-4 d-flex justify-content-center" aria-label="navigation">
        <ul className="pagination pagination-primary-soft d-inline-block d-md-flex rounded mb-0">
          <li className="page-item mb-0"><Link className="page-link" href="#" tabIndex={-1}><i className="fas fa-angle-double-left" /></Link></li>
          <li className="page-item mb-0"><Link className="page-link" href="#">1</Link></li>
          <li className="page-item mb-0 active"><Link className="page-link" href="#">2</Link></li>
          <li className="page-item mb-0"><Link className="page-link" href="#">..</Link></li>
          <li className="page-item mb-0"><Link className="page-link" href="#">6</Link></li>
          <li className="page-item mb-0"><Link className="page-link" href="#"><i className="fas fa-angle-double-right" /></Link></li>
        </ul>
      </nav>
      {/* Pagination END */}
    </div>
  </section>
  {/* =======================
Inner part END */}
  {/* =======================
Action box START */}
  <section className="pt-0">
    <div className="container position-relative">
      {/* SVG */}
      <figure className="position-absolute top-50 start-50 translate-middle ms-2">
        <svg>
          <path d="m496 22.999c0 10.493-8.506 18.999-18.999 18.999s-19-8.506-19-18.999 8.507-18.999 19-18.999 18.999 8.506 18.999 18.999z" fill="#fff" fillRule="evenodd" opacity=".502" />
          <path d="m775 102.5c0 5.799-4.701 10.5-10.5 10.5-5.798 0-10.499-4.701-10.499-10.5 0-5.798 4.701-10.499 10.499-10.499 5.799 0 10.5 4.701 10.5 10.499z" fill="#fff" fillRule="evenodd" opacity=".102" />
          <path d="m192 102c0 6.626-5.373 11.999-12 11.999s-11.999-5.373-11.999-11.999c0-6.628 5.372-12 11.999-12s12 5.372 12 12z" fill="#fff" fillRule="evenodd" opacity=".2" />
          <path d="m20.499 10.25c0 5.66-4.589 10.249-10.25 10.249-5.66 0-10.249-4.589-10.249-10.249-0-5.661 4.589-10.25 10.249-10.25 5.661-0 10.25 4.589 10.25 10.25z" fill="#fff" fillRule="evenodd" opacity=".2" />
        </svg>
      </figure>
      <div className="bg-success p-4 p-sm-5 rounded-3">
        <div className="row justify-content-center position-relative">
          {/* Svg */}
          <figure className="fill-white opacity-1 position-absolute top-50 start-0 translate-middle-y">
            <svg width="141px" height="141px">
              <path d="M140.520,70.258 C140.520,109.064 109.062,140.519 70.258,140.519 C31.454,140.519 -0.004,109.064 -0.004,70.258 C-0.004,31.455 31.454,-0.003 70.258,-0.003 C109.062,-0.003 140.520,31.455 140.520,70.258 Z" />
            </svg>
          </figure>
          {/* Action box */}
          <div className="col-11 position-relative">
            <div className="row align-items-center">
              {/* Title */}
              <div className="col-lg-7">
                <h3 className="text-white">Become an Instructor!</h3>
                <p className="text-white mb-3 mb-lg-0">Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced. Yet uncommonly his ten who diminution astonished.</p>
              </div>
              {/* Button */}
              <div className="col-lg-5 text-lg-end">
                <Link href="#" className="btn btn-dark mb-0">Start Teaching today</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* =======================
Action box END */}
</main>
<IFooter/>
    </div>
  )
}

export default Instructor_List
