import { Header } from "./header";
import { ListaEntrada } from "./lista";
import { EntradaProduto } from "./produto";

export function TelaEntrada() {
    return (
        <>
            <Header />
            <EntradaProduto />
            <ListaEntrada />
        </>
    );
}