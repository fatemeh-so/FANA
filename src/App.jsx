import { Toaster } from 'react-hot-toast'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import GlobalStyles from './style/GlobalStyles'
import Home from './pages/Home'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { NextUIProvider } from '@nextui-org/react'
import AppLayout from './components/AppLayout'
import MyPlaylist from './pages/MyPlaylist'
import PageNotFound from './pages/PageNotFound'
import Albums from './pages/Albums'
// import { DeleteHeaderProvider } from './contexts/deleteHeaderContext'
import { OpenPlayerProvider } from './contexts/openPlayerContext'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import { OpenAlbumProvider } from './contexts/openAlbumContext'
import { FocusSearchProvider } from './contexts/FocusSearchContext'
import AlbumTrack from './features/Albums/AlbumTrack'
import { MusicPLayerProvider } from './contexts/musicPLayerContext'
import Artist from './pages/Artist'
import ArtistPage from './features/artist/ArtistPage'
import ProtectedRoute from './components/ProtectedRoute'
import { MyMusicPLayerProvider } from './contexts/MyMusicPLayerContext '
// import SignUp from './features/user/SignUp'
function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // staleTime: 60 * 1000,
        staleTime: 0,
      },
    },
  })
  return (
    <>
      <NextUIProvider className='dark'>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <OpenPlayerProvider>
            <MyMusicPLayerProvider>
              <OpenAlbumProvider>
                <FocusSearchProvider>
                  <MusicPLayerProvider>
                    <GlobalStyles />
                    <BrowserRouter>
                      <Routes>
                        <Route element={<AppLayout />}>
                          <Route
                            index
                            element={<Navigate replace to='home' />}
                          />
                          <Route path='home' element={<Home />} />
                          <Route path='albums' element={<Albums />} />
                          <Route
                            path='Playlist'
                            element={
                              <ProtectedRoute>
                                <MyPlaylist />
                              </ProtectedRoute>
                            }
                          />
                          <Route path='artist' element={<Artist />} />
                          <Route path='*' element={<PageNotFound />} />
                          <Route path='signup' element={<SignUp />} />
                          <Route path='login' element={<Login />} />
                          <Route
                            path='/albums/:albumId'
                            element={<AlbumTrack />}
                          />
                          <Route
                            path='/artist/:artistId'
                            element={<ArtistPage />}
                          />
                        </Route>
                      </Routes>
                    </BrowserRouter>{' '}
                  </MusicPLayerProvider>
                </FocusSearchProvider>
              </OpenAlbumProvider>
            </MyMusicPLayerProvider>{' '}
          </OpenPlayerProvider>

          <Toaster
            position='top-center'
            gutter={12}
            containerStyle={{ margin: '8px' }}
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: {
                duration: 5000,
              },
              style: {
                fontSize: '16px',
                maxWidth: '500px',
                padding: '16px 24px',
                backgroundColor: 'var(--color-grey-0)',
                color: 'var(--color-grey-700)',
              },
            }}
          />
        </QueryClientProvider>
      </NextUIProvider>
    </>
  )
}

export default App
