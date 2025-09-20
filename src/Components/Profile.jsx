import "./Profile.css";
import { Link } from "react-router-dom";
import Location from "./Assets/Frame 1618878162 (1).svg";
import Group from "./Assets/Group.svg";

function Profile(){
    function continues(){
        document.querySelector("#location").style.display = "none";
        document.querySelector("#Profiles").style.display = "flex";

    }
    function conti(){
        const use = document.querySelector("#name").value;
        if(document.querySelector("#name").value.length > 0 && document.querySelector("#motto").value.length > 0){
            document.querySelector("#dash").click();
            window.sessionStorage.setItem("user", use);
        }else{
            alert("Enter your info");
        }
    }
    return(
        <div id="profile">
            <div id="location">
                <h1>Let us create the best Car Solution!</h1>
                <p>We bridge solution from experts</p>
                <img src={Location} alt="location" />
                <button onClick={continues}>Continue</button>
            </div>

            <div id="Profiles">
                <h1>Complete Your Profile! </h1>
                <p>Fill up the whole pages and let’s have your details to know what you will see.</p>
                <img src={Group} alt="" />
                <form onSubmit={(e) => e.preventDefault()}>
                    <nav>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="Full Name" />
                    </nav>
                    <nav>
                        <label htmlFor="name">Date of Birth</label>
                        <input type="text" id="date" placeholder="MM/DD/YY" />
                    </nav>
                    <nav>
                        <label htmlFor="name">Type of Motto</label>
                        <input type="text" id="motto" placeholder="Brand of Your Motto" />
                    </nav>
                    <nav>
                        <button onClick={conti}>Continue</button>
                    </nav>
                </form>
            </div>
            <Link to="/Dashboard" id="dash"/>
        </div>
    )
}
export default Profile;