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

export default function DataTable() {
  return (
    <>
    <p className="h1 mt-4">Produtos</p>

      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </>
  );
}
