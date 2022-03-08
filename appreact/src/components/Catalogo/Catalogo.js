import './Catalogo.css'

const Catalogo = ({ title, backgroundColor = '#F2D1C9', colorText= '#000000', handleClick, children= "Hola mundo!", ...rest}) => {
    return (
        <h1 className="myCatalogo" style={{ backgroundColor, color: "brown" }}>{title}</h1>
    )
}

export default Catalogo