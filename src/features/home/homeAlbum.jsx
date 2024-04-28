import { Button, Image, ScrollShadow } from '@nextui-org/react'
import {
  CaretLeft,
  CaretRight,
  GreaterThan,
  MusicNotesSimple,
  PlayCircle,
} from '@phosphor-icons/react'
import { useRef } from 'react';
import { useState } from 'react'
// import cover from "../../../public/coverArt/cover.jpg.webp"
export default function HomeAlbum() {
  const   trendMusic = [
    {
      id: 3,
      title: 'Lili',
      artist: 'Aaron',
      singerId: 1,
      AlbumId: 1,
      duration: '03:08',
      url: '',
      lyric: '',
      coverArt: 'https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg',
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
      coverArt:'https://nextui-docs-v2.vercel.app/images/album-cover.png',
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
    },{
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
      coverArt:'https://nextui-docs-v2.vercel.app/images/album-cover.png',
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
  ]
  const [translateX, setTranslateX] = useState(0);
  const galleryWidth = trendMusic.length * 100 + (trendMusic.length - 1) * 20; // Calculate the total width of the gallery

  const moveLeft = () => {
    const newPosition = translateX + 120; // Adjust the movement distance as needed
    setTranslateX(Math.min(0, newPosition)); // Ensure translation does not exceed 0
  };

  const moveRight = () => {
    const newPosition = translateX - 120; // Adjust the movement distance as needed
    const maxTranslate = -galleryWidth + 20; // Calculate the maximum translation to show only images
    setTranslateX(Math.max(maxTranslate, newPosition)); // Ensure translation does not exceed the maximum
  };

  return (
    <div className="relative w-full mt-5rem mt-[4rem] overflow-hidden">
      <div className="flex" style={{ transform: `translateX(${translateX}px)` }}>
        {trendMusic.map((album, index) => (
          <div key={index} className="relative flex-shrink-0 w-64 h-48 mr-4">
            <img src={album.coverArt} alt={album.title} className="w-full h-full rounded-[1rem] object-cover" />
            <div className="absolute inset-0 flex items-center justify-center  bg-opacity-50">
              <div className='text-white     overflow-hidden bg-blue1/30 absolute left-[2rem] bottom-[1rem] w-[13rem] h-[4.8rem] rounded-[1rem]  pl-[1.3rem] pt-[1rem] text-[0.6rem] '>
                <p className=' text-[0.9rem] '>Golden Hours</p>
              <div className='flex'>
                <span className='flex gap-1'>
                  <MusicNotesSimple size={10} color='#fcfcff' weight='fill' />
                  <p>music - {album.title}</p>
                </span>
                <div className='flex absolute left-[8rem] top-[0.9rem] '>
                  <span>
                    <PlayCircle size={44} color='#f6f9f7' weight='fill' />
                  </span>
                </div>
              </div>
           
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className={`rounded-r-[1rem] absolute inset-y-0 left-0 z-10 bg-black bg-opacity-50 text-white p-2 ${translateX === 0 ? 'hidden' : ''}`}
        onClick={moveLeft}
      >
        &lt;
      </button>
      <button
        className={`rounded-l-[1rem]   absolute inset-y-0 right-0 z-10 bg-black bg-opacity-50 text-white p-2 ${-translateX >= galleryWidth - 20 ? 'hidden' : ''}`}
        onClick={moveRight}
      >
        &gt;
      </button>
    </div>
  );
}