import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import Header from './Header';

function Canada() {
    return (
        <div>
            <Header />
            <div className="canada" style={{marginTop:'95px'}}>
                <div className="canada-hero-img">
                    <span className="canada-text-box">
                        <h1>OUR GYM</h1>
                    </span>
                </div>
            </div>

            <span className="text"> 
                <h2> <span className='h_tag'>Location Across Canada</span> </h2>
            </span>


            <div className="canada-row-state d-flex mt-5 justify-content-center mx-auto">
                <div className="canada-column-state" >
                    <button><a href="#">Toronto</a></button>
                    <button><a href="#">Yukon</a></button>
                    <button><a href="#">Alberta</a></button>
                    <button><a href="#">Ontario</a></button>
                    <button><a href="#">Quebec</a></button>
                </div>
                <div className="canada-column-state" >
                    <button><a href="#">Columbia</a></button>
                    <button><a href="#">Island</a></button>
                    <button><a href="#">Saskatchewan</a></button>
                    <button><a href="#">Nova Scotia</a></button>
                    <button><a href="#">Brunswick</a></button>
                </div>
            </div>
            <Footer />
        </div>

    )
}

export default Canada