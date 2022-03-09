const User = (props) => {

    return (
        <div className="user-details">
            <img alt={props.user.zodiacSign} style={{width:"150px", height: "auto", borderRadius:"40px"}} 
                        src={`/signs/${props.user.zodiacSign}.webp`}/>
            <h1>{props.user.firstName} {props.user.lastName}</h1>
            {/* <p>{props.user.email}</p> */}
            <span>{props.user.pronouns} </span>
            <span>{props.user.age}</span>
            <p>{props.user.zodiacSign}</p>
            <p>{props.user.hobbies}</p>
            <p>{props.user.bio}</p>
        </div>
    )

}

export default User;