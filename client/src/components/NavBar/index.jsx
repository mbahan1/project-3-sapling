import {NavLink, Link} from 'react-router-dom';
import saplingLogo from '../../assets/saplingLogo.png';
import '../NavBar/style.css';
// import ToggleButton from "./components/ToggleButton";
import Logout from '../Logout';
import ProfileEditForm from '../ProfileEditForm';
import ThemeButton from '../ThemeButton';


export default function NavBar(props) {

    return(
    <>
    <header className='navbar'>
      <NavLink to="/" className='navbar__home navbar__item'
                    style={({ isActive }) => 
                    ({ color: isActive ? 'white' : '#946ECA' })}
                    ><img className="logo" src={saplingLogo} alt =""/></NavLink>
      <ThemeButton />
      <NavLink to="/" className='navbar__item'
                    style={({ isActive }) => 
                    ({ color: isActive ? 'white' : '#946ECA' })}
                    >My Profile Page</NavLink>
      <NavLink to="/posts" className='navbar__item'
                    style={({ isActive }) => 
                    ({ color: isActive ? 'white' : '#946ECA' })}
                    >Main Feed</NavLink> 
      <div className="dropdown">
        <div className='loginUserName dropBtn'>
            <span>{props.firstName}</span> 
            <span>{props.lastName}</span>
        </div>
        <div className="dropdown-content">
          <Link to="profile/edit">Profile Edit</Link>
          <Logout /> 
        </div>
      </div>
    </header>
  
    </>
  );
};
