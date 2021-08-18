import React from 'react';

import './App.css';

import SlideWrapper from './Componentes/SlideWrapper';
import SlideItem from './Componentes/SlideItem';

const slide4Colunas = [
  { colunas: 4, cor: '#00F' },
  { colunas: 4, cor: '#F00' },
  { colunas: 4, cor: '#0FF' },
  { colunas: 4, cor: '#F0F' },
  { colunas: 4, cor: '#FF0' },
  { colunas: 4, cor: '#00F' },
  { colunas: 4, cor: '#F00' },
  { colunas: 4, cor: '#0FF' },
  { colunas: 4, cor: '#F0F' },
  { colunas: 4, cor: '#FF0' }
];

const slide6Colunas = [
  { colunas: 6, cor: '#00F' },
  { colunas: 6, cor: '#F00' },
  { colunas: 6, cor: '#0FF' },
  { colunas: 6, cor: '#F0F' },
  { colunas: 6, cor: '#FF0' },
  { colunas: 6, cor: '#00F' },
  { colunas: 6, cor: '#F00' },
  { colunas: 6, cor: '#0FF' },
  { colunas: 6, cor: '#F0F' },
  { colunas: 6, cor: '#FF0' }
];

const slide8Colunas = [
  { colunas: 8, cor: '#00F' },
];

const App = () => {
  const [vistaTela4Colunas, setVistaTela4Colunas] = React.useState(null);
  const [scrollX4Colunas, setScrollX4Colunas] = React.useState(0);

  const [vistaTela6Colunas, setVistaTela6Colunas] = React.useState(null);
  const [scrollX6Colunas, setScrollX6Colunas] = React.useState(0);

  const [vistaTela8Colunas, setVistaTela8Colunas] = React.useState(null);
  const [scrollX8Colunas, setScrollX8Colunas] = React.useState(0);

  return (
    <>
      <SlideWrapper
        setVistaTela={setVistaTela4Colunas}
        scrollX={scrollX4Colunas}
        setScrollX={setScrollX4Colunas}
      >
        { slide4Colunas.map(({ colunas, cor }, index) => (
          <SlideItem
            vistaSlide={vistaTela4Colunas}
            scrollX={scrollX4Colunas}
            colunas={colunas}
            cor={cor}
            key={index}
          />
        )) }
      </SlideWrapper>

      <SlideWrapper
        setVistaTela={setVistaTela6Colunas}
        scrollX={scrollX6Colunas}
        setScrollX={setScrollX6Colunas}
      >
        { slide6Colunas.map(({ colunas, cor }, index) => (
          <SlideItem
            vistaSlide={vistaTela6Colunas}
            scrollX={scrollX6Colunas}
            colunas={colunas}
            cor={cor}
            key={index}
          />
        )) }
      </SlideWrapper>
  
      <SlideWrapper
        setVistaTela={setVistaTela8Colunas}
        scrollX={scrollX8Colunas}
        setScrollX={setScrollX8Colunas}
      >
        { slide8Colunas.map(({ colunas, cor }, index) => (
          <SlideItem
            vistaSlide={vistaTela8Colunas}
            scrollX={scrollX8Colunas}
            colunas={colunas}
            cor={cor}
            key={index}
          />
        )) }
      </SlideWrapper>
    </>
  );
};

export default App;
