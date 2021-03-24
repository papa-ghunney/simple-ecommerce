import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useGlobalContext } from "../context/cart-context";

const CartContainer = styled.div``;
const CartIconLogo = styled(Link)`
  color: #fff;
`;

const CartCount = styled.span`
  margin-left: -0.5rem;
  padding-right: 5px;
  border-radius: 10px;
  background-color: #fff;
  color: #000;
`;

const CartIcon = ({ history }) => {
  const { itemCount, cartItems } = useGlobalContext();
  console.log("Cart Item", cartItems);
  return (
    <CartContainer>
      <CartIconLogo onClick={() => history.push("/cart")}>
        <ShoppingCartIcon />
        {itemCount > 0 ? <CartCount>{itemCount}</CartCount> : null}
      </CartIconLogo>
    </CartContainer>
  );
};

export default withRouter(CartIcon);
