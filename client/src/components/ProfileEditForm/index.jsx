import {useState} from "react";
import * as userService from "../../api/user.service";
import "./styles.css";



export default function ProfileEditForm(props) {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [pronouns, SetPronouns] = useState("");
    const [age, setAge] = useState("");
    const [bio, setBio] = useState("");
    const [hobbies, setHobbies] = useState("");
    const [zodiacSign, setZodiacSign] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        let updatedUser = {firstName, lastName, pronouns, age, bio, hobbies, zodiacSign};
        let res = await userService.update(`${props.profile._id}`,updatedUser).then(() => {
            console.log(updatedUser);
            document.location = "/"
        })

        console.log(res);
        if (!res === 201) {
            alert(`ERROR code: ${res.status}`)
        }
    }
    return(
        <div className="profileEditFormComponent">
            <div> 
                <h2>Edit Your Profile, {props.profile.firstName} </h2>
            </div>
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

                <label htmlFor="pronouns">Pronouns</label>
                <input
                    className="profileEditForm-input"
                    onChange={(e)=> SetPronouns(e.target.value)}
                    value={pronouns}
                    type="text"
                    name="pronouns"
                    placeholder="Pronouns"
                />

                <label htmlFor="age">Age</label>
                <input
                    className="profileEditForm-input"
                    onChange={(e)=> setAge(e.target.value)}
                    value={age}
                    type="text"
                    name="age"
                    placeholder="Age"
                />

                <label htmlFor="bio">Bio</label>
                <input
                    className="profileEditForm-input"
                    onChange={(e)=> setBio(e.target.value)}
                    value={bio}
                    type="text"
                    name="bio"
                    placeholder="Bio"
                />

                <label htmlFor="hobbies">Hobbies</label>
                <input
                    className="profileEditForm-input"
                    onChange={(e)=> setHobbies(e.target.value)}
                    value={hobbies}
                    type="text"
                    name="hobbies"
                    placeholder="Hobbies"
                />

                <label htmlFor="zodiacSign">Select Zodiac Sign</label>
                <select className="signUpForm-input" onChange={(e)=>setZodiacSign(e.target.value)}>
                    <option>- - -</option>
                    <option value="aries">♈ Aries</option>
                    <option value="taurus">♉ Taurus</option>
                    <option value="gemini">♊ Gemini</option>
                    <option value="cancer">♋ Cancer</option>
                    <option value="leo">♌ Leo</option>
                    <option value="virgo">♍ Virgo</option>
                    <option value="libra">♎ Libra</option>
                    <option value="scorpio">♏ Scorpio</option>
                    <option value="sagittarius">♏ Sagittarius</option>
                    <option value="capricorn">♑ Capricorn</option>
                    <option value="aquarius">♒ Aquarius</option>
                    <option value="pisces">♓ Pisces</option>
                </select>
                <button className="profileEdit-submit"
                    onClick={handleSubmit}
                > Update
                </button>
            </form>

        </div>
    )
}