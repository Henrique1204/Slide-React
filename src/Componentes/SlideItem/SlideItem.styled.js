import styled from "styled-components";

export const Container = styled.div`
    opacity: ${(props) => props.foraDeVista ? 0.3 : 1};
    transition: opacity 0.8s ease;

    & + & {
        margin-left: 1rem;
    }
`;
