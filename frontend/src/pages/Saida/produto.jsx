


export function SaidaProduto() {

    function alerta(){
        alert("Esta funcionalidade ainda não implementada, logo estará funcionando... agradecemos a compreenção");
     }

    return (
        <>
            <header className="p-3 bg-secondary text-white ">
            <div className="col-auto ">
                    <p className="h4 ">Adicionar Item</p>
                </div>
                <div className="container">
                    <div className="d-flex flex-wrap align-items-start justify-content-lg-start">
                        <div className="row g-3 text-start">
                            <div className="col-md-2">
                                <label className="col-form-label">Código de barras</label>
                                <input type="number" id="inputPassword6" className="form-control" />
                            </div>
                            <div className="col-md-2">
                                <label className="col-form-label">Descrição</label>
                                <input type="text" id="inputPassword6" className="form-control" />
                            </div>
                            <div className="col-md-2">
                                <label className="col-form-label">Qt unidade</label>
                                <input type="number" id="inputPassword6" className="form-control" />
                            </div>
                            <div className="col-md-2">
                                <label className="col-form-label">Codigo produto</label>
                                <input type="number" id="inputPassword6" className="form-control" />
                            </div>
                            <div className="col-md-2">
                                <label className="col-form-label">R$ Unitario</label>
                                <input type="number" id="inputPassword6" className="form-control" />
                            </div>
                            <div className="col-md-2">
                                <label className="col-form-label">R$ Total </label>
                                <input type="number" id="inputPassword6" className="form-control" />
                            </div>
                            <div className="col-md-3">
                                <button onClick={alerta} className="btn btn-primary"  >Add Item</button>
                                <button onClick={alerta} type="reset" className="btn btn-light ms-3" >Limpar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    );
}