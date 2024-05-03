import supabase from "./supabase";

export async function getMusic(){
    
const { data, error } = await supabase
.from('music')
.select('*')
if (error) {
    console.error(error);
    throw new Error("music api could not be loaded");
  }

  return data;
}