import { ScrollShadow } from '@nextui-org/react'
import { Heart, User, UserSound } from '@phosphor-icons/react'
import { useState } from 'react'
import { useOpenPlayer } from '../../contexts/openPlayerContext'

function HomeMusicChild({ music }) {
  const { id, title, artist, coverArt, duration } = music
  const [isLike, setIsLike] = useState(false)
  const { isOpenPlayer, handelPlayMusic } = useOpenPlayer()
  function handelLike(e) {
    e.preventDefault()
    setIsLike((isLike) => !isLike)
  }
  return (
    <>
      <ScrollShadow hideScrollBar className=''>
        <div className='  relative flex flex-col w-[100%]'>
          <div
            onClick={() => handelPlayMusic(music)}
            className='flex  mt-[1rem] h-[5rem] '
          >
            <img
              src={coverArt}
              className='w-[4rem] h-[4rem] m-2 rounded-[1rem] '
            />
            <div>
              <h1 className='mt-[1.3rem] ml-3 text-[1.1rem] '>{title}</h1>
              <div className='flex text-[.7rem]  ml-3 '>
                <UserSound size={12} color='#f3e7f4' />
                <p className=' mx-3 text-gray-400'> {artist}</p>
                <p className='hidden   md:block  mr-[1rem] text-[.8rem] mt-[.rem] text-gray-400'>
                  {duration}
                </p>
              </div>
              <div className='flex absolute top-[50%]  md:right-[0%] right-[5%]'>
                <Heart
                  size={22}
                  weight={!isLike ? 'thin' : 'fill'}
                  color='#f3e7f4'
                  onClick={() => handelLike()}
                />
              </div>
            </div>
          </div>
        </div>
      </ScrollShadow>
    </>
  )
}

export default HomeMusicChild
