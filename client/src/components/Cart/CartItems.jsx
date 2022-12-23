import { Box, styled, Typography, Button } from "@mui/material";
import GroppedButton from "./GroppedButton";
import addEllipsis from "../../utils/util";
import { useDispatch } from "react-redux";
import removeFromCart from "../../redux/actions/cartActions";
const fassured =
  "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
//css
const Component = styled(Box)`
  display: flex;
  border-top: 1px solid #f0f0f0;
  background-color: #fff;
`;

const LeftComponent = styled(Box)`
  margin: 20px;
  display: flex;
  flex-direction: column;
`;

const SmallText = styled(Typography)`
  color: #878787;
  font-size: 14px;
  margin-top: 10px;
`;

const Cost = styled(Box)`
  font-size: 18px;
  font-weight: 600;
`;

const Remove = styled(Button)`
  margin-top: 30px;
  font-size: 16px;
  color: #000000;
  font-weight: 600;
`;
const CartItems = ({ item }) => {
  const dispatch = useDispatch();
  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <Component>
      <LeftComponent>
        <img
          src={item.url}
          alt="flipKart"
          style={{ height: 110, width: 110 }}
        />
        <GroppedButton />
      </LeftComponent>
      <Box style={{ marginTop: 20 }}>
        <Typography>{addEllipsis(item.title.longTitle)}</Typography>
        <SmallText>
          Seller:RetailNet
          <Box component="span">
            <img
              src={fassured}
              alt="flipKart assured"
              style={{ width: 50, marginLeft: 10 }}
            ></img>
          </Box>
        </SmallText>
        <Typography style={{ margin: "20 0" }}>
          <Cost style={{ fontSize: 28 }} component="span">
            ₹{item.price.cost}
          </Cost>
          &nbsp;&nbsp;&nbsp;
          <Box style={{ color: "#878787" }} component="span">
            <strike>₹{item.price.mrp}</strike>
          </Box>
          &nbsp;&nbsp;&nbsp;
          <Box style={{ color: "#388E3C" }} component="span">
            {item.price.discount}
          </Box>
        </Typography>
        <Remove onClick={() => removeItemFromCart(item.id)}>Remove</Remove>
      </Box>
    </Component>
  );
};

export default CartItems;
