import tellSaplingTo from "./axios.config";

const posts = "/posts";

const createComment = (id, data) => {
    return tellSaplingTo.post(`${posts}/${id}/comments`, data)
}

const updateComment = (id, data, commentId) => {
    return tellSaplingTo.put(`${posts}/${id}/comments/${commentId}`, data)
}

const destroyComment = (id, commentId) => {
    return tellSaplingTo.delete(`${posts}/${id}/comments/${commentId}`)
}

export {createComment, updateComment, destroyComment}