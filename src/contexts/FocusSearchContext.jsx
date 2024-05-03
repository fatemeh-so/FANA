import { createContext, useContext, useState } from 'react'
import useAlbum from '../features/Albums/useAlbum'
import Spinner from '../components/Spinner'
import useMusic from '../features/home/useMusic'

const FocusSearchContext = createContext()
function FocusSearchProvider({ children }) {
  const { data: albums, isLoading } = useAlbum()
  const { data: music, isLoading: isMusic } = useMusic()
  const [searchFocus, setSearchFocus] = useState(false)
  const [searchResults, setSearchResults] = useState([])
  const [searchAlbumResult, setSearchAlbumResult] = useState([])
  // onChange
  const [searchValue, setSearchValue] = useState('')

  const handleSearch = (e) => {
    const value = e.target.value
    setSearchValue(value)
    // Filtering music based on search input
    if (isLoading || isMusic) {
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
    // console.log(searchAlbumResult)

    setSearchResults(resultsMusic)
    setSearchAlbumResult(resultsAlbums)
    if (!searchValue) {
      setSearchResults([])
      setSearchAlbumResult([])
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
        searchAlbumResult,
        setSearchAlbumResult,
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
