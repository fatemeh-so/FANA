import supabase from './supabase'

export async function getAlbum() {
  const { data, error } = await supabase.from('album').select('*')

  if (error) {
    console.error(error)
    throw new Error('album api could not be loaded')
  }

  return data
}

export async function getAlbumTrack(albumId) {
  const { data, error } = await supabase.from('music').select("*").eq('albumId',albumId)
if (error) {
  console.error(error)
  throw new Error('album track could not be loaded')
}
  return data
}
