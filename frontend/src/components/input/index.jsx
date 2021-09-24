

export function Input(props) {
    return (
        <>
        <label className="col-form-label">{props.children}</label>
            <input
                type={props.type}
                onChange={props.onChange}
                value={props.value}
                name={props.name}
                id={props.id}
                className={`form-control ${props.className}`} />
        </>
    );
}