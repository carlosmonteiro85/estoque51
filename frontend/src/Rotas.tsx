
import { TelaEntrada } from 'pages/Entrada/telaEntrada';
import { TelaEstoque } from 'pages/Estoque/telaEstoque';
import { TelaSaida } from 'pages/Saida/telaSaida';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
 
 export function Rotas(){
     return(
         <BrowserRouter>
            <Switch>
                 <Route path="/" component={TelaEntrada} exact/>
                <Route path="/entrada" component={TelaEntrada} exact/>
                <Route path="/estoque" component={TelaEstoque} exact/>
                <Route path="/saida" component={TelaSaida} exact/>
            </Switch>
         </BrowserRouter>
     );
 }