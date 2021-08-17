import React from 'react';

import { Container, Slide } from './SlideWrapper.styled';

import SlideButtonArrow from '../SlideButtonArrow/SlideButtonArrow';
import SlideItem from '../SlideItem';

const SlideWrapper = () => {
    const slideWrapperRef = React.useRef();
    const slideRef = React.useRef();

    const [slideVistaTela, setSlideVistaTela] = React.useState(null);
    const [slideScrollX, setSlideScrollX] = React.useState(0);

    const calcularVistaTela = React.useCallback(() => {
        const { x } = slideWrapperRef.current.getBoundingClientRect();
        const { width } = slideRef.current.getBoundingClientRect();

        const finalVista = width - x;

        setSlideVistaTela({ inicio: 0, fim: finalVista });
    }, []);

    const moverParaEsquerda = () => setSlideScrollX((scrollX) => {
        const scrollEsquerda = scrollX + 400;
        const scrollNovo = scrollEsquerda > 0 ? 0 : scrollEsquerda;

        calcularVistaTela(scrollNovo);
        return scrollNovo;
    });

    const moverParaDireita = () => setSlideScrollX((scrollX) => {
        const scrollWidth = slideWrapperRef.current.scrollWidth;
        const scrollDireita = scrollX - 400;
        const scrollNovo = scrollWidth + scrollDireita < 0 ? -scrollWidth : scrollDireita;

        calcularVistaTela(scrollNovo);
        return scrollNovo;
    });

    React.useEffect(() => {
        calcularVistaTela(null);
    }, [calcularVistaTela]);

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
