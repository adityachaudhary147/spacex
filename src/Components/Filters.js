import React, { useEffect } from "react";
import Filter from "./Filter";
import "../CSS/Filters.css";
import { fetchList } from "../Redux/Reducers/flightList";
import { useDispatch } from "react-redux";
export default function Filters() {
  const dispatch = useDispatch();
  const years = [
    2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017,
    2018, 2019, 2020, 2021, 2022,
  ];
  useEffect(() => {
    dispatch(fetchList());
  });
  return (
    <div className="filters">
      <div className="filter-wid">
        <div className="filter-super-heading">Filters</div>
        <div className="filter-heading"> Launch year </div>
        <div className="filter-grid">
          {years.map((val) => (
            <Filter year={String(val)} key={val} />
          ))}
        </div>
        <div className="filter-heading"> Successful Launch </div>
        <div className="filter-grid">
          <Filter launch="true" key="t-launch" />
          <Filter launch="false" key="f-launch" />
        </div>
        <div className="filter-heading"> Successful Landing </div>
        <div className="filter-grid">
          <Filter land="true" key="t-land" />
          <Filter land="false" key="f-land" />
        </div>
      </div>
    </div>
  );
}
