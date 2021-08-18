import styled from "styled-components";

export const Container = styled.button`
    width: 1.5rem;
    height: 1.5rem;
    border: 1px solid;
    border-color: ${(props) => props.ativo ? 'currentColor' : '#DDD'};
    border-radius: 50%;
    color: ${(props) => props.ativo ? '#5B0DA9' : '#FFF'};
    background-color: currentColor;

    &:hover {
        border-color: #5B0DA9;
        color: #5B0DA9;
        transform: scale(1.1);
    }
`;
