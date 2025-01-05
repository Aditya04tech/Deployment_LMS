import React,{useState,useEffect} from 'react'
import Nav from './Nav';
import Footer from './Footer';

const Checkout = () => {
    // State to manage card form inputs
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiryMonth: '',
    expiryYear: '',
    cvv: '',
    cardName: '',
  });

  const [errors, setErrors] = useState({});

  // Handler for input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({ ...cardDetails, [name]: value });
  };

  // Validate form inputs
  const validateForm = () => {
    const newErrors = {};
    if (!/^\d{16}$/.test(cardDetails.cardNumber)) {
      newErrors.cardNumber = 'Card number must be 16 digits.';
    }
    if (!/^\d{2}$/.test(cardDetails.expiryMonth) || cardDetails.expiryMonth < 1 || cardDetails.expiryMonth > 12) {
      newErrors.expiryMonth = 'Invalid month.';
    }
    if (!/^\d{4}$/.test(cardDetails.expiryYear) || cardDetails.expiryYear < new Date().getFullYear()) {
      newErrors.expiryYear = 'Invalid or expired year.';
    }
    if (!/^\d{3}$/.test(cardDetails.cvv)) {
      newErrors.cvv = 'CVV must be 3 digits.';
    }
    if (!cardDetails.cardName) {
      newErrors.cardName = 'Name on card is required.';
    }
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted:', cardDetails);
      // Here, you would typically send the card details to your server or payment gateway
    } else {
      setErrors(validationErrors);
    }
};


const [isMobile, setIsMobile] = useState(false);
useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768); // Adjust width as needed
  };

  // Initial check
  handleResize();

  // Add event listener for window resize
  window.addEventListener("resize", handleResize);

  // Cleanup event listener on component unmount
  return () => window.removeEventListener("resize", handleResize);
}, []);

