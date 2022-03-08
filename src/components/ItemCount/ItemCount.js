import { useState } from 'react'

const ItemCount = ({stock = 1, initial = 1, onAdd})=> {
   const [quantity, setQuantity] = useState(initial)

   const increment = () => {
       if(quantity < stock) {
           setQuantity(quantity+1)
       }
   }

   const decrement = () => {
       if(quantity > 0) {
           setQuantity(quantity - 1)
       }
   }

   return(
       <div align="center">
                <table >
                    <tbody>
                        <tr style={{
                display: 'flex',
                flexDirection: 'column',
                border: '',
                margin: '10px',
                width: '800px',
                justifyContent: 'space-around',
                alignItems: 'center',
            }}>
                            <div>
                                <td align="center" style={{fontSize : '1.5rem'}}>{quantity}</td>
                            </div>
                            <div>
                                <td align="left"><button className="Option" onClick={()=> decrement() }>-</button></td>
                                <td align="center" colSpan="5"><button className="Option" onClick={() => onAdd(quantity)}>Agregar al carrito</button></td>
                                <td align="right"><button className="Option" onClick={() => increment() }>+</button></td>
                            </div>
                        </tr>
                    </tbody>
                </table>
       </div>
   )
}

export default ItemCount
