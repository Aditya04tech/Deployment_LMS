import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead

import Nav  from './Nav'
import Footer from './Footer';
import ActionBox from './ActionBox';

const FrontEndCourseList = ({ onAddToCart,cartCount,handleLogout }) => {
  const [products, setProducts] = useState([]); 
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    // Simulate fetching product (course) data
    setProducts([
      { id: 1, name: "Computer Hardware", image: "assets/images/courses/4by3/HW.png"  },
      { id: 2, name: "Computer Networking" },
      { id: 3, name: "Graphic Designing" },
      { id: 4, name: "Digitial Marketing" },
      { id: 5, name: "Wordpress" },
      { id: 5, name: "(AWS) Amazon Web Services" },
       ]);
  }, []);

  const handleAddToCart = (product) => {
    onAddToCart(product); // Add to cart functionality
  };

  const handleNavigateToCourseList = () => {
    navigate('/productdetals'); // Navigate to course list using navigate
  };
  

  const styles = {
    maincard: {
      backgroundColor: '#fff', // White background
      borderRadius: '10px', // Rounded corners
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Soft shadow
      padding: '20px', // Inner padding
      transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth hover effects
    },
    
    // Hover effect (applied via JS event or CSS-in-JS solution)
    maincardHover: {
      transform: 'scale(1.05)', // Slightly enlarge card
      boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.2)', // Stronger shadow on hover
    },
  
    cardHeader: {
      fontSize: '1.5rem', // Larger font size for header
  color: '#333', // Dark text color
  marginBottom: '15px', // Space below header
  pointerEvents: 'auto', // Allow pointer events (default behavior)
  cursor: 'pointer', // Change cursor to a finger when hovering
    },
  
    cardText: {
      fontSize: '1rem', // Standard text size
      color: '#555', // Slightly lighter text color
      lineHeight: '1.5', // Line height for readability
    },
  
    button: {
      backgroundColor: '#12aaeb', // Green background
      color: 'white', // White text
      padding: '10px 20px', // Padding around button
      textAlign: 'center', // Centered text
      borderRadius: '5px', // Rounded corners
      textDecoration: 'none', // Remove underline
      display: 'inline-block', // Allow margin and padding
      transition: 'background-color 0.3s ease', // Smooth color transition
    },
  
    buttonHover: {
      backgroundColor: '#45a049', // Darker green on hover
    },
    hr1:{
      border: 'none',
      height: '3px',
      backgroundColor: '#3498db',
      margin: '20px 0',
      width: '100%',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
      borderRadius: '5px',
      
    },
    pimage:{
      height:'100px'
    }
  };
  return (
   <>
   <Nav cartCount={cartCount} handleLogout={handleLogout} />
    <div>
      <br /><br /><br />
      <section className="bg-light position-relative">
        <div className="container  position-relative">
          <div className="row">
            <div className="col-12 border">
              <div className="row align-items-center">
                <div className="col-6 col-md-3 text-center order-1">
                  <img src="assets/images/element/cat1.png" alt="Category" />
                </div>
                <div className="col-md-6 px-md-5 text-center position-relative order-md-2 mb-5 mb-md-0">
                  <h1 className="mb-3">What do you want to learn?</h1>
                  <p className="mb-3">Grow your skill with the most reliable online courses and certifications</p>
                  <form className="bg-body rounded p-2">
                    <input className="form-control border-0 me-1" type="search" placeholder="Search course " />
                    <button type="button" className="btn btn-dark rounded">Search</button>
                  </form>
                </div>
                <div className="col-6 col-md-3 text-center order-3">
                  <img src="assets/images/element/cat2.png" alt="Cat" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Course Listing */}
