import { useNavigate } from 'react-router-dom';
import { useSearchFocus } from '../contexts/FocusSearchContext';
import HomeMusicChild from '../features/home/HomeMusicChild';

function SearchResult() {
  const {
    setSearchFocus,
    searchAlbumResult,
    searchResults,
    searchArtistResult,
  } = useSearchFocus();

  const navigate = useNavigate();

  function handleAlbum(id) {
    navigate(`/albums/${id}`);
    setSearchFocus(false);
  }

  function handleArtist(id) {
    navigate(`/artist/${id}`);
    setSearchFocus(false);
  }

  return (
    <div className='absolute top-[4.1rem] z-50 w-full h-[93vh] bg-gray-800 px-4 overflow-x-hidden'>
      <div className='text-white'>
        <h1 className='mt-5 text-2xl font-bold'>Music</h1>
        <div className='mt-2'>
          {searchResults.map((music) => (
            <HomeMusicChild key={music.id} music={music} heart={false} />
          ))}
        </div>

        <h1 className='mt-10 mb-5 text-2xl font-bold'>Albums</h1>
        <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-8'>
          {searchAlbumResult?.map((album) => (
            <div key={album.id} className='relative'>
              <img
                src={album.coverArt}
                onClick={() => handleAlbum(album.id)}
                alt={album.title}
                className='w-full h-full object-cover rounded-2xl shadow-lg cursor-pointer hover:opacity-80 transition duration-200'
              />
              <div className='absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white p-2 rounded-b-2xl'>
                <p className='text-sm md:text-lg xl:text-xl font-semibold truncate'>
                  {album.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        <h1 className='mt-10 mb-5 text-2xl font-bold'>Artists</h1>
        <div className='grid grid-cols-2 gap-6 md:grid-cols-3 xl:grid-cols-4'>
          {searchArtistResult?.map((singer) => (
            <div
              key={singer.id}
              className='relative h-40 w-40 md:h-60 md:w-60 xl:h-80 xl:w-80 mx-auto'
            >
              <img
                src={singer.image}
                onClick={() => handleArtist(singer.id)}
                alt={singer.nickName}
                className='w-full h-full object-cover rounded-full shadow-lg cursor-pointer hover:opacity-80 transition duration-200'
              />
              <div className='absolute bottom-2 left-0 w-full text-white text-center'>
                <p className='text-sm md:text-lg xl:text-xl font-semibold'>
                  {singer.nickName}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
