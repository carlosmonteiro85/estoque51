
export function MeuIcone(props) {
    return (
        <a href={props.href}> <img onClick={props.onClick} src={props.src} width="10%" className={props.className} alt="Editar" /></a>
    );
}