import { Typography, Box, styled } from "@mui/material";

const imgurl =
  "https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90";

const Wrapper = styled(Box)`
  width: 80%;
  height: 65vh;
  background: #fff;
  margin: 80px 140px;
`;

const Container = styled(Box)`
  text-align: center;
  padding-top: 110px;
`;

const Image = styled("img")`
  width: 15%;
`;

const EmptyCart = () => {
  return (
    <Wrapper>
      <Container>
        <Image src={imgurl} alt="empty" />
        <Typography>Your cart is empty!</Typography>
        <Typography>Add items to it now.</Typography>
      </Container>
    </Wrapper>
  );
};

export default EmptyCart;
