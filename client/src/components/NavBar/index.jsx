import {NavLink} from 'react-router-dom';
import saplingLogoSomeWhite from '../../assets/saplingLogoSomeWhite.png';
import Logout from '../Logout';
import ThemeButton from '../ThemeButton';
import PlaySound from '../PlaySound';
import './style.css';

// Navigation Bar for top of page. 
// ( Displays once User is Signed In
export default function NavBar(props) {

    return(
    <>
    <header className='navbar'>
      <NavLink to="/" className='navbar__home navbar__item'
                    style={({ isActive }) => 
                    ({ color: isActive ? 'white' : '#946ECA' })}
                    ><img className="logo" src={saplingLogoSomeWhite} alt ="saplingLogo"/></NavLink>

      <PlaySound />          

      <ThemeButton/>
        
      <NavLink to="/" className='navbar__item'
                    style={({ isActive }) => 
                    ({ color: isActive ? 'white' : '#946ECA' })}
                    >Profile Page</NavLink>
      <NavLink to="/posts" className='navbar__item'
                    style={({ isActive }) => 
                    ({ color: isActive ? 'white' : '#946ECA' })}
                    >Main Feed</NavLink> 
      <div className="dropdown">
      <div className='loginUserName dropBtn'>
            <span>Namaste, {props.firstName}</span> 
            <span>{props.lastName}</span>

        {/* <div className='loginUserName dropBtn'> 
          <img alt={props.zodiacSign} style={{width:"50px", height: "auto", borderRadius:"30px", margin: "0 5px 0 0"}}
                        src={`/signs/${props.zodiacSign}.webp`}/>
          <span>{props.firstName}</span>
        </div> */}
        <div className="dropdown-content">
          <Logout /> 
        </div>
      </div>
      </div>
    </header>
  
    </>
  );
};
