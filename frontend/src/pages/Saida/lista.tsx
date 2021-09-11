import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';


const columns: GridColDef[] = [
  { field: 'id', headerName: 'Código', width: 90 },
  {
    field: 'nome',
    headerName: 'Descrição item',
    width: 200,
    editable: true,
  },
  {
    field: 'quantidade',
    headerName: 'QT estoque',
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
];

const rows = [
  { id: '1', codigoBarra: '1234567', nome: 'Babida 51', fornecedor: 'Dristribuidora asdf', valorCusto: 10.0, valorVenda: 20.0, quantidade: 50, },
  { id: '2', codigoBarra: '1234567', nome: 'Babida 51', fornecedor: 'Dristribuidora asdf', valorCusto: 10.0, valorVenda: 20.0, quantidade: 50, },
  { id: '3', codigoBarra: '1234567', nome: 'Babida 51', fornecedor: 'Dristribuidora asdf', valorCusto: 10.0, valorVenda: 20.0, quantidade: 50, },
  { id: '4', codigoBarra: '1234567', nome: 'Babida 51', fornecedor: 'Dristribuidora asdf', valorCusto: 10.0, valorVenda: 20.0, quantidade: 50, },
  { id: '5', codigoBarra: '1234567', nome: 'Babida 51', fornecedor: 'Dristribuidora asdf', valorCusto: 10.0, valorVenda: 20.0, quantidade: 50, },
  { id: '6', codigoBarra: '1234567', nome: 'Babida 51', fornecedor: 'Dristribuidora asdf', valorCusto: 10.0, valorVenda: 20.0, quantidade: 50, },

];

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
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            checkboxSelection
            disableSelectionOnClick
          />
        </div>
      </div>
    </>
  );
}
