import styled  from "styled-components";

export const Container = styled.div`
    width: 100%;
    position: relative;

    & + & {
        margin-top: 4rem;
    }
`;

export const Slide = styled.div`
    width: 100%;
    overflow: hidden;

    & > div {
        padding: 1rem 0;
        display: flex;
        transition: transform 0.4s ease;
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
