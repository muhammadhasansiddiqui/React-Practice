import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../database/firebase';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';
import '../Signup.css';

function Signup() {
  const [psw, setPsw] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  function handleSubmit() {
    createUserWithEmailAndPassword(auth, email, psw)
      .then((userCredential) => {
        const user = userCredential.user;
        const name = email.split('@')[0];
        Swal.fire({
          title: 'Success!',
          text: `You have signed up successfully, welcome ${name}!`,
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
          confirmButtonText: 'OK'
          ,
          customClass: {
            popup: 'my-swal-popup',
            title: 'my-swal-title',
            confirmButton: 'my-swal-confirm-button'
          }
        });
      });
  }

  return (
    <div  className="signup-container">
      <div className='main'>
      <h1>Sign Up</h1>


      <input
        onChange={(event) => setEmail(event.target.value)}
        type="email"
        placeholder="E-mail"
      />
      <br />
      <input
        onChange={(event) => setPsw(event.target.value)}
        type="password"
        placeholder="Password"
        required
      />
      <br />
      < br/>
      <button onClick={handleSubmit}>Signup</button>
      <p>Already have an account? <Link to="/login">Sign Up</Link></p>
      </div>
    </div>
  );
}

export default Signup;
