import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import cveSlice from "./cveSlice";
import uiSlice from "./uiSlice";

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        cve: cveSlice.reducer,
        ui: uiSlice.reducer
    }
});

export default store;