// import userEvent from "@testing-library/user-event";
import { string } from "prop-types";
import { array } from "prop-types";
import React from "react";

function Profile(props) {
    return (
        <div>
            <div>
                <div>
                    <h5>{props.user}</h5>
                    <h5>{props.comments}</h5>
                    <h5>{props.photo}</h5>
                </div>
            </div>
        </div>
    )
}

Profile.propTypes = {
    photo: string.isRequired,
    userName: string.isRequired,
    comments: array,
}


export default Profile;