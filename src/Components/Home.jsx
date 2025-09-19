import "./Home.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Verify from "./Assets/Frame 1618878162.svg"
import Call from "./Assets/Frame 1618878164.svg";

function Home(){
    function create(){
        document.querySelector("#cal").style.display = "flex";
        document.querySelector("#journey").style.display = "none";
    }
    function continues(){
        if(document.querySelector("#number").value.length === 11){
            document.querySelector("#cal").style.display = "none";
            document.querySelector("#verifyPage").style.display = "flex";
        }else{
            alert("Enter a valid phone number");
        }
    }
    function verified(){
        const num = document.querySelector("#number").value;
        if(document.querySelector("#first").value === num[0] && document.querySelector("#second").value === num[1] && document.querySelector("#third").value === num[2] && document.querySelector("#last").value === num[3]){
            document.querySelector("#pro").click();
        }else{
            alert("Invalid OTP value");
        }
    }
    return(
        <div id="home">
            <div id="journey">
                <nav className="back"></nav>
                <nav>
                    <h4>Your Journey in Repairing your car Here!</h4>
                    <p>Car Repair Give solution to faulty car that are all useable in the whole world.</p>
                    <button onClick={create}>Create an Account</button>
                    <li>Already have an account ? <span>Sign In</span></li>
                </nav>
            </div>

            <div id="cal">
                <img src={Call} alt="" />
                <h4>Enter Your Mobile Number</h4>
                <li>We will end an OTP to the Phone Number </li>
                <input type="text" placeholder="Enter Your Phone Number" id="number" />
                <p>Make sure you provide a valid phone number To avoid delay in Signing up!</p>
                <motion.button onClick={continues}
                    initial={{opacity:0, x:100}}
                    whileInView={{opacity:1, x:0}}
                    transition={{duration:2, type:"spring", stiffness: 200}}
                >Continue</motion.button>
            </div>

            <div id="verifyPage">
                <img src={Verify} alt="" />
                <h4>OTP Verification</h4>
                <p>Enter Your 4 digit here!! Make sure it is correct </p>
                <nav>
                    <input type="text" id="first"/>
                    <input type="text" id="second" />
                    <input type="text" id="third" />
                    <input type="text" id="last" />
                </nav>
                <li>TIPS: Your verification code is your first four number.</li>
                <motion.button onClick={verified}
                    initial={{opacity:0, x:100}}
                    whileInView={{opacity:1, x:0}}
                    transition={{duration:2, type:"spring", stiffness: 200}}
                >Continue</motion.button>
            </div>
            <Link to="/Profile" id="pro"/>
        </div>
    )
}
export default Home;