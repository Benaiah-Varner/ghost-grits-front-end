import styled from 'styled-components';
import { useState } from 'react';
import NavLinks from './NavLinks';
import { useCart } from '../lib/cartState';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const HeaderStyled = styled.div`
  width: 100%;
  background: #f0f0f0;
  position: fixed;
  z-index: 5;
  height: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .logo-menu {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .logo {
    cursor: pointer;
  }
  img {
    height: 70px;
    object-fit: contain;
  }
 .navCluster {
   position: absolute;
   right: 0;
   margin-right: 1%;
   width: 5%;
    font-size: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .cartButton {
      padding-right: 5%;
    }
 }
 @media(max-width: 1600px) {
   .navCluster {
   width: 10%;
   justify-content: space-around;
    .cartButton {
      padding-right: 5%;
    }
 }
}
 @media(max-width: 868px) {
   .navCluster {
   width: 15%;
   justify-content: space-around;
 }
 img {
    height: 60px;
    object-fit: contain;
  }
 }

 @media(max-width: 468px) {
   .navCluster {
   width: 20%;
   justify-content: space-around;
 }
 .logo-menu {
    margin-left: 1%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  img {
    height: 50px;
    object-fit: contain;
  }
 }
`;

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  transform-origin: 1px;
  div {
    transition: all 0.2s linear;
    border-bottom: 3px solid black;
    border-radius: 10px;

    &:nth-child(1) {
      transform: ${({ open }) =>
        open ? 'rotate(45deg) translateY(15px)' : 'rotate(0deg)'};
    }
    &:nth-child(2) {
      opacity: ${({ open }) => (open ? '0%' : '100%')};
    }
    &:nth-child(3) {
      transform: ${({ open }) =>
        open ? 'rotate(-45deg) translateY(-15px)' : 'rotate(0deg)'};
    }
  }
`;

const Header = () => {
  const [open, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(!open);
  };

  const { openCart } = useCart();

  return (
    <HeaderStyled className="header">
      <div className="logo-menu">
        <div className="logo">
          <Link href="/">
            <img src="/Images/logo-ghost-grits-horz-tag.png" alt="" />
          </Link>
        </div>
        <div className='navCluster'>
          <div className='cartOpen'>
              <FontAwesomeIcon className='cartButton' onClick={openCart} icon={faShoppingCart} />
          </div>
          <StyledBurger onClick={onOpen} open={open}>
            <div></div>
            <div></div>
            <div></div>
          </StyledBurger>
        </div>
      </div>
      <NavLinks open={!open} />
    </HeaderStyled>
  );
};

export default Header;
