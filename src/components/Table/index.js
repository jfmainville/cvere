import React, { useState } from 'react';
import ReactDataGrid from '@inovua/reactdatagrid-community';
import '@inovua/reactdatagrid-community/index.css'
import classes from "./index.module.scss";
import { DateRangePicker } from "rsuite";
import 'rsuite/dist/rsuite.min.css';
import { useDispatch, useSelector } from "react-redux";
import { updateCVEsDateRange } from "../../store/cveActions";

const Table = ({ cveTableHeaders, cveTableData, defaultFilterValue }) => {
    const startDate = useSelector(state => state.cve.startDate);
    const endDate = useSelector(state => state.cve.endDate)
    const [calendarDateRange, setCalendarDateRange] = useState([])
    const dispatch = useDispatch()
    const gridStyle = { minHeight: 650 }

    const onCalendarClose = () => {
        dispatch(updateCVEsDateRange(calendarDateRange))
    }

    return (
        <div className={classes.Container}>
            <DateRangePicker
                showOneCalendar
                cleanable={false}
                className={classes.DateRangePicker}
                defaultValue={[new Date(startDate), new Date(endDate)]}
                onChange={(calendarDateRange) => setCalendarDateRange(calendarDateRange)}
                onClose={() => onCalendarClose()}
            />
            <ReactDataGrid
                idProperty="cve_id"
                columns={cveTableHeaders}
                dataSource={cveTableData}
                style={gridStyle}
                className={classes.Container}
                enableFiltering={true}
                defaultFilterValue={defaultFilterValue}
            />
        </div>
    )
};

export default Table;