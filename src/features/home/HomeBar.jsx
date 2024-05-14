import Spinner from '../../components/Spinner'
import useAlbum from '../Albums/useAlbum'
import { useNavigate } from 'react-router-dom'
import useSinger from '../../features/artist/useSinger'
function HomeBar() {
  const { data: album, isLoading } = useAlbum()
  const { data: artist, isLoading: isArtist } = useSinger()
  const navigate = useNavigate()
  // const [searchParams] = useSearchParams()
  // const filter = searchParams.get('genre')

  // console.log(filteredMusic)

  function handleAlbum(id, title) {
    navigate(`/albums/${id}`)
  }
  function handleArtist(id) {
    navigate(`/artist/${id}`)
  }
  function handelNavigateToArtist() {
    navigate('/artist')
  }
  function handelNavigateToAlbum(id) {
    navigate(`/albums`)
  }
  // const { isOpenAlbum, handleOpenAlbum } = useOpenAlbum()

  if (isLoading || isArtist) {
    return <Spinner />
  }

  return (
    <div className='flex flex-col  w-[100vh] overflow-x-hidden'>
      <h1 className='mt-[2.2rem] mb-[1.2rem] ml-[2rem] text-[1.5rem]'>Hot music </h1>
      <div className='flex overflow-x-auto  ml-[2rem] space-x-4'>
        {album?.map((album, index) => (
          <div key={index} className='relative flex-shrink-0'>
            <img
              src={album.coverArt}
              onClick={() => {
                // handleOpenAlbum()
                handleAlbum(album.id, album.title)
              }}
              alt={album.title}
              className='w-[14rem] h-[15rem] object-cover rounded-[.5rem]'
            />
            <div className=' absolute rounded-b-[.5rem] bottom-0 left-0 w-full h-[2rem] bg-black bg-opacity-30 text-white p-'>
              <p className='pl-2 text-sm md:text-lg xl:text-xl font-semibold'>
                {album.title}
              </p>
            </div>
          </div>
        ))}
        <button
          onClick={() => handelNavigateToAlbum(1)}
          className='absolute rounded-l-[1rem]  right-[5.3%] text-center w-[1.5rem] h-[15rem] bg-black/50'
        >
          {' '}
          &gt;
        </button>
      </div>{' '}
      <h1 className='my-[1rem] ml-[2rem] text-[1.5rem]'>Artist </h1>
      <div className='flex  mt-[1rem] ml-[2rem] space-x-4 overflow-x-auto'>
        {artist?.map((artist, index) => (
          <div key={index} className='relative flex-shrink-0'>
            <img
              src={artist.image}
              onClick={() => {
                // handleOpenAlbum()
                handleArtist(artist.id)
              }}
              alt={artist.nickName}
              className='w-[9rem] h-[10rem] object-cover rounded-[.5rem]'
            />
            <div className='absolute rounded-b-[.5rem] bottom-0 left-0 w-full h-[2rem] bg-black bg-opacity-30 text-white p-2'>
              <p className='pl-2 text-sm md:text-lg xl:text-sm font-semibold'>
                {artist.nickName}
              </p>
            </div>
          </div>
        ))}
        <button
          onClick={handelNavigateToArtist}
          className='absolute rounded-l-[1rem] right-[5.3%] text-center w-[1.5rem] h-[10rem] bg-black/50'
        >
          {' '}
          &gt;
        </button>
      </div>
    </div>
  )
}

export default HomeBar