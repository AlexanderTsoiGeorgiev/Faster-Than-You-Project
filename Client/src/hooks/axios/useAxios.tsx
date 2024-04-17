import axios from "axios";
import Ports from "./ports";

const ADDRESS_URI = "https://localhost:";

export default function useAxios(port: Ports) {
    const baseURL = `${ADDRESS_URI}${port}`;
    const instance = axios.create({
        baseURL: baseURL,
        //line below makes it so axios never throws errors when a non 2xx status code is recieved
        // validateStatus: () => true,
    });

    return instance;
}
