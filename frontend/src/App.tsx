import React from 'react';
import './App.css';


import { NavBar } from 'components/navbar';
import { Footer } from 'components/footer';
import {FormEntrada} from 'pages/form/entrada';
import {FormFornecedor} from 'pages/form/fornecedores';

import { Fornecedores } from 'pages/lista/fornecedores/lista';
import DataTable from 'pages/lista/produtos/lista';
import { TelaEntrada } from 'pages/entrada/telaEntrada';

function App() {
  return (
    <div className="App">

      <NavBar />
      
        <TelaEntrada/>
       {/*  <DataTable /> */}
      {/*  <FormEntrada/> */}
       {/* <DataTable/> */}
     {/*  <Fornecedores/> */}
     

      <Footer />
    </div>
  );
}

export default App;
