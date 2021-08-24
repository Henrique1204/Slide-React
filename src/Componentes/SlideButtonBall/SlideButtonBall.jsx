import React from 'react';

import { Container } from './SlideButtonBall.styled';

import useMedia from '../../Hooks/useMedia';

const SlideButtonBall = ({ infosItem, scrollX, setScrollX, vistaTela }) => {
    const [ativo, setAtivo] = React.useState(null);
    const matchTablet = useMedia('(max-width: 1023px)');

    const calcAtivoDesktop = React.useCallback(() => {
        const posCalc = infosItem.offset + scrollX;
        const pos = Number(posCalc.toString().split('.')[0]);

        return pos === 0;
    }, [infosItem, scrollX]);

    const calcAtivoMobile = React.useCallback(() => {
        const { inicio, fim } = vistaTela;
        const offset = Number(infosItem.offset.toString().split('.')[0]);

        const posFim = Math.floor(offset + infosItem.width);

        return  offset >= inicio && posFim <= fim;
    }, [infosItem, vistaTela]);

    React.useEffect(() => {
        if (matchTablet) setAtivo(calcAtivoMobile());
        else setAtivo(calcAtivoDesktop());
    }, [infosItem, scrollX, setAtivo, matchTablet, calcAtivoDesktop, calcAtivoMobile]);

    return <Container ativo={ativo} onClick={() => setScrollX(-infosItem.offset.toString().split('.')[0])} />;
};

export default SlideButtonBall;
