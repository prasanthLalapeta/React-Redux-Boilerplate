import styled from 'styled-components';
import loadingIcon from 'images/loading.gif';

export const LoadingIndicator = styled.div`
  width: 30px;
  height: 30px;
  margin: 5px auto;
  background-size: 30px 30px;
  background-image: url(${loadingIcon});
  opacity: 0.5;
`;
