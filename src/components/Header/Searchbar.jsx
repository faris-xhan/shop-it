import SearchIcon from "@mui/icons-material/Search";
import SearchAndornment from "./SearchAndornment";
import { TextField, SwipeableDrawer, IconButton } from "@mui/material";
import { useState } from "react";

const Searchbar = (props) => {
  const { toggleDrawer, state } = props;
  const [searchInput, setSearchInput] = useState("");
  const [andornmentType, setAndornmentType] = useState("search");

  const onClose = () => {
    setSearchInput("");
    setAndornmentType("close");
  };

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
    if (event.target.value) {
      setAndornmentType("close");
    }
  };

  return (
    <div>
      <IconButton onClick={toggleDrawer(true)}>
        <SearchIcon />
      </IconButton>
      <SwipeableDrawer
        anchor="bottom"
        open={state}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <form
          action="/search"
          style={{
            padding: "2rem 2rem 18rem 2rem",
          }}
        >
          <TextField
            id="search"
            placeholder="Search"
            variant="standard"
            value={searchInput}
            onChange={handleSearchInputChange}
            InputProps={{
              endAdornment: (
                <SearchAndornment type={andornmentType} onClose={onClose} />
              ),
              style: { fontSize: "2rem" },
            }}
            fullWidth
          />
        </form>
      </SwipeableDrawer>
    </div>
  );
};

export default Searchbar;
