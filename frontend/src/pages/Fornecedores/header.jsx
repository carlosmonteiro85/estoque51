import { useState } from "react";
import serviceFornecedor from "services/serviceFornecedor";

export function HeaderFornecedores() {

    const [fornecedor , setFornecedor] = useState([]);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setFornecedor({ ...fornecedor, [name]: value });
      };

    const saveFornecedor = () => {
        var data = {
          nome: fornecedor.nome,
          cnpj: fornecedor.cnpj,
          telefone: fornecedor.telefone,
          email: fornecedor.email
        };

        serviceFornecedor.createFornecedor(data)
      .then(response => {
        setFornecedor({
          id: response.data.id,
          nome: response.data.nome,
          cnpj: response.data.cnpj,
          telefone: response.data.telefone,
          email: response.data.email,
        });
        /* console.log(response.data);
        alert(response.data); */
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
                                <div className="col-md-4">
                                    <label className="col-form-label">Nome</label>
                                    <input type="text" onChange={handleInputChange} value={fornecedor.nome} name="nome" id="nome" className="form-control" />
                                </div>
                                <div className="col-md-2">
                                    <label className="col-form-label">CNPJ</label>
                                    <input type="text" onChange={handleInputChange} value={fornecedor.cnpj} name="cnpj" id="cnpj" className="form-control" />
                                </div>
                                <div className="col-md-2">
                                    <label className="col-form-label">Telefone</label>
                                    <input type="text" onChange={handleInputChange} value={fornecedor.telefone} name="telefone"  id="telefone" className="form-control" />
                                </div>
                                <div className="col-md-4">
                                    <label className="col-form-label">Email</label>
                                    <input type="email" onChange={handleInputChange} value={fornecedor.email} name="email" id="email" className="form-control" />
                                </div>
                                <div className="col-md-4">
                                    <button type="submit" onClick={saveFornecedor} className="btn btn-danger" >Add</button>
                                </div>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </header>

        </>
    );
}

