import { MusicNotesSimple, PlayCircle } from '@phosphor-icons/react'
import Spinner from '../../components/Spinner'
import { useNavigate } from 'react-router-dom'
import { useOpenPlayer } from '../../contexts/openPlayerContext'
import useMusic from './useMusic'
export default function HomeAlbum() {
  const { data: albums, isLoading } = useMusic()
  const { handelPlayMusic ,handelFilterMusic} = useOpenPlayer()
  const navigate = useNavigate()
  function handelNavigateToAlbums() {
    navigate('/albums')
  }

  if (isLoading) {
    return <Spinner />
  }
  return (
    <div className='relative w-full mt-5rem mt-[4rem] overflow-hidden'>
      {/* <h1 className='mb-[1rem] text-3xl'>Pop Trend music</h1> */}
      <div className='flex'>
        {albums?.map((album, index) => (
          <div
            onClick={() => {
              handelPlayMusic(album)
              handelFilterMusic(albums)
            }}
            key={index}
            className='relative flex-shrink-0 w-64 h-48 mr-4'
          >
            <img
              src={album?.coverArt}
              alt={album?.title}
              className='w-full h-full rounded-[1rem] object-cover'
            />
            <div className='absolute inset-0 flex items-center justify-center  bg-opacity-50'>
              <div className='text-white     overflow-hidden bg-gray-700/60 absolute left-[2rem] bottom-[1rem] w-[13rem] h-[4.8rem] rounded-[1rem]  pl-[1.3rem] pt-[1rem] text-[0.6rem] '>
                <p className=' text-[0.9rem] '>{album?.title}</p>
                <div className='flex'>
                  <span className='flex gap-1'>
                    <MusicNotesSimple size={10} color='#fcfcff' weight='fill' />
                    <p>music - {album?.artist}</p>
                  </span>
                  <div className='flex absolute left-[8rem] top-[0.9rem] '>
                    <span>
                      <PlayCircle size={44} color='#f6f9f7' weight='fill' />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        className={`rounded-l-[1rem]   absolute inset-y-0 right-0 z-10 bg-black bg-opacity-50 text-white p-2 
        `}
        onClick={handelNavigateToAlbums}
      >
        &gt;
      </button>
    </div>
  )
}
