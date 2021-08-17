import styled  from "styled-components";

export const Container = styled.div`
    width: 100%;
    position: relative;
`;

export const Slide = styled.div`
    width: 100%;

    & > div {
        display: flex;
        transition: transform 0.4s ease;
    }
`;
