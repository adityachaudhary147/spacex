import { EMPTY_LIST, REQUEST_LIST, RESPONSE_LIST } from "./types";

export function requestList(){
    return {type:REQUEST_LIST};
}
export function responseList(payload){
    return {type:RESPONSE_LIST,payload:payload};
}
export function emptyList(){
    return {type:EMPTY_LIST};
}