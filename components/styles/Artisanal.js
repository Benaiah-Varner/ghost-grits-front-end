import styled from 'styled-components';

export const Artisanal = styled.div`
  background: url('/Images/bass.jpg') no-repeat center center/cover;
  height: 473px;
  position: relative;
  .eatery {
    position: absolute;
    top: 0;
    left: 0;
    width: 33%;
    height: 100%;
    opacity: 90%;
  }
  .coming-soon {
    margin: 30px 40px;
    color: #662916;
    border-bottom: 4px solid #df735a;
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    font-weight: bold;
  }
  .email-input {
    width: 60%;
    margin-top: 2%;
    margin-left: 40px;
    input {
      padding: 2% 1%;
      padding-right: 5%;
    }
    button {
      padding: 2.3%;
      background: #df735a;
      border: none;
      color: white;
      font-family: 'Montserrat', sans-serif;
      letter-spacing: 1.5px;
    }
  }
  @media(max-width: 420px) {
    width: 100%;
    .email-input {
      width: 90%;
      margin-bottom: 1%;
    }
  }
`;
