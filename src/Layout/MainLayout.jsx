import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import NavBar from '../Pages/Shared/NavBar/NavBar';

const MainLayout = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login')
    return (
        <>
            { noHeaderFooter || <NavBar/> }
            <Outlet/>
            { noHeaderFooter || <Footer/> }
        </>
    );
};

export default MainLayout;