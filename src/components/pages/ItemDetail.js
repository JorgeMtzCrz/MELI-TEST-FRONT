import React, {useState, useEffect, useContext} from 'react'
import { Navbar } from '../utils/Navbar'
import { Breadcrumb } from '../utils/Breadcrumb'
import MY_SERVICE from '../../services'
import {MyContext} from '../../Context'
import { Item } from '../utils/Item'
import { Loader } from '../utils/Loader'

export const ItemDetail = (props) => {
  const context = useContext(MyContext)
  const [info, setInfo]=useState(null)
  const {categories} = context
  const id = props.match.params.id
  useEffect(()=>{
    MY_SERVICE.ITEM(id)
    .then(({data:{item}})=>{
      setInfo({...item})})
    .catch(error=> console.log(error))
    
  },[id])
  if(!info) return <Loader/>
  console.log(categories)
  return (
    <div>
      <Navbar/>
      <div className="container-gray">
        <Breadcrumb categories={categories}  />
        <div className="container-items">
            <Item info={info.item}/>
        </div>
      </div>
        
    </div>
  )
}
