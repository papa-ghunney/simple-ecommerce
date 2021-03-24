import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { Button } from "@material-ui/core";

const TotalContainer = styled.div`
  margin: 2rem;
  text-align: center;
`;
const TotalDetails = styled.div``;
const Checkout = styled.div``;

const Total = ({ itemCount, total, clearCart, history }) => {
  return (
    <TotalContainer>
      <TotalDetails>
        <p>Total Items: {itemCount}</p>
        <p>{`Total: $${total}`}</p>
      </TotalDetails>
      <Checkout>
        <Button
          variant="contained"
          color="primary"
          onClick={() => history.push("/checkout")}
        >
          CHECKOUT
        </Button>
        <Button variant="contained" onClick={() => clearCart()}>
          CLEAR
        </Button>
      </Checkout>
    </TotalContainer>
  );
};

export default withRouter(Total);
