import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Link } from 'react-router-dom';

const Instructor_createCourse = () => {
  // State Management
  const [currentStep, setCurrentStep] = useState(1);

  // Step 1: Course Details
  const [courseTitle, setCourseTitle] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [courseCategory, setCourseCategory] = useState('');
  const [courseLevel, setCourseLevel] = useState('');
  const [language, setLanguage] = useState([]);
  const [featuredCourse, setFeaturedCourse] = useState(false);
  const [courseTime, setCourseTime] = useState('');
  const [totalLecture, setTotalLecture] = useState('');
  const [coursePrice, setCoursePrice] = useState('');
  const [enableDiscount, setEnableDiscount] = useState(false);
  const [discountPrice, setDiscountPrice] = useState('');

  // Step 2: Course Media
  const [courseImage, setCourseImage] = useState(null);
  const [videoUrl, setVideoUrl] = useState('');
  const [videoFile, setVideoFile] = useState(null);

  // Step 3: Curriculum
  const [lectures, setLectures] = useState([]);
  const [faqs, setFaqs] = useState([]);

  // Step 4: Additional Information
  const [tags, setTags] = useState([]);
  const [reviewerMessage, setReviewerMessage] = useState('');
  const [courseDescription, setCourseDescription] = useState('');

  // Handlers
  const handleChange = (setter) => (e) => {
    setter(e.target.value);
  };

  const handleFileChange = (setter) => (e) => {
    setter(e.target.files[0]);
  };

  const handleCheckboxChange = (setter) => (e) => {
    setter(e.target.checked);
  };

  const handleLanguageChange = (e) => {
    const options = e.target.options;
    const selected = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selected.push(options[i].value);
      }
    }
    setLanguage(selected);
  };

  // Lectures Handlers
  const handleAddLecture = () => {
    setLectures([...lectures, { title: '', topics: [] }]);
  };

  const handleLectureChange = (index, value) => {
    const updatedLectures = [...lectures];
    updatedLectures[index].title = value;
    setLectures(updatedLectures);
  };

  const handleAddTopic = (lectureIndex) => {
    const updatedLectures = lectures.map((lecture, index) =>
      index === lectureIndex
        ? { ...lecture, topics: [...lecture.topics, { title: '', videoUrl: '', videoFile: null }] }
        : lecture
    );
    setLectures(updatedLectures);
  };

  const handleTopicChange = (lectureIndex, topicIndex, field, value) => {
    const updatedLectures = lectures.map((lecture, lIndex) => {
      if (lIndex === lectureIndex) {
        const updatedTopics = lecture.topics.map((topic, tIndex) => {
          if (tIndex === topicIndex) {
            return { ...topic, [field]: value };
          }
          return topic;
        });
        return { ...lecture, topics: updatedTopics };
      }
      return lecture;
    });
    setLectures(updatedLectures);
  };

  // FAQs Handlers
  const handleAddFaq = () => {
    setFaqs([...faqs, { question: '', answer: '' }]);
  };

  const handleFaqChange = (index, field, value) => {
    const updatedFaqs = faqs.map((faq, fIndex) => {
      if (fIndex === index) {
        return { ...faq, [field]: value };
      }
      return faq;
    });
    setFaqs(updatedFaqs);
  };

  // Tags Handlers
  const handleAddTag = (e) => {
    e.preventDefault();
    const tag = e.target.value.trim();
    if (tag && !tags.includes(tag)) {
      setTags([...tags, tag]);
      e.target.value = '';
    }
  };

  const handleRemoveTag = (index) => {
    setTags(tags.filter((_, tIndex) => tIndex !== index));
  };

  // Navigation Handlers
  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  // Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const courseData = {
      courseTitle,
      shortDescription,
      courseCategory,
      courseLevel,
      language,
      featuredCourse,
      courseTime,
      totalLecture,
      coursePrice,
      discountPrice: enableDiscount ? discountPrice : null,
      enableDiscount,
      courseDescription,
      courseImage,
      videoUrl,
      videoFile,
      lectures,
      faqs,
      tags,
      reviewerMessage,
    };
    // Call API to create course
    console.log(courseData);
    // Reset form or redirect as needed
  };

  return (
    <main>
      {/* Header Section */}
      <section
        className="py-0 bg-blue h-200px align-items-center d-flex rounded-0"
        style={{
          background: 'url(assets/images/pattern/04.png) no-repeat center center',
          backgroundSize: 'cover',
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="text-white">Submit a new Course</h1>
              <p className="text-white mb-0">
                Read our{' '}
                <Link href="#" className="text-white">
                  <u>"Before you create a course"</u>
                </Link>{' '}
                article before submitting!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introductory Text */}
      <section>
        <div className="container my-5">
          <div className="row">
            <div className="col-md-8 mx-auto text-center">
              <p>
                Use this interface to add a new Course to the portal. Once you are done adding the
                item it will be reviewed for quality. If approved, your course will appear for sale
                and you will be informed by email that your course has been accepted.
              </p>
            </div>
          </div>

          {/* Stepper Card */}
          <div className="card bg-transparent border rounded-3 mb-5">
            <div className="bs-stepper stepper-outline">
              {/* Stepper Header */}
              <div className="card-header bg-lights border-bottom px-lg-5">
                <div className="bs-stepper-header" role="tablist">
                  {/* Step 1 */}
                  <div className={`step ${currentStep === 1 ? 'active' : ''}`} data-target="#step-1">
                    <button
                      type="button"
                      className="btn btn-link step-trigger mb-0"
                      role="tab"
                      aria-controls="step-1"
                      aria-selected={currentStep === 1}
                      onClick={() => setCurrentStep(1)}
                    >
                      <span className="bs-stepper-circle">1</span>
                    </button>
                    <h6 className="bs-stepper-label d-none d-md-block">Course details</h6>
                  </div>
                  <div className="line" />

                  {/* Step 2 */}
                  <div className={`step ${currentStep === 2 ? 'active' : ''}`} data-target="#step-2">
                    <button
                      type="button"
                      className="btn btn-link step-trigger mb-0"
                      role="tab"
                      aria-controls="step-2"
                      aria-selected={currentStep === 2}
                      onClick={() => setCurrentStep(2)}
                    >
                      <span className="bs-stepper-circle">2</span>
                    </button>
                    <h6 className="bs-stepper-label d-none d-md-block">Course media</h6>
                  </div>
                  <div className="line" />

                  {/* Step 3 */}
                  <div className={`step ${currentStep === 3 ? 'active' : ''}`} data-target="#step-3">
                    <button
                      type="button"
                      className="btn btn-link step-trigger mb-0"
                      role="tab"
                      aria-controls="step-3"
                      aria-selected={currentStep === 3}
                      onClick={() => setCurrentStep(3)}
                    >
                      <span className="bs-stepper-circle">3</span>
                    </button>
                    <h6 className="bs-stepper-label d-none d-md-block">Curriculum</h6>
                  </div>
                  <div className="line" />

                  {/* Step 4 */}
                  <div className={`step ${currentStep === 4 ? 'active' : ''}`} data-target="#step-4">
                    <button
                      type="button"
                      className="btn btn-link step-trigger mb-0"
                      role="tab"
                      aria-controls="step-4"
                      aria-selected={currentStep === 4}
                      onClick={() => setCurrentStep(4)}
                    >
                      <span className="bs-stepper-circle">4</span>
                    </button>
                    <h6 className="bs-stepper-label d-none d-md-block">Additional information</h6>
                  </div>
                </div>
              </div>

              {/* Stepper Content */}
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  {/* Step 1: Course Details */}
                  {currentStep === 1 && (
                    <div id="step-1" role="tabpanel" className="content fade show active" aria-labelledby="steppertrigger1">
                      <h4>Course Details</h4>
                      <hr />
                      <div className="row g-4">
                        <div className="col-12">
                          <label className="form-label">Course Title</label>
                          <input
                            className="form-control"
                            type="text"
                            value={courseTitle}
                            onChange={handleChange(setCourseTitle)}
                            placeholder="Enter course title"
                            required
                          />
                        </div>
                        <div className="col-12">
                          <label className="form-label">Short Description</label>
                          <textarea
                            className="form-control"
                            rows={2}
                            value={shortDescription}
                            onChange={handleChange(setShortDescription)}
                            placeholder="Enter short description"
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Course Category</label>
                          <select
                            className="form-select js-choice border-0 z-index-9 bg-transparent"
                            value={courseCategory}
                            onChange={handleChange(setCourseCategory)}
                            aria-label=".form-select-sm"
                            required
                          >
                            <option value="">Select category</option>
                            <option>Engineer</option>
                            <option>Medical</option>
                            <option>Information technology</option>
                            <option>Finance</option>
                            <option>Marketing</option>
                          </select>
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Course Level</label>
                          <select
                            className="form-select js-choice border-0 z-index-9 bg-transparent"
                            value={courseLevel}
                            onChange={handleChange(setCourseLevel)}
                            aria-label=".form-select-sm"
                            required
                          >
                            <option value="">Select course level</option>
                            <option>All levels</option>
                            <option>Beginner</option>
                            <option>Intermediate</option>
                            <option>Advanced</option>
                          </select>
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Language</label>
                          <select
                            className="form-select js-choice border-0 z-index-9 bg-transparent"
                            value={language}
                            onChange={handleLanguageChange}
                            multiple
                            aria-label=".form-select-sm"
                            required
                          >
                            <option value="">Select language</option>
                            <option>English</option>
                            <option>German</option>
                            <option>French</option>
                            <option>Hindi</option>
                          </select>
                        </div>
                        <div className="col-md-6 d-flex align-items-center justify-content-start mt-4">
                          <div className="form-check form-switch form-check-md">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="checkPrivacy1"
                              checked={featuredCourse}
                              onChange={handleCheckboxChange(setFeaturedCourse)}
                            />
                            <label className="form-check-label" htmlFor="checkPrivacy1">
                              Check this for featured course
                            </label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Course Duration (hours)</label>
                          <input
                            className="form-control"
                            type="number"
                            value={courseTime}
                            onChange={handleChange(setCourseTime)}
                            placeholder="Enter course duration"
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Total Lectures</label>
                          <input
                            className="form-control"
                            type="number"
                            value={totalLecture}
                            onChange={handleChange(setTotalLecture)}
                            placeholder="Enter total lectures"
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Course Price</label>
                          <input
                            type="number"
                            className="form-control"
                            value={coursePrice}
                            onChange={handleChange(setCoursePrice)}
                            placeholder="Enter course price"
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Enable Discount</label>
                          <div className="form-check small mb-0">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="enableDiscount"
                              checked={enableDiscount}
                              onChange={handleCheckboxChange(setEnableDiscount)}
                            />
                            <label className="form-check-label" htmlFor="enableDiscount">
                              Enable this Discount
                            </label>
                          </div>
                          {enableDiscount && (
                            <input
                              className="form-control mt-2"
                              type="number"
                              value={discountPrice}
                              onChange={handleChange(setDiscountPrice)}
                              placeholder="Enter discount price"
                              required={enableDiscount}
                            />
                          )}
                        </div>
                      </div>
                      <div className="d-flex justify-content-end mt-3">
                        <button type="button" className="btn btn-primary next-btn" onClick={nextStep}>
                          Next
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Course Media */}
                  {currentStep === 2 && (
                    <div id="step-2" role="tabpanel" className="content fade show active" aria-labelledby="steppertrigger2">
                      <h4>Course Media</h4>
                      <hr />
                      <div className="row g-4">
                        <div className="col-12">
                          <label className="form-label">Course Image</label>
                          <input
                            className="form-control"
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange(setCourseImage)}
                            required
                          />
                        </div>
                        <div className="col-12">
                          <label className="form-label">Intro Video URL</label>
                          <input
                            className="form-control"
                            type="url"
                            value={videoUrl}
                            onChange={handleChange(setVideoUrl)}
                            placeholder="Enter video URL"
                          />
                        </div>
                        <div className="col-12">
                          <label className="form-label">Upload Intro Video</label>
                          <input
                            className="form-control"
                            type="file"
                            accept="video/*"
                            onChange={handleFileChange(setVideoFile)}
                          />
                        </div>
                      </div>
                      <div className="d-flex justify-content-between mt-3">
                        <button type="button" className="btn btn-secondary" onClick={prevStep}>
                          Previous
                        </button>
                        <button type="button" className="btn btn-primary" onClick={nextStep}>
                          Next
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Curriculum */}
                  {currentStep === 3 && (
                    <div id="step-3" role="tabpanel" className="content fade show active" aria-labelledby="steppertrigger3">
                      <h4>Curriculum</h4>
                      <hr />
                      <div className="mb-4">
                        <h5>Lectures</h5>
                        {lectures.map((lecture, index) => (
                          <div key={index} className="mb-3 p-3 border rounded">
                            <div className="d-flex justify-content-between align-items-center">
                              <h6>Lecture {index + 1}</h6>
                              <button
                                type="button"
                                className="btn btn-danger btn-sm"
                                onClick={() => {
                                  const updatedLectures = lectures.filter((_, lIndex) => lIndex !== index);
                                  setLectures(updatedLectures);
                                }}
                              >
                                Remove
                              </button>
                            </div>
                            <div className="mb-2">
                              <label className="form-label">Lecture Title</label>
                              <input
                                type="text"
                                className="form-control"
                                value={lecture.title}
                                onChange={(e) => handleLectureChange(index, e.target.value)}
                                placeholder="Enter lecture title"
                                required
                              />
                            </div>
                            {/* Topics */}
                            <div className="mt-3">
                              <h6>Topics</h6>
                              {lecture.topics.map((topic, tIndex) => (
                                <div key={tIndex} className="mb-2 p-2 border rounded">
                                  <div className="d-flex justify-content-between align-items-center">
                                    <span>Topic {tIndex + 1}</span>
                                    <button
                                      type="button"
                                      className="btn btn-danger btn-sm"
                                      onClick={() => {
                                        const updatedLectures = lectures.map((lec, lIdx) => {
                                          if (lIdx === index) {
                                            const updatedTopics = lec.topics.filter((_, topicIdx) => topicIdx !== tIndex);
                                            return { ...lec, topics: updatedTopics };
                                          }
                                          return lec;
                                        });
                                        setLectures(updatedLectures);
                                      }}
                                    >
                                      Remove
                                    </button>
                                  </div>
                                  <div className="mb-2">
                                    <label className="form-label">Topic Title</label>
                                    <input
                                      type="text"
                                      className="form-control"
                                      value={topic.title}
                                      onChange={(e) =>
                                        handleTopicChange(index, tIndex, 'title', e.target.value)
                                      }
                                      placeholder="Enter topic title"
                                      required
                                    />
                                  </div>
                                  <div className="mb-2">
                                    <label className="form-label">Video URL</label>
                                    <input
                                      type="url"
                                      className="form-control"
                                      value={topic.videoUrl}
                                      onChange={(e) =>
                                        handleTopicChange(index, tIndex, 'videoUrl', e.target.value)
                                      }
                                      placeholder="Enter video URL"
                                    />
                                  </div>
                                  <div className="mb-2">
                                    <label className="form-label">Upload Video File</label>
                                    <input
                                      type="file"
                                      className="form-control"
                                      accept="video/*"
                                      onChange={(e) =>
                                        handleTopicChange(index, tIndex, 'videoFile', e.target.files[0])
                                      }
                                    />
                                  </div>
                                </div>
                              ))}
                              <button
                                type="button"
                                className="btn btn-secondary btn-sm"
                                onClick={() => handleAddTopic(index)}
                              >
                                Add Topic
                              </button>
                            </div>
                          </div>
                        ))}
                        <button type="button" className="btn btn-primary" onClick={handleAddLecture}>
                          Add Lecture
                        </button>
                      </div>

                      <div className="mb-4">
                        <h5>FAQs</h5>
                        {faqs.map((faq, index) => (
                          <div key={index} className="mb-3 p-3 border rounded">
                            <div className="d-flex justify-content-between align-items-center">
                              <h6>FAQ {index + 1}</h6>
                              <button
                                type="button"
                                className="btn btn-danger btn-sm"
                                onClick={() => {
                                  const updatedFaqs = faqs.filter((_, fIndex) => fIndex !== index);
                                  setFaqs(updatedFaqs);
                                }}
                              >
                                Remove
                              </button>
                            </div>
                            <div className="mb-2">
                              <label className="form-label">Question</label>
                              <input
                                type="text"
                                className="form-control"
                                value={faq.question}
                                onChange={(e) => handleFaqChange(index, 'question', e.target.value)}
                                placeholder="Enter question"
                                required
                              />
                            </div>
                            <div className="mb-2">
                              <label className="form-label">Answer</label>
                              <textarea
                                className="form-control"
                                rows={2}
                                value={faq.answer}
                                onChange={(e) => handleFaqChange(index, 'answer', e.target.value)}
                                placeholder="Enter answer"
                                required
                              />
                            </div>
                          </div>
                        ))}
                        <button type="button" className="btn btn-primary" onClick={handleAddFaq}>
                          Add FAQ
                        </button>
                      </div>

                      <div className="d-flex justify-content-between mt-3">
                        <button type="button" className="btn btn-secondary" onClick={prevStep}>
                          Previous
                        </button>
                        <button type="button" className="btn btn-primary" onClick={nextStep}>
                          Next
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 4: Additional Information */}
                  {currentStep === 4 && (
                    <div id="step-4" role="tabpanel" className="content fade show active" aria-labelledby="steppertrigger4">
                      <h4>Additional Information</h4>
                      <hr />
                      <div className="row g-4">
                        <div className="col-12">
                          <label className="form-label">Course Description</label>
                          <ReactQuill
                            theme="snow"
                            value={courseDescription}
                            onChange={setCourseDescription}
                            placeholder="Enter course description"
                            modules={{
                              toolbar: [
                                [{ size: [] }],
                                ['bold', 'italic', 'underline', 'strike'],
                                [{ color: [] }, { background: [] }],
                                ['code-block'],
                                [{ list: 'ordered' }, { list: 'bullet' }],
                                [{ indent: '-1' }, { indent: '+1' }],
                                ['link', 'image'],
                                ['clean'],
                              ],
                            }}
                          />
                        </div>
                        <div className="col-12">
                          <label className="form-label">Tags</label>
                          <div className="d-flex flex-wrap">
                            {tags.map((tag, index) => (
                              <span key={index} className="badge bg-primary me-2 mb-2">
                                {tag}{' '}
                                <button
                                  type="button"
                                  className="btn btn-sm btn-light ms-1"
                                  onClick={() => handleRemoveTag(index)}
                                >
                                  &times;
                                </button>
                              </span>
                            ))}
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter tag and press Enter"
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') {
                                handleAddTag(e);
                              }
                            }}
                          />
                        </div>
                        <div className="col-12">
                          <label className="form-label">Reviewer Message</label>
                          <textarea
                            className="form-control"
                            rows={3}
                            value={reviewerMessage}
                            onChange={handleChange(setReviewerMessage)}
                            placeholder="Enter message for reviewer"
                          />
                        </div>
                      </div>
                      <div className="d-flex justify-content-between mt-3">
                        <button type="button" className="btn btn-secondary" onClick={prevStep}>
                          Previous
                        </button>
                        <button type="submit" className="btn btn-success">
                          Submit Course
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Instructor_createCourse;