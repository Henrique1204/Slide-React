import styled from "styled-components";

export const Container = styled.div`
    min-width: calc(30% - 1rem);
    height: 20px;
    background-color: #00F;

    & + & {
        margin-left: 1rem;
    }
`;
