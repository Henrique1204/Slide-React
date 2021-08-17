import React from 'react';

import { Container, Slide } from './SlideWrapper.styled';

import SlideButtonArrow from '../SlideButtonArrow/SlideButtonArrow';
import SlideItem from '../SlideItem';

const SlideWrapper = () => {
    const slideWrapperRef = React.useRef();
    const slideRef = React.useRef();

    const [slideVistaTela, setSlideVistaTela] = React.useState(null);
    const [slideScrollX, setSlideScrollX] = React.useState(0);

    const moverParaEsquerda = () => setSlideScrollX((scrollX) => scrollX + 400);
    const moverParaDireita = () => setSlideScrollX((scrollX) => scrollX - 400);

    React.useEffect(() => {
        const slideWrapper = slideWrapperRef.current.getBoundingClientRect();
        const slide = slideRef.current.getBoundingClientRect();

        const inicioVista = slideScrollX + slideWrapper.x;
        const finalVista = slide.width - inicioVista;

        setSlideVistaTela({ inicio: inicioVista, fim: finalVista });
    }, [slideRef, slideScrollX]);

    React.useEffect(() => {
        console.log('##################');
    }, [slideScrollX]);

    return (
        <Container>
            <SlideButtonArrow direcao='left' onClick={moverParaEsquerda} />

            <Slide ref={slideWrapperRef}>
                <div ref={slideRef} style={{ transform: `translateX(${slideScrollX}px)` }}>
                    <SlideItem vistaSlide={slideVistaTela} scrollX={slideScrollX} />
                    <SlideItem vistaSlide={slideVistaTela} scrollX={slideScrollX} />
                    <SlideItem vistaSlide={slideVistaTela} scrollX={slideScrollX} />
                    <SlideItem vistaSlide={slideVistaTela} scrollX={slideScrollX} />
                    <SlideItem vistaSlide={slideVistaTela} scrollX={slideScrollX} />
                </div>
            </Slide>

            <SlideButtonArrow direcao='right' onClick={moverParaDireita} />
        </Container>
    );
};

export default SlideWrapper;
