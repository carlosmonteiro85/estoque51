


export function EntradaProduto() {

    function alerta(){
        alert("Esta funcionalidade ainda não implementada, logo estará funcionando... agradecemos a compreenção");
     }

    return (
        <>
            <header className="p-3  text-dark meuItemEntrada">
            <div className="col-auto ">
                    <p className="h4 ">Adicionar Item</p>
                </div>
                <div className="container">
                    <div className="d-flex flex-wrap align-items-start justify-content-lg-start">
                        <div className="row g-3 text-start">
                            <div className="col-md-3">
                                <label className="col-form-label">Nome</label>
                                <input type="text" id="inputPassword6" className="form-control" />
                            </div>
                            <div className="col-md-3">
                                <label className="col-form-label">Fornecedor</label>
                                <input type="text" id="inputPassword6" className="form-control" />
                            </div>
                            <div className="col-md-2">
                                <label className="col-form-label">Qt unidade</label>
                                <input type="number" id="inputPassword6" className="form-control" />
                            </div>
                            <div className="col-md-2">
                                <label className="col-form-label">Qt caixa</label>
                                <input type="text" id="inputPassword6" className="form-control" />
                            </div>
                            <div className="col-md-2">
                                <label className="col-form-label">Categoria</label>
                                <select className="form-select" >
                                    <option selected>Selecione</option>
                                    <option value="1">Bebidas</option>
                                    <option value="2">Doces</option>
                                    <option value="3">Aperitivos</option>
                                    <option value="4">Tabacaria</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-wrap align-items-start justify-content-lg-start">
                        <div className="row g-3 text-start">
                            <div className="col-md-3">
                                <label className="col-form-label">Nº Lote</label>
                                <input type="number" id="inputPassword6" className="form-control" />
                            </div>
                            <div className="col-md-3">
                                <label className="col-form-label">R$ Custo</label>
                                <input type="number" id="inputPassword6" className="form-control" />
                            </div>
                            <div className="col-md-3">
                                <label className="col-form-label">R$ Venda</label>
                                <input type="number" id="inputPassword6" className="form-control" />
                            </div>

                            <div className="col-md-3">
                                <label className="col-form-label">Imposto (%)</label>
                                <input type="number" id="inputPassword6" className="form-control" />
                            </div>
                            <div className="col-md-4">
                                <button onClick={alerta} className="btn btn-primary"  >Add Produto</button>
                                <button onClick={alerta} type="reset" className="btn btn-light ms-3" >Limpar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    );
}