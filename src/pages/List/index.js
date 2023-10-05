import React, { useEffect } from 'react';
import Layout from "../../hoc/Layout";
import Table from "../../components/Table";
import Spinner from "../../components/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { fetchCVEs } from "../../store/cveActions";

const List = () => {
    const cves = useSelector(state => state.cve.cves);
    const dispatch = useDispatch()

    useEffect(() => {
        let today = new Date()
        let maxDate = new Date()
        maxDate.setDate(today.getDate() - 30)
        dispatch(fetchCVEs(maxDate, today))
    }, []);

    if (!cves) {
        return (<Spinner/>)
    }

    return (<Layout>
            <Table
                cveTableHeaders={["CVE Id", "CVE Description", "Vulnerability Status", "Published Date", "Last Modified Date"]}
                cveTableData={cves}
            />
        </Layout>);
}

export default List;