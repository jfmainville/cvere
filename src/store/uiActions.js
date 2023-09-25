import { uiActions } from "./uiSlice";

export const loading = (isLoading) => {
    return async (dispatch) => {
        try {
            dispatch(
              uiActions.loading({
                  isLoading
              })
            );
        } catch (error) {
            throw new Error("Unable to update the loading ui state");
        }
    };
};

export const setErrorMessage = (errorMessage) => {
    return async (dispatch) => {
        try {
            dispatch(
              uiActions.setErrorMessage({
                  errorMessage
              })
            );
        } catch (error) {
            throw new Error("Unable to set the errorMessage state");
        }
    };
};

export const resetErrorMessage = (isLoading) => {
    return async (dispatch) => {
        try {
            dispatch(
              uiActions.resetErrorMessage()
            );
        } catch (error) {
            throw new Error("Unable to reset the errorMessage state");
        }
    };
};
