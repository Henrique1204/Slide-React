import React from 'react';

import { Container, Slide, SlideVazdio } from './SlideWrapper.styled';

import SlideButtonArrow from '../SlideButtonArrow/SlideButtonArrow';

const SlideWrapper = ({ children, setVistaTela, scrollX, setScrollX }) => {
    const slideWrapperRef = React.useRef();
    const slideRef = React.useRef();

    const calcularVistaTela = React.useCallback(() => {
        if (slideRef.current) {
            const { width } = slideRef.current.getBoundingClientRect();
    
            setVistaTela({ inicio: 0, fim: width });
        }
    }, [setVistaTela]);

    const calcularPassoScroll = React.useCallback(() => {
        const slideWrapper = slideWrapperRef.current.getBoundingClientRect();
        const slideItem = slideRef.current.firstChild.getBoundingClientRect();

        const quantidadeItens = Math.floor(slideWrapper.width / slideItem.width) - 1;

        return quantidadeItens * slideItem.width + 16;
    }, []);

    const moverParaEsquerda = () => setScrollX((scrollX) => {
        const scrollEsquerda = scrollX + calcularPassoScroll();
        const scrollNovo = scrollEsquerda > 0 ? 0 : scrollEsquerda;

        return scrollNovo;
    });

    const moverParaDireita = () => setScrollX((scrollX) => {
        const scrollWidth = slideRef.current.scrollWidth;
        const { width } = slideRef.current.getBoundingClientRect();

        const scrollDireita = scrollX - calcularPassoScroll();

        if (scrollWidth + scrollDireita < 0) {
            return width - scrollWidth;
        } else {
            return scrollDireita;
        }
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
