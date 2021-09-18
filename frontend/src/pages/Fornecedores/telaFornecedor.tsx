/* import  HeaderFornecedores2  from "./header"; */

import { HeaderFornecedores } from "./header";
import { ListaFornecedores } from "./lista";


export function TelaFornecedor() {
    return (
        <>
            <HeaderFornecedores />
            <ListaFornecedores />
        </>
    );
}