import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';


const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'codigoBarra',
    headerName: 'Codigo de Barra',
    width: 200,
    editable: true,
  },
  {
    field: 'nome',
    headerName: 'Nome Produto',
    width: 200,
    editable: true,
  },
  {
    field: 'fornecedor',
    headerName: 'Fornecedor',
    width: 150,
    editable: true,
  },
  {
    field: 'valorCusto',
    headerName: 'R$ Custo',
    type: 'number',
    width: 150,
    editable: true,
  },
  {
    field: 'valorVenda',
    headerName: 'R$ Venda',
    type: 'number',
    width: 150,
    editable: true,
  },
  {
    field: 'quantidade',
    headerName: 'QT estoque',
    type: 'number',
    width: 150,
    editable: true,
  },
];

const rows = [
  { id: '1', codigoBarra: '1234567', nome: 'Babida 51', fornecedor: 'Dristribuidora asdf', valorCusto: 10.0, valorVenda: 20.0, quantidade: 50, },
  { id: '2', codigoBarra: '1234567', nome: 'Babida 51', fornecedor: 'Dristribuidora asdf', valorCusto: 10.0, valorVenda: 20.0, quantidade: 50, },
  { id: '3', codigoBarra: '1234567', nome: 'Babida 51', fornecedor: 'Dristribuidora asdf', valorCusto: 10.0, valorVenda: 20.0, quantidade: 50, },
  { id: '4', codigoBarra: '1234567', nome: 'Babida 51', fornecedor: 'Dristribuidora asdf', valorCusto: 10.0, valorVenda: 20.0, quantidade: 50, },
  { id: '5', codigoBarra: '1234567', nome: 'Babida 51', fornecedor: 'Dristribuidora asdf', valorCusto: 10.0, valorVenda: 20.0, quantidade: 50, },
  { id: '6', codigoBarra: '1234567', nome: 'Babida 51', fornecedor: 'Dristribuidora asdf', valorCusto: 10.0, valorVenda: 20.0, quantidade: 50, },

];

export function ListaEntrada() {
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
                  <a href="">ver</a>
                  <a href="">vendedor</a>
                </td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>
    </>
  );
}
