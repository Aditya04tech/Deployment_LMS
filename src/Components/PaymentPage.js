import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../Components/Services/axiosInterceptor";


const PaymentPage = ({ cart, onAdd, onRemove, onClearCart, setCart }) => {
  const [qrCode, setQrCode] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
   const [totalPrice, setTotalPrice] = useState(0);


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

  const fetchQRCode = async () => {
    try {
      const response = await fetch("http://65.0.124.32:9000/generate-qr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user: "PSK", amount: 1000 }),
      });

      const data = await response.json();
      setQrCode(data.qrCode);
    } catch (error) {
      console.error("Error generating QR code:", error);
    }
  };

  const handleBuy = async () => {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("userEmail");

    if (!token) {
      alert("Please log in or sign up to complete your purchase.");
      navigate("/signin");
      return;
    }

    if (!email) {
      alert("User email not found. Please log in again.");
      return;
    }

    try {
      const res = await axios.post("/api/auth/send-email", { email });

      if (res.status === 200) {
        alert("Product purchase confirmation email sent.");
        navigate("/success"); // Redirect to success page
      } else {
        alert("Purchase successful, but email could not be sent.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert(
        `An error occurred while sending the confirmation email. ${
          error.response?.data?.message || "Please try again later."
        }`
      );
    }
  };

  useEffect(() => {
    fetchQRCode(); // Generate QR code when the component loads
  }, []);

  const buttonStyle = {
    backgroundColor: "#00e676",
    color: "#fff",
    border: "none",
    padding: "10px 10px",
    fontWeight: "bold",
    borderRadius: "15px",
    cursor: "pointer",
    boxShadow: isHovered
      ? "0px 6px 14px rgba(0, 0, 0, 0.3)"
      : "0px 4px 8px rgba(0, 0, 0, 0.2)",

    transform: isHovered ? "scale(1.05)" : "scale(1)",
    transition: "transform 0.2s, box-shadow 0.2s",
    marginBottom: "20px",
  };

  const [selectedUPI, setSelectedUPI] = useState("");
  const [selectedPayment, setSelectedPayment] = useState("");
  const [selectedBank, setSelectedBank] = useState("");


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
    <div className="flex justify-center  items-center min-h-screen p-4 " style={{ background: "linear-gradient(to right, #1e3c72, #2a5298)" }}>
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-4">
        <div className="flex">
          <div className="w-3/4 pr-4"> 
            <div className="bg-blue-600 text-white p-4 rounded-t-lg">
              <h2 className="text-lg text-white font-bold">PAYMENT OPTIONS</h2>
            </div>
            <div className="bg-yellow-100 p-4">
              <p>
                Complete payment in{" "}
                <span className="font-bold">00 : 02 : 53</span>
              </p>
            </div>
            <div >
              <div className=" rounded-lg mb-4">
                <div className="flex items-center mb-2">
                  <input
                    type="radio"
                    name="payment"
                    className="mr-2"
                    defaultChecked
                  />
                  <img
                    src="assets/images/upi icon.png"
                    alt="Google Pay logo"
                    className="mr-2"
                    style={{ width: "48px", height: "48px" }}
                  />
                </div>
                <div className="ml-6">
                  <p className="font-bold">Choose an option</p>
                  <div className="flex items-center mb-2">
                    <input
                      type="radio"
                      name="upi"
                      className="mr-2"
                      onChange={() => setSelectedUPI("PhonePe")}
                    />
                    <span>PhonePe</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <input
                      type="radio"
                      name="upi"
                      className="mr-2"
                      onChange={() => setSelectedUPI("Your UPI ID")}
                    />
                    <span>Your UPI ID</span>
                  </div>
                  {selectedUPI === "Your UPI ID" && (
                    <div className="ml-6">
                      <input
                        type="text"
                        placeholder="Enter your UPI ID"
                        className="border p-2 rounded w-full"
                        value={selectedUPI} // Add this to display the selected UPI ID
                        onChange={(e) => setSelectedUPI(e.target.value)} // Add this to update the selectedUPI state
                      />
                      {selectedUPI !== "" && (
                        <button className="pay-button bg-red-600 text-black p-2 rounded w-full ">
                          Pay
                        </button>
                      )}
                    </div>
                  )}
                  <p className="text-gray-500">Pay by any UPI app</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                <input
                  type="radio"
                  name="payment"
                  className="mr-2"
                  onChange={() =>
                    setSelectedPayment("Credit / Debit / ATM Card")
                  }
                />
                <span>Credit / Debit / ATM Card</span>
              </div>
              {selectedPayment === "Credit / Debit / ATM Card" && (
                <div className="ml-6 mb-4">
                  <input
                    type="text"
                    placeholder="Card Number"
                    className="border p-2 rounded w-full mb-2"
                  />
                  <div className="flex mb-2">
                    <input
                      type="text"
                      placeholder="Valid Thru (MM/YY)"
                      className="border p-2 rounded w-1/2 mr-2"
                    />
                    <input
                      type="text"
                      placeholder="CVV"
                      className="border p-2 rounded w-1/2"
                    />
                  </div>
                  <button className="bg-blue-600 text-black p-2 rounded w-full">
                    Pay
                  </button>
                </div>
              )}
               {/* QR Code Payment Options */}
               <div className="flex items-center mb-4">
                <input
                  type="radio"
                  name="payment"
                  className="mr-2"
                  onChange={() => setSelectedPayment("QR Code")}
                />
                <span>QR Code</span>
              </div>
              {selectedPayment === "QR Code" && (
                <div>
                  <h5
                    style={{
                      fontWeight: "bold",
                      marginBottom: "20px",
                      textShadow: "2px 2px 6px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    Scan the QR Code to Pay
                  </h5>
                  {qrCode ? (
                    <>
                      <img
                        style={{
                          width: "150px",
                          height: "150px",
                          margin: "20px 0",
                          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
                        }}
                        src={qrCode}
                        alt="QR Code"
                      />
                      <br />
                      <button
                        style={buttonStyle}
                        onClick={handleBuy} // Trigger handleBuy function
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                      >
                        Buy Now
                      </button>
                    </>
                  ) : (
                    <p style={{ fontSize: "1.2rem", fontStyle: "italic" }}>
                      Loading QR Code...
                    </p>
                  )}
                </div>
              )}

              {/* Other Payment Options */}

              <div className="flex items-center mb-4">
                <input
                  type="radio"
                  name="payment"
                  className="mr-2"
                  onChange={() => setSelectedPayment("Net Banking")}
                />
                <span>Net Banking</span>
              </div>
              {selectedPayment === "Net Banking" && (
                <div className="ml-6 mb-4">
                  <div className="flex items-center mb-2">
                    <input
                      type="radio"
                      name="bank"
                      className="mr-2"
                      onChange={() => setSelectedBank("HDFC Bank")}
                    />
                    <span>HDFC Bank</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <input
                      type="radio"
                      name="bank"
                      className="mr-2"
                      onChange={() => setSelectedBank("ICICI Bank")}
                    />
                    <span>ICICI Bank</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <input
                      type="radio"
                      name="bank"
                      className="mr-2"
                      onChange={() => setSelectedBank("State Bank of India")}
                    />
                    <span>State Bank of India</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <input
                      type="radio"
                      name="bank"
                      className="mr-2"
                      onChange={() => setSelectedBank("Axis Bank")}
                    />
                    <span>Axis Bank</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <input
                      type="radio"
                      name="bank"
                      className="mr-2"
                      onChange={() => setSelectedBank("Other Banks")}
                    />
                    <span>Other Banks</span>
                  </div>
                  {selectedBank === "Other Banks" && (
                    <div className="ml-6">
                      <select className="border p-2 rounded w-full">
                        <option value="">Select Bank</option>
                        <option value="Bank 1">Bank 1</option>
                        <option value="Bank 2">Bank 2</option>
                        <option value="Bank 3">Bank 3</option>
                      </select>
                    </div>
                  )}
                </div>
              )}

              <div className="flex items-center mb-4">
                <input
                  type="radio"
                  name="payment"
                  className="mr-2"
                  onChange={() => setSelectedPayment("Cash on Delivery")}
                />
                <span>Cash on Delivery</span>
              </div>
              {selectedPayment === "Cash on Delivery" && (
                <div className="ml-6 mb-4">
                  <div className="mb-2">
                    <span>Enter the number shown below:</span>
                    <div className="flex items-center mt-2">
                      <span className="border p-2 rounded bg-gray-200">
                        1234
                      </span>
                      <input
                        type="text"
                        placeholder="Enter Captcha"
                        className="border p-2 rounded w-full ml-2"
                      />
                    </div>
                  </div>
                  <button className="bg-blue-600 text-white p-2 rounded w-full">
                    Confirm Order
                  </button>
                </div>
              )}
              <div className="flex items-center mb-4">
                <input
                  type="radio"
                  name="payment"
                  className="mr-2"
                  onChange={() => setSelectedPayment("EMI (Easy Installments)")}
                />
                <span>EMI (Easy Installments)</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-plus mr-2"></i>
                <span>Add Gift Card</span>
              </div>
            </div>
          </div>
          <div className="w-1/4 bg-gray-100 p-4 rounded-lg">
            <div className="bg-white p-4 rounded-lg shadow-md mb-4">
              <h5 className="font-bold mb-2">PRICE DETAILS</h5>
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
                    <span className="total-payable" >
                      ₹{payableAmount.toFixed(2)}
                    </span>
                  </div>
                
                </div>
              </div>

              {/* <button
                        style={buttonStyle}
                        onClick={handleBuy} // Trigger handleBuy function
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                      >
                        Buy Now
                      </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;