
export function Header() {
    return (
        <header className="p-3 bg-primary text-white">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

                    <div className="row g-3 align-items-center">
                        <div className="col-md-1">
                            <label className="col-form-label">Data Pedido</label>
                        </div>
                        <div className="col-md-4">
                            <input type="date" id="inputPassword6" className="form-control" />
                        </div>
                        
                        <div className="col-auto">
                            <label className="col-form-label">NF</label>
                        </div>
                        <div className="col-md-3">
                            <input type="text" id="inputPassword6" className="form-control" />
                        </div>
                    </div>

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="#" className="nav-link px-2 text-white"></a></li>
                        <li><a href="#" className="nav-link px-2 text-white"></a></li>
                        <li><a href="#" className="nav-link px-2 text-white"></a></li>
                    </ul>


                    <div className="text-end">
                        <div className="row g-3 align-items-center ">
                            <div className="col-auto">
                                <label className="col-form-label">Valor</label>
                            </div>
                            <div className="col-md-6">
                                <input type="text" id="inputPassword6" className="form-control" />
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}