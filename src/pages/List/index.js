import React, { useEffect } from "react";
import Layout from "../../hoc/Layout";
import Table from "../../components/Table";
import Spinner from "../../components/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { fetchCVEs } from "../../store/cveActions";
import DateFilter from "@inovua/reactdatagrid-community/DateFilter";
import moment from "moment";

window.moment = moment

const columns = [
    {
        name: "id",
        header: "CVE Id",
        defaultFlex: 1,
        minWidth: 100,
    },
    {
        name: "description",
        header: "CVE Description",
        defaultFlex: 2,
        minWidth: 500,
    },
    {
        name: "vulnerabilityStatus",
        header: "Vulnerability Status",
        defaultFlex: 1,
        minWidth: 100
    },
    {
        name: "publishedDate",
        header: "PublishedDate",
        defaultFlex: 1,
        minWidth: 200,
        dateFormat: "YYYY-MM-DD",
        filterEditor: DateFilter,
        filterEditorProps: (props, { index }) => {
            return {
                dateFormat: "MM-DD-YYYY",
                placeholder: "Date"
            }
        },
        render: ({ value, cellProps: { dateFormat } }) =>
            moment(value).format(dateFormat),
    },
    {
        name: "lastModifiedDate",
        header: "Last Modified Date",
        defaultFlex: 1,
        minWidth: 200,
        dateFormat: "YYYY-MM-DD",
        filterEditor: DateFilter,
        filterEditorProps: (props, { index }) => {
            return {
                dateFormat: "MM-DD-YYYY",
                placeholder: "Date"
            }
        },
        render: ({ value, cellProps: { dateFormat } }) =>
            moment(value).format(dateFormat),
    }
]

const defaultFilterValue = [
    {
        name: "id",
        operator: "contains",
        type: "string",
        value: ""
    },
    {
        name: "description",
        operator: "contains",
        type: "string", value: ""
    },
    {
        name: "vulnerabilityStatus",
        operator: "contains",
        type: "string",
        value: ""
    },
    {
        name: "publishedDate",
        operator: "eq",
        type: "date",
        value: ""
    },
    {
        name: "lastModifiedDate",
        operator: "eq",
        type: "date",
        value: ""
    },

];
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
            defaultFilterValue={defaultFilterValue}
        />
    </Layout>);
}

export default List;