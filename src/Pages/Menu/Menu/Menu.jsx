import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
import menuBgImg from '../../../assets/menu/banner3.jpg';
import dessertBgImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaBgImg from '../.././../assets/menu/pizza-bg.jpg';
import soupBgImg from '../.././../assets/menu/soup-bg.jpg';
import saladBgImg from '../.././../assets/menu/salad-bg.jpg';

const Menu = () => {
    const [ menu ] = useMenu([]);
    const offered = menu.filter(item => item.category === 'offered');
    const desserts = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover 
            img={menuBgImg}
            title={"Our Menu"}
            />
            {/* main cover */}
            <SectionTitle subHeading={"Don't Miss"} heading={"Today's Offer"} />
            {/* offered menu items */}
            <MenuCategory items={offered} />
            {/* dessert menu items */}
            <MenuCategory items={desserts} title={"Dessert"} img={dessertBgImg} />
            {/* pizza menu items */}
            <MenuCategory items={pizza} title={"Pizza"} img={pizzaBgImg} />
            {/* soup menu items */}
            <MenuCategory items={soup} title={"Soup"} img={soupBgImg} />
            {/* salad menu items */}
            <MenuCategory items={salad} title={"Salad"} img={saladBgImg} />
        </>
    );
};

export default Menu;