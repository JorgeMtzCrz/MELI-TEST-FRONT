import React, { useEffect, useContext, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Navbar } from '../utils/Navbar'
import { Breadcrumb } from '../utils/Breadcrumb'
import queryString from 'query-string'
import MY_SERVICE from '../../services'
import { ListItem } from '../utils/ListItem'
import {MyContext} from '../../Context'
import { Loader } from '../utils/Loader'


export const Items = (props) => {
  const context = useContext(MyContext)
  const {search} = useLocation()
  const [items, setItems]=useState(null)
  const {setCategories} = context
  useEffect(()=>{
    const params = queryString.parse(search)
    MY_SERVICE.ITEMS(params.search)
    .then(({data:{result}})=>{
      setItems({...result})
      setCategories(typeof result.categories === 'object' ? [...result.categories] : null)
    })

    .catch(error=> console.log(error))
    
  },[search, setCategories])
  if(!items) return <Loader/>
  return (
    <div>
      <Navbar/>
      <div className="container-gray">
        <Breadcrumb  categories={ items.categories }/>
        <div className="container-items">
          <ListItem categories={items.categories} items={items.items} />
        </div>
      </div>
        
    </div>
  )
}
