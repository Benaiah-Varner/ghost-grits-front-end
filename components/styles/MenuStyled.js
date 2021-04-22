import styled from 'styled-components';

export const MenuStyled = styled.div`
  --pink-color: #e5426c;
  --brown-color: #662916;
  --margin: 2% 0;
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }
  font-weight: 300;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h4 {
    margin: 5% 0;
  }
  h3 {
    font-size: 1.75rem;
    font-weight: 300;
    margin: var(--margin);
    max-width: 90%;
    font-family: 'Montserrat', sans-serif;
    color: var(--pink-color);
  }
  p {
    font-size: 1.25rem;
    margin: var(--margin);
    color: var(--brown-color);
  }
  .addToCart {
    background-color: var(--pink-color);
    margin: var(--margin);
    color: white;
    border: none;
    padding: 1.5% 2.5%;
    font-size: 1.25rem;
    font-weight: 200;
    .icon {
      margin-right: 1rem;
    }
  }
  .addToCart:hover {
    opacity: 0.7;
  }
  .menu-container {
    margin-top: 14%;
    width: 35%;
    .headline {
      letter-spacing: .5rem;
      margin: 20% 0;
    }
    h1 {
    margin: 8% 0;
    color: #662916;
    font-weight: 400;
    text-align: center;
  }
    .menu-item {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin: 20px 0px;
      position: relative;
      span {
        color: var(--pink-color);
        position: absolute;
        right: 5px;
        font-size: 1.5rem;
      }
    }
    .salad {
      position: relative;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin: 6% 0px;
      span {
        color: var(--pink-color);
        position: absolute;
        right: 5px;
        font-size: 1.5rem;
      }
    }
  }
  .select {
    margin: var(--margin);
    width: 50%;
  }
  @media(max-width: 900px) {
    .menu-container{
      width: 90%;
    }
    .headline {
      margin: 0;
      font-size: 1.4rem;
    }
    h1 {
      font-size: 1.4rem;
    }
    h3 {
      font-size: 1.2rem;
    }
    p {
      font-size: 1rem;
    }
  }
  @media(max-width: 420px) {
    .select {
      width: 75%;
    }
  }
`;
