
import { Button } from "@material-ui/core";
import { useState, useEffect } from "react";
import serviceFornecedor from "services/serviceFornecedor";

export function TelaEntrada() {

    //arrey de fornecedores para preenchimento do select
    const [fornecedores , setFornecedores] = useState([]);

    //ciclo de vida de componentes
    useEffect(() => {
        serviceFornecedor.listarTodos().then(response => {
            setFornecedores(response.data)
        })
    }, [])

    const exibirDados = () =>{

    }
    
    console.log(fornecedores);

    function alerta() {
        alert("Funcionalidade ainda não implementada, logo estará funcionando... agradecemos a compreenção");
    }

    return (
        <>
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

            <header className="p-3  text-dark meuItemEntrada">
                <div className="col-auto ">
                    <p className="h4 ">Adicionar Item</p>
                </div>
                <div className="container">
                    <div className="d-flex flex-wrap align-items-start justify-content-lg-start">
                        <div className="row g-3 text-start">
                            <div className="col-md-4">
                                <label className="col-form-label">Nome</label>
                                <input type="text" id="inputPassword6" className="form-control" />
                            </div>
                            <div className="col-md-3">
                                <label className="col-form-label">Fornecedor</label>
                                {/*Preenchendo os dados do select com dados do banco*/}
                                 <select onChange={exibirDados()} className="form-select" >
                                 <option selected>Selecione</option>
                                     { fornecedores.map( item =>
                                         <option value={item.id} key={item.id}>{item.nome}</option>
                                     )}
                                </select>
                            </div>
                            <div className="col-md-3">
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
                                <label className="col-form-label">Qt unidade</label>
                                <input type="number" id="inputPassword6" className="form-control" />
                            </div>
                            <div className="col-md-1">
                                <label className="col-form-label">Qt caixa</label>
                                <input type="number" id="inputPassword6" className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-wrap align-items-start justify-content-lg-start">
                        <div className="row g-3 text-start">
                            <div className="col-md-3">
                                <label className="col-form-label">Nº Lote</label>
                                <input type="number" id="inputPassword6" className="form-control" />
                            </div>
                            <div className="col-md-3">
                                <label className="col-form-label">R$ Custo</label>
                                <input type="number" id="inputPassword6" className="form-control" />
                            </div>
                            <div className="col-md-3">
                                <label className="col-form-label">R$ Venda</label>
                                <input type="number" id="inputPassword6" className="form-control" />
                            </div>

                            <div className="col-md-3">
                                <label className="col-form-label">Imposto (%)</label>
                                <input type="number" id="inputPassword6" className="form-control" />
                            </div>
                            <div className="col-md-4">
                                {/* <button onClick={alerta} className="btn btn-primary"  >Add Produto</button> */}
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
                                <th scope="col">Código</th>
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
                            <tr>
                                <th scope="row">1</th>
                                <td>34567</td>
                                <td>Bebida 51</td>
                                <td>Fornecedor 1</td>
                                <td>20,30</td>
                                <td>40,30</td>
                                <td>20</td>
                                <td>
                                    <Button
                                        variant="contained"
                                        color="error"
                                    /* onClick={saveFornecedor} */
                                    >remover</Button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </>
    );
}