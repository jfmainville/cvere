import { cveActions } from "./cveSlice";
import axios from "axios";

export const fetchCVEs = (startDate, endDate) => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await axios.get(`https://services.nvd.nist.gov/rest/json/cves/2.0?lastModStartDate=${startDate.replace("Z", "")}%2B01:00&lastModEndDate=${endDate.replace("Z", "")}%2B01:00`);
            return await response.data;
        };

        try {
            const cveData = await fetchData();
            dispatch(
                cveActions.fetchCVEs({
                    cveData,
                    startDate,
                    endDate
                })
            );
        } catch (error) {
            console.log("Unable to fetch the latest CVE list");
        }
    };
};

export const updateCVEsDateRange = (startDate, endDate) => {
    return async (dispatch) => {
        try {
            dispatch(
                cveActions.updateCVEsDateRange({
                    startDate: startDate,
                    endDate: endDate
                })
            );
        } catch (error) {
            console.log("Unable to extract the CVE list for the date range specified")
        }
    };
};