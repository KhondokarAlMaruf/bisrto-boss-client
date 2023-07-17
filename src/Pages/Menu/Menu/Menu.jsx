import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuBg from "../../../assets/menu/banner3.jpg";
import desertBg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaBg from "../../../assets/menu/pizza-bg.jpg";
import saladBg from "../../../assets/menu/salad-bg.jpg";
import soupBg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro || Menu</title>
      </Helmet>
      <Cover img={menuBg} title="ourr menu"></Cover>
      {/* main cover */}
      <SectionTitle
        subHeading={"Don't Miss"}
        heading={"Today's Offer"}
      ></SectionTitle>
      {/* offered menu items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* desert menu item */}
      <MenuCategory
        items={dessert}
        title="Desert"
        img={desertBg}
      ></MenuCategory>
      {/* pizza menu item */}
      <MenuCategory items={pizza} title="Pizza" img={pizzaBg}></MenuCategory>
      {/* salad menu item */}
      <MenuCategory items={salad} title="Salad" img={saladBg}></MenuCategory>
      {/* soup menu item */}
      <MenuCategory items={soup} title="Soup" img={soupBg}></MenuCategory>
    </div>
  );
};

export default Menu;
