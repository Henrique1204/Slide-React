import styled from "styled-components";

export const Container = styled.button`
    width: 1rem;
    height: 1rem;
    border: 1px solid;
    border-color: ${(props) => props.ativo ? 'currentColor' : '#DDD'};
    border-radius: 50%;
    color: ${(props) => props.ativo ? '#5B0DA9' : '#FFF'};
    background-color: currentColor;
    cursor: pointer;
    transition: 0.3s ease;

    & + & {
        margin-left: 0.5rem;
    }

    &:hover, &:active, &:focus {
        border-color: #5B0DA9;
        color: #5B0DA9;
        transform: scale(1.1);
    }

    @media (max-width: 1023px) {
        pointer-events: none;
    }
`;
