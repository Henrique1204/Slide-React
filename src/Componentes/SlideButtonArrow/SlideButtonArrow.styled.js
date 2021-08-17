import styled from "styled-components";

export const Container = styled.button`
    width: 3rem;
    height: 3rem;
    border: none;
    border-radius: 50%;
    background-color: #0F0;
    position: absolute;
    top: calc(50% - 1.5rem);
    left: ${(props) => props.direcao === 'left' ? '-1.5rem' : 'initial'};
    right: ${(props) => props.direcao === 'right' ? '-1.5rem' : 'initial'};
    z-index: 1;
    cursor: pointer;
`;
