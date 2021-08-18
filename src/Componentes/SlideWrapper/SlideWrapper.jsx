import React from 'react';

import { Container, Slide, SlideVazdio } from './SlideWrapper.styled';

import SlideButtonsArrowNav from '../SlideButtonsArrowNav';
import SlideButtonsBallNav from '../SlideButtonsBallNav';

const SlideWrapper = ({ children, setVistaTela, scrollX, setScrollX }) => {
    const [showNavScroll, setShowNavScroll] = React.useState(false);

    const slideWrapperRef = React.useRef();
    const slideRef = React.useRef();

    const handleScroll = ({ target }) => {
        const { scrollLeft, offsetWidth } = target;
    
        setVistaTela({ inicio: scrollLeft, fim: offsetWidth +  scrollLeft});
    };

    React.useEffect(() => {
        const { width } = slideRef.current.getBoundingClientRect();
        setVistaTela({ inicio: 0, fim: width });
    }, [setVistaTela, scrollX]);

    React.useEffect(() => {
        if (slideWrapperRef.current && slideRef.current) {
            const { clientWidth } = slideWrapperRef.current;
            const { scrollWidth } = slideRef.current;
    
            setShowNavScroll(() => scrollWidth > clientWidth);
        }
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
                <div ref={slideRef} onScroll={handleScroll} style={{ transform: `translateX(${scrollX}px)` }}>
                    {children}
                </div>
            </Slide>

            <SlideButtonsBallNav
                showNav={showNavScroll}
                slideWrapperRef={slideWrapperRef}
                slideRef={slideRef}
                scrollX={scrollX}
                setScrollX={setScrollX}
            />
        </Container>
    );
};

export default SlideWrapper;
