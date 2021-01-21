import React from 'react'
import shipping from '../../assets/ic_shipping.png'
import {Link} from 'react-router-dom'

export const ListItem = ({items, categories}) => {
  return (
    <div className="list-items-container">
      {items.length > 0 ? items.map((item)=>{
        const precio = item.price.amount.toString().split('').reverse().join('').match(/.{1,3}/g).join('.').split('').reverse()
        return(
          <section key={item.id} className="item-list">
            <Link to={{
              pathname:`/items/${item.id}`, 
              query: {categories}
            }}>
            <img src={item.picture} alt={item.title} />
            </Link> 
            <div className="item-description">
              <span className="price-shipping"><h2>${precio}</h2>{item.free_shipping ? <img className="shipping" src={shipping} alt="free-shipping" /> : null }</span>
              <Link to={{
              pathname:`/items/${item.id}`, 
              query: {categories}
              }}>
                {item.title}
              </Link>
              <p>{item.condition === 'new' ? 'Producto Nuevo' : 'Producto Usado'}</p>
            </div>
            <p className="address-item">{item.address}</p>
          </section>
        )
      }): (
        <div className="list-items-container">
          <h2 className="no-product">No hay productos que coincidan con tu busqueda</h2>
        </div>
      )}
    </div>
  )
}
