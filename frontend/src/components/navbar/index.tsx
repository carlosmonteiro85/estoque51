
import Logo from 'assets/images/logo.png';

function alerta(){
    alert("Funcionalidade ainda não implementada, logo estará funcionando... agradecemos a compreenção");
 }

export function NavBar() {
    return (
        <header className="p-3 bg-dark text-white">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/entrada" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                        <img src={Logo} alt="logo" width="10%" /> GESTOR<span>TEC</span>
                        <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use ></use></svg>
                    </a>

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="/entrada" className="nav-link px-2 text-white">Entrada</a></li>
                        <li><a href="/estoque" className="nav-link px-2 text-white">Estoque</a></li>
                        <li><a href="/saida" className="nav-link px-2 text-white">Saida</a></li>
                    </ul>


                    <div className="text-end">
                        <button type="button" onClick={alerta} className="btn btn-outline-light me-2">Login</button>
                        <button type="button" onClick={alerta} className="btn btn-warning">Sign-up</button>
                    </div>
                </div>
            </div>
        </header>
    );
}