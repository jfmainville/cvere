import React, { useEffect } from "react";
import Layout from "../../hoc/Layout";
import Table from "../../components/Table";
import Spinner from "../../components/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { fetchCVEs } from "../../store/cveActions";
import moment from "moment";

window.moment = moment

const columns = [
    {
        field: "id",
        headerName: "CVE ID",
        flex: 2,
        minWidth: 200,
    },
    {
        field: "baseSeverity",
        headerName: "Base Severity",
        flex: 1,
        minWidth: 100,
    },
    {
        field: "description",
        headerName: "CVE Description",
        flex: 3,
        minWidth: 500,
    },
    {
        field: "vulnerabilityStatus",
        headerName: "Vulnerability Status",
        flex: 1,
        minWidth: 100
    },
    {
        field: "publishedDate",
        headerName: "Published Date",
        flex: 1,
        minWidth: 100,
        valueFormatter: params => moment(params?.value).format("YYYY-MM-DD"),
    },
    {
        field: "lastModifiedDate",
        headerName: "Last Modified Date",
        flex: 1,
        minWidth: 100,
        valueFormatter: params => moment(params?.value).format("YYYY-MM-DD"),
    }
]

const List = () => {
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

    return (<Layout>
        <Table
            cveTableHeaders={columns}
            cveTableData={cves}
        />
    </Layout>);
}

export default List;