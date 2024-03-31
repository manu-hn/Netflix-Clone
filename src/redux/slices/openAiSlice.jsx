import { createSlice } from "@reduxjs/toolkit";


const openAiSlice = createSlice({
    name: 'openAi',
    initialState: {
        showGptSearch: false,
    },

    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        }
    }

});


export const { toggleGptSearchView } = openAiSlice.actions;
export default openAiSlice.reducer;