


export function Vendedor() {

    function alerta() {
        alert("Esta funcionalidade ainda não implementada, logo estará funcionando... agradecemos a compreenção");
    }

    return (
        <>
            <header className="p-3  text-dark meuItem">
                <div className="col-auto ">
                    <p className="h4 ">Adicionar vendedor</p>
                </div>
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-lg-center">
                        <div className="col-md-8">
                            <label className="col-form-label">Nome vendedor</label>
                            <input type="text" id="inputPassword6" className="form-control" />
                        </div>
                        <div className="col-md-6 mt-4">
                            <button onClick={alerta} className="btn btn-primary"  >Add </button>
                        </div>
                    </div>
                </div>
            </header>

        </>
    );
}