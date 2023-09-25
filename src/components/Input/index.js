import classes from "./index.module.scss";

const Input = ({
    placeholderName,
    inputType,
    inputWidth,
    inputLabel,
    inputDefaultValue,
    inputOnChangeHandler,
    inputOnBlurHandler
}) => {
    const inputWidthConfig = inputWidth ? inputWidth : "10rem";

    return (
      <>
          <label className={classes.InputLabel}>{inputLabel}</label>
          <input
            className={classes.Input}
            type={inputType}
            placeholder={placeholderName}
            defaultValue={inputDefaultValue}
            onChange={inputOnChangeHandler}
            onBlur={inputOnBlurHandler}
            style={{ width: inputWidthConfig }}
          />
      </>
    );
};

export default Input;