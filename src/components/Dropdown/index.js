import classes from "./index.module.scss";
import React from "react";

const Dropdown = ({ items, showDropdown, setShowDropdown }) => {
    return (
      <>
          <div onClick={() => setShowDropdown(!showDropdown)} className={classes.TransparentBackground}/>
          <div className={classes.Dropdown}>
              {items.map((item, index) =>
                <div key={index} onClick={item.function} className={classes.DropdownItem}>{item.name}</div>
              )}
          </div>
      </>
    );
};

export default Dropdown;