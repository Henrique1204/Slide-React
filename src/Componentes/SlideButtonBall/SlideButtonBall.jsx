import React from 'react';

import { Container } from './SlideButtonBall.styled';

const SlideButtonBall = ({ offset, scrollX, setScrollX }) => {
    const [ativo, setAtivo] = React.useState(null);

    React.useEffect(() => {
        const posCalc = offset + scrollX;
        const pos = Number(posCalc.toString().split('.')[0]);

        setAtivo(pos === 0);
    }, [offset, scrollX, setAtivo]);

    return <Container ativo={ativo} onClick={() => setScrollX(-offset.toString().split('.')[0])} />;
};

export default SlideButtonBall;
