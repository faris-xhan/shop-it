import "react-alice-carousel/lib/alice-carousel.css";
import { nanoid } from "@reduxjs/toolkit";
import AliceCarousel from "react-alice-carousel";
import Grid from "@mui/material/Grid";
import { useDispatch } from "react-redux";
import { productAdded } from "../features/shoppingCart/shoppingCartSlice";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Rating,
  Divider,
} from "@mui/material";
import { Box } from "@mui/system";

const ProductRoute = (props) => {
  const shoppingCartDispatch = useDispatch();

  const product = {
    title: "Sample Product",
    media: [
      "/images/product.jpg",
      "/images/product.jpg",
      "/images/product.jpg",
      "/images/product.jpg",
      "/images/product.jpg",
    ],
  };
  const renderProductImages = product.media.map((m) => (
    <ProductImage key={nanoid()} img={m} title={product.tite} />
  ));
  return (
    <Grid container sx={{ p: 1 }}>
      <Grid item xs={6} style={{ maxWidth: "500px" }}>
        <AliceCarousel
          mouseTracking
          items={renderProductImages}
          disableButtonsControls={true}
        />
      </Grid>
      <Grid item xs={6} style={{ display: "flex", justifyContent: "center" }}>
        <Card style={{ width: "100%" }} elevation={0}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Sample Product
            </Typography>
            <Box display="flex" alignItems="flex-end">
              <Rating
                name="text-feedback"
                value={4.3}
                readOnly
                precision={0.5}
              />
              <Typography component="p" variant="subtitle2" sx={{ ml: 1 }}>
                2 reviews
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" sx={{ pt: 1 }}>
              <Typography
                variant="subtitle1"
                component="del"
                color="GrayText"
                sx={{ mr: 1 }}
              >
                PKR 2000000
              </Typography>
              <Typography variant="subtitle1" fontWeight="bold" color="red">
                PKR 20000
              </Typography>
            </Box>
            <Divider />
            <Typography variant="body1">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              debitis alias id esse laudantium. Velit assumenda doloribus atque
              natus incidunt quis in, eaque laudantium, quidem quae earum
              adipisci fugiat non.
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              disableElevation
              size="small"
              sx={{ mr: 1 }}
              onClick={() => shoppingCartDispatch(productAdded(product))}
            >
              Add to Cart
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ProductRoute;

const ProductImage = (props) => {
  return (
    <Box component="div" width="100%" padding="1">
      <img src={props.img} alt={props.title} width="100%" />
    </Box>
  );
};
