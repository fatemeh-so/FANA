import Album from '../features/Albums/Album'
import BottomBar from '../components/BottomBar'
import useAlbum from '../features/Albums/useAlbum'
import Spinner from '../components/Spinner'
import BottomHeader from '../components/BottomHeader'

function Albums() {
  const { data: albums, isLoading } = useAlbum()
  if (isLoading) {
    return <Spinner />
  }
  return (
    <>
  
      <div className='h-[88vh]  '>  <BottomHeader icon="user"/>
        <Album albums={albums} />
      </div>{' '}
      <BottomBar />
    </>
  )
}

export default Albums
