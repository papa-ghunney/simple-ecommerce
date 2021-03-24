import React from "react";
import { useGlobalContext } from "../context/products-context";
import FeaturedProduct from "./shared/FeaturedProduct";
import styled from "styled-components";

const CollectionContainer = styled.div`
  margin-top: 0rem;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    margin-left: 2rem;
  }

  @media screen and (max-width: 760px) {
    width: 100%;

    h2 {
      text-align: start;
      margin-left: 2.8rem;
    }
  }
`;
const CollectionItems = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;

  @media screen and (max-width: 760px) {
    width: 85%;
    flex-direction: column;
  }
`;

const FeaturedCollection = () => {
  const { products } = useGlobalContext();
  //We're getting just 4 products from our total products and passinfg them down to our
  //Featured Product
  const productItems = products
    .filter((product, i) => i < 4)
    .map(product => <FeaturedProduct {...product} key={product.id} />);
  return (
    <CollectionContainer>
      <h2>Featured Collection</h2>
      <CollectionItems>{productItems}</CollectionItems>
    </CollectionContainer>
  );
};

export default FeaturedCollection;
