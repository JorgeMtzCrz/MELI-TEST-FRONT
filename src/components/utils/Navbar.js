import React from 'react'
import logo from '../../assets/Logo_ML@2x.png.png'
import icon from '../../assets/ic_Search.png'
import { Link, useHistory } from 'react-router-dom'
import useInput from '../../hooks/useInput'

export const Navbar = () => {
  const history = useHistory()
  const search = useInput('')

  const handleSubmit =(e)=>{
    e.preventDefault()
    history.push(`/items?search=${search.value}`)
  }
  return (
    <>
    <navbar className="nav-ml">
      <Link to="/"><img src={logo} alt="logo-ml" /></Link> 
      <span className="search-input">
        <input {...search} placeholder="Nunca dejes de buscar" type="text" name="search" />
        <button onClick={handleSubmit}>
        <img src={icon} alt="icon-search" />
        </button>
      </span>
    </navbar>
    </>
  )
}
