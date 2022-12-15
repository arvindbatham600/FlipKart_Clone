import { navData } from "../../constants/data";
import { Box, styled, Typography } from "@mui/material";

// css
const Wrapper = styled(Box)`
  display: flex;
  margin: 0 100px 5px 100px;
  justify-content: space-between;
  //   text-align: center;
`;

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
    <Wrapper>
      {navData.map((data) => (
        <Container>
          <img
            src={data.url}
            alt="image"
            style={{
              width: 64,
            }}
          />
          <Text>{data.text}</Text>
        </Container>
      ))}
    </Wrapper>
  );
};

export default Navbar;
