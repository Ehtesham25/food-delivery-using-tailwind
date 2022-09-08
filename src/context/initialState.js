import { fetchUser } from "../utils/fetchUser";

const userInfo= fetchUser()
export const initialState = {
    user: userInfo
}