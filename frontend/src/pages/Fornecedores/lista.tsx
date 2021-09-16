import axios from 'axios';
import { useEffect, useState } from 'react';
import { Fornecedor } from 'types/fornecedor';
import { BASE_URL } from 'utils/requests';


export function ListaFornecedores() {

  const [fornecedorTabela , setFornecedorTabela] = useState<Fornecedor[]>([]);

  useEffect( () => {
    axios.get(`${BASE_URL}/fornecedor`).then(response => {
      setFornecedorTabela(response.data)
    })
  }, [])

  return (
    <>
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-lg-center mt-3">
          <div className="col-auto ">
            <p className="h1 mt-4">Fornecedores</p>
          </div>
        </div>
        <div style={{ height: 400, width: '100%' }}>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Código</th>
                <th scope="col">Nome</th>
                <th scope="col">CNPJ</th>
                <th scope="col">Telefone</th>
                <th scope="col">Email</th>
                <th scope="col">Ação</th>
              </tr>
            </thead>
            <tbody>
              {/*Realizando um ma() no arrey*/}
              {fornecedorTabela.map((item, i) => {  
                return (
                  //retornando os itens do array
                  <tr key={item.id}>
                    <th scope="row">{item.id}</th>
                    <td>{item.nome}</td>
                    <td>{item.cnpj}</td>
                    <td>{item.telefone}</td>
                    <td>{item.email}</td>
                    <td>
                      <a href="/">vendedores</a>
                      <a className="ms-2" href="/">ver perfil</a>
                    </td>
                </tr>)
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
