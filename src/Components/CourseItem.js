import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'bs-stepper/dist/css/bs-stepper.min.css';

const CourseItem = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState({});

  const handleStepClick = (step) => {
    setCurrentStep(step);
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleSubmit = () => {
    // Handle the submission logic here
    console.log("Results submitted:", answers);
    alert("Results submitted!");
  };

  const handleAnswerChange = (step, answer) => {
    setAnswers({ ...answers, [step]: answer });
  };

  return (
    <div className="col-xl-9">
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
                <div className="bs-stepper-header" role="tablist">
                  {[1, 2, 3, 4].map((step) => (
                    <div key={step} className="step" data-target={`#step-${step}`}>
                      <div className="d-grid text-center align-items-center">
                        <button
                          type="button"
                          className={`btn btn-link step-trigger mb-0 ${currentStep === step ? 'active' : ''}`}
                          onClick={() => handleStepClick(step)}
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
                  <Question
                    step={1}
                    question="How do you protect your business against cyber-crime?"
                    options={[
                      'We have cybersecurity insurance coverage',
                      'Our dedicated staff will protect us',
                      'We give regular training for best practices',
                      'Third-party vendor protection',
                    ]}
                    currentStep={currentStep}
                    onAnswerChange={handleAnswerChange}
                  />
                  <Question
                    step={2}
                    question="What is SEO?"
                    options={[
                      'Search Engine Optimization',
                      'Security for online businesses',
                      'Cybersecurity measures',
                      'Vendor protection strategies',
                    ]}
                    currentStep={currentStep}
                    onAnswerChange={handleAnswerChange}
                  />
                  <Question
                    step={3}
                    question="Who should join this course?"
                    options={[
                      'Beginners in digital marketing',
                      'Marketing professionals',
                      'Business owners',
                      'Anyone interested in online marketing',
                    ]}
                    currentStep={currentStep}
                    onAnswerChange={handleAnswerChange}
                  />
                  <Question
                    step={4}
                    question="What are the Terms and Conditions for this program?"
                    options={[
                      'Terms of service apply',
                      'Refund policy applies',
                      'Course content is subject to change',
                      'Participation requires prior knowledge',
                    ]}
                    currentStep={currentStep}
                    onAnswerChange={handleAnswerChange}
                  />

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
    </div>
  );
};

const Question = ({ step, question, options, currentStep, onAnswerChange }) => {
  return (
    currentStep === step && (
      <div id={`step-${step}`} className="content fade show">
        <h4>{question}</h4>
        <hr />
        <div className="vstack gap-2">
          {options.map((option, index) => (
            <div key={index}>
              <input
                type="radio"
                className="btn-check"
                id={`option${step}-${index}`}
                name={`question${step}`}
                onChange={() => onAnswerChange(step, option)}
              />
              <label className="btn btn-outline-primary w-100" htmlFor={`option${step}-${index}`}>
                {option}
              </label>
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default CourseItem;
