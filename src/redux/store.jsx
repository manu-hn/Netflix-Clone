import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./slices/userSlice.jsx";
import moviesReducer from "./slices/movieSlice.jsx";

const appStore = configureStore({
    reducer: {
        user: UserReducer,
        movies: moviesReducer,
    }
})

export default appStore;