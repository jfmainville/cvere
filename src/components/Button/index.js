import classes from "./index.module.scss";
import { useState } from "react";

const Button = ({
    handleOnClick,
    buttonText,
    textColor,
    backgroundColor,
    borderColor
}) => {
    const [buttonHover, setButtonHover] = useState(false);

    const buttonBaseStyle = {
        color: textColor && textColor,
        backgroundColor: backgroundColor && backgroundColor,
        borderColor: borderColor && borderColor
    };

    const buttonHoverStyle = {
        color: backgroundColor,
        backgroundColor: textColor,
        borderColor: backgroundColor
    };

    return (
      <button onClick={handleOnClick}
              onMouseEnter={() => setButtonHover(true)}
              onMouseLeave={() => setButtonHover(false)}
              style={buttonHover ? buttonHoverStyle : buttonBaseStyle}
              className={classes.Button}>{buttonText}</button>
    );
};

export default Button;