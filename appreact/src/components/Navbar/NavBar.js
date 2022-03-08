import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import {useEffect, useState } from 'react'
import { getCategories } from '../../mock/products';

// import ItemDetail from '../ItemDetail/ItemDetail'
// import { useParams } from 'react-router-dom'
// import Button from '../Button/Button'

const NavBar = () => { //{ title: 'ecommerce ', color='red'}
  const [categories, setCategories] = useState([])
  useEffect(() => {
    getCategories().then(categories => {
      setCategories(categories)
    })
  }, [])

return (
      <nav className="NavBar">
        <div>
            <Link to={`/`}><img src={'./../images/logo.png'} alt='logo'/></Link>
        </div>
        <h3>Tienda Online de Cafe</h3>
        <div className="Categories">
          {categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`} className={({ isActive }) =>
              isActive ? 'ActiveOption' : 'Option'
            }>{cat.description}</NavLink>)}
        </div>
        <div>
          <CartWidget />
        </div>
      </nav>
  )
}

export default NavBar
