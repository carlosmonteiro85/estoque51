import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';


const columns: GridColDef[] = [
  {
    field: 'id', headerName: 'Código', width: 130, headerAlign: 'center',
    editable: false,
    align: 'center',
  },
  {
    field: 'nome',
    headerName: 'Descrição item',
    width: 470,
    headerAlign: 'center',
    editable: false,
    align: 'center',
  },
  {
    field: 'quantidade',
    headerName: 'Quantidade',
    type: 'number',
    width: 200,
    headerAlign: 'center',
    editable: false,
    align: 'center',
  },
  {
    field: 'valorVenda',
    headerName: 'R$ Unitario',
    type: 'number',
    width: 200,
    headerAlign: 'center',
    editable: false,
    align: 'center',
  },
  {
    field: 'valorTotalItem',
    headerName: 'R$ Total',
    type: 'number',
    width: 200,
    headerAlign: 'center',
    editable: false,
    align: 'center',
  },
];

const rows = [
  { id: '1', nome: 'asdf asdfasdf ', quantidade: 50, valorVenda: 10, valorTotalItem: 500.0 },
  { id: '2', nome: 'asdf asdfasdf ', quantidade: 50, valorVenda: 10, valorTotalItem: 500.0 },
  { id: '3', nome: 'asdf asdfasdf ', quantidade: 50, valorVenda: 10, valorTotalItem: 500.0 },
  { id: '4', nome: 'asdf asdfasdf ', quantidade: 50, valorVenda: 10, valorTotalItem: 500.0 },
  { id: '5', nome: 'asdf asdfasdf ', quantidade: 50, valorVenda: 10, valorTotalItem: 500.0 },
  { id: '6', nome: 'asdf asdfasdf ', quantidade: 50, valorVenda: 10, valorTotalItem: 500.0 },

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
