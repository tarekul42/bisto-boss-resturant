import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import NavBar from '../Pages/Shared/NavBar/NavBar';

const MainLayout = () => {
    const location = useLocation();
    const pathLocation = location.pathname;
    const noHeaderFooter = pathLocation.includes('login') || pathLocation.includes('signup');
    return (
        <>
            { noHeaderFooter || <NavBar/> }
            <Outlet/>
            { noHeaderFooter || <Footer/> }
        </>
    );
};

export default MainLayout;