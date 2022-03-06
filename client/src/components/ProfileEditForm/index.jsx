import {useState} from "react";
import * as userService from "../../api/user.service";
import "./styles.css";



export default function ProfileEditForm() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [pronouns, SetPronouns] = useState("");
    const [age, setAge] = useState("");
    const [bio, setBio] = useState("");
    const [hobbies, setHobbies] = useState("");
    const [zodiacSign, setZodiacSign] = useState("")

    const handleSubmit = async () => {
        let updatedUser = {firstName, lastName, pronouns, hobbies, zodiacSign};
        let res = await userService.update(updatedUser).then(() => {
            console.log(updatedUser);
        })

        console.log(res);
        if (!res === 201) {
            alert(`ERROR code: ${res.status}`)
        }
    }
    return(
        <div className="profileEditFormComponent">
            <form className="profileEditForm">
                <label htmlFor="firtName">First Name</label>
                <input 
                    className="profileEditForm-input"
                    onChange={(e)=> setFirstName(e.target.value)}
                    value={firstName}
                    type="text"
                    name="firstName"
                    placeholder="First Name"  
                />

                <label htmlFor="lastName">Last Name</label>
                <input 
                    className="profileEditForm-input"
                    onChange={(e)=> setLastName(e.target.value)}
                    value={lastName}
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                />

                <label htmlFor="email">Pronouns</label>
                <input
                    className="profileEditForm-input"
                    onChange={(e)=> SetPronouns(e.target.value)}
                    value={pronouns}
                    type="text"
                    name="email"
                    placeholder="email"
                />

                <label htmlFor="age">Age</label>
                <input
                    className="profileEditForm-input"
                    onChange={(e)=> setAge(e.target.value)}
                    value={age}
                    type="text"
                    name="email"
                    placeholder="email"
                />

                <label htmlFor="bio">Bio</label>
                <input
                    className="profileEditForm-input"
                    onChange={(e)=> setBio(e.target.value)}
                    value={bio}
                    type="text"
                    name="email"
                    placeholder="email"
                />

                <label htmlFor="hobbies">Hobbies</label>
                <input
                    className="profileEditForm-input"
                    onChange={(e)=> setHobbies(e.target.value)}
                    value={hobbies}
                    type="text"
                    name="password"
                    placeholder="Password"
                />

                <label htmlFor="zodiacSign">Zodiac Sign</label>
                <input
                    className="profileEditForm-input"
                    onChange={(e)=> setZodiacSign(e.target.value)}
                    value={zodiacSign}
                    type="text"
                    name="zodiacSign"
                    placeholder="Zodiac Sign"
                />

                <select>
                    <option>Select Zodiac Sign</option>
                </select>
                <button 
                    onClick={handleSubmit}
                > Submit
                </button>
            </form>

        </div>
    )
}