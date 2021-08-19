import React from 'react';

import { Container } from './SlideItem.styled';

const SlideItem = ({ vistaSlide, scrollX, children }) => {
    const [foraDeVista, setForaDeVista] = React.useState(false);
    const slideItemRef = React.useRef();

    React.useEffect(() => {
        if (vistaSlide) {
            const { inicio, fim } = vistaSlide;

            const { width } = slideItemRef.current.getBoundingClientRect();

            const { offsetLeft } = slideItemRef.current;
            const offset = Number(offsetLeft.toString().split('.')[0]);

            const posInicioCacl = offset + scrollX;
            const posInicio = Number(posInicioCacl.toString().split('.')[0]);

            const posFim = Math.floor(posInicio + width);

            setForaDeVista(posInicio < inicio || posFim > fim);
        }
    }, [vistaSlide, scrollX]);

    React.useEffect(() => {
        const filho = slideItemRef.current.querySelector(':scope > *');
        slideItemRef.current.style.minWidth = window.getComputedStyle(filho).minWidth;
    }, []);

    return (
        <Container
            ref={slideItemRef}
            foraDeVista={foraDeVista}
        >
            {children}
        </Container>
    );
};

export default SlideItem;
