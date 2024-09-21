import BottomBar from '../components/BottomBar'
import Spinner from '../components/Spinner'
import { useOpenPlayer } from '../contexts/openPlayerContext'
import MyPlaylistChild from '../features/MyPlaylist/MyPlaylistChild'
import usePlaylist from '../features/MyPlaylist/usePlaylist'

function MyPlaylist() {
  const { data: music, isLoading } = usePlaylist()
  const {handelFilterMusic}=useOpenPlayer()
  if (isLoading) return <Spinner />
  return (
    <>
      <div className='h-[88vh] '>
        <h1 className='pt-8 pb-4 pl-2 text-[2rem] text-white1 z-30'>My Playlist</h1>
        <div  onClick={()=>handelFilterMusic(music)} className=' relative flex flex-col  w-[100%]'>
          {music.map((music,index) => (
            <MyPlaylistChild key={music.created_at} music={music} index={index+1} />
          ))}
        </div>
      </div>
      <BottomBar />
    </>
  )
}

export default MyPlaylist
