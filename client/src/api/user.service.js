import tellSaplingTo from "./axios.config";

const users = "/users"

const getAll = () => {
    return tellSaplingTo.get(`${users}`)
}

const getOne = (id) => {
    return tellSaplingTo.get(`${users}/${id}`)
}

const update = (id, data) => {
    return tellSaplingTo.put(`${users}/${id}`, data)
}

const destroy = (id) => {
    return tellSaplingTo.delete(`${users}`, id)
}

export {getAll, getOne, update, destroy}