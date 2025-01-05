import React, { useState } from "react";
import axios from "../Components/Services/axiosInterceptor";
import { useNavigate, Link } from "react-router-dom";
import { useUser } from "../context/UserContext"; // Adjust the path as needed

const SignIn = () => {
  const { login } = useUser(); // Get the login function from context
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
    name: "", // Added name for handling the input correctly
  });

  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("api/auth/users/login", input);
      if (response.status === 200) {
        alert(response.data.message);
  
        // Store the token, name, and email in localStorage
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("name", response.data.name);
        localStorage.setItem("userEmail", input.email); // Store the logged-in user's email
  
        login(response.data); // Call login from context to update user state
        navigate("/"); // Redirect to home or other target page
      }
    } catch (error) {
      // Check if the error has a response object with a message
      const errorMessage =
        error.response?.data?.message || "Login failed. Please try again.";
      alert(errorMessage);
    }
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <main>
        <section className="p-0 d-flex align-items-center position-relative overflow-hidden">
          <div className="container-fluid">
            <div className="row">
              {/* Left Section */}
              <div className="col-12 col-lg-6 d-md-flex align-items-center justify-content-center bg-primary bg-opacity-10 vh-lg-100">
                <div className="p-3 p-lg-5 text-center">
                  <h2 className="fw-bold">Welcome to our largest community</h2>
                  <p className="mb-0 h6 fw-light">
                    Let's learn something new today!
                  </p>
                  <img
                    src="assets/images/element/02.svg"
                    className="mt-5"
                    alt="Welcome"
                  />
                  <p className="mb-0 h6 fw-light">
                    4k+ Students joined us, now it's your turn.
                  </p>
                </div>
              </div>
              {/* Right Section */}
              <div className="col-12 col-lg-6 m-auto">
                <div className="row my-5">
                  <div className="col-sm-10 col-xl-8 m-auto">
                    <span className="mb-0 fs-1">👋</span>
                    <h1 className="fs-2">Login into LMS!</h1>
                    <p className="lead mb-4">
                      Nice to see you! Please log in with your account.
                    </p>

                    {/* Login Form */}
                    <form onSubmit={handleLogin}>
                      {/* Name Field */}
                      {/* <div className="mb-4">
                        <label htmlFor="name" className="form-label">
                          Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          className="form-control border-1 bg-lights rounded-end ps-1"
                          value={input.name}
                          onChange={handleChange}
                        />
                      </div> */}

                      {/* Email Field */}
                      <div className="mb-4">
                        <label htmlFor="email" className="form-label">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          className="form-control border-1 bg-lights rounded-end ps-1"
                          value={input.email}
                          onChange={handleChange}
                        />
                      </div>

                      {/* Password Field with Inline Eye Icon */}
                      <div className="mb-4 position-relative">
                        <label htmlFor="password" className="form-label">
                          Password *
                        </label>
                        <input
                          type={showPassword ? "text" : "password"} // Toggle between text and password
                          name="password"
                          className="form-control border-1 bg-lights rounded-end ps-1"
                          value={input.password}
                          onChange={handleChange}
                          style={{ paddingRight: "2.5rem" }} // Add space for the eye icon
                        />
                        <i
                          className={`fas ${
                            showPassword ? "fa-eye-slash" : "fa-eye"
                          } position-absolute`}
                          onClick={() => setShowPassword((prev) => !prev)} // Toggle visibility
                          style={{
                            top: "50%",
                            right: "10px",
                            transform: "translateY(-50%)",
                            cursor: "pointer",
                            color: "#6c757d",
                          }}
                        ></i>
                        <div id="passwordHelpBlock" className="form-text">
                          Your password must be at least 8 characters.
                        </div>
                      </div>

                      {/* Remember Me and Forgot Password */}
                      <div className="mb-4 d-flex justify-content-between">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="rememberMe"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="rememberMe"
                          >
                            Remember me
                          </label>
                        </div>
                        <div className="text-primary-hover">
                          <Link to="/reset-password" className="text-secondary">
                            <u>Forgot password?</u>
                          </Link>
                        </div>
                      </div>

                      {/* Submit Button */}
                      <div className="align-items-center mt-0">
                        <div className="d-grid">
                          <button
                            className="btn btn-primary mb-0"
                            type="submit"
                          >
                            Login
                          </button>
                        </div>
                      </div>
                    </form>

                    {/* Social Login Options */}
                    <div className="row mt-4">
                      <div className="position-relative my-4">
                        <hr />
                        <p className="small position-absolute top-50 start-50 translate-middle bg-body px-5">
                          Or
                        </p>
                      </div>
                      <div className="col-xxl-6 d-grid">
                        {/* <a href="#" className="btn bg-google mb-2 mb-xxl-0">
                          <i className="fab fa-fw fa-google text-white me-2" />{" "}
                          Login with Google
                        </a> */}
                      </div>
                      <div className="col-xxl-6 d-grid">
                        <a href="#" className="btn bg-facebook mb-0">
                          <i className="fab fa-fw fa-facebook-f me-2" /> Login
                          with Facebook
                        </a>
                      </div>
                    </div>

                    {/* Sign Up Link */}
                    <div className="mt-4 text-center">
                      <span>
                        Don't have an account?{" "}
                        <Link to="/signup">Signup here</Link>
                      </span>
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

export default SignIn;
