import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from '../../../assets/menu/menu-bg.jpg'

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | menu</title>
            </Helmet>
            <Cover img={menuImg} title="our menu"></Cover>
            <h1>menu</h1>
        </div>
    );
};

export default Menu;