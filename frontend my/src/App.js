import './App.css';
import Demo from './Component/Demo';
import Gallery from './Component/Gallery';
import BuyPlan from './Component/BuyPlan';
import About from './Component/About';
import Usa from './Component/Usa';
import Canada from './Component/Canada';
import Footer from './Component/Footer';
import Header from './Component/Header';
import SingleCard from './Component/SingleCard';
import OurFaculty from './Component/OurFaculty';
import Contact from './Component/Contact';
import { Routes, Route } from "react-router-dom"
import Programme from './Component/Programme';
import Home from './Component/Home';
import Register from './Component/Register';
import Formm from './Component/Formm';
import Service from './Component/Service';
import Courses from './Component/Courses';
import Profile from './Component/Profile';
import PrivateRoute from './Component/PrivateRoute';

function App() {
  return (
    <div>
      {/* <Usa /> */}
      {/* <Demo/> */}
      {/* <Gallery /> */}
      {/* <BuyPlan/> */}
      {/* <About /> */}
      {/* <Canada /> */}
      {/* <Footer/> */}
      {/* <Header/> */}
      {/* <SingleCard/> */}
      {/* <Programme /> */}
      {/* <Home /> */}
      {/* <Register /> */}
      {/* <Formm/> */}
      {/* <Service /> */}
      {/* <Courses/> */}

      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Register />} />
        <Route path="/canada" element={<Canada />} />
        <Route path="/usa" element={<Usa />} />
        <Route path="/profile" element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        } />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/About" element={<About />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/Buyplan" element={<BuyPlan />} />
        <Route path="/faculty" element={<OurFaculty />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </div>
  );
}

export default App;
