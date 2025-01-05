import React, { useState, useEffect } from "react";
import axios from "../Components/Services/axiosInterceptor";
import { Link, useNavigate } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import Coursedesign from "./Coursedesign";

const Cart = ({ cart, onAdd, onRemove, onClearCart, setCart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();

  const GST_PERCENT = 0.03; // 3% GST
  const DISCOUNT_PERCENT = 0.2; // 10% Discount

  const [gst, setGST] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [payableAmount, setPayableAmount] = useState(0);

  useEffect(() => {
    const price = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotalPrice(price);

    const gstAmount = price * GST_PERCENT;
    const discountAmount = price * DISCOUNT_PERCENT;
    const finalAmount = price + gstAmount - discountAmount;

    setGST(gstAmount);
    setDiscount(discountAmount);
    setPayableAmount(finalAmount);

    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    setCartCount(cart.reduce((count, item) => count + item.quantity, 0));
  }, [cart]);

  const styles = {
    cardContainer: {
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      borderRadius: "10px",
      overflow: "hidden",
      marginBottom: "20px",
      backgroundColor: "#fff",
      padding: "20px",
      border: "1px solid #ddd",
    },
    tableRow: {
      borderBottom: "1px solid #ddd",
    },
    button: {
      marginRight: "5px",
      fontSize: "14px",
    },
    cardTotal: {
      backgroundColor: "#f8f9fa",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    totalItem: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "10px",
      fontSize: "16px",
    },
    totalPayable: {
      fontSize: "18px",
      fontWeight: "bold",
      color: "#28a745",
    },
  };

  return (
    <>
      <Nav cartCount={cartCount} />
      <div>
        <section className="py-0" style={{ marginTop: "150px" }}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="bg-lights p-4 text-center rounded-3">
                  <h1 className="m-0">My Cart</h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-5">
          <div className="container">
            <div className="row g-4 g-sm-5">
              <div className="col-lg-8 mb-4 mb-sm-0">
                <div style={styles.cardContainer}>
                  {cart.length === 0 ? (
                    <div>
                      <div className="alert alert-danger py-3">
                        Your cart is empty! Add courses.
                      </div>
                      <button
                        onClick={() => navigate("/courses")}
                        className="btn btn-lg btn-success"
                      >
                        Add More Products
                      </button>
                    </div>
                  ) : (
                    <div className="table-responsive">
                      <table className="table align-middle">
                        <tbody>
                          {cart.map((item) => (
                            <tr key={item.id} style={styles.tableRow}>
                              <td>
                                <div className="d-lg-flex align-items-center">
                                  <img
                                    src={item.thumbnail}
                                    alt={item.name}
                                    className="img-fluid rounded"
                                    style={{ width: "80px", height: "80px" }}
                                  />
                                  <h6 className="ms-lg-3">{item.name}</h6>
                                </div>
                              </td>
                              <td className="text-center">
                                ₹{item.price} x {item.quantity}
                              </td>
                              <td>
                                <button
                                  onClick={() => onAdd(item)}
                                  className="btn btn-sm btn-success"
                                  style={styles.button}
                                >
                                  +
                                </button>
                                <button
                                  onClick={() => onRemove(item)}
                                  className="btn btn-sm btn-warning"
                                  style={styles.button}
                                >
                                  -
                                </button>
                                <button
                                  onClick={() => onRemove(item, true)}
                                  className="btn btn-sm btn-danger"
                                  style={styles.button}
                                >
                                  x
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <button
                        className="btn btn-danger mt-3"
                        onClick={onClearCart}
                      >
                        Clear Cart
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div className="col-lg-4">
                <div style={styles.cardTotal}>
                  <h4 className="mb-3">Cart Total</h4>
                  <div style={styles.totalItem}>
                    <span>Original Price</span>
                    <strong>₹{totalPrice.toFixed(2)}</strong>
                  </div>
                  <div style={styles.totalItem}>
                    <span>Discount (20%)</span>
                    <strong>- ₹{discount.toFixed(2)}</strong>
                  </div>
                  <div style={styles.totalItem}>
                    <span>GST (3%)</span>
                    <strong>₹{gst.toFixed(2)}</strong>
                  </div>
                 
                  <div style={styles.totalItem}>
                    <span className="total-payable" style={styles.totalPayable}>
                      Total Payable
                    </span>
                    <span className="total-payable" style={styles.totalPayable}>
                      ₹{payableAmount.toFixed(2)}
                    </span>
                  </div>
                  <button
                        // onClick={handleBuy}
                        onClick={() => navigate("/payment")}
                        className="btn btn-lg btn-success"
                      >
                        Continue Purchase
                      </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Coursedesign/>
      <Footer />
    </>
  );
};

export default Cart;