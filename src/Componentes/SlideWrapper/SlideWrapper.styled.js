import styled  from "styled-components";

export const Container = styled.div`
    width: 100%;
    position: relative;
    background-color: #F00;
`;

export const Slide = styled.div`
    width: 100%;
    overflow: hidden;

    & > div {
        display: flex;
        /* transition: transform 0.3s ease; */
    }
`;
