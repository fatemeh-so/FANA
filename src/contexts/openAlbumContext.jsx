import { createContext, useContext, useState } from 'react'

const OpenAlbumContext = createContext()

function OpenAlbumProvider({ children }) {
  const [activeNavLink, setActiveNavLink] = useState('')

  const handleNavLinkClick = (navLink,home) => {

    if(home){
      setActiveNavLink("home")
    }
    setActiveNavLink(navLink)
  }
  const [isOpenAlbum, setIsOpenAlbum] = useState(false)
  // const [music, setMusic] = useState(null)
  function handelOpenAlbum() {
    console.log(isOpenAlbum)
    setIsOpenAlbum((isOpenAlbum) => !isOpenAlbum)
    // setMusic(music)
  }
  return (
    <OpenAlbumContext.Provider
      value={{
        isOpenAlbum,
        handelOpenAlbum,
        setIsOpenAlbum,
        activeNavLink,
        handleNavLinkClick,
      }}
    >
      {children}
    </OpenAlbumContext.Provider>
  )
}
function useOpenAlbum() {
  const context = useContext(OpenAlbumContext)
  if (context === undefined)
    throw new Error('OpenAlbumContext was used outside of DarkModeProvider')
  return context
}
export { OpenAlbumProvider, useOpenAlbum }
