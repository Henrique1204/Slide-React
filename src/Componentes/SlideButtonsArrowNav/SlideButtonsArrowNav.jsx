import React from 'react';

import { Container } from './SlideButtonsArrowNav.styled';

import SlideButtonArrow from '../SlideButtonArrow/SlideButtonArrow';

const SlideButtonsArrowNav = ({ slideWrapperRef, slideRef, scrollX, setScrollX }) => {
    const [showScroll, setShowScroll] = React.useState(false);
    const [direitaDisabled, setDireitaDisabled] = React.useState(false);
    const [esquerdaDisabled, setEsquerdaDisabled] = React.useState(false);

    const calcularPassoScroll = React.useCallback(() => {
        const slideItem = slideRef.current.firstChild.getBoundingClientRect();

        return slideItem.width;
    }, [slideRef]);

    const checarUltimoMovimento = React.useCallback((passo, direcao) => {
        const slideWrapper = slideWrapperRef.current.getBoundingClientRect();
        const quantidadeItens = Math.floor(slideWrapper.width / Math.abs(passo));

        const passoSessao = quantidadeItens * passo;

        const { scrollWidth } = slideRef.current;
        const scrollTeste = scrollX + passoSessao;
        const scroll = scrollX + passo;

        if (direcao === 'left' && scroll > 0) return { teste: true };
        else if (direcao === 'right' && scrollWidth + scrollTeste < 0) return { teste: true };
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
        const { clientWidth } = slideWrapperRef.current;
        const { scrollWidth } = slideRef.current;

        setShowScroll(() => scrollWidth > clientWidth);
      }, [slideWrapperRef, slideRef]);

    React.useEffect(() => {
        const passo = calcularPassoScroll();
        const movimentoEsquerda = checarUltimoMovimento(passo, 'left');
        const movimentoDireita = checarUltimoMovimento(-passo, 'right');

        setEsquerdaDisabled(movimentoEsquerda.teste);
        setDireitaDisabled(movimentoDireita.teste);
    }, [calcularPassoScroll, checarUltimoMovimento, scrollX]);

    if (showScroll) {
        return (
            <Container>
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
            </Container>
        );
    }

    return <></>;
};

export default SlideButtonsArrowNav;
