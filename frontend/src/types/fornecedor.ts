import { Vendedor } from "./vendedor";

export type Fornecedor =  {  
    "id": number,
    "nome": string,
    "cnpj": string,
    "telefone": string,
    "email": string,
    "vendedores": Vendedor[]
}