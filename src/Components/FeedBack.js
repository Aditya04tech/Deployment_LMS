import React, { useState, useEffect } from 'react';

export default function FeedbackSlider() {
  // Feedback data for the slideshow
  const feedbackData = [
    {
      name: 'Lori Stevens',
      image: 'assets/images/avatar/05.jpg',
      text: 'Moonlight newspaper up its enjoyment agreeable depending. Timed voice share led him to widen. At weddings believed laughing.'
    },
    {
      name: 'Billy Vasquez',
      image: 'assets/images/avatar/07.jpg',
      text: 'Its enjoyment Moonlight newspaper up agreeable depending. Timed voice share led him to widen. At weddings believed laughing.'
    },
    {
      name: 'Carolyn Ortiz',
      image: 'assets/images/avatar/09.jpg',
      text: 'Newspaper up its enjoyment agreeable depending. Timed voice share led him to widen. At weddings believed laughing.'
    },
    {
      name: 'Carolyn Ortiz',
      image: 'assets/images/avatar/01.jpg',
      text: 'Newspaper up its enjoyment agreeable depending. Timed voice share led him to widen. At weddings believed laughing.'
    },
    {
      name: 'John Doe',
      image: 'assets/images/avatar/02.jpg',
      text: 'Enjoyment agreeable depending led him to widen. Weddings believed laughing is joyous.'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbackData.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, [feedbackData.length]);

  // Handlers for navigating slides
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? feedbackData.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbackData.length);
  };

  // Display three feedback items at a time
  const getVisibleFeedback = () => {
    const visibleFeedback = [];
    for (let i = 0; i < 3; i++) {
      visibleFeedback.push(feedbackData[(currentIndex + i) % feedbackData.length]);
    }
    return visibleFeedback;
  };

  return (
    <>
    <section className="bg-lights position-relative">
    <hr className="text-primary h-5" />
      <div className="container text-center">
        {/* Section Title */}
        <h2>Our Customer Feedback</h2>
        <p className="mb-4">Perceived end knowledge certainly day sweetness why cordially</p>

        {/* Feedback Slider */}
        <div className="position-relative d-flex justify-content-center align-items-center">
          {/* Left Button */}
          <button className="btn btn-primary me-3" onClick={handlePrev} aria-label="Previous">
            <i className="fas fa-arrow-left"></i>
          </button>

          {/* Feedback Items */}
          <div className="d-flex justify-content-around w-100 overflow-hidden" style={{ scrollBehavior: 'smooth' }}>
            {getVisibleFeedback().map((feedback, index) => (
              <div key={index} className="bg-body p-4 rounded-3 border border-1 mx-2">
                {/* Avatar */}
                <div className="avatar avatar-lg mb-3">
                  <img
                    className="avatar-img rounded-circle"
                    src={feedback.image}
                    alt={`${feedback.name}'s Avatar`}
                  />
                </div>
                {/* Name */}
                <h6>{feedback.name}</h6>
                {/* Feedback Text */}
                <p className="mt-2">{feedback.text}</p>
              </div>
            ))}
          </div>

          {/* Right Button */}
          <button className="btn btn-primary ms-3" onClick={handleNext} aria-label="Next">
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
    </>
  );
}
