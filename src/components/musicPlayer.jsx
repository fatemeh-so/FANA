import {
  PlayCircle,
  Repeat,
  RepeatOnce,
  Shuffle,
  SkipBack,
  SkipForward,
} from '@phosphor-icons/react'
import { useOpenPlayer } from '../contexts/openPlayerContext'

function MusicPlayer() {
  const { music } = useOpenPlayer()
  // console.log(music);
  // const music=[{

  // }]
  return (
    <div className='z-10 overflow-hidden absolute bottom-[0] w-[100%] h-[95%] rounded-t-[1.5rem]  bg-gray-700/95'>
      <div className=' w-[100%] h[100%] flex justify- flex-col  '>
        <div className='flex-col flex items-center  '>
          <img
            className='w-[25rem] mt-[1.3rem] rounded-[1.5rem] '
            src={music.coverArt}
            alt=''
          />
          <h1 className='text-[2.2rem] mt-[1.5rem] '>{music.title}</h1>
          <h3 className='text-gray300 mt-[-.rem] '>{music.artist}</h3>
        </div>
        {/* icons */}
        <div className=' mt-[2rem] flex items-center justify-evenly  '>
          <span className='flex '>
            <Repeat size={23} color='#f8f7f8' />
          </span>
          {/* <span>
            <RepeatOnce size={28} color='#f8f7f8' />
          </span> */}
          <span className='ml-[3rem] ' >
            <SkipBack size={23} color='#f8f7f8' weight='fill' />
          </span>
          <span >
            <PlayCircle size={78} color='#f8f7f8' weight='fill' />
          </span>
          <span className='mr-[3rem]'>
            <SkipForward size={23} color='#f8f7f8' weight='fill' />
          </span>
          <span>
            <Shuffle size={23} color='#f8f7f8' />
          </span>
        </div>
      </div>
    </div>
  )
}

export default MusicPlayer
