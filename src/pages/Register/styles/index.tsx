import styled from 'styled-components';

export const AppWrapper = styled.section`
  height: 100%;
  width: 100%;
  font-size: calc(10px + 2vmin);
  overflow-x: hidden;
  text-align: left;
  margin: 0 auto;
  background: ${props => props.theme.palette.secondary.main};
  box-sizing: border-box;
`;

export const CenteredDiv = styled.div`
  display: flex;
  overflow: hidden;
  height: 100%;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  img {
    width: 200px;
    position: relative;
    margin-bottom: 45px;
  }

  @media (max-width: 1000px) {
    img {
      left: 0;
    }
  }
`;

export const StyledSVG = styled.div`
  svg {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
    opacity: 0.2;

    &.wave {
      &--second {
        width: 110%;
      }
    }
  }

  @media (max-width: 1000px) {
    svg {
      display: none;
    }
  }
`;
