function Courses() {
    return (
        <>
            <div className='mb-5'>
                <div className="course-section">
                    <h2><span>Courses</span></h2>
                    <p>" Transform your body, one rep at a time."</p> </div>
                <div className="container">

                    <div className="row card-row mx-auto gap-5">
                        <div className="card card-course col-xl-3 col-md-5">
                            {/* <img src="images/online.jpg" className="card-img-top" alt="Course Image" /> */}
                            <div className=' mt-3'>

                                <img src={require('../Images/online.jpg')} className="card-img-top" alt="Course Image" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Online Personal Training</h5>
                                <p style={{ textAlign: "justify" }}>Personalized online training tailored to your schedule.From strength building to flexibility, achieve results from the comfort of your home.</p>
                            </div>
                        </div>
                        <div className="card card-course col-xl-3 col-md-5">
                            {/* <img src="images/ofline.jpg" className="card-img-top" alt="Course Image" /> */}
                            <div className="mt-3">

                            <img src={require('../Images/ofline.jpg')} className="card-img-top " alt="Course Image" />
                            </div>

                            <div className="card-body">
                                <h5 className="card-title">Ofline Personal Training</h5>
                                <p style={{ textAlign: "justify" }}>Our expert coaches and tailored programs will guide you every step of the way, ensuring you achieve your fitness goals effectively and safely.</p>
                            </div>
                        </div>
                        <div className="card card-course col-xl-3 col-md-5">
                            {/* <img src="images/short_trainning.jpg" className="card-img-top" alt="Course Image" /> */}
                            <div className="mt-3">
                                
                            <img src={require('../Images/short_trainning.jpg')} className="card-img-top" alt="Course Image" />
                            </div>

                            <div className="card-body">
                                <h5 className="card-title">Short Courses</h5>
                                <p style={{ textAlign: "justify" }}>Our high-intensity interval training sessions. Achieve your fitness goals efficiently with personalized guidance from our expert trainers.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Courses;