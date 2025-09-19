import "./CarRepair.css";
import React, { useState } from "react";
import Logo from "./Assets/image 783.svg";

function CarRepair() {
  const [query, setQuery] = useState("");
  const [solution, setSolution] = useState(null);
  const [image, setImage] = useState(null);

  const UNSPLASH_KEY = "ZyWh46NxJRg3spHTi19WjwpEB90pS5JKUxGVhT6t5Fk";

  const handleSearch = async () => {
    if (!query.trim()) return;

    try {
      const ddgRes = await fetch(
        `https://api.duckduckgo.com/?q=${encodeURIComponent(query)}&format=json&pretty=1`
      );
      const ddgData = await ddgRes.json();

      let answer =
  ddgData.Abstract ||
  (ddgData.RelatedTopics?.[0]?.Text ?? "") ||
  ` Here are some general troubleshooting tips:

1. Engine Overheating – Check the coolant level, radiator, thermostat, and water pump. Low coolant or a faulty thermostat can often cause overheating.
2. Car Won’t Start – Inspect the battery terminals for corrosion, ensure the battery has charge, and check the starter motor or ignition system.
3. Brake Problems – Squeaking usually means worn brake pads, while grinding could mean damage to the rotors.
4. Strange Noises – Rattling or knocking sounds may indicate loose parts, suspension wear, or engine issues.
5. Warning Lights – If your dashboard lights up (like the “Check Engine” light), get a diagnostic scan to read the error codes.

If the problem continues, it is recommended to consult a professional mechanic for a proper inspection and repair.`;


      setSolution(answer);

      const imgRes = await fetch(
        `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
          query
        )}&client_id=${UNSPLASH_KEY}&per_page=1`
      );
      const imgData = await imgRes.json();

      if (imgData.results.length > 0) {
        setImage(imgData.results[0].urls.small);
      } else {
        setImage(null);
      }
    } catch (err) {
      console.error("Error fetching:", err);
      setSolution("Something went wrong. Please try again.");
      setImage(null);
    }
  };

  return (
    <div id="repairs">
        <header>
        <h4>
            <img src={Logo} alt="LOGO" />
            CAR REPAIR
        </h4>
        <div>
            <h4>
                <i class="fa-solid fa-user"></i>
                    Hi, ABDULMALIK
            </h4>
            <nav>
                <p><i class="fa-solid fa-user"></i> Profile</p>
                <p><i class="fa-solid fa-right-from-bracket"></i>
                Logout</p>
            </nav>
        </div>
    </header>
    <div id="carRepair">
      <h1>Car Problem Diagnosis</h1>
        <nav>
            <input
                type="text"
                placeholder="Enter your car problem..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button
                onClick={handleSearch}
            >
                Search
            </button>
        </nav>

      {solution && (
        <div id="solution">
          <h2>Solution</h2>
          <p>{solution}</p>
          {image && (
            <img src={image} alt="Car repair" />
          )}
        </div>
      )}
    </div>
    </div>
  );
}

export default CarRepair;
