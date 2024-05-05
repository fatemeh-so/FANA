import BottomBar from '../components/BottomBar'
import BottomHeader from '../components/BottomHeader'
import Spinner from '../components/Spinner'
import MyPlaylistChild from '../features/MyPlaylist/MyPlaylistChild'
import usePlaylist from '../features/MyPlaylist/usePlaylist'
import HomeMusicChild from '../features/home/HomeMusicChild'

function MyPlaylist() {
  const { data: music, isLoading } = usePlaylist()
  if (isLoading) return <Spinner />
  return (
    <>
      <div className='h-[85vh] '>
        {/* <BottomHeader /> */}
        <BottomHeader />

        <h1 className='mt-[1rem] text-[2rem] text-white1 z-30 '>My Playlist</h1>
        <div className=' relative flex flex-col  w-[100%]'>
          {music.map((music,index) => (
            <MyPlaylistChild key={music.created_at} music={music} index={index+1} />
          ))}
        </div>
      </div>
      {/* <BottomBar /> */}
    </>
  )
}

export default MyPlaylist
