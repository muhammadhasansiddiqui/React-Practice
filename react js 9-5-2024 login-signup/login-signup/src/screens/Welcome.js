import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from "../database/firebase";
import '../Welcome.css';

function Welcome() {
  const location = useLocation();
  const { username } = location.state || {};
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth).then(() => {
      navigate('/login');
    }).catch((error) => {
      console.error("Sign out error:", error);
      // Optionally show an error message to the user
    });
  };

  return (
    <div className="welcome-container">
      <h1 className="welcome-heading">Welcome, {username}!</h1>
      <button
        type="button"
        style={{
          padding: "10px",
          width: "100px",
        }}
        onClick={handleLogout}
      >
        Log out
      </button>
    </div>
  );
}

export default Welcome;
