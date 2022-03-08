import tellSaplingTo from "./axios.config";

const posts = "/posts";

const getAll = () => {
    return tellSaplingTo.get(`${posts}`);
};

const getOne = (id) => {
    return tellSaplingTo.get(`${posts}/${id}`)
};

const create = (data) => {
    return tellSaplingTo.post(`${posts}`, data)
};

const update = (id, data) => {
    return tellSaplingTo.put(`${posts}/${id}`, data)
};

const destory = (id) => {
    return tellSaplingTo.delete(`${posts}/${id}`)
};

// const getComment = (id) => {
//     return tellSaplingTo.get(`${posts}/${id}/comments/`, data)
// }

const createComment = (id, data) => {
    return tellSaplingTo.post(`${posts}/${id}/comments`, data)
}

const updateComment = (id, data, commentId) => {
    return tellSaplingTo.put(`${posts}/${id}/comments/${commentId}`, data)
}

const destroyComment = (id, commentId) => {
    return tellSaplingTo.delete(`${posts}/${id}/comments/${commentId}`)
}

export {getAll, getOne, create, update, destory, createComment, updateComment, destroyComment}

