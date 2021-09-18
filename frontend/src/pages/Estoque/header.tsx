

export function HeaderEstoque() {


    function alerta() {
        alert("Funcionalidade ainda não implementada, logo estará funcionando... agradecemos a compreenção");
    }

    return (
        <>
            <header className="p-3 text-white meuHead">
                <div className="col-auto ">
                    <p className="h4 ">Relatorio de itens em Estoque</p>
                </div>
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <div className="row g-3 align-items-center text-start">
                            <div className="col-md-4">
                                <label className="col-form-label">Categoria</label>
                                <select className="form-select" >
                                    <option selected>Todas</option>
                                    <option value="1">Bebidas</option>
                                    <option value="2">Doces</option>
                                    <option value="3">Aperitivos</option>
                                    <option value="4">Tabacaria</option>
                                </select>
                            </div>
                            <div className="col-md-4">
                                <label className="col-form-label">Data Pedido</label>
                                <div className="input-group ">
                                    <input type="date" className="form-control" placeholder="Username" aria-label="Data Inicial" />
                                    <span className="input-group-text">a</span>
                                    <input type="date" className="form-control" placeholder="Server" aria-label="Data Final" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <label className="col-form-label">Data Entrada</label>
                                <div className="input-group ">
                                    <input type="date" className="form-control" placeholder="Username" aria-label="Data Inicial" />
                                    <span className="input-group-text">a</span>
                                    <input type="date" className="form-control" placeholder="Server" aria-label="Data Final" />
                                </div>
                            </div>
                            <div className="col-md-2">
                                <label className="col-form-label">NF</label>
                                <input type="text" id="inputPassword6" className="form-control" />
                            </div>
                            <div className="col-md-3">
                                <label className="col-form-label">Codigo</label>
                                <input type="text" id="inputPassword6" className="form-control" />
                            </div>
                            <div className="col-md-2">
                                <label className="col-form-label">Quantidade</label>
                                <input type="text" id="inputPassword6" className="form-control" />
                            </div>
                            <div className="col-md-2">
                                <label className="col-form-label">Nº Lote</label>
                                <input type="text" id="inputPassword6" className="form-control" />
                            </div>
                            
                            <div className="col-md-4">
                                <button onClick={alerta} className="btn btn-danger" >Gerar relatório</button>
                            </div>
                        </div>

                    </div>
                </div>
            </header>

        </>
    );
}