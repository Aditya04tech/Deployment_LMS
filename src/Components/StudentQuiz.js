import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const StudentQuiz = () => {
  const [currentStep, setCurrentStep] = useState(1);

  // Function to handle moving to the next question
  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  // Function to handle form submission
  const handleSubmit = () => {
    if (currentStep === 4) {
      alert('Quiz submitted!'); // You can add your actual submission logic here
    }
  };

  // Function to handle direct step click
  const handleStepClick = (step) => {
    setCurrentStep(step);
  };

  return (
  <div>
  {/* =======================
Page Banner START */}
  <section className="pt-0">
    <div className="container-fluid px-0">
      <div className="card bg-blue h-100px h-md-200px rounded-0" style={{background: 'url(assets/images/pattern/04.png) no-repeat center center', backgroundSize: 'cover'}}>
      </div>
    </div>
    <div className="container mt-n4">
      <div className="row">
        <div className="col-12">
          <div className="card bg-transparent card-body pb-0 px-0 mt-2 mt-sm-0">
            <div className="row d-sm-flex justify-sm-content-between mt-2 mt-md-0">
              {/* Avatar */}
              <div className="col-auto">
                <div className="avatar avatar-xxl position-relative mt-n3">
                  <img className="avatar-img rounded-circle border border-white border-3 shadow" src="assets/images/avatar/09.jpg" alt />
                  <span className="badge text-bg-success rounded-pill position-absolute top-50 start-100 translate-middle mt-4 mt-md-5 ms-n3 px-md-3">Pro</span>
                </div>
              </div>
              {/* Profile info */}
              <div className="col d-sm-flex justify-content-between align-items-center">
                <div>
                  <h1 className="my-1 fs-4">Lori Stevens</h1>
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item me-3 mb-1 mb-sm-0">
                      <span className="h6">255</span>
                      <span className="text-body fw-light">points</span>
                    </li>
                    <li className="list-inline-item me-3 mb-1 mb-sm-0">
                      <span className="h6">7</span>
                      <span className="text-body fw-light">Completed courses</span>
                    </li>
                    <li className="list-inline-item me-3 mb-1 mb-sm-0">
                      <span className="h6">52</span>
                      <span className="text-body fw-light">Completed lessons</span>
                    </li>
                  </ul>
                </div>
                {/* Button */}
                <div className="mt-2 mt-sm-0">
                  <Link to="/studentlist" className="btn btn-outline-primary mb-0">View my courses</Link>
                </div>
              </div>
            </div>
          </div>
          {/* Advanced filter responsive toggler START */}
          {/* Divider */}
          <hr className="d-xl-none" />
          <div className="col-12 col-xl-3 d-flex justify-content-between align-items-center">
            <a className="h6 mb-0 fw-bold d-xl-none" href="#">Menu</a>
            <button className="btn btn-primary d-xl-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSidebar" aria-controls="offcanvasSidebar">
              <i className="fas fa-sliders-h" />
            </button>
          </div>
          {/* Advanced filter responsive toggler END */}
        </div>
      </div>
    </div>
  </section>
  {/* =======================
Page Banner END */}
  {/* =======================
Page content START */}
  <section className="pt-0">
    <div className="container">
      <div className="row">
        {/* Left sidebar START */}
        <div className="col-xl-3">
          {/* Responsive offcanvas body START */}
          <div className="offcanvas-xl offcanvas-end" tabIndex={-1} id="offcanvasSidebar">
            {/* Offcanvas header */}
            <div className="offcanvas-header bg-light">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">My profile</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasSidebar" aria-label="Close" />
            </div>
            {/* Offcanvas body */}
            <div className="offcanvas-body p-3 p-xl-0">
              <div className="bg-dark border rounded-3 p-3 w-100">
                {/* Dashboard menu */}
                <div className="list-group list-group-dark list-group-borderless collapse-list">
                  <Link className="list-group-item" to="/studentdashboard"><i className="bi bi-ui-checks-grid fa-fw me-2" />Dashboard</Link>
                  <Link className="list-group-item" to="/studentsubscription"><i className="bi bi-card-checklist fa-fw me-2" />My Subscriptions</Link>
                  <Link className="list-group-item" to="/studentlist"><i className="bi bi-basket fa-fw me-2" />My Courses</Link>
                  <Link className="list-group-item" to="/studentresume"><i className="far fa-fw fa-file-alt me-2" />Course Resume</Link>
                  <Link className="list-group-item active" to="/studentquiz"><i className="bi bi-question-diamond fa-fw me-2" />Quiz</Link>
                  <Link className="list-group-item" to="/studentpaymentinfo"><i className="bi bi-credit-card-2-front fa-fw me-2" />Payment Info</Link>
                  <Link className="list-group-item" to="/studentbookmark"><i className="bi bi-cart-check fa-fw me-2" />Wishlist</Link>
                  <Link className="list-group-item" to="/studenteditprofile"><i className="bi bi-pencil-square fa-fw me-2" />Edit Profile</Link>
                 {/* <Link className="list-group-item" to="/studentpayout"><i className="bi bi-pencil-square fa-fw me-2" />Payout</Link>  */}
                  <Link className="list-group-item" to="/studentsetting"><i className="bi bi-gear fa-fw me-2" />Settings</Link>
                  <Link className="list-group-item" to="/studentdeleteaccount"><i className="bi bi-trash fa-fw me-2" />Delete Profile</Link>
                  <Link className="list-group-item text-danger bg-danger-soft-hover" to="/signout"><i className="fas fa-sign-out-alt fa-fw me-2" />Sign Out</Link>
                  {/* Collapse menu */}
                  <a className="list-group-item" data-bs-toggle="collapse" href="#collapseauthentication" role="button" aria-expanded="false" aria-controls="collapseauthentication">
                    <i className="bi bi-lock fa-fw me-2" />Dropdown level
                  </a>
                  {/* Submenu */}
                  <ul className="nav collapse flex-column" id="collapseauthentication" data-bs-parent="#navbar-sidebar">
                    <li className="nav-item"> <a className="nav-link" href="#">Dropdown item</a></li>
                    <li className="nav-item"> <a className="nav-link" href="#">Dropdown item</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Responsive offcanvas body END */}
        </div>
        {/* Left sidebar END */}
        {/* Main content START */}
        <div className="col-xl-9">
      {/* Course item START */}
      <div className="card border">
        <div className="card-header border-bottom">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="row g-0">
                  <div className="col-md-2">
                    <img src="assets/images/courses/4by3/01.jpg" className="rounded-2" alt="Card image" />
                  </div>
                  <div className="col-md-10">
                    <div className="card-body">
                      <h3 className="card-title">
                        <a href="#">The Complete Digital Marketing Course - 12 Courses in 1</a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card-body">
          <div className="card bg-transparent border rounded-3 mb-1">
            <div id="stepper" className="bs-stepper stepper-outline">
              <div className="card-header bg-light border-bottom px-lg-5">
                {/* Step Buttons */}
                <div className="bs-stepper-header" role="tablist">
                  {[1, 2, 3, 4].map((step) => (
                    <div key={step} className="step" data-target={`#step-${step}`}>
                      <div className="d-grid text-center align-items-center">
                        <button
                          type="button"
                          className={`btn btn-link step-trigger mb-0 ${currentStep === step ? 'active' : ''}`}
                          onClick={() => handleStepClick(step)} // Step click handler
                        >
                          <span className="bs-stepper-circle">{step}</span>
                        </button>
                      </div>
                      {step < 4 && <div className="line" />}
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-body">
                <h6 className="text-danger text-end mb-0">
                  <i className="bi bi-clock-history me-2" />
                  Time Left: 00:01:30
                </h6>

                <div className="bs-stepper-content">
                  {/* Step Content */}
                  {currentStep === 1 && (
                    <div id="step-1" className="content fade show">
                      <h4>How do you protect your business against cyber-crime?</h4>
                      <hr />
                      <div className="vstack gap-2">
                        <div>
                          <input type="radio" className="btn-check" id="option1" />
                          <label className="btn btn-outline-primary w-100" htmlFor="option1">
                            We have cybersecurity insurance coverage
                          </label>
                        </div>
                        <div>
                          <input type="radio" className="btn-check" id="option2" />
                          <label className="btn btn-outline-primary w-100" htmlFor="option2">
                            Our dedicated staff will protect us
                          </label>
                        </div>
                        <div>
                          <input type="radio" className="btn-check" id="option3" />
                          <label className="btn btn-outline-primary w-100" htmlFor="option3">
                            We give regular training for best practices
                          </label>
                        </div>
                        <div>
                          <input type="radio" className="btn-check" id="option4" />
                          <label className="btn btn-outline-primary w-100" htmlFor="option4">
                            Third-party vendor protection
                          </label>
                        </div>
                      </div>
                    </div>
                  )}
                  {currentStep === 2 && (
                    <div id="step-2" className="content fade show">
                      <h4>What is SEO?</h4>
                      <hr />
                      <div className="vstack gap-2">
                        <div>
                          <input type="radio" className="btn-check" id="option11" />
                          <label className="btn btn-outline-primary w-100" htmlFor="option11">
                          We have cybersecurity insurance coverage
                          </label>
                        </div>
                        <div>
                          <input type="radio" className="btn-check" id="option22" />
                          <label className="btn btn-outline-primary w-100" htmlFor="option22">
                         Our decicated staff will protect us
                          </label>
                        </div>
                        <div>
                          <input type="radio" className="btn-check" id="option22" />
                          <label className="btn btn-outline-primary w-100" htmlFor="option22">
                         We give regular training for best practices
                          </label>
                        </div>
                        <div>
                          <input type="radio" className="btn-check" id="option22" />
                          <label className="btn btn-outline-primary w-100" htmlFor="option22">
                      Third-party vendor protection
                          </label>
                        </div>
                      </div>
                    </div>
                  )}
                  {currentStep === 3 && (
                    <div id="step-3" className="content fade show">
                      <h4>Who should join this course?</h4>
                      <hr />
                      <div className="vstack gap-2">
                        <div>
                          <input type="radio" className="btn-check" id="option111" />
                          <label className="btn btn-outline-primary w-100" htmlFor="option111">
                          We have cybersecurity insurance coverage
                          </label>
                        </div>
                        <div>
                          <input type="radio" className="btn-check" id="option222" />
                          <label className="btn btn-outline-primary w-100" htmlFor="option222">
                          Our decicated staff will protect us
                          </label>
                        </div>
                        <div>
                          <input type="radio" className="btn-check" id="option222" />
                          <label className="btn btn-outline-primary w-100" htmlFor="option222">
                          We give regular training for best practices
                          </label>
                        </div>
                        <div>
                          <input type="radio" className="btn-check" id="option222" />
                          <label className="btn btn-outline-primary w-100" htmlFor="option222">
                          Third-party vendor protection
                          </label>
                        </div>
                      </div>
                    </div>
                  )}
                  {currentStep === 4 && (
                    <div id="step-4" className="content fade show">
                      <h4>What are the Terms and Conditions for this program?</h4>
                      <hr />
                      <div className="vstack gap-2">
                        <div>
                          <input type="radio" className="btn-check" id="option1111" />
                          <label className="btn btn-outline-primary w-100" htmlFor="option1111">
                          We have cybersecurity insurance coverage
                          </label>
                        </div>
                        <div>
                          <input type="radio" className="btn-check" id="option1111" />
                          <label className="btn btn-outline-primary w-100" htmlFor="option1111">
                          Our decicated staff will protect us
                          </label>
                        </div> <div>
                          <input type="radio" className="btn-check" id="option1111" />
                          <label className="btn btn-outline-primary w-100" htmlFor="option1111">
                          We give regular training for best practices
                          </label>
                        </div> <div>
                          <input type="radio" className="btn-check" id="option1111" />
                          <label className="btn btn-outline-primary w-100" htmlFor="option1111">
                          Third-party vendor protection
                          </label>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Next Button or Submit */}
                  <div className="d-flex justify-content-center mt-3">
                    {currentStep < 4 ? (
                      <button type="button" className="btn btn-primary mb-0" onClick={handleNext}>
                        Next question
                      </button>
                    ) : (
                      <button type="button" className="btn btn-success mb-0" onClick={handleSubmit}>
                        View result
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Course item END */}
    </div>
  
        {/* Main content END */}
      </div> {/* Row END */}
    </div>	
  </section>
  {/* =======================
Page content END */}
</div>

  )
}

export default StudentQuiz
