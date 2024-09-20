
import HomeAlbum from '../features/home/homeAlbum'
import HomeMusic from '../features/home/HomeMusic'
import BottomBar from '../components/BottomBar'
import HomeBar from '../features/home/HomeBar'
function Home() {

  return (
    <>
      <div className='overflow-hidden'>
        <HomeAlbum />
        {/* <Filter /> */}
        <div className='flex w-[100%] mt-8'>
          <HomeMusic />
          <div className='hidden xl:block '>
            <HomeBar />
          </div>
        </div>
      </div>
      <BottomBar />
    </>
  )
}
export default Home
