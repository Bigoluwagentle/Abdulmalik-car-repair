import "./CarWash.css";
import React, { useState } from "react";
import Logo from "./Assets/image 783.svg";
const userName = window.sessionStorage.getItem("user");
function NearbyCarWash() {
  const [location, setLocation] = useState(null);
  const [carWashes, setCarWashes] = useState([]);
  const [loading, setLoading] = useState(false);

  const findCarWashes = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }

    setLoading(true);

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        setLocation({ latitude, longitude });

        const overpassQuery = `
          [out:json][timeout:25];
          (
            node["amenity"="car_wash"](around:100000,${latitude},${longitude});
            way["amenity"="car_wash"](around:100000,${latitude},${longitude});
            relation["amenity"="car_wash"](around:100000,${latitude},${longitude});
          );
          out center;
        `;

        try {
          const res = await fetch("https://overpass-api.de/api/interpreter", {
            method: "POST",
            body: overpassQuery,
          });

          const data = await res.json();

          if (data.elements.length === 0) {
            setCarWashes([]);
          } else {
            const enriched = await Promise.all(
              data.elements.map(async (wash) => {
                const lat = wash.lat || wash.center?.lat;
                const lon = wash.lon || wash.center?.lon;

                try {
                  const addrRes = await fetch(
                    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
                  );
                  const addrData = await addrRes.json();

                  return {
                    ...wash,
                    address: addrData.display_name || "Address not available",
                  };
                } catch {
                  return { ...wash, address: "Address lookup failed" };
                }
              })
            );

            setCarWashes(enriched);
          }
        } catch (err) {
          console.error("Error fetching car washes:", err);
          alert("Error fetching data. Try again later.");
        }

        setLoading(false);
      },
      (err) => {
        console.error(err);
        alert("Could not get your location.");
        setLoading(false);
      }
    );
  };

  return (
    <div id="wash">
        <header>
            <h4>
                <img src={Logo} alt="LOGO" />
                CAR REPAIR
            </h4>
            <div>
                <h4>
                    <i class="fa-solid fa-user"></i>
                        Hi, {userName}
                </h4>
                <nav>
                    <p><i class="fa-solid fa-user"></i> Profile</p>
                    <p><i class="fa-solid fa-right-from-bracket"></i>
                    Logout</p>
                </nav>
            </div>
        </header>
        <div id="washs">
        <h1>Find Nearby Car Wash</h1>
        <button
            onClick={findCarWashes}
        >
            Find Car Washes Near Me
        </button>

        {loading && <p>Searching nearby car washes...</p>}

        {location && (
            <p>
            Your Location: {location.latitude.toFixed(4)},{" "}
            {location.longitude.toFixed(4)}
            </p>
        )}

        <ul>
            {carWashes.length > 0 ? (
            carWashes.map((wash) => {
                const lat = wash.lat || wash.center?.lat;
                const lon = wash.lon || wash.center?.lon;
                return (
                <li key={wash.id}>
                    {wash.tags?.name || "Unnamed Car Wash"} <br />
                    {wash.address} <br />
                    Lat: {lat?.toFixed(4)}, Lon: {lon?.toFixed(4)} <br />
                    <a
                    href={`https://www.google.com/maps/search/?api=1&query=${lat},${lon}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Open in Maps
                    </a>
                </li>
                );
            })
            ) : (
            !loading && (
                <p>
                    Click on the button to get the nearby Car wash.
                </p>
            )
            )}
        </ul>
        </div>
    </div>
    
  );
}

export default NearbyCarWash;
