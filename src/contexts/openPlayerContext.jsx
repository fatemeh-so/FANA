import { createContext, useContext, useState } from 'react'

const OpenPlayerContext = createContext()
function OpenPlayerProvider({ children }) {
  const [isOpenPlayer, setIsOpenPlayer] = useState(false)
  const [isOpenPlayList, setIsOpenPlayList] = useState(false)

  const [music, setMusic] = useState(null)
  const [myMusic, setMyMusic] = useState(null)

  const [filterMusic,setFilterMusic]=useState()
const[musicOfPlaylist,setMusicOfPlaylist]=useState()




  function handelPlayMusic(music,index) {
    setIsOpenPlayer((isOpenPlayer) => !isOpenPlayer)
    setMusic(music)
  }

  function handelMyPlay(music,index) {
    setIsOpenPlayList((isOpen) => !isOpen)
    setMyMusic(music)
    // console.log(isOpenPlayList);
  }
  function handelFilterMusic(filterMusic) {
    setFilterMusic(filterMusic)
    // console.log(filterMusic);
  }
  function handelMusicOfPlaylist(filterMusic) {
    setMusicOfPlaylist(filterMusic)
    // console.log(filterMusic);
  }
  return (
    <OpenPlayerContext.Provider
      value={{
        setIsOpenPlayList,
        isOpenPlayList,
        music,
        isOpenPlayer,
        handelPlayMusic,
        handelMyPlay,
        handelFilterMusic,
        myMusic,
        filterMusic,
        musicOfPlaylist,
        handelMusicOfPlaylist
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
