import styled from 'styled-components';

export const Tile1 = styled.div`
  background: red;
  background: url('/Images/bass.jpg') no-repeat center center/cover;
  height: 500px;
  position: relative;
  .eatery {
    opacity: 90%;
    position: absolute;
    top: 0;
    left: 0;
    width: 33%;
    height: 100%;
    background: #efd85a;
  }
  .menu {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 20%;
    top: 400px;
    background: white;
    border: none;
    font-size: 20px;
    font-family: 'Montserrat', sans-serif;
    position: absolute;
    right: 58px;
    opacity: none;
    padding: 0.5% 1%;
    cursor: pointer;
    p {
      margin: 0;
      padding: 0 5%;
      color: black;
    }
  }
  .menu:hover {
    transition: background 2s ease-out;
    color: white;
    background: linear-gradient(to right, #e3c634, #e56e6b);
    p {
      color: white;
    }
  }
  .menu-link {
    color: black;
  }
  @media(max-width: 850px) {
    .eatery {
      width: 60%;
    }
  }
  @media(max-width: 420px) {
    .eatery {
      width: 100%;
      opacity: 1;
    }
  }
`;
