import styled from "styled-components";

export const Container = styled.div`
    min-width: ${(props) => `calc((100% / ${props.colunas}) - 2rem)`};
    height: 300px;
    border-radius: 1rem;
    box-shadow: 0 0 4px rgba(44, 44, 44, 0.3);
    background: ${(props) => `url('${props.imagem}') no-repeat center`};
    background-size: cover;
`;
