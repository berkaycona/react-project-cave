import React, { useState } from "react";
import Data from "../data.json";
import yt from "../icons/youtubeLogo.png";
import detailspagelogo from "../icons/meineitem.png";
import { Link } from "react-router-dom";

function Home({ title, Artist, Snippet1, Snippet2, myLink }) {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="container2 ">
      <h1>Information</h1>
      {/* bootstrap'te olan bir ayar yüzünden 2 olarak değiştirdim bunu */}
      <div className="inputContainer2">
        <input
          className="search"
          type="text"
          placeholder="Enter"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="dataContainer2">
        {Data.filter((val) => {
          if (searchTerm == "") return val;
          //IT SEARCHES BY NAME AND ARTIST
          else if (
            val.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            val.Artist.toLowerCase().includes(searchTerm.toLowerCase())
          )
            return val;
        }).map((val) => {
          var v = val.id;
          return (
            <div className="data2" key={val.id}>
              <img className="insideDataImage" src={val.image} alt="" />
              <h3>{val.title}</h3>
              <h5>{val.Artist}</h5>
              <h6>{val.Snippet1}</h6>
              <h6>{val.Snippet2}</h6>
              <div>
                {/* Youtube Logo Start*/}
                <a href={val.myLink}>
                  <img id="ytlogo" src={yt} alt="" />
                </a>
                {/* Youtube Logo End*/}

                {/* Single Page Start*/}
                <Link to={`/myitem/${v}`}>
                  <img id="ytlogo" src={detailspagelogo} alt="" />
                </Link>
                {/* Single Page End*/}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
