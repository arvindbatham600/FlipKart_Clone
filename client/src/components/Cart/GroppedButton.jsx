import { ButtonGroup, Button, styled } from "@mui/material";
import { useState } from "react";

const StyledButton = styled(Button)`
  border-radius: 50%;
`;

const Component = styled(ButtonGroup)`
  margin-top: 20px;
`;

const GroppedButton = () => {
  const [counter, setCounter] = useState(1);
  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  return (
    <Component>
      <StyledButton disabled={counter === 0} onClick={() => handleDecrement()}>
        -
      </StyledButton>
      <Button disabled style = {{color:'#000'}} >{counter}</Button>
      <StyledButton onClick={() => handleIncrement()}>+</StyledButton>
    </Component>
  );
};

export default GroppedButton;
