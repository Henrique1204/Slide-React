import styled from "styled-components";

export const Container = styled.div`
    min-width: ${(props) => `calc((100% / ${props.colunas}) - 1rem)`};
    height: 300px;
    background-color: ${(props) => props.cor};
    opacity: ${(props) => props.foraDeVista ? 0.3 : 1};
    transition: opacity 0.8s ease;

    & + & {
        margin-left: 1rem;
    }
`;
