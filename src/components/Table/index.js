import React, { useState } from 'react';
import classes from "./index.module.scss";
import { DateRangePicker } from "rsuite";
import 'rsuite/dist/rsuite.min.css';
import { useDispatch, useSelector } from "react-redux";
import { updateCVEsDateRange } from "../../store/cveActions";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const Table = React.memo(({ cveTableHeaders, cveTableData }) => {
    const startDate = useSelector(state => state.cve.startDate);
    const endDate = useSelector(state => state.cve.endDate)
    const [calendarStartDate, setCalendarStartDate] = useState(startDate)
    const [calendarEndDate, setCalendarEndDate] = useState(endDate)
    const dispatch = useDispatch()

    const onCalendarChange = (calendarDateRange) => {
        const calendarStartDate = calendarDateRange[0].toISOString()
        const calendarEndDate = calendarDateRange[1].toISOString()

        if (startDate !== calendarStartDate) {
            if (endDate !== calendarEndDate) {
                setCalendarStartDate(calendarStartDate)
                setCalendarEndDate(calendarEndDate)
            }
        }

    }

    const onCalendarClose = () => {
        if (calendarStartDate && calendarEndDate) {
            dispatch(updateCVEsDateRange(calendarStartDate, calendarEndDate))
        }
    }

    return (
        <div className={classes.Container}>
            <DateRangePicker
                showOneCalendar
                cleanable={false}
                className={classes.DateRangePicker}
                defaultValue={[new Date(startDate), new Date(endDate)]}
                onChange={(calendarDateRange) => onCalendarChange(calendarDateRange)}
                onClose={() => onCalendarClose()}
            />
            <DataGrid
                columns={cveTableHeaders}
                rows={cveTableData}
                getRowHeight={() => "auto"}
                slots={{
                    toolbar: GridToolbar,
                }}
                density={"compact"}
            />
        </div>
    )
});

export default Table;