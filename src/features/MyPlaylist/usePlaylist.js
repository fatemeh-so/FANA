import { useQuery } from "@tanstack/react-query";
import { getPlaylist } from "../../services/playlistApi";

export default function usePlaylist(){
    const{data,isLoading}=useQuery({
        queryKey:["playlist"],
        queryFn:getPlaylist
    })
    return{data,isLoading}
}