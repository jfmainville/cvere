import React from 'react';
import Layout from "../../hoc/Layout";
import VerticalBar from "../../components/Charts/VerticalBar";
import { useSelector } from "react-redux";
import classes from "./index.module.scss";

const Dashboard = () => {
    const cves = useSelector(state => state.cve.cves)

    return (
        <Layout>
            <div className={classes.Container}>
                <VerticalBar cves={cves}/>
            </div>
        </Layout>
    );
}

export default Dashboard;