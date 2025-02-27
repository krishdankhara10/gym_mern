import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Footer from './Footer';
import Header from './Header';
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

function Demo() {
    const [name, setname] = useState("");
    const [mobilno, setmobilno] = useState("");
    const [email, setemail] = useState("");
    const [course, setcourse] = useState("");
    const [city, setcity] = useState("");
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let isValid = true;
        const errors = {};

        if (!name.trim()) {
            errors.name = 'Username is required';
            isValid = false;
        }

        if (!email.trim()) {
            errors.email = 'Email is required';
            isValid = false;    
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Email is invalid';
            isValid = false;
        }
        if (!mobilno.trim()) {
            errors.mobilno = 'Mobile number is required';
        } else if (!/^\d{10}$/.test(mobilno.trim())) {
            errors.mobilno = 'Mobile number should be 10 digits';
        } else if (!/^[6-9]\d{9}$/.test(mobilno.trim())) {
            errors.mobilno = "Invalid mobile number format";
        }
        if (!course) {
            errors.course = 'Please select a course';
            isValid = false;
        }
        if (!city) {
            errors.city = 'Please select a city';
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };

    const demo = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
        try {
            const response = await axios.post('http://localhost:5000/api/demos', {
                name,
                mobilno,
                email,
                course,
                city
            });
            // Handle success
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Your demo request has been successfully submitted.',
                confirmButtonText: 'OK'
            });
            setname('');
            setmobilno('');
            setemail('');
            setcourse('');
            setcity('');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Header />
            <div className="demo" style={{marginTop:'95px'}}>
                <div className="demo-hero-img ">
                    <div className="overlay">
                        <span className="demo-text-box">
                            <h1>OUR GYM</h1>
                        </span>
                    </div>

                </div>
            </div>
            <span className="text">
                <h2 className='h_tag'>Location Across USA</h2>
            </span>
            <h1 className='text-center my-5 h_tag' style={{textDecoration:'underline'}}>Schedule a Call With Our Expert or Book a Demo Class</h1>
            <div className='form_sec m-auto mb-5 '>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control placeholder="Enter Your Name" value={name} onChange={e => setname(e.target.value)} />
                    {errors.name &&
                    <span className="error">{errors.name}</span>}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Mobile No:-</Form.Label>
                    <Form.Control placeholder="Enter your Mobile no" value={mobilno} onChange={e => setmobilno(e.target.value)} />
                    {errors.mobilno &&
                    <span className="error">{errors.mobilno}</span>}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email   </Form.Label>
                    <Form.Control placeholder="Enter your Email" value={email} onChange={e => setemail(e.target.value)} />
                    {errors.email &&
                    <span className="error">{errors.email}</span>}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Type of Course</Form.Label>
                    <Form.Select onChange={e => setcourse(e.target.value)}  >
                        <option value={''}>Please Choose an option</option>
                        <option value={'Offline'}>Offline</option>
                        <option value={'Online'}>Online</option>
                        <option value={'Short Course'}>Short Course</option>
                    </Form.Select>
                    {errors.course &&
                    <span className="error">{errors.course}</span>}
                </Form.Group>
                <Form.Group className="mb-5">
                    <Form.Label>Select Country</Form.Label>
                    <Form.Select onChange={e => setcity(e.target.value)}>
                        <option>Please Choose an option</option>
                        <option value={'Canada'}>Canada</option>
                        <option value={'USA'}>USA</option>

                    </Form.Select>
                    {errors.city &&
                    <span className="error">{errors.city}</span>}
                </Form.Group>
                <Button variant="primary" type="submit" onClick={demo}>
                    Submit
                </Button>
            </div>

            {/* ...............FOOTER ............... */}
            <Footer />
        </>
    )
}
export default Demo;