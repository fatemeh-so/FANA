import { ScrollShadow } from '@nextui-org/react'
import HomeMusicChild from './HomeMusicChild'
import useMusic from './useMusic'
import Spinner from '../../components/Spinner'
import { useSearchParams } from 'react-router-dom'
import Filter from '../../components/Filter'
import { useOpenPlayer } from '../../contexts/openPlayerContext'
import { useEffect } from 'react'

// import { Play } from '@phosphor-icons/react'

function HomeMusic() {
  const { data: music, isLoading } = useMusic()
  const [searchParams] = useSearchParams()
  const filter = searchParams.get('genre')
  const { handelFilterMusic } = useOpenPlayer()

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

  // handelFilterMusic(filteredMusic)

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div onClick={() => handelFilterMusic(filteredMusic)} className='w-full '>
      <ScrollShadow
        hideScrollBar
        offset={14}
        orientation='horizontal'
        className='max-h-[60vh] pb-8'
      >
        <div className='flex overflow-y-auto'>
          <div className='w-full'>
            <div className='mb-4'>
              <Filter />
            </div>
            {filteredMusic.map((filteredMusicItem, index) => (
              <HomeMusicChild
                key={filteredMusicItem.id}
                music={filteredMusicItem}
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
