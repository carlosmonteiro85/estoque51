
import { Button } from "@material-ui/core";
import { Input } from "components/input";
import { useState, useEffect } from "react";
import serviceFornecedor from "services/serviceFornecedor";

export function TelaEntrada() {

    //arrey de fornecedores para preenchimento do select
    const [fornecedores, setFornecedores] = useState([]);

    //ciclo de vida de componentes
    useEffect(() => {
        serviceFornecedor.listarTodos().then(response => {
            setFornecedores(response.data)
            setItem(item);
        })
    }, [])

/********************************* Logica Itens *******************************************************************/    
    


const handleInputChangeItem = event => {
    const { name, value } = event.target;
  /*    setFornecedor({ ...fornecedor, [name]: value });  */
    console.log(name, value);
};

const item = [
    { 
        descricao: 'Bebida 51',
        fornecedor: {
            nome: 'fornecedor',
            cnpj: '',
            telefone: '',
            email: '',
            vendedor: ''
        }, 
        categoria: '',
        qtUnidade: 20,
        quantidadeCaixa:0,
        lote: '',
        codigoBarras: '34567', 
        custo: 20.30,
        venda: 40.30,
        imposto:0,
    }
];

const [items , setItem] = useState([]);



/********************************* Final Logica Itens tabela *******************************************************************/        

    const exibirDados = () => {
    }

    function alerta() {
        alert("Funcionalidade ainda não implementada, logo estará funcionando... agradecemos a compreenção");
    }

    return (
        <>
            <form >

                <header className="p-3 text-white meuHead">
                    <div className="col-auto ">
                        <p className="h4 ">Cadastro de entrada de Itens</p>
                    </div>
                    <div className="container">
                        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                            <div className="row g-3 align-items-center text-start">
                                <div className="col-md-3">
                                    <label className="col-form-label">Data Pedido</label>
                                    <input type="date" id="inputPassword6" className="form-control" />
                                </div>
                                <div className="col-md-3">
                                    <label className="col-form-label">Data Entrada</label>
                                    <input type="date" id="inputPassword6" className="form-control" />
                                </div>
                                <div className="col-md-2">
                                    <label className="col-form-label">NF</label>
                                    <input type="text" id="inputPassword6" className="form-control" />
                                </div>
                                <div className="col-md-4">
                                    <label className="col-form-label">Valor</label>
                                    <input type="text" id="inputPassword6" className="form-control" />
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
                    <div className="container">
                        <div className="d-flex flex-wrap align-items-start justify-content-lg-start">
                            <div className="row g-3 text-start">
                            <div className="col-md-2">
                                    <Input
                                        type="text"
                                        onChange={handleInputChangeItem}
                                        value={item.codigoBarras}
                                        name="codigoBarras"
                                        id="codigoBarras"
                                    >Codigo de barras</Input> 
                                </div>
                                <div className="col-md-3">
                                    <Input
                                        type="text"
                                        onChange={handleInputChangeItem}
                                        value={item.descricao}
                                        name="descricao"
                                        id="descricao"
                                    >Descrição item</Input>
                                </div>
                                <div className="col-md-3">
                                    <label className="col-form-label">Fornecedor</label>
                                    {/*Preenchendo os dados do select com dados do banco*/}
                                    <select onChange={exibirDados()} className="form-select" >
                                        <option selected>Selecione</option>
                                        {fornecedores.map(fornecedor =>
                                            <option value={fornecedor.id} key={fornecedor.id}>{fornecedor.nome}</option>
                                        )}
                                    </select>
                                </div>
                                <div className="col-md-2">
                                    <label className="col-form-label">Categoria</label>
                                    <select className="form-select" >
                                        <option selected>Selecione</option>
                                        <option value="1">Bebidas</option>
                                        <option value="2">Doces</option>
                                        <option value="3">Aperitivos</option>
                                        <option value="4">Tabacaria</option>
                                    </select>
                                </div>
                                <div className="col-md-1">
                                    <Input
                                        type="number"
                                        onChange={handleInputChangeItem}
                                        value={item.qtUnidade}
                                        name="qtUnidade"
                                        id="qtUnidade"
                                    >Qt unidade</Input>
                                </div>
                                <div className="col-md-1">
                                    <Input
                                        type="number"
                                        onChange={handleInputChangeItem}
                                        value={item.quantidadeCaixa}
                                        name="quantidadeCaixa"
                                        id="quantidadeCaixa"
                                    >Qt caixa</Input> 
                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-wrap align-items-start justify-content-lg-start">
                            <div className="row g-3 text-start">
                                <div className="col-md-3">
                                    <Input
                                        type="number"
                                        onChange={handleInputChangeItem}
                                        value={item.lote}
                                        name="lote"
                                        id="lote"
                                    >Nº Lote</Input> 
                                </div>
                                <div className="col-md-3">
                                    <Input
                                        type="number"
                                        onChange={handleInputChangeItem}
                                        value={item.custo}
                                        name="custo"
                                        id="custo"
                                    >R$ Custo</Input> 
                                </div>
                                <div className="col-md-3">
                                    <Input
                                        type="number"
                                        onChange={handleInputChangeItem}
                                        value={item.venda}
                                        name="venda"
                                        id="venda"
                                    >R$ Venda</Input> 
                                </div>

                                <div className="col-md-3">
                                    <Input
                                        type="number"
                                        onChange={handleInputChangeItem}
                                        value={item.imposto}
                                        name="imposto"
                                        id="imposto"
                                    >Imposto (%)</Input> 
                                </div>
                                <div className="col-md-4">
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={alerta}
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
                                    <th scope="col">Codigo de barras</th>
                                    <th scope="col">Descrição</th>
                                    <th scope="col">Fornecedor</th>
                                    <th scope="col">R$ Custo</th>
                                    <th scope="col">R$ venda</th>
                                    <th scope="col">Qt</th>
                                    <th scope="col">Ações</th>
                                </tr>
                            </thead>
                            <tbody>

                            {items.map((item, i) => {
                                return (
                                <tr key={item.id}>
                                    <td>{item.codigoBarras}</td>
                                    <td>{item.descricao}</td>
                                    <td>{item.fornecedor.nome}</td>
                                    <td>{item.custo}</td>
                                    <td>{item.venda}</td>
                                    <td>{item.qtUnidade}</td>
                                    <td>
                                        <Button
                                            variant="contained"
                                            color="error"
                                        /* onClick={saveFornecedor} */
                                        >remover</Button>
                                    </td>
                                </tr>)
                            })}


                            </tbody>
                        </table>
                    </div>
                </div>
            </form>
        </>
    );
}