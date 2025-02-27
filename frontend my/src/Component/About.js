import Footer from './Footer';
import Header from './Header';

function About() {
    return (
        <>
            <Header />
            <div>
                <div className="about" style={{marginTop:'45px'}}>
                    <div className="about-hero-img">
                        <div className="overlay">
                            <span className="about-text-box">
                                <h1>ABOUT US</h1>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="about-section">
                    <div className="row-about">
                        <div className="about-img-section">
                            {/* <img src="images/3gym.jpg" alt="gym img" /> */}
                            <img src={require('../Images/fit-couple-at-gym.webp')} alt="" />

                        </div>
                        <div className="about-content">
                            {/* <h1>About Us</h1> */}
                            <h2 ><span className='about-our-gym'>About Our GYM</span></h2>
                            <p className='mt-3' style={{ textAlign: "justify" }}>Welcome to Fitness, we believe that fitness is not just about reaching your goals. It's about enjoying the journey. We're more than just a gym. We're a community of like-minded individuals dedicated to transforming lives through health and wellness.</p>
                            <p style={{ textAlign: "justify" }} >At Fitness, your satisfaction and well-being are our top priorities. We're committed to providing a clean, safe, and welcoming environment where you can feel comfortable and confident in your fitness journey. Whether you're here to lose weight, build muscle, or simply improve your overall health, we're here to support you every step of the way.</p>
                            <p style={{ textAlign: "justify" }} >Our mission is to inspire and empower people to lead healthier and happier lives by providing exceptional fitness facilities, expert guidance, and a supportive community environment.</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

        </>
    )
}
export default About;