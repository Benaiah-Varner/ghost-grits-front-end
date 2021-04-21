import styled from 'styled-components';

export const CheckoutStyled = styled.div`
  z-index: 10;
  background: white;
  position: absolute;
  left: 0;
  width: 100%;
  bottom: 0;
  height: auto;
  transform: translateY(86%);
  transition: all 0.3s;
  ${(props) => props.open && `transform: translateY(0%);`};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .checkout-button {
    align-content: center;
    width: 25%;
      margin: 3% auto;
      background-color: #e5426c;
      color: white;
      border: none;
      padding: 2% 3%;
      font-size: 1.25rem;
      font-weight: 200;
    }
    .checkout-button:hover {
      opacity: 0.7;
    }
  .orderDet {
    width: 100%;
    margin-top: 4%;
    box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
    height: 100%;
    p {
      font-size: 1rem;
      color: #662916;
      margin: 2% 0;
    }
    input {
      border: none;
      border-bottom: 1px solid #662916;
      padding: 2% 2%;
    }
    .total {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 5% 1%;
      h3,
      span {
        font-size: 1.5rem;
        color: #662916;
        margin-top: 5%;
      }
    }
    .card {
      margin: 1% 1%;
      padding: 2% 0;
      border-bottom: 1px solid #662916;
    }
    .total-date {
      margin: 4% 5%;
    }
    .date-time {
      width: 100%;
      display: flex;
      justify-content: space-between;
      .select-container {
        text-align: center;
        margin: 3% 1%;
        width: 100%;
        h3 {
          margin-bottom: 5%;
          color: #264327;
          padding: 0 2%;
        }
        .icon {
          margin: 0 4%;
        }
      }
    }
    .checkout-button {
    width: 40%;
    }
  }
  @media(max-width:420px){
    .checkout-button {
      padding: 2% 3%;
      font-size: 1rem;
    }
    .orderDet {
      .total-date {
        margin: 4% 0;
      }
    }
  }
`;
