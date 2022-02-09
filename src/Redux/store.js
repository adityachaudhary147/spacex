import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './Reducers/index'

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = createStore(rootReducer,{List:{loading:false,data:[]},filter:{land:'',launch:'',year:''}}, composedEnhancer)
store.subscribe(()=>{
  console.log(store.getState());
})
export default store