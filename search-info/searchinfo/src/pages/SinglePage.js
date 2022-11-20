import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Data from "../data.json";

const SinglePage = () => {
  const { myyid } = useParams();
  const [mydata, setmyData] = useState(
    Data.find((mydata) => mydata.myyid === myyid)
  );
  const [searchTerm, setSearchTerm] = useState("");

  const myyitem = Data[myyid - 1];
  return (
    <div>
      <p>{myyitem.Artist}</p>
      <h3>{myyitem.title}</h3>
      <h6>{myyitem.Snippet1}</h6>
      <h6>{myyitem.Snippet2}</h6>
    </div>
  );
};

export default SinglePage;
