import React from 'react';

import './App.css';

import SlideWrapper from './Componentes/SlideWrapper';
import SlideItem from './Componentes/SlideItem';
import ExemploItem from './Componentes/ExemploItem';

const slide4Colunas = [
  { colunas: 4, imagem: 'https://picsum.photos/id/101/200/300' },
  { colunas: 4, imagem: 'https://picsum.photos/id/102/200/300' },
  { colunas: 4, imagem: 'https://picsum.photos/id/103/200/300' },
  { colunas: 4, imagem: 'https://picsum.photos/id/104/200/300' },
  { colunas: 4, imagem: 'https://picsum.photos/id/106/200/300' },
  { colunas: 4, imagem: 'https://picsum.photos/id/108/200/300' },
  { colunas: 4, imagem: 'https://picsum.photos/id/109/200/300' },
  { colunas: 4, imagem: 'https://picsum.photos/id/110/200/300' },
  { colunas: 4, imagem: 'https://picsum.photos/id/111/200/300' }
];

const slide6Colunas = [
  { colunas: 6, imagem: 'https://picsum.photos/id/201/200/300' },
  { colunas: 6, imagem: 'https://picsum.photos/id/202/200/300' },
  { colunas: 6, imagem: 'https://picsum.photos/id/203/200/300' },
  { colunas: 6, imagem: 'https://picsum.photos/id/204/200/300' },
  { colunas: 6, imagem: 'https://picsum.photos/id/206/200/300' },
  { colunas: 6, imagem: 'https://picsum.photos/id/209/200/300' },
  { colunas: 6, imagem: 'https://picsum.photos/id/210/200/300' },
  { colunas: 6, imagem: 'https://picsum.photos/id/211/200/300' },
  { colunas: 6, imagem: 'https://picsum.photos/id/212/200/300' }
];

const slide8Colunas = [
  { colunas: 2, imagem: 'https://picsum.photos/id/301/400/300' }
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
        { slide4Colunas.map(({ colunas, imagem }, index) => (
          <SlideItem
            vistaSlide={vistaTela4Colunas}
            scrollX={scrollX4Colunas}
            key={index}
          >
            <ExemploItem
              colunas={colunas}
              imagem={imagem}
            />
          </SlideItem>
        )) }
      </SlideWrapper>

      <SlideWrapper
        setVistaTela={setVistaTela6Colunas}
        scrollX={scrollX6Colunas}
        setScrollX={setScrollX6Colunas}
      >
        { slide6Colunas.map(({ colunas, imagem }, index) => (
          <SlideItem
            vistaSlide={vistaTela6Colunas}
            scrollX={scrollX6Colunas}
            key={index}
          >
            <ExemploItem
              colunas={colunas}
              imagem={imagem}
            />
          </SlideItem>
        )) }
      </SlideWrapper>
  
      <SlideWrapper
        setVistaTela={setVistaTela8Colunas}
        scrollX={scrollX8Colunas}
        setScrollX={setScrollX8Colunas}
      >
        { slide8Colunas.map(({ colunas, imagem }, index) => (
          <SlideItem
            vistaSlide={vistaTela8Colunas}
            scrollX={scrollX8Colunas}
            key={index}
          >
            <ExemploItem
              colunas={colunas}
              imagem={imagem}
            />
          </SlideItem>
        )) }
      </SlideWrapper>
    </>
  );
};

export default App;
