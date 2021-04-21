import styled from 'styled-components';

export const ContentRow = styled.div`
  height: 473px;
  margin-top: 16px;
  display: flex;
  .image {
    height: 473px;
    flex: 2;
    img {
      height: inherit;
      width: 100%;
      object-fit: cover;
    }
  }
  .content {
    flex: 1;
    background: #efd85a;
  }
  @media(max-width: 420px) {
      margin: 0;
      flex-direction: column;
height: auto;
justify-content: center;
align-items: center;
  }
`;
