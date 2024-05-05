import { createContext, useContext, useState } from 'react'

const OpenPlayerContext = createContext()
function OpenPlayerProvider({ children }) {
  const [isOpenPlayer, setIsOpenPlayer] = useState(false)
  const [nextMusic, setNextMusic] = useState()
  const [prevMusic, setPrevMusic] = useState()
  const [playNext, setPlayNext] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(1)
  const [music, setMusic] = useState(null)
  function handelPlayMusic(music, nextMusic, prevMusic) {
    // console.log(isOpenPlayer)
    setIsOpenPlayer((isOpenPlayer) => !isOpenPlayer)
    setMusic(music)
    setNextMusic(nextMusic)
    setPrevMusic(prevMusic)
  }
  function handelNext() {
    setCurrentIndex((next) => next+1)
  }

  return (
    <OpenPlayerContext.Provider
      value={{
        music,
        isOpenPlayer,
        handelPlayMusic,
        nextMusic,
        prevMusic,
        handelNext,
        playNext,
        currentIndex,
      }}
    >
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
