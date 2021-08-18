import React from 'react';
import { Container } from './SlideButtonArrow.styled';

const SlideButtonArrow = ({ direcao, onClick, disabled, children }) => {
    return (
        <Container direcao={direcao} onClick={onClick} disabled={disabled}>
            {children}
        </Container>
    );
}

export default SlideButtonArrow;
