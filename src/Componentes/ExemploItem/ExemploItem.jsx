import React from 'react';
import { Container } from './ExemploItem.styled';

const ExemploItem = ({ colunas, imagem, children }) => {
    return (
        <Container colunas={colunas} imagem={imagem}>
            {children}
        </Container>
    );
};

export default ExemploItem;
