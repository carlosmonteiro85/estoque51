/* import  HeaderFornecedores2  from "./header"; */

import { HeaderFornecedores } from "./header";
import { ListaFornecedores } from "./lista";
import { Vendedor } from "./vendedor";

export function TelaFornecedor() {
    return (
        <>
            <HeaderFornecedores />
            <Vendedor />
            <ListaFornecedores />
        </>
    );
}