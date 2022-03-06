import tellSaplingTo from "./axios.config";

const auth = "/auth"
const users = "/users"

const register = async (data) => {
    return tellSaplingTo
        .post(`${auth}/register`, data)
        .then((res)=> {
            console.log(res)
        });
}

const login = async (email, password) => {
    try {
        return tellSaplingTo
        .post(`${auth}/login`, {email, password})
        .then((res) => {
            console.log(res)
            if(res.data.token) {
                localStorage.setItem("user", JSON.stringify(res.data.token))
                localStorage.setItem("userId", res.data.userId)
            }
            return res.data.token
        })
    } catch (err) {
        console.log(err)
    }
}

const currentUser = () => {
    let user = localStorage.getItem("user")
    return JSON.parse(user)
}

const getProfile = () => {
    let userId = localStorage.getItem("userId")
    return tellSaplingTo.get(`${users}/${userId}`)
}

const logout = () => {
    localStorage.removeItem("user")
}

export {register, login, currentUser, getProfile, logout} 