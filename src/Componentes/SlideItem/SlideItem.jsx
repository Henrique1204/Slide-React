import React from 'react';

import { Container } from './SlideItem.styled';

const SlideItem = ({ vistaSlide, scrollX, children }) => {
    const [foraDeVista, setForaDeVista] = React.useState(false);
    const slideItemRef = React.useRef();

    const debounce = (callback, delay) => {
        let timer;

        return (...args) => {
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => {
                callback(...args);
                timer = null;
            }, delay);
        };
    };

    const handleResize = React.useCallback(() => {
        const filho = slideItemRef.current.querySelector(':scope > *');
        slideItemRef.current.style.minWidth = window.getComputedStyle(filho).minWidth;
    }, [slideItemRef])

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
        handleResize();

        const handleResizeDebouce = debounce(handleResize, 75);
        window.addEventListener('resize', handleResizeDebouce);

        return () => window.removeEventListener('resize', handleResizeDebouce);
    }, [handleResize]);

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
