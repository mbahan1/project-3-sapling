import './App.css';
import {Routes, Route} from "react-router-dom";
import { useState, useEffect} from 'react';
import WelcomePage from './pages/WelcomePage';
import SignUpPage from './pages/SignUpPage';
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import ProfileEditForm from './components/ProfileEditForm';
import MainFeed from './pages/MainFeed';
import NavBar from './components/NavBar';
import * as authService from "./api/auth.service";
// import ToggleButton from './components/ToggleButton';
import ThemeButton from './components/ThemeButton';


// const reducer = (prevState, action) => {
//     switch(action.type) {
//         case "setIsLoggedIn" :
//             return {...prevState, isLoggedIn : action.payload};  
//         default: 
//             return prevState;
//     }     
// }

// const initialState = {
//     isLoggedIn : false
// }

function App() {

    // const [state, dispatch] = useReducer(reducer, initialState);
    // const {isLoggedIn} = state;
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [profile, setProfile] = useState("");

    const userActive = () => {
        if(authService.currentUser()) {
            // dispatch({type: "isLoggedIn", payload: true})
            setIsLoggedIn(true);
            fetchProfile()
        } else {
            // dispatch({type: "isLoggedIn", payload: false})
            setIsLoggedIn(false);
        }
    }

    const fetchProfile = async () => {
        await authService.getProfile().then(res => {
            setProfile(res.data.data)
        })
    }

    useEffect(()=> {
        userActive();
    },[])

    if (isLoggedIn) {
        return (
            <div className="App">

                <NavBar firstName={profile.firstName}/>
                {/* <ToggleButton /> */}
                <ThemeButton />
                <Routes>
                    {/* <Route path="/" element={<HomePage/>}/> */}
                    <Route path="/" element={<ProfilePage profile={profile}/>} />
                    <Route path="profile/edit" element={<ProfileEditForm profile={profile}/>} />
                    <Route path="posts" element={<MainFeed profile={profile}/>}/>
                     {/* <Route path="/editProfile" element={<ProfileEditForm/>} />
                     <Route path="posts" element={<MainFeed />}/> */}
                </Routes>
    
        </div>
        );

    } else {
        return (
            <div className="App">
                {/* <NavBar /> */}
                <Routes>
                    <Route path="/" element={<WelcomePage />}/>
                    <Route path="/signup" element={<SignUpPage />}/>
                </Routes>
    
            </div>
        );
    }
}

export default App;
