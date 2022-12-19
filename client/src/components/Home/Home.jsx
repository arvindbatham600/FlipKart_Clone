import Navbar from "./Navbar";
import Banner from "./Banner";
import { Box, styled } from "@mui/material";
import { getProducts } from "../../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Slide from "./Slide";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";

const BoxWrapper = styled(Box)`
  background: #f2f2f2;
  padding: 10px 10px;
`;

const Home = () => {
  const { products } = useSelector((state) => state.getProducts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <>
      <Navbar />
      <BoxWrapper>
        <Banner />
        <MidSlide products={products} title="Deal of the Day" timer={true} />
        <MidSection />
        <Slide products={products} title="Discounts for you" timer = {false} />
        <Slide products={products} title="Suggested Items" timer = {false} />
        <Slide products={products} title="Top Selection"  timer = {false} />
        <Slide products={products} title="Trending Offers" timer = {false} />
        <Slide products={products} title="Season's top picks" timer = {false} />
        <Slide products={products} title="Top Deals on Accessories" timer = {false} />
      </BoxWrapper>
    </>
  );
};

export default Home;
