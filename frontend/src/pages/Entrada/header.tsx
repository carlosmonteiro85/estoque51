

export function Header() {


    function alerta() {
        alert("Funcionalidade ainda não implementada, logo estará funcionando... agradecemos a compreenção");
    }

    return (
        <>
            <header className="p-3 bg-primary text-white ">
                <div className="col-auto ">
                    <p className="h4 ">Cadastro de entrada de mercadoria</p>
                </div>
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <div className="row g-3 align-items-center text-start">
                            <div className="col-md-3">
                                <label className="col-form-label">Data Pedido</label>
                                <input type="date" id="inputPassword6" className="form-control" />
                            </div>
                            <div className="col-md-3">
                                <label className="col-form-label">Data Entrada</label>
                                <input type="date" id="inputPassword6" className="form-control" />
                            </div>
                            <div className="col-md-2">
                                <label className="col-form-label">NF</label>
                                <input type="text" id="inputPassword6" className="form-control" />
                            </div>
                            <div className="col-md-4">
                                <label className="col-form-label">Valor</label>
                                <input type="text" id="inputPassword6" className="form-control" />
                            </div>
                            <div className="col-md-4">
                                <button onClick={alerta} className="btn btn-danger" >Finalizar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    );
}