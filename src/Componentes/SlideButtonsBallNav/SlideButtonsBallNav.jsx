import React from 'react';

import SlideButtonBall from '../SlideButtonBall/SlideButtonBall';

const SlideButtonBallNav = ({ passos, scrollX, setScrollX, itensSlide}) => {
    const [slideItensOffset, setSlideItensOffset] = React.useState(null);

    React.useEffect(() => {
        if (itensSlide) {
            const quantidadePassos = passos;
    
            setSlideItensOffset(() => (
                itensSlide.reduce((acc, item, index, array) => {
                    const diff = array.length - acc.length;
        
                    return (diff >= quantidadePassos) ? [...acc, item.offsetLeft] : [...acc];
                }, [])
            ));
        }
    }, [passos, scrollX, itensSlide]);

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
};

export default SlideButtonBallNav;
