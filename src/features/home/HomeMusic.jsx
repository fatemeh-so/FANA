import { ScrollShadow, User } from '@nextui-org/react'
import { Heart, Play, UserSound } from '@phosphor-icons/react'
import HomeMusicChild from './HomeMusicChild'
import useMusic from './useMusic'
import Spinner from '../../components/Spinner'
import { useSearchParams } from 'react-router-dom'
import Filter from '../../components/Filter'
import HomeBar from './HomeBar'
import { useState } from 'react'
import { useOpenPlayer } from '../../contexts/openPlayerContext'

// import { Play } from '@phosphor-icons/react'

function HomeMusic() {
  const { data: music, isLoading } = useMusic()
  const [searchParams] = useSearchParams()
  const filter = searchParams.get('genre')
  const {currentIndex} = useOpenPlayer()
console.log(currentIndex);
  let filteredMusic = []

  if (filter === 'all') {
    filteredMusic = music
  }
  // if (filter === 'trend') {
  //   filteredMusic = music?.filter((musicItem) => musicItem.genre === "pop");
  // }
  if (filter === 'pop') {
    filteredMusic = music?.filter((musicItem) => musicItem.genre === 'pop')
  }
  if (filter === 'hiphop') {
    filteredMusic = music?.filter((musicItem) => musicItem.genre === 'hiphop')
  }
  if (filter === 'rock') {
    filteredMusic = music?.filter((musicItem) => musicItem.genre === 'rock')
  }
  if (filter === 'traditional') {
    filteredMusic = music?.filter(
      (musicItem) => musicItem.genre === 'traditional'
    )
  }
  if (filter === 'instrumental') {
    filteredMusic = music?.filter(
      (musicItem) => musicItem.genre === 'instrumental'
    )
  }
  if (filter === 'alternative') {
    filteredMusic = music?.filter(
      (musicItem) => musicItem.genre === 'alternative'
    )
  }
  // console.log(filteredMusic);

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div className='overflow-y-hidden  w-full'>
      <ScrollShadow
        hideScrollBar
        offset={10}
        orientation='horizontal'
        className='  max-h-[53vh] '
      >
        <div className='flex overflow-y-scroll'>
          <div className='w-full '>
            <Filter />
            {filteredMusic.map((filteredMusicItem, index) => (
              <HomeMusicChild
                key={filteredMusicItem.id}
                music={filteredMusicItem}
                nextMusic={filteredMusic[index + currentIndex]} // Pass the next music item as a prop
                index={index + 1}
              />
            ))}
          </div>
        </div>
      </ScrollShadow>
    </div>
  )
}

export default HomeMusic
