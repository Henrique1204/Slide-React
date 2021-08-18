import React from 'react';

import { Container } from './SlideButtonsNav.styled';

import SlideButtonArrow from '../SlideButtonArrow/SlideButtonArrow';

const SlideButtonsNav = ({ slideWrapperRef, slideRef, scrollX, setScrollX }) => {
    const [direitaDisabled, setDireitaDisabled] = React.useState(false);
    const [esquerdaDisabled, setEsquerdaDisabled] = React.useState(false);

    const calcularPassoScroll = React.useCallback(() => {
        const slideWrapper = slideWrapperRef.current.getBoundingClientRect();
        const slideItem = slideRef.current.firstChild.getBoundingClientRect();

        const quantidadeItens = Math.floor(slideWrapper.width / slideItem.width);

        return quantidadeItens * slideItem.width;
    }, [slideWrapperRef, slideRef]);

    const checarUltimoMovimento = React.useCallback((passo, direcao) => {
        const { scrollWidth } = slideRef.current;
        const scroll = scrollX + passo;

        if (direcao === 'left' && scroll > 0) return { teste: true };
        else if (direcao === 'right' && scrollWidth + scroll < 0) return { teste: true };
        else return { teste: false, scroll };
    }, [scrollX, slideRef]);

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
    }, [calcularPassoScroll, checarUltimoMovimento, scrollX]);

    return (
        <Container>
            <SlideButtonArrow
                direcao='left'
                onClick={moverParaEsquerda}
                disabled={esquerdaDisabled}
            >
                {'<'}
            </SlideButtonArrow>

            <SlideButtonArrow
                direcao='right'
                onClick={moverParaDireita}
                disabled={direitaDisabled}
            >
                {'>'}
            </SlideButtonArrow>
        </Container>
    );
};

export default SlideButtonsNav;
