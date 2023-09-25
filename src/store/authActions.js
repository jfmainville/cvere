import { authActions } from "./authSlice";
import {
    createUserWithEmailAndPassword,
    getAuth,
    GithubAuthProvider,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut
} from "firebase/auth";
import { resetErrorMessage, setErrorMessage } from "./uiActions";

export const authenticate = ({ user }) => {
    return async (dispatch) => {
        try {
            dispatch(
              authActions.authenticate({
                  displayName: user.displayName,
                  emailAddress: user.email,
                  profilePhoto: user.photoURL
              })
            );
        } catch (error) {
        }
    };
};

export const authenticateGoogle = () => {
    return async (dispatch) => {
        const authenticateGoogleData = async () => {
            const provider = new GoogleAuthProvider();
            const auth = getAuth();
            return await signInWithPopup(auth, provider);
        };

        try {
            const authData = await authenticateGoogleData();
            dispatch(
              authActions.authenticate({
                  displayName: authData.user.displayName,
                  emailAddress: authData.user.email,
                  profilePhoto: authData.user.photoURL
              })
            );
            dispatch(resetErrorMessage());
        } catch (error) {
            dispatch(setErrorMessage("unable to authenticate with the Google provider"));
        }
    };
};

export const authenticateGitHub = () => {
    return async (dispatch) => {
        const authenticateGitHubData = async () => {
            const provider = new GithubAuthProvider();
            const auth = getAuth();
            return await signInWithPopup(auth, provider);
        };

        try {
            const authData = await authenticateGitHubData();
            dispatch(
              authActions.authenticate({
                  displayName: authData.user.displayName,
                  emailAddress: authData.user.email,
                  profilePhoto: authData.user.photoURL
              })
            );
        } catch (error) {
            dispatch(setErrorMessage("unable to authenticate with the GitHub provider"));
        }
    };
};

export const authenticateBasic = ({ email, password }) => {
    return async (dispatch) => {
        const authenticateBasicData = async () => {
            const auth = getAuth();
            return await signInWithEmailAndPassword(auth, email, password);
        };

        try {
            const authData = await authenticateBasicData();
            dispatch(
              authActions.authenticate({
                  emailAddress: authData.user.email
              })
            );
            dispatch(resetErrorMessage());
        } catch (error) {
            dispatch(setErrorMessage("invalid username or password"));
        }
    };
};

export const createBasicUser = ({ email, password }) => {
    return async (dispatch) => {
        const createBasicUserData = async () => {
            const auth = getAuth();
            return await createUserWithEmailAndPassword(auth, email, password);
        };

        try {
            const authData = await createBasicUserData();
            dispatch(
              authActions.createUser({
                  emailAddress: authData.user.email
              })
            );
        } catch (error) {
            dispatch(setErrorMessage("unable to create the user"));
        }
    };
};

export const logout = () => {
    return (dispatch) => {
        try {
            const logout = async () => {
                const auth = getAuth();
                await signOut(auth);
            };

            logout();
            dispatch(
              authActions.logout()
            );
        } catch (error) {
            dispatch(setErrorMessage("unable to logout the user"));
        }
    };
};
