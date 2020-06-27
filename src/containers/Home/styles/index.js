import styled from 'styled-components';

export const AppWrapper = styled.main`
    height: 100%;
    width: 100%;
    max-width: 1160px;
    font-size: calc(10px + 2vmin);
    overflow-x: hidden;
    text-align: left;
    margin: 0 auto;
    padding: 100px 20px 20px;
    background: transparent;
    box-sizing: border-box;
`;

export const CenteredDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin-top: 40px;
`;

export const DetailContainer = styled.section`
    width: 100%;
    background: white;
    height: 100%;
    box-shadow: 0px 1px 8px -4px rgba(0, 0, 0, 0.4);
    padding: 40px 4%;
    box-sizing: border-box;

    .heading-detail {
        font-size: 28px;
    }

    svg {
        cursor: pointer;
    }

    .editable-field {
        input {
            border: none;
            font-size: 26px;
            font-weight: 600;
            padding: 10px 10px 10px 0px;
            margin-right: 10px;
            outline: 1px solid #0397d9;
    
            &:disabled {
              background: transparent;
              opacity: 1;
              outline: none;
              color: black;
            }

            @media (max-width: 1000px) {
                font-size: 20px;
            }
        }
    }

    .general-information-detail {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;

        @media (max-width: 1000px) {
            display: block;

            div {
                margin: 10px 0;
            }
        }
    }

    .products-detail-list {
        background: rgba(0, 0, 0, 0.03);
        border-radius: 5px;
    }
`;

export const SpanLabel = styled.span`
    font-size: 12px;
    color: rgba(42,57,80,.5);
`;

export const DetailSpan = styled.span`
    font-size: 20px;
    text-transform: capitalize;

    @media (max-width: 1000px) {
        font-size: 16px;
    }
`;