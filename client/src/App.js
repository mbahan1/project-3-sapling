import './App.css';
import {Routes, Route} from "react-router-dom";
import WelcomePage from './pages/WelcomePage';
import HomePage from "./pages/HomePage"


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<WelcomePage />}/>
                <Route path="/singup"/>
                <Route path="/home" element={<HomePage/>}/>
                <Route path="/profile"/>
                <Route path="/posts"/>
        </Routes>

    </div>
    );
}

export default App;
