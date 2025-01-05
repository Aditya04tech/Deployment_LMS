import React from "react";
import GoogleLogin from "../Components/Auth/GoogleLogin";

const Login = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Login</h1>
      <GoogleLogin />
    </div>
  );
};

export default Login;
