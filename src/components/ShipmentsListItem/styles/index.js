import styled from 'styled-components';

export const Item = styled.li`
    background: white;
    border-radius: 5px;
    list-style: none;
    margin: 10px 0;
    padding: 15px 20px;
    font-size: 17px;
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 1px 8px -4px rgba(0, 0, 0, 0.4);
    cursor: pointer;

    @media (max-width: 1000px) {
        font-size: 15px;
    }

    .edit-name {
        opacity: 0;
        transition: opacity .2s ease-in-out;
    }

    &:hover {
        .edit-name {
            opacity: 1;
            transition: opacity .2s ease-in-out;
        }
    }
`;

export const DivLeft = styled.div`
    width: 50%;
`;

export const DivRight = styled.div`
    width: 30%;
    text-align: left;

    @media (max-width: 1000px) {
        display: none;
    }
`;

export const DivStatus = styled.div`
    width: 10%;
    text-align: center;

    @media (max-width: 1000px) {
        width: 30%;
    }
`;

export const SpanLabel = styled.span`
    font-size: 12px;
    color: rgba(42,57,80,.5);
`;

export const DetailSpan = styled.span`
    font-size: 15px;
    color: rgba(0, 0, 0,.5);
`;