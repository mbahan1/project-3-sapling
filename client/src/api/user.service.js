import tellSaplingTo from "./axios.config";

const users = "/users"

const create = (data) => {
    return tellSaplingTo.post(`${users}`, data);
}

const destroy = (id) => {
    return tellSaplingTo.delete(`${users}`, id)
}

export {create, destroy}