import React from 'react';

import SlideButtonArrow from '../SlideButtonArrow';

const SlideButtonsArrowNav = ({ showNav, slideWrapperRef, slideRef, scrollX, setScrollX }) => {
    const [direitaDisabled, setDireitaDisabled] = React.useState(false);
    const [esquerdaDisabled, setEsquerdaDisabled] = React.useState(false);

    const calcularPassoScroll = React.useCallback(() => {
        const slideItem = slideRef.current.firstChild.getBoundingClientRect();

        return slideItem.width + 16;
    }, [slideRef]);

    const checarUltimoMovimento = React.useCallback((passo, direcao) => {
        const slideWrapper = slideWrapperRef.current.getBoundingClientRect();
        const quantidadeItens = Math.floor(slideWrapper.width / Math.abs(passo));

        const passoSessao = quantidadeItens * passo;

        const { scrollWidth } = slideRef.current;
        const scroll = scrollX + passo;

        const testeDireita = scrollX + passoSessao;
        const testeEsquerda = Number(scroll.toString().split('.')[0]);


        if (direcao === 'left' && testeEsquerda > 0) return { teste: true };
        else if (direcao === 'right' && scrollWidth + testeDireita < 0) return { teste: true };
        else return { teste: false, scroll };
    }, [slideWrapperRef, scrollX, slideRef]);

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

    if (showNav) {
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
    }

    return <></>;
};

export default SlideButtonsArrowNav;
