import Axios from "axios";

const axios = Axios.create({
  baseURL: "http://localhost:4000", 
  withCredentials: true, 
});

export default axios;
