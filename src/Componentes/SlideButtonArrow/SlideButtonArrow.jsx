import React from 'react';
import { Container } from './SlideButtonArrow.styled';

const SlideButtonArrow = ({ direcao, onClick }) => {
    return <Container direcao={direcao} onClick={onClick} ></Container>;
}

export default SlideButtonArrow;
