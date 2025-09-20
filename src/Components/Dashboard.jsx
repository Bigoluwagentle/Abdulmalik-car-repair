import "./Dashboard.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "./Assets/image 783.svg";
import Car from "./Assets/car.svg";
import Car1 from "./Assets/car (1).svg";
import Car2 from "./Assets/car (2).svg";
const userName = window.sessionStorage.getItem("user");
const username = userName.split(" ")[0];

function Dashboard(){
    function GoBAck(){
        if(!userName){
            document.querySelector("#lands").click();
        }
    }
    GoBAck();
    return(
        <div id="dashboard">
            <header>
                <motion.h4
                    initial={{opacity:0, scale:0}}
                    whileInView={{opacity:1, scale:1}}
                    transition={{duration:1, delay:0.5}}
                >
                    <img src={Logo} alt="LOGO" />
                    CAR REPAIR
                </motion.h4>
                <div>
                    <h4>
                        <i class="fa-solid fa-user"></i>
                         Hi, {username}
                    </h4>
                    <nav>
                        <p><i class="fa-solid fa-user"></i> Profile</p>
                        <p onClick={() => {
                            const confirms = window.confirm("Are you sure you want to logout");
                            if(confirms){
                                document.querySelector("#lands").click();
                            }
                        }}><i class="fa-solid fa-right-from-bracket"></i>
                        Logout</p>
                    </nav>
                </div>
            </header>

            <div id="container">
                <h4>Repair and Rebuild</h4>
                <p>Get Some Discount of</p>
                <h1>40%</h1>
                <p>leverage on this and start work</p>

                <button onClick={() => {
                    document.querySelector("#repair").click();
                }}>Get</button>
            </div>

            <h1>AT YOUR SERVICE</h1>
            <div id="wrapper">
                <motion.section
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    transition={{delay:0.4}}
                >
                    <img src={Car} alt="" />
                    <h4>Buy Motto</h4>
                    <p>Find the perfect ride at the best price. Quality cars, trusted sellers, and smooth purchase experiences.</p>
                    <button onClick={() => {
                        const a = document.createElement("a");
                        a.href = "https://abdulmalik-car.vercel.app";
                        a.target = "_blank";
                        document.querySelector("body").appendChild(a);
                        document.querySelector("body").removeChild(a);
                        a.click();
                    }}>View</button>
                </motion.section>
                <motion.section
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    transition={{delay:0.8}}
                >
                    <img src={Car1} alt="" />
                    <h4>Car Repair</h4>
                    <p>Reliable repair servies from skilled technicians. Fast diagnostics and lasting fixes.</p>
                    <button onClick={() => {
                        document.querySelector("#repair").click();
                    }}>View</button>
                </motion.section>
                <motion.section
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    transition={{delay:1.2}}
                >
                    <img src={Car2} alt="" />
                    <h4>Car Wash</h4>
                    <p>Keep your car looking brand new with our premium wash and detailing servies.</p>
                    <button onClick={() => {
                        document.querySelector("#washed").click();
                    }}>View</button>
                </motion.section>
            </div>
            <Link to="/Repair" id="repair"/>
            <Link to="/Car-wash" id="washed"/>
            <Link to="/" id="lands"/>
        </div>
    )
}
export default Dashboard;