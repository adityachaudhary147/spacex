import { MODIFY_LAND, MODIFY_LAUNCH, MODIFY_YEAR } from "../Actions/types";

const initFilter = {
    year: "",
    launch: "",
    land: ""
  };
export default function filterBy(state = initFilter, action){
    if (action.type == MODIFY_YEAR) {
      return { year: action.value, land: state.land, launch: state.launch };
    } else if (action.type == MODIFY_LAUNCH) {
      return { launch: action.value, year: state.year, land: state.land };
    } else if (action.type == MODIFY_LAND) {
      return { land: action.value, launch: state.launch, year: state.year };
    }
    return state;
  }