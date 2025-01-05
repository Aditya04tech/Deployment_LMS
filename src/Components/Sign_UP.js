import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from "../Components/Services/axiosInterceptor";

// Import Firebase and Auth related libraries
import { signInWithPopup } from "../services/firebase";
import { getAuth } from "firebase/auth"; 
import { GoogleAuthProvider } from "firebase/auth"; 
import { useUser } from "../context/UserContext";

const Sign_UP = () => {

  const navigate = useNavigate(); // Initialize navigate function
  const { login } = useUser(); // Use login from context

  const auth = getAuth();  // Firebase auth instance
  const googleProvider = new GoogleAuthProvider();  // Google login provider

  // Handle Google Login
  const handleGoogleLogin = async () => {
    try {
      // Start Google sign-in with popup
      const result = await signInWithPopup(auth, googleProvider);
  
      // Get the user info
      const user = result.user;
  
      if (user) {
        // Generate Firebase ID Token after successful login
        const token = await user.getIdToken();  // Firebase's token
        console.log('Firebase Token:', token); // Debug token value
  
        // Now login using context and pass user data with the token
        login({ name: user.displayName, email: user.email, photo: user.photoURL }, token);
  
        // Send the user data and token to your backend (if needed)
        const response = await axios.post("http://65.0.124.32:9000/api/users/save", {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
          token,  // Pass the generated token to the backend
        });
  
        if (response.status === 200) {
          console.log("User data saved:", response.data);
          navigate("/dashboard");  // Navigate to dashboard after successful login
        }
      }
    } catch (error) {
      // Error in the login process or token retrieval
      console.error("Google login error:", error.message);
    }
  };
  
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Handle Register Form Submission
  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("api/auth/users/register", input);
      if (response.status === 201) {
        alert(response.data.message);  // Show success message
        navigate("/login");  // Navigate to login page
      }
    } catch (error) {
      alert(error.response.data.message);  // Show error message
    }
  };

  return (
    <div>
      {/* Main Container */}
      <main>
        <section className="p-0 d-flex align-items-center position-relative overflow-hidden">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-lg-6 d-md-flex align-items-center justify-content-center bg-primary bg-opacity-10 vh-lg-100">
                <div className="p-3 p-lg-5">
                  <div className="text-center">
                    <h2 className="fw-bold">
                      Welcome to our largest community
                    </h2>
                    <p className="mb-0 h6 fw-light">
                      Let's learn something new today!
                    </p>
                  </div>
                  <img
                    src="assets/images/element/02.svg"
                    className="mt-5"
                    alt="Element Image"
                  />
                  <div className="d-sm-flex mt-5 align-items-center justify-content-center">
                    <ul className="avatar-group mb-2 mb-sm-0">
                      <li className="avatar avatar-sm">
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/images/avatar/01.jpg"
                          alt="Avatar 1"
                        />
                      </li>
                      <li className="avatar avatar-sm">
                        <img
                          className="avatar-img rounded-circle"
                          src="assets/images/avatar/02.jpg"
                          alt="Avatar 2"
                        />
                      </li>
                    </ul>
                    <p className="mb-0 h6 fw-light ms-0 ms-sm-3">
                      4k+ Students joined us, now it's your turn.
                    </p>
                  </div>
                </div>
              </div>

              {/* Signup Form Section */}
              <div className="col-12 col-lg-6 m-auto">
                <div className="row my-5">
                  <div className="col-sm-10 col-xl-8 m-auto">
                    <img
                      src="assets/images/element/03.svg"
                      className="h-40px mb-2"
                      alt="Element 03"
                    />
                    <h2>Sign up for your account!</h2>
                    <p className="lead mb-4">
                      Nice to see you! Please Sign up with your account.
                    </p>
                    <form onSubmit={handleRegister}>
                      {/* Name Field */}
                      <div className="mb-4">
                        <label
                          htmlFor="exampleInputName"
                          className="form-label"
                        >
                          Name *
                        </label>
                        <input
                          type="text"
                          className="form-control border-1 bg-lights rounded-end ps-1"
                          id="exampleInputName"
                          name="name"
                          value={input.name}
                          onChange={(e) =>
                            setInput({
                              ...input,
                              [e.target.name]: e.target.value,
                            })
                          }
                        />
                      </div>

                      {/* Email Field */}
                      <div className="mb-4">
                        <label
                          htmlFor="exampleInputEmail"
                          className="form-label"
                        >
                          Email *
                        </label>
                        <input
                          type="email"
                          className="form-control border-1 bg-lights rounded-end ps-1"
                          id="exampleInputEmail"
                          name="email"
                          value={input.email}
                          onChange={(e) =>
                            setInput({
                              ...input,
                              [e.target.name]: e.target.value,
                            })
                          }
                        />
                      </div>

                      {/* Password Field */}
                      <div className="mb-4">
                        <label htmlFor="inputPassword" className="form-label">
                          Password *
                        </label>
                        <input
                          type="password"
                          className="form-control border-1 bg-lights rounded-end ps-1"
                          id="inputPassword"
                          name="password"
                          value={input.password}
                          onChange={(e) =>
                            setInput({
                              ...input,
                              [e.target.name]: e.target.value,
                            })
                          }
                        />
                      </div>

                      {/* Submit Button */}
                      <div className="align-items-center mt-0">
                        <div className="d-grid">
                          <button
                            className="btn btn-primary mb-0"
                            type="submit"
                          >
                            Sign Up
                          </button>
                        </div>
                      </div>
                    </form>

                    {/* Social buttons */}
                    <div className="row">
                      <div className="position-relative my-4">
                        <hr />
                        <p className="small position-absolute top-50 start-50 translate-middle bg-body px-5">
                          Or
                        </p>
                      </div>
                      <div className="col-xxl-6 d-grid">
                        <button onClick={handleGoogleLogin} className="btn bg-google mb-2 mb-xxl-0">
                          <i className="fab fa-fw fa-google text-white me-2" />
                          Signup with Google
                        </button>
                      </div>
                      <div className="col-xxl-6 d-grid">
                        <a href="#" className="btn bg-facebook mb-0">
                          <i className="fab fa-fw fa-facebook-f me-2" />
                          Signup with Facebook
                        </a>
                      </div>
                    </div>

                    <div className="mt-3 text-center">
                      <p>
                        Already have an account?
                        <Link to="/signout"> Log In</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Sign_UP;
