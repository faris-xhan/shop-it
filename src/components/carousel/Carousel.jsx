import AliceCarousel from "react-alice-carousel";
import CircleIcon from "@mui/icons-material/Circle";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import "react-alice-carousel/lib/alice-carousel.css";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { ShoppingCart } from "@mui/icons-material";
import { useState } from "react";
import { featuredProducts } from "../../__mock__/featured_products";
import { useDispatch } from "react-redux";
import { productAdded } from "../../features/shoppingCart/shoppingCartSlice";

const renderDotsItem = ({ isActive }) => {
  return isActive ? (
    <CircleIcon role="button" fontSize="small" style={{ cursor: "pointer" }} />
  ) : (
    <CircleOutlinedIcon
      role="button"
      style={{ cursor: "pointer" }}
      fontSize="small"
    />
  );
};

const Carousel = (props) => {
  // eslint-disable-next-line
  const [items, setItems] = useState(featuredProducts);
  const renderedItems = items.map((item) => (
    <FeaturedItem key={item.id} product={item} />
  ));

  return (
    <AliceCarousel
      mouseTracking
      items={renderedItems}
      renderDotsItem={renderDotsItem}
      disableButtonsControls={true}
    />
  );
};

export default Carousel;

const FeaturedItem = (props) => {
  const { product } = props;
  const shoppingCartDispatch = useDispatch();
  return (
    <Grid
      container
      className="item"
      data-value={product.id}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12} md="auto" style={{ maxWidth: "400px" }}>
        <img
          src={product?.media[0]}
          alt="new product"
          style={{ width: "100%" }}
        />
      </Grid>
      <Grid item xs={12} md="auto" style={{ flexGrow: 1 }}>
        <Card elevation={0}>
          <CardContent>
            <Typography variant="h3" component="div">
              {product.title}
            </Typography>

            <Typography variant="body1" gutterBottom>
              {product.current_price}
            </Typography>
            <Divider style={{ maxWidth: "80ch" }} />
            <Typography
              variant="body2"
              color="text.secondary"
              style={{ maxWidth: "80ch" }}
              sx={{ mt: 1 }}
              gutterBottom
            >
              {product.description}
            </Typography>
            <Box display="flex" alignItems="flex-end">
              <Rating
                name="text-feedback"
                value={product.reviews.length}
                readOnly
                precision={0.5}
              />
              <Typography component="p" variant="subtitle2" sx={{ ml: 1 }}>
                {product.reviews.length} reviews
              </Typography>
            </Box>
          </CardContent>

          <CardActions>
            <Stack direction="row" gap={1}>
              <Button
                startIcon={<ShoppingCart />}
                variant="contained"
                disableElevation
                onClick={() => shoppingCartDispatch(productAdded(product))}
              >
                Add to Cart
              </Button>
              <Button
                href={`/product/${product.title.replace(/\s/g, "-")}`}
                variant="outlined"
              >
                Learn More
              </Button>
            </Stack>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};
