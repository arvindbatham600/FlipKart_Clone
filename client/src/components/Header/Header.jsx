import * as React from "react";
import { AppBar, Box, Toolbar, styled, Typography } from "@mui/material";

// components
import Search from "./Search"
import CustomButton from "./CustomButton";

const StyledAppbar = styled(AppBar)`
  background-color: #2874f0;
  min-height: 55px;
`;

function Header() {
  const logoUrl =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subLogoUrl =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

  return (
    <>
      <StyledAppbar>
        <Toolbar>
          <Box
            sx={{
              marginLeft: "12%",
              lineHeight: 0,
            }}
          >
            <img src={logoUrl} alt="logo" style={{ width: 75 }} />
            <Box
              sx={{
                fontSize: 10,
                fontStyle: "italic",
                display: "flex",
              }}
            >
              <Typography>
                Explore&nbsp;
                <Box
                  component="span"
                  sx={{
                    color: "#ffe500",
                  }}
                >
                  Plus
                </Box>
              </Typography>
              <img src={subLogoUrl} alt="Plus logo" style={{
                width: 10,
                height: 10,
                marginLeft: 4,

              }} />
            </Box>
          </Box>
          <Search />
          <CustomButton />
        </Toolbar>
      </StyledAppbar>
    </>
  );
}

export default Header;
