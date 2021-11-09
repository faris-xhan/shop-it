import { Delete } from "@mui/icons-material";
import Close from "@mui/icons-material/Close";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  SwipeableDrawer,
  IconButton,
  Typography,
  Divider,
  List,
  ListItemText,
  ListItem,
  ListItemAvatar,
  Avatar,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllShoppingCartProducts,
  productRemoved,
} from "../../features/shoppingCart/shoppingCartSlice";
import DrawerHeader from "./DrawerHeader";

const drawerWidth = 380;

const ShoppingCart = (props) => {
  const { toggleDrawer, state } = props;
  const products = useSelector(selectAllShoppingCartProducts);

  return (
    <div>
      <IconButton onClick={toggleDrawer(true)}>
        <ShoppingCartIcon />
      </IconButton>
      <SwipeableDrawer
        anchor="right"
        open={state}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <DrawerHeader>
          <Typography variant="h5" style={{ textTransform: "uppercase" }}>
            Shopping Cart
          </Typography>
          <IconButton onClick={toggleDrawer(false)}>
            <Close />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {products.map((product) => (
            <ShoppingCartItem key={product.id} {...product} />
          ))}
        </List>
      </SwipeableDrawer>
    </div>
  );
};

export default ShoppingCart;

const ShoppingCartItem = (props) => {
  const { id, title, current_price, media, currency } = props;
  const shoppingCartDispatch = useDispatch();

  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={(event) => shoppingCartDispatch(productRemoved(id))}
        >
          <Delete />
        </IconButton>
      }
    >
      <ListItemAvatar>
        <Avatar variant="square">
          <img
            src={media.length && media[0]}
            alt={title}
            style={{ width: "100%" }}
          />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={title}
        secondary={`${currency} ${current_price}`}
      />
    </ListItem>
  );
};
