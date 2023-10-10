import Login from "./pages/Login";
import { initializeApp } from "firebase/app";
import { connectAuthEmulator, getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { firebaseConfig } from "./configs/firebase";
import { Route, Routes, useMatch, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authenticate } from "./store/authActions";
import PrivateRoutes from "./utils/privateRoutes";
import { loading } from "./store/uiActions";
import Spinner from "./components/Spinner";
import Signup from "./pages/Signup";
import List from "./pages/List";
import Dashboard from "./pages/Dashboard";

function App () {
    const isLoading = useSelector(state => state.ui.isLoading);
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userLogin = useMatch("/login");

    useEffect(() => {
        initializeApp(firebaseConfig);

        const auth = getAuth();
        if (process.env.NODE_ENV === "development1") {
            connectAuthEmulator(auth, "http://localhost:9099", { disableWarnings: true });
            dispatch(authenticate({ user: { displayName: "Test User", email: "test@gmail.com", photoUrl: "" } }));
            dispatch(loading(false));
            if (isAuthenticated && userLogin) {
                navigate("/dashboard");
            }
        } else {
            onAuthStateChanged(auth, (user) => {
                dispatch(authenticate({ user: user }));
                dispatch(loading(false));
                if (isAuthenticated && userLogin) {
                    navigate("/dashboard");
                }
            });
        }
    }, [isLoading, isAuthenticated]);

    if (isLoading) {
        return <Spinner/>;
    }

    return (
      <Routes>
          <Route element={<PrivateRoutes/>}>
              <Route path="/" element={<List/>}/>
              <Route path="/dashboard" element={<Dashboard/>}/>
          </Route>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
      </Routes>
    );
}

export default App;
