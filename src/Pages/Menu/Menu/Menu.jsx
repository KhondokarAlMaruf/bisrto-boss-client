import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuBg from "../../../assets/menu/banner3.jpg";
import PopularMenu from "../../Home/PopularMenu/PopularMenu";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro || Menu</title>
      </Helmet>
      <Cover img={menuBg} title="ourr menu"></Cover>
      <PopularMenu></PopularMenu>
      <Cover img={menuBg} title="ourr menu"></Cover>
      <PopularMenu></PopularMenu>
      <Cover img={menuBg} title="our menu"></Cover>
      <PopularMenu></PopularMenu>
    </div>
  );
};

export default Menu;
