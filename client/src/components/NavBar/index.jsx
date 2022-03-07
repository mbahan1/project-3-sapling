import {NavLink} from 'react-router-dom';
import saplingLogo from '../../assets/saplingLogo.png';
import '../NavBar/style.css';
// import ToggleButton from "./components/ToggleButton";

export default function NavBar(props) {

    function logOut() {
      localStorage.clear();
      document.location = "/"
    }

    return(
    <>
    <header className='navbar'>
      <NavLink to="/" className='navbar__home navbar__item'
                    style={({ isActive }) => 
                    ({ color: isActive ? 'white' : '#946ECA' })}
                    ><img className="logo" src={saplingLogo} alt =""/></NavLink>
        {/* <ToggleButton /> */}
      <NavLink to="/" className='navbar__item'
                    style={({ isActive }) => 
                    ({ color: isActive ? 'white' : '#946ECA' })}
                    >My Profile Page</NavLink>
      <NavLink to="/posts" className='navbar__item'
                    style={({ isActive }) => 
                    ({ color: isActive ? 'white' : '#946ECA' })}
                    >Main Feed</NavLink>    
      {props.firstName? <h2>Hi, {props.firstName} </h2> : null}  
    </header>
    <div>
      <button onClick={logOut}>Log Out</button>
    </div>
    </>
  );
};
