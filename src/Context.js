import React, {createContext, useState} from 'react';

export const MyContext = createContext()

export default function ContextProvider(props) {
  const [categories, setCategories] = useState(null)
  return (
    <>
    <MyContext.Provider 
    value={{categories, setCategories}}>
    {props.children}
    </MyContext.Provider>
    </>
  );
}
