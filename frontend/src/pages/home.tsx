import Imagem from 'assets/images/Imagem.png';

export function Home() {
    return (
        <>
              <div className="container mt-5">
                <div className="jumbotron d-inline">
                    <h1 className="display-4">GestorTec</h1>
                    <p className="lead">Analise o desempenho das suas vendas por diferentes perspectivas</p>
                    <hr />
                    <p>Esta aplicação consiste em exibir um dashboard a partir de dados fornecidos por um back end construído com Spring Boot.</p>
                    <a className="btn btn-primary btn-lg" href="/" >
                        Acessar o DashBoard
                    </a>
                </div>
                   
                <div className="d-inline">
                    <img src={Imagem} alt="Imagem ilustrativa" width="30%" />
                </div>
            </div>  
        </>
    );
}