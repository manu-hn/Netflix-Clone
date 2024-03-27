import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    userInfo: [],
}

const userSLice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            state.isLoading = false;
            state.userInfo = action.payload;
        },
        logoutUser: (state) => {
            state.isLoading = false;
            state.userInfo = null;
        }
    }

});


export const { loginUser, logoutUser } = userSLice.actions;
export default userSLice.reducer;