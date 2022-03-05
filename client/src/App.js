import './App.css';
import {Routes, Route} from "react-router-dom";
import WelcomePage from './pages/WelcomePage';
import SignUpPage from './pages/SignUpPage';
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import ProfileEditPage from './pages/ProfileEditPage';
import MainFeed from './pages/MainFeed';
import NavBar from './components/NavBar';

function App() {
    return (
        <div className="App">
            <NavBar />
            <Routes>
                <Route path="/" element={<WelcomePage />}/>
                <Route path="/signup" element={<SignUpPage />}/>
                <Route path="/home" element={<HomePage/>}/>
                <Route path="/profile" element={<ProfilePage/>} />
                <Route path="/profile/edit" element={<ProfileEditPage/>} />
                <Route path="/posts" element={<MainFeed />}/>
            </Routes>

    </div>
    );
}

export default App;
