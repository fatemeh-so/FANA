/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom'

function Album({ albums }) {

  // const[title]
  const navigate = useNavigate()
  function handelAlbum(id) {
    navigate(`/albums/${id}`)
  }
  return (
    <>
      <div>
      <h1 className='pt-8 pb-4 pl-2 text-[2rem] text-white1 z-30'>Library</h1>

        <div className=' grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4'>
          {albums?.map((albums, index) => (
            <div key={index} className='relative '>
              <img
                src={albums.coverArt}
                onClick={() => {
                  // handelOpenAlbum()
                  handelAlbum(albums.id, albums.title)
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
      </div>
    </>
  )
}

export default Album
