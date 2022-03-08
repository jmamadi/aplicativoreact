import './ItemDetail.css'
import { useState, useContext } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantity, setQuantity] = useState(0)

    const { AddItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantity(quantity)

        const productToAdd = {
            id,
            name,
            price,
            img,
            category,
            description,
            stock
        }

        AddItem(productToAdd, quantity)
    }

    return (
        <div>
            <h1>{name}</h1>
            <picture> <img src={img} alt={name} className="ItemImg"  /> </picture>
            <p>Categoría: {category}</p>
            <h2>$ {price}</h2>
            <p>{description}</p>
            <footer>
            { quantity > 0 ? <Link to={'/cart/'} className='Option'>Ir al carrito de compras</Link> : <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} /> }
            </footer>
        </div>
    );
}

/*

return (
    <article className="CardItem">
        <header className="Header">
            <h2 className="ItemHeader">
                {name}
            </h2>
        </header>
        <picture>
            <img src={img} alt={name} className="ItemImg"/>
        </picture>
        <section>
            <p className="Info">
                Categoria: {category}
            </p>
            <p className="Info">
                Descripción: {description}
            </p>
            <p className="Info">
                Precio: {price}
            </p>
        </section>
        <footer className='ItemFooter'>
            {
                quantity > 0 ? 
                    <Link to={'/cart'} className='Option'>Ir al carrito de compras</Link> :
                    <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
            } 
        </footer>
    </article>
)



*/
/*
const ItemDetail = ({ product=[] }) => {
    const [quantity, setQuantity] = useState(0)

    const handleAdd = (quantity) => {
        setQuantity(quantity)
    }

    return (
        <div>
            <h1>{product.name}</h1>
            <picture> <img src={product.img} alt={product.name} className="ItemImg"  /> </picture>
            <p>Categoría: {product.category}</p>
            <h2>$ {product.price}</h2>
            <p>{product.description}</p>
            <footer>
            {(quantity === 0) ? <ItemCount stock={product.stock} initial={quantity} onAdd={handleAdd}/> : <Link to='/carrito/' ><button className="Option">Ver Detaller</button></Link>}
            </footer>
        </div>
    );
};

*/

export default ItemDetail;
