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
    console.log(music);
  return (
    <div className='h-[85vh]' onClick={()=>handelMusicOfArtist(music)}>
      <BottomHeader />
      <h1 className='mt-[1rem] text-[2rem] text-white1 z-10'>Artist Music</h1>
      {music.map((music) => (
          <ArtistMusicChild key={music.id} music={music} />
        ))}
    </div>
  )
}

export default ArtistPage
