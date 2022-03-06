import {NavLink, Link} from 'react-router-dom';
// import {NavLink, Link} from 'react-router-dom';
import saplingLogo from '../../assets/saplingLogo.png';
import '../NavBar/style.css';
// import ToggleButton from "./components/ToggleButton";

export default function NavBar() {
    return(
    <>
    <header className='navbar'>
      <NavLink to="/" className='navbar__home navbar__item'
                    style={({ isActive }) => 
                    ({ color: isActive ? 'white' : '#946ECA' })}
                    ><a href=" " className='logoHome'><img className="logo" src={saplingLogo} alt =""/></a></NavLink>
        {/* <ToggleButton /> */}
      <NavLink to="/Profile" className='navbar__item'
                    style={({ isActive }) => 
                    ({ color: isActive ? 'white' : '#946ECA' })}
                    >My Profile Page</NavLink>
      <NavLink to="/Posts" className='navbar__item'
                    style={({ isActive }) => 
                    ({ color: isActive ? 'white' : '#946ECA' })}
                    >Main Feed</NavLink>                    
    </header>
    </>
  );
};
