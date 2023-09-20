export const Categories = ({svg, titulo, descripcion}) => {
    return (
        <li className="categoriasLista">
            <img className="icono" src={svg} />
            <p className="categoria">{titulo}</p>
            <p className="descripcion">{descripcion}</p>
        </li>
    )
}