import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    moviesInfo: [],
    trailer: null,
}


const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.moviesInfo = [...state.moviesInfo, ...action.payload];
        },
        addTrailerVideo : (state, action) => {
            state.trailer = action.payload;
        }
    },
});

export const { addNowPlayingMovies, addTrailerVideo } = movieSlice.actions;
export default movieSlice.reducer;
