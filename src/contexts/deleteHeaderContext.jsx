import { createContext, useContext, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const DeleteHeaderContext = createContext()
function DeleteHeaderProvider({ children }) {
  const [close, setClose] = useState()
  function handelCloseHeader(value ) {
    
    setClose(value)
    // console.log(close);
  }
  return (
    <DeleteHeaderContext.Provider value={{ close, handelCloseHeader }}>
      {children}
    </DeleteHeaderContext.Provider>
  )
}
function useDeleteHeader() {
  const context = useContext(DeleteHeaderContext)
  if (context === undefined)
    throw new Error('DeleteHeaderContext was used outside of DarkModeProvider')
  return context
}
export { DeleteHeaderProvider, useDeleteHeader }
