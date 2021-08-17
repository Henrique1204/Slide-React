import React from 'react';
import { Container } from './SlideButtonArrow.styled';

const SlideButtonArrow = ({ direcao, onClick, children }) => {
    return (
        <Container direcao={direcao} onClick={onClick}>
            {children}
        </Container>
    );
}

export default SlideButtonArrow;
