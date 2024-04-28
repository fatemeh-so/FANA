import { createContext, useContext, useState } from 'react'

const OpenPlayerContext = createContext()
function OpenPlayerProvider({ children }) {
  const [isOpenPlayer, setIsOpenPlayer] = useState(false)
  const [music,setMusic]=useState(null)
  function handelPlayMusic(music) {
    console.log(isOpenPlayer)
    setIsOpenPlayer((isOpenPlayer) => !isOpenPlayer)
    setMusic(music)
  }
  return (
    <OpenPlayerContext.Provider value={{music, isOpenPlayer, handelPlayMusic }}>
      {children}
    </OpenPlayerContext.Provider>
  )
}
function useOpenPlayer() {
  const context = useContext(OpenPlayerContext)
  if (context === undefined)
    throw new Error('OpenPlayerContext was used outside of DarkModeProvider')
  return context
}
export { OpenPlayerProvider, useOpenPlayer }
