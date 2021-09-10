
import Negocio from 'assets/images/negocio.png';
export function Home() {
    return (
        <>
            <div className="container mt-5 d-flex align-items-center justify-content-center">

                <div className="d-inline mt-5 ">
                    <img src={Negocio} alt="Imagem ilustrativa" width="110%" />
                </div>
                <div className="jumbotron d-inline ms-5 mt-5">
                    <h1 className="display-4">GestorTec</h1>
                    <p className="lead">Melhor gestão para seu estoque</p>
                    <hr className="" />
                    <p>Aplicaçã destinada ao gerenciamento de estoque, fique a vontade para escolha um item.</p>

                    <a href="/entrada"><button type="button" className="btn btn-outline-primary">Entrada de Item</button></a>
                    <a href="/saida"><button type="button" className="btn btn-outline-primary ms-1">Saida de Item</button></a>
                    <a href="/estoque"><button type="button" className="btn btn-outline-primary ms-1">Consultar Itens</button></a>
                </div>
            </div>

        </>
    );
}