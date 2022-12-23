import { InputBase, Box, styled, List, ListItem } from "@mui/material";
import { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector, useDispatch } from "react-redux";
import { getProducts as ListProducts } from "../../redux/actions/productActions";
import { Link } from "react-router-dom";
//css
const SearchContainer = styled(Box)`
  background: #fff;
  width: 36%;
  margin-left: 10px;
  border-radius: 2px;
  display: flex;
`;

const InputBaseContainer = styled(InputBase)`
  font-size: unset;
  width: 100%;
  padding-left: 20px;
`;

const SearchIconWrapper = styled(Box)`
  color: #2874f0;
  margin-left: auto;
  padding: 5px;
  display: flex;
`;

const ListWrapper = styled(List)`
  position: absolute;
  color: #000;
  background: #ffffff;
  margin-top: 36px;
`;

const Search = () => {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(true);

  const getText = (Text) => {
    setText(Text);
    setOpen(false);
  };

  const getProducts = useSelector((state) => state.getProducts);
  const { products } = getProducts;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ListProducts());
  }, [dispatch]);

  return (
    <SearchContainer>
      <InputBaseContainer
        onChange={(e) => getText(e.target.value)}
        placeholder="Search for products, brands and more"
      />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      {text && (
        <ListWrapper hidden={open}>
          {products
            .filter((product) =>
              product.title.longTitle.toLowerCase().includes(text.toLowerCase())
            )
            .map((product) => (
              <ListItem>
                <Link
                  to={`/product/${product.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                  onClick={() => {
                    setOpen(true);
                    text = ''
                  }}
                >
                  {product.title.longTitle}
                </Link>
              </ListItem>
            ))}
        </ListWrapper>
      )}
    </SearchContainer>
  );
};

export default Search;
