import React, { useEffect, useState } from 'react';
import axios from "axios";
import Layout from "../../hoc/Layout";
import Table from "../../components/Table";
import Spinner from "../../components/Spinner";

const List = () => {
    const [cveList, setCveList] = useState([]);

    useEffect(() => {
        fetchCVEData()
    }, []);

    const fetchCVEData = async () => {
        const response = await axios.get("https://services.nvd.nist.gov/rest/json/cves/2.0?lastModStartDate=2023-09-18T13:00:00.000%2B01:00&lastModEndDate=2023-09-19T13:36:00.000%2B01:00")
        const vulnerabilities = response.data["vulnerabilities"]
        let today = new Date()
        let maxDate = new Date()
        maxDate.setDate(today.getDate() - 30)
        const response = await axios.get(`https://services.nvd.nist.gov/rest/json/cves/2.0?lastModStartDate=${maxDate.toISOString().replace("Z", "")}%2B01:00&lastModEndDate=${today.toISOString().replace("Z", "")}%2B01:00`)
        setCveList(vulnerabilities)
    }

    if (!cveList) {
        return (
            <Spinner/>
        )
    }

    return (
        <Layout>
            <Table
                cveTableHeaders={["CVE Id", "CVE Description", "Vulnerability Status", "Published Date", "Last Modified Date"]}
                cveTableData={cveList}
            />
        </Layout>
    );
}

export default List;