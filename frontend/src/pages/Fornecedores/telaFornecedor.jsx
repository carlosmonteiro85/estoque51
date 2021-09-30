import { Button } from "@material-ui/core";
import { useState, useEffect } from "react";

import { MeuIcone } from 'components/Icones/index';
import serviceFornecedor from "services/serviceFornecedor";

import Excluir from '../../assets/icons/fi-rr-user-delete.svg';
import Editar from '../../assets/icons/fi-rr-edit.svg';
import { Input } from "components/input";


export function TelaFornecedor() {

    //*************************************** LOGICA DO FORM ****************************************************************** */
    //fornecedor: variavel que recebera os dados
    //setFornecedor: Metodo que seta o novo estado na variavel
    //useState([]): recebe o estado inicial de vazio.
    const [fornecedor, setFornecedor] = useState([]);

    //usa o valor do input e add esse valor na variavel a cima
    //endereçado pelo atributo name do imput
    const handleInputChange = event => {
        const { name, value } = event.target;
        setFornecedor({ ...fornecedor, [name]: value });
    };
    
    const preecherForm = (item) => {
        setFornecedor(item);
    }
    //cria uma variavel chamada data e add os atributos da variavel fornecedor
    const saveFornecedor = () => {
        var data = {
          id: fornecedor.id,  
          nome: fornecedor.nome,
          cnpj: fornecedor.cnpj,
          telefone: fornecedor.telefone,
          email: fornecedor.email,
          vendedor: fornecedor.vendedor
        };

        //verifica se o item ja tem id, se tiver realiza o update, se não cria o item
        if(data.id == null){

            //chama o metodo service q é declarado como post e add o 
            //resultado do request do post a variavel data
            serviceFornecedor.createFornecedor(data)
          .then(response => {
            setFornecedor({
              id: response.data.id,
              nome: response.data.nome,
              cnpj: response.data.cnpj,
              telefone: response.data.telefone,
              email: response.data.email,
              vendedor: response.data.vendedor,
    
              //submet o formulario
              submitted: true
            });
            //recebe uma resposta e addciona ao um alert
            alert(response.data.message);
            window.location.href = "/fornecedores";
          })
          .catch(e => {
            console.log(e);
          });

        }else{

            //metodo http put de update
            serviceFornecedor.updateById(data.id, data).then(response => {
                setFornecedor({
                  id: response.data.id,
                  nome: response.data.nome,
                  cnpj: response.data.cnpj,
                  telefone: response.data.telefone,
                  email: response.data.email,
                  vendedor: response.data.vendedor,
        
                  //submet o formulario
                  submitted: true
                });
                //recebe uma resposta e addciona ao um alert
                alert(response.data.message);
                window.location.href = "/fornecedores";
              })
              .catch(e => {
                console.log(e);
              });
        }

  };
    //*************************************** FIM DA LOGICA DO FORM ****************************************************************** */

    //*************************************** LOGICA DA LISTA ****************************************************************** */
    //estado da lista
    const [fornecedorTabela, setFornecedorTabela] = useState([]);
    //metodo http-delete que deleta o item
    const deletarFornecedor = (item) => {
        //alerta para confirmação de exclusão
        var verificacao = window.confirm(" Tem certeza que deseja excluir este item?");
        //verificação 
        if (verificacao === true) {
            serviceFornecedor.delete(item.id).then(response => {
                alert(response.data.message);
                //redirecionamento para a url
                window.location.href = "/fornecedores";
            });
        }
    }
    //gerenciador do ciclo
    useEffect(() => {
        serviceFornecedor.listarTodos().then(response => {
            setFornecedorTabela(response.data)
        })
    }, [])

    //*************************************** FIM DA LOGICA DA LISTA ****************************************************************** */

    return (
        <>
            {/********************************* HTML DO FORM *******************************************************************/}
            <header className="p-3 text-white meuHead">
                <div className="col-auto ">
                    <p className="h4 ">Cadastro de fornecedor</p>
                </div>
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <form onSubmit={(event) => {
                            //Desabilita o comportamento padao de recarregar o form ao ser submetido
                            event.preventDefault();
                        }}>
                            <div className="row g-3 align-items-center text-start">
                                <div className="col-md-5 ">
                                    <Input
                                        type="text"
                                        onChange={handleInputChange}
                                        value={fornecedor.nome}
                                        name="nome"
                                        id="nome"
                                    >Nome</Input>
                                </div>
                                <div className="col-md-2">
                                    <Input
                                        type="text"
                                        onChange={handleInputChange}
                                        value={fornecedor.cnpj}
                                        name="cnpj"
                                        id="cnpj"
                                    >CNPJ</Input>
                                </div>
                                <div className="col-md-2">
                                    <Input
                                        type="text"
                                        onChange={handleInputChange}
                                        value={fornecedor.telefone}
                                        name="telefone"
                                        id="telefone"
                                    >Telefone</Input>
                                </div>
                                <div className="col-md-3">
                                    <Input
                                        type="email"
                                        onChange={handleInputChange}
                                        value={fornecedor.email}
                                        name="email"
                                        id="email"
                                    >Email</Input>
                                </div>
                                <div className="col-md-5">
                                    <Input
                                        type="text"
                                        onChange={handleInputChange}
                                        value={fornecedor.vendedor}
                                        name="vendedor"
                                        id="vendedor"
                                    >Vendedor</Input>
                                </div>
                                <div className="col-md-5">
                                </div>
                                <div className="col-md-4">
                                    <Button
                                        variant="contained"
                                        color="warning"
                                        onClick={saveFornecedor}
                                    >Salvar</Button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </header>
            {/********************************* HTML DO FORM *******************************************************************/}

            {/********************************* LISTA DO FORM ******************************************************************/}
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
                                            <MeuIcone src={Editar} className="" onClick={() => preecherForm(item)} />
                                            <MeuIcone src={Excluir} className="ms-3" onClick={() => deletarFornecedor(item)} />
                                        </td>
                                    </tr>)
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            {/********************************* FINAL DA LISTA DO FORM *********************************************************/}
        </>
    );
}