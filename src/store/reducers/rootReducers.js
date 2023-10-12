//gom lại những reducer khác
import appReducer from "./appReducer";
import {combineReducers} from "redux";
const rootReducer = combineReducers({
    app: appReducer,
})
export default rootReducer