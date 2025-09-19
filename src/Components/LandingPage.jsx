import "./LandingPage.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "./Assets/image 783.svg";
import Frame from "./Assets/Frame 1618878158.svg";
import Frame1 from "./Assets/Frame 1618878221.svg";
import Frame2 from "./Assets/Frame 1618878223.svg";
import Frame3 from "./Assets/Frame 1618878224.svg";
import Frame4 from "./Assets/Frame 1618878225.svg";
import Pic from "./Assets/Group.svg";
import Facebook from "./Assets/icon-facebook.svg";
import Instagram from "./Assets/icon-instagram.svg";
import Twitter from "./Assets/icon-twitter.svg";
import Youtube from "./Assets/icon-youtube.svg";

function LandingPage(){
    function start(){
        document.querySelector("#ho").click();
    }
    return(
        <div id="landing">
            <header>
                <motion.h4
                    initial={{opacity:0, x:20}}
                    whileInView={{opacity:1, x:0}}
                    transition={{duration:2, delay:0.3}}
                >
                    <img src={Logo} alt="LOGO" />
                    CAR REPAIR
                </motion.h4>
                <motion.div
                    initial={{opacity:0, x: 80}}
                    whileInView={{opacity:1, x:0}}
                    transition={{duration:2, delay: 0.5}}
                >
                    <a href="#">HOME</a>
                    <a href="#wrapper">ABOUT</a>
                    <a href="#service">SERVICE</a>
                    <a href="#footer">CONTACT</a>
                </motion.div>
                <motion.button onClick={start}
                    initial={{opacity: 0, y: 100}}
                    whileInView={{opacity: 1, y:0}}
                    transition={{duration: 2, delay: 1, type:"spring", stiffness: 150}}
                >Get Started</motion.button>
            </header>

            <div id="container">
                <div>
                    <motion.h1
                        initial={{y: -100, opacity:0}}
                        whileInView={{y:0, opacity:1}}
                        transition={{duration:1, delay: 1}}
                    >Reliable <motion.span 
                        initial={{opacity:0, x: 50}}
                        whileInView={{opacity:1, x:0}}
                        transition={{duration:2, delay:1.5}}
                    >Car Repair Services</motion.span> You Can Trust</motion.h1>
                    <motion.p
                        initial={{x: -50, opacity:0}}
                        whileInView={{x:0, opacity:1}}
                        transition={{duration:1, delay: 1.5}}
                    >We offer affordable and professional auto repair solutions for all car brands.</motion.p>
                    <motion.button onClick={start}
                        initial={{opacity:0, x:100}}
                        whileInView={{opacity:1, x:0}}
                        transition={{type: "spring", stiffness: 130, duration:1, delay:2}}
                    >Get Started</motion.button>
                </div>
                <motion.img src={Logo} alt="frame" 
                    initial={{y: 100, opacity:0}}
                    whileInView={{y:0, opacity:1}}
                    transition={{duration:1, delay:1}}
                />
            </div>

            <div id="wrapper">
                <section>
                    <motion.h1
                        initial={{opacity:0, y:100}}
                        whileInView={{opacity:1, y:0}}
                        transition={{duration:1, delay:0.5}}
                    >ABOUT US</motion.h1>
                    <motion.p
                        initial={{opacity:0, y:100}}
                        whileInView={{opacity:1, y:0}}
                        transition={{duration:1, delay:0.7}}
                    >We are team of certified auto technicians with over 10 years of experience in car diagnostics abd repairs. We prioritize quality service and costomer satisfaction.</motion.p>
                    <motion.button onClick={start}
                        initial={{opacity:0, x:100}}
                        whileInView={{opacity:1, x:0}}
                        transition={{duration:1, delay:0.8}}
                    >Book an Appointment</motion.button>
                </section>
                <section>
                    <img src={Frame} alt="" />
                </section>
            </div>

            <div id="service">
                <motion.h1
                    initial={{opacity:0, y: -100}}
                    whileInView={{opacity:1, y:0}}
                    transition={{duration:1, delay:0.2}}
                >Our SERVICES</motion.h1>
                <div className="container">
                    <motion.section
                        initial={{opacity:0, x: -50}}
                        whileInView={{opacity:1, x:0}}
                        transition={{duration:1, delay:0.3}}
                    >
                        <img src={Frame1} alt="" />
                        <div>
                            <h4>Engine Diagnostics</h4>
                            <p>Modern tools for quick and acurate checks.</p>
                            <button onClick={start}>View</button>
                        </div>
                    </motion.section>
                    <motion.section
                        initial={{opacity:0, x: -50}}
                        whileInView={{opacity:1, x:0}}
                        transition={{duration:1, delay:0.8}}
                    >
                        <img src={Frame2} alt="" />
                        <div>
                            <h4>Brake Repair</h4>
                            <p>Safe and reliable brake system repair.</p>
                            <button onClick={start}>View</button>
                        </div>
                    </motion.section>
                    <motion.section
                        initial={{opacity:0, x: -50}}
                        whileInView={{opacity:1, x:0}}
                        transition={{duration:1, delay:0.3}}
                    >
                        <img src={Frame3} alt="" />
                        <div>
                            <h4>Oil Change</h4>
                            <p>Fast oil & filter changes with top-grade oil.</p>
                            <button onClick={start}>View</button>
                        </div>
                    </motion.section>
                    <motion.section
                        initial={{opacity:0, x: -50}}
                        whileInView={{opacity:1, x:0}}
                        transition={{duration:1, delay:0.5}}
                    >
                        <img src={Frame4} alt="" />
                        <div>
                            <h4>AC & Heating</h4>
                            <p>Modern tools for quick and acurate checks.</p>
                            <button onClick={start}>View</button>
                        </div>
                    </motion.section>
                </div>
            </div>

            <div id="testimonial">
                <nav>
                    <h1>TESTIMONIALS</h1>
                    <motion.li
                        initial={{x: 100, opacity:0}}
                        whileInView={{x:0, opacity:1}}
                        transition={{duration:1, type: "spring", stiffness: 130}}
                    >What Our Customer Say</motion.li>
                </nav>
                
                <div className="container">
                    <motion.section
                        initial={{opacity:0}}
                        whileInView={{opacity:1}}
                        transition={{delay:0.4}}
                    >
                        <img src={Pic} alt="pic" />
                        <p>Excellent service! Fixed my car quickly and professional.</p>
                        <h4>Sarah A.</h4>
                    </motion.section>
                    <motion.section
                        initial={{opacity:0}}
                        whileInView={{opacity:1}}
                        transition={{delay:0.8}}
                    >
                        <img src={Pic} alt="pic" />
                        <p>Best garage in town Yes!. They are honest and reliable </p>
                        <h4>John M.</h4>
                    </motion.section>
                    <motion.section
                        initial={{opacity:0}}
                        whileInView={{opacity:1}}
                        transition={{delay:1.2}}
                    >
                        <img src={Pic} alt="pic" />
                        <p>Excellent service! Fixed my car quickly and professional.</p>
                        <h4>Doe J.</h4>
                    </motion.section>
                </div>
            </div>

            <footer id="footer">
                <div>
                    <h4>
                        <img src={Logo} alt="" />
                        CAR REPAIR
                    </h4>
                </div>

                <div>
                    <a href="#">HOME</a>
                    <a href="#">ABOUT</a>
                    <a href="#">SERVICE</a>
                    <a href="#">CONTACT</a>
                </div>
                <div>
                    <img src={Facebook} alt="" />
                    <img src={Twitter} alt="" />
                    <img src={Instagram} alt="" />
                    <img src={Youtube} alt="" />
                </div>
                <div>
                    <p>Copyright &copy; 2025 Your Car Repair</p>
                    <p>Designed by codeWithFaith(Abdulmalik)</p>
                </div>
            </footer>
            <Link to="/Home" id="ho"/>
        </div>
    )
}
export default LandingPage;