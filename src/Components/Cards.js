import React from "react";
import {useSelector } from "react-redux";
import Card from "./Card";

export default function Cards() {
  const fill = useSelector((state) => state);
  const state = { loading: fill.List.loading, data: fill.List.data };
  return (
    <div className="cards">
      <div className="grid-card">
        {state.loading && "Loading..."}
        {!state.loading && state.data.length == 0 && "No launches Found"}
        {state.data.map((val, ind) => {
          return <Card val={val} fill={fill.filter} key={ind} />;
        })}
      </div>
    </div>
  );
}
