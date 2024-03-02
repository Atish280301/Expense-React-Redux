import ChangeNumber from "./Reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    changeNumber: ChangeNumber
});

export default rootReducer;
