

export function HeaderSaida() {


    function alerta() {
        alert("Funcionalidade ainda não implementada, logo estará funcionando... agradecemos a compreenção");
    }

    return (
        <>
            <header className="p-3 text-white meuHead ">
                <div className="col-auto ">
                    <p className="h4 ">Cadastro de saída de itens</p>
                </div>
                <div className="container">
                    <div className="d-flex flex-wrap ">
                        <div className="row g-3 text-start">
                            <div className="col-md-4">
                                <label className="col-form-label">Data saída</label>
                                <input type="date" id="inputPassword6" className="form-control" />
                            </div>
                            <div className="col-md-4">
                                <label className="col-form-label">Forma de pagamento</label>
                                <select className="form-select" >
                                    <option selected>Selecione</option>
                                    <option value="1">Debito</option>
                                    <option value="2">Credito</option>
                                    <option value="3">Dinheiro</option>
                                    <option value="4">Pix</option>
                                </select>
                            </div>
                            <div className="col-md-4 " >
                                <label className="col-form-label">Valor Total</label>
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