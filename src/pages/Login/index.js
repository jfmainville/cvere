import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authenticateBasic, authenticateGitHub, authenticateGoogle } from "../../store/authActions";
import classes from "./index.module.scss";
import { Link } from "react-router-dom";
import { GoogleLoginButton } from "../../components/SocialLoginButtons";

const Login = () => {
    const [userEmailAddress, setUserEmailAddress] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const errorMessage = useSelector(state => state.ui.errorMessage);
    const dispatch = useDispatch();

    const onHandleGoogleLogin = async () => {
        dispatch(authenticateGoogle());
    };

    const onHandleGitHubLogin = async () => {
        dispatch(authenticateGitHub());
    };

    const onHandleBasicLogin = async (event) => {
        event.preventDefault();
        if (userEmailAddress.length > 3 && userPassword.length > 3) {
            dispatch(authenticateBasic({ email: userEmailAddress, password: userPassword }));
        }
    };

    return (
      <div className={classes.Container}>
          <div className={classes.Login}>
              <GoogleLoginButton onHandleClick={onHandleGoogleLogin}/>
              <h2 className={classes.Separator}><span className={classes.SeparatorText}>or</span></h2>
              <form className={classes.LoginForm}>
                  <input className={classes.Input} type="email" defaultValue={userEmailAddress}
                         onChange={(event) => setUserEmailAddress(event.target.value)} placeholder="Email"/>
                  <input className={classes.Input} type="password" defaultValue={userPassword}
                         onChange={(event) => setUserPassword(event.target.value)} placeholder="Password"/>
                  <Link className={classes.ForgotPassword} to={"/forgot"}>Forgot password?</Link>
                  <div className={classes.ErrorMessage}>
                      {errorMessage}
                  </div>
                  <input className={classes.LoginButton} type="submit" data-testid="submit" value="Login"
                         onClick={onHandleBasicLogin}/>
                  <div className={classes.Signup}>
                      <p>or <Link to={"/signup"}>Signup</Link></p>
                  </div>
              </form>
          </div>
      </div>
    );
};

export default Login;