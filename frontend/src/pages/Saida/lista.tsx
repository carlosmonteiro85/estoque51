import * as React from 'react';
/* import { DataGrid, GridColDef } from '@mui/x-data-grid'; */



/* const rows = [
  { id: '1', nome: 'asdf asdfasdf ', quantidade: 50, valorVenda: 10, valorTotalItem: 500.0 },
  { id: '2', nome: 'asdf asdfasdf ', quantidade: 50, valorVenda: 10, valorTotalItem: 500.0 },
  { id: '3', nome: 'asdf asdfasdf ', quantidade: 50, valorVenda: 10, valorTotalItem: 500.0 },
  { id: '4', nome: 'asdf asdfasdf ', quantidade: 50, valorVenda: 10, valorTotalItem: 500.0 },
  { id: '5', nome: 'asdf asdfasdf ', quantidade: 50, valorVenda: 10, valorTotalItem: 500.0 },
  { id: '6', nome: 'asdf asdfasdf ', quantidade: 50, valorVenda: 10, valorTotalItem: 500.0 },

]; */

export function ListaSaida() {
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
                <th scope="col">Qt</th>
                <th scope="col">R$ venda</th>
                <th scope="col">R$ total items</th>
                <th scope="col">Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Bibida 1</td>
                <td>20</td>
                <td>20,30</td>
                <td>203,00</td>
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
