import classes from "./index.module.scss";
import Input from "../../Input";
import Button from "../../Button";

const Profile = ({ profileEmailAddress, profileDisplayName, profilePhotoUrl }) => {
    return (
      <div className={classes.Container}>
          <div className={classes.ProfilePhotoSection}>
              <img className={classes.ProfilePhoto} src={profilePhotoUrl} alt="Profile" referrerPolicy="no-referrer"/>
              <form>
                  <input type="file" id="myFile" name="filename"/>
              </form>
          </div>
          <form className={classes.Form}>
              <Input inputType="email" inputLabel="Email" inputWidth="20rem" inputDefaultValue={profileEmailAddress}/>
              <Input inputType="text" inputLabel="Name" inputWidth="20rem" inputDefaultValue={profileDisplayName}/>
          </form>
          <Button buttonText="Save"/>
      </div>
    );
};

export default Profile;