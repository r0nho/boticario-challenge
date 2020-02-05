import styled from 'styled-components';

export const AppWrapper = styled.main`
    height: 100%;
    width: 100%;
    max-width: 1160px;
    font-size: calc(10px + 2vmin);
    overflow-x: hidden;
    text-align: left;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 100px 20px;
    margin: 0 auto;
    background: transparent;

    .no-results-text {
        font-size: 22px;
        text-align: center;
        color: rgba(0, 0, 0, 0.5);
        font-weight: 400;
    }

    .MuiInputLabel-root {
        text-transform: capitalize;
    }

    #order-by-select, #sort-by-select {
        min-width: 130px;
    }
`;

export const CenteredDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin-top: 40px;
`;

export const TableHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    .search-filter {
        max-width: 300px;
    }

    @media (max-width: 1000px) {
        display: block;

        .MuiFormControl-root,
        .search-filter {
            display: flex;
            width: 90%;
            margin: 20px auto 0;
            max-width: none;
            justify-content: center;
        }
    }
`;
