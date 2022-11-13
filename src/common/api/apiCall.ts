import axios from "axios";
import { ApiUrl } from "../constants/path";

const apiCall = axios.create({
  baseURL: ApiUrl.Base,
});

export default apiCall;
