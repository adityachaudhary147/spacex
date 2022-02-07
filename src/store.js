import { createStore } from "redux";

const initFilter={
    year:'',
    launch:'',
    land:''
}
function filterby(state=initFilter,action)
{
    
    if(action.type=="modifyYear")
    {
        console.log(state,action);
        return {year:action.value,land:state.land,launch:state.launch};

    }
    else if (action.type=="modifyLaunch")
    {
        console.log(state,action);

        return {launch:action.value,year:state.year,land:state.land};
    }
    else if(action.type=="modifyLand")
    {
        console.log(state,action);
        return {land:action.value,launch:state.launch,year:state.year};
    }
    return state;
}
const store=createStore(filterby,{
    year:'',
    launch:'',
    land:''
});
store.subscribe(()=>{
    console.log(store.getState());
})
export {store};