import { combineReducers } from "redux";
import flightList from './flightList';
import filterBy from './filterBy';

export default combineReducers(
    {List:flightList,filter:filterBy}
);