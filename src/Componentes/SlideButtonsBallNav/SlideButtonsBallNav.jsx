import React from 'react';

import SlideButtonBall from '../SlideButtonBall/SlideButtonBall';

const SlideButtonBallNav = ({ showNav, slideRef, scrollX, setScrollX }) => {
    const [slideItensOffset, setSlideItensOffset] = React.useState(null);

    React.useEffect(() => {
        const slideItens = Array.from(slideRef.current.querySelectorAll(':scope > *'));

        setSlideItensOffset(() => {
            return slideItens.map(({ offsetLeft }) => offsetLeft);
        });
    }, [slideRef]);

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
