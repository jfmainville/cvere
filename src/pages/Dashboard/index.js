import React, { useEffect } from 'react';
import Layout from "../../hoc/Layout";
import VerticalBar from "../../components/Charts/VerticalBar";
import { useSelector, useDispatch } from "react-redux";
import classes from "./index.module.scss";
import DoughnutBar from "../../components/Charts/DoughnutBar";
import { fetchCVEs } from "../../store/cveActions";
import Spinner from "../../components/Spinner";

const Dashboard = () => {
    const startDate = useSelector(state => state.cve.startDate);
    const endDate = useSelector(state => state.cve.endDate)
    const cves = useSelector(state => state.cve.cves);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCVEs(startDate, endDate))
    }, [startDate, endDate]);

    if (!cves) {
        return (<Spinner/>)
    }

    return (
        <Layout>
            <div className={classes.Container}>
                <VerticalBar cves={cves}/>
                <DoughnutBar cves={cves} />
            </div>
        </Layout>
    );
}

export default Dashboard;