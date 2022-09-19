import { userTypes } from "./actionTypes";
import { INITIAL_STATE } from "./StateProvider";


const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userTypes.SET_USER:
            localStorage.setItem("user", JSON.stringify(action.payload))
            return { ...state, user: action.payload }
        case userTypes.SET_CART_SHOW:
            return { ...state, isCartShow: !state.isCartShow }
        case userTypes.SET_ADD_TO_CART:
            return { ...state, cartItems: [...state.cartItems, action.payload] }
        case userTypes.SET_QTY:
            return { ...state, cartItems: action.payload }
        case userTypes.SET_CLEAR_CART:
            return { ...state, cartItems: [] }
        default:
            return state;
    }
};

export default reducer