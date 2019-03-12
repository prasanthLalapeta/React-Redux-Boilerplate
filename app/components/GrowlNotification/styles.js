import styled from 'styled-components';

export const OverallWrapper = styled.div`
  position: fixed;
  top: 95px;
  left: 0;
  z-index: 111;
  width: 100%;
`;

export const Wrapper = styled.div`
  position: relative;
  min-height: 50px;
  width: 90%;
  margin-left: 5%;
  margin-bottom: 10px;
  padding: 10px 50px 10px 20px;
  border-radius: 10px;
  background: ${(props) => props.type === 'error' ? 'red' : 'green'};
  color: white;
`;

export const CloseIcon = styled.div`
  position: absolute;
  top: 12px;
  right: 10px;
  cursor: pointer;
  i {
    color: white;
  }
`;
