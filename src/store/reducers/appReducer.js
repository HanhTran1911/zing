// bản chất của reducer là 1 hàm
// lấy từ actiontype
import actionTypes from "../actions/actionTypes";

const initState = {
    homeData:[],
    test:'123'
}
const appReducer = (state = initState, action) => {
switch (action.type) {
    case actionTypes.GET_HOME:
        
        break;

    default:
    return state
}
}
export default appReducer