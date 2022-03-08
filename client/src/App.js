import './App.css';
import {Routes, Route} from "react-router-dom";
import { useState, useEffect} from 'react';
import WelcomePage from './pages/WelcomePage';
import SignUpPage from './pages/SignUpPage';
import ProfilePage from "./pages/ProfilePage";
import ProfileEditForm from './components/ProfileEditForm';
import MainFeed from './pages/MainFeed';
import NavBar from './components/NavBar';
import PostEdit from "./components/PostEdit"
import * as authService from "./api/auth.service";
import Users from "./components/Users"
// import ToggleButton from './components/ToggleButton';
// import ThemeButton from './components/ThemeButton';


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

                <NavBar 
                    firstName={profile.firstName}
                    zodiacSign={profile.zodiacSign}
                />
                {/* <ToggleButton /> */}
                {/* <ThemeButton /> */}
                <Routes>
                    <Route path="/" element={<ProfilePage profile={profile}/>} />
                    <Route path="profile/edit" element={<ProfileEditForm profile={profile}/>} />
                    <Route path="posts" element={<MainFeed profile={profile}/>}/>
                    <Route path="posts/:id" element={<PostEdit profile={profile}/>}/>
                    <Route path="users" element={<Users />} />
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
