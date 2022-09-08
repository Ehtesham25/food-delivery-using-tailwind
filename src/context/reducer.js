import { userTypes } from "./actionTypes";

const reducer = (state, action) => {
    switch (action.type) {
        case userTypes.SET_USER:
            localStorage.setItem("user", JSON.stringify(action.payload))
            return { ...state, user: action.payload }
        default:
            return state;
    }
}

export default reducer