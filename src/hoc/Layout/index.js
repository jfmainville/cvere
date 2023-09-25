import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import classes from "./index.module.scss";

const Layout = ({ children }) => {
    return (
      <div className={classes.Layout}>
          <Navbar/>
          <Sidebar/>
          <div className={classes.Content}>
              {children}
          </div>
      </div>
    );
};

export default Layout;