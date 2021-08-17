import React from 'react';

import { Container, Slide, SlideVazdio } from './SlideWrapper.styled';

import SlideButtonArrow from '../SlideButtonArrow/SlideButtonArrow';

const SlideWrapper = ({ children, setVistaTela, scrollX, setScrollX }) => {
    const slideWrapperRef = React.useRef();
    const slideRef = React.useRef();

    const calcularVistaTela = React.useCallback(() => {
        if (slideWrapperRef.current && slideRef.current) {
            const { x } = slideWrapperRef.current.getBoundingClientRect();
            const { width } = slideRef.current.getBoundingClientRect();

            const finalVista = width - x;

            setVistaTela({ inicio: 0, fim: finalVista });
        }
    }, [setVistaTela]);

    const calcularPassoScroll = React.useCallback(() => {
        const slideWrapper = slideWrapperRef.current.getBoundingClientRect();
        const slideItem = slideRef.current.firstChild.getBoundingClientRect();

        const quantidadeItens = Math.floor(slideWrapper.width / slideItem.width);

        return quantidadeItens * slideItem.width;
    }, []);

    const moverParaEsquerda = () => setScrollX((scrollX) => {
        const scrollEsquerda = scrollX + calcularPassoScroll();
        const scrollNovo = scrollEsquerda > 0 ? 0 : scrollEsquerda;

        return scrollNovo;
    });

    const moverParaDireita = () => setScrollX((scrollX) => {
        const scrollWidth = slideWrapperRef.current.scrollWidth;

        const scrollDireita = scrollX - calcularPassoScroll();
        const scrollNovo = scrollWidth + scrollDireita < 0 ? -scrollWidth : scrollDireita;

        return scrollNovo;
    });

    React.useEffect(() => {
        calcularVistaTela();
    }, [calcularVistaTela, scrollX]);

    if (!children) return <SlideVazdio>O slide não possui itens!</SlideVazdio>;

    return (
        <Container>
            <SlideButtonArrow direcao='left' onClick={moverParaEsquerda}>
                {'<'}
            </SlideButtonArrow>

            <Slide ref={slideWrapperRef}>
                <div ref={slideRef} style={{ transform: `translateX(${scrollX}px)` }}>
                    {children}
                </div>
            </Slide>

            <SlideButtonArrow direcao='right' onClick={moverParaDireita}>
                {'>'}
            </SlideButtonArrow>
        </Container>
    );
};

export default SlideWrapper;
