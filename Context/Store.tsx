'use client'
import React, { createContext, useState } from 'react'

const StoreContext = createContext({});

interface storeProps {
    children: React.ReactNode
}

const Store:React.FC<storeProps> = ({ children }) => {
    const [value, setValue] = useState({})
  return (
    <StoreContext.Provider value={value}>
        { children }
    </StoreContext.Provider>
  )
}

export default Store