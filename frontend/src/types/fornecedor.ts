import { vendedor } from "./vendedor";

export type fornecedor =  {  
    "id": number,
    "nome": string,
    "cnpj": string,
    "telefone": string,
    "email": string,
    "vendedores": vendedor[]
}