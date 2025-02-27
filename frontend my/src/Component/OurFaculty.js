import FacultyCard from './FacultyCard';
import avtar1 from '../Images/avtar1.png';
import avtar2 from '../Images/avtar2.png';
import avtar3 from '../Images/avtar3.png';
import avtar5 from '../Images/avtar5.png';
import avtar8 from '../Images/avtar8.png';
import avtar10 from '../Images/avtar10.png';
import { Col, Container, Row } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';

export default function OurFaculty() {
  return (
    <div>
      <Header />
      <div className="fac" style={{marginTop:'95px'}}>
        <div className="faculty-hero-img">
          <div className="overlay">
            <span className="faculty-text-box">
              <h1>Our Faculty</h1>
            </span>
          </div>
        </div>
      </div>

      <span className="text">
        <h2> <span className='h_tag'>Our Faculty</span> </h2>
      </span>

      <Container>
        <Row className='mx-auto'>
          <Col lg={4} md={6} >
            <FacultyCard
              img={avtar1}
              text1={'Dr. Karan Sonic'}
              text2={'Exercise Science Faculty'}
              
            />

          </Col>
          <Col lg={4} md={6}>
            <FacultyCard
              img={avtar2}
              text1={'Dr. Nikhil Desale'}
              text2={'Exercise Science Faculty'}
            />

          </Col>
          <Col lg={4} md={6}>
            <FacultyCard
              img={avtar8}
              text1={'Mr. Akhil Kumar'}
              text2={'Exercise Science Faculty'}
            />
          </Col>
          <Col lg={4} md={6}>
            <FacultyCard
              img={avtar5}
              text1={'Mr. Girish Shirsat'}
              text2={'Exercise Science Faculty'}
            />
          </Col>
          <Col lg={4} md={6}>
            <FacultyCard
              img={avtar10}
              text1={'Dr. Akshay Kulkarni'}
              text2={'Exercise Science Faculty'}
            />

          </Col>
          <Col lg={4} md={6}>
            <FacultyCard
              img={avtar3}
              text1={'Mr. Vishva Thomas'}
              text2={'Exercise Science Faculty'}
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
