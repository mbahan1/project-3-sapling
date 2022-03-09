import axios from "axios";

const backendAPI = "https://sapling-1026.herokuapp.com/api";

const user = JSON.parse(localStorage.getItem("user"))

const tellSaplingTo = axios.create({
    baseURL: `${backendAPI}`,
    headers: {
        "Content-type" : "application/json",
        authorization: `Bearer ${user}`
    },
});

export default tellSaplingTo;