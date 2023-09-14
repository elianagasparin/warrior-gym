import './PageTitle.css'

export const PageTitle = ({title, className}) => {
    return (
        <h1 className={className}>{title}</h1>
    )
}