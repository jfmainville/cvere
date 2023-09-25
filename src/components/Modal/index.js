import classes from "./index.module.scss";

const Modal = ({ title, showModal, setShowModal, children }) => {
    return (
      <div className={classes.Container}>
          <div onClick={() => setShowModal(!showModal)} className={classes.TransparentBackground}/>
          <div className={classes.Modal}>
              <div className={classes.Menu}>
                  <div className={classes.Title}>{title}</div>
                  <button className={classes.Button} onClick={() => setShowModal(!showModal)}>X</button>
              </div>
              <div>
                  {children}
              </div>
          </div>
      </div>
    );
};

export default Modal;