import {useState} from "react";
import * as postService from "../../api/post.service";
import "./style.css";

// Kudos (Like) Button
const Kudos = (props) => {

    const [kudos, setKudos] = useState(`${props.kudos}`);

    const updateKudos = async () => {
        let updatedPost = {kudos: parseInt(kudos)+1}
        await postService.update(`${props.post}`, updatedPost).then((res) => {
            setKudos(res.data.data.kudos)
        })
    };
    
    return (
    <div>
        <button className="kudo-btn" onClick={updateKudos}>Kudos!</button>
        <span> 🌺  {kudos}</span>
    </div>
    )
}

export default Kudos;