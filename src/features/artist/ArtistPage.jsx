import BottomHeader from '../../components/BottomHeader'
import Spinner from '../../components/Spinner'
import { useOpenPlayer } from '../../contexts/openPlayerContext'
import HomeMusicChild from '../home/HomeMusicChild'
import ArtistMusicChild from './ArtistMusicChild'
import useSingerMusic from './useSingerMusic'

function ArtistPage() {
    const{data:music,isLoading}=useSingerMusic()
    const{handelMusicOfArtist}=useOpenPlayer()
    if(isLoading)return<Spinner/>

  return (
    <div className='h-[85vh]' onClick={()=>handelMusicOfArtist(music)}>
      <BottomHeader />
      <h1 className='mt-[1rem] mb-[.6rem] md:text-[2rem] text-[1.8rem] text-white1 z-10'>{music[0]?.artist}</h1>
      {music.map((music) => (
          <ArtistMusicChild key={music.id} music={music} />
        ))}
    </div>
  )
}

export default ArtistPage
