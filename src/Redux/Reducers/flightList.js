import { requestList, responseList } from "../Actions/flightList";
import { EMPTY_LIST, REQUEST_LIST, RESPONSE_LIST } from "../Actions/types";

const initialState = {
  loading: false,
  data: [],
};
export default function flightList(state = initialState, action) {
  // omit reducer logic
  if (action.type == REQUEST_LIST) {
    return { ...state, loading: true };
  } else if (action.type == RESPONSE_LIST) {
    return {
      loading: false,
      data: action.payload,
    };
  } else if (action.type == EMPTY_LIST) {
    return { ...state, data: [] };
  }
  return state;
}

// Thunk function
export const fetchList = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const fill = state.filter;
    const url = `https://api.spacexdata.com/v3/launches?launch_year=${fill.year}&launch_success=${fill.launch}&land_success=${fill.land}`;
    dispatch(requestList());
    const res = await fetch(url);
    const data = await res.json();
    dispatch(responseList(data));
  };
};
