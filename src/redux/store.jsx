import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./slices/userSlice.jsx";

const appStore = configureStore({
    reducer: {
        user: UserReducer,
    }
})

export default appStore;