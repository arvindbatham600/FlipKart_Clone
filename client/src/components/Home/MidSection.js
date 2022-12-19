import { Grid, styled } from "@mui/material";
import { imageURL } from "../../constants/data";

const Component = styled(Grid)`
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
`;

const Image = styled("img")(({ theme }) => ({
  marginTop: 10,
  width: "100%",
  display: "flex",
  justifyContent: "space-betweenaround",
  [theme.breakpoints.down("md")]: {
    objectFit: "cover",
    height: 120,
  },
}));

const MidSection = () => {
  const url =
    "https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50";
  return (
    <>
      <Component container>
        {imageURL.map((image) => (
          <Grid item lg={4} md={4} sm={12} xs={12}>
            <img
              src={image}
              alt="images"
              style={{
                width: "100%",
              }}
            />
          </Grid>
        ))}
      </Component>
      <Image src={url} alt="banner" />
    </>
  );
};

export default MidSection;
