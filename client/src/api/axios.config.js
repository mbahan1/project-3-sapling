import axios from "axios";

const backendAPI = "http://localhost:4000/api";

const user = JSON.parse(localStorage.getItem("user"))

const tellSaplingTo = axios.create({
    baseURL: `${backendAPI}`,
    headers: {
        "Content-type" : "application/json",
        authorization: `Bearer ${user}`
    },
});

export default tellSaplingTo;