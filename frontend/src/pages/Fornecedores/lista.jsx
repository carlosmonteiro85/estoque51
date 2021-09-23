
import { useEffect, useState } from 'react';
import serviceFornecedor from 'services/serviceFornecedor';

import { MeuIcone } from 'components/Icones/index';

import Excluir from '../../assets/icons/fi-rr-user-delete.svg';
import Editar from '../../assets/icons/fi-rr-edit.svg';


export function ListaFornecedores() {

  //estado
  const [fornecedorTabela, setFornecedorTabela] = useState([]);
  //renderizando componente
  useEffect(() => {
    serviceFornecedor.listarTodos().then(response => {
      setFornecedorTabela(response.data)
    })
  }, [])

  function deletarFornecedor(item) {
    //alerta para confirmação de exclusão
    var verificacao = window.confirm(" Tem certeza que deseja excluir este item?");
    //verificação 
    if (verificacao === true) {
      serviceFornecedor.delete(item.id).then(response => {
        alert(response.data.message);
      });
    }
  }

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
                <th scope="col">Vendedor</th>
                <th scope="col">Ação</th>
              </tr>
            </thead>
            <tbody>
              {fornecedorTabela.map((item, i) => {
                return (
                  //retornando os itens do array
                  <tr key={item.id}>
                    <th scope="row">{item.id}</th>
                    <td width="25%">{item.nome}</td>
                    <td >{item.cnpj}</td>
                    <td width="10%">{item.telefone}</td>
                    <td width="20%">{item.email}</td>
                    <td width="10%" >{item.vendedor}</td>
                    <td>
                      <MeuIcone src={Editar} className="" {...item} />
                      <MeuIcone src={Excluir} className="ms-3" onClick={() => deletarFornecedor(item)} />
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

