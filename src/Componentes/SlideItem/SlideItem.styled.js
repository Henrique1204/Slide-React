import styled from "styled-components";

export const Container = styled.div`
    opacity: ${(props) => props.foraDeVista ? 0.3 : 1};
    transition: opacity 0.5s ease;

    & + & {
        margin-left: 1rem;
    }

    @media screen and (max-width: 768px) {
        opacity: 1;
    }
`;
