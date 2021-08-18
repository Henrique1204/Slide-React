import React from 'react';

import { Container } from './SlideButtonBall.styled';

const SlideButtonBall = ({ offset, scrollX, setScrollX }) => {
    const [ativo, setAtivo] = React.useState(null);

    React.useEffect(() => {
        const posicao = Math.floor(Math.abs(offset + scrollX));
        setAtivo(posicao === 0);
    }, [offset, scrollX, setAtivo]);

    return <Container ativo={ativo} onClick={() => setScrollX(-offset)} />;
};

export default SlideButtonBall;
