import React from 'react';
import Layout from "../../hoc/Layout";
import VerticalBar from "../../components/Charts/VerticalBar";
import { useSelector } from "react-redux";

const Dashboard = () => {
    const cves = useSelector(state => state.cve.cves)

    return (
        <Layout>
            <VerticalBar cves={cves}/>
        </Layout>
    );
}

export default Dashboard;