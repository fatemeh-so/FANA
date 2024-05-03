import BottomHeader from '../../components/BottomHeader'
import Spinner from '../../components/Spinner'
import HomeMusicChild from '../home/HomeMusicChild'
import useAlbumTrack from './useAlbumTrack'

import useAlbum from '../../features/Albums/useAlbum'
import { useParams } from 'react-router-dom'

function AlbumTrack() {
  const { data: music, isLoading } = useAlbumTrack()
  const { data: albums, isLoading: isAlbum } = useAlbum()
  const { albumId } = useParams()

  // Find the album object with id equal to albumId
  const album = albums?.find(album => album.id === parseInt(albumId));
  
  console.log(album); 
   if (isLoading || isAlbum) return <Spinner />

  return (
    <>
      <div className='h-[85vh]'>
        <h1 className='mt-[1rem] text-[2rem] text-white1 z-10'>{album ? album.title : ''}</h1>
        <BottomHeader leftContent={false} to='album' />
        {music.map((music) => (
          <HomeMusicChild key={music.id} music={music} />
        ))}
      </div>
    </>
  )
}

export default AlbumTrack
