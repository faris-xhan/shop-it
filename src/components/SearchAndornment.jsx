import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";

const SearchAndornment = (props) => {
  const { type, onClose } = props;
  return type === "search" ? (
    <SearchIcon />
  ) : (
    <IconButton onClick={onClose}>
      <CloseIcon />
    </IconButton>
  );
};

export default SearchAndornment;
