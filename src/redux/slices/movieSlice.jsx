import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movies',
    initialState: { moviesInfo: [] },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.moviesInfo = [...state.moviesInfo, ...action.payload];
        }
    },
});

export const { addNowPlayingMovies } = movieSlice.actions;
export default movieSlice.reducer;
