import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import slider1 from '../Images/11.jpg'
import slider2 from '../Images/22.jpg'
import slider3 from '../Images/slider33.jpg'
import slider4 from '../Images/slider4.jpg'
import slider5 from '../Images/slider5.jpg'
import Header from './Header';
import Programme from './Programme';
import Footer from './Footer';
import Formm from './Formm';
import Service from './Service';
import Courses from './Courses';


export default function Home() {
  return (
    <>
      <Header />
    <div className='caro_img' style={{marginTop:'115px'}}>
      <div className='dumbbell'></div>
      <Carousel fade className='caro_img '>
        {/* <Carousel.Item interval={1500}>
          <img
            className="d-block w-100 "
            src={slider1}
            alt="Image One"
            height={600}
          />
        </Carousel.Item> */}
        <Carousel.Item interval={500} className='caro_img' >
          <img
            className="d-block w-100"
            src={slider2}
            alt="Image One"
            height={600}
          />
        </Carousel.Item>
        <Carousel.Item interval={5000} className='caro_img'>
          <img
            className="d-block  w-100  "
            src={slider3}
            alt="Image One"
            height={600}
          />
        </Carousel.Item>
        <Carousel.Item interval={5000} className='caro_img'>
          <img
            className="d-block w-100"
            src={slider4}
            alt="Image One"
            height={600}

          />
        </Carousel.Item>
        <Carousel.Item interval={5000} className='caro_img'>
          <img
            className="d-block w-100"
            src={slider5}
            alt="Image One"
            height={600}

          />
        </Carousel.Item>
      </Carousel>
      <Courses />
      <Programme />
      <Service />
      <Formm />
      <Footer />
    </div>
    </>

  );
}
