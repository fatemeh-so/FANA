import supabase from './supabase'

export async function addInPlaylist({ music }) {
  const { data, error } = await supabase
    .from('playlist')
    .insert([
      {
        created_at: music.created_at,
        userId: null,
        playlistName: null,
        genre: music.genre,
        coverArt: music.coverArt,
        title: music.title,
        artist: music.artist,
        duration: music.duration,
        url: music.url,
      },
    ])
    .select()
  if (error) {
    console.error(error)
    throw new Error('playlist could not be added')
  }
  return data
}
export async function getPlaylist() {
  let { data, error } = await supabase.from('playlist').select('*')
  if (error) {
    console.error(error)
    throw new Error('playlist could not be loaded')
  }
  return data
}
