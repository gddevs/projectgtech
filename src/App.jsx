import React from 'react';
import Header from './components/Header.jsx';
import Banner from './components/Banner.jsx';
import { Componente1, Componente2, Componente3 } from './components/VariosComponentes.jsx';


const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Componente1 />
      <Componente2 />
      <Componente3 />
    </div>
  );
};

export default App;
