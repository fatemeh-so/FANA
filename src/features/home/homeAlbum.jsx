import { MusicNotesSimple, PlayCircle } from '@phosphor-icons/react'
import { useState } from 'react'
import useAlbum from '../../features/Albums/useAlbum'
import Spinner from '../../components/Spinner'

export default function HomeAlbum() {
  const { data: albums, isLoading } = useAlbum()
  const [translateX, setTranslateX] = useState(0)
  // console.log(albums)
  // const galleryWidth = trendMusic.length * 64 + (trendMusic.length - 1) * 20; // Calculate the total width of the gallery
  const albumWidth = 64 // Width of each album item in pixels
  const spaceBetweenAlbums = 4 // Margin-right between each album item in pixels
  const numberOfAlbums = albums?.length
  const maxWidth = numberOfAlbums * (albumWidth + spaceBetweenAlbums)
  const moveLeft = () => {
    const newPosition = translateX + 120 // Adjust the movement distance as needed
    setTranslateX(Math.min(0, newPosition)) // Ensure translation does not exceed 0
  }

  const moveRight = () => {
    const newPosition = translateX - 120 // Adjust the movement distance as needed
    const maxTranslate = -maxWidth + 20 // Calculate the maximum translation to show only images
    setTranslateX(Math.max(newPosition, maxTranslate)) // Ensure translation does not exceed the maximum
  }
  if (isLoading) {
    return <Spinner />
  }
  return (
    <div className='relative w-full mt-5rem mt-[4rem] overflow-hidden'>
      <div
        className='flex'
        style={{ transform: `translateX(${translateX}px)` }}
      >
        {albums.map((album, index) => (
          <div key={index} className='relative flex-shrink-0 w-64 h-48 mr-4'>
            <img
              src={album.coverArt}
              alt={album.title}
              className='w-full h-full rounded-[1rem] object-cover'
            />
            <div className='absolute inset-0 flex items-center justify-center  bg-opacity-50'>
              <div className='text-white     overflow-hidden bg-blue1/30 absolute left-[2rem] bottom-[1rem] w-[13rem] h-[4.8rem] rounded-[1rem]  pl-[1.3rem] pt-[1rem] text-[0.6rem] '>
                <p className=' text-[0.9rem] '>{album.title}</p>
                <div className='flex'>
                  <span className='flex gap-1'>
                    <MusicNotesSimple size={10} color='#fcfcff' weight='fill' />
                    <p>music - {album.artist}</p>
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
        className={`rounded-r-[1rem] absolute inset-y-0 left-0 z-10 bg-black bg-opacity-50 text-white p-2 ${
          translateX === 0 ? 'hidden' : ''
        }`}
        onClick={moveLeft}
      >
        &lt;
      </button>
      <button
        className={`rounded-l-[1rem]   absolute inset-y-0 right-0 z-10 bg-black bg-opacity-50 text-white p-2 ${
          -translateX >= maxWidth - 20 ? 'hidden' : ''
        }`}
        onClick={moveRight}
      >
        &gt;
      </button>
    </div>
  )
}
