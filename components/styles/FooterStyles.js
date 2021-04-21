import styled from 'styled-components';

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .border {
    text-align: center;
    width: 100%;
  }
  .border h1 {
    width: 50%;
    margin: 0 auto;
  }
  .border h1:before {
    content: ' ';
    margin: 0 auto;
    width: 35%;
    border-bottom: 2px solid #662916;
    transform: skewY(-1.5deg);
  }
  .border h1:after {
    content: ' ';
    position: absolute;
    margin: 0 auto;
    border-bottom: 2px solid #662916;
    transform: skewY(1deg);
  }
  .footer-content {
    width: 75%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    ul {
      list-style: none;
      line-height: 1.5;
      color: #662916;
      font-size: 16px;
      font-family: 'Montserrat', sans-serif;
    }
  }
  .footer-content h4 {
    padding: 20px;
    color: #662916;
    font-size: 18px;
    font-weight: 300;
  }
  .list {
    margin: 48px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .follow-us ul {
    display: flex;
    flex-direction: row;
  }
  .follow-us ul li {
    margin: 0px 10px;
    font-size: 40px;
    color: #efd85a;
  }
  .copyright {
    text-align: center;
    width: 100%;
    background: #efd85a;
    color: white;
    padding: 20px;
  }
`;

export default Footer;
