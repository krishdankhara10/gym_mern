import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

function Formm() {
    const [department, setdepartment] = useState("");
    const [name, setname] = useState("");
    const [mobilno, setmobilno] = useState("");
    const [email, setemail] = useState("");
    const [state, setstate] = useState("");
    const [city, setcity] = useState("");
    const [gym, setgym] = useState("");
    const [comment, setcomment] = useState("");

    const form = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/forms', {
                department,
                name,
                mobilno,
                email,
                state,
                city,
                gym,
                comment
            });
            // Handle success
            Swal.fire({
                icon: 'success',
                title: 'Success!',
                text: 'Your data has been successfully stored.',
                confirmButtonText: 'OK'
            });
            setdepartment('');
            setname('');
            setmobilno('');
            setemail('');
            setstate('');
            setcity('');
            setgym('');
            setcomment('');
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <section className="form">
                <div className="form-bg-img" style={{height:'920px'}} >
                    <div className="container">
                        <div className="mt-5 p-3">
                            <div className="text-center ">
                                {/* <div className="form-content  "> */}
                                <h3 className="f-head mt-4 mx-auto fw-bold fs-1" style={{color:'#ff4500'}}>KEEP IN TOUCH</h3>
                                <div className='form_sec m-auto my-5 p-0 mt-  ' style={{ boxShadow: 'none' }}>
                                    <Form onSubmit={form} className='form_section'>
                                        <Form.Group className="mb-3">
                                            <Form.Control placeholder="Enter Your Name" value={name} onChange={e => setname(e.target.value)} />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Control placeholder="Enter your Mobile no" value={mobilno} onChange={e => setmobilno(e.target.value)} />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Control placeholder="Enter your Email" value={email} onChange={e => setemail(e.target.value)} />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Select onChange={e => setdepartment(e.target.value)}> 
                                                <option value={''}>Select a Department</option>
                                                <option value={'INTERSTED IN FRANCHIES'}>INTERSTED IN FRANCHIES</option>
                                                <option value={'MARKETING'}>MARKETING</option>
                                                <option value={"ADVERTISE WITH GOLD'S GYM"}>ADVERTISE WITH GOLD'S GYM</option>
                                                <option value={'ASSOCIATION & ALLIANCES'}>ASSOCIATION & ALLIANCES</option>
                                                <option value={'CUSTOMER CARE'}>CUSTOMER CARE</option>
                                                <option value={'CONTACT A SPECIFIC GYM'}>CONTACT A SPECIFIC GYM</option>
                                            </Form.Select>
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Select onChange={e => setstate(e.target.value)}>
                                                <option value={''}>Select a State</option>
                                                <option value="Alabama">Alabama</option>
                                                <option value="Alaska">Alaska</option>
                                                <option value="Arizona">Arizona</option>
                                                <option value="Arkansas">Arkansas</option>
                                                <option value="California">California</option>
                                                <option value="Colorado">Colorado</option>
                                                <option value="Connecticut">Connecticut</option>
                                                <option value="Delaware">Delaware</option>
                                                <option value="District Of Columbia">District Of Columbia</option>
                                                <option value="Florida">Florida</option>
                                                <option value="Georgia">Georgia</option>
                                                <option value="Hawaii">Hawaii</option>
                                                <option value="Idaho">Idaho</option>
                                                <option value="Illinois">Illinois</option>
                                                <option value="Indiana">Indiana</option>
                                            </Form.Select>
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Select onChange={e => setcity(e.target.value)} >
                                                <option value={''}>Select a City</option>
                                                <option value={'los angles'}>Canada</option>
                                                <option value={'new york'}>Usa</option>

                                            </Form.Select>
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Select onChange={e => setgym(e.target.value)}>
                                                <option value={''}>Select a Gym</option>
                                                <option value={'7fitness'}>Fitness</option>

                                            </Form.Select>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

                                            <Form.Control as="textarea" placeholder='Enter message' value={comment} rows={3} onChange={e => setcomment(e.target.value)} />
                                        </Form.Group>
                                        <Button variant="primary" type="submit" >
                                            Submit
                                        </Button>
                                    </Form>
                                    {/* </div> */}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </>
    )
}
export default Formm;