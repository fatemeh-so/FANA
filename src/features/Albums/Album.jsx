/* eslint-disable react/prop-types */
import BottomHeader from '../../components/BottomHeader'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useOpenAlbum } from '../../contexts/openAlbumContext'
import AlbumTrack from './AlbumTrack'

function Album({ albums }) {
  const [searchParams, setSearchParams] = useSearchParams()

  // const[title]
  const navigate = useNavigate()
  function handelAlbum(id) {
    navigate(`/albums/${id}`)
  }
  const { isOpenAlbum, handelOpenAlbum } = useOpenAlbum()
  if(isOpenAlbum)
  return <AlbumTrack />
  return (
    <>
      <div>
        {/* <BottomHeader to='home' /> */}
        <h1 className='my-4 text-[2rem] '>Library</h1>

        <div className=' grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4'>
          {albums?.map((albums, index) => (
            <div key={index} className='relative '>
              <img
                src={albums.coverArt}
                onClick={() => {
                  handelOpenAlbum()
                  handelAlbum(albums.id,albums.title)
                }}
                alt={albums.title}
                className='w-full h-full object-cover rounded-[2rem] '
              />
              <div className='absolute rounded-b-[2rem] bottom-0 left-0 w-full bg-black bg-opacity-30 text-white p-2'>
                <p className=' pl-2 text-sm md:text-lg xl:text-xl font-semibold '>
                  {albums.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* when click on album then AlbumTrack will open */}
        {/* {isOpenAlbum&&<AlbumTrack/>} */}
      </div>
    </>
  )
}

export default Album
