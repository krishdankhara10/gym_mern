import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import contactImg from "../Images/m-1.jpg";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { InputGroup } from "react-bootstrap";
import Header from "./Header";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function Contact() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [subject, setsubject] = useState("");
  const [comment, setcomment] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (!name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    }

    if (!email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
      isValid = false;
    }

    if (!subject) {
      errors.subject = "Please select a subject";
      isValid = false;
    }
    if (!comment) {
      errors.comment = "Comments are required";
      isValid = false;
    }
    setErrors(errors);
    return isValid;
  };

  const contect = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      const response = await axios.post("http://localhost:5000/api/contacts", {
        name,
        email,
        subject,
        comment,
      });
      // Handle success
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Your message has been sent successfully.",
        confirmButtonText: "OK",
      });
      setname("");
      setemail("");
      setsubject("");
      setcomment("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Header />
      <div className="contact" style={{ marginTop: "45px" }}>
        <div className="contact-hero-img">
          <div className="overlay">
            <span className="contact-text-box">
              <h1>Contact</h1>
            </span>
          </div>
        </div>
      </div>

      <span className="text">
        {/* <h2 className="line">........</h2> */}
        <h2>Contact Us</h2>
      </span>
      <div className="container mt-3 sm:mt-5 ">
        <div className="row justify-content-center ">
          <div className="col-lg-4 col-md-6 my-3">
            <div className="contact-call-box">
              <div className="inside-content d-inline-flex ">
                <span>
                  <FaPhoneAlt />
                </span>
                <div className="inside-content-2">
                  <h3>CALL US</h3>
                  <p>+568 0256 30254</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 my-3">
            <div className="contact-call-box">
              <div className="inside-content d-inline-flex ">
                <span>
                  <MdEmail />
                </span>
                <div className="inside-content-2">
                  <h3>MAKE A QUOTE</h3>
                  <a href="#">abc@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 my-3">
            <div className="contact-call-box">
              <div className="inside-content d-inline-flex ">
                <span>
                  <FaLocationDot />
                </span>
                <div className="inside-content-2">
                  <h3>SERVICE STATION</h3>
                  <a href="#">Location</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="message" style={{ height: 700 }}>
        <div className="container">
          <div className="message-box ">
            <div className="row align-items-center ">
              <div className="col-lg-4 col-md-4 left-image">
                <img src={contactImg} alt="m-1" />
              </div>
              <div className="col-lg-8 col-md-8 message-contant  ">
                <button className="msg-cont-btn">Contact Us</button>
                <h1 className="pt-2">SEND US MESSAGE</h1>
                <Form>
                  <Form.Group
                    className="mb-3 d-flex gap-4"
                    controlId="formBasicEmail"
                  >
                    <div className="d-flex flex-column flex-grow-1">
                      <Form.Control
                        type="text"
                        placeholder="Your Name"
                        width={100}
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                      />
                      {errors.name && (
                        <span className="error">{errors.name}</span>
                      )}
                    </div>
                    <div className="d-flex flex-column flex-grow-1">
                      <Form.Control
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                      />
                      {errors.email && (
                        <span className="error">{errors.email}</span>
                      )}
                    </div>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Select
                      aria-label="Default select example"
                      onChange={(e) => setsubject(e.target.value)}
                    >
                      <option value={""}>Select Subject</option>
                      <option value="bodyBuilding">Body Building</option>
                      <option value="powerLifting">Power Lifting</option>
                      <option value="meditationClass">Meditation Class</option>
                    </Form.Select>
                    {errors.subject && (
                      <span className="error">{errors.subject}</span>
                    )}
                  </Form.Group>
                  <InputGroup>
                    <Form.Control
                      as="textarea"
                      type="text"
                      rows={4}
                      placeholder="Type your message"
                      value={comment}
                      aria-label="With textarea"
                      onChange={(e) => setcomment(e.target.value)}
                    />
                  </InputGroup>
                  {errors.comment && (
                    <span className="error">{errors.comment}</span>
                  )}

                  <div className="message-btn">
                    <button className="msg-btn mt-3" onClick={contect}>
                      Send A Message
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </div>
  );
}
