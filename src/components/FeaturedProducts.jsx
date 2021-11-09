import { Grid } from "@mui/material";
import Carousel from "./carousel/Carousel";

const FeaturedProducts = (props) => {
  return (
    <Grid sx={{ p: 1 }}>
      <Carousel />
    </Grid>
  );
};

export default FeaturedProducts;
