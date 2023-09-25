import classes from "./index.module.scss";
import GoogleLogo from "../../assets/images/google-logo.png";
import GitHubLogo from "../../assets/images/github-logo.png";
import MicrosoftLogo from "../../assets/images/microsoft-logo.png";
import React from "react";

export const GoogleLoginButton = ({ onHandleClick }) => {
    return (
      <div className={classes.Button} onClick={onHandleClick}>
          <div className={classes.Logo}>
              <img src={GoogleLogo} height="30" alt=""/>
          </div>
          <div className={classes.Text}>Sign in with Google</div>
      </div>
    );
};

export const GitHubLoginButton = ({ onHandleClick }) => {
    return (
      <div className={classes.Button} onClick={onHandleClick}>
          <div className={classes.Logo}>
              <img src={GitHubLogo} height="30" alt=""/>
          </div>
          <div className={classes.Text}>Sign in with GitHub</div>
      </div>
    );
};

export const MicrosoftLoginButton = ({ onHandleClick }) => {
    return (
      <div className={classes.Button} onClick={onHandleClick}>
          <div className={classes.Logo}>
              <img src={MicrosoftLogo} height="30" alt=""/>
          </div>
          <div className={classes.Text}>Sign in with Microsoft</div>
      </div>
    );
};
