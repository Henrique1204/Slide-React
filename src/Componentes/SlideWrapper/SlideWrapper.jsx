import React from 'react';
import SlideItem from '../SlideItem';
import { Container } from './SlideWrapper.styled';

const SlideWrapper = () => {
    return (
        <Container>
            <SlideItem />
            <SlideItem />
            <SlideItem />
            <SlideItem />
            <SlideItem />
        </Container>
    );
};

export default SlideWrapper;
