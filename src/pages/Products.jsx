import React from "react";
import Layout from "../components/shared/Layout";
import FeaturedProduct from "../components/shared/FeaturedProduct";
import { useGlobalContext } from "../context/products-context";
import styled from "styled-components";

const ProductListContainer = styled.div`
  margin: 2rem 0;
`;

const ProductTitle = styled.h2`
  font-size: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  margin-left: 2rem;
`;
const ProductList = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;

  @media screen and (max-width: 760px) {
    grid-template-columns: repeat(1, 1fr);
    width: 90%;
    padding: 5px;
    margin: 5px;
  }
`;

const Products = () => {
  const { products } = useGlobalContext();
  const allProducts = products.map(product => (
    <FeaturedProduct {...product} key={product.id} />
  ));
  return (
    <>
      <Layout>
        <ProductListContainer>
          <ProductTitle>Shop</ProductTitle>
          <ProductList>{allProducts}</ProductList>
        </ProductListContainer>
      </Layout>
    </>
  );
};

export default Products;
