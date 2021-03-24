import { Button } from "../Button";
import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { useGlobalContext } from "../../context/cart-context";
import { isInCart } from "../../helpers";

const FeaturedProductContainer = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.125);
  padding: 1rem;
  margin-left: 1.5rem;
  margin-right: 1rem;

  @media screen and (max-width: 760px) {
    width: 100%;
    border: none;
  }
`;
const ProductImage = styled.div`
  img {
    width: 100%;
    margin-right: 10px;
    cursor: pointer;
  }

  @media screen and (max-width: 760px) {
    margin-bottom: 5px;
  }
`;
const ProductDetails = styled.div`
  h3 {
    font-size: 1.3rem;
    line-height: 1.5rem;
    margin-bottom: 5px;
  }
  p {
    font-size: 1.1rem;
    line-height: 1.2rem;
    margin-bottom: 1rem;
  }
`;

const FeaturedProduct = props => {
  const { title, imageUrl, price, history, id, description } = props;
  const product = { title, imageUrl, price, id, description };
  const { addProduct, increase, cartItems } = useGlobalContext();
  const itemInCart = isInCart(product, cartItems);
  return (
    <FeaturedProductContainer>
      <ProductImage onClick={() => history.push(`/product/${id}`)}>
        <img src={imageUrl} alt="product" />
      </ProductImage>
      <ProductDetails>
        <h3>{title}</h3>
        <p>{price}</p>
        {/* we're checking if a product is not in cart and display a particuular label of button */}
        {!itemInCart && (
          <Button primary onClick={() => addProduct(product)}>
            ADD TO CART
          </Button>
        )}
        {itemInCart && (
          <Button onClick={() => increase(product)}>ADD MORE</Button>
        )}
      </ProductDetails>
    </FeaturedProductContainer>
  );
};

export default withRouter(FeaturedProduct);
