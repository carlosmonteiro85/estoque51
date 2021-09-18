import { useState } from "react";
import serviceFornecedor from "services/serviceFornecedor";

export function HeaderFornecedores() {

    //fornecedor: variavel que recebera os dados
    //setFornecedor: Metodo que seta o novo estado na variavel
    //useState([]): recebe o estado inicial de vazio.
    const [fornecedor , setFornecedor] = useState([]);

    //usa o valor do input e add esse valor na variavel a cima
    //endereçado pelo atributo name do imput
    const handleInputChange = event => {
        const { name, value } = event.target;
        setFornecedor({ ...fornecedor, [name]: value });
      };

    //cria uma variavel chamada data e add os atributos da variavel fornecedor
    const saveFornecedor = () => {
        var data = {
          nome: fornecedor.nome,
          cnpj: fornecedor.cnpj,
          telefone: fornecedor.telefone,
          email: fornecedor.email,
          vendedor: fornecedor.vendedor
        };

        //chama ometodo service q é declarado como post e add o 
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
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

    return (
        <>
            <header className="p-3 bg-primary text-white ">
                <div className="col-auto ">
                    <p className="h4 ">Cadastro de fornecedor</p>
                </div>
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <form >

                            <div className="row g-3 align-items-center text-start">
                                <div className="col-md-5">
                                    <label className="col-form-label">Nome da fornecedora</label>
                                    <input 
                                        type="text" 
                                        onChange={handleInputChange} 
                                        value={fornecedor.nome} 
                                        name="nome" 
                                        id="nome" 
                                        className="form-control" />
                                </div>
                                <div className="col-md-2">
                                    <label className="col-form-label">CNPJ</label>
                                    <input 
                                        type="text" 
                                        onChange={handleInputChange} 
                                        value={fornecedor.cnpj} 
                                        name="cnpj" id="cnpj" 
                                        className="form-control" />
                                </div>
                                <div className="col-md-2">
                                    <label className="col-form-label">Telefone</label>
                                    <input 
                                        type="text" 
                                        onChange={handleInputChange} 
                                        value={fornecedor.telefone} 
                                        name="telefone"  
                                        id="telefone" 
                                        className="form-control" />
                                </div>
                                <div className="col-md-3">
                                    <label className="col-form-label">Email</label>
                                    <input 
                                        type="email" 
                                        onChange={handleInputChange} 
                                        value={fornecedor.email} 
                                        name="email" 
                                        id="email" 
                                        className="form-control" />
                                </div>
                                <div className="col-md-5">
                                    <label className="col-form-label">Vendedor</label>
                                    <input 
                                        type="vendedor" 
                                        onChange={handleInputChange} 
                                        value={fornecedor.vendedor} 
                                        name="vendedor" 
                                        id="vendedor" 
                                        className="form-control" />
                                </div>
                                <div className="col-md-5">
                                </div>
                                <div className="col-md-4">
                                    <button onClick={saveFornecedor} className="btn btn-danger" >Add</button>
                                </div>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </header>

        </>
    );
}

