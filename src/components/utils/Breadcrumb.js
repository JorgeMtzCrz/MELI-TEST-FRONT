import React from 'react'

export const Breadcrumb = ({categories}) => {
  return (
    <ul className='container-breadcrumb'>
        { categories && categories.length > 0 ? categories?.map((category, idx) =>
            <li className="breadcrumb" key={idx}>
            {category}
            {idx !== categories.length - 1 ? ` >` : null}
            </li>) : <li className="breadcrumb">No hay categorías disponibles</li>}
    </ul>
  )
}
