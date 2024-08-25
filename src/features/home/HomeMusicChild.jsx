/* eslint-disable react/prop-types */
import { DownloadSimple, Plus, UserSound } from '@phosphor-icons/react'
import { useOpenPlayer } from '../../contexts/openPlayerContext'
import { formatDuration } from '../../helper/formattedDuration'
import { useState } from 'react'
import useAddInPlaylist from '../MyPlaylist/useAddInPlaylist'
import Spinner from '../../components/Spinner'

function HomeMusicChild({ music, index }) {
  const { title, artist, coverArt, duration, url } = music
  const { handelPlayMusic } = useOpenPlayer()
  const [isLike, setIsLike] = useState(false)

  const { mutate: addMusic, isLoading } = useAddInPlaylist()
  function handelLike() {
    setIsLike((isLike) => !isLike)
    if (!isLike) addMusic({ music })
  }

  if (isLoading) return <Spinner />
  return (
    <div className=''>
      {/* <ScrollShadow hideScrollBar className=''> */}
      <div
        className='flex items-center'
        onClick={() => {
          handelPlayMusic(music, index)
        }}
      >
        <span className='ml-2 font-thin  text-[.8rem] '>{index}</span>
        <img src={coverArt} className='w-[4rem] h-[4rem] m-2 rounded-[1rem]' />
        <div className='flex-1'>
          <h1 className='mt-[1.3rem] ml-3 text-[1.1rem]'>{title}</h1>
          <div className='flex text-[.7rem] ml-3'>
            <UserSound size={12} color='#f3e7f4' />
            <p className='mx-2 text-gray-400'>{artist}</p>
          </div>
        </div>
        <div></div>
        <div className='ml-6 text-right text-[.8rem] text-gray300'>
          {formatDuration(duration)}
        </div>
        <button className='ml-5 hidden md:block text-right text-[.8rem] text-gray300'>
          <a href={url}>{<DownloadSimple size={20} color='#f4ecf4' />}</a>
        </button>
        <button
          onClick={handelLike}
          className='  md:block ml-6 text-right text-[.8rem] text-gray300 '
        >
          <Plus size={20} color='#f4ecf4' />
        </button>
      </div>
      {/* </ScrollShadow> */}
    </div>
  )
}

export default HomeMusicChild
