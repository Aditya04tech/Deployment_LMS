import { useState, useEffect } from 'react';
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import text from "../Components/Css/text.module.css";
import Nav from './Nav';
import Footer from './Footer';

const CourseList1 = ({ onAddToCart,handlePurchase }) => {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  // const navigate = useNavigate();
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
      localStorage.removeItem("cart");
    }
  }, []);

  useEffect(() => {
    // Update cart count whenever the cart state changes
    setCartCount(cart.reduce((count, item) => count + item.quantity, 0));
  }, [cart]);

  const handleAddToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    let updatedCart;
  
    if (existingItem) {
      updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }
  
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Sync with localStorage
  };
  

  const handleAdd = (product) => {
    setCart(
      cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleRemove = (product, isDelete = false) => {
    if (isDelete) {
      setCart(cart.filter((item) => item.id !== product.id));
    } else {
      const updatedCart = cart.map((item) =>
        item.id === product.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      setCart(updatedCart);
    }
  };

  const handleClearCart = () => {
    setCart([]);
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    setCart([]);
    window.location.reload();
    navigate("/");
  };
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [playingVideo, setPlayingVideo] = useState(null);
  const [purchasedCourses, setPurchasedCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isAllPurchased, setIsAllPurchased] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://65.0.124.32:3000/api/videos');
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        } else {
          console.log('Failed to fetch videos');
        }
      } catch (error) {
        console.log('Error fetching videos:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // const handleAddToCart = (product) => {
  //   if (onAddToCart) {
  //     onAddToCart(product);
  //   } else {
  //     console.log(`Added ${product.title} to cart`);
  //   }
  // };

  const togglePlay = (productId) => {
    setPlayingVideo((prev) => (prev === productId ? null : productId));
  };

  return (
    <div>
       <Nav cartCount={cartCount} handleLogout={handleLogout} />
   <br/>
   <br/>
   <br/>
   <br/>
    <div className={text.container}>
      <h2 className={text.featuredTitle}>Featured Videos</h2>
      {isLoading ? (
        <p>Loading videos...</p>
      ) : (
        <div className={text.grid}>
          {products.map((product) => (
            <div key={product.id} className={text.card}>
              <div className={text.thumbnailContainer} onClick={() => togglePlay(product.id)}>
                {playingVideo !== product.id ? (
                  <div className={text.overlayContainer}>
                    <video
                      src={product.videoUrl}
                      className={text.thumbnail}
                      preload="metadata"
                      muted
                      loop
                    />
                    {/* Play Icon Overlay */}
                    <div className={text.playIcon}>▶</div>
                  </div>
                ) : (
                  <video
                    src={product.videoUrl}
                    className={text.video}
                    controls
                    autoPlay
                  />
                )}
              </div>
              <div className={text.details}>
                <h3>{product.title}</h3>
                <p className={text.price}>₹{product.price}</p>
                <button className={text.cartButton} onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal Section */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Buy Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to buy this course?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handlePurchase}>
            Buy Now
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    <Footer/>
    </div>
  );
};

export default CourseList1;
