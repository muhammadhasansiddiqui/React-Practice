import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../database/firebase';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';
import '../Login.css';

function Login() {
  const [psw, setPsw] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  function handleLogin() {
    signInWithEmailAndPassword(auth, email, psw)
      .then((userCredential) => {
        const user = userCredential.user;
        const name = email.split('@')[0];
        Swal.fire({
          title: 'Success!',
          text: `Welcome back, ${name}!`,
          icon: 'success',
          confirmButtonText: 'OK'
          ,
          customClass: {
            popup: 'my-swal-popup',
            title: 'my-swal-title',
            confirmButton: 'my-swal-confirm-button'
          }

        }).then(() => {
          navigate('/welcome', { state: { username: name } });
        });
      })
      .catch((error) => {
        Swal.fire({
          title: 'Error!',
          text: error.message,
          icon: 'error',
          confirmButtonText: 'OK',
          customClass: {
            popup: 'my-swal-popup',
            title: 'my-swal-title',
            confirmButton: 'my-swal-confirm-button'
          }
        });
      });
  }

  return (
    <div 
     className="login-container">
<h1>Log In</h1>

      <input
        onChange={(event) => setEmail(event.target.value)}
        type="email"
        placeholder="E-mail"
        required
      />
      <br />
      <input
        onChange={(event) => setPsw(event.target.value)}
        type="password"
        placeholder="Password"
        required
      />
      <br />
      <button onClick={handleLogin}>Login</button>
      <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
    </div>
  );
}

export default Login;
