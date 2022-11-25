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
    // <div>
    //   {/* <p>{myyitem.Artist}</p>
    //   <h3>{myyitem.title}</h3>
    //   <h6>{myyitem.Snippet1}</h6>
    //   <h6>{myyitem.Snippet2}</h6> */}
    // </div>
    <div className={"container3"}>
      <div className={"desktop1"}>
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ddfb93e5-cbbc-49b3-8407-b59c94ca35a5/acd569c2-f214-4fc8-be6d-bdd94817ca62?org_if_sml=114516"
          alt="Rectangle112"
          className={"rectangle1"}
        />
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ddfb93e5-cbbc-49b3-8407-b59c94ca35a5/fa387da7-eff8-42f5-8c48-8f1b6aac2bbb?org_if_sml=111765"
          alt="Rectangle4110"
          className={"rectangle4"}
        />
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ddfb93e5-cbbc-49b3-8407-b59c94ca35a5/54eb190d-f374-46f5-a32b-767b4f43dc1e?org_if_sml=17798"
          alt="Rectangle216"
          className={"rectangle2"}
        />
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ddfb93e5-cbbc-49b3-8407-b59c94ca35a5/0af843a2-7af0-4f8d-a28f-762e6c7cfafd?org_if_sml=17798"
          alt="Rectangle317"
          className={"rectangle3"}
        />
        <span className={"text"}>
          <span>Lyrics</span>
        </span>
        <span className={"text02"}>
          <span>Inside Scope</span>
        </span>
        <span className={"text04"}>
          <span>Comments</span>
        </span>
        <span className={"text06"}>
          <span>{myyitem.Artist}</span>
        </span>
        <span className={"text08"}>
          <span>Yapma N’olursun</span>
        </span>
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ddfb93e5-cbbc-49b3-8407-b59c94ca35a5/42ac5f78-fbb5-4cd8-9459-03b9a23a0791?org_if_sml=12193"
          alt="Ellipse1111"
          className={"ellipse1"}
        />
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ddfb93e5-cbbc-49b3-8407-b59c94ca35a5/10e17154-4316-48fe-8cd4-57f1b359597f?org_if_sml=12193"
          alt="Ellipse2112"
          className={"ellipse2"}
        />
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ddfb93e5-cbbc-49b3-8407-b59c94ca35a5/e039667d-68d1-478a-b4a0-5a7436a490cd?org_if_sml=12193"
          alt="Ellipse3113"
          className={"ellipse3"}
        />
        <span className={"text10"}>
          <span> &nbsp;2020</span>
        </span>
        <span className={"text12"}>
          <span>173K</span>
        </span>
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ddfb93e5-cbbc-49b3-8407-b59c94ca35a5/6324ef37-40f9-4dcf-8681-7d7faf635eb0?org_if_sml=13814"
          alt="youtubeLogo1217"
          className={"youtube-logo1"}
        />
      </div>
    </div>
  );
};

export default SinglePage;
