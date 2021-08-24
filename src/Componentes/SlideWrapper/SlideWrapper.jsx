import React from 'react';
import useMedia from '../../Hooks/useMedia';
import SlideNavs from '../SlideNavs';

import { Container, Slide, SlideVazdio } from './SlideWrapper.styled';

const SlideWrapper = ({ children, vistaTela, setVistaTela, scrollX, setScrollX }) => {
    const slideWrapperRef = React.useRef();
    const slideRef = React.useRef();
    const matchTablet = useMedia('(max-width: 1023px)');

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

    const handleScroll = debounce(({ target }) => {
        const { scrollLeft, offsetWidth } = target;
    
        setScrollX(scrollLeft);
        setVistaTela({ inicio: scrollLeft, fim: offsetWidth +  scrollLeft});
    }, 50);

    React.useEffect(() => {
        if (!matchTablet) {
            const { width } = slideRef.current.getBoundingClientRect();
            setVistaTela({ inicio: 0, fim: width });
        }
    }, [matchTablet, setVistaTela, scrollX, ]);

    if (!children) return <SlideVazdio>O slide não possui itens!</SlideVazdio>;

    return (
        <Container>
            <Slide ref={slideWrapperRef}>
                <div
                    ref={slideRef}
                    onScroll={handleScroll}
                    style={{ transform: `translateX(${(!matchTablet) ? scrollX : 0}px)` }}
                >
                    {children}
                </div>
            </Slide>

            <SlideNavs
                slideWrapperRef={slideWrapperRef}
                slideRef={slideRef}
                scrollX={scrollX}
                setScrollX={setScrollX}
                vistaTela={vistaTela}
            />
        </Container>
    );
};

export default SlideWrapper;
