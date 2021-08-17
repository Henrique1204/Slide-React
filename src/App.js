import React from 'react';

import './App.css';

import SlideWrapper from './Componentes/SlideWrapper';

const App = () => {
  const [scrollXAzul, setScrollXAzul] = React.useState(0);
  const [vistaTelaAzul, setVistaTelaAzul] = React.useState(null);

  return (
    <SlideWrapper
      setVistaTela={setVistaTelaAzul}
      scrollX={scrollXAzul}
      setScrollX={setScrollXAzul}
    />
  );
};

export default App;
