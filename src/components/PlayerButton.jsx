/* eslint-disable react/prop-types */
import { Heart } from '@phosphor-icons/react'
import { useState } from 'react'
import useAddInPlaylist from '../features/MyPlaylist/useAddInPlaylist'

import Spinner from '../components/Spinner'
function PlayerButton({ music }) {
  const [isLike, setIsLike] = useState(false)
  const { mutate: addMusic, isLoading } = useAddInPlaylist()
 
  function handelLike() {
    setIsLike((isLike) => !isLike)
    if (!isLike) addMusic({ music })
  }
  //  console.log(music);
  if (isLoading ) return <Spinner />
  return (
    <div className='flex justify-end'>
      <Heart
        size={25}
        weight={!isLike ? 'regular' : 'fill'}
        color='#f3e7f4'
        onClick={() => handelLike()}
      />{' '}
    </div>
  )
}

export default PlayerButton
