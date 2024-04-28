import Header from '../components/Header'
import Filter from '../components/Filter'

import HomeAlbum from '../features/home/homeAlbum'
import HomeMusic from '../features/home/HomeMusic'
import Laptop from '../components/Laptop'
import BottomBar from '../components/BottomBar'
function Home() {
  return (
    <>
      <div className='h-[85vh]  overflow-x-hidden'>
        {/* <Header /> */}{' '}
        {/* <div className='hidden xl:block  xl:flex  xl:justify-between'> */}
        <HomeAlbum />
        <Filter />
        <HomeMusic />
        {/* <Laptop /> */}
        {/* </div> */}
      </div>{' '}
      <BottomBar />
    </>
  )
}
export default Home
