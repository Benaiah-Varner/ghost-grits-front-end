import styled from 'styled-components';

export const OrderStyled = styled.div`
    height: 75%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'Montserrat', sans-serif;
    .order-reciept {
    margin-top: 150px;
    margin-bottom: 3%;
    border: 1px solid pink;
    border-radius: 20px;
    overflow: auto;
    padding: 2%;
    h1 {
      font-size: 2.5rem;
      color: #662916;
      font-weight: 100;
      position: relative;
      text-align: center;
      padding-bottom: 3%;
      margin-bottom: 2%;
      font-weight: 400;
    }
    h1:before {
    content: ' ';
    width: 35%;
    position: absolute;
    z-index: 2;
    top: 1px;
    left: 33%;
    right: 1px;
    bottom: 1px;
    border-bottom: 2px solid #264327;
    transform: skewY(-1.5deg);
  }
  h1:after {
    content: ' ';
    position: absolute;
    width: 35%;
    z-index: 2;
    top: 0px;
    left: 33%;
    right: 0px;
    bottom: 0px;
    border-bottom: 2px solid #264327;
    transform: skewY(1deg);
  }
    h3 {
    font-size: 1.75rem;
    font-weight: 300;
    margin: 4% 0;
    color: #662916;
  }
  h4 {
    font-size: 1.25rem;
    font-weight: 300;
    margin: 4% 0;
    color: #e5426c;
  }
  p {
      color: #662916;
  }
}
button {
    align-content: center;
    width: auto;
    margin: 3% auto;
    background-color: #e5426c;
    border: none;
    padding: 1% 2%;
    font-size: 1rem;
    font-weight: 200;
    p {
      color: white;
    }
}
button:hover {
  opacity: 0.7;
}
`;