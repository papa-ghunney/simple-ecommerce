import React from "react";
import styled from "styled-components";
import { menuData } from "../data/menuData";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import CartIcon from "./CartIcon";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  background: black;
  color: #fff;
`;
const NavLogo = styled(Link)`
  align-items: center;
  margin-left: 2rem;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
`;

const MenuBar = styled(FaBars)`
  display: none;

  @media screen and (max-width: 760px) {
    display: flex;
    justify-content: center;
    margin-top: 1.5rem;
    margin-right: 1rem;
    cursor: pointer;
  }
`;

const NavbarMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;
const NavItem = styled(Link)`
  justify-content: space-between;
  margin-right: 10px;
  text-decoration: none;
  color: #fff;
`;

const CartLogo = styled.div`
  margin-right: 2rem;
  margin-top: 1.5rem;
  @media screen and (max-width: 760px) {
    display: none;
  }
`;

const Navbar = ({ toggle }) => {
  return (
    <NavbarContainer style={{ display: "flex" }}>
      <NavLogo to="/">
        <img src="" alt="" />
        <h2>BOGA</h2>
      </NavLogo>
      <MenuBar onClick={toggle} />
      <NavbarMenu>
        {menuData.map((item) => (
          <NavItem key={item.id} to={item.path}>
            {item.name}
          </NavItem>
        ))}
      </NavbarMenu>
      <CartLogo>
        <CartIcon />
      </CartLogo>
    </NavbarContainer>
  );
};

export default Navbar;
