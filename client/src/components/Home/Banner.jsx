import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { bannerData } from "../../constants/data";
import { styled } from "@mui/system";

// css
const Image = styled("img")`
  width: 100%;
  height: 280px;
`;

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Banner = () => {
  return (
    <Carousel
      responsive={responsive}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      autoPlay={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      infinite={true}
      slidesToSlide={1}
      swipeable={false}
      draggable={false}
    >
      {bannerData.map((banner) => (
        <Image src={banner.url} alt="banner" />
      ))}
    </Carousel>
  );
};

export default Banner;