<section>
  <div className="container ">
    <div className="row g-4"> {/* Use row class here */}
      {products.map((product) => (
        <div key={product.id} className="col-6 "> {/* Adjust to col-6 */}
          <div className="card card-body border text-center position-relative btn-transition p-4"
          style={styles.maincard} 
          >
            
            <div className="col-md-12 ">
            {/* <img 
                      src={product.image} 
                      alt={product.name} 
                      className="img-border" 
                      style={styles.pimage} // Set cursor to pointer for image
                      onClick={handleNavigateToCourseList} // Redirect on image click
                    /> */}
            <h5 
              className="mb-2" 
              style={styles.cardHeader} // Set cursor to pointer for heading
              onClick={handleNavigateToCourseList} // Redirect on heading click
            >
              {product.name}
            </h5>
          <hr style={styles.hr1}/>
            <div className="card rounded mt-5 overflow-hidden shadow">
        <div className="row g-0">
          {/* Image */}
          <div className="col-md-4">
            <img
              src="assets/images/courses/4by3/01.jpg"
              alt="card image"
              className="img-fluid"
            />
          </div>

          {/* Card body */}
          <div className="col-md-8">
            <div className="card-body">
              {/* Title */}
              <div className="d-flex justify-content-between mb-2">
                <h5 className="card-title mb-0">
                  <a href="#">
                    The Complete Digital Marketing Course - 12 Courses in 1
                  </a>
                </h5>
                {/* Wishlist icon */}
                <a href="#">
                  <i className="fas fa-heart text-danger"></i>
                </a>
              </div>
              {/* Content */}
              {/* Info */}
              <ul className="list-inline mb-1">
                <li className="list-inline-item h6 fw-light mb-1 mb-sm-0">
                  <i className="far fa-clock text-danger me-2"></i>6h 56m
                </li>
                <li className="list-inline-item h6 fw-light mb-1 mb-sm-0">
                  <i className="fas fa-table text-orange me-2"></i>82 lectures
                </li>
                <li className="list-inline-item h6 fw-light">
                  <i className="fas fa-signal text-success me-2"></i>Beginner
                </li>
              </ul>
              {/* Rating */}
              <ul className="list-inline mb-0">
                <li className="list-inline-item me-0 small">
                  <i className="fas fa-star text-warning"></i>
                </li>
                <li className="list-inline-item me-0 small">
                  <i className="fas fa-star text-warning"></i>
                </li>
                <li className="list-inline-item me-0 small">
                  <i className="fas fa-star text-warning"></i>
                </li>
                <li className="list-inline-item me-0 small">
                  <i className="fas fa-star text-warning"></i>
                </li>
                <li className="list-inline-item me-0 small">
                  <i className="fas fa-star-half-alt text-warning"></i>
                </li>
                <li className="list-inline-item ms-2 h6 fw-light">4.5/5.0</li>
              </ul>
            </div>
          </div>
        </div>
      </div>




      <div className="card rounded mt-3 overflow-hidden shadow">
        <div className="row g-0">
          {/* Image */}
          <div className="col-md-4">
            <img
              src="assets/images/courses/4by3/01.jpg"
              alt="card image"
              className="img-fluid"
            />
          </div>

          {/* Card body */}
          <div className="col-md-8">
            <div className="card-body">
              {/* Title */}
              <div className="d-flex justify-content-between mb-2">
                <h5 className="card-title mb-0">
                  <a href="#">
                    The Complete Digital Marketing Course - 12 Courses in 1
                  </a>
                </h5>
                {/* Wishlist icon */}
                <a href="#">
                  <i className="fas fa-heart text-danger"></i>
                </a>
              </div>
              {/* Content */}
              {/* Info */}
              <ul className="list-inline mb-1">
                <li className="list-inline-item h6 fw-light mb-1 mb-sm-0">
                  <i className="far fa-clock text-danger me-2"></i>6h 56m
                </li>
                <li className="list-inline-item h6 fw-light mb-1 mb-sm-0">
                  <i className="fas fa-table text-orange me-2"></i>82 lectures
                </li>
                <li className="list-inline-item h6 fw-light">
                  <i className="fas fa-signal text-success me-2"></i>Beginner
                </li>
              </ul>
              {/* Rating */}
              <ul className="list-inline mb-0">
                <li className="list-inline-item me-0 small">
                  <i className="fas fa-star text-warning"></i>
                </li>
                <li className="list-inline-item me-0 small">
                  <i className="fas fa-star text-warning"></i>
                </li>
                <li className="list-inline-item me-0 small">
                  <i className="fas fa-star text-warning"></i>
                </li>
                <li className="list-inline-item me-0 small">
                  <i className="fas fa-star text-warning"></i>
                </li>
                <li className="list-inline-item me-0 small">
                  <i className="fas fa-star-half-alt text-warning"></i>
                </li>
                <li className="list-inline-item ms-2 h6 fw-light">4.5/5.0</li>
              </ul>
            </div>
          </div>
        </div>
      </div>




      <div className="card rounded mt-3 overflow-hidden shadow">
        <div className="row g-0">
          {/* Image */}
          <div className="col-md-4">
            <img
              src="assets/images/courses/4by3/01.jpg"
              alt="card image"
              className="img-fluid"
            />
          </div>

          {/* Card body */}
          <div className="col-md-8">
            <div className="card-body">
              {/* Title */}
              <div className="d-flex justify-content-between mb-2">
                <h5 className="card-title mb-0">
                  <a href="#">
                    The Complete Digital Marketing Course - 12 Courses in 1
                  </a>
                </h5>
                {/* Wishlist icon */}
                <a href="#">
                  <i className="fas fa-heart text-danger"></i>
                </a>
              </div>
              {/* Content */}
              {/* Info */}
              <ul className="list-inline mb-1">
                <li className="list-inline-item h6 fw-light mb-1 mb-sm-0">
                  <i className="far fa-clock text-danger me-2"></i>6h 56m
                </li>
                <li className="list-inline-item h6 fw-light mb-1 mb-sm-0">
                  <i className="fas fa-table text-orange me-2"></i>82 lectures
                </li>
                <li className="list-inline-item h6 fw-light">
                  <i className="fas fa-signal text-success me-2"></i>Beginner
                </li>
              </ul>
              {/* Rating */}
              <ul className="list-inline mb-0">
                <li className="list-inline-item me-0 small">
                  <i className="fas fa-star text-warning"></i>
                </li>
                <li className="list-inline-item me-0 small">
                  <i className="fas fa-star text-warning"></i>
                </li>
                <li className="list-inline-item me-0 small">
                  <i className="fas fa-star text-warning"></i>
                </li>
                <li className="list-inline-item me-0 small">
                  <i className="fas fa-star text-warning"></i>
                </li>
                <li className="list-inline-item me-0 small">
                  <i className="fas fa-star-half-alt text-warning"></i>
                </li>
                <li className="list-inline-item ms-2 h6 fw-light">4.5/5.0</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

              
              
            </div>
            
   
  

           
            <button 
              className="btn btn-primary mt-3" 
              onClick={() => handleAddToCart(product)}
              style={styles.button} // Set cursor to pointer for button
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

    </div>
    <ActionBox/>
   
    <Footer/>
   </>
  );
};

export default FrontEndCourseList;