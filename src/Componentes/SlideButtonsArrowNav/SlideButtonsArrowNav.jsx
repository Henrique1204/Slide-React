import React from 'react';

import SlideButtonArrow from '../SlideButtonArrow';

import useMedia from '../../Hooks/useMedia';

const SlideButtonsArrowNav = ({
    calcularPassoScroll,
    passos,
    scrollX,
    setScrollX,
    pegarScrollWidthSlide
}) => {
    const [direitaDisabled, setDireitaDisabled] = React.useState(false);
    const [esquerdaDisabled, setEsquerdaDisabled] = React.useState(false);
    const matchTablet = useMedia('(max-width: 1023px)');

    const checarUltimoMovimento = React.useCallback((passo, direcao) => {
        const passoSessao = passos * passo;

        const scrollWidth = pegarScrollWidthSlide();
        const scroll = scrollX + passo;

        const testeDireita = scrollX + passoSessao;
        const testeEsquerda = Number(scroll.toString().split('.')[0]);


        if (direcao === 'left' && testeEsquerda > 0) return { teste: true };
        else if (direcao === 'right' && scrollWidth + testeDireita < 0) return { teste: true };
        else return { teste: false, scroll };
    }, [passos, pegarScrollWidthSlide, scrollX]);

    const moverParaEsquerda = () => setScrollX(() => {
        const passo = calcularPassoScroll();
        const { scroll } = checarUltimoMovimento(passo, 'left');

        return scroll;
    });

    const moverParaDireita = () => setScrollX(() => {
        const passo = calcularPassoScroll();
        const { scroll } = checarUltimoMovimento(-passo, 'right');

        return scroll;
    });

    React.useEffect(() => {
        const passo = calcularPassoScroll();
        const movimentoEsquerda = checarUltimoMovimento(passo, 'left');
        const movimentoDireita = checarUltimoMovimento(-passo, 'right');

        setEsquerdaDisabled(movimentoEsquerda.teste);

        setDireitaDisabled(movimentoDireita.teste);
    }, [calcularPassoScroll, checarUltimoMovimento, setScrollX]);

    if (matchTablet) return null;

    return (
        <nav>
            <SlideButtonArrow
                direcao='left'
                onClick={moverParaEsquerda}
                disabled={esquerdaDisabled}
            >
                <span>{'<'}</span>
            </SlideButtonArrow>

            <SlideButtonArrow
                direcao='right'
                onClick={moverParaDireita}
                disabled={direitaDisabled}
            >
                <span>{'>'}</span>
            </SlideButtonArrow>
        </nav>
    );
};

export default SlideButtonsArrowNav;
