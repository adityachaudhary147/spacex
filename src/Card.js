import React from "react";

export default function Card({ val, fill }) {
  return (
    <div className="card">
      <div className="imgdiv">
        <img className="img" src={val.links.mission_patch_small} />
      </div>{" "}
      <div className="item ">
        {val.mission_name}#{val.flight_number}
      </div>
      <div className="item mission-id">
        Mission id:{val.mission_id.map((val) => val)}
      </div>
      <div className="item l-year">launch Year: {val.launch_year}</div>{" "}
      <div className="item launch-s">
        launch success: {val.launch_success ? "true" : "false"}
      </div>
      <div className="item land-s">land success: {fill.land}</div>
    </div>
  );
}
