import { navData } from "../../constants/data";
import { Box, styled, Typography } from "@mui/material";

// css
const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  margin: "0px 130px 0 130px",
  justifyContent: "space-between",
  overflow: "hidden",
  [theme.breakpoints.down("lg")]: {
    margin: 0,
  },
}));

const Container = styled(Box)`
  text-align: center;
  padding: 12px 8px;
`;

const Text = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
  opacity: 0.8;
`;

const Navbar = () => {
  return (
    <Box
      style={{
        backgroundColor: "#fff",
      }}
    >
      <Wrapper>
        {navData.map((data) => (
          <Container>
            <img
              src={data.url}
              alt="Product's images"
              style={{
                width: 64,
              }}
            />
            <Text>{data.text}</Text>
          </Container>
        ))}
      </Wrapper>
    </Box>
  );
};

export default Navbar;
