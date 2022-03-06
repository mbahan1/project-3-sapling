import './App.css';
import {Routes, Route} from "react-router-dom";
import { useState, useEffect} from 'react';
import WelcomePage from './pages/WelcomePage';
import SignUpPage from './pages/SignUpPage';
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import ProfileEditPage from './pages/ProfileEditPage';
import MainFeed from './pages/MainFeed';
import NavBar from './components/NavBar';
import * as authService from "./api/auth.service";
import ToggleButton from './components/ToggleButton';

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
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const userActive = () => {
        if(authService.currentUser()) {
            // dispatch({type: "isLoggedIn", payload: true})
            setIsLoggedIn(true);
        } else {
            // dispatch({type: "isLoggedIn", payload: false})
            setIsLoggedIn(false);
        }
    }

    useEffect(()=>{
        userActive()
    }, [])

    if (isLoggedIn) {
        return (
            <div className="App">
                <NavBar />
                <ToggleButton />
                <Routes>
                    {/* <Route path="/" element={<HomePage/>}/> */}
                    <Route path="/" element={<ProfilePage/>} />
                    <Route path="profile/edit" element={<ProfileEditPage/>} />
                    <Route path="posts" element={<MainFeed />}/>
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
