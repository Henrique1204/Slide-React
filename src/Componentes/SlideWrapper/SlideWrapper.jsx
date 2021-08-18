import React from 'react';
import SlideNavs from '../SlideNavs';

import { Container, Slide, SlideVazdio } from './SlideWrapper.styled';

const SlideWrapper = ({ children, setVistaTela, scrollX, setScrollX }) => {

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

    if (!children) return <SlideVazdio>O slide não possui itens!</SlideVazdio>;

    return (
        <Container>
            <Slide ref={slideWrapperRef}>
                <div ref={slideRef} onScroll={handleScroll} style={{ transform: `translateX(${scrollX}px)` }}>
                    {children}
                </div>
            </Slide>

            <SlideNavs
                slideWrapperRef={slideWrapperRef}
                slideRef={slideRef}
                scrollX={scrollX}
                setScrollX={setScrollX}
            />
        </Container>
    );
};

export default SlideWrapper;
