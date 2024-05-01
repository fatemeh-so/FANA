import { useNavigate, useSearchParams } from 'react-router-dom'
import { useSearchFocus } from '../contexts/FocusSearchContext'
import HomeMusicChild from '../features/home/HomeMusicChild'
import { useOpenAlbum } from '../contexts/openAlbumContext'
import { useDeleteHeader } from '../contexts/deleteHeaderContext'

function SearchResult({}) {
  const { setSearchFocus, searchAlbumResult, searchResults, searchValue } =
    useSearchFocus()
  const [searchParams, setSearchParams] = useSearchParams()
  const { isOpenAlbum, handelOpenAlbum } = useOpenAlbum()
  const {handelCloseHeader}=useDeleteHeader()
  const navigate = useNavigate()
  function handelAlbum() {
    navigate('/albums')
    setSearchFocus(false)
    handelCloseHeader(false)
  }
  return (
    // music
    <div className='top-[4.1rem] absolute z-50 bg-gray-600  w-[99%] h-[93vh]  px-[rem] overflow-x-hidden'>
      {searchValue && <h1 className='ml-2 mt-3'>music</h1>}
      <div>
        {searchResults.map((music) => (
          <HomeMusicChild key={music.id} music={music} heart={false} />
        ))}
      </div>

      {/* albums */}
      {searchValue && <h1 className='ml-2 mt-2'>Albums</h1>}
      <div className=' ml-2 grid grid-cols-3 gap-4 md:grid-cols-5 xl:grid-cols-6'>
        {searchAlbumResult?.map((album) => (
          <div key={album.id} className='relative '>
            <img
              src={album.coverArt}
              onClick={() => {
                // handelOpenAlbum()
                handelAlbum()
              }}
              alt={album.title}
              className='w-full h-auto object-cover rounded-[2rem] '
            />
            <div className='absolute rounded-b-[2rem] bottom-0 left-0 w-full bg-black bg-opacity-30 text-white p-2'>
              <p className=' pl-2 text-sm md:text-lg xl:text-xl font-semibold '>
                {album.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SearchResult
