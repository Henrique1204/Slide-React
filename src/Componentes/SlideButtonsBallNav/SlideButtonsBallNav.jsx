import React from 'react';

import SlideButtonBall from '../SlideButtonBall/SlideButtonBall';

const SlideButtonBallNav = ({ showNav, slideWrapperRef, slideRef, scrollX, setScrollX }) => {
    const [slideItensOffset, setSlideItensOffset] = React.useState(null);

    React.useEffect(() => {
        const slideItens = Array.from(slideRef.current.querySelectorAll(':scope > *'));
        const { width } = slideItens[0].getBoundingClientRect();

        const slideWrapper = slideWrapperRef.current.getBoundingClientRect();
        const quantidadeItens = Math.floor(slideWrapper.width / Math.abs(width));

        setSlideItensOffset(() => (
            slideItens.reduce((acc, item, index, array) => {
                const diff = array.length - acc.length;
    
                return (diff >= quantidadeItens) ? [...acc, item.offsetLeft] : [...acc];
            }, [])
        ));
    }, [slideWrapperRef, slideRef, scrollX]);

    if (showNav) {
        return (
            <nav>
                { slideItensOffset && slideItensOffset.map((offset, index) => (
                    <SlideButtonBall
                        offset={offset}
                        scrollX={scrollX}
                        setScrollX={setScrollX}
                        key={index}
                    />
                )) }
            </nav>
        );
    }

    return <></>;
};

export default SlideButtonBallNav;
