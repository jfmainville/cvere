import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: "ui",
    initialState: {
        isLoading: true,
        errorMessage: ""
    },
    reducers: {
        loading (state, action) {
            state.isLoading = action.payload.isLoading;
        },
        setErrorMessage (state, action) {
            state.errorMessage = action.payload.errorMessage;
        },
        resetErrorMessage (state) {
            state.errorMessage = "";
        }
    }
});

export const uiActions = uiSlice.actions;

export default uiSlice;