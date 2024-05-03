import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import { useOpenPlayer } from '../contexts/openPlayerContext'
import Modal1 from './Modal1'
import { useSearchFocus } from '../contexts/FocusSearchContext'
import SearchResult from './SearchResult'
function AppLayout() {
  const { isOpenPlayer } = useOpenPlayer()
  const { searchFocus } = useSearchFocus()
  const { pathname } = useLocation()
  return (
    <div className='text-white1    overflow-y-scroll bg-gradient-to-b from-gray-900 via-gray-900 to-gray900 opacity-[94%] w-[100%] h-[100vh]'>
      <div className=' absolute w-[300px] h-[300px] bg-purple-950/40 blur-3xl rounded-full -top-36 -left-36'></div>
      {isOpenPlayer ? <Modal1 /> : ''}

      <main className='h-[100vh] w-[100%] '>
        <div className='flex flex-col items-center'>
          {pathname === '/home' && <Header />}
          {searchFocus && <SearchResult />}
          <div className='h-[100%] flex flex-col   justify-between w-[90%]  '>
            <Outlet />
            {/* <BottomBar /> */}
          </div>
        </div>
      </main>
    </div>
  )
}

export default AppLayout
