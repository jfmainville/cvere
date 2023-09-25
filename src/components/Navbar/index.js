import React, { useState } from "react";
import classes from "./index.module.scss";
import Avatar from "../../assets/images/avatar.png";
import { getAuth, signOut } from "firebase/auth";
import { logout } from "../../store/authActions";
import { useDispatch, useSelector } from "react-redux";
import Dropdown from "../Dropdown";
import Settings from "../Settings";

const Navbar = () => {
    const userProfilePhoto = useSelector(state => state.auth.userProfilePhoto);
    const dispatch = useDispatch();
    const [showDropdown, setShowDropdown] = useState(false);
    const [showSettings, setShowSettings] = useState(false);

    const onHandleShowProfileModal = () => {
        setShowSettings(!showSettings);
        setShowDropdown(false);
    };

    const onHandleLogout = async () => {
        const auth = getAuth();
        await signOut(auth);
        dispatch(logout());
    };

    return (
      <div className={classes.Navbar}>
          <div className={classes.Logo}>
              <div>CVEre</div>
          </div>
          <div className={classes.Settings}>
              {userProfilePhoto ? <img data-testid="profile" referrerPolicy="no-referrer"
                                       onClick={() => setShowDropdown(!showDropdown)}
                                       className={classes.UserProfilePhoto} src={userProfilePhoto} height="40"
                                       width="40" alt="Profile"/> : <img data-testid="profile"
                                                                         referrerPolicy="no-referrer"
                                                                         onClick={() => setShowDropdown(!showDropdown)}
                                                                         className={classes.UserProfilePhoto}
                                                                         src={Avatar} height="40"
                                                                         width="40" alt="Profile"/>
              }
          </div>
          {showDropdown &&
            <Dropdown items={[{
                "name": "Settings",
                "function": onHandleShowProfileModal
            },
                {
                    "name": "Logout",
                    "function": onHandleLogout
                }
            ]} setShowDropdown={setShowDropdown} showDropdown={showDropdown}/>
          }
          {showSettings && <Settings showModal={showSettings} setShowModal={setShowSettings}/>}
      </div>
    );
};

export default Navbar;