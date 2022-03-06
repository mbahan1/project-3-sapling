import PostForm from "../../components/PostForm";
import Quote from "../../components/Quote";
import {useEffect, useState} from "react";
import * as authService from "../../api/auth.service"


export default function ProfilePage () {
    
    const [profile, setProfile] = useState("")

    const fetchProfile = async () => {
        await authService.getProfile().then(res => {
            console.log(res.data.data);
            setProfile(res.data.data)
        })
    }

    useEffect(()=> {
        fetchProfile();
    }, [])

    return(
        <div className="container">
            <div>
                <div>
                    <img style={{width:"100px", height:"100px", borderRadius:"40px"}} src="https://media.istockphoto.com/vectors/zodiac-signs-set-isolated-on-black-background-vector-id1072359684?k=20&m=1072359684&s=612x612&w=0&h=VzwNG9jsi2ovv5b7xKALnV-7FOjCnOKaf27qVl8GUrg="/>
                </div>
                <div>
                    <h5>UserName</h5>
                    {profile.firstName}
                    {profile.lastName}
                    {profile.email}
                    </div>
                    <div>
                        <h4>daily Quote</h4>
                    </div>
                    <div>
                        <h4>List of my Menefistations</h4>
                    </div> 
                    <div>
                        <Quote />
                    </div>
                    <div>
                        <PostForm />
                    </div>      
            </div>


        </div>

    )
}

        
    
  
    
