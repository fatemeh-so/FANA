import { createContext, useContext, useState } from 'react'
const musics = [
  {
    id: 3,
    title: 'Lili',
    artist: 'Aaron',
    singerId: 1,
    AlbumId: 1,
    duration: '03:08',
    url: '',
    lyric: '',
    coverArt: '/public/coverArt/cover.jpg.webp',
    PlayCount: 1,
  },
  {
    id: 4,
    title: 'Falling slowly',
    artist: 'Glen Hansard',
    singerId: 2,
    AlbumId: 2,
    duration: '03:08',
    url: '',
    lyric: '',
    coverArt: 'https://nextui-docs-v2.vercel.app/images/album-cover.png',
    PlayCount: 2,
  },
  {
    id: 5,
    title: 'Caving in',
    artist: 'Syml',
    singerId: 3,
    AlbumId: 3,
    duration: '03:08',
    url: '',
    lyric: '',
    coverArt: '/public/coverArt/ea1f64668a0af149a3277db9e9e54824.jpg',
    PlayCount: 2,
  },
  {
    id: 6,
    title: 'love story',
    artist: 'Taylor Swift',
    singerId: 3,
    AlbumId: 3,
    duration: '03:08',
    url: '',
    lyric: '',
    coverArt: '/public/coverArt/retro-synthwave-artwork.jpg',
    PlayCount: 2,
  },
  {
    id: 7,
    title: 'Lili',
    artist: 'Aaron',
    singerId: 1,
    AlbumId: 1,
    duration: '03:08',
    url: '',
    lyric: '',
    coverArt: '/public/coverArt/cover.jpg.webp',
    PlayCount: 1,
  },
  {
    id: 8,
    title: 'Falling slowly',
    artist: 'Glen Hansard',
    singerId: 2,
    AlbumId: 2,
    duration: '03:08',
    url: '',
    lyric: '',
    coverArt: 'https://nextui-docs-v2.vercel.app/images/album-cover.png',
    PlayCount: 2,
  },
  {
    id: 9,
    title: 'Caving in',
    artist: 'Syml',
    singerId: 3,
    AlbumId: 3,
    duration: '03:08',
    url: '',
    lyric: '',
    coverArt: '/public/coverArt/ea1f64668a0af149a3277db9e9e54824.jpg',
    PlayCount: 2,
  },
  {
    id: 10,
    title: 'love story',
    artist: 'Taylor Swift',
    singerId: 3,
    AlbumId: 3,
    duration: '03:08',
    url: '',
    lyric: '',
    coverArt: '/public/coverArt/retro-synthwave-artwork.jpg',
    PlayCount: 2,
  },
]
const albums = [
  {
    id: 1,
    title: 'happy ',
    genre: '',
    coverArt: '/public/coverArt/ea1f64668a0af149a3277db9e9e54824.jpg',
    description: 'album description',
  },
  {
    id: 2,
    title: 'sad ',
    genre: '',
    coverArt: '/public/coverArt/ea1f64668a0af149a3277db9e9e54824.jpg',
    description: 'album description',
  },
  {
    id: 3,
    title: 'chill ',
    genre: '',
    coverArt: '/public/coverArt/ea1f64668a0af149a3277db9e9e54824.jpg',
    description: 'album description',
  },
  {
    id: 4,
    title: 'road ',
    genre: '',
    coverArt: '/public/coverArt/ea1f64668a0af149a3277db9e9e54824.jpg',
    description: 'album description',
  },
]
const FocusSearchContext = createContext()
function FocusSearchProvider({ children }) {
  const [searchFocus, setSearchFocus] = useState(false)
  const [searchResults, setSearchResults] = useState([])
  const [searchAlbumResult,setSearchAlbumResult]=useState([])
  // onChange
  const [searchValue, setSearchValue] = useState('')

  const handleSearch = (e) => {
    const value = e.target.value
    setSearchValue(value)
    // Filtering music based on search input
    const resultsMusic = musics.filter((music) => {
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
    console.log(searchAlbumResult)

    setSearchResults(resultsMusic)
    setSearchAlbumResult(resultsAlbums)
    if(!searchValue){
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
        setSearchAlbumResult
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
