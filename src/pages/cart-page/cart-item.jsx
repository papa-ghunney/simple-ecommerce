import React from "react";
import styled from "styled-components";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";

const CartItemContainer = styled.div`
  text-align: center;
  border: 1px solid #ccc;
  margin: 2rem;
  padding: 3rem;
  display: flex;
  justify-content: space-between;
`;
const ProductImage = styled.div`
  img {
    height: 90px;
  }
`;
const ProductDetails = styled.div`
  width: 200px;
  h3 {
    margin: 0;
  }
  p {
    font-size: 1rem;
    font-weight: normal;
  }
`;

const ButtonsWrapper = styled.div`
  button {
    border: none;
    padding: 0.5rem;
    cursor: pointer;
    font-size: 10px;
    margin-right: 5px;
  }

  .btn-increase {
    color: #fff;
    background-color: #1a1a1a;
  }

  .btn-delete,
  .btn-decrease {
    color: #fff;
    background-color: #d9534f;
  }
`;
const Quantity = styled.div`
  margin: 1rem;
`;

const CartItem = (props) => {
  const {
    id,
    description,
    title,
    imageUrl,
    price,
    quantity,
    increase,
    decrease,
    removeProduct,
  } = props;
  const product = { title, imageUrl, price, quantity, id, description };
  return (
    <CartItemContainer>
      <ProductImage>
        <img src={imageUrl} alt="" />
      </ProductImage>
      <ProductDetails>
        <h3>{title}</h3>
        <p>${price}</p>
      </ProductDetails>
      <Quantity>
        <p>{`Quantity: ${quantity}`}</p>
      </Quantity>
      <ButtonsWrapper>
        <button className="btn-increase" onClick={() => increase(product)}>
          <AddCircleOutlineIcon />
        </button>
        {quantity === 1 && (
          <button className="btn-delete" onClick={() => removeProduct(product)}>
            <DeleteOutlineIcon />
          </button>
        )}
        {quantity > 1 && (
          <button className="btn-decrease" onClick={() => decrease(product)}>
            <RemoveCircleOutlineIcon />
          </button>
        )}
      </ButtonsWrapper>
    </CartItemContainer>
  );
};

export default CartItem;
