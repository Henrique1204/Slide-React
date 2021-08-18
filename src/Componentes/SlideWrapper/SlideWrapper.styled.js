import styled  from "styled-components";

export const Container = styled.div`
    width: 100%;
    position: relative;

    & + & {
        margin-top: 4rem;
    }

    @media (max-width: 1366px) {
        nav {
            display: none;
        }
    }
`;

export const Slide = styled.div`
    width: 100%;

    & > div {
        padding: 1rem 0;
        display: flex;
        transition: transform 0.4s ease;

        @media (max-width: 1366px) {
            overflow-x: scroll;
        }
    }
`;

export const SlideVazdio = styled.p`
    width: 320px;
    border-radius: 1rem;
    padding: 1rem;
    margin: 2rem auto;
    font-size: 1.25rem;
    text-align: center;
    color: #333;
    background-color: #E7E7E7;
    box-shadow: 0px 0px 10px rgba(44, 44, 44, 0.5);
`;
