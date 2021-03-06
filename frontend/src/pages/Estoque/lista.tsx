import * as React from 'react';


/* 
const rows = [
  { id: '1', item: 'Asdf', fornecedor: 'asdf', categoria: 'asdf', quantidade: 10, lote: '123', valorCusto: '30', valorVenda: '30.0', nf:'6541',dataPedido:'01/01/2021', dataEntrada:'01/01/2021'},
  { id: '2', item: 'Asdf', fornecedor: 'asdf', categoria: 'asdf', quantidade: 10, lote: '456', valorCusto: '30', valorVenda: '30.0', nf:'6541',dataPedido:'01/01/2021', dataEntrada:'01/01/2021'},
  { id: '3', item: 'Asdf', fornecedor: 'asdf', categoria: 'asdf', quantidade: 10, lote: '789', valorCusto: '30', valorVenda: '30.0', nf:'6541',dataPedido:'01/01/2021', dataEntrada:'01/01/2021'},
  { id: '4', item: 'Asdf', fornecedor: 'asdf', categoria: 'asdf', quantidade: 10, lote: '759', valorCusto: '30', valorVenda: '30.0', nf:'6541',dataPedido:'01/01/2021', dataEntrada:'01/01/2021'},
  { id: '5', item: 'Asdf', fornecedor: 'asdf', categoria: 'asdf', quantidade: 10, lote: '153', valorCusto: '30', valorVenda: '30.0', nf:'6541',dataPedido:'01/01/2021', dataEntrada:'01/01/2021'},
  { id: '6', item: 'Asdf', fornecedor: 'asdf', categoria: 'asdf', quantidade: 10, lote: '462', valorCusto: '30', valorVenda: '30.0', nf:'6541',dataPedido:'01/01/2021', dataEntrada:'01/01/2021'},
]; */

export function ListaEstoque() {
  return (
    <>
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
                <th scope="col">Descrição</th>
                <th scope="col">Fornecedor</th>
                <th scope="col">QT</th>
                <th scope="col">Lote</th>
                <th scope="col">R$ custo</th>
                <th scope="col">R$ venda</th>
                <th scope="col">nf</th>
                <th scope="col">Data Pedido</th>
                <th scope="col">Data Entrada</th>
                <th scope="col">Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Descrição do item</td>
                <td>Fornecedor 1</td>
                <td>30</td>
                <td>9989</td>
                <td>40,30</td>
                <td>80,30</td>
                <td>6789</td>
                <td>01/01/2021</td>
                <td>01/01/2021</td>
                <td>
                  <a href="/">ver</a>
                  <a href="/">vendedor</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
