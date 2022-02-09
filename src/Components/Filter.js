import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  modifyLand,
  modifyLaunch,
  modifyYear,
} from "../Redux/Actions/filterBy";
import { emptyList } from "../Redux/Actions/flightList";
import { MODIFY_LAND } from "../Redux/Actions/types";
import { fetchList } from "../Redux/Reducers/flightList";
export default function Filter({ year, land, launch }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.filter);
  var selected = "";
  if (year != "" && state.year == year) {
    selected = "highlight";
  }
  if (land != "" && state.land == land) {
    selected = "highlight";
  }
  if (launch != "" && state.launch == launch) {
    selected = "highlight";
  }
  function handleClick() {
    dispatch(emptyList());
    if (year && year != undefined) {
      if (year == state.year) {
        dispatch(modifyYear(""));
      } else dispatch(modifyYear(year));
    }
    if (land == "true" || land == "false") {
      if (land == state.land) dispatch(modifyLand(""));
      else dispatch(modifyLand(land));
    }
    if (launch == "true" || launch == "false") {
      if (launch == state.launch) dispatch(modifyLaunch(""));
      else dispatch(modifyLaunch(launch));
    }
    dispatch(fetchList());
    return;
  }
  return (
    <div className="filter">
      <div className={selected + " filter-in"} onClick={handleClick}>
        {year && year} {land && land} {launch && launch}
      </div>
    </div>
  );
}
