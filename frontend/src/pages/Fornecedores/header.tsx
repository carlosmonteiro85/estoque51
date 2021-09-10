

export function HeaderFornecedores() {


    function alerta() {
        alert("Funcionalidade ainda não implementada, logo estará funcionando... agradecemos a compreenção");
    }

    return (
        <>
            <header className="p-3 bg-primary text-white ">
            <div className="col-auto ">
                    <p className="h4 ">Cadastro de fornecedor</p>
                </div>
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

                        <div className="row g-3 align-items-center text-start">
                            <div className="col-md-4">
                                <label className="col-form-label">Nome</label>
                                <input type="text" id="inputPassword6" className="form-control" />
                            </div>
                            <div className="col-md-2">
                                <label className="col-form-label">CNPJ</label>
                                <input type="text" id="inputPassword6" className="form-control" />
                            </div>
                            <div className="col-md-2">
                                <label className="col-form-label">Telefone</label>
                                <input type="text" id="inputPassword6" className="form-control" />
                            </div>
                            <div className="col-md-4">
                                <label className="col-form-label">Email</label>
                                <input type="email" id="inputPassword6" className="form-control" />
                            </div>
                            <div className="col-md-4">
                                <button onClick={alerta} className="btn btn-danger" >Add</button>
                            </div>
                        </div>
                        {/*  <div className="text-start">
                            <div className="row g-3 align-items-end ms-5 px-5">
                                <div className="col-md-7">
                                    <label className="col-form-label">Valor</label>
                                    <input type="text" id="inputPassword6" className="form-control" />
                                </div>
                                <div className="col-md-4">
                                    <button onClick={alerta} className="btn btn-danger" >Finalizar</button>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </header>

        </>
    );
}