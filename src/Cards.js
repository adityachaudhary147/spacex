import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "./Card";

export default function Cards() {
  const fill = useSelector((state) => state);
  const [state, setState] = useState({ isloading: false, data: [] });
  const url = `https://api.spacexdata.com/v3/launches?launch_year=${fill.year}&launch_success=${fill.launch}&land_success=${fill.land}`;
  async function hello() {
    setState(() => ({ loading: true, data: [] }));
    const res = await fetch(url);
    const data = await res.json();
    setState(() => ({ loading: false, data: data }));
  }
  useEffect(() => {
    hello();
  }, [fill]);
  return (
    <div className="cards">
      {state.loading && "Loading..."}
      <div className="grid-card">
        {!state.loading && state.data.length == 0 && "No launches Found"}
        {state.data.map((val, ind) => {
          return <Card val={val} fill={fill} key={ind} />;
        })}
      </div>
    </div>
  );
}
