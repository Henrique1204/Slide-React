import React from 'react';

import SlideButtonBall from '../SlideButtonBall/SlideButtonBall';

const SlideButtonBallNav = ({ showNav, slideRef, setScrollX }) => {
    const [slideItensOffset, setSlideItensOffset] = React.useState(null);
    const [buttonAtivo, setButtonAtivo] = React.useState(0);

    React.useEffect(() => {
        const slideItens = Array.from(slideRef.current.querySelectorAll(':scope > *'));

        setSlideItensOffset(() => {
            return slideItens.map((item) => item.offsetLeft);
        });
    }, [slideRef]);

    if (showNav) {
        return (
            <nav>
                { slideItensOffset && slideItensOffset.map((offset, index) => (
                    <SlideButtonBall
                        offset={offset}
                        setScrollX={setScrollX}
                        ativo={buttonAtivo === index}
                        setAtivo={setButtonAtivo}
                        index={index}
                        key={index}
                    />
                )) }
            </nav>
        );
    }

    return <></>;
};

export default SlideButtonBallNav;
