import { Grid, Box, Typography, styled, Button } from "@mui/material";
import { useSelector } from "react-redux";
import CartItems from "./CartItems";
import EmptyCart from "./EmptyCart";
import TotalView from "./TotalView";

// css
const Wrapper = styled(Grid)(({ theme }) => ({
  padding: "30px 135px",
  [theme.breakpoints.down('md')]: {
    padding: '15px 0'
  }
}));

const Heading = styled(Box)`
  padding: 15px 24px;
  background-color: #fff;
`;

const ButtonWrapper = styled(Box)`
  padding: 16px 22px;
  background: #fff;
  box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
  border-top: 1px solid #f0f0f0;
`;

const StyledButton = styled(Button)`
  margin-left: auto;
  background: #fb641b;
  display: flex;
  color: #fff;
  width: 250px;
  height: 51px;
`;

const LeftContainer = styled(Grid)(({ theme }) => ({
  paddingRight: 15,
  [theme.breakpoints.down("md")]: {
    marginBottom: 15,
  },
}));

const Cart = () => {
  const { cartItem } = useSelector((state) => state.cart);

  return (
    <>
      {cartItem.length ? (
        <Wrapper container>
          <LeftContainer item lg={9} md={9} sm={12} xs={12}>
            <Heading>
              <Typography> My Cart({cartItem.length})</Typography>
            </Heading>
            {cartItem.map((item) => (
              <CartItems item={item} />
            ))}
            <ButtonWrapper>
              <StyledButton>Place Order</StyledButton>
            </ButtonWrapper>
          </LeftContainer>

          <Grid item lg={3} md={3} sm={12} xs={12}>
            <TotalView cartItem={cartItem} />
          </Grid>
        </Wrapper>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default Cart;
