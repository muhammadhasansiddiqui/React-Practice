
function Signup() {
  return (
    <div style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column"
        }}>
      <input type="text" placeholder="Enter your name" required />
      <br />
      <input
        type="email"
        placeholder="Enter your email"
        required
      />
      <br />
      <input type="password" placeholder="Enter your password" required />
      <br />
      <button type="submit">Signup</button>
    </div>
  );
}

export default Signup;
