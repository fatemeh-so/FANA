import supabase from './supabase'

export async function getMusic() {
  const { data, error } = await supabase.from('music').select('*')
  if (error) {
    console.error(error)
    throw new Error('music api could not be loaded')
  }

  return data
}

export async function getSingerMusic(artistId) {
  const { data, error } = await supabase
    .from('music')
    .select('*')
    .eq('singerId', artistId)
  if (error) {
    console.error(error)
    throw new Error('artist music could not be loaded')
  }
  return data
}
