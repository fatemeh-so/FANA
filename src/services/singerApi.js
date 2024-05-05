import supabase from "./supabase";

export async function getSinger (){
    
let { data, error } = await supabase
.from('singer')
.select('*')
if (error) {
    throw new Error('singers could not be loaded')
  }
  return data
}