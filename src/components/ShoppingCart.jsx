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
import { useState } from "react";
import DrawerHeader from "./DrawerHeader";

const drawerWidth = 380;
const ShoppingCart = (props) => {
  const { toggleDrawer, state } = props;
  const [products, setProduct] = useState([
    {
      id: 1,
      title: "New Bag",
      price: "200",
      mediaSrc: "/images/product.jpg",
    },
  ]);

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
  const { title, price, mediaSrc } = props;
  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="delete">
          <Delete />
        </IconButton>
      }
    >
      <ListItemAvatar>
        <Avatar variant="square">
          <img src={mediaSrc} alt={title} style={{ width: "100%" }} />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={title} secondary={price} />
    </ListItem>
  );
};
