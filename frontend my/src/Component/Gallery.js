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
import gym14 from '../Images/14gym.jpg';
import gym15 from '../Images/15gym.jpg';
import gym16 from '../Images/16gym.jpg';
import gym17 from '../Images/17gym.jpg';
import gym18 from '../Images/18gym.jpg';
import gym19 from '../Images/19gym.jpg';
import Footer from './Footer';
import Header from './Header';
export default function Gallery() {

  return (
    <section>
      <Header/>

      <div>
        <div className="section-gallery" style={{marginTop:'95px'}}>
          <div className="gallery-hero-img">
            <div className="overlay">
              <span className="gallery-text-box">
                <h1>GALLERY</h1>
              </span>
            </div>
          </div>
        </div>
        <span className="text">
          <h2 className='h_tag'>Gym Life: Where Workouts Become Wins.</h2>
        </span>
        <div className="row-gallery">
          <div className="column-gallery">
            <img src={gym1} style={{ width: '100%' }} />
            <img src={gym2} style={{ width: '100%' }} />
            <img src={gym3} style={{ width: '100%' }} />
            <img src={gym4} style={{ width: '100%' }} />
            <img src={gym5} style={{ width: '100%' }} />
          </div>
          <div className="column-gallery">
            <img src={gym6} style={{ width: '100%' }} />
            <img src={gym7} style={{ width: '100%' }} />
            <img src={gym8} style={{ width: '100%' }} />
            <img src={gym9} style={{ width: '100%' }} />
            <img src={gym10} style={{ width: '100%' }} />
          </div>
          <div className="column-gallery">
            <img src={gym11} style={{ width: '100%' }} />
            <img src={gym12} style={{ width: '100%' }} />
            <img src={gym13} style={{ width: '100%' }} />
            <img src={gym14} style={{ width: '100%' }} />
            <img src={gym15} style={{ width: '100%' }} />
          </div>
          <div className="column-gallery">
            <img src={gym16} style={{ width: '100%' }} />
            <img src={gym17} style={{ width: '100%' }} />
            <img src={gym18} style={{ width: '100%' }} />
            <img src={gym19} style={{ width: '100%' }} />
          </div>
        </div>
      </div>

      <Footer />

    </section>
  );
}


