import React, { useState } from "react";
import "./App.css";
import Data from "./data.json";
import yt from "./icons/youtubeLogo.png";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="container">
      <h1>Information</h1>
      <div className="inputContainer">
        <input
          className="search"
          type="text"
          placeholder="Enter"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="dataContainer">
        {Data.filter((val) => {
          if (searchTerm == "") return val;
          //IT SEARCHES BY NAME AND ARTIST
          else if (
            val.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            val.Artist.toLowerCase().includes(searchTerm.toLowerCase())
          )
            return val;
        }).map((val) => {
          return (
            <div className="data" key={val.id}>
              <img src={val.image} alt="" />
              <h3>{val.title}</h3>
              <h5>{val.Artist}</h5>
              <h6>{val.Snippet1}</h6>
              <h6>{val.Snippet2}</h6>
              {/* Youtube Logo Start*/}
              <a href={val.Link}>
                <img id="ytlogo" src={yt} alt="" />
              </a>

              {/* Youtube Logo End*/}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
