import BottomHeader from '../../components/BottomHeader'
import HomeMusicChild from '../home/HomeMusicChild'
const music = [
    {
      id: 3,
      title: 'Lili',
      artist: 'Aaron',
      singerId: 1,
      AlbumId: 1,
      duration: '03:08',
      url: '',
      lyric: '',
      coverArt: '/public/coverArt/cover.jpg.webp',
      PlayCount: 1,
    },
    {
      id: 4,
      title: 'Falling slowly',
      artist: 'Glen Hansard',
      singerId: 2,
      AlbumId: 2,
      duration: '03:08',
      url: '',
      lyric: '',
      coverArt: 'https://nextui-docs-v2.vercel.app/images/album-cover.png',
      PlayCount: 2,
    },
    {
      id: 5,
      title: 'Caving in',
      artist: 'Syml',
      singerId: 3,
      AlbumId: 3,
      duration: '03:08',
      url: '',
      lyric: '',
      coverArt: '/public/coverArt/ea1f64668a0af149a3277db9e9e54824.jpg',
      PlayCount: 2,
    },
    {
      id: 6,
      title: 'love story',
      artist: 'Taylor Swift',
      singerId: 3,
      AlbumId: 3,
      duration: '03:08',
      url: '',
      lyric: '',
      coverArt: '/public/coverArt/retro-synthwave-artwork.jpg',
      PlayCount: 2,
    },
  
  ]
function AlbumTrack() {
  return (
    // <div>
    //     <h1 className='my-4 text-[2rem] '>Music</h1>
    //     <div className='max-w-[100%]  max-h-[58vh]'>
    //       {musics.map((music) => (
    //         <HomeMusicChild key={music.id} music={music} />
    //       ))}
    //     </div>
    // </div>
    <>
      <div className='h-[85vh]'>
        <BottomHeader leftContent={false} to="album" />
        {music.map((music) => (
          <HomeMusicChild key={music.id} music={music} />
        ))}
      </div>
    </>
  )
}

export default AlbumTrack
