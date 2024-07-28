import { combineReducers } from "redux";
import { incrReducer } from "./Reducer";
import { decrReducer } from "./Reducer";

export let rootReducer=combineReducers({
    increment:incrReducer,
    decrement:decrReducer
})
// combineReducer method accept an object ,each key/value pair of this object corresponds to a reducer.
// state={increment:{num:0}}; internally it store like this
// we can acces like (console.log(state.increment.num)) i will acces in Increment.jsx inside useSelector,you go and see