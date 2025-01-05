import React from "react";
import { Link } from "react-router-dom";

const ActionBox = () => {
  return (
    <div className="container py-4">
      <div className="bg-info p-4 p-sm-5 rounded-3">
        <div className="row position-relative">
          {/* SVG Decoration */}
          <figure className="position-absolute top-50 start-0 translate-middle-y opacity-1">
            <svg
              width="141"
              height="141"
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
            >
              <path d="M140.52 70.258c0 38.806-31.458 70.261-70.262 70.261C31.454 140.519 0 109.064 0 70.258 0 31.455 31.454 0 70.258 0c38.804 0 70.262 31.455 70.262 70.258z" />
            </svg>
          </figure>

          {/* Action Content */}
          <div className="col-11 mx-auto position-relative">
            <div className="row align-items-center">
              {/* Title and Description */}
              <div className="col-lg-7">
  <h3 className="text-white">Achieve Your Goals with Us!</h3>
  <p className="text-white mb-3 mb-lg-0">
    Turn your passion into expertise! Join our community of learners and 
    professionals who are transforming their lives. Gain the skills, 
    confidence, and connections you need to succeed. Start your journey 
    today—your future is waiting!
  </p>
</div>

              {/* Call-to-Action Button */}
              <div className="col-lg-5 text-lg-end">
                <Link
                  tp="/course"
                  className="btn btn-outline-warning mb-0"
                  role="button"
                >
                 Start your journey today!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionBox;
