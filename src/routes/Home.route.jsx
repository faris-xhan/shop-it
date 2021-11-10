import Divider from "@mui/material/Divider";
import Categories from "../components/Categories/Categories";
import FeaturedProducts from "../components/FeaturedProducts";
import TrendyItems from "../components/TrendyItems";
const HomeRoute = (props) => {
  return (
    <>
      <FeaturedProducts />
      <Divider />
      <Categories />
      <TrendyItems />
    </>
  );
};

export default HomeRoute;
