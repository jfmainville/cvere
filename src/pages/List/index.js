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
        let today = new Date()
        let maxDate = new Date()
        maxDate.setDate(today.getDate() - 30)
        const response = await axios.get(`https://services.nvd.nist.gov/rest/json/cves/2.0?lastModStartDate=${maxDate.toISOString().replace("Z", "")}%2B01:00&lastModEndDate=${today.toISOString().replace("Z", "")}%2B01:00`)
        let vulnerabilities = response.data["vulnerabilities"]
        vulnerabilities.sort((a, b) => new Date(b.cve.lastModified) - new Date(a.cve.lastModified))

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