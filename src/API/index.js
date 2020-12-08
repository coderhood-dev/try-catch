import Axios from "axios";

const baseURL = process.env.REACT_APP_BASEURL;

const API = Axios.create({
  baseURL: baseURL,
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
    "x-rapidapi-key": process.env.REACT_APP_X_RAPIDAPI_KEY,
    "x-rapidapi-host": process.env.REACT_APP_X_RAPIDAPI_HOST,
    useQueryString: true,
  },
});

export default API;
