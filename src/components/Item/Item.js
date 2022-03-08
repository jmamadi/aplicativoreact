import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({product}) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                border: '2px solid brown',
                margin: '10px',
            }}
        >
            <h1 className="ItemHeader">{product.name}</h1>
            <picture>
            <img src={product.img} alt={product.name} className="ItemImg"/>
            </picture>
            <h2 className="Info">$ {product.price}</h2>
            <footer className='ItemFooter'>
                <Link to={`/detail/${product.id}`} className="DetailButton">Ver detalle</Link>
            </footer>
        </div>
    );
};

export default Item;