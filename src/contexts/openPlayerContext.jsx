/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react'

const OpenPlayerContext = createContext()
function OpenPlayerProvider({ children }) {

  
  const [isOpenPlayer, setIsOpenPlayer] = useState(false)
  const [isOpenPlayList, setIsOpenPlayList] = useState(false)
  const [isOpenAlbumMusic, setIsOpenAlbumMusic] = useState(false)
  const [isOpenArtistMusic, setIsOpenArtistMusic] = useState(false)

  const [music, setMusic] = useState(null)
  const [myMusic, setMyMusic] = useState(null)
  const [albumMusic, setAlbumMusic] = useState(null)
  const [ArtistMusic, setArtistMusic] = useState(null)

  const [filterMusic, setFilterMusic] = useState()
  const [musicOfPlaylist, setMusicOfPlaylist] = useState()
  const [musicOfAlbum, setMusicOfAlbum] = useState()
  const [musicOfArtist, setMusicOfArtist] = useState()

  function handelPlayMusic(music) {
    setIsOpenPlayer((isOpenPlayer) => !isOpenPlayer)
    setMusic(music)
  }

  function handelMyPlay(music) {
    setIsOpenPlayList((isOpen) => !isOpen)
    setMyMusic(music)
    // console.log(isOpenPlayList);
  }
  function handelAlbumMusic(music) {
    setIsOpenAlbumMusic((isOpenPlayer) => !isOpenPlayer)
    setAlbumMusic(music)
  }
  function handelArtistMusic(music) {
    setIsOpenArtistMusic((isOpenPlayer) => !isOpenPlayer)
    setArtistMusic(music)
  }

  function handelFilterMusic(filterMusic) {
    setFilterMusic(filterMusic)
    // console.log(filterMusic);
  }
  function handelMusicOfPlaylist(filterMusic) {
    setMusicOfPlaylist(filterMusic)
    // console.log(filterMusic);
  }
  function handelMusicOfAlbum(filterMusic) {
    setMusicOfAlbum(filterMusic)
    // console.log(filterMusic);
  }
  function handelMusicOfArtist(filterMusic) {
    setMusicOfArtist(filterMusic)
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
        handelMusicOfPlaylist,
        albumMusic,
        isOpenAlbumMusic,
        handelAlbumMusic,
        handelMusicOfAlbum,
        musicOfAlbum,
        handelMusicOfArtist,
        musicOfArtist,
        ArtistMusic,
        isOpenArtistMusic,
        handelArtistMusic
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
