import React from 'react'

export const Item = ({info}) => {
  const price = info.price.decimals.split('.',2)
  const entero = price[0].split('').reverse().join('').match(/.{1,3}/g).join('.').split('').reverse()
  const decimas = price[1]
  return (
    <div className="item-detail-container">
      <section className="info-item">
        <img src={info.picture} alt="imagen-item" />
        <div className="details-item">
          <span>{info.condition} - {info.sold_quantity} vendidos</span>
          <h3>{info.title}</h3>
          <div className="price-item"><h2>${entero}</h2><h4>{decimas}</h4></div>
          <button>Comprar</button>
        </div>
      </section>
      <div className="description-product">
        <h2>Descripción del Producto</h2>
        <p>{info.description}</p>
      </div>
    </div>
  )
}
