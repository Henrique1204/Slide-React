import React from 'react';

import { Container } from './SlideItem.styled';

const SlideItem = ({ vistaSlide, scrollX, colunas, imagem }) => {
    const [foraDeVista, setForaDeVista] = React.useState(false);
    const slideItemRef = React.useRef();

    React.useEffect(() => {
        if (vistaSlide) {
            const { inicio, fim } = vistaSlide;

            const { width } = slideItemRef.current.getBoundingClientRect();
            const posicaoVistaInicio = slideItemRef.current.offsetLeft + scrollX;
            const posicaoVistaFim = Math.floor(posicaoVistaInicio + width);

            setForaDeVista(posicaoVistaInicio < inicio || posicaoVistaFim > fim);
        }
    }, [vistaSlide, scrollX]);

    return (
        <Container
            ref={slideItemRef}
            foraDeVista={foraDeVista}
            colunas={colunas}
            imagem={imagem}
        />
    );
};

export default SlideItem;
