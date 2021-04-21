import styled from 'styled-components';

export const ImageRow = styled.div`
margin: 16px 0px;
display: flex;
height: 365px;
img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.item1 {
  flex: 1;
}
.item2 {
  flex: 2;
}
.one {
  margin-right: 16px;
}
`;