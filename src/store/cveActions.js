import {cveActions} from "./cveSlice";
import axios from "axios";

export const fetchCVEs = (lastModifiedStartDate, lastModifiedEndDate) => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await axios.get(`https://services.nvd.nist.gov/rest/json/cves/2.0?lastModStartDate=${lastModifiedStartDate.toISOString().replace("Z", "")}%2B01:00&lastModEndDate=${lastModifiedEndDate.toISOString().replace("Z", "")}%2B01:00`);

            if (response.status !== 200) {
                throw new Error("Could not fetch CVE data");
            }

            return await response.data;
        };

        try {
            const cveData = await fetchData();
            dispatch(
                cveActions.fetchCVEs({
                    cveData
                })
            );
        } catch (error) {
            throw new Error("Unable to fetch cves");
        }
    };
};