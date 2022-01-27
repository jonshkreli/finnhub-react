import {combineReducers} from 'redux';
import chartReducer from "./chartReducer";

//Combine all the sub reducers
const rootReducer = combineReducers({
    chartReducer
})

export default rootReducer
