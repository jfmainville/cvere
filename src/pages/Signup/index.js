import React, { useState } from "react";
import { useDispatch } from "react-redux";
import classes from "./index.module.scss";
import { Link } from "react-router-dom";
import CloudGraphLogo from "../../assets/images/cloudgraph-logo.png";
import { createBasicUser } from "../../store/authActions";

const Signup = () => {
    const [userEmailAddress, setUserEmailAddress] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const dispatch = useDispatch();

    const onHandleCreateBasicUser = async (event) => {
        event.preventDefault();
        dispatch(createBasicUser({ email: userEmailAddress, password: userPassword }));
    };

    return (
      <div className={classes.Container}>
          <img className={classes.Logo} src={CloudGraphLogo} alt=""/>
          <div className={classes.Login}>
              <form className={classes.SignupForm}>
                  <input className={classes.Input} type="email" defaultValue={userEmailAddress}
                         onChange={(event) => setUserEmailAddress(event.target.value)} placeholder="Email"/>
                  <input className={classes.Input} type="password" defaultValue={userPassword}
                         onChange={(event) => setUserPassword(event.target.value)} placeholder="Password"/>
                  <input className={classes.SignupButton} type="submit" value="Signup"
                         onClick={onHandleCreateBasicUser}/>
                  <div className={classes.Signup}>
                      <p>back to <Link to={"/login"}>Login</Link></p>
                  </div>
              </form>
          </div>
      </div>
    );
};

export default Signup;