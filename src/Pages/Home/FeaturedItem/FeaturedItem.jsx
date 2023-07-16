import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featured from "../../../assets/home/featured.jpg";
import "../FeaturedItem/Featured.css";

const FeaturedItem = () => {
  return (
    <div className="featured text-white pt-8 my-20">
      <SectionTitle
        subHeading={"Check it Out"}
        heading={"Featured Item"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
        <div>
          <img src={featured} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20, 2029</p>
          <p className="uppercase">Where can i get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            sapiente totam voluptate at obcaecati maxime quis optio repellat
            ullam inventore facere, incidunt, alias, numquam excepturi
            voluptatibus et perspiciatis ratione dolorem suscipit praesentium
            iste nulla pariatur eos? Eos at, impedit nesciunt possimus et velit
            quisquam fugit quas. Reprehenderit autem repudiandae nemo.
          </p>
          <button className="btn btn-outline">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedItem;
