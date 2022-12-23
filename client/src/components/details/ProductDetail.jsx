import {
  Typography,
  Box,
  styled,
  Table,
  TableRow,
  TableCell,
} from "@mui/material";
import { LocalOffer as Badge } from "@mui/icons-material";

const fassured =
  "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

const SmallText = styled(Box)`
  font-size: 14px;
  vertical-align: baseline;
  & > * {
    font-size: 14px;
    margin-top: 10px;
  }
`;

const ColumnText = styled(Box)`
font-size:14px;
vertical-align:baseline;
& > td{
    font-size:14px;
    margin-top:10px;
    border:none;
}
`;

const StyledBadge = styled(Badge)`
  margin-right: 10px;
  color: #00cc00;
  font-size: 15px;
`;

const ProductDetail = ({ product }) => {
  const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);
  const adURL =
    "https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50";

  return (
    <>
      <Typography variant="h5" >{product.title.longTitle}</Typography>
      <Typography
        style={{
          marginTop: 5,
          color: "#878787",
          fontSize: 14,
        }}
      >
        8 Rating & 1 Review
        <Box component="span">
          <img
            style={{ width: 77, marginLeft: 20 }}
            src={fassured}
            alt="assuredImage"
          />
        </Box>
      </Typography>
      <Typography>
        <Box style={{ fontSize: 28 }} component="span">
          ₹{product.price.cost}
        </Box>
        &nbsp;&nbsp;&nbsp;
        <Box style={{ color: "#878787" }} component="span">
          <strike>₹{product.price.mrp}</strike>
        </Box>
        &nbsp;&nbsp;&nbsp;
        <Box style={{ color: "#388E3C" }} component="span">
          {product.price.discount}
        </Box>
      </Typography>
      {/* // offers from here */}
      <Typography>Available offers</Typography>
      <SmallText>
        <Typography>
          {" "}
          <StyledBadge />
          Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card
        </Typography>
        <Typography>
          <StyledBadge />
          Bank Offer 10% Off on Bank of Baroda Mastercard debit card first time
          transaction, Terms and Condition apply
        </Typography>
        <Typography>
          <StyledBadge />
          Purchase this Furniture or Appliance and Get Extra ₹500 Off on Select
          ACs
        </Typography>
        <Typography>
          <StyledBadge />
          Partner OfferExtra 10% off upto ₹500 on next furniture purchase
        </Typography>
      </SmallText>
      {/* // table */}
      <Table style = {{marginBottom:10}} >
        <ColumnText>
          <TableCell
            style={{
              color: "#878787",
            }}
          >
            Delivery
          </TableCell>
          <TableCell
            style={{
              fontWeight: 600,
            }}
          >
            Delivered By {date.toDateString()} | ₹40
          </TableCell>
        </ColumnText>

        <ColumnText>
          <TableCell
            style={{
              color: "#878787",
            }}
          >
            Warranty
          </TableCell>
          <TableCell
            style={{
              fontWeight: 600,
            }}
          >
            No Warranty
          </TableCell>
        </ColumnText>

        <ColumnText>
          <TableCell style={{ color: "#878787" }}>Seller</TableCell>
          <TableCell>
            <Box component="span" style={{ color: "#2874f0" }}>
              SuperComNet
            </Box>
            <Typography>GST invoice available</Typography>
            <Typography>View more sellers starting from ₹329</Typography>
          </TableCell>
        </ColumnText>

        <ColumnText>
          <TableCell colSpan={2}>
            {" "}
            <img src={adURL} alt="FlipkartCoin" style={{ width: 390 }} />{" "}
          </TableCell>
        </ColumnText>

        <ColumnText>
          <TableCell>Description</TableCell>
          <TableCell>{product.description}</TableCell>
        </ColumnText>
      </Table>
    </>
  );
};

export default ProductDetail;
