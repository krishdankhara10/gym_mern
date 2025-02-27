import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Header from './Header';
import login_bg from '../Css/wp2563942-body-building-wallpaper.jpg';

function Register() {
  const [isLogin, setIsLogin] = useState(true);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const validationErrors = {};
    let isValid = true;

    if (!email.trim()) {
      validationErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = 'Invalid email format';
      isValid = false;
    }

    if (!password.trim()) {
      validationErrors.password = 'Password is required';
      isValid = false;
    }

    if (!isLogin && !userName.trim()) {
      validationErrors.userName = 'Username is required for registration';
      isValid = false;
    }

    setErrors(validationErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fix the errors in the form!',
      });
      return;
    }

    const endpoint = isLogin ? '/login' : '/insert';
    const payload = isLogin
      ? { email, password }
      : { name: userName, email, password };

    try {
      const response = await axios.post(`http://localhost:5000/api${endpoint}`, payload);
      console.log(response.data);
      sessionStorage.setItem('userEmail', email);
      setUserName('');
      setEmail('');
      setPassword('');
      navigate('/');
      Swal.fire({
        icon: 'success',
        title: isLogin ? 'Login Successful' : 'Registration Successful',
        text: `Welcome ${isLogin ? 'back' : 'to our platform'}!`,
      });
    } catch (error) {
      if (error.response) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.response.data.message || 'Something went wrong!',
        });
      } else if (error.request) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No response from server. Please try again later.',
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.message || 'An error occurred!',
        });
      }
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setErrors({});
  };

  return (
    <div>
      <Header />
      <div className="login_bg">
        <img src={login_bg} alt="Background" />
        <div className="Reg_card" style={{ height: Object.keys(errors).length > 0 ? 550 : 450 }}>
          <div className="card_title">
            <h1>{isLogin ? 'Welcome Back' : 'Create Account'}</h1>
          </div>
          <div className="form">
            <form onSubmit={handleSubmit}>
              {!isLogin && (
                <>
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                  {errors.userName && <span className="error">{errors.userName}</span>}
                </>
              )}
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <span className="error">{errors.email}</span>}
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <span className="error">{errors.password}</span>}

              <p className="account">
                {isLogin ? 'Create an account?' : 'Already have an account?'}{' '}
                <span onClick={toggleForm} style={{ cursor: 'pointer' }} className="text-primary text-decoration-underline">
                  {isLogin ? 'Sign Up' : 'Login'}
                </span>
              </p>

              <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
            </form>
          </div>
          {errors.terms && <span className="error">{errors.terms}</span>}
        </div>
      </div>
    </div>
  );
}

export default Register;
