import axios from "axios";
import { CONST } from "../utils/constant";

const config = {
  baseURL: CONST.BASE_URL,
  headers: {
    "x-hasura-admin-secret": CONST.KEY_ID,
  },
};

export const axiosinstance = axios.create(config);
