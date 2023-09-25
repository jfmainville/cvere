import {cveActions} from "./cveSlice";
import axiosConfig from "../utils/axios";

export const fetchCVEs = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await axiosConfig.get("/cves");

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
            throw new Error("Unable to fetch resources");
        }
    };
};