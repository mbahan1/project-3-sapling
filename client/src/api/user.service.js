import tellSaplingTo from "./axios.config";

const users = "/users"

const create = (data) => {
    return tellSaplingTo.post(`${users}`, data);
}

const update = (id, data) => {
    return tellSaplingTo.put(`${users}/${id}`, data)
}

const destroy = (id) => {
    return tellSaplingTo.delete(`${users}`, id)
}

export {create, update, destroy}