import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AppWrapper = styled.main`
  height: 100%;
  display: block;
  font-size: calc(10px + 2vmin);
  overflow-x: hidden;
  margin: 0 auto;
  background: transparent;

  .fade-enter {
    opacity: 0.01;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit.fade-exit-active {
    opacity: 0;
    transition: opacity 50ms ease-in;
  }
`;

export const AppMenu = styled.menu`
  display: flex;
  align-items: center;
`;

export const AppLink = styled(Link)`
  color: #11c76f;
  margin-right: 30px;

  &:hover {
    color: white;
  }
`;
