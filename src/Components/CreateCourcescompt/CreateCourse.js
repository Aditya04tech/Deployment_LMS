import React, { useState } from 'react';
import Nav from '../Nav';
import axios from "../Services/axiosInterceptor";

const CreateCourse = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const steps = [
    { number: 1, title: 'Course details' },
    { number: 2, title: 'Course media' },
    { number: 3, title: 'Curriculum' },
    { number: 4, title: 'Additional information' }
  ];

  const navigateToStep = (stepNumber) => {
    if (stepNumber >= 1 && stepNumber <= totalSteps) {
      setCurrentStep(stepNumber);
    }
  };

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    level: '',
    featured: false,
    courseImage: null,
    videoUrl: '',
    videoFile: null,
    curriculum: [],
    tags: '',
    reviewerMessage: '',
  });

  const handleInputChange = (e) => {
    const { id, value, type, checked, files } = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => ({ ...prev, [id]: checked }));
    } else if (type === 'file') {
      setFormData((prev) => ({ ...prev, [id]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [id]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate if all required fields are filled
    const requiredFields = ['title', 'description', 'category', 'level', 'courseImage'];
    const missingFields = requiredFields.filter(field => !formData[field]);

    if (missingFields.length > 0) {
      alert(`Please fill in all required fields: ${missingFields.join(', ')}`);
      return;
    }

    const data = new FormData();
    Object.keys(formData).forEach(key => {
      if (key === 'curriculum') {
        data.append(key, JSON.stringify(formData[key]));
      } else if (key === 'featured') {
        data.append(key, formData[key] ? 'true' : 'false');
      } else if (key === 'tags') {
        data.append(key, formData[key].split(',').map(tag => tag.trim()).join(','));
      } else if (key === 'courseImage') {
        if (formData[key]) {
          data.append('courseImage', formData[key], formData[key].name);
        }
      } else if (key === 'videoFile') {
        if (formData[key]) {
          data.append('courseVideo', formData[key], formData[key].name);
        }
      } else if (key === 'videoUrl') {
        if (formData[key]) {
          data.append('videoUrl', JSON.stringify({ path: formData[key], originalName: 'External Video' }));
        }
      } else {
        data.append(key, formData[key]);
      }
    });

    try {
      const response = await axios.post("/api/auth/courses", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Course created successfully:", response.data);
      alert("Course created successfully!");
      // Reset form after successful submission
      setFormData({
        title: '',
        description: '',
        category: '',
        level: '',
        featured: false,
        courseImage: null,
        videoUrl: '',
        videoFile: null,
        curriculum: [],
        tags: '',
        reviewerMessage: '',
      });
    } catch (error) {
      console.error("Error creating course:", error.response?.data || error.message);
      alert("Error creating course. Please check the console for more details.");
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className=''>
            <h2 style={styles.heading}>Course Details</h2>
            <div style={styles.formGroup}>
              <label htmlFor="title">Course title</label>
              <input type="text" id="title" value={formData.title} onChange={handleInputChange} placeholder="Enter course title" style={styles.input} />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="description">Short description</label>
              <textarea id="description" value={formData.description} onChange={handleInputChange} placeholder="Enter course description" style={styles.textarea}></textarea>
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="category">Course category</label>
              <select id="category" value={formData.category} onChange={handleInputChange} style={styles.select}>
                <option value="">Select category</option>
                <option value="engineering">Engineering</option>
                <option value="medical">Medical</option>
                <option value="it">Information Technology</option>
                <option value="finance">Finance</option>
              </select>
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="level">Course level</label>
              <select id="level" value={formData.level} onChange={handleInputChange} style={styles.select}>
                <option value="">Select level</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
            <div style={styles.formGroup}>
              <input type="checkbox" id="featured" checked={formData.featured} onChange={handleInputChange} />
              <label htmlFor="featured">Mark as featured course</label>
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <h2 style={styles.heading}>Course Media</h2>
            <div style={styles.uploadArea}>
              <p>Upload course image</p>
              <input type="file" id="courseImage" onChange={handleInputChange} accept="image/*" />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="videoUrl">Video URL</label>
              <input type="text" id="videoUrl" value={formData.videoUrl} onChange={handleInputChange} placeholder="Enter video URL" style={styles.input} />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="videoFile">Or upload video file</label>
              <input type="file" id="videoFile" accept="video/*" onChange={handleInputChange} />
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <h2 style={styles.heading}>Curriculum</h2>
            <button style={styles.button}>Add Lecture</button>
            <div style={styles.lectureItem}>
              <span>Introduction to Digital Marketing</span>
              <div>
                <button style={styles.iconButton}>Edit</button>
                <button style={styles.iconButton}>Delete</button>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div>
            <h2 style={styles.heading}>Additional Information</h2>
            <div style={styles.formGroup}>
              <label htmlFor="tags">Tags</label>
              <input type="text" id="tags" value={formData.tags} onChange={handleInputChange} placeholder="Enter tags (comma separated)" style={styles.input} />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="reviewerMessage">Message to reviewer</label>
              <textarea id="reviewerMessage" value={formData.reviewerMessage} onChange={handleInputChange} placeholder="Write a message to the reviewer" style={styles.textarea}></textarea>
            </div>
            <div style={styles.formGroup}>
              <input type="checkbox" id="terms" />
              <label htmlFor="terms">I accept the terms and conditions</label>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Nav/>
      <section
        className="py-0 bg-blue h-100px align-items-center d-flex h-200px rounded-0"
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
                <a href="#" className="text-white">
                  <u>"Before you create a course"</u>
                </a>{' '}
                article before submitting!
              </p>
            </div>
          </div>
        </div>
      </section>

      <div style={styles.container} className='card bg-transparent border rounded-3 mb-5'>
        <div className="row">
          <div className="col-md-8 mt-5 mx-auto text-center">
            <p className="text-center">Use this interface to add a new Course to the portal. Once you are done adding the item it will be reviewed for quality. If approved, your course will appear for sale and you will be informed by email that your course has been accepted.</p>
          </div>
        </div>
        <div className='bs-stepper stepper-outline'>
          <div style={styles.stepperContainer} className='card-header bg-lights border-bottom px-lg-5'>
            {steps.map((step) => (
              <div key={step.number} style={styles.stepItem} className='bs-stepper-header'>
                <button
                  onClick={() => navigateToStep(step.number)}
                  style={{
                    ...styles.stepButton,
                    ...(currentStep === step.number ? styles.activeStep : {})
                  }}
                >
                  {step.number}
                </button>
                <span style={styles.stepTitle}>{step.title}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={styles.formContainer}>
          {renderStepContent()}
          <div style={styles.navigationButtons}>
            <button
              onClick={() => navigateToStep(currentStep - 1)}
              disabled={currentStep === 1}
              style={styles.button}
            >
              Previous
            </button>
            {currentStep === totalSteps ? (
              <button style={styles.button} onClick={handleSubmit}>Submit Course</button>
            ) : (
              <button
                onClick={() => navigateToStep(currentStep + 1)}
                style={styles.button}
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  stepperContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  stepItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  stepButton: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    border: '2px solid #007bff',
    background: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    marginBottom: '5px',
  },
  activeStep: {
    background: '#007bff',
    color: 'white',
  },
  stepTitle: {
    fontSize: '12px',
  },
  formContainer: {
    backgroundColor: '#f8f9fa',
    padding: '20px',
    borderRadius: '5px',
  },
  heading: {
    marginBottom: '20px',
  },
  formGroup: {
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ced4da',
  },
  textarea: {
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ced4da',
    minHeight: '100px',
  },
  select: {
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ced4da',
  },
  uploadArea: {
    border: '2px dashed #ced4da',
    borderRadius: '4px',
    padding: '20px',
    textAlign: 'center',
    marginBottom: '15px',
  },
  button: {
    padding: '10px 15px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  iconButton: {
    padding: '5px 10px',
    backgroundColor: '#6c757d',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginRight: '5px',
  },
  lectureItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    border: '1px solid #ced4da',
    borderRadius: '4px',
    marginTop: '10px',
  },
  navigationButtons: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  },
};

export default CreateCourse;