/* eslint-disable react/prop-types */
import { Heart } from '@phosphor-icons/react'
import { useState } from 'react'
import { useDeletePlaylist } from '../features/MyPlaylist/useDelete'
import useAddInPlaylist from '../features/MyPlaylist/useAddInPlaylist'
import Spinner from './Spinner'

function PlayerButton1({ music = [] }) {
  const [isLike, setIsLike] = useState(true)
  const { mutate: deletePlaylist, isLoading } = useDeletePlaylist()
  const { mutate: add, isLoading:isAdding } = useAddInPlaylist()

  function handelLike(id) {
    setIsLike((isLike) => !isLike)
   if(isLike){ deletePlaylist(id)}
    if(!isLike){add({music})}
  }
  //  console.log(music);
  if (isLoading||isAdding) return <Spinner />
  return (
    <>
    <div className='flex justify-end'>
      <Heart
        size={25}
        weight={isLike ? 'regular' : 'fill'}
        color='#f3e7f4'
        onClick={() => handelLike(music?.id)}
      />
    </div>
     <div className='flex justify-end'>
     <Heart
       size={25}
       weight={isLike ? 'regular' : 'fill'}
       color='#f3e7f4'
       onClick={() => handelLike(music?.id)}
     />
   </div></>
  )
}

export default PlayerButton1
