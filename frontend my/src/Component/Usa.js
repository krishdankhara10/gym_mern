import Footer from "./Footer";
import Header from "./Header";

function Usa() {
    return (
        <>
        <Header/>
            <div className="usa" style={{marginTop:'95px'}}>
                <div className="usa-hero-img">
                    <span className="text-box">
                        <h1>OUR GYM</h1>
                    </span>
                </div>
            </div>
            <span className="text">
                <h2> <span className='h_tag'>Location Across USA</span> </h2>
            </span>
            <div className="usa-row-state d-flex mt-5 justify-content-center m-auto">
                <div className="usa-column-state">
                    <button><a href="#">California</a></button>
                    <button><a href="#">Texas</a></button>
                    <button><a href="#">Florida</a></button>
                    <button><a href="#">Pennsylvania</a></button>
                    <button><a href="#">New York</a></button>
                </div>
                <div className="usa-column-state">
                    <button><a href="#">Missouri</a></button>
                    <button><a href="#">Oregon</a></button>
                    <button><a href="#">Georgia</a></button>
                    <button><a href="#">New Mexico</a></button>
                    <button><a href="#">Alabama</a></button>
                </div>
            </div>

            <Footer />
        </>
    )
}
export default Usa;