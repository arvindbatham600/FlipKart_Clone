import { InputBase, Box, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
//css
const SearchContainer = styled(Box)`
  background: #fff;
  width: 38%;
  margin-left: 10px;
  border-radius: 2px;
  display: flex;
`;

const InputBaseContainer = styled(InputBase)`
  // font-size: unset;
  width: 100%;
  padding-left: 20px;
`;

const SearchIconWrapper = styled(Box)`
color: #2874f0;
margin-left: auto;
padding: 5px;
display: flex;
`;

const Search = () => {
  return (
    <SearchContainer>
      <InputBaseContainer placeholder="Search for products, brands and more" />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
    </SearchContainer>
  );
};

export default Search;
