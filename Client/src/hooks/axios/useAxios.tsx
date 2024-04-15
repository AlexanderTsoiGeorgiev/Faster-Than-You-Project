import axios from "axios";
import Ports from "./ports";

const ADDRESS_URI = "https://localhost:";

export default function useAxios(port: Ports) {
  const baseURL = `${ADDRESS_URI}${port}`;
  const instance = axios.create({
    baseURL: baseURL,
  });

  return instance;
}
