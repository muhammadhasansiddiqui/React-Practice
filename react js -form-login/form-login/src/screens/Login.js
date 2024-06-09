import React from 'react';

function Login() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <input
        style={{
          marginBottom: "10px",
          padding: "10px",
          width: "200px",
        }}
        type="email"
        placeholder="Enter your email"
        required
      />
      <input
        style={{
          marginBottom: "10px",
          padding: "10px",
          width: "200px",
        }}
        type="password"
        placeholder="Enter your password"
        required
      />
      <button
        type="submit"
        style={{
          padding: "10px",
          width: "100px",
        }}
      >
        Login
      </button>
   
    </div>
  );
}

export default Login;
