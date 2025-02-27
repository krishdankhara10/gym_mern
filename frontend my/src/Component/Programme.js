
function Programme() {

    return (
        <>
            <div className="container mt-5 ">
                <div className="program">
                    <h1 ><span className='border-bottom border-4  mb-3 pb-2'>Our&nbsp;Programs</span></h1>
                    <p style={{ textAlign: "justify" }}>The diverse range of programs, from group exercises, corporate training to personalized
                        training, caters
                        to varying fitness levels and goals. Members get variety and the option of customization as each gym
                        offers a diversity of exercise options and specialized programs, allowing members to choose activities
                        that align with their interests and fitness objectives. Personalized training programs ensure workouts
                        are tailored to individual needs, maximizing results. Participating in group exercises fosters a sense
                        of community among members, providing social support and encouragement, which can be instrumental in
                        maintaining consistency in their fitness journey.
                    </p>
                </div>
                <div className="row program-row">
                    <div className="col-lg-6 col-md-6 program-column">
                        <h2 id="psuntitle"><span>Gym Memberships</span></h2>
                        <p id="info1" style={{ textAlign: "justify" , textIndent:"3rem" }}>A gym membership grants individuals access to fitness facilities and equipment, enabling them to
                            pursue their fitness goals through exercise and training programs tailored to their needs. With a
                            membership, individuals can enjoy amenities such as group classes, personal training sessions, and
                            specialized equipment for strength training and cardio workouts.</p>
                        <p style={{ textAlign: "justify" , textIndent:"3rem" }}>
                            We offer flexible membership options to suit your needs and budget. Whether you prefer a month-to-month membership, a prepaid package, or a family plan, we have a variety of options available. Our memberships also include access to all gym facilities, classes, and amenities, so you can make the most of your fitness journey without any limitations.
                        </p>

                    </div>
                    <div className="col-lg-6 col-md-6 program-column">
                        <img src={require('../Images/membership.jpg')} alt="" />
                    </div>
                </div>
                <div className="row program-row">
                    <div className="col-lg-6 col-md-6 program-column">
                        {/* <img id="img2" src="images/training.jpg" alt /> */}
                        <img src={require('../Images/training.jpg')} alt="" />
                    </div>
                    <div className="col-lg-6 col-md-6 program-column">
                        <h2 id="psuntitle"><span>Training</span></h2>
                        <p id="info2" style={{ textAlign: "justify", textIndent:"3rem" }}>Elevate your fitness journey with our dynamic gym training programs. From strength and cardio
                            sessions to HIIT and functional workouts, we offer diverse training options tailored to your goals.
                            Led by experienced trainers, our sessions provide personalized guidance and motivation to help you
                            achieve optimal results. Join us today and experience the power of targeted gym training for a
                            stronger, fitter you.</p>
                        <p style={{ textAlign: "justify" , textIndent:"3rem" }}>
                            Take your fitness to the next level with our functional training programs. Designed to improve your strength, stability, flexibility, and mobility, functional training focuses on movements that mimic everyday activities, helping you build a strong, resilient body that performs at its best in all aspects of life.
                        </p>
                    </div>
                    <div className="row program-row">
                        <div className="col-lg-6 col-md-6 program-column">
                            <h2 id="psuntitle"><span>Group Class</span></h2>
                            <p id="info3" style={{ textAlign: "justify" , textIndent:"3rem" }} >Gym group classes offer participants structured workouts led by instructors, fostering motivation
                                and camaraderie among members. Ranging from high-intensity interval training (HIIT) to yoga and
                                cycling, these classes cater to diverse fitness preferences and goals.</p>
                            <p style={{ textAlign: "justify" , textIndent:"3rem" }}>Made By krish Dankhara..
                                Joining a group fitness class is more than just a workout - it's an opportunity to connect with like-minded individuals who share your passion for health and fitness. Our supportive and inclusive community will cheer you on, celebrate your successes, and help you overcome any obstacles along the way.
                            </p>
                            {/* <p style={{ textAlign: "justify" , textIndent:"3rem" }}>Exercising in a group setting is a great way to stay motivated and accountable. Our energetic instructors will push you to give your best effort, while the camaraderie of your fellow class members will inspire you to keep going even when the workout gets tough.</p> */}
                        </div>
                        <div className="col-lg-6 col-md-6 program-column mb-5">
                            <img src={require('../Images/new.jpg')} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Programme;