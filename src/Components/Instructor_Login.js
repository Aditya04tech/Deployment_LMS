import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Updated to useNavigate

const Instructor_Login = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const [timer, setTimer] = useState(0);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [canResend, setCanResend] = useState(false);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  useEffect(() => {
    let countdown;
    if (timer > 0 && isOtpSent) {
      countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      setCanResend(false); // Disable "Resend OTP" while timer is running
    } else if (timer === 0 && isOtpSent) {
      setCanResend(true); // Enable "Resend OTP" only after timer ends
    }
    return () => clearInterval(countdown);
  }, [timer, isOtpSent]);

  // Function to send OTP
  const sendOtp = async () => {
    if (!email) {
      alert('Please enter your email address');
      return;
    }

    try {
      const response = await axios.post('http://65.0.124.32:9000/send-otp', { email });
      setMessage(response.data.message);
      setIsOtpSent(true);
      setTimer(30); // Start countdown
    } catch (error) {
      setMessage('Error sending OTP');
    }
  };

   // Function to verify OTP
  const verifyOtp = async () => {
    try {
      const response = await axios.post('http://65.0.124.32:9000/verify-otp', { email, userOtp: otp });
      setMessage(response.data.message);
      if (response.data.message === 'OTP verified successfully') {
        alert('OTP verified successfully');
        navigate('/instructordashboard'); // Redirect to instructor dashboard
      }
    } catch (error) {
      console.error('Error verifying OTP:', error.response?.data?.message || error);
      setMessage(error.response?.data?.message || 'Invalid OTP');
    }
  };

  return (
    <div className="login-form-container">
      <div className="form-wrapper">
        <div className="logo-container">
          <img
            src="./assets/images/LMS.jpg"
             alt="LMS"
            className="logo"
            style={{
              width: '250px',    // Set desired width
              height: 'auto',    // Maintain aspect ratio
              borderRadius: '10px', // Optional: Rounded edges
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Optional: Add shadow
            }}
          />
        </div>
        <div className="form-card">
          <h4>Instructor login</h4>
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: '100%', height: '40px', fontSize: '16px', padding: '10px' }}
            />
            <button
              onClick={sendOtp}
              style={{
                padding: '5px 10px', // Smaller padding
                fontSize: '12px',    // Smaller font size
                backgroundColor: '#007bff', // Custom button color (blue)
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                display: 'block',   // Block display for centering
                margin: '10px auto' // Centers horizontally
              }}
              disabled={isOtpSent} // Disable "Send OTP" after OTP is sent
            >
              Send OTP
            </button>

            {isOtpSent && (
              <>
                <p>OTP expires in: {timer}s</p>
                <input
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  style={{ width: '100%', height: '40px', fontSize: '16px', padding: '10px' }}
                />
                <button
                  onClick={verifyOtp}
                  style={{
                    padding: '5px 10px', // Smaller padding
                    fontSize: '12px',    // Smaller font size
                    backgroundColor: '#007bff', // Custom button color (blue)
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    display: 'block',   // Block display for centering
                    margin: '10px auto' // Centers horizontally
                  }}
                  className="small-button"
                >
                  Verify OTP
                </button>
              </>
            )}

            {canResend && (
              <button
                onClick={sendOtp}
                style={{
                  padding: '5px 10px', // Smaller padding
                  fontSize: '12px',    // Smaller font size
                  backgroundColor: '#007bff', // Custom button color (blue)
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  display: 'block',   // Block display for centering
                  margin: '10px auto' // Centers horizontally
                }}
              >
                Resend OTP
              </button>
            )}

            <p>{message}</p>
          </div>
          <p className="terms-text">
            By continuing, you agree to LMS's{' '}
            <a href="#" className="terms-link">Conditions of Use</a> and{' '}
            <a href="#" className="terms-link">Privacy Notice</a>.
          </p>
          <a href="#" className="help-link">Need help?</a>
        </div>
        <div className="divider">
          <span className="divider-text">New to LMS?</span>
        </div>
        <button
          className="create-account-button"
          style={{
            padding: '5px 10px', // Smaller padding
            fontSize: '12px',    // Smaller font size
            backgroundColor: '#007bff', // Custom button color (blue)
            color: 'white',      // Text color
            border: 'none',      // No border
            borderRadius: '3px', // Rounded corners
            cursor: 'pointer',
          }}
          onClick={() => window.location.href = '/signUp'}
        >
          Create your Instructor account
        </button>
      </div>
      <footer className="footer">
        <div className="footer-links">
          <a href="#" className="footer-link">Conditions of Use</a>
          <a href="#" className="footer-link">Privacy Notice</a>
          <a href="#" className="footer-link">Help</a>
        </div>
        <div className="footer-text">© 1996-2024, Amazon.com, Inc. or its affiliates</div>
      </footer>
    </div>
  );
};

export default Instructor_Login;
