import { ScrollShadow, User } from '@nextui-org/react'
import { Heart, Play, UserSound } from '@phosphor-icons/react'
import HomeMusicChild from './HomeMusicChild'
import useMusic from './useMusic'
import Spinner from '../../components/Spinner'
import { useSearchParams } from 'react-router-dom'

// import { Play } from '@phosphor-icons/react'

function HomeMusic() {
  const { data: music, isLoading } = useMusic()
  const [searchParams] = useSearchParams()
  const filter = searchParams.get('genre')
  let filteredMusic = [];

  if (filter === 'all') {
    filteredMusic = music;
  }
  // if (filter === 'trend') {
  //   filteredMusic = music?.filter((musicItem) => musicItem.genre === "pop");
  // }
  if (filter === 'pop') {
    filteredMusic = music?.filter((musicItem) => musicItem.genre === "pop");
  }
  if (filter === 'hiphop') {
    filteredMusic = music?.filter((musicItem) => musicItem.genre === "hiphop");
  }
  if (filter === 'rock') {
    filteredMusic = music?.filter((musicItem) => musicItem.genre === "rock");
  }
  if (filter === 'traditional') {
    filteredMusic = music?.filter((musicItem) => musicItem.genre === "traditional");
  }
  if (filter === 'instrumental') {
    filteredMusic = music?.filter((musicItem) => musicItem.genre === "instrumental");
  }
  if (filter === 'alternative') {
    filteredMusic = music?.filter((musicItem) => musicItem.genre === "alternative");
  }
  // console.log(filteredMusic);
  
  if (isLoading) {
    return <Spinner />;
  }
  
  return (
    <>
      <ScrollShadow
        hideScrollBar
        offset={100}
        orientation='horizontal'
        className='max-w-[100%]  max-h-[53vh]'
      >
        {filteredMusic.map((filteredMusicItem) => (
          <HomeMusicChild key={filteredMusicItem.id} music={filteredMusicItem} />
        ))}
      </ScrollShadow>
    </>
  );
  
}

export default HomeMusic
