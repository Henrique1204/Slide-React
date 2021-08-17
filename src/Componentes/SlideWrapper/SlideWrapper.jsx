import React from 'react';
import SlideItem from '../SlideItem';
import { Container } from './SlideWrapper.styled';

const SlideWrapper = () => {
    const slideWrapperRef = React.useRef();
    const slideRef = React.useRef();

    const [slideVistaTela, setSlideVistaTela] = React.useState(null);

    React.useEffect(() => {
        const slideWrapper = slideWrapperRef.current.getBoundingClientRect();
        const slide = slideRef.current.getBoundingClientRect();

        const slideVistaScroll = slide.x + slideWrapper.x;
        const finalVista = slide.width - slideVistaScroll;

        setSlideVistaTela({ inicio: slideWrapper.x, fim: finalVista });
    }, [slideRef]);

    return (
        <Container ref={slideWrapperRef}>
            <div ref={slideRef}>
                <SlideItem vistaSlide={slideVistaTela} />
                <SlideItem vistaSlide={slideVistaTela} />
                <SlideItem vistaSlide={slideVistaTela} />
                <SlideItem vistaSlide={slideVistaTela} />
                <SlideItem vistaSlide={slideVistaTela} />
            </div>
        </Container>
    );
};

export default SlideWrapper;
