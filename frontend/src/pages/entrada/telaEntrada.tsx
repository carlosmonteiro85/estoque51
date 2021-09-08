import { Header } from "./header";
import { ListaEntrada } from "./lista";

export function TelaEntrada() {
    return (
        <>
            <Header/>
            <div className="container">
                <div className="row g-3 align-items-center">
                    <div className="col-auto">
                         <p className="h1 mt-4">Itens</p>
                    </div>
                    <div className="row g-3 col-md-1 align-items-end">
                        <a className="btn btn-success" href="" >add</a>
                    </div>
                </div>
                <div className="container">
                    <ListaEntrada />
                </div>
            </div>
        </>
    );
}