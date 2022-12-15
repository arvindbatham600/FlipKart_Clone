import Navbar from "./Navbar";
import Banner from "./Banner";
import { Box, styled } from "@mui/material";

const BoxWrapper = styled(Box)`
  background: #f2f2F2;
  padding: 10px 10px;
`;

const Home = () => {
  return (
    <>
      <Navbar />
      <BoxWrapper>
        <Banner />
      </BoxWrapper>
    </>
  );
};

export default Home;
