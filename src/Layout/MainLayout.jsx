import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import NavBar from '../Pages/Shared/NavBar/NavBar';

const MainLayout = () => {
    return (
        <>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </>
    );
};

export default MainLayout;