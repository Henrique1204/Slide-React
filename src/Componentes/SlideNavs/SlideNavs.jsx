import React from 'react';

import SlideButtonsArrowNav from '../SlideButtonsArrowNav';
import SlideButtonsBallNav from '../SlideButtonsBallNav';

const SlideNavs = ({ slideWrapperRef, slideRef, scrollX, setScrollX }) => {
    const [showNavScroll, setShowNavScroll] = React.useState(false);
    const [itensSlide, setItensSlide] = React.useState(null);
    const [passos, setPassos] = React.useState(null);

    const calcularPassoScroll = React.useCallback(() => {
        const slideItem = slideRef.current.firstChild.getBoundingClientRect();

        return slideItem.width + 16;
    }, [slideRef]);

    const pegarScrollWidthSlide = React.useCallback(() => {
        return slideRef.current.scrollWidth;
    }, [slideRef]);

    React.useEffect(() => {
        const { clientWidth } = slideWrapperRef.current;
        const { scrollWidth } = slideRef.current;

        setShowNavScroll(() => scrollWidth > clientWidth);
    }, [slideWrapperRef, slideRef]);

    React.useEffect(() => {
        setItensSlide(Array.from(slideRef.current.querySelectorAll(':scope > *')));

        const slideWrapper = slideWrapperRef.current.getBoundingClientRect();
        const passos = Math.floor(slideWrapper.width / calcularPassoScroll());

        setPassos(passos)
    }, [setItensSlide, slideRef, slideWrapperRef, calcularPassoScroll]);

    if (showNavScroll) {
        return (
            <>
                <SlideButtonsArrowNav
                    calcularPassoScroll={calcularPassoScroll}
                    pegarScrollWidthSlide={pegarScrollWidthSlide}
                    passos={passos}
                    scrollX={scrollX}
                    setScrollX={setScrollX}
                />

                <SlideButtonsBallNav
                    calcularPassoScroll={calcularPassoScroll}
                    passos={passos}
                    scrollX={scrollX}
                    setScrollX={setScrollX}
                    itensSlide={itensSlide}
                />
            </>
        );
    }

    return <></>;
};

export default SlideNavs;
