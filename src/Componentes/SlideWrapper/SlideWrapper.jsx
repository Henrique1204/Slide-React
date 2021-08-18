import React from 'react';

import { Container, Slide, SlideVazdio } from './SlideWrapper.styled';

import SlideButtonsArrowNav from '../SlideButtonsArrowNav';

const SlideWrapper = ({ children, setVistaTela, scrollX, setScrollX }) => {
    const slideWrapperRef = React.useRef();
    const slideRef = React.useRef();

    const calcularVistaTela = React.useCallback(() => {
        if (slideRef.current) {
            const { width } = slideRef.current.getBoundingClientRect();
    
            setVistaTela({ inicio: 0, fim: width });
        }
    }, [setVistaTela]);

    React.useEffect(() => {
        calcularVistaTela();
    }, [calcularVistaTela, scrollX]);

    if (!children) return <SlideVazdio>O slide não possui itens!</SlideVazdio>;

    return (
        <Container>
            <SlideButtonsArrowNav
                slideWrapperRef={slideWrapperRef}
                slideRef={slideRef}
                scrollX={scrollX}
                setScrollX={setScrollX}
            />

            <Slide ref={slideWrapperRef}>
                <div ref={slideRef} style={{ transform: `translateX(${scrollX}px)` }}>
                    {children}
                </div>
            </Slide>
        </Container>
    );
};

export default SlideWrapper;
