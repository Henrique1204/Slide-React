import React from 'react';
import { Container } from './SlideItem.styled';

const SlideItem = ({ vistaSlide }) => {
    const [foraDeVista, setForaDeVista] = React.useState(false);
    const slideItemRef = React.useRef();

    React.useEffect(() => {
        if (vistaSlide) {
            const { inicio, fim } = vistaSlide;

            const { x, width } = slideItemRef.current.getBoundingClientRect();
            const posicaoVistaFim = x + width;

            setForaDeVista(x < inicio || posicaoVistaFim > fim);
        }
    }, [vistaSlide]);

    return <Container ref={slideItemRef} foraDeVista={foraDeVista}></Container>;
};

export default SlideItem;
