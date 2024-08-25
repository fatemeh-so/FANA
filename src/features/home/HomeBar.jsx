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
    <div className='flex flex-col overflow-x-hidden pl-8 gap-7'>
      <h1 className='text-[1.5rem]'>
        Hot music{' '}
      </h1>
      <div className='flex overflow-x-auto gap-4'>
        {album?.map((album, index) => (
          <div key={index} className='relative flex flex-col overflow-x-auto flex-shrink-0'>
            <div>
              <img
                src={album.coverArt}
                onClick={() => {
                  // handleOpenAlbum()
                  handleAlbum(album.id, album.title)
                }}
                alt={album.title}
                className='w-[14rem] h-[15rem] object-cover rounded-[.5rem]'
              />
            </div>

            <div className='bg-black bg-opacity-30 text-white absolute bottom-0 left-0 w-full py-2 px-2 rounded-b-[.5rem]'>
              <p className='pl-2 text-sm md:text-lg xl:text-xl font-semibold'>
                {album.title}
              </p>
            </div>
          </div>
        ))}
      </div>
      <h1 className='text-[1.5rem]'>Artist </h1>
      <div className='flex gap-4 overflow-x-auto'>
        {artist?.map((artist, index) => (
          <div key={index} className='relative flex flex-col overflow-x-auto flex-shrink-0'>
            <img
              src={artist.image}
              onClick={() => {
                handleArtist(artist.id)
              }}
              alt={artist.nickName}
              className='w-[9rem] h-[10rem] object-cover rounded-[.5rem]'
            />
            <div className='bg-black bg-opacity-30 text-white absolute bottom-0 left-0 w-full py-2 px-2 rounded-b-[.5rem]'>
            <p className='text-sm md:text-lg xl:text-sm font-semibold'>
                {artist.nickName}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomeBar
