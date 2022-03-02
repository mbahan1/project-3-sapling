
// import {NavLink, Link} from 'react-router-dom';
// import saplingLogo from '../../assets/saplingLogo.png';
import '../NavBar/style.css';

export default function NavBar() {
    return(
    <>
    <header className='navbar'>
        <div className='navbar__title navbar__item'>Home</div>
        <div className='navbar__item'>My Profile Page</div>
        <div className='navbar__item'>Main Feed</div>       
    </header>
    </>
  );
};
