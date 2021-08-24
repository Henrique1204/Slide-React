import React from 'react';

import SlideButtonBall from '../SlideButtonBall/SlideButtonBall';

const SlideButtonBallNav = ({ passos, scrollX, setScrollX, itensSlide, vistaTela }) => {
    const [slideItensInfos, setSlideItensInfos] = React.useState(null);

    React.useEffect(() => {
        if (itensSlide) {
            const quantidadePassos = passos;
    
            setSlideItensInfos(() => (
                itensSlide.reduce((acc, item, index, array) => {
                    const diff = array.length - acc.length;
        
                    const infosItem = {
                        offset: item.offsetLeft,
                        width: item.getBoundingClientRect().width
                    }

                    return (diff >= quantidadePassos) ? [...acc, infosItem] : [...acc];
                }, [])
            ));
        }
    }, [passos, scrollX, itensSlide]);

    return (
        <nav>
            { slideItensInfos && slideItensInfos.map((infos, index) => (
                <SlideButtonBall
                    infosItem={infos}
                    scrollX={scrollX}
                    setScrollX={setScrollX}
                    vistaTela={vistaTela}
                    key={index}
                />
            )) }
        </nav>
    );
};

export default SlideButtonBallNav;
