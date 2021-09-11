import { HeaderEstoque } from "./header";
import { ListaEstoque } from "./lista";

export function TelaEstoque() {
    return (
        <>
        <HeaderEstoque />
        <ListaEstoque />
       {/*  <div className="container mt-5">
            <p ><h1 className="h1">Implementando</h1></p>
            <p> <h3 className="h3">Por favor aguarde...</h3></p>
            <br />
            <a className="btn btn-primary"  href="/entrada">Voltar</a>
        </div> */}
        </>
    );
}