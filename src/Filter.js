import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Filter({ year, land, launch }) {
  const dispatch = useDispatch();
  const state=useSelector((state)=>state);
  var selected='';
  if(year!='' && state.year== year)
  {
    selected="highlight";
  }
  if(land!='' && state.land== land)
  {
    selected="highlight";
  }
  if(launch!='' && state.launch==launch)
  {
    selected="highlight";
  }
  function handleClick() {
    if (year && year != undefined)
    {
      if(year==state.year)
      {
        dispatch({ type: "modifyYear", value: '' });
      }
      else
      dispatch({ type: "modifyYear", value: year });
    }
      if (land == "true" || land == "false")
      {
        if(land==state.land)
        dispatch({type:"modifyLand",value:''});
        else
      dispatch({ type: "modifyLand", value: land });
      }
      if (launch == "true" || launch == "false") {
        if(launch==state.launch)
        dispatch({type:'modifyLaunch',value:''});
        else
      dispatch({ type: "modifyLaunch", value: launch });
    }
    return;
  }
  return (
    <div className="filter">
      <div className={selected+" filter-in"} onClick={handleClick}>
        {year && year} {land && land} {launch && launch}
      </div>
    </div>
  );
}
