import React, { useEffect } from 'react';
import Layout from "../../hoc/Layout";
import Table from "../../components/Table";
import Spinner from "../../components/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { fetchCVEs } from "../../store/cveActions";
import SelectFilter from "@inovua/reactdatagrid-community/SelectFilter";

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
        filterEditor: SelectFilter,
        filterEditorProps: {
            multiple: true,
            wrapMultiple: false,
            dataSource: ['Google Workspace', 'Google Cloud Platform'].map(c => {
                return { id: c, label: c }
            }),
        }
    },
    {
        name: "vulnerabilityStatus",
        header: "Vulnerability Status",
        defaultFlex: 1,
        minWidth: 100
    },
    {
        name: "publishedDate",
        header: "Published Date",
        defaultFlex: 1,
        minWidth: 200
    },
    {
        name: "lastModifiedDate",
        header: "Last Modified Date",
        defaultFlex: 1,
        minWidth: 200
    }
]

const defaultFilterValue = [
    {
        name: 'id',
        operator: 'contains',
        type: 'string',
        value: ''
    },
    {
        name: 'description',
        operator: 'inlist',
        type: 'select', value: []
    },
       {
        name: 'vulnerabilityStatus',
        operator: 'contains',
        type: 'string',
        value: ''
    },
        {
        name: 'publishedDate',
        operator: 'date',
        type: 'string',
        value: ''
    },
        {
        name: 'lastModifiedDate',
        operator: 'date',
        type: 'string',
        value: ''
    },

];
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
            cveTableHeaders={columns}
            cveTableData={cves}
            defaultFilterValue={defaultFilterValue}
        />
    </Layout>);
}

export default List;