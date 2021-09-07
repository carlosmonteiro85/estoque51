import React from 'react';
import './App.css';




import { NavBar } from 'components/navbar';
import { Footer } from 'components/footer';
import {FormEntrada} from 'pages/form/entrada';
import {FormFornecedor} from 'pages/form/fornecedores';

import { Fornecedores } from 'pages/lista/fornecedores/lista';

function App() {
  return (
    <div className="App">

      <NavBar />
      <div className="container">
       {/*  <DataTable /> */}
      {/*  <FormEntrada/> */}
      <Fornecedores/>
      </div>

      <Footer />
    </div>
  );
}

export default App;
