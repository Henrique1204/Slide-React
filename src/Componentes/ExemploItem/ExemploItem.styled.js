import styled from "styled-components";

export const Container = styled.div`
    min-width: ${(props) => `calc((100% / ${props.colunas}) - 2rem)`};
    min-height: 300px;
    border-radius: 1rem;
    background: ${(props) => `url('${props.imagem}') no-repeat center`};
    background-size: cover;
    box-shadow: 0 0 4px rgba(44, 44, 44, 0.3);
    overflow: hidden;

    @media screen and (max-width: 1023px) {
        min-width: ${(props) => `calc((100% / ${props.colunas / 2}) - 2rem)`};   
    }

    @media screen and (max-width: 767px) {
        min-width: ${(props) => `calc(100% - 2rem)`};   
    }
`;
