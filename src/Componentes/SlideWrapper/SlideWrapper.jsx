import React from 'react';

import { Container, Slide, SlideVazdio } from './SlideWrapper.styled';

import SlideButtonsArrowNav from '../SlideButtonsArrowNav';
import SlideButtonBallNav from '../SlideButtonBallNav/SlideButtonBallNav';

const SlideWrapper = ({ children, setVistaTela, scrollX, setScrollX }) => {
    const [showNavScroll, setShowNavScroll] = React.useState(false);

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

    React.useEffect(() => {
        const { clientWidth } = slideWrapperRef.current;
        const { scrollWidth } = slideRef.current;

        setShowNavScroll(() => scrollWidth > clientWidth);
    }, [slideWrapperRef, slideRef]);

    if (!children) return <SlideVazdio>O slide não possui itens!</SlideVazdio>;

    return (
        <Container>
            <SlideButtonsArrowNav
                showNav={showNavScroll}
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

            <SlideButtonBallNav
                showNav={showNavScroll}
                slideRef={slideRef}
                setScrollX={setScrollX}
            />
        </Container>
    );
};

export default SlideWrapper;
