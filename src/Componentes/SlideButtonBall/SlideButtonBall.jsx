import React from 'react';

import { Container } from './SlideButtonBall.styled';

const SlideButtonBall = ({ offset, setScrollX, ativo, setAtivo, index }) => {
    const onClick = () => {
        setAtivo(index);
        setScrollX(-offset);
    };

    return <Container ativo={ativo} onClick={onClick} />;
};

export default SlideButtonBall;
