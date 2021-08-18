import styled from "styled-components";

export const Container = styled.button`
    width: 3rem;
    height: 3rem;
    border: 1px solid #DDD;
    border-radius: 50%;
    font-size: 1.5rem;
    font-weight: bold;
    color: #5B0DA9;
    background-color: #FFF;
    box-shadow: 0 0 2px rgba(44, 44, 44, 0.3);
    position: absolute;
    top: calc(50% - 1.5rem);
    left: ${(props) => props.direcao === 'left' ? '-1.5rem' : 'initial'};
    right: ${(props) => props.direcao === 'right' ? '-1.5rem' : 'initial'};
    z-index: 1;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        border-color: initial;
        transform: scale(1.1);
    }

    &:disabled {
        border-color: #DDD;
        box-shadow: none;
        opacity: 0.8;
        transform: scale(0.8);
        cursor: not-allowed;
    }
`;
