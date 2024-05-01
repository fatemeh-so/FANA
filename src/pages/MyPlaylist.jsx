import BottomBar from '../components/BottomBar'
import BottomHeader from '../components/BottomHeader'
import HomeMusicChild from '../features/home/HomeMusicChild'

function MyPlaylist() {
  const musics = [
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
      coverArt: '/public/coverArt/Digital-World-album-cover-design.jpg',
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
    {
      id: 7,
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
      id: 8,
      title: 'Falling slowly',
      artist: 'Glen Hansard',
      singerId: 2,
      AlbumId: 2,
      duration: '03:08',
      url: '',
      lyric: '',
      coverArt: '/public/coverArt/Digital-World-album-cover-design.jpg',
      PlayCount: 2,
    },
    {
      id: 9,
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
      id: 10,
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

    {
      id: 11,
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
      id: 12,
      title: 'Falling slowly',
      artist: 'Glen Hansard',
      singerId: 2,
      AlbumId: 2,
      duration: '03:08',
      url: '',
      lyric: '',
      coverArt: '/public/coverArt/Digital-World-album-cover-design.jpg',
      PlayCount: 2,
    },
    {
      id: 13,
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
      id: 14,
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
    {
      id: 15,
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
      id: 16,
      title: 'Falling slowly',
      artist: 'Glen Hansard',
      singerId: 2,
      AlbumId: 2,
      duration: '03:08',
      url: '',
      lyric: '',
      coverArt: '/public/coverArt/Digital-World-album-cover-design.jpg',
      PlayCount: 2,
    },
    
  ]

  return (
    <>
      <div className='h-[85vh] '>
        {/* <BottomHeader /> */}
        <BottomHeader  sze='small' />

        <h1 className='mt-[1rem] text-[2rem] text-white1 z-30 '>My Playlist</h1>
        <div className=' relative flex flex-col  w-[100%]'>
          {musics.map((music) => (
            <HomeMusicChild key={music.id} music={music} />
          ))}
        </div>
      </div>
      {/* <BottomBar /> */}
    </>
  )
}

export default MyPlaylist
