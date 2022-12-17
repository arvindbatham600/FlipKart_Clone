import {Box, Button, Typography, styled } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginDialog from "../Login/LoginDialog";

import { useState, useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import Profile from "./Profile";

const Wrapper = styled(Box)`
  display: flex;
  margin-right: 3%;
  align-items: center;
  // gap: 50px;
  margin-left: 30px;
  & > *,
  & > button {
    margin-right: 50px;
    font-size: 14px;
  }
`;

 const LoginButton = styled(Button)`
 background-color: #fff;
 color: #2874f0;
 border-radius: 2;
 padding: 5px 40px;
 text-transform: none;
 font-weight: 600; 
 font-size: 14px;
 height: 30px;
 `;

const CustomButton = () => {

  const [open, setOpen] = useState(false);
  const { account, setAccount } = useContext(DataContext);
  const openDialog =  ()  => {
    setOpen(true);
  }

  return (
    <Wrapper>
      {account ? (
        <Profile account={account} setAccount = {setAccount} />
      ) : (
        <LoginButton onClick={() => openDialog()} variant="contained">
          Login
        </LoginButton>
      )}

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
      <LoginDialog open={open} setOpen={setOpen} />
    </Wrapper>
  );
};

export default CustomButton;
