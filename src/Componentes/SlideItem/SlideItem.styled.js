import styled from "styled-components";

export const Container = styled.div`
    min-width: calc(30% - 1rem);
    height: 300px;
    background-color: #00F;
    opacity: ${(props) => props.foraDeVista ? 0.3 : 1};
    transition: opacity 0.8s ease;

    & + & {
        margin-left: 1rem;
    }
`;
