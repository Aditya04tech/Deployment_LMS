// import React, { useState } from 'react';

// const Login = () => {
//   // State to manage form inputs and validation
//   const [formData, setFormData] = useState({
//     signInEmail: '',
//     signInPassword: '',
//     rememberMe: false,
//   });

//   const [errors, setErrors] = useState({
//     signInEmail: '',
//     signInPassword: '',
//   });

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === 'checkbox' ? checked : value,
//     });
//   };

//   // Form validation logic
//   const validate = () => {
//     let tempErrors = {};
//     tempErrors.signInEmail = formData.signInEmail ? '' : 'Email is required';
//     tempErrors.signInPassword = formData.signInPassword ? '' : 'Password is required';
//     setErrors(tempErrors);

//     return Object.values(tempErrors).every((error) => error === '');
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       console.log('Form submitted', formData);
//       // Perform the login logic here
//     }
//   };

//   return (
//     <main style={styles.main}>
//       <section className="container d-flex flex-column vh-100">
//         <div className="row align-items-center justify-content-center g-0 h-lg-100 py-8">
//           <div className="col-lg-5 col-md-8 py-8 py-xl-0">
//             <div className="card shadow" style={styles.card}>
//               <div className="card-body p-6 d-flex flex-column gap-4">
//                 <div>
//                   <a href="../index.html">
//                     <img src="../assets/images/brand/logo/logo-icon.svg" className="mb-4" alt="logo-icon" />
//                   </a>
//                   <div className="d-flex flex-column gap-1">
//                     <h1 className="mb-0 fw-bold">Sign in</h1>
//                     <span>
//                       Don’t have an account? <a href="sign-up.html">Sign up</a>
//                     </span>
//                   </div>
//                 </div>
//                 <form className="needs-validation" onSubmit={handleSubmit} noValidate>
//                   <div className="mb-3">
//                     <label htmlFor="signInEmail" className="form-label">Username or email</label>
//                     <input
//                       type="email"
//                       id="signInEmail"
//                       className={`form-control ${errors.signInEmail ? 'is-invalid' : ''}`}
//                       name="signInEmail"
//                       value={formData.signInEmail}
//                       onChange={handleChange}
//                       placeholder="Email address here"
//                       required
//                     />
//                     {errors.signInEmail && <div className="invalid-feedback">{errors.signInEmail}</div>}
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="signInPassword" className="form-label">Password</label>
//                     <input
//                       type="password"
//                       id="signInPassword"
//                       className={`form-control ${errors.signInPassword ? 'is-invalid' : ''}`}
//                       name="signInPassword"
//                       value={formData.signInPassword}
//                       onChange={handleChange}
//                       placeholder="**************"
//                       required
//                     />
//                     {errors.signInPassword && <div className="invalid-feedback">{errors.signInPassword}</div>}
//                   </div>
//                   <div className="d-lg-flex justify-content-between align-items-center mb-4">
//                     <div className="form-check">
//                       <input
//                         type="checkbox"
//                         className="form-check-input"
//                         id="rememberme"
//                         name="rememberMe"
//                         checked={formData.rememberMe}
//                         onChange={handleChange}
//                       />
//                       <label className="form-check-label" htmlFor="rememberme">Remember me</label>
//                     </div>
//                     <div>
//                       <a href="forget-password.html">Forgot your password?</a>
//                     </div>
//                   </div>
//                   <div className="d-grid">
//                     <button type="submit" className="btn btn-primary">Sign in</button>
//                   </div>
//                   <hr className="my-4" />
//                   <div className="mt-4 text-center">
//                     <a href="#" className="btn-social btn-social-outline btn-facebook">Facebook</a>
//                     <a href="#" className="btn-social btn-social-outline btn-twitter">Twitter</a>
//                     <a href="#" className="btn-social btn-social-outline btn-linkedin">LinkedIn</a>
//                     <a href="#" className="btn-social btn-social-outline btn-github">GitHub</a>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// // CSS-in-JS for styling
// const styles = {
//   main: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     minHeight: '100vh',
//   },
//   card: {
//     borderRadius: '15px',
//   },
// };

// // Media queries (CSS can be moved to a separate file if needed)
// const mediaQueries = `
//   @media (max-width: 576px) {
//     .container {
//       padding: 20px;
//     }
//   }

//   @media (min-width: 577px) and (max-width: 768px) {
//     .container {
//       padding: 40px;
//     }
//   }

//   @media (min-width: 769px) {
//     .container {
//       padding: 60px;
//     }
//   }
// `;

// // Add media query styles to document head
// const styleSheet = document.createElement('style');
// styleSheet.type = 'text/css';
// styleSheet.innerText = mediaQueries;
// document.head.appendChild(styleSheet);

// export default Login;
