import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const Header = () => {
  const [burgerStatus, setBurgerStatus] = useState(false);
  return (
    <Container>
      <a href="/#">
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        <a href="/#">Model S</a>
        <a href="/#">Model 3</a>
        <a href="/#">Model X</a>
        <a href="/#">Model Y</a>
      </Menu>
      <RightMenu>
        <a href="/#">Shop</a>
        <a href="/#">Tesla Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        <li><a href="/#">Existing Inventory</a></li>
        <li><a href="/#">Used Inventory</a></li>
        <li><a href="/#">Trade-in</a></li>
        <li><a href="/#">Cybertruck</a></li>
        <li><a href="/#">Roadaster</a></li>
        <li><a href="/#">Semi</a></li>
        <li><a href="/#">Charging</a></li>
        <li><a href="/#">Powerwall</a></li>
        <li><a href="/#">Commercial Energy</a></li>
        <li><a href="/#">Utilities</a></li>
        <li><a href="/#">Test Drive</a></li>
        <li><a href="/#">Find Us</a></li>
        <li><a href="/#">Support</a></li>
        <li><a href="/#">Investor Relations</a></li>
      </BurgerNav>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  min-height: 4rem;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.25rem;
  top: 0;
  left: 0;
  right: 0;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 1rem;
    flex-wrap: nowrap;
  }

  @media (max-width: 791px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 1rem;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 19rem;
  z-index: ${props => props.show ? '100' : '-100'};
  list-style: none;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.2s;
  li {
    padding: 0.5rem 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 600;
    }
  }
  @media (max-width: 791px) {
    width: 100%;
  }
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;