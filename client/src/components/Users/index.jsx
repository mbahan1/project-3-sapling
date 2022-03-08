import { useEffect, useState } from "react";
import * as userService from "../../api/user.service";
import User from "../User";

const Users = () => {

    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        await userService.getAll().then((res)=> {
            setUsers(res.data.data)
        })
    }

    useEffect(() => {
        fetchUsers();
    }, [])

    return (
        <div>
            <h1>Users</h1>
            {users.map((user) => {
                return (
                    <div>
                <User 
                    key={user._id}
                    user={user}/>
                    </div>
                )
                
            })}
        </div>
    )
}

export default Users;