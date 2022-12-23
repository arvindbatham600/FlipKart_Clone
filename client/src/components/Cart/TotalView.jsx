import { Typography, Box, styled } from "@mui/material";
import { useState, useEffect } from "react";


const Header = styled(Box)`
  padding: 15px 24px;
  background: #fff;
  border-bottom: 1px solid #f0f0f0;
`;

const Heading = styled(Typography)`
  color: #878787;
`;

const TotalView = ({ cartItem }) => {
    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0);
    useEffect(() => {
      totalAmount();
      // eslint-disable-next-line
    }, [cartItem])
    
    const totalAmount = () => {
      let price = 0,
        discount = 0;
      // eslint-disable-next-line
      cartItem.map((item) => {
        price += item.price.mrp;
        discount += item.price.mrp - item.price.cost;
      });
      setPrice(price);
      setDiscount(discount);
    }

    const Container = styled(Box)`
    padding: 15px 24px;
    background: #fff;
    & > p {
        margin-bottom: 20px;
        font-size: 14px;
    }`;

    const Price = styled(Box)`
    float:right;
    `;

    const TotalAmount = styled(Typography)`
      font-size: 18px;
      font-weight: 600;
      border-top: 1px dashed #e0e0e0;
      padding: 20px 0;
      border-bottom: 1px dashed #e0e0e0;
    `;
    const Discount = styled(Typography)`
      font-size: 16px;
      color: green;
    `;

  return (
    <Box>
      <Header>
        <Heading>PRICE DETAILS</Heading>
      </Header>
      <Container>
        <Typography>
          Price ({cartItem?.length} item)
          <Price component="span">₹{price}</Price>
        </Typography>
        <Typography>
          Discount
          <Price component="span">-₹{discount}</Price>
        </Typography>
        <Typography>
          Delivery Charges
          <Price component="span">₹40</Price>
        </Typography>
        <TotalAmount>
          Total Amount
          <Price component="span">₹{price - discount + 40}</Price>
        </TotalAmount>
        <Discount>You will save ₹{discount - 40} on this order</Discount>
      </Container>
    </Box>
  );
};

export default TotalView;
