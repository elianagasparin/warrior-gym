export const ContactList = ({title , p1, p2, a1, aTitle1, a2, aTitle2, }) => {
    return (
        <li>
            <h3 className="">{title}</h3>
            <p>{p1}</p>
            <p>{p2}</p>
            <p><a href={a1}>{aTitle1}</a> <a href={a2}>{aTitle2}</a></p>
        </li>
    )
}