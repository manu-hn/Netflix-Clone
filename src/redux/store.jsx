import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./slices/userSlice.jsx";
import moviesReducer from "./slices/movieSlice.jsx";
import openAiReducer from "./slices/openAiSlice.jsx";
import configReducer from "./slices/configSlice.jsx";

const appStore = configureStore({
    reducer: {
        user: UserReducer,
        movies: moviesReducer,
        openAi: openAiReducer,
        config: configReducer,
    }
})

export default appStore;