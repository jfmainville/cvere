import classes from "./index.module.scss";

const Spinner = () => {
    return (
      <div className={classes.Container}>
          <div className={classes.Spinner} data-testid="spinner"/>
      </div>
    );
};

export default Spinner;