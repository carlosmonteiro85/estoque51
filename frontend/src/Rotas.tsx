
import { TelaEntrada } from 'pages/Entrada/telaEntrada';
import { TelaTeste } from 'pages/Teste/telaTeste';
import { TelaEstoque } from 'pages/Estoque/telaEstoque';
import { TelaFornecedor } from 'pages/Fornecedores/telaFornecedor';

import { Home } from 'pages/home';
import { TelaSaida } from 'pages/Saida/telaSaida';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
 
 export function Rotas(){
     return(
         <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/entrada" component={TelaEntrada} exact/>
                <Route path="/estoque" component={TelaEstoque} exact/>
                <Route path="/saida" component={TelaSaida} exact/>
                <Route path="/fornecedores" component={TelaFornecedor} exact/>
                <Route path="/teste" component={TelaTeste} exact/>
            </Switch>
         </BrowserRouter>
     );
 }