import styled from 'styled-components';

export const WrapHeader = styled.header`
  width: 100%;
  padding: 15px;
  min-height: 80px;
  height: auto;
  position: absolute;
  z-index: 10;
  top: 0;
  box-sizing: border-box;
  background: white;
  display: flex;
  align-items: center;
  box-shadow: 1px -2px 14px -9px rgba(0, 0, 0, 0.4);
`;

export const WrapContainer = styled.div`
  max-width: 1160px;
  margin: 0 auto;
  width: 100%;
  display: inline-flex;
  justify-content: space-between;

  @media (max-width: 800px) {
    display: flex;
    justify-content: center;
  }
`;

export const Heading = styled.h1`
  margin: 5px 0;
  color: #3d4451;
  font-size: 18px;
  font-weight: 500;
  margin-left: 5px;
  align-items: center;
  display: flex;
  min-width: 150px;
  justify-content: space-between;

  @media (max-width: 800px) {
    display: none;
  }
`;
