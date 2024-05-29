import { useNavigate } from 'react-router-dom'
import { useSearchFocus } from '../contexts/FocusSearchContext'
import HomeMusicChild from '../features/home/HomeMusicChild'
// import { useDeleteHeader } from '../contexts/deleteHeaderContext'

function SearchResult() {
  const {
    setSearchFocus,
    searchAlbumResult,
    searchResults,
    searchArtistResult,
  } = useSearchFocus()

  // const { handelCloseHeader } = useDeleteHeader()
  const navigate = useNavigate()
  function handelAlbum(id) {
    navigate(`/albums/${id}`)
    setSearchFocus(false)
    // handelCloseHeader(false)
  }
  function handelArtist(id) {
    navigate(`/artist/${id}`)
    setSearchFocus(false)
    // handelCloseHeader(false)
  }
  return (
    // music
    <div className='top-[4.1rem] absolute z-50 bg-gray-600  w-[99%] h-[93vh]  px-[rem] overflow-x-hidden'>
      <h1 className='ml-2 mt-5 text-[2rem]'>music</h1>
      <div>
        {searchResults.map((music) => (
          <HomeMusicChild key={music.id} music={music} heart={false} />
        ))}
      </div>

      {/* albums */}
      <h1 className='ml-2 my-5 text-[2rem] '>Albums</h1>
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
      <div className='ml-[1rem]'>
        <h1 className=' text-[2rem] '>Artist</h1>

        <div className=' grid grid-cols-2 gap-6 lg:gap-[3rem] md:grid-cols-3 xl:grid-cols-4 py-[2rem]'>
          {searchArtistResult?.map((singer, index) => (
            <div
              key={index}
              className='relative h-[10rem] w-[10rem] xl:h-[20rem] xl:w-[20rem] '
            >
              <img
                src={singer.image}
                onClick={() => {
                  handelArtist(singer.id, singer.title)
                }}
                alt={singer.nickName}
                className='w-full h-[100%] object-cover rounded-full  '
              />
              <div className='text-center absolute top-[9.6rem] xl:top-[20rem] 5 rounded-b-[2rem] bottom-0 left-0 w-full bg-opacity-30 text-white p-2'>
                <p className=' pl-2 text-sm md:text-lg xl:text-xl font-semibold '>
                  {singer.nickName}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SearchResult
