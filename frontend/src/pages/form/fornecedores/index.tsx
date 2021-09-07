

export function FormFornecedor() {
    return (

        <div className="container">
            <p className="h1 mt-4">Cadastro de Fornecedores</p>
            <form className="row g-3">
                <div className="col-md-12">
                    <label className="form-label">Nome</label>
                    <input type="text" className="form-control" placeholder="Nome do Fornecedor" />
                </div>
                 <div className="col-4 ">
                    <label className="form-label">CNPJ</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="CNPJ do Fornecedor" />
                </div>
                <div className="col-4 ">
                    <label className="form-label">Telefone</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="Telefone do Fornecedor" />
                </div>
                <div className="col-4 ">
                    <label className="form-label">Email</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="e-mail do Fornecedor" />
                </div>
                <div className="col-md-12">
                    <label className="form-label">Endereço</label>
                    <input type="text" className="form-control" placeholder="Endereço do Fornecedor"  />
                </div>
                <div className="col-12 mt-5">
                    <button type="submit" className="btn btn-primary">Salvar</button>
                </div>
            </form>

        </div>

    );
}