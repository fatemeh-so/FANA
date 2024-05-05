import supabase from './supabase'

export async function addInPlaylist({ music }) {
  try {
    // Check if the music already exists in the playlist
    const { data: existingMusic, error: existingError } = await supabase
      .from('playlist')
      .select()
      .eq('title', music.title)
      .single()

    if (!existingError) {
      throw existingError
    }

    if (existingMusic) {
      // Music already exists in the playlist, return existing entry
      return existingMusic
    }

    // If music doesn't exist, proceed with insertion
    const { data, error: insertError } = await supabase
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
      .single()

    if (insertError) {
      throw insertError
    }

    return data
  } catch (error) {
    console.error(error)
    throw new Error("you've added")
  }
}

export async function getPlaylist() {
  const { data, error } = await supabase.from('playlist').select('*')
  if (error) {
    throw new Error('Playlist could not be loaded')
  }
  return data
}
export async function deleteFromPlaylist(id) {
  const { error } = await supabase.from('playlist').delete().eq('id', id)
  if (error) {
    throw new Error('Playlist could not be deleted')
  }
}
