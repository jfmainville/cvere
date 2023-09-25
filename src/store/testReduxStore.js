import { combineReducers, configureStore } from "@reduxjs/toolkit";
import uiSlice from "./uiSlice";
import cveSlice from "./cveSlice";

const rootReducer = combineReducers({
    cve: cveSlice.reducer,
    ui: uiSlice.reducer
});

export const setupStore = preloadedState => {
    return configureStore({
        reducer: rootReducer,
        preloadedState
    });
};