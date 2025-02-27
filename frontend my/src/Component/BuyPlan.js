import SingleCard from './SingleCard';
import { Col, Container, Row } from 'react-bootstrap';
import gym1 from '../Images/1gym.jpg';
import gym2 from '../Images/2gym.jpg';
import gym3 from '../Images/3gym.jpg';
import gym4 from '../Images/4gym.jpg';
import gym5 from '../Images/5gym.jpg';
import gym6 from '../Images/6gym.jpg';
import gym7 from '../Images/7gym.jpg';
import gym8 from '../Images/8gym.jpg';
import gym9 from '../Images/9gym.jpg';
import gym10 from '../Images/10gym.jpg';
import gym11 from '../Images/11gym.jpg';
import gym12 from '../Images/12gym.jpg';
import gym13 from '../Images/13gym.jpg';
import Footer from './Footer';
import Header from './Header';

export default function BuyPlan() {
  return (
    <section>
      <Header />
      <div className="section-gallery" style={{marginTop:'95px'}}>
        <div className="buyplan-hero-img">
          <div className="overlay">
            <span className="gallery-text-box">
              <h1>BUY PLAN</h1>
            </span>
          </div>
        </div>
      </div>
      <span className="text">
        <h2 className='h_tag'>Our Popular Fitness Courses</h2>
      </span>

      <Container>
        <Row className="mx-auto">
          <Col lg={4} md={6}>
            <SingleCard
              img={gym1}
              text={'ACE American Council on Exercise certification'}
            />
          </Col>
          <Col lg={4} md={6}>
            <SingleCard
              img={gym2}
              text={'GGFI Advanced Personal Training Online Course'}
            />
          </Col>
          <Col lg={4} md={6}>
            <SingleCard
              img={gym11}
              text={'GGFI Advanced Personal Training Offline Course'}
            />
          </Col>

        </Row>
      </Container>
      <hr className="hr" />
      <span className="text">
        <h2 className='h_tag'>Other Courses</h2>
      </span>
      <Container>
        <Row>
          <Col lg={4} md={6}>
            <SingleCard
              img={gym4}
              text={'Package of 3 Short Courses'}
            />
          </Col>
          <Col lg={4} md={6}>
            <SingleCard
              img={gym5}
              text={'GGFI Short Course - Kettlebell Training'}
            />
          </Col>
          <Col lg={4} md={6}>
            <SingleCard
              img={gym6}
              text={'GGFI Advanced Personal Training Online Course'}
            />
          </Col>
          <Col lg={4} md={6}>
            <SingleCard
              img={gym7}
              text={'GGFI Advanced Personal Training Offline Cours'}
            />
          </Col>
          <Col lg={4} md={6}>
            <SingleCard
              img={gym8}
              text={'GGFI SHORT COURSE – Sports Injuries'}
            />
          </Col>
        </Row>
      </Container>
      <hr className="hr" />
      <span className="text ">
        <h2>"Short Courses"</h2>
      </span>
      <Container>
        <Row>
          <Col lg={4} md={6}>
            <SingleCard
              img={gym9}
              text={'Package of 3 Short Courses'}
            />
          </Col>
          <Col lg={4} md={6}>
            <SingleCard
              img={gym10}
              text={'GGFI Short Course - Kettlebell Training'}
            />
          </Col>
          <Col lg={4} md={6}>
            <SingleCard
              img={gym11}
              text={'GGFI Short Course - HIIT'}
            />
          </Col>
          <Col lg={4} md={6}>
            <SingleCard
              img={gym12}
              text={'GGFI Advanced Personal Training Online Course'}
            />
          </Col>
          <Col lg={4} md={6}>
            <SingleCard
              img={gym13}
              text={'GGFI Advanced Personal Training Offline Course'}
            />
          </Col>
        </Row>
      </Container>

      <Footer />
    </section>

  );
}