// Define styles
const Style = {
  mainheader: {
    marginTop: isMobile ? "50px" : "150px", // Different margin based on screen size
  },
};
  return (
   <>
   <Nav/> 
  <main>
    {/* =======================
  Page Banner START */}
    <section className="py-0" style={Style.mainheader}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="bg-light p-4 text-center rounded-3">
              <h1 className="m-0">Checkout</h1>
              {/* Breadcrumb */}
              <div className="d-flex justify-content-center">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb breadcrumb-dots mb-0">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item"><a href="#">Courses</a></li>
                    <li className="breadcrumb-item"><a href="#">Cart</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Checkout</li>
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
  Page content START */}
    <section className="pt-5">
      <div className="container">
        <div className="row g-4 g-sm-5">
          {/* Main content START */}
          <div className="col-xl-8 mb-4 mb-sm-0">
            {/* Alert */}
            <div className="alert alert-danger alert-dismissible d-flex justify-content-between align-items-center fade show py-2 pe-2" role="alert">
              <div>
                <i className="bi bi-exclamation-octagon-fill me-2" />
                Already have an account? <a href="#" className="text-reset btn-link mb-0 fw-bold">Log in</a></div>
              <button type="button" className="btn btn-link mb-0 text-primary-hover text-end" data-bs-dismiss="alert" aria-label="Close"><i className="bi bi-x-lg" /></button>
            </div>
            {/* Personal info START */}
            <div className="card card-body shadow p-4">
              {/* Title */}
              <h5 className="mb-0">Personal Details</h5>
              {/* Form START */}
              <form className="row g-3 mt-0">
                {/* Name */}
                <div className="col-md-6 bg-light-input">
                  <label htmlFor="yourName" className="form-label">Your name *</label>
                  <input type="text" className="form-control" id="yourName" placeholder="Name" />
                </div>
                {/* Email */}
                <div className="col-md-6 bg-light-input">
                  <label htmlFor="emailInput" className="form-label">Email address *</label>
                  <input type="email" className="form-control" id="emailInput" placeholder="Email" />
                </div>
                {/* Number */}
                <div className="col-md-6 bg-light-input">
                  <label htmlFor="mobileNumber" className="form-label">Mobile number *</label>
                  <input type="text" className="form-control" id="mobileNumber" placeholder="Mobile number" />
                </div>
                {/* Country option */}
                <div className="col-md-6 bg-light-input">
                  <label htmlFor="mobileNumber" className="form-label">Select country *</label>
                  <select className="form-select js-choice" aria-label=".form-select-lg">
                    <option value>Select country</option>
                    <option>India</option>
                    <option>China</option>
                    <option>USA</option>
                    <option>Canada</option>
                    <option>Paris</option>
                    <option>Australia</option>
                    <option>Japan</option>
                    <option>Brazil</option>
                  </select>
                </div>
                {/* State option */}
                <div className="col-md-6 bg-light-input">
                  <label htmlFor="mobileNumber" className="form-label">Select state *</label>
                  <select className="form-select js-choice" aria-label=".form-select-lg">
                    <option value>Select state</option>
                    <option>Maharashtra</option>
                    <option>Delhi</option>
                    <option>Punjab</option>
                    <option>London</option>
                    <option>New york</option>
                    <option>California</option>
                  </select>
                </div>
                {/* Postal code */}
                <div className="col-md-6 bg-light-input">
                  <label htmlFor="postalCode" className="form-label">Postal code *</label>
                  <input type="text" className="form-control" id="postalCode" placeholder="PIN code" />
                </div>
                {/* Address */}
                <div className="col-md-6 bg-light-input">
                  <label htmlFor="address" className="form-label">Address *</label>
                  <input type="text" className="form-control" id="address" placeholder="Address" />
                </div>
                {/* Cards */}
                <div className="col-12">
                  <label className="form-label">Your saved cards *</label>
                  <div className="row g-2">
                    <div className="col-2 col-sm-1 border rounded me-2">
                      <a href="#"><img src="assets/images/client/mastercard.svg" alt /></a>
                    </div>
                    <div className="col-2 col-sm-1 border rounded me-2">
                      <a href="#"><img src="assets/images/client/visa.svg" alt /></a>
                    </div>
                    <div className="col-2 col-sm-1 border rounded me-2">
                      <a href="#"><img src="assets/images/client/ae-card.svg" alt /></a>
                    </div>
                    <div className="col-8 text-end">
                  <button type="submit" className="btn btn-primary mb-0" disabled>Save changes</button>
                </div>
                  </div>
                </div>
                {/* Button */}
               
              </form> 
              {/* Form END */}
              {/* Payment method START */}
              <div className="container mt-5">
          <div className="row">
            <div className="col-xl-12">
              {/* Payment method START */}
              <div className="card bg-transparent border rounded-3 mb-4 z-index-9">
                <div className="card-header bg-transparent border-bottom">
                  <h3 className="mb-2">Payment methods</h3>
                </div>
                <div className="card-body">
                  <div className="accordion accordion-circle" id="accordioncircle">
                    {/* Credit or debit card START */}
                    <div className="accordion-item mb-3">
                      <h6 className="accordion-header font-base" id="heading-1">
                        <button className="accordion-button bg-white rounded collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1" aria-expanded="true" aria-controls="collapse-1">
                          Credit or Debit Card
                        </button>
                      </h6>
                      <div id="collapse-1" className="accordion-collapse collapse show" aria-labelledby="heading-1" data-bs-parent="#accordioncircle">
                        <div className="accordion-body">
                          {/* Form START */}
                          <form className="row text-start g-3" onSubmit={handleSubmit}>
                            {/* Card number */}
                            <div className="col-12">
                              <label className="form-label">Card Number <span className="text-danger">*</span></label>
                              <div className="position-relative">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="cardNumber"
                                  value={cardDetails.cardNumber}
                                  onChange={handleInputChange}
                                  placeholder="xxxx-xxxx-xxxx-xxxx"
                                  maxLength={16}
                                />
                                {errors.cardNumber && <div className="text-danger">{errors.cardNumber}</div>}
                              </div>
                            </div>
  
                            {/* Expiration Date */}
                            <div className="col-md-6">
                              <label className="form-label">Expiration date <span className="text-danger ">*</span></label>
                              <div className="input-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="expiryMonth"
                                  value={cardDetails.expiryMonth}
                                  onChange={handleInputChange}
                                  maxLength={2}
                                  placeholder="Month"
                                />
                                <input
                                  type="text"
                                  className="form-control"
                                  name="expiryYear"
                                  value={cardDetails.expiryYear}
                                  onChange={handleInputChange}
                                  maxLength={4}
                                  placeholder="Year"
                                />
                              </div>
                              {errors.expiryMonth && <div className="text-danger">{errors .expiryMonth}</div>}
                              {errors.expiryYear && <div className="text-danger">{errors.expiryYear}</div>}
                            </div>
  
                            {/* CVV */}
                            <div className="col-md-6">
                              <label className="form-label">CVV / CVC <span className="text-danger">*</span></label>
                              <input
                                type="text"
                                className="form-control"
                                name="cvv"
                                value={cardDetails.cvv}
                                onChange={handleInputChange}
                                maxLength={3}
                                placeholder="xxx"
                              />
                              {errors.cvv && <div className="text-danger">{errors.cvv}</div>}
                            </div>
  
                            {/* Card name */}
                            <div className="col-12">
                              <label className="form-label">Name on Card <span className="text-danger">*</span></label>
                              <input
                                type="text"
                                className="form-control"
                                name="cardName"
                                value={cardDetails.cardName}
                                onChange={handleInputChange}
                                placeholder="Enter name"
                              />
                              {errors.cardName && <div className="text-danger">{errors.cardName}</div>}
                            </div>
  
                            <div className="col-12">
                              <button type="submit" className="btn btn-primary">Submit Payment</button>
                            </div>
                          </form>
                          {/* Form END */}
                        </div>
                      </div>
                    </div>
                    {/* Credit or debit card END */}
  
                    {/* UPI START */}
                    <div className="accordion-item mb-3">
                      <h6 className="accordion-header font-base" id="heading-2">
                        <button className="accordion-button bg-white rounded collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-2" aria-expanded="true" aria-controls="collapse-2">
                          UPI
                        </button>
                      </h6>
                      <div id="collapse-2" className="accordion-collapse collapse" aria-labelledby="heading-2" data-bs-parent="#accordioncircle">
                        <div className="accordion-body">
                          {/* UPI Form START */}
                          <form className="row text-start g-3">
                            {/* UPI ID */}
                            <div className="col-12">
                              <label className="form-label">UPI ID <span className="text-danger">*</span></label>
                              <input
                                type="text"
                                className="form-control"
                                name="upiId"
                                placeholder="Enter UPI ID"
                              />
                            </div>
  
                            <div className="col-12">
                              <button type="submit" className="btn btn-primary">Submit Payment</button>
                            </div>
                          </form>
                          {/* UPI Form END */}
                        </div>
                      </div>
                    </div>
                    {/* UPI END */}
  
                    {/* Net Banking START */}
                    <div className="accordion-item mb-3">
                      <h6 className="accordion-header font-base" id="heading-3">
                        <button className="accordion-button bg-white rounded collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-3" aria-expanded="true" aria-controls="collapse-3">
                          Net Banking
                        </button>
                      </h6>
                      <div id="collapse-3" className="accordion-collapse collapse" aria-labelledby="heading-3" data-bs-parent="#accordioncircle">
                        <div className="accordion-body">
                          {/* Net Banking Form START */}
                          <form className="row text-start g-3">
                            {/* Bank Name */}
                            <div className="col-12">
                              <label className="form-label">Bank Name <span className="text-danger">*</span></label>
                              <select className="form-select">
                                <option value="">Select Bank</option>
                                <option value="SBI">SBI</option>
                                <option value="HDFC">HDFC</option>
                                <option value="ICICI">ICICI</option>
                              </select>
                            </div>
  
                            {/* Account Number */}
                            <div className="col-12">
                              <label className="form-label">Account Number <span className="text-danger">*</span></label>
                              <input
                                type="text"
                                className="form-control"
                                name="accountNumber"
                                placeholder="Enter Account Number"
                              />
                            </div>
  
                            <div className="col-12">
                              <button type="submit" className="btn btn-primary">Submit Payment</button>
                            </div>
                          </form>
                          {/* Net Banking Form END */}
                        </div>
                      </div>
                    </div>
                    {/* Net Banking END */}
                  </div>
                </div>
              </div>
              {/* Payment method END */}
            </div>
          </div>
        </div>
              {/* Payment method END */}
            </div>
            {/* Personal info END */}
          </div>
          {/* Main content END */}
          {/* Right sidebar START */}
          <div className="col-xl-4">
            <div className="row mb-0">
              <div className="col-md-6 col-xl-12">
                {/* Order summary START */}
                <div className="card card-body shadow p-4 mb-4">
                  {/* Title */}
                  <h4 className="mb-4">Order Summary</h4>
                  {/* Coupon START */}
                  <div className="mb-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <span>Transaction code</span>
                      <p className="mb-0 h6 fw-light">AB12365E</p>
                    </div>
                    <div className="input-group mt-2">
                      <input className=" form-control w-100 rounded-lg" placeholder="COUPON CODE" />
                      <button type="button" className="btn btn-primary">Apply</button>
                    </div>
                  </div>
                  <hr />
                  {/* Coupon END */}
                  {/* Course item START */}
                  <div className="row g-3">
                    {/* Image */}
                    <div className="col-sm-4">
                      <img className="rounded" src="assets/images/courses/4by3/08.jpg" alt />
                    </div>
                    {/* Info */}
                    <div className="col-sm-8">
                      <h6 className="mb-0"><a href="#">Sketch from A to Z: for an app designer</a></h6>
                      {/* Info */}
                      <div className="d-flex justify-content-between align-items-center mt-3">
                        {/* Price */}
                        <span className="text-success">$150</span>
                        {/* Remove and edit button */}
                        <div className="text-primary-hover">
                          <a href="#" className="text-body me-2"><i className="bi bi-trash me-1" />Remove</a>
                          <a href="#" className="text-body me-2"><i className="bi bi-pencil-square me-1" />Edit</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Course item END */}
                  <hr /> {/* Divider */}
                  {/* Course item START */}
                  <div className="row g-3">
                    {/* Image */}
                    <div className="col-sm-4">
                      <img className="rounded" src="assets/images/courses/4by3/18.jpg" alt />
                    </div>
                    {/* Info */}
                    <div className="col-sm-8">
                      <h6 className="mb-0"><a href="#">The Complete Video Production Bootcamp</a></h6>
                      {/* Info */}
                      <div className="d-flex justify-content-between align-items-center mt-3">
                        {/* Price */}
                        <span className="text-success">$350</span>
                        {/* Remove and edit button */}
                        <div className="text-primary-hover">
                          <a href="#" className="text-body me-2"><i className="bi bi-trash me-1" />Remove</a>
                          <a href="#" className="text-body me-2"><i className="bi bi-pencil-square me-1" />Edit</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Course item END */}
                  <hr /> {/* Divider */}
                  {/* Price and detail */}
                  <ul className="list-group list-group-borderless mb-2">
                    <li className="list-group-item px-0 d-flex justify-content-between">
                      <span className="h6 fw-light mb-0">Original Price</span>
                      <span className="h6 fw-light mb-0 fw-bold">$500</span>
                    </li>
                    <li className="list-group-item px-0 d-flex justify-content-between">
                      <span className="h6 fw-light mb-0">Coupon Discount</span>
                      <span className="text-danger">-$20</span>
                    </li>
                    <li className="list-group-item px-0 d-flex justify-content-between">
                      <span className="h5 mb-0">Total</span>
                      <span className="h5 mb-0">$480</span>
                    </li>
                  </ul>
                  {/* Button */}
                  <div className="d-grid">
                    <a href="#" className="btn btn-lg btn-success">Place Order</a>
                  </div>
                  {/* Content */}
                  <p className="small mb-0 mt-2 text-center">By completing your purchase, you agree to these <a href="#"><strong>Terms of Service</strong></a></p>
                </div>
                {/* Order summary END */}
              </div>
              <div className="col-md-6 col-xl-12">
                <div className="card bg-blue p-3 position-relative overflow-hidden" style={{background: 'url(assets/images/pattern/05.png) no-repeat center center', backgroundSize: 'cover'}}>
                  {/* SVG decoration */}
                  <figure className="position-absolute bottom-0 end-0 mb-n4 d-none d-md-block">
                    <svg width="92.6px" height="135.2px">	
                      <path className="fill-white" d="M71.5,131.4c0.2,0.1,0.4,0.1,0.6-0.1c0,0,0.6-0.7,1.6-1.9c0.2-0.2,0.1-0.5-0.1-0.7c-0.2-0.2-0.5-0.1-0.7,0.1 c-1,1.2-1.6,1.8-1.6,1.8c-0.2,0.2-0.2,0.5,0,0.7C71.4,131.3,71.4,131.4,71.5,131.4z" />
                      <path className="fill-white" d="M76,125.5c-0.2-0.2-0.3-0.5-0.1-0.7c1-1.4,1.9-2.8,2.8-4.2c0.1-0.2,0.4-0.3,0.7-0.2c0.2,0.1,0.3,0.4,0.2,0.7 c-0.9,1.4-1.8,2.9-2.8,4.2C76.6,125.6,76.3,125.6,76,125.5C76.1,125.5,76.1,125.5,76,125.5z M81.4,116.9 c-0.2-0.1-0.3-0.4-0.2-0.7c0.2-0.5,0.5-0.9,0.7-1.4c0.5-1.1,1-2.1,1.5-3.2c0.1-0.3,0.4-0.4,0.6-0.3c0.3,0.1,0.4,0.4,0.3,0.6 c-0.5,1.1-1,2.1-1.5,3.2c-0.2,0.5-0.5,0.9-0.7,1.4C81.9,117,81.6,117,81.4,116.9C81.4,116.9,81.4,116.9,81.4,116.9z M85.1,107.1 c0.5-1.6,1-3.2,1.3-4.8c0.1-0.3,0.3-0.4,0.6-0.4c0.3,0.1,0.4,0.3,0.4,0.6c-0.4,1.6-0.8,3.3-1.3,4.9c-0.1,0.3-0.4,0.4-0.6,0.3 c0,0,0,0-0.1,0C85.1,107.6,85,107.3,85.1,107.1z M47.3,83c-1.5-1.1-2.5-2.5-3.1-4.2c-0.1-0.3,0-0.5,0.3-0.6 c0.3-0.1,0.5,0,0.6,0.3c0.5,1.5,1.5,2.7,2.8,3.7c0.2,0.2,0.3,0.5,0.1,0.7C47.9,83.1,47.6,83.1,47.3,83C47.4,83,47.4,83,47.3,83z  M51.7,84.6c0-0.3,0.3-0.5,0.5-0.4c1.4,0.2,2.9-0.3,4.3-1.4c0.2-0.2,0.5-0.1,0.7,0.1c0.2,0.2,0.1,0.5-0.1,0.7 c-1.6,1.2-3.4,1.8-5,1.6c-0.1,0-0.1,0-0.2,0C51.8,85,51.7,84.8,51.7,84.6z M87.2,97.4c0.2-1.7,0.2-3.3,0.2-5 c0-0.3,0.2-0.5,0.5-0.5c0.3,0,0.5,0.2,0.5,0.5c0.1,1.7,0,3.4-0.2,5.1c0,0.3-0.3,0.5-0.5,0.4c-0.1,0-0.1,0-0.2,0 C87.3,97.8,87.1,97.6,87.2,97.4z M43.7,73.6c0.2-1.6,0.7-3.2,1.5-4.8l0.1-0.1c0.1-0.2,0.4-0.3,0.7-0.2c0,0,0,0,0,0 c0.2,0.1,0.3,0.4,0.2,0.7l-0.1,0.1c-0.7,1.5-1.2,3-1.4,4.5c0,0.3-0.3,0.5-0.6,0.4c-0.1,0-0.1,0-0.2,0 C43.8,74,43.7,73.8,43.7,73.6z M60,79.8c-0.2-0.1-0.3-0.5-0.1-0.7c0.4-0.6,0.8-1.3,1.1-2c0.4-0.8,0.7-1.6,1-2.4 c0.1-0.3,0.4-0.4,0.6-0.3c0.3,0.1,0.4,0.4,0.3,0.6c-0.3,0.9-0.7,1.7-1.1,2.5c-0.4,0.7-0.8,1.4-1.2,2.1C60.5,79.9,60.2,80,60,79.8 C60,79.9,60,79.8,60,79.8z M86.8,87.5c-0.3-1.6-0.7-3.2-1.2-4.8c-0.1-0.3,0.1-0.5,0.3-0.6c0.3-0.1,0.5,0.1,0.6,0.3 c0.5,1.6,1,3.3,1.2,4.9c0,0.3-0.1,0.5-0.4,0.6c-0.1,0-0.2,0-0.3,0C87,87.7,86.9,87.6,86.8,87.5z M48.2,65.1 c-0.2-0.2-0.2-0.5,0-0.7c1.2-1.3,2.5-2.4,3.9-3.4c0.2-0.1,0.5-0.1,0.7,0.1c0.1,0.2,0.1,0.5-0.1,0.7c-1.4,0.9-2.6,2-3.7,3.2 c-0.2,0.2-0.4,0.2-0.6,0.1C48.3,65.2,48.3,65.1,48.2,65.1z M63.3,70c0.3-1.6,0.5-3.3,0.5-4.9c0-0.3,0.2-0.5,0.5-0.5 c0.3,0,0.5,0.2,0.5,0.5c-0.1,1.7-0.2,3.4-0.5,5.1c0,0.3-0.3,0.4-0.6,0.4c0,0-0.1,0-0.1,0C63.3,70.4,63.2,70.2,63.3,70z M83.8,78 c-0.7-1.5-1.5-3-2.4-4.3c-0.1-0.2-0.1-0.5,0.1-0.7c0.2-0.1,0.5-0.1,0.7,0.2c0.9,1.4,1.7,2.9,2.5,4.4c0.1,0.2,0,0.5-0.2,0.7 c-0.1,0.1-0.3,0.1-0.4,0C83.9,78.2,83.8,78.1,83.8,78z M56.5,59.6c-0.1-0.3,0.1-0.5,0.4-0.6c1.7-0.4,3.4-0.5,5.2-0.3 c0.3,0,0.5,0.3,0.4,0.5c0,0.3-0.3,0.5-0.5,0.4c-1.7-0.2-3.3-0.1-4.8,0.3c-0.1,0-0.2,0-0.3,0C56.6,59.8,56.5,59.7,56.5,59.6z  M78.4,69.7c-1.1-1.3-2.2-2.5-3.4-3.6c-0.2-0.2-0.2-0.5,0-0.7c0.2-0.2,0.5-0.2,0.7,0c1.2,1.1,2.4,2.4,3.5,3.7 c0.2,0.2,0.1,0.5-0.1,0.7c-0.2,0.1-0.4,0.1-0.5,0.1C78.5,69.8,78.4,69.7,78.4,69.7z M63.6,60.1c-0.2-1.6-0.4-3.3-0.8-4.9 c-0.1-0.3,0.1-0.5,0.4-0.6c0.3-0.1,0.5,0.1,0.6,0.4c0.4,1.7,0.7,3.4,0.8,5c0,0.3-0.2,0.5-0.4,0.5c-0.1,0-0.2,0-0.3,0 C63.7,60.4,63.6,60.2,63.6,60.1z M71,63.1c-1.4-0.9-2.9-1.7-4.4-2.3c-0.3-0.1-0.4-0.4-0.3-0.6c0.1-0.3,0.4-0.4,0.6-0.3 c1.5,0.6,3.1,1.4,4.6,2.3c0.2,0.1,0.3,0.5,0.1,0.7C71.6,63.1,71.3,63.2,71,63.1C71.1,63.1,71.1,63.1,71,63.1z M61.3,50.4 c-0.6-1.5-1.3-3-2.1-4.5c-0.1-0.2-0.1-0.5,0.2-0.7c0.2-0.1,0.5-0.1,0.7,0.2c0.9,1.5,1.6,3.1,2.2,4.6c0.1,0.3,0,0.5-0.3,0.6 c-0.1,0.1-0.3,0-0.4,0C61.5,50.6,61.4,50.5,61.3,50.4z M56.5,41.8c-1-1.3-2.1-2.6-3.2-3.8c-0.2-0.2-0.2-0.5,0-0.7 c0.2-0.2,0.5-0.2,0.7,0c1.2,1.3,2.3,2.6,3.3,3.9c0.2,0.2,0.1,0.5-0.1,0.7c-0.2,0.1-0.4,0.1-0.5,0C56.6,41.9,56.5,41.8,56.5,41.8z  M49.7,34.5c-1.2-1.1-2.5-2.1-3.9-3.2c-0.2-0.2-0.3-0.5-0.1-0.7c0.2-0.2,0.5-0.3,0.7-0.1c1.4,1,2.7,2.1,3.9,3.2 c0.2,0.2,0.2,0.5,0,0.7c-0.2,0.2-0.4,0.2-0.6,0.1C49.7,34.6,49.7,34.5,49.7,34.5z M41.7,28.5c-1.4-0.9-2.8-1.8-4.3-2.6 c-0.2-0.1-0.3-0.4-0.2-0.7c0.1-0.2,0.4-0.3,0.7-0.2c1.5,0.8,2.9,1.7,4.3,2.6c0.2,0.1,0.3,0.5,0.1,0.7 C42.2,28.6,42,28.6,41.7,28.5C41.7,28.5,41.7,28.5,41.7,28.5z" />
                      <path className="fill-white" d="M30.7,22.6C30.7,22.6,30.7,22.6,30.7,22.6c0,0,0.9,0.4,2.3,1c0.2,0.1,0.5,0,0.7-0.2c0.1-0.2,0-0.5-0.2-0.7 c0,0,0,0,0,0c-1.4-0.7-2.2-1-2.3-1c-0.3-0.1-0.5,0-0.6,0.3C30.3,22.2,30.4,22.5,30.7,22.6z" />
                      <path className="fill-warning" d="M22.6,23.6l-1.1-4.1c0,0-11.7-7.5-11.9-7.6c-0.1-0.2-4.9-6.5-4.9-6.5l8.2,3.5l12.2,8.4L22.6,23.6z" />
                      <polygon className="fill-warning opacity-6" points="31.2,12.3 4.7,5.4 25.1,17.2" />
                      <polygon className="fill-warning opacity-6" points="21.5,19.5 15,24.8 4.7,5.4 " />
                    </svg>
                  </figure>
                  {/* Body */}
                  <div className="card-body">
                    {/* Title */}
                    <h5 className="card-title text-white mb-2">Access 25K Online courses from 120 institutions, Start today!</h5>
                    <p className="text-white text-opacity-75">Here is the description of premium features which will allow users to get benefits and save a lot of money</p>
                    {/* Button */}
                    <a href="#" className="btn btn-sm btn-warning mb-0">Purchase Premium</a>
                  </div>
                </div>
              </div>
            </div>{/* Row End */}
          </div>
          {/* Right sidebar END */}
        </div>{/* Row END */}
      </div>
    </section>
    {/* =======================
  Page content END */}
  </main>
  <Footer/>
   </>
  )
}

export default Checkout
