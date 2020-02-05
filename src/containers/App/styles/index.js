import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AppWrapper = styled.main`
    height: 100%;
    display: block;
    font-size: calc(10px + 2vmin);
    overflow-x: hidden;
    margin: 0 auto;
    background: transparent;
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
