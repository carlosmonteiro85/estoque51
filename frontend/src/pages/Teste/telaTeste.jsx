
import { Button } from "@material-ui/core";
import { Input } from "components/input";
import { useState} from "react";

export function TelaTeste() {

    const [itens, setItem] = useState([]);

    const [itensLista, setItemLista] = useState([]);


    const handleInputChangeItem = event => {
        const { name, value } = event.target;
        setItem({ ...itens, [name]: value });
        console.log({ ...itens, [name]: value });
    };

    function alerta() {
        alert("Funcionalidade ainda não implementada, logo estará funcionando... agradecemos a compreenção");
    }

    const addItem = () => {

        itensLista.push(itens);
        console.log('############################');
        console.log(itensLista);

        setItemLista(itensLista);
    }

    return (
        <>
            {/* <form > */}
            <header className="p-3 text-white meuHead">
                <div className="col-auto ">
                    <p className="h4 ">Tela de Teste</p>
                </div>
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <div className="row g-3 align-items-center text-start">
                            <div className="col-md-12">
                                <label className="col-form-label">Data</label>
                                <input type="date" id="inputPassword6" className="form-control" />
                            </div>
                            <div className="col-md-4">
                                <Button
                                    variant="contained"
                                    color="warning"
                                    onClick={alerta}
                                >Finalizar</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/********************************* Itens *******************************************************************/}
            <header className="p-3  text-dark meuItemEntrada">
                <div className="col-auto ">
                    <p className="h4 ">Adicionar Item</p>
                </div>

                <form >
                    <div className="container">
                        <div className="d-flex flex-wrap align-items-start justify-content-lg-start">
                            <div className="row g-3 text-start">
                                <div className="col-md-3">
                                    <Input
                                        type="text"
                                        onChange={handleInputChangeItem}
                                        value={itens.input1}
                                        name="input1"
                                        id="input1"
                                    >Input 1</Input>
                                </div>
                                <div className="col-md-3">
                                    <Input
                                        type="text"
                                        onChange={handleInputChangeItem}
                                        value={itens.input2}
                                        name="input2"
                                        id="input2"
                                    >Input 2</Input>
                                </div>
                                <div className="col-md-3">
                                    <label className="col-form-label">Opções</label>
                                    <select name="selectOpcao" onChange={handleInputChangeItem} className="form-select" >
                                        <option selected>Selecione</option>
                                        <option value="opcao_1">Opção 1</option>
                                        <option value="opcao_2">Opção 2</option>
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <Input
                                        type="number"
                                        onChange={handleInputChangeItem}
                                        value={itens.input3}
                                        name="input3"
                                        id="input3"
                                    >Input 3</Input>
                                </div>
                                <div className="col-md-4">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={addItem}
                                    >add Item</Button>

                                    <Button
                                        className="ms-2"
                                        variant="contained"
                                        color="inherit"
                                        onClick={alerta}
                                    >limpar</Button>
                                </div>


                            </div>
                        </div>
                    </div>
                </form>
            </header>
            {/********************************* Final Itens *******************************************************************/}
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-lg-center mt-3">
                    <div className="col-auto ">
                        <p className="h1 mt-4">Itens</p>
                    </div>
                </div>
                <div style={{ height: 400, width: '100%' }}>

                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Input 1</th>
                                <th scope="col">Input 2</th>
                                <th scope="col">Opção </th>
                                <th scope="col">Input 3</th>
                                <th scope="col">Acao</th>
                            </tr>
                        </thead>
                        <tbody>
                            {itensLista.map((item, i) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.input1}</td>
                                        <td>{item.input2}</td>
                                        <td>{item.seleselectOpcao}</td>
                                        <td>{item.input4}</td>
                                        <td>
                                            <Button
                                                variant="contained"
                                                color="error"

                                            >remover</Button>
                                        </td>
                                    </tr>)
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* </form> */}
        </>
    );
}