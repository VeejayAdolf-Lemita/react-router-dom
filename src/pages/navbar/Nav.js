import {Link} from 'react-router-dom';
import './nav.css';

const Navbar = () => {
    return(
       <nav className='navbar'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
       </nav>
    )
}

export default Navbar;