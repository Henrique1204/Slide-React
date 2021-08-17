import styled  from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 20px;
    background-color: #F00;
    overflow: hidden;

    & > div {
        width: 100%;
        display: flex;
    }
`;
