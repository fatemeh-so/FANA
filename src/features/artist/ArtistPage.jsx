import BottomHeader from '../../components/BottomHeader'
import Spinner from '../../components/Spinner'
import HomeMusicChild from '../home/HomeMusicChild'
import useSingerMusic from './useSingerMusic'

function ArtistPage() {
    const{data:music,isLoading}=useSingerMusic()
    if(isLoading)return<Spinner/>
    console.log(music);
  return (
    <div className='h-[85vh]'>
      <BottomHeader />
      <h1 className='mt-[1rem] text-[2rem] text-white1 z-10'>Artist Music</h1>
      {music.map((music) => (
          <HomeMusicChild key={music.id} music={music} />
        ))}
    </div>
  )
}

export default ArtistPage
