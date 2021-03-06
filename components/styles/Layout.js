import styled from 'styled-components';
// 2491 total height of homepage rows
export const Layout = styled.div`
  width: 100%;
    * {
        font-weight: 100;
    }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.9rem;
    color: #662916;
    letter-spacing: 12px;
    font-weight: 100;
    position: relative;
    padding: 8% 40px;
  }
  position: relative;
  h1:before {
    content: ' ';
    width: 35%;
    position: absolute;
    z-index: 2;
    top: 1px;
    left: 40px;
    right: 1px;
    bottom: 1px;
    border-bottom: 2px solid #662916;
    transform: skewY(-1.5deg);
  }
  h1:after {
    content: ' ';
    position: absolute;
    width: 35%;
    z-index: 2;
    top: 0px;
    left: 40px;
    right: 0px;
    bottom: 0px;
    border-bottom: 2px solid #662916;
    transform: skewY(1deg);
  }
  p {
    color: #662916;
    line-height: 1.5;
    font-size: 1.2rem;
    font-family: 'Montserrat', sans-serif;
    padding: 8% 40px;
  }
  .home-container {
    position: absolute;
    top: 80px;
  }
  .one {
        margin-right: 16px;
    }
    @media(max-width: 1480px) {
    h1 {
    font-size: 1.5rem;   
    }
  }
  @media(max-width: 700px) {
    p {
      font-size: 1.1rem;
    }
  }
`;
