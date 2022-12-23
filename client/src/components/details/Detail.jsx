import { useEffect } from "react";
import { Box, styled, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/actions/productActions";
import ActionItem from "./ActionItem";
import ProductDetail from "./ProductDetail";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, product } = useSelector((state) => state.getProductDetails);

  const Wrapper = styled(Box)`
    background: #f2f2f2;
    margin-top: 55px;
  `;

  const Component = styled(Grid)(({ theme }) => ({
    background: "#FFFFFF",
    display: "flex",
    [theme.breakpoints.down("md")]: {
      margin: 0,
    },
  }));

  const RightContainer = styled(Grid)`
    margin-top: 50px;
    padding-left: 20px;
  `;

  useEffect(() => {
    if (product && id !== product.id) {
      dispatch(getProductDetails(id));
    }
  }, [dispatch, id, product, loading]);

  return (
    <Wrapper>
      {product && Object.keys(product).length && (
        <Component container>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <ActionItem product={product} />
          </Grid>
          <RightContainer item lg={8} md={8} sm={8} xs={12}>
            <ProductDetail product={product} />
          </RightContainer>
        </Component>
      )}
    </Wrapper>
  );
};

export default Detail;
