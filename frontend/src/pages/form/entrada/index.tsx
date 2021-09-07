

export function FormEntrada() {
    return (

        <div className="container">
            <p className="h1 mt-4">Entrada Produtos</p>
            <form className="row g-3">
                <div className="col-md-12">
                    <label className="form-label">Nome</label>
                    <input type="text" className="form-control" />
                </div>
                 <div className="col-6 ">
                    <label className="form-label">Preço de Custo</label>
                    <input type="number" className="form-control" id="inputAddress" placeholder="Valor de Custo do produto" />
                </div>
                <div className="col-6">
                    <label className="form-label">Preço de Venda</label>
                    <input type="number" className="form-control" id="inputAddress" placeholder="Valor de Denda do produto" />
                </div>
                <div className="col-md-12">
                    <label className="form-label">Fornecedor</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col-md-4">
                    <label className="form-label">Categoria</label>
                    <select id="inputState" className="form-select">
                        <option selected>Escolha uma opção</option>
                        <option>Bebida</option>
                        <option>Doces</option>
                        <option>Aperitivos</option>
                        <option>Tabacaria</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <label className="form-label">Qt Estoque</label>
                    <input type="text" className="form-control" id="inputZip" placeholder="Quantidade em Estoque" />
                </div>
                <div className="col-4">
                    <label className="form-label">Código de barras</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Codigo de barras" />
                </div>
                <div className="col-12 mt-5">
                    <button type="submit" className="btn btn-primary">Salvar</button>
                </div>
            </form>

        </div>

    );
}