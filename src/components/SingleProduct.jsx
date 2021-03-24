import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../context/products-context";
import { useGlobalContext as CartGlobal } from "../context/cart-context";
import Layout from "./shared/Layout";
import { Button } from "./Button";
import { isInCart } from "../helpers";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

//STYLING!!

const SingleProductContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  margin: auto;

  @media screen and (max-width: 760px) {
    flex-direction: column;
  }
`;
const ProductImage = styled.div`
  margin-left: 2rem;
  margin-top: 4rem;

  img {
    width: 80%;
  }

  @media screen and (max-width: 760px) {
    margin: 2rem auto;
    img {
      width: 100%;
      margin-top: 0rem;
    }
  }
`;
const ProductDetail = styled.div`
  margin: 4rem 0;
  margin-left: -4rem;
  h3 {
    margin-bottom: 2rem;
  }
  p {
    line-height: 1.5;
  }

  @media screen and (max-width: 760px) {
    margin: 2rem auto;

    h3 {
      margin: -3rem auto;
      margin-bottom: 0.5rem;
    }

    p {
      line-height: 1.1;
    }
  }
`;
const ButtonWrap = styled.div`
  margin: 2rem 0;
  @media screen and (max-width: 760px) {
    margin: 1rem auto;
  }
`;
const ProductDescription = styled.div``;

//CODE!

const SingleProduct = ({ match, history: { push } }) => {
  //We want to pull of a single product here
  const { products } = useGlobalContext();
  const { increase, addProduct, cartItems } = CartGlobal();
  const { id } = match.params;
  const [product, setProduct] = useState(null);

  const itemInCart = isInCart(product, cartItems);

  //We will loop over the products array here and we find the id that gets passed from match.params
  useEffect(() => {
    // We wrap it a number to make
    const product = products.find(item => Number(item.id) === Number(id));

    //if product does not exist , redirect to shop page
    if (!product) {
      return push("/products");
    }
    setProduct(product);
  }, [id, push, products]);

  //while we check for product
  if (!product) return null;
  const { imageUrl, title, price, description } = product;
  return (
    <>
      <Layout>
        <SingleProductContainer>
          <ProductImage>
            <img src={imageUrl} alt="" />
          </ProductImage>
          <ProductDetail>
            <h3>{title}</h3>
            <p>{price}</p>
            <ButtonWrap>
              {!itemInCart && (
                <Button primary onClick={() => addProduct(product)}>
                  ADD TO CART
                </Button>
              )}
              {itemInCart && (
                <Button primary onClick={() => increase(product)}>
                  ADD MORE
                </Button>
              )}
              <Button>PROCEED TO CHECKOUT</Button>
              <ProductDescription>{description}</ProductDescription>
            </ButtonWrap>
          </ProductDetail>
        </SingleProductContainer>
      </Layout>
    </>
  );
};

export default withRouter(SingleProduct);

//We first need to check whether the product is actually in the product list
//We also want to get the root param of the product if it is id: 1 or 2 etc
//We will also get root id from router
