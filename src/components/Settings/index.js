import Modal from "../Modal";
import classes from "./index.module.scss";
import Profile from "./Profile";
import { useState } from "react";
import { useSelector } from "react-redux";

const Settings = ({ showModal, setShowModal }) => {
    const [showSection, setShowSection] = useState(0);
    const userEmailAddress = useSelector(state => state.auth.userEmailAddress);
    const userDisplayName = useSelector(state => state.auth.userDisplayName);
    const userProfilePhoto = useSelector(state => state.auth.userProfilePhoto);

    return (
      <Modal title="Settings" showModal={showModal} setShowModal={setShowModal}>
          <div className={classes.Container}>
              <section className={classes.MenuSection}>
                  <div className={classes.MenuItem} style={{ backgroundColor: showSection === 0 && "var(--active)" }}
                       onClick={() => setShowSection(0)}>Profile
                  </div>
              </section>
              <section className={classes.ContentSection}>
                  {showSection === 0 &&
                    <Profile profileEmailAddress={userEmailAddress} profileDisplayName={userDisplayName}
                             profilePhotoUrl={userProfilePhoto}/>}
              </section>
          </div>
      </Modal>
    );
};

export default Settings;