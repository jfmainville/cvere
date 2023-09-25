import axios from "axios";
import { envConfig } from "../configs/envConfig";

const environmentConfig = envConfig(process.env.REACT_APP_ENV_NAME);

export const axiosConfig = axios.create({
    baseURL: environmentConfig.apiUrl,
    headers: {
        "Content-Type": "application/json"
    }
});

export default axiosConfig;