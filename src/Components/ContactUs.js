import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

const ContactUs = () => {
  return (
  <>
  <Nav/>
 {/* **************** MAIN CONTENT START **************** */}
<main>
  {/* =======================
Page Banner START */}
  <section className="pt-5 pb-0" style={{backgroundImage: 'url(assets/images/element/map.svg)', backgroundPosition: 'center left', backgroundSize: 'cover'}}>
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-xl-6 text-center mx-auto">
          {/* Title */}
          <h6 className="text-primary">Contact us</h6>
          <h1 className="mb-4">We're here to help!</h1>
        </div>
      </div>
      {/* Contact info box */}
      <div className="row g-4 g-md-5 mt-0 mt-lg-3">
        {/* Box item */}
        <div className="col-lg-4 mt-lg-0">
          <div className="card card-body bg-primary shadow py-5 text-center h-100">
            {/* Title */}
            <h5 className="text-white mb-3">Customer Support</h5>
            <ul className="list-inline mb-0">
              {/* Address */}
              <li className="list-item mb-3">
                <a href="#" className="text-white"> <i className="fas fa-fw fa-map-marker-alt me-2 mt-1" />Chicago HQ Estica Cop.  Macomb, MI 48042 </a>
              </li>
              {/* Phone number */}
              <li className="list-item mb-3">
                <a href="#" className="text-white"> <i className="fas fa-fw fa-phone-alt me-2" />(423) 733-8222 </a>
              </li>
              {/* Email id */}
              <li className="list-item mb-0">
                <a href="#" className="text-white"> <i className="far fa-fw fa-envelope me-2" />example@email.com </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Box item */}
        <div className="col-lg-4 mt-lg-0">
          <div className="card card-body shadow py-5 text-center h-100">
            {/* Title */}
            <h5 className="mb-3">Contact Address</h5>
            <ul className="list-inline mb-0">
              {/* Address */}
              <li className="list-item mb-3 h6 fw-light">
                <a href="#"> <i className="fas fa-fw fa-map-marker-alt me-2 mt-1" />2492 Centennial NW, Acworth, GA, 30102 </a>
              </li>
              {/* Phone number */}
              <li className="list-item mb-3 h6 fw-light">
                <a href="#"> <i className="fas fa-fw fa-phone-alt me-2" />+896-789-546 </a>
              </li>
              {/* Email id */}
              <li className="list-item mb-0 h6 fw-light">
                <a href="#"> <i className="far fa-fw fa-envelope me-2" />example@email.com </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Box item */}
        <div className="col-lg-4 mt-lg-0">
          <div className="card card-body shadow py-5 text-center h-100">
            {/* Title */}
            <h5 className="mb-3">Main Office Address</h5>
            <ul className="list-inline mb-0">
              {/* Address */}
              <li className="list-item mb-3 h6 fw-light">
                <a href="#"> <i className="fas fa-fw fa-map-marker-alt me-2 mt-1" />2002 Horton Ford Rd, Eidson, TN, 37731 </a>
              </li>
              {/* Phone number */}
              <li className="list-item mb-3 h6 fw-light">
                <a href="#"> <i className="fas fa-fw fa-phone-alt me-2" />(678) 324-1251 </a>
              </li>
              {/* Email id */}
              <li className="list-item mb-0 h6 fw-light">
                <a href="#"> <i className="far fa-fw fa-envelope me-2" />example@email.com </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* =======================
Page Banner END */}
  {/* =======================
Image and contact form START */}
  <section>
    <div className="container">
      <div className="row g-4 g-lg-0 align-items-center">
        <div className="col-md-6 align-items-center text-center">
          {/* Image */}
          <img src="assets/images/element/contact.svg" className="h-400px" alt />
          {/* Social media button */}
          <div className="d-sm-flex align-items-center justify-content-center mt-2 mt-sm-4">
            <h5 className="mb-0">Follow us on:</h5> 
            <ul className="list-inline mb-0 ms-sm-2">
              <li className="list-inline-item"> <a className="fs-5 me-1 text-facebook" href="#"><i className="fab fa-fw fa-facebook-square" /></a> </li>
              <li className="list-inline-item"> <a className="fs-5 me-1 text-instagram" href="#"><i className="fab fa-fw fa-instagram" /></a> </li>
              <li className="list-inline-item"> <a className="fs-5 me-1 text-twitter" href="#"><i className="fab fa-fw fa-twitter" /></a> </li>
              <li className="list-inline-item"> <a className="fs-5 me-1 text-linkedin" href="#"><i className="fab fa-fw fa-linkedin-in" /></a> </li>
              <li className="list-inline-item"> <a className="fs-5 me-1 text-dribbble" href="#"><i className="fas fa-fw fa-basketball-ball" /></a> </li>
              <li className="list-inline-item"> <a className="fs-5 me-1 text-pinterest" href="#"><i className="fab fa-fw fa-pinterest" /></a> </li>
            </ul>
          </div>
        </div>
        {/* Contact form START */}
        <div className="col-md-6">
          {/* Title */}
          <h2 className="mt-4 mt-md-0">Let's talk</h2>
          <p>To request a quote or want to meet up for coffee, contact us directly or fill out the form and we will get back to you promptly</p>
          <form>
            {/* Name */}
            <div className="mb-4 bg-light-input">
              <label htmlFor="yourName" className="form-label">Your name *</label>
              <input type="text" className="form-control form-control-lg" id="yourName" />
            </div>
            {/* Email */}
            <div className="mb-4 bg-light-input">
              <label htmlFor="emailInput" className="form-label">Email address *</label>
              <input type="email" className="form-control form-control-lg" id="emailInput" />
            </div>
            {/* Message */}
            <div className="mb-4 bg-light-input">
              <label htmlFor="textareaBox" className="form-label">Message *</label>
              <textarea className="form-control" id="textareaBox" rows={4} defaultValue={""} />
            </div>
            {/* Button */}
            <div className="d-grid">
              <button className="btn btn-lg btn-primary mb-0" type="button">Send Message</button>
            </div>	
          </form>
        </div>
        {/* Contact form END */}
      </div>
    </div>
  </section>
  {/* =======================
Image and contact form END */}
  {/* =======================
Map START */}
  <section className="pt-0">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <iframe className="w-100 h-400px grayscale rounded" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74076684379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sin!4v1586000412513!5m2!1sen!2sin" height={500} style={{border: 0}} aria-hidden="false" tabIndex={0} />	
        </div>
      </div>
    </div>
  </section>
  {/* =======================
Map END */}
</main>
{/* **************** MAIN CONTENT END **************** */}
<Footer/>
  </>
  )
}

export default ContactUs