import React from 'react'
import { Card, CardFooter, Image, Button } from '@nextui-org/react'
import Spinner from '../../components/Spinner'
import useAlbum from '../Albums/useAlbum'
import Album from '../Albums/Album'
import { useNavigate } from 'react-router-dom'
import { useOpenAlbum } from '../../contexts/openAlbumContext'
function HomeBar() {
  const { data: albums, isLoading } = useAlbum()
  const navigate = useNavigate()
  function handelAlbum(id) {
    navigate(`/albums/${id}`)
  }
  const { isOpenAlbum, handelOpenAlbum } = useOpenAlbum()
  if (isLoading) {
    return <Spinner />
  }
  return (
    <div>
      {' '}
      <h1 className='mt-[2rem] ml-[2rem] text-[1.5rem]'>Hot Albums </h1>
      <div className='  w-[100vh] overflow-y-hidden  mt-[1rem] ml-[2rem] grid grid-cols-2 gap-4 md:grid-cols-1 xl:grid-cols-4'>
        {albums?.map((albums, index) => (
          <div key={index} className='relative '>
            <img
              src={albums.coverArt}
              onClick={() => {
                handelOpenAlbum()
                handelAlbum(albums.id, albums.title)
              }}
              alt={albums.title}
              className='w-full h-full object-cover rounded-[.5rem] '
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
  )
}

export default HomeBar
