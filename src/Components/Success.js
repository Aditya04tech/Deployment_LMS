import React from "react";

const Success = () => {
  return (
    <div style={styles.container}>
        <img
            src="./assets/images/LMS.jpg"
            alt="LMS"
            className="logo"
            style={{
                marginTop:'-50px',
                marginBottom:'20px',
              width: '250px',    // Set desired width
              height: 'auto',    // Maintain aspect ratio
              borderRadius: '10px', // Optional: Rounded edges
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Optional: Add shadow
            }}
          />
      <div style={styles.box}>
        <h3 style={styles.title}>🎉 Purchase Successful! 🎉</h3>
        <p style={styles.message}>Thank you for your purchase from LMS by PSK Technologies. Have a great day!</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #1e3a8a, #1e40af)", // Dark blue gradient
    fontFamily: "'Poppins', sans-serif",
    color: "#ffffff",
  },
  box: {
    backgroundColor: "#ffffff",
    padding: "30px 40px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
    color: "#333333",
    textAlign: "center",
    maxWidth: "500px",
    width: "60%",
  },
  title: {
    fontWeight: "bold",
    marginBottom: "20px",
  },
  message: {
    lineHeight: "1.8",
  },
};

export default Success;
