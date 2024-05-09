import { useNavigate } from 'react-router-dom'
import { useSearchFocus } from '../contexts/FocusSearchContext'
import HomeMusicChild from '../features/home/HomeMusicChild'
// import { useDeleteHeader } from '../contexts/deleteHeaderContext'

function SearchResult() {
  const { setSearchFocus, searchAlbumResult, searchResults } = useSearchFocus()

  // const { handelCloseHeader } = useDeleteHeader()
  const navigate = useNavigate()
  function handelAlbum(id) {
    navigate(`/albums/${id}`)
    setSearchFocus(false)
    // handelCloseHeader(false)
  }
  return (
    // music
    <div className='top-[4.1rem] absolute z-50 bg-gray-600  w-[99%] h-[93vh]  px-[rem] overflow-x-hidden'>
      <h1 className='ml-2 mt-5'>music</h1>
      <div>
        {searchResults.map((music) => (
          <HomeMusicChild key={music.id} music={music} heart={false} />
        ))}
      </div>

      {/* albums */}
      <h1 className='ml-2 my-5'>Albums</h1>
      <div className='   ml-2 grid grid-cols-3 gap-4 md:grid-cols-5 xl:grid-cols-8'>
        {searchAlbumResult?.map((album) => (
          <div key={album.id} className='relative '>
            <img
              src={album.coverArt}
              onClick={() => {
                // handelOpenAlbum()
                handelAlbum(album.id)
              }}
              alt={album.title}
              className='w-full h-full object-cover rounded-[2rem] '
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
