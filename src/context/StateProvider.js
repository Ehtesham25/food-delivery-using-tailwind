import { createContext, useReducer } from "react";

import { fetchUser } from "../utils/fetchUser";
import reducer from "./reducer";

const userInfo = fetchUser()
export const INITIAL_STATE = {
    user: userInfo,
    cartItems: [],
    error: "",
    isCartShow: false
}

export const UserContext = createContext(INITIAL_STATE);

export const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    return (
        <UserContext.Provider
            value={{
                state,
                dispatch,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

