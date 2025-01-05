import React from 'react';
import PureCounter from './PureCounter';

const Counter = () => {
  
  return (
    <section className="py-0 py-xl-5">
      <div className="container">
        <div className="row g-4">
          {/* Counter item for Online Courses */}
          <div className="col-sm-6 col-xl-3">
            <div className="d-flex justify-content-center align-items-center p-4 bg-warning bg-opacity-15 rounded-3">
              <span className="display-6 lh-1 text-warning mb-0">
                <i className="fas fa-tv" aria-hidden="true" />
              </span>
              <div className="ms-4 h6 fw-normal mb-0">
                <div className="d-flex">
                  <h5 className="purecounter mb-0 fw-bold" data-purecounter-start={0} data-purecounter-end={5000} data-purecounter-duration={3000}>0</h5>
                  <span className="mb-0 h5">K</span>
                </div>
                <p className="mb-0">Online Courses</p>
              </div>
            </div>
          </div>
          {/* Counter item for Expert Tutors */}
          <div className="col-sm-6 col-xl-3">
            <div className="d-flex justify-content-center align-items-center p-4 bg-primary bg-opacity-10 rounded-3">
              <span className="display-6 lh-1 text-primary mb-0">
                <i className="fas fa-user-tie" aria-hidden="true" />
              </span>
              <div className="ms-4 h6 fw-normal mb-0">
                <div className="d-flex">
                  <h5 className="purecounter mb-0 fw-bold" data-purecounter-start={0} data-purecounter-end={200} data-purecounter-duration={2000}>0</h5>
                  <span className="mb-0 h5">+</span>
                </div>
                <p className="mb-0">Expert Tutors</p>
              </div>
            </div>
          </div>
          {/* Counter item for Online Students */}
          <div className="col-sm-6 col-xl-3">
            <div className="d-flex justify-content-center align-items-center p-4 bg-purple bg-opacity-10 rounded-3">
              <span className="display-6 lh-1 text-purple mb-0">
                <i className="fas fa-user-graduate" aria-hidden="true" />
              </span>
              <div className="ms-4 h6 fw-normal mb-0">
                <div className="d-flex">
                  <h5 className="purecounter mb-0 fw-bold" data-purecounter-start={0} data-purecounter-end={60} data-purecounter-duration={2000}>0</h5>
                  <span className="mb-0 h5">K+</span>
                </div>
                <p className="mb-0">Online Students</p>
              </div>
            </div>
          </div>
          {/* Counter item for Certified Courses */}
          <div className="col-sm-6 col-xl-3">
            <div className="d-flex justify-content-center align-items-center p-4 bg-info bg-opacity-10 rounded-3">
              <span className="display-6 lh-1 text-info mb-0">
                <i className="bi bi-patch-check-fill" aria-hidden="true" />
              </span>
              <div className="ms-4 h6 fw-normal mb-0">
                <div className="d-flex">
                  <h5 className="purecounter mb-0 fw-bold" data-purecounter-start={0} data-purecounter-end={6} data-purecounter-duration={3000}>0</h5>
                  <span className="mb-0 h5">K+</span>
                </div>
                <p className="mb-0">Certified Courses</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Render the PureCounter */}
      <PureCounter />
    </section>
  );
}

export default Counter;
