import { HeaderSaida } from "./header";
import { ListaSaida } from "./lista";
import { SaidaProduto } from "./produto";

export function TelaSaida() {
    return (
        <>
        <HeaderSaida/>
        <SaidaProduto/>
       <ListaSaida/>
        </>
    );
}