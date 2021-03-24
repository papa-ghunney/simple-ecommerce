import React from "react";
import { useGlobalContext } from "../../context/cart-context";
import Layout from "../../components/shared/Layout";
import CartItem from "./cart-item";
import Total from "./total";
import styled from "styled-components";

const CartHeading = styled.h2`
  font-size: 1.5rem;
  text-align: center;
`;

const EmptyCart = styled.p`
  text-align: center;
  margin: 5rem;
`;
const CartPageContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const ItemContainer = styled.div``;

const CartPage = () => {
  const {
    cartItems,
    itemCount,
    total,
    increase,
    decrease,
    removeProduct,
    clearCart,
  } = useGlobalContext();
  const funcs = { increase, decrease, removeProduct };
  return (
    <Layout>
      <CartHeading>Cart</CartHeading>
      {cartItems.length === 0 ? (
        <EmptyCart>Your Cart is empty</EmptyCart>
      ) : (
        <>
          <CartPageContainer>
            <ItemContainer>
              {cartItems.map((item) => (
                <CartItem {...item} key={item.id} {...funcs} />
              ))}
            </ItemContainer>
            <Total itemCount={itemCount} total={total} clearCart={clearCart} />
          </CartPageContainer>
        </>
      )}
    </Layout>
  );
};

export default CartPage;
