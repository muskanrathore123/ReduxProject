import { createStore } from "redux";
import { rootReducer } from "./RootReducer";
export let store=createStore(rootReducer);
