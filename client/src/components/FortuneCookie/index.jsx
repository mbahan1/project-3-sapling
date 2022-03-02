import React, {useState} from "react";
import Loader from "../../Loader";



function FortuneCookie ({ fortuneCookie}) {
    const [data, setFortuneCookie] = useState();
    let content;

    if (!data && fortuneCookie) {
        content = <Loader />;
        setFortuneCookie(fortuneCookie);
        
    } else {
        content = (
            <div>
                { fortuneCookie }
            </div>
        );
    }

    return (
        <div>
            {content}
            </div>
    );
}

export default FortuneCookie;


