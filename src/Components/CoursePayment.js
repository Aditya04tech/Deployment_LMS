import React, { useState } from 'react';

const CoursePayment = () => {
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

  return (
    <>
   
    <section className="pt-0">
      <div className="container">
        <div className="row">
          <div className="col-xl-9">
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
                                placeholder="xxxx xxxx xxxx xxxx"
                                maxLength={16}
                              />
                              {errors.cardNumber && <div className="text-danger">{errors.cardNumber}</div>}
                            </div>
                          </div>

                          {/* Expiration Date */}
                          <div className="col-md-6">
                            <label className="form-label">Expiration date <span className="text-danger">*</span></label>
                            <div className="input-group">
                              <input
                                type="text"
                                className="form-control"
                                name="expiryMonth"
                                value={cardDetails.expiryMonth}
                                onChange={handleInputChange}
                                maxLength={2}
                                placeholder="MM"
                              />
                              <input
                                type="text"
                                className="form-control"
                                name="expiryYear"
                                value={cardDetails.expiryYear}
                                onChange={handleInputChange}
                                maxLength={4}
                                placeholder="YYYY"
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
    </section>
    </>
  )
}

export default CoursePayment;