import { Button, Box, Typography, styled } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Wrapper = styled(Box)`
  display: flex;
  margin-right: 3%;
  align-items: center;
    // gap: 50px;
  margin-left: 30px;
  & > *, & > button {
    margin-right: 50px;
    font-size: 14px;
  }
`;

const CustomButton = () => {
  return (
    <Wrapper>
      <Button
        sx={{
          backgroundColor: "#fff",
          color: "#2874f0",
          borderRadius: 0.5,
          padding: "5px 40px",
          textTransform: "none",
          fontWeight: 600,
          fontSize: 14,
          height: 30,
        }}
        variant="contained"
      >
        Login
      </Button>
      <Typography> Become a seller </Typography>
      <Typography> More </Typography>

      <Box
        sx={{
          display: "flex",
        }}
      >
        <ShoppingCartIcon
          sx={{
            marginRight: 1,
          }}
        />
        <Typography>Cart</Typography>
      </Box>
    </Wrapper>
  );
};

export default CustomButton;
