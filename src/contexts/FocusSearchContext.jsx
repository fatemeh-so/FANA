import { createContext, useContext, useState } from 'react'
import useAlbum from '../features/Albums/useAlbum'
import Spinner from '../components/Spinner'
import useMusic from '../features/home/useMusic'
import useSinger from '../features/artist/useSinger'

const FocusSearchContext = createContext()
function FocusSearchProvider({ children }) {
  const { data: albums, isLoading } = useAlbum()
  const { data: music, isLoading: isMusic } = useMusic()
  const {data:artist, isLoading:isArtist}=useSinger()
  const [searchFocus, setSearchFocus] = useState(false)
  const [searchResults, setSearchResults] = useState([])
  const [searchAlbumResult, setSearchAlbumResult] = useState([])
  const [searchArtistResult, setSearchArtistResult] = useState([])

  // onChange
  const [searchValue, setSearchValue] = useState('')

  const handleSearch = (e) => {
    const value = e.target.value
    setSearchValue(value)
    // Filtering music based on search input
    if (isLoading || isMusic||isArtist) {
      return <Spinner />
    }
    const resultsMusic = music.filter((music) => {
      return (
        music.title.toLowerCase().includes(value.toLowerCase()) ||
        music.artist.toLowerCase().includes(value.toLowerCase())
      )
    })
    // Filtering Albums based on search input

    const resultsAlbums = albums.filter((album) => {
      return (
        album?.title?.toLowerCase().includes(value?.toLowerCase()) ||
        album?.genre?.toLowerCase().includes(value?.toLowerCase())
      )
    })
    const resultsArtist = artist.filter((artist) => {
      return (
        artist?.nickName?.toLowerCase().includes(value?.toLowerCase()) 
        // artist?.genre?.toLowerCase().includes(value?.toLowerCase())
      )
    })
    // console.log(searchArtistResult)

    setSearchResults(resultsMusic)
    setSearchAlbumResult(resultsAlbums)
    setSearchArtistResult(resultsArtist)
    if (!searchValue) {
      setSearchResults([])
      setSearchAlbumResult([])
      setSearchArtistResult([])
    }
  }
  // focus
  function handelFocus() {
    setSearchFocus(true)
  }
  //   blur
  const handleInputBlur = (value) => {
    setSearchFocus(value)
  }
  return (
    <FocusSearchContext.Provider
      value={{
        handleInputBlur,
        handelFocus,
        searchFocus,
        searchResults,
        searchValue,
        handleSearch,
        setSearchFocus,
        searchArtistResult,
        searchAlbumResult
      }}
    >
      {children}
    </FocusSearchContext.Provider>
  )
}
function useSearchFocus() {
  const context = useContext(FocusSearchContext)
  if (context === undefined)
    throw new Error('useSearchFocus was used outside of DarkModeProvider')
  return context
}
export { FocusSearchProvider, useSearchFocus }
