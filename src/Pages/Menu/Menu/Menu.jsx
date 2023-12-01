import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuBgImg from '../../../assets/menu/banner3.jpg'
import PopularMenu from '../../Home/PopularMenu/PopularMenu';

const Menu = () => {
    return (
        <>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover 
            img={menuBgImg}
            title={"Our Menu"}
            />
            <PopularMenu />
            <Cover 
            img={menuBgImg}
            title={"Our Menu"}
            />
            <PopularMenu />
            <Cover 
            img={menuBgImg}
            title={"Our Menu"}
            />
            <PopularMenu />
        </>
    );
};

export default Menu;