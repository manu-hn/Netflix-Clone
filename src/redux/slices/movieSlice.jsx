import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    moviesInfo: [],
    trailer: null,
    popularMovies: [],
    topRatedMovies: [],
    upcomingMovies: [],
    searchedMovies: []
}


const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.moviesInfo = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailer = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addSearchedMovies: (state, action) => {
            state.searchedMovies = action.payload;
        }
    },
});

export const { addNowPlayingMovies, addTrailerVideo,
    addPopularMovies, addTopRatedMovies,
    addUpcomingMovies, addSearchedMovies } = movieSlice.actions;
export default movieSlice.reducer;
