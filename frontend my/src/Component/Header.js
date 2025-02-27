import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate
import {
  FaSquareFacebook,
  FaSquareXTwitter,
  FaSquareWhatsapp,
  FaSquareInstagram,
  FaLinkedin,
} from 'react-icons/fa6';
import { IoIosArrowDown } from 'react-icons/io';
import Swal from 'sweetalert2';

function Header() {
  const [sessionEmail, setSessionEmail] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const storedEmail = sessionStorage.getItem('userEmail');
    if (storedEmail) {
      setSessionEmail(storedEmail);
    }
  }, []);

  function logout() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will be logged out of your account.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, logout',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        sessionStorage.removeItem('userEmail');
        setSessionEmail('');
        navigate('/'); // Navigate to home or login page after logout
        Swal.fire({
          title: 'Logged out!',
          text: 'You have been successfully logged out.',
          icon: 'success',
          timer: 1500,
          showConfirmButton: false,
        });
      }
    });
  }

  return (
    <div style={{ position: 'fixed', top: '0', zIndex: '99', width: '100%' }}>
      <Navbar expand="lg" className="bg-body-tertiary header">
        <img src={require('../Images/logo_gym-removebg-preview.png')} height={80} width={120} alt="" style={{ marginLeft: '55px' }} />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav">
            <ul className="main_menu list-unstyled d-flex text-nowrap">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Get Started<IoIosArrowDown />
                  <ul className="sub_menu list-unstyled">
                    <li><Link to="/canada">Our Gyms Canada</Link></li>
                    <li><Link to="/usa">Our Gyms USA</Link></li>
                  </ul>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Fitness Institute–GGFI<IoIosArrowDown />
                  <ul className="sub_menu list-unstyled">
                    <li><Link to="/faculty">Our Faculty</Link></li>
                    <li><Link to="/Buyplan">Buy a Courses</Link></li>
                    <li><Link to="/demo">Book a Demo Class</Link></li>
                  </ul>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Gallery">Collections</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              {sessionEmail && (
                <li className="nav-item">
                  <Link className="nav-link" to="/profile">Profile</Link>
                </li>
              )}
              <li className="nav-item">
                <button className="border-0 h_btn">
                  {sessionEmail ? (
                    <button className="nav-link default-btn rounded-pill" onClick={logout}>
                      Logout
                    </button>
                  ) : (
                    <Link className="nav-link default-btn rounded-pill" to="/login">
                      Login | SignUp
                    </Link>
                  )}
                </button>
              </li>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
