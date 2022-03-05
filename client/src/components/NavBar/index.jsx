import {NavLink, Link} from 'react-router-dom';
// import {NavLink, Link} from 'react-router-dom';
// import saplingLogo from '../../assets/saplingLogo.png';
import '../NavBar/style.css';
// import ToggleButton from "./components/ToggleButton";

export default function NavBar() {
    return(
    <>
    <header className='navbar'>
      <NavLink to="/" className='navbar__home navbar__item'
                    style={({ isActive }) => 
                    ({ color: isActive ? 'purple' : 'blue' })}
                    >Home</NavLink>
        {/* <ToggleButton /> */}
      <NavLink to="/Profile" className='navbar__item'
                    style={({ isActive }) => 
                    ({ color: isActive ? 'purple' : 'blue' })}
                    >My Profile Page</NavLink>
      <NavLink to="/MainFeed" className='navbar__item'
                    style={({ isActive }) => 
                    ({ color: isActive ? 'purple' : 'blue' })}
                    >Main Feed</NavLink>                    
    </header>
    </>
  );
};
