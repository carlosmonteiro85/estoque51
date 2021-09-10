import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';


const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'nome',
    headerName: 'Nome',
    width: 300,
    editable: true,
  },
  {
    field: 'cnpj',
    headerName: 'CNPJ',
    width: 250,
    type: 'number',
    editable: true,
  },
  {
    field: 'telefone',
    headerName: 'Telefone',
    width: 250,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 300,
    editable: true,
  },
];

const rows = [
  { id: '1', nome: 'Asdf', cnpj: '000.000.0001-01', telefone: '3333-3333', email: 'asdf@asdf' },
  { id: '1', nome: 'Asdf', cnpj: '000.000.0001-01', telefone: '3333-3333', email: 'asdf@asdf' },
  { id: '1', nome: 'Asdf', cnpj: '000.000.0001-01', telefone: '3333-3333', email: 'asdf@asdf' },
  { id: '1', nome: 'Asdf', cnpj: '000.000.0001-01', telefone: '3333-3333', email: 'asdf@asdf' },
  { id: '1', nome: 'Asdf', cnpj: '000.000.0001-01', telefone: '3333-3333', email: 'asdf@asdf' },
  { id: '1', nome: 'Asdf', cnpj: '000.000.0001-01', telefone: '3333-3333', email: 'asdf@asdf' },
];

export function ListaFornecedores() {
  return (
    <>
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-lg-center mt-3">
          <div className="col-auto ">
            <p className="h1 mt-4">Fornecedores</p>
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
