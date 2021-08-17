import React from 'react';
import { Container } from './SlideItem.styled';

const SlideItem = ({ vistaSlide, scrollX }) => {
    const [foraDeVista, setForaDeVista] = React.useState(false);
    const slideItemRef = React.useRef();

    React.useEffect(() => {
        if (vistaSlide) {
            const { inicio, fim } = vistaSlide;

            const { width } = slideItemRef.current.getBoundingClientRect();
            const x = slideItemRef.current.offsetLeft + scrollX;
            const posicaoVistaFim = x + width;

            setForaDeVista(x < inicio || posicaoVistaFim > fim);
        }
    }, [vistaSlide, scrollX]);

    return <Container ref={slideItemRef} foraDeVista={foraDeVista}>

    </Container>;
};

export default SlideItem;
