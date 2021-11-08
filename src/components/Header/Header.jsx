import { AppBar, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import Searchbar from "./Searchbar";
import ShoppingCart from "./ShoppingCart";

const Header = (props) => {
  const [state, setState] = useState(false);
  const [shoppingCartState, setShoppingCartState] = useState(false);
  const toggleDrawer = (state) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(state);
  };

  const toggleShoppingCart = (state) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setShoppingCartState(state);
  };

  return (
    <AppBar position="static" elevation={0} color="transparent">
      <Toolbar>
        <Typography variant="h5" style={{ flexGrow: 1 }}>
          Shop-
          <span style={{ fontWeight: "bold" }}>it</span>
        </Typography>
        <Searchbar toggleDrawer={toggleDrawer} state={state} />
        <ShoppingCart
          toggleDrawer={toggleShoppingCart}
          state={shoppingCartState}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
