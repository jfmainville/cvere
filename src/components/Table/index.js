import React from 'react';
import ReactDataGrid from '@inovua/reactdatagrid-community';
import '@inovua/reactdatagrid-community/index.css'
import classes from "./index.module.scss";

const Table = ({ cveTableHeaders, cveTableData, defaultFilterValue }) => {
    const gridStyle = { minHeight: 550 }
    return (
        <ReactDataGrid
            idProperty="cve_id"
            columns={cveTableHeaders}
            dataSource={cveTableData}
            style={gridStyle}
            className={classes.Container}
            enableFiltering={true}
            defaultFilterValue={defaultFilterValue}
        />
    )
};

export default Table;