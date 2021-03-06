import styled from 'styled-components';

const CartStyles = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }
  padding: 20px;
  position: relative;
  background: white;
  position: fixed;
  top: 0%;
  right: 0;
  width: 30%;
  min-width: 400px;
  bottom: 0;
  transform: translateX(100%);
  transition: all 0.3s;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
  z-index: 5;
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100%;
  ${(props) => props.open && `transform: translateX(0);`};
  ul {
    z-index: -5;

  }
  .cart-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h1 {
    color: #662916;
    font-weight: 400;
    text-align: center;
  }
  .cartItem {
    margin: 5% 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    * {
      margin: 0;
      padding: 0;
    }
    h3 {
      font-size: 1.5rem;
      font-weight: 300;
      font-family: 'Montserrat', sans-serif;
      color: #e5426c;
    }
    h4 {
      color: white;
      font-size: 1.5rem;
      background-color: #264327;
      padding: 0 5px;
    }
    p {
      font-size: 1rem;
      color: #662916;
      margin: 2% 0;
    }
    .order-item {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-align: center;
    }
  }
  footer {
    margin-bottom: 10%;
    form {
      display: flex;
      flex-wrap: no-wrap;
      flex-direction: column;
      .names {
        display: flex;
        input {
          margin: 1%;
          width: 50%;
        }
      }
      .email {
        display: flex;
        input {
          margin: 1%;
          width: 100%;
        }
      }
    }
  }
  @media(max-width: 420px) {
    min-width: 350px;
    .cartItem {
      h3 {
        font-size: 1.25rem;
        font-weight: 300;
        font-family: 'Montserrat', sans-serif;
        color: #e5426c;
      }
      p {
        text-align: center;
        font-size: 0.9rem;
      }
    }
  }
`;

export default CartStyles;
