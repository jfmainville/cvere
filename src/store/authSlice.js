import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isAuthenticated: false,
        userDisplayName: null,
        userEmailAddress: null,
        userProfilePhoto: null
    },
    reducers: {
        authenticate (state, action) {
            const userDisplayName = action.payload.displayName;
            const userEmailAddress = action.payload.emailAddress;
            const userProfilePhoto = action.payload.profilePhoto;

            if (userEmailAddress) {
                state.isAuthenticated = true;
                state.userDisplayName = userDisplayName;
                state.userEmailAddress = userEmailAddress;
                state.userProfilePhoto = userProfilePhoto;
            }
        },
        createUser (state, action) {
            const userEmailAddress = action.payload.emailAddress;

            if (userEmailAddress) {
                state.userEmailAddress = userEmailAddress;
            }
        },
        logout (state) {
            state.isAuthenticated = false;
            state.userDisplayName = "";
            state.userEmailAddress = "";
        },
    }
});

export const authActions = authSlice.actions;

export default authSlice;
