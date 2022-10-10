import {Link , Outlet} from 'react-router-dom';
import Navbar from './navbar/Nav'

const Home = () => {
    return(
        <>
         <Navbar/>
        <Outlet/>
        </>
    )
}

export default Home